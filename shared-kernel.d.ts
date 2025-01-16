import { FC } from 'react'

declare global {
  type NextErrorComponent = FC<{
    error: Error & { digest?: string }
    reset: () => void
  }>
}
