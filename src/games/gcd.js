import { ROUNDS_COUNTER } from '../index.js'

import random from '../helpers/random.js'

export default () => {
  const MIN_VALUE = 1
  const MAX_VALUE = 25
  const gameTask = 'Find the greatest common divisor of given numbers.'
  const gameData = []
  let randomValue1
  let randomValue2
  let correctAnswer
  let question

  for (let i = 0; i < ROUNDS_COUNTER; i += 1) {
    randomValue1 = random(MIN_VALUE, MAX_VALUE)
    randomValue2 = random(MIN_VALUE, MAX_VALUE)
    question = `${randomValue1} ${randomValue2}`
    correctAnswer = findTheGreatestDivisor(randomValue1, randomValue2)
    gameData.push({ question, correctAnswer })
  }

  return [gameTask, gameData]
}

const findTheGreatestDivisor = (randomValue1, randomValue2) => {
  let minNumber = Math.min(randomValue1, randomValue2)
  let greatestDivisor = 0

  while (true) {
    if (randomValue1 % minNumber === 0 && randomValue2 % minNumber === 0) {
      greatestDivisor = minNumber
      return greatestDivisor
    }
    minNumber -= 1
  }
}
