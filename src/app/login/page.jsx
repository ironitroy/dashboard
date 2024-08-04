import Image from "next/image"
import LoginForm from "../ui/loginForm/loginForm"

import { Urbanist, Manrope } from 'next/font/google'


const manrope = Manrope({
  weight: ['400','500','600','700','800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const urbanist = ({
  weight: ['400','500','600','700','800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})



const LoginPage = () => {

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 h-screen bg-cover bg-center p-4 md:p-20 " style={{backgroundImage: "url('/Thumbnail.png')"}}>
      <div className=" col-span-2  items-center ml-20 hidden xl:grid">
      <div className=" flex gap-4 items-center  bg-gray-800/20 border-gray-800 backdrop-blur-sm w-fit rounded-xl">
       {/* <Image width={300} height={300} src="/logo2.svg" className="h-14 w-14 rounded-xl bg-gray-800 p-2 "></Image> */}
       <Image width={300} height={300} alt="FinnSheep Logo" src="/finnsheep_white-Logo.svg" className="h-24 w-fit   p-6 "></Image>
        {/* <Image width={300} height={300} src="/finnsheep_white-Logo.svg" className="h-8 w-fit"></Image>finnsheep-logo_optimzed.svg */}
      </div>
      <p className="absolute bottom-10 text-white"> Powered by RAD Media. Copyright © 2024 
      </p>
      </div>

        <div className="relative flex min-h-full flex-col bg-white justify-center px-6 py lg:px-8 shadow md:rounded-2xl">
        <div className="flex xl:hidden gap- items-center justify-center ">
       <Image width={300} height={300} alt="FinnSheep Logo" src="/finnsheep-logo_optimzed.svg" className="h-12 w-auto "></Image>
        {/* <Image width={300} height={300} src="/logo3.svg" className="h-8 w-auto"></Image> */}
      </div>
          {/* <h1 className={`sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900  ${manrope.className}`}>Login</h1> */}

          <h1 className={`sm:mx-auto sm:w-full sm:max-w-sm mt-10 mb-2 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900  ${manrope.className}`}>Login</h1>
       
          <div className="py-4  sm:mx-auto sm:w-full sm:max-w-sm">
         <LoginForm/>
          {/* <p className={`mt-10 text-center text-sm text-gray-500 ${manrope.className}`}>{'Don\'t have an account?'}<a className={`font-semibold leading-6 text-slate-600 hover:text-blue-700 pl-2" href="/auth/register ${manrope.className}`}> Register</a></p> */}
          </div>
        </div>

    </div>
  )
}

export default LoginPage