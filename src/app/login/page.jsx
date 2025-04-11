'use client'
import Image from "next/image";
import ico04 from "/public/assets/ico03.png";
import { useRouter } from 'next/navigation'


function Login( ) {
    /* To do - Conectar a login page na API e validar acesso ao Dashboard */
    const router = useRouter()
    async function handleSubmit(event) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
     
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
        /* response.status === 404" Apenas para teste do funcionamento do router */
        if (response.ok || response.status === 404) {
          router.push('/dashboard')
        } else {
            console.error('Login failed')
        }
      }


    return ( 
            <>
              <div className="text-black flex lg:flex-row flex-col lg:justify-around lg:items-center lg:ml-52 my-5 lg:my-30 px-5">    
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-5 lg:w-[400px] md:w-[596px] w-full  order-2">
                      <h1 className="text-black text-[32px] font-bold mb-10">Faça seu login</h1>
                      <label htmlFor="" className="font-medium">Usuário:</label>
                      <input type="text" placeholder="Usuário" className="bg-white p-3 rounded-2xl" required />
                      <label htmlFor="" className="font-medium">Senha</label>
                      <input type="password" placeholder="Digite sua senha" className="bg-white p-3 rounded-2xl"name="" id="" required/>
                      <button type="submit" className="bg-[#2B9EED] mt-4 w-fit px-10 rounded-3xl p-2 text-white font-semibold hover:cursor-pointer">Fazer Login</button>
                  </form>
                  <div className="order-3 justify-center flex my-5">
                      <Image src={ico04}></Image>
                  </div>
              </div>
            </> );
}

export default Login;