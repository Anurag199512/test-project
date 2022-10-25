## Project setup and testing instruction


1. First install all the project dependencies using `npm install` in project root. 

    If typescript is not installed on your system then kindly install dev dependencies as well using 

        npm install --save-dev

2. Generate the build using the tsc compiler to generate the corresponding javascript file using below script:

        npm run build



<br>

### Testing:
 <br> 

 ### TASK 1:

 Run the below script:
 <br>

    npm run test-rick-morty

  - You can run the function  `findAllEpisodes` which will fetch all the episodes and then the additional data for all the characters present in each episode and append the data inside a new key (added on episode object names `characterInfo`). To fetch and combine all the data time taken is around 8.5 minutes.

  - Or to test out the flow you can query just a single page of episodes using the function `findEpisodeOnPage`.


 ### TASK 2:

 - Run the script present below to see output on console.

        npm run test-counter


### TASK 3 Services Interaction:

  - What options do we have to establish such communication? 
        
        1. We can use socket to communicate between the 2 services.
        2. We can use a messaging queue to communicate.
        3. We can follow REST architecture for communication.

  - For each option describe what are the pros and cons of this solution

        1. Socket:
            Pros:
                - Promotes more active 2 way communication.
                - A connection once made is kept open between 2 ends till it is closed explicitly.

            Cons:
                - No caching available.

        2. Messaging Queue:
            Pros:
                - Higher accuracy and tolerance
            Cons:
                - Discrepancies due to queues being asynchronous.
        
        3. REST
            Pros:
                - Stateless
            Cons:
                - Need additional mechanism in place for error handling and higher accuracy.
            
  - For each option describe what are the cases the solution fits best?

        Socket => Best used for application where a real time communication is required.

        Messaging Queue => Some kind of platform heavenly relying on email mechanism or messaging.

        REST => General Web/Mobile app

### TASK 4: Added model filed using Sequelize ORM

    - Inside src/models directory