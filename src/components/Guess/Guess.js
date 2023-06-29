import React from 'react'

import { checkGuess } from '../../game-helpers'

function Guess ({ guess, answer }) {
  const characters =
    guess.trim().length === 0 ? [{}, {}, {}, {}, {}] : checkGuess(guess, answer)

  return (
    <p className='guess'>
      {characters.map((character, idx) => (
        <span key={idx} className={`cell ${character.status}`}>
          {character.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
