import { Switch } from '@mui/material'
import React, { useState } from 'react'

const UseStateSwitch = () => {
  const [text, setText] = useState('Off')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.checked ? 'On' : 'Off')
  }
  return (
    <>
      <Switch onChange={handleChange}></Switch>
      <p>{text}</p>
    </>
  )
}

export default UseStateSwitch
