'use client'
import Image from "next/image";
import ico04 from "/public/assets/ico03.png";
import { useRouter } from 'next/navigation'
import { useState, useTransition } from "react";


function Login( ) {
  const router = useRouter()
  const [ error, setError ] = useState(null)
  const [isPending, startTransition ] = useTransition()

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
  
    startTransition(async () => {
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: formData.get('username'),
            password: formData.get('password'),
          })
        })
  
        if (!res.ok) throw new Error('Login failed')
  
        router.push('/dashboard')
      } catch (error) {
        setError('Usuário ou senha inválidos')
      }
    })
  }

  return ( 
  <>
    <div className="text-black flex lg:flex-row flex-col lg:justify-around lg:items-center lg:ml-52 my-5 lg:my-30 px-5">    
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-5 lg:w-[400px] md:w-[596px] w-full  order-2">
        <h1 className="text-black text-[32px] font-bold mb-10">Faça seu login</h1>
        {error && <p className="text-red-600">{error}</p>}
        <label htmlFor="" className="font-medium">Usuário:</label>
        <input type="text" name="username" placeholder="Usuário" className="bg-white p-3 rounded-2xl" required />
        <label htmlFor="" className="font-medium">Senha</label>
        <input type="password" name="password" placeholder="Digite sua senha" className="bg-white p-3 rounded-2xl" id="" required/>
        <button 
          type="submit" 
          className="bg-[#2B9EED] mt-4 w-fit px-10 rounded-3xl p-2 text-white font-semibold hover:cursor-pointer"
          disabled={isPending}
        >
          {isPending ? 'Entrando...' : 'Fazer Login'}
        </button>
      </form>
      <div className="order-3 justify-center flex my-5">
        <Image alt='patas' src={ico04}></Image>
      </div>
      </div>
  </> );
}

export default Login;