"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import UsageTrack from './UsageTrack'

function SideNav() {
    const MenuList = [
        {
            name:'Home',
            icon: Home,
            path:'/dashboard'
        }
    ]

    const path = usePathname();
    useEffect(()=>{
        console.log(path);
    },[])
  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
      <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
      </div>
      <hr className='my-5 border'/>
      <div className='mt-3 list-none'>
        {MenuList.map((menu , index)=><li key={index}>
            <div className={`flex gap-2 mb-2 p-3
            hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
            ${path==menu.path&&'bg-primary text-white'}
            `}>
                <menu.icon className='h-7 w-7'/>
                <h2 className='text-lg'>{menu.name}</h2>
            </div>
            </li>)}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack/>
      </div>
    </div>
  )
}

export default SideNav
