'use client'
import { Menu, Search, UserRound } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from "react"
import FilterComponent from '../filter/FilterComponent';
import { categories } from './../../app/utils/data';
import { useTheme } from "next-themes"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useStoreFavorite } from '@/store/favorite.store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import {
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  User,
  Home,
  TrendingUp,
  Gamepad2,
  Building2,
  Waves,
  Trees,
  Mountain,
  Droplets,
  Building,
  Landmark,
  Hotel,
  Umbrella,
  Briefcase,
  Sun,
  History,
  Users,
  Dog,
  Star,
  DollarSign,
  Tent,
  HeartPulse,
  Footprints,
  Heart,
} from "lucide-react";
import { ModeToggle } from './ModeToggle';

export default function NavbarComponent() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    { name: "Tiny homes", icon: <Home /> },
    { name: "Trending", icon: <TrendingUp /> },
    { name: "Play", icon: <Gamepad2 /> },
    { name: "City life", icon: <Building2 /> },
    { name: "Beaches", icon: <Waves /> },
    { name: "Rural", icon: <Trees /> },
    { name: "Peaks", icon: <Mountain /> },
    { name: "Lakes", icon: <Droplets /> },
    { name: "Entire homes", icon: <Building /> },
    { name: "Unique stays", icon: <Landmark /> },
    { name: "Hotels", icon: <Hotel /> },
    { name: "Villas", icon: <Umbrella /> },
    { name: "Moments", icon: <Briefcase /> },
    { name: "Deserts", icon: <Sun /> },
    { name: "Historical places", icon: <History /> },
    { name: "Family friendly", icon: <Users /> },
    { name: "Pet friendly", icon: <Dog /> },
    { name: "Luxury", icon: <Star /> },
    { name: "Budget stays", icon: <DollarSign /> },
    { name: "Camping", icon: <Tent /> },
    { name: "Wellness", icon: <HeartPulse /> },
    { name: "Journey", icon: <Footprints /> },
    { name: "Romantic", icon: <Heart /> },
  ];

  const  {selectedFavoriteIds} = useStoreFavorite()
  const  favoriteSize = selectedFavoriteIds.length

  return (
    <>
<div className='flex flex-col fixed bg-background top-0 z-10 w-full'>

    <div className='hidden md:flex justify-between items-center px-6 pt-6 pb-6 w-full h-fit border-b-1 border-gray-300'>
        {/* TOP NAV START */}
      <div className='flex justify-between  w-full h-fit'>
        <div className='font-bold text-2xl text-primary'>LOGO</div>
        {/* TOP NAV END */}


        {/* MIDDLE NAV STRAT */}
      <div className='flex flex-col gap-6 justify-center items-center flex-1 h-fit mt-[-10px]'>

      {!isScrolled && (
        <div className='flex gap-4 items-center justify-center mr-[-150px]'>
            <button className='cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-4xl text-lg text-gray-500 focus:font-semibold'>Home</button>
            <button className='cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-4xl text-lg text-gray-500 focus:font-semibold'>Experiece</button>
        </div>
      )}

            {/* search bar start */}
            <div className={`transition-all duration-300 ${isScrolled ? "w-[40%]" : "w-[95%]"} h-fit border-1 border-gray-200 shadow-lg rounded-full flex items-center mr-[-180px]`}>

        {!isScrolled ? 
                <div className='px-5 py-2 rounded-full flex flex-col w-[30%] cursor-pointer hover:bg-gray-100'>
                    <label className='font-medium mb-[-3px]  cursor-pointer'>Where</label>
                    <input type='text' placeholder='Search destinations' className=' text-[14px]'/>
                </div> : <div className='font-medium cursor-pointer px-5 rounded-full flex w-[29%] justify-center items-center'>Anywhere</div>}

        {!isScrolled ?
                <div className='px-5 py-2 flex border-x-1 border-gray-200 flex-col  w-[20%] cursor-pointer hover:bg-gray-100 hover:rounded-full '>
                    <label className='font-medium mb-[-3px] cursor-pointer'>Check in</label>
                    <input type='text' placeholder='Add dates' className=' text-[14px]'/>
                </div> : <div className='font-medium cursor-pointer px-5rounded-full flex w-[29%] justify-center items-center border-x-1 border-gray-200'>Anytime</div>}

        {!isScrolled && (
                <div className='px-5 py-2 border-r-1 border-gray-200 flex flex-col w-[20%] cursor-pointer hover:bg-gray-100 hover:rounded-full '>
                    <label className='font-medium mb-[-3px] cursor-pointer'>Check out</label>
                    <input type='text' placeholder='Add dates' className=' text-[14px]'/>
                </div>
                )}

        {!isScrolled ?
                <div className='pl-5 pr-3 py-2 flex justify-between items-center w-[30%] cursor-pointer hover:bg-gray-100 hover:rounded-full'>
                    <div className='flex flex-col'>
                        <label className='font-medium mb-[-3px] cursor-pointer'>Who</label>
                        <input type='text' placeholder='Add guests' className=' text-[14px]'/>
                    </div>
                    <div className='rounded-full bg-primary cursor-pointer w-[35px] h-[35px] flex justify-center items-center'>
                    <Search size={20} color='white' className='' />
                    </div>
                </div> 
                
                :  <div className='pl-3 pr-3 py-3 flex justify-between w-[42%] cursor-pointer'>
                    <div className='font-medium  text-gray-500 cursor-pointer px-5rounded-full flex  justify-center items-center'>
                        Add guests
                    </div>
                    <div className='rounded-full w-[30px] h-[30px] flex justify-center items-center bg-primary'>
                    <Search size={18} color='white' className='' />
                    </div>
                </div>  }

            </div>
            {/* search bar end */}
        
      </div>
{/* MIDDLE NAV END */}

{/* START */}
        <div>
          <div className='flex gap-5 items-center mt-[-12px]'>
            <h2 className='font-medium'>Airbnb your home</h2>
            
            <ModeToggle />
            {/* USER MENU */}
   <div className='flex gap-2 rounded-full h-fit py-2 px-2 w-fit border-1 border-gray-300 items-center justify-center cursor-ponter'>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <div>
            <Menu size={20} className='cursor-pointer'/>
          </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

                <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>       
    {/* END USER MENU */}
          </div>
      </div>
{/* END */}
      </div>
    </div>

{/* RESPONSIVE SEARCH */}
<div className='sm:flex md:hidden justify-center items-center w-[95%] py-4 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.2)] mt-[4%] m-auto'>
  <div className='flex text-center ml-[9%] justify-center items-center gap-2 w-full'>
    <Search size={18} />
    <input type='text' placeholder='Start search'/>
  </div>
</div>

{/* SWIPER */}

<div className='sm:flex md:grid grid-cols-[3fr_1fr] py-4'>
    {/* <div className='flex px-10 overflow-x-auto scrollbar-track-red-500'>
      {categories.map((item,index) => <FilterComponent icon={item.icon} name={item.name}  key={index} /> )}
    </div> */}
    
    <Swiper
        modules={[ Scrollbar, Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={15}
        slidesPerView={8}
        scrollbar={{ draggable: true,
                      hide: true, }}
         className="mySwiper cursor-pointer w-[125%] md:w-[93%]">

    {/* <div className='flex px-10'> */}
        {categories.map((item, index) => (
          <SwiperSlide>
            <FilterComponent
              icon={item.icon}
              name={item.name}
              key={index}
            />
          </SwiperSlide>
        ))}
        <div className='swiper-button-prev absolute z-5 top-[16%] cursor-pointer bg-white shadow-[0_0_50px_rgba(0,0,0,0.4)] text-[#333] text-[.8rem] h-8 w-8 rounded-full flex items-center justify-center left-[10px]'><ChevronLeft /></div>
        <div className='swiper-button-next absolute z-5 top-[16%] cursor-pointer bg-white shadow-[0_0_50px_rgba(0,0,0,0.4)] text-[#333] text-[.8rem] h-8 w-8 rounded-full flex items-center justify-center right-[10px]'><ChevronRight/></div>
      {/* </div> */}
      </Swiper> 

  {/* END OF SWIPE */}

    <div className='hidden pl-2 pr-6 md:flex items-center justify-between font-semibold'>
      <div className='flex gap-2 py-2.5 px-3 items-center justify-center border-1 border-gray-200 w-fit rounded-lg'>
      <SlidersHorizontal size={16}/>
      <button className='text-[14px]'>Filters</button>
      </div>

      <div className='relative'>
          <Heart size={22} className='' />
          <button className='bg-primary absolute bottom-0 right-0 text-[8px] text-white w-2.5 h-2.5 rounded-full flex justify-center items-center'>{favoriteSize}</button>
      </div>

      <div>
        <p className='text-[14px]'>Prices include all fees</p>
      </div>
    </div>
</div>

</div>

    </>
  )
}
