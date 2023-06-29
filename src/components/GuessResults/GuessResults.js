import React from 'react'

import Guess from '../Guess/Guess'

function GuessResults ({ answer, guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess, idx) => (
        <Guess key={idx} guess={guess} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResults
