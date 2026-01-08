import { engine, ROUNDS_COUNTER } from '../index.js'

export default () => {
  const MIN_VALUE = 1
  const MAX_VALUE = 100
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".'
  const gameData = []
  let randomNumber
  let correctAnswer

  for (let i = 0; i < ROUNDS_COUNTER; i += 1) {
    randomNumber = random(MIN_VALUE, MAX_VALUE)
    correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
    gameData.push({ randomNumber, correctAnswer })
  }

  engine(gameTask, gameData)
}

const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const isEven = (questions) => {
  return questions % 2 === 0
}
