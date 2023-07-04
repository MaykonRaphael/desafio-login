import { InputHTMLAttributes, ReactNode } from 'react'
import { Control, Controller } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  placeholder: string
  name: string
  type: string
  control: Control<any, any>
  errorMessage?: string
}
export function Input({
  icon,
  name,
  placeholder,
  control,
  type,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <>
      {errorMessage ? (
        <p className="text-sm text-error">{errorMessage}</p>
      ) : null}
      <div className="flex items-center gap-2 rounded bg-input px-2 py-2">
        {icon}
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              {...rest}
              {...field}
              type={type}
              placeholder={placeholder}
              className="bg-transparent text-white outline-none placeholder:text-grayHard"
            />
          )}
        />
      </div>
    </>
  )
}
