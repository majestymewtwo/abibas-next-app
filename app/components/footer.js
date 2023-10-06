import Logo from "./logo";

export default function Footer() {
  return (
    <div className='flex flex-col md:flex-col-reverse  items-center gap-4 bg-black text-white py-5'>
      <div className='flex flex-col text-[0.7rem] items-center'>
        <Logo />
        <p>© 2023 abibas India Marketing Pvt. Ltd</p>
      </div>
      <div className='flex flex-col items-center md:flex-row gap-6 text-sm'>
        <p className='hover:scale-125 hover:underline ease-in-out transition-all duration-300 cursor-pointer'>
          Cookie Settings
        </p>
        <p className='hidden md:block'>|</p>
        <p className='hover:scale-125 hover:underline ease-in-out transition-all duration-300 cursor-pointer'>
          Privacy Policy
        </p>
        <p className='hidden md:block'>|</p>
        <p className='hover:scale-125 hover:underline ease-in-out transition-all duration-300 cursor-pointer'>
          Terms and Conditions
        </p>
        <p className='hidden md:block'>|</p>
        <p className='hover:scale-125 hover:underline ease-in-out transition-all duration-300 cursor-pointer'>
          Cookies
        </p>
      </div>
    </div>
  );
}
