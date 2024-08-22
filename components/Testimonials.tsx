import React from 'react'
import Title from './shared/Title'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { dataTestimonials } from '@/data'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Testimonials() {
    return (
        <div className='p-4 md:px-12 md:py-44 max-w-5xl mx-auto'>
            <Title title='Testimonials' subtitle='What my clients say' />

            <Carousel className='mx-10 mt-6'>

                <CarouselContent className='gap-8'>

                    {dataTestimonials.map((testimonials) => (
                        <CarouselItem key={testimonials.id} className='md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg'>
                            <Avatar className='object-cover'>
                                <AvatarImage src={testimonials.imageUrl} alt='Avatar Image' />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="">
                                <p className='min-h-12 text-2xl mt-4'>{testimonials.name}</p>
                                <p>{testimonials.description}</p>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />

            </Carousel>
        </div>
    )
}
