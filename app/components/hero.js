export default function Hero() {
  return (
    <section className='h-[300px] md:h-[500px] overflow-hidden relative bg-slate-800'>
      <img
        src='/football.jpg'
        alt='football'
        className='opacity-70 h-full md:h-[1080px]'
      />
      <div className='hidden md:flex flex-col gap-3 absolute top-1/2 left-20'>
        <button className='px-4 py-2 border rounded-sm md:text-xl bg-white font-mono font-semibold hover:scale-110 hover:shadow-2xl transition-all ease-in-out duration-300'>
          Shop Men
        </button>
        <button className='px-4 py-2 border rounded-sm md:text-xl bg-white font-mono font-semibold hover:scale-110 hover:shadow-2xl transition-all ease-in-out duration-300'>
          Shop Women
        </button>
        <button className='px-4 py-2 border rounded-sm md:text-xl bg-white font-mono font-semibold hover:scale-110 hover:shadow-2xl transition-all ease-in-out duration-300'>
          Shop Kids
        </button>
      </div>
      <div className='absolute px-4 md:px-0 md:right-4 bottom-4 text-white'>
        <h1 className='text-2xl md:text-5xl font-black'>extra</h1>
        <h1 className='text-3xl md:text-8xl font-black'>15% OFF*</h1>
        <h1 className='text-xl md:text-2xl font-semibold'>
          Football shoes & jerseys
        </h1>
        <p className='text-[0.46rem] md:text-xs'>*terms & conditions apply</p>
      </div>
    </section>
  );
}
