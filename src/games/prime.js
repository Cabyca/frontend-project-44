import { ROUNDS_COUNTER } from '../index.js'

import random from '../helpers/random.js'

export default () => {
  const MIN_VALUE = 1
  const MAX_VALUE = 25
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const gameData = []
  let correctAnswer
  let question

  for (let i = 0; i < ROUNDS_COUNTER; i += 1) {
    question = random(MIN_VALUE, MAX_VALUE)
    correctAnswer = isSimple(question) ? 'yes' : 'no'
    gameData.push({ question, correctAnswer })
  }
  return [gameTask, gameData]
}

const isSimple = (question) => {
  let sqrtValue

  if (question < 2) {
    return false
  }

  sqrtValue = Math.sqrt(question)

  for (let i = 2; i <= sqrtValue; i += 1) {
    if (question % i === 0) {
      return false
    }
  }
  return true
}
