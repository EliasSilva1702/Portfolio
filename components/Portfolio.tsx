import React from 'react'
import Title from './shared/Title'
import { dataPortfolio } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function Portfolio() {
    return (
        <div className='p-4 max-w-4xl md:py-24 mx-auto' id='portfolio'>
            <Title title='Portfolio' subtitle='My Projects 💼' />

            <div className="grid md:gird-cols-3 gap-14 mt-4">
                {dataPortfolio.map((data) => (
                    <div className="" key={data.id}>
                        <h3 className='text-xl mb-4'>{data.title}</h3>
                        <Image src={data.image} alt='Project' width={300} height={200} className='rounded-2xl w-full' />

                        <div className="mt-5 flex gap-5">
                            <Link href={data.urlGithub} target='_blank' className={buttonVariants({ variant: "outline" })}> GitHub (not available)
                            </Link>
                        </div>

                        <div className="mt-5 flex gap-5">
                            <Link href={data.urlDemo} target='_blank' className={buttonVariants()}> Live Demo (not available)
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
