import './index.scss'
import React, { FC } from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
