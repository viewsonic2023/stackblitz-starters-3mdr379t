'use client'
import { usePostHog } from 'posthog-js/react'

export default function Home() {
  const posthog = usePostHog()

  const handleClick = () => {
    posthog?.capture('button_clicked', {
      button_name: 'my_test_button'
    })
  }

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">My Simple App</h1>
      <input 
        className="border p-2 rounded w-full" 
        placeholder="Type something hereeee..." 
      />
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  )
}