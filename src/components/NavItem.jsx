import React from 'react'

export const NavItem = ({elemento,onClick}) => {
  return (
    <div className='p-1 rounded-2xl hover:bg-[#111111] pl-1 pr-0 border-r-0 cursor-pointer w-[100%]' onClick={onClick}>
        <h2 className=' select-item hover:border-[#fffdfd] rounded-2xl hover:border-2 border-r-0 font-bold
         flex justify-center items-center h-12 text-[#ebe5e5] hover:text-[#acb7bed5] hover:text-2xl'>{elemento}</h2>
    </div>
  )
}
