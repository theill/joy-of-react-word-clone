import React from 'react'

import { sample, range } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import HappyBanner from '../HappyBanner/HappyBanner'
import SadBanner from '../SadBanner/SadBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game () {
  const [guesses, setGuesses] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map(x => '     ')
  )
  const [numberOfGuesses, setNumberOfGuesses] = React.useState(0)
  const [gameState, setGameState] = React.useState('playing') // or 'happy', 'sad'

  const handleGuess = guess => {
    const newGuesses = [...guesses]
    newGuesses[numberOfGuesses] = guess
    setGuesses(newGuesses)

    setNumberOfGuesses(numberOfGuesses + 1)

    if (guess === answer) {
      setGameState('happy')
    } else if (numberOfGuesses + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameState('sad')
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput isDisabled={gameState !== 'playing'} onGuess={handleGuess} />
      {gameState === 'happy' && <HappyBanner numberOfGuesses={numberOfGuesses} />}
      {gameState === 'sad' && <SadBanner answer={answer} />}
    </>
  )
}

export default Game
