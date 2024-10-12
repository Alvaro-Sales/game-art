'use client'
import Link from 'next/link'
import Image from 'next/image'
import "../../app/globals.css"
import { MdPets } from "react-icons/md"
import { IoHomeSharp, IoLogOutSharp } from "react-icons/io5"
import { GiPistolGun, GiCurvyKnife, GiDualityMask } from "react-icons/gi"


//Aqui vou criar o componente Sidebar
export default function Sidebar(){
    return (
        <>
            <nav className='navigation relative w-[70px] min-w-[70px] h-[100vh] bg-[var(--bgSidebar)] overflow-hidden hover:w-[220px] border-r-2 border-[var(--orange)]'>

                <div className='flex items-center justify-start w-[200px] h-auto absolute top-12 left-0'>

                    <Image 
                        src="/images/logo.png"
                        width={45}
                        height={45}
                        alt="Logotipo"
                        priority="true"
                        className="ml-[15px]"
					/>

                    <span className='logo text-[var(--orange)] text-xl relative block pl-3 font-medium'>Game & Art</span>
                </div>

                <ul className='list w-full h-full flex flex-col absolute list-none top-[150px] left-0'>

                    <li className='itemList relative mb-[15px] ml-[5px]'>
                        <Link href="/" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[--orange]'>

                            <IoHomeSharp  className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Home
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative mb-[15px] ml-[5px]'>
                        <Link href="/guns" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[--orange]'>

                            <GiPistolGun className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Guns
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative mb-[15px] ml-[5px]'>
                        <Link href="/knives" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[--orange]'>

                            <GiCurvyKnife className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Knives
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative mb-[15px] ml-[5px]'>
                        <Link href="/masks" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[--orange]'>

                            <GiDualityMask className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Masks
                            </span>
                        </Link>
                    </li>

                    <li className='itemList relative ml-[5px]'>
                        <Link href="/pets" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[--orange]'>

                            <MdPets className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Pets
                            </span>
                        </Link>
                    </li>
                </ul>

                <ul className='list w-full h-auto flex flex-col absolute list-none bottom-[50px] left-0 py-2 rounded-s-3xl'>
                    <li className='itemList relative ml-[5px]'>
                        <Link href="#" className='link w-full h-full p-[10px] flex items-center relative rounded-s-3xl bg-transparent hover:bg-[--orange]'>

                            <IoLogOutSharp className='iconMenu text-[var(--text)] min-w-[30px] min-h-[30px] relative block ml-[5px]' />

                            <span className='text-[var(--text)] relative block pl-5 whitespace-nowrap'>
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

