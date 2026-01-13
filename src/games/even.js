import { ROUNDS_COUNTER } from '../index.js'

import random from '../helpers/random.js'

export default () => {
  const MIN_VALUE = 1
  const MAX_VALUE = 100
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".'
  const gameData = []
  let question
  let correctAnswer

  for (let i = 0; i < ROUNDS_COUNTER; i += 1) {
    question = random(MIN_VALUE, MAX_VALUE)
    correctAnswer = isEven(question) ? 'yes' : 'no'
    gameData.push({ question, correctAnswer })
  }

  return [gameTask, gameData]
}

const isEven = (question) => {
  return question % 2 === 0
}
