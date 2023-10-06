export default function Dropdown() {
  return (
    <div className='hidden md:flex font-light tracking-widest space-x-7 text-lg items-center text-white'>
      <h3 className='hover:scale-125 ease-in-out duration-300 cursor-pointer'>
        Men
      </h3>
      <h3 className='hover:scale-125 ease-in-out duration-300 cursor-pointer'>
        Women
      </h3>
      <h3 className='hover:scale-125 ease-in-out duration-300 cursor-pointer'>
        Kids
      </h3>
      <h3 className='hover:scale-125 ease-in-out duration-300 cursor-pointer'>
        Sports
      </h3>
    </div>
  );
}
