"use client";

import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className='md:hidden'>
      {!open ? (
        <img
          src='/menu-icon.png'
          alt='menu'
          className='h-8 w-8'
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          src='/close.png'
          alt='menu'
          className='h-8 w-8'
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className='absolute z-20 top-20 left-0 bg-black text-white w-full p-4 font-mono text-xl space-y-1'>
          <h1>Men</h1>
          <h1>Women</h1>
          <h1>Kids</h1>
          <h1>Sports</h1>
        </div>
      )}
    </div>
  );
}
