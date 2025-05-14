import React from 'react'


export default function FilterComponent({name, icon}) {
  return (

<button className='flex text-[13px] flex-col items-center justify-center text-gray-500'>
    <div className='cursor-pointer'>
      {icon}
    </div>
    <div className='flex items-center justify-center'>
      <p className='text-center cursor-pointer'>{name}</p>
    </div>
</button>
  )
}
