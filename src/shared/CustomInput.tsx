import { Link } from "react-router";


interface Props {
  labelText: string,
  placeholder?: string,
  inputType: string,
  inputId: string,
  inputName: string,
  isRequired: boolean,
  value: string | undefined,
  disabled?: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
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
          <Link to={input.labelLink.href} className={input.labelLink.className}>
            {input.labelLink.text}
          </Link>
        )}
      </div>
      <input type={input.inputType}
        id={input.inputId}
        name={input.inputName}
        value={input.value}
        onChange={input.onChange}
        placeholder={input.placeholder}
        required={input.isRequired}
        className={input.className}
        disabled={input.disabled} />
    </div>
  )
}
