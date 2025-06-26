import Image from 'next/image';

export default function Home() {

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">My Simple App</h1>
      <input 
        className="border p-2 rounded w-full" 
        placeholder="Type something here..." 
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  )

}
