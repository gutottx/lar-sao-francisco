import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtDecode } from 'jwt-decode' 
import DashboardContent from './DashboardContent'

async function getUserFromCookie() {
    const cookieStore = cookies()
    const token = cookieStore.get('token')?.value
  
    if (!token) return null
  
    try {
      const decoded = jwtDecode(token)
      return decoded
    } catch (err) {
      console.error('Erro ao decodificar token:', err)
      return null
    }
  }

  export default async function DashboardPage() {
    const user = await getUserFromCookie()

    if (!user) {
      redirect('/login') 
    }

    console.log(user)
  
  
    return <DashboardContent user={user} />
  }
