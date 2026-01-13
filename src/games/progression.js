import { ROUNDS_COUNTER } from '../index.js'

import random from '../helpers/random.js'

export default () => {
  const LENGHT_PROGRESSION = 10
  const gameTask = 'What number is missing in the progression?'
  const gameData = []
  let hiddenNumberIndex
  let correctAnswer
  let question
  let progression

  for (let i = 0; i < ROUNDS_COUNTER; i += 1) {
    progression = createProgression(LENGHT_PROGRESSION)
    hiddenNumberIndex = random(0, LENGHT_PROGRESSION - 1)
    correctAnswer = progression[hiddenNumberIndex]
    progression[hiddenNumberIndex] = '..'
    question = progression.join(' ')
    gameData.push({ question, correctAnswer })
  }
  return [gameTask, gameData]
}

const createProgression = (LENGHT_PROGRESSION) => {
  const STEP = 3
  const MIN_VALUE = 1
  const MAX_VALUE = 10
  let firstDigitOfProgression
  let progressionStep

  firstDigitOfProgression = random(MIN_VALUE, MAX_VALUE)
  progressionStep = random(1, STEP)

  let progression = []

  for (let i = 0; i < LENGHT_PROGRESSION; i += 1) {
    progression.push(firstDigitOfProgression + progressionStep * i)
  }

  return progression
}
