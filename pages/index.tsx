import Image from 'next/image'
import data from '../data.json'

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full mt-16">
      <Image 
        className="rounded-full mb-4"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold text-xl">@{data.name}</h1>
    </div>
  )
}
