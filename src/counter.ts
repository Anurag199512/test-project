function counter(initialValue = 0) {
  let baseValue = initialValue;

  const printValue = function() {
    console.log(baseValue)
  }

  const incrementValue =  function() {
    baseValue = baseValue + 1;
  }

  return [printValue, incrementValue]
}

const [getA, nextA] = counter(1);
getA(); // 1
nextA();

getA(); // 2

const [getB, nextB] = counter(10);
nextB();
getA(); // 2
getB(); // 11
nextA();
getA(); // 3
getB(); // 11


const [getC, nextC] = counter();
getC()
nextC()
getC()
getB()
getA()