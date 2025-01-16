'use client'
import { useRouter } from 'next/navigation'

const Error: NextErrorComponent = ({ error }) => {
  const router = useRouter()

  return (
    <div>
      {error?.message}
      <button type='button' onClick={() => router.push('/')}>
        Go to the main page
      </button>
    </div>
  )
}

export default Error
