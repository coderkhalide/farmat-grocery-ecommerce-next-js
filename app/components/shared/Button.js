import React from 'react'

const Button = ({ className, title, ...rest }) => {
  return (
    <button className={`bg-primary font-bold px-6 rounded ${className}`} {...rest}>{title}</button>
  )
}

export default Button