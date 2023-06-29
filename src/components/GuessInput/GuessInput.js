import React from 'react'

function GuessInput ({ isDisabled, onGuess }) {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log({ guess })
    onGuess(guess)

    setGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        minLength={5}
        maxLength={5}
        disabled={isDisabled}
        pattern='[A-Za-z]{5}'
        onChange={e => setGuess(e.currentTarget.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
