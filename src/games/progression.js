import { engine, ROUNDS_COUNTER } from '../index.js'

import random from '../helpers/random.js'

export default () => {
  const LENGHT_PROGRESSION = 10;
  const STEP = 3;
  const MIN_VALUE = 1
  const MAX_VALUE = 10
  const gameTask = 'What is number result of the expression?'
  const gameData = []
  let firstDigitOfProgression
  let progressionStep
  let iddenNumberIndex
  let correctAnswer
  let question

  for (let i = 0; i < ROUNDS_COUNTER; i += 1) {
    firstDigitOfProgression = random(MIN_VALUE, MAX_VALUE)
    progressionStep = random(1, STEP)
    hiddenNumberIndex = random(0, LENGHT_PROGRESSION - 1)
    

    
    question = `${randomValue1} ${randomOperator} ${randomValue2}`
    correctAnswer = result
    gameData.push({ question, correctAnswer })
  }
  console.log(gameData)
  engine(gameTask, gameData)
}

Подсказки
Чтобы создать последовательность, лучше сделать отдельную функцию. Она будет рассчитывать числа по такой формуле::

currentElement = start + index * step

function progression()
{
    $gameTask = 'What number is missing in the progression?';
    
    $gameData = [];

    for ($i = 0; $i < ROUNDS_COUNTER; $i += 1) {
        $firstDigitOfProgression = mt_rand(MIN_VALUE, MAX_VALUE);
        $progressionStep = mt_rand(1, STEP);
        $hiddenNumberIndex = mt_rand(0, LENGHT_PROGRESSION - 1);
        
        for ($j = 0; $j < LENGHT_PROGRESSION; $j += 1) {
            $progressions[$j] = $firstDigitOfProgression + $progressionStep * $j;
        }
        
        $correctAnswers = (string) $progressions[$hiddenNumberIndex];
        $progressions[$hiddenNumberIndex] = '..';
        $questions = implode($progressions, ' ');
        $gameData[$questions] = $correctAnswers;
    }
    engine($gameTask, $gameData);
}