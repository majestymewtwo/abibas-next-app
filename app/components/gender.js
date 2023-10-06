export default function Genders() {
  return (
    <div className='px-4 md:px-28 py-8 space-y-10 bg-slate-300'>
      <h1 className='font-semibold text-3xl'>Who are you shopping for?</h1>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        <GenderCard img='/women.jpg' name='Women' />
        <GenderCard img='/ronaldo.jpg' name='Men' />
        <GenderCard img='/kid.jpg' name='Kids' />
      </div>
    </div>
  );
}

function GenderCard({ img, name }) {
  return (
    <div className='relative cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
      <img src={img} alt='gender' className='h-[400px] w-[350px]' />
      <h1 className='absolute bottom-3 left-3 text-white text-3xl font-black'>
        {name}
      </h1>
    </div>
  );
}
