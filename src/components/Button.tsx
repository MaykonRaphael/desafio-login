import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  disabled: boolean
}
export function Button({ title, disabled = true }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`mt-4 cursor-pointer rounded ${
        disabled ? '' : 'cursor-not-allowed opacity-70'
      } bg-orange py-1 text-center font-bold text-background`}
    >
      <span>{title}</span>
    </button>
  )
}
