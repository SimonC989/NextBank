import React from 'react'

export interface IButtonProps {
  styles?: string,
}

const Button = ({ styles }: IButtonProps) => {
  return (
    <button type='button' className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg`}>
      Get Started
    </button>
  )
}

export default Button