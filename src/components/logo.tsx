import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <div className='flex items-center mx-4 px-2 '>
      <Image className="w-auto hidden sm:block mx-2" src="/logo.png" alt="Logo" width={50} height={50} />
      <p className='text-primary text-2xl font-bold'>Expensr</p>
    </div>
  )
}

export default Logo