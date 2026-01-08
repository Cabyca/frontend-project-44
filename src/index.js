import readlineSync from 'readline-sync'

const ROUNDS_COUNTER = 3

const engine = (gameTask, gameData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameTask)

  let gamerAnswer

  for (const item of gameData) {
    const { question, correctAnswer } = item
    console.log(`Question:  ${question}`)
    gamerAnswer = readlineSync.question('Your answer: ')
    console.log(typeof gamerAnswer, typeof correctAnswer)
    if (`${gamerAnswer}` !== `${correctAnswer}`) {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}

export { engine, ROUNDS_COUNTER }
