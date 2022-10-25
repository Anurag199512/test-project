import axios from 'axios';
import { ApiResponse, Episode, Character } from './interface';
const baseUrl: string = 'https://rickandmortyapi.com/api/';

function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

async function fetchAndRetryIfNecessary(url: string): Promise<Character> {
  try {
    const response = await (await axios.get(url)).data;
  
    return response as unknown as Character;
  } catch (e) {
    if (e.response?.status === 429) {
      await sleep(1000);
      return fetchAndRetryIfNecessary(url);
    }
  }
}

async function findAllEpisodes() {
  console.time();
  let apiUrlForEpisodes: string | null = baseUrl + '/episode';
  const episodes: Episode[] = [];

  do {
    const response: ApiResponse<Episode> = await axios.get(apiUrlForEpisodes);
    apiUrlForEpisodes = response.data.info.next;

    for (const episode of response.data.results) {
      const characters: Character[] = [];
      console.log('Combining data for episode:', episode.name);

      for (const character of episode.characters) {
        try {
          /* 
            function fetchAndRetryIfNecessary
            added a rate limiter to avoid 429 from the external server with a default wait period of 1 second
            as there was no retry-after value from the external api.
          */
          if (typeof character === 'string') {
            const characterResponse: Character = await fetchAndRetryIfNecessary(character);
  
            characters.push(characterResponse);
          }
        } catch (e) {
          console.error('Error in character api', e);
        }
      }

      episode.characters = characters
      episodes.push(episode); 
    }
  } while (apiUrlForEpisodes !== null)
  console.timeEnd();

  // normal output time taken is: 8:35.207 (m:ss.mmm)
  console.log('Final data from all pages:', episodes);
}

async function findEpisodeOnPage(page: number) {
  const apiUrl = `${baseUrl}/episode?page=${page}`;
  const episodes: Episode[] = [];

  const response: ApiResponse<Episode> = await axios.get(apiUrl);

  for (const episode of response.data.results) {
    const characters: Character[] = [];
    console.log('Combining data for episode:', episode.name);

    for (const character of episode.characters) {
      try {
        /* 
          function fetchAndRetryIfNecessary
          added a rate limiter to avoid 429 from the external server with a default wait period of 1 second
          as there was no retry-after value from the external api.
        */
        if (typeof character === 'string') {
          const characterResponse: Character = await fetchAndRetryIfNecessary(character);

          characters.push(characterResponse);
        }
      } catch (e) {
        console.error('Error in character api', e);
      }
    }

    episode.characters = characters
    episodes.push(episode); 
  }
  console.log('Final Response:', episodes[0].characters, episodes[0].characters[0]);
}

findAllEpisodes();
// findEpisodeOnPage(1)