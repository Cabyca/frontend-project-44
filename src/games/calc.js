import { engine, ROUNDS_COUNTER } from '../index.js'

import random from '../helpers/random.js'

export default () => {
  const SINGS = ['+', '-', '*']
  const MIN_VALUE = 1
  const MAX_VALUE = 20
  const gameTask = 'What is the result of the expression?'
  const gameData = []
  let randomOperator
  let randomValue1
  let randomValue2
  let correctAnswer
  let result
  let question

  for (let i = 0; i < ROUNDS_COUNTER; i += 1) {
    randomOperator = SINGS[random(0, 2)]
    randomValue1 = random(MIN_VALUE, MAX_VALUE)
    randomValue2 = random(MIN_VALUE, MAX_VALUE)
    switch (randomOperator) {
      case '-':
        result = randomValue1 - randomValue2
        break
      case '+':
        result = randomValue1 + randomValue2
        break
      case '*':
        result = randomValue1 * randomValue2
        break
      default:
        return false
    }
    question = `${randomValue1} ${randomOperator} ${randomValue2}`
    correctAnswer = result
    gameData.push({ question, correctAnswer })
  }
  engine(gameTask, gameData)
}
