import { Loader } from '@mantine/core'
import React from 'react'

const Button = ({ className, title, loading, ...rest }) => {
  return (
    <button className={`bg-primary font-bold px-6 rounded ${className}`} {...rest}>
      {loading ? (<Loader color="gray" size="sm" className="mx-auto" />) : title}
    </button>
  )
}

export default Button