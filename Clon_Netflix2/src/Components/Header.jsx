import logo from '../assets/LogoCineCodigo.png';
import userimage from '../assets/userimage.png'
import CarritoCompra from './CarritoCompra';
import  './Header.css'

const Header = () => {
  return (
    <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex items-center gap-10'>

            <img src={logo} className='h-[50px]' />
            <ul className='flex flex-row '>
                <li className='hover:scale-110 cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:text-white'>Peliculas</li>
                <li className='hover:scale-110 cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:text-white'>Series</li>
                <li className='hover:scale-110 cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:text-white'>Kids</li>  
            </ul>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <CarritoCompra />
                <img src={userimage} className="w-[40px] rounded-full m-5 invisible md:visible lg:visible" />
            </div>
        </div>
    </div>
  )
}

export default Header