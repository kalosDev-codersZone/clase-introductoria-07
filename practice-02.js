function sumManyNumbers(m) {
  console.log("theNumbers");
  if (m === 5) {
    console.log("fin del programa");
  } else {
    sumManyNumbers(m + 1);
  }
}
sumManyNumbers(1);
