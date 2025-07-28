import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='mt-4 ml-[173px]'>
                    <Image src={assets.logo} className='w-[171px] h-[57px]' />
                </div>
            </nav>
        </>
    )
}

export default Navbar