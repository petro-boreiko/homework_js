'use stirct'

function randomNums(minNum, maxNum, countNum) {
   let randomNumbers = []

   for (let i = 0; i < countNum; i++) {
      let randomNumber =
         minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
      randomNumbers.push(randomNumber)
   }

   return randomNumbers
}
