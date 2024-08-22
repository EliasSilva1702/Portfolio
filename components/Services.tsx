import React from 'react'
import Title from './shared/Title'
import { dataServices } from '@/data'
import { features } from 'process'
import { Check } from 'lucide-react'

export default function Services() {
    return (
        <div className='p-6 md:px-12 md:py-24 max-w-5xl mx-auto' id='services'>
            <Title title='Services' subtitle='What I offer' />
            <div className="grid md:grid-cols-2 gap-5 mt-7">
                {dataServices.map((services) => (
                    <div className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit" key={services.id}>

                        <h4 className='mb-4 text-xl flex gap-2'>
                            {services.icon}
                            {services.title}
                        </h4>
                        <ul>
                            {services.features.map((features, index) => (
                                <li key={index} className='flex gap-3 mb-3'>
                                    <Check size={20}/>
                                    {features.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
