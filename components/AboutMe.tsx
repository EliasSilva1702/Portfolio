import React from 'react'
import Title from './shared/Title'
import { dataAboutMe, dataSlider, itemsNavbar } from '@/data'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'
import Link from 'next/link'

export default function AbotMe() {
  return (
    <div className='p-6 md:px-12 md:py-30 max-w-5xl mx-auto ' id='about-me'>
      <Title title='About Me' subtitle='Meet me' />

      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          {/* carusel */}
          <Carousel
            opts={{
              align: "start"
            }}
            orientation='vertical'
            className='w-full max-w-xs h-fit '
          >

            <CarouselContent className='mt-1 h-[200px] object-cover'>
              {dataSlider.map((data) => (

                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image src={data.url} alt='image' width={250} height={400} className='w-full h-auto rounded-lg' />
                  </div>
                </CarouselItem>

              ))}

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />

          </Carousel>

        </div>
        <div className="">
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800" key={data.id}>
                {data.icon}
                <p className='my-2 '>{data.name}</p>
                <p className='text-gray-400'>{data.description}</p>
              </div>
            ))}
          </div>
          <p className="my-8"> I’m a passionate developer, inspired by the challenges that come with lines of code and complex algorithms. Outside the digital world, I find balance and renewal in the great outdoors and through sports, firmly believing in the importance of maintaining harmony between mind and body.
          </p>
          <Link href={itemsNavbar[4].link}>
            <Button>
              <Phone size={20} className='mr-2' />We speak
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
