import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { Mail, Paperclip } from 'lucide-react'
import Image from 'next/image'
import Container from './shared/Container'

export default function introduction() {
  return (
    <Container>
      <div className="text-center" id='home'>
        <h3 className='text-xl mb-3'>Hello I&apos;m</h3>
        <h1 className='text-4xl font-bold mb-3'>Elias Silva🖥️</h1>
        <h2 className='text-2xl text-gray-400'>Frontend Developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">

            <Link className={buttonVariants()} href="#contact">
              <Mail className='mr-2' />Contact with me
            </Link>

            <Link className={buttonVariants({ variant: 'secondary' })} href="/Elias_Silva_Resume_2024.pdf" target='_blank'>
              <Paperclip className='mr-2' />Download CV
            </Link>
          </div>
        </div>
        <Image className='rounded-xl object-cover my-4 mx-auto' src="/photo_cv.jpg" alt='Profile pic' width={400} height={400} />
      </div>
    </Container>
  )
}
