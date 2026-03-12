import React from 'react'

interface Props
{
  text:string,
  className?:string
}

export const CustomSubtitle = (input:Props) => {
  return (
    <div>
      <h3 className={input.className}>{input.text}</h3>
    </div>
  )
}
