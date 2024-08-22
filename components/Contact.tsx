import React from 'react'
import Title from './shared/Title'
import { dataContact } from '@/data'
import Link from 'next/link'
import ContactForm from './ContactForm'
import { Send } from 'lucide-react'

export default function Contact() {
    return (
        <div className='p-6 md:px-12 md:py-20 max-w-5xl mx-auto' id='contact'>
            <Title title='Contact' subtitle='Contact with me 📞' />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div className="">
                    {dataContact.map((data) => (
                        <div className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4" key={data.id}>
                            {data.icon}
                            <p>{data.title}</p>
                            <p>{data.subtitle}</p>

                            <Link href={data.link} target='_blank' className='flex items-center gap-x-1 m-3'>Send me a message <Send size={17}/></Link>
                        </div>
                    ))}
                </div>

                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
