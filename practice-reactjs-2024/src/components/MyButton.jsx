import React from 'react'

function MyButton() {

  function handleClick(){
    alert("Your clicked me!")
  }
  return (
    <button onClick={handleClick}>MyButton</button>

  )
}

export default MyButton