export default function Offer() {
  return (
    <div className='bg-yellow-300 p-4'>
      <div className='border-2 border-black border-spacing-2 py-24 px-3 md:p-24'>
        <h1 className='font-black text-5xl'>
          Join{" "}
          <span className='flex items-center gap-2'>
            <img src='/adidas.png' alt='logo' className='h-16 w-16' />
            <p>abibas</p>
          </span>{" "}
          & Get 15% OFF
        </h1>
      </div>
    </div>
  );
}
