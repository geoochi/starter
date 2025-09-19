import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function Dashboard() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <main className='flex-1 flex justify-center items-center'>
      <h1 className='text-4xl'>Hello {data.user.email}</h1>
    </main>
  )
}
