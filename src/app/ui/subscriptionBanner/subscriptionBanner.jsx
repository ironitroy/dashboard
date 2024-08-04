import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SubscriptionBanner = () => {
  return (
    <div className='bg-blue-600 '>
        <div className="grid md:grid-cols-2 items-center">
            <div className="px-6 md:px-20 py-20">
                <h2 className='text-4xl md:text-5xl font-medium  text-white leading-tight'>Opt-In for Monthly Subscription!</h2>
                <p className="text-white mt-6 ">A monthly subscription of raw meat cuts, including a cuts at your doorstep.</p>
                <Button className="w-full mt-8 bg-blue-900 hover:bg-blue-950">Get Subscription</Button>
            </div>
            <div className="">
                <Image src={"/deliver.jpg"} alt='Delivery' width={800} height={800} className='h-aut w- aspect-'/>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionBanner