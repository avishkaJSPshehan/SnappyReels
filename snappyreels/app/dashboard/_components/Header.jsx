import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import {Button} from '@/components/ui/button'

function Header() {
  return (
    <div className='p-3 px-5'>
      <div className='flex gap-3 items-center'>
        <Image src={'/logo.png'} width={30} height={30}/>
        <h2 className='font-bold text-xl'>SnappyReels</h2>
      </div>

      <div>
        <Button></Button>
        <UserButton/>
      </div>


    </div>
  )
}

export default Header
