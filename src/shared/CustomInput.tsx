import React from 'react'

interface Props
{
    labelText:string,
    placeholder?:string,
    inputType:string,
    inputId:string,
    inputName:string,
    isRequired:boolean,
    className?:string
}

export const CustomInput = (input:Props) => {
  return (
    <div>
        <label htmlFor={input.inputId}>{input.labelText}</label> <br/>
        <input type={input.inputType} 
            id={input.inputId} 
            name={input.inputName} 
            placeholder={input.placeholder} 
            required={input.isRequired} 
            className={input.className}/>
    </div>
  )
}
