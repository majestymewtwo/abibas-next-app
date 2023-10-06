export default function Search() {
  return (
    <div className='hidden md:flex items-center space-x-4 bg-slate-200 px-3 py-1 rounded-lg font-mono'>
      <img src='/search.png' alt='search' className='h-4 w-4' />
      <input
        type='text'
        className='text-slate-700 bg-inherit focus:outline-none'
        placeholder='Search For Products'
      />
    </div>
  );
}
