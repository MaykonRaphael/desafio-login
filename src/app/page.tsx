'use client'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MdEmail, MdLock } from 'react-icons/md'

import logo from '../assets/logo.svg'
import barberImage from '../assets/background-image.png'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

const schema = yup
  .object({
    email: yup.string().email('E-mail invalido').required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('Campo obrigatório'),
  })
  .required()

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const onSubmit = handleSubmit((data) => console.log(data))
  console.log(isValid)

  return (
    <main className="flex min-h-screen bg-background">
      <div className="flex flex-1 flex-col items-center justify-center gap-20">
        <Image alt="Logo GoBarber" src={logo} />
        <div className="flex flex-col items-center gap-2">
          <h2 className="mb-4 text-2xl text-white">Faça seu login</h2>
          <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <Input
              name="email"
              placeholder="E-mail"
              icon={<MdEmail color="#666360" size={20} />}
              control={control}
              type="text"
              errorMessage={errors?.email?.message}
            />
            <Input
              name="password"
              placeholder="Senha"
              icon={<MdLock color="#666360" size={20} />}
              control={control}
              type="password"
              errorMessage={errors?.password?.message}
            />
            <Button title="Entrar" disabled={isValid} />
          </form>
          <span className="mt-4">Esqueci minha senha</span>
        </div>
        <span className="text-center text-orange hover:cursor-pointer hover:underline">
          Criar conta
        </span>
      </div>
      <div className="h-screen">
        <Image
          alt="Barber Picture"
          src={barberImage}
          className="max-h-screen w-full"
        />
      </div>
    </main>
  )
}
