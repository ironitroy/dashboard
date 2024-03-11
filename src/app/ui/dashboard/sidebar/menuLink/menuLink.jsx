"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {
  
  const pathname = usePathname();


  return (
    <Link href={item.path} className={`flex px-2 h-10 items-center gap-2 text-sm text-[#363A43] font-medium hover:bg-[#EFF0FA] my-1 rounded-lg ${pathname === item.path && "bg-[#EFF0FA] text-[#4F3BF3]"}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink