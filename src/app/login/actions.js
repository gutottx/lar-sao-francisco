export async function login(formData) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: formData.get('username'),
      password: formData.get('password'),
    }),
  })

  if (!res.ok) throw new Error('Login failed')

  return { success: true }
}