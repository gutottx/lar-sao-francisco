import Image from "next/image";
import ico04 from "/public/assets/ico03.png";

function Login() {
    return ( <>

            <div className="text-black flex lg:flex-row flex-col lg:justify-around lg:items-center lg:ml-52 my-5 lg:my-30 px-5">    
                <form className="flex flex-col gap-2 p-5 lg:w-[400px] md:w-[596px] w-full  order-2">
                    <h1 className="text-black text-[32px] font-bold mb-10">Faça seu login</h1>
                    <label htmlFor="" className="font-medium">Usuário:</label>
                    <input type="text" className="bg-white p-3 rounded-2xl" />
                    <label htmlFor="" className="font-medium">Senha</label>
                    <input type="password" className="bg-white p-3 rounded-2xl"name="" id="" />
                    <button type="submit" className="bg-[#2B9EED] mt-4 w-fit px-10 rounded-3xl p-2 text-white font-semibold hover:cursor-pointer">Fazer Login</button>
                </form>
                <div className="order-3 justify-center flex my-5">
                    <Image src={ico04}></Image>
                </div>
            </div>
            </> );
}

export default Login;