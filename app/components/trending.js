export default function Trending() {
  return (
    <div className='px-8 md:px-28 py-8 space-y-10'>
      <h1 className='font-semibold text-xl md:text-2xl'>Popular Right Now</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
        <Event name='samba' />
        <Event name='running shoes' />
        <Event name='nmd' />
        <Event name='backpack' />
        <Event name='sandals' />
        <Event name='bag' />
      </div>
    </div>
  );
}

function Event({ name }) {
  return (
    <h1 className='col-span-1 font-bold text-3xl md:text-5xl border-b  hover:border-b-4 hover:border-black hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>
      {name}
    </h1>
  );
}
