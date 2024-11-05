import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="flex items-center md:flex-1">
        <Image 
          src="/assets/images/logo.png"
          alt="Logo with name"
          width={60}
          height={16}
          className=""
        />
        <h1 className='text-xl font-semibold hidden md:block'>BlockDocs</h1>
      </Link>
      {children}
    </div>
  )
}

export default Header