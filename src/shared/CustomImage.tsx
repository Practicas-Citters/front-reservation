import React from 'react'

interface Props
{
    src:string,
    alt:string,
    className?:string

}

export const CustomImage = (input:Props) => {
  return (
    <div>
         <img src={input.src} alt={input.alt} className={input.className} />
    </div>
  )
}
