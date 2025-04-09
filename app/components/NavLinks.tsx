'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRankingStar } from 'react-icons/fa6';
import { MdToday } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

const links = [
    
    {
        name: "Posiciones",
        href: "/dashboard/tablaPosiciones",
        icon: FaRankingStar
    },
    {
        name: "Partidos de hoy",
        href: "/dashboard",
        icon: MdToday
    }
];

const NavLinks = () => {
    const pathname = usePathname()
    return(
        <>
            {links.map(x => {
                const LinIcon = x.icon
                return (
                <Link 
                href={x.href} 
                className={twMerge('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3', pathname === x.href && "bg-slate-400")}>
                <LinIcon className='w-6'/>
                <p className='hidden md:block'>{x.name}</p>
            </Link>
            );
            })}
        </>
    );
};

export default NavLinks;