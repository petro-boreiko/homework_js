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

let swap = (array, i, k) => {
   let temp = array[i]
   array[i] = array[k]
   array[k] = temp
}
