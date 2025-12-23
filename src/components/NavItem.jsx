import React from 'react'
import '../assets/font/fonts.css'
export const NavItem = ({elemento,onClick}) => {
  return (
    <div className='p-1 rounded-2xl hover:bg-[#111111] pl-1 pr-0 border-r-0 cursor-pointer w-[100%] ' onClick={onClick}>
        <h2 className=' select-item  rounded-2xl
         flex justify-center items-center h-12 text-[#ebe5e5] hover:text-[#acb7bed5] hover:text-2xl' style={{fontFamily:'meta-pro'}}>{elemento}</h2>
    </div>
  )
}
