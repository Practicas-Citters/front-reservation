

interface Props {
  labelText: string,
  placeholder?: string,
  inputType: string,
  inputId: string,
  inputName: string,
  isRequired: boolean,
  className?: string,
  labelLink?: {
    text: string;
    href: string;
    className?: string;
  }
}

export const CustomInput = (input: Props) => {
  return (
    <div className="input-field-group">
      <div className="label-row">
        <label htmlFor={input.inputId}>{input.labelText}</label>
        {input.labelLink && (
          <a href={input.labelLink.href} className={input.labelLink.className}>
            {input.labelLink.text}
          </a>
        )}
      </div>
      <input type={input.inputType}
        id={input.inputId}
        name={input.inputName}
        placeholder={input.placeholder}
        required={input.isRequired}
        className={input.className} />
    </div>
  )
}
