'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init('phc_Ebs3JJiGWuW1iybzhB14IXmuQ4miCELoP9V6RflUjKb', {
    api_host: 'https://app.posthog.com',
  })
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}