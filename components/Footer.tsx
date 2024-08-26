import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='max-w-3xl mx-auto'>
            <div className="md:flex md:justify-between m-4">
                <div className="">
                    <h4 className='text-3xl font-bold my-6 md:my-0'>Elias Silva</h4>
                </div>
                <div className="px-2 flex justify-between gap-2 md:gap-8 items-center">
                    <Link href="#about-me">About me</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#portfolio">Portfolio</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
            
        </footer>
    )
}
