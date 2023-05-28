import React from 'react'

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='py-4 uppercase tracking-widest'>About</p>
                <h2>The life of Xander</h2>
            </div>
        </div>
    </div>
  )
}
