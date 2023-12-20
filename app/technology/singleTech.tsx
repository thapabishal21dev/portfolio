import React from 'react'
import Image from 'next/image'

interface ITech{
name:string
image:any
}

const SingleTech = (props:ITech) => {
  return (
    <div>
<div className=" w-24 px-1 py-2 gap-2 flex flex-col items-center hover:bg-gradient-to-r from-cyan-500 to-slate-500 hover:cursor-pointer hover:text-white rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover">
        <Image
              className="w-12"
              src={props.image}
              width={100}
              height={100}
              alt="avatar"
            />
        <h1 className=' text-[14px] font-bold'>{props.name}</h1>
  </div>
  </div>

   
  )
}

export default SingleTech