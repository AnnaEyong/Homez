'use client'
import React from 'react'
import { useState } from "react"
// import   { Star } from 'lucide-react';
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Heart } from 'lucide-react'
import { useStoreFavorite } from '@/store/favorite.store'

export default function CardComponent({property}) {
    const rate = (property.review_scores_rating * 5 ) /100;
    const [imageError, setImageError] = useState(false);
     const { selectedFavoriteIds, toggleHeartIcon} = useStoreFavorite()
    let isSelected =  selectedFavoriteIds.includes(property.id)
  if (!property?.xl_picture_url || imageError) return null;
    return (
        <div className='flex flex-col w-[290px] h-[380px] relative'>
            {/* image area */}
            {/* {property?.xl_picture_url &&} */}
                <div className='w-full h-[75%] rounded-3xl bg-white'>
                    <img src={property?.xl_picture_url} alt='property' onError={() => setImageError(true)} className='rounded-3xl w-full h-full object-cover'/>
                </div>

                {isSelected ? <FaHeart onClick={() => toggleHeartIcon(property.id)} size={20} color='red' className='absolute top-2 right-3 text-white cursor-pointer' />
                 : <Heart onClick={() => toggleHeartIcon(property.id)} size={20} className='absolute top-2 right-3 text-black cursor-pointer' />}

            {/* image end area */}
        <div className='py-2 px-1'>
            <div className='flex justify-between w-full'>
                <p className='font-semibold'>{property?.name.slice(0,25)} ...</p>
                <p className='flex gap-1 items-center'> <IoIosStar size={15}/> {rate}</p>
            </div>
        <div className='flex flex-col text-md'>
            <p className='text-gray-500 font-medium'>{property?.smart_location}</p>
            <p className='text-primary'><span className='underline font-semibold'>${property?.price}</span> / night</p>
        </div>
        </div>

        </div>
    )
}