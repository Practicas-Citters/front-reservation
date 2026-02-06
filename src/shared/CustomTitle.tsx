import React from 'react'

interface Props
{
  text:string,
  className?:string
}

export const CustomTitle = (input:Props) => {
  return (
    <div>
      <h2 className={input.className}>{input.text}</h2>
    </div>
  )
}
