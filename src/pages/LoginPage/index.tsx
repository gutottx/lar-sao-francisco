export function LoginPage() {
  return (
    <main className="flex flex-col items-center gap-3.5 pb-[72px]">
      <h2 className="font-bold text-[28px]">Faça seu Login</h2>

      <div className="flex flex-col gap-5 items-center justify-between m-auto p-4 border rounded-2xl border-white w-326px md:w-[400px]">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Usuário:</label>
          <input 
            type="text"
            placeholder="Digite seu usuário"
            className="bg-white rounded-2xl text-gray-700 py-1 px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Senha:</label>
          <input 
            type="text"
            placeholder="*********"
            className="bg-white rounded-2xl text-gray-700 py-1 px-4"
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-3xl py-1 px-4 hover:bg-blue-600 cursor-pointer"
        >
          Fazer login
        </button>
      </div>
    </main>
  )
}
