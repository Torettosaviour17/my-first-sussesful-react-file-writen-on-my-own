import React from 'react'
import { delivery } from '../../images/index'
import { heroBackground } from '../../images/index'


const heropage = () => {
  return (
    <div>
      <section style={{ backgroundImage: `url(${heroBackground})` }} className='bg-no-repeat bg-cover bg-center object-cover flex p-10  justify-around items-center bg-[green] px-12 py-3 w-[100%] space-x-4'>
        <div className='md:w-1/2 w-full text-center md:text-left'>
            <h1 className='text-white text-5xl font-bold'>
            Your Logistics Partner For Seamless Delivery.
            </h1>
            <p className='text-white text-2xl py-8'>
            We provide services for all your nationwide shipping needs. 
            </p>
            <div className='w-full'>
                <input type="text" className='px-5 text-xl font-normal py-4 w-[60%] rounded-tl-lg rounded-bl-lg' placeholder='Enter your waybill number'/>
                <button className='w-[20%] bg-black text-xl text-white font-bold py-4 rounded-tr-lg rounded-br-lg'>
                Track
                </button>
            </div>
        </div>
        <div className='md:w-1/2'>
            <img src={delivery} className='w-[85%] hidden
            md:flex items-end justify-end' alt="" />
        </div>
      </section>
    </div>
  )
}

export default heropage
