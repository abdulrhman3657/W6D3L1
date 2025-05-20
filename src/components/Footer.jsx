import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        <div className='bg-gray-700 flex flex-wrap  text-white flex-col justify-center items-center h-[340px]'>
            <ul className='flex flex-wrap gap-10 w-90 items-center'>
                <li className='hover:text-amber-500'>about</li>
                <li className='hover:text-amber-500'>blog</li>
                <li className='hover:text-amber-500'>jobs</li>
                <li className='hover:text-amber-500'>press</li>
                <li className='hover:text-amber-500'>accibility</li>
                <li className='hover:text-amber-500'>partners</li>
            </ul>
            <ul className='flex gap-10 mt-10'>
                <li><FaFacebook className="w-8 h-8 " /></li>
                <li><FaFacebook className="w-8 h-8 " /></li>
                <li><FaFacebook className="w-8 h-8 " /></li>
                <li><FaFacebook className="w-8 h-8 " /></li>
                <li><FaFacebook className="w-8 h-8 " /></li>
            </ul>
            <p></p>
        </div>
    </div>
  )
}

export default Footer