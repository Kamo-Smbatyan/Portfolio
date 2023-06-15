import Link from 'next/link'
import React, { useState,useRef, FormEvent } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from 'emailjs-com';

const Contact = () => {
  const mto = "mailto:";
  const em = "acarruth2018@gmail.com";
  const form = useRef<HTMLFormElement>(null);
  
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Check if the honeypot field is filled out
      if (e.currentTarget.favoriteColor.value) {
        setStatus("Failed to Send");
        setTimeout(() => setStatus(''), 5000); // Remove status after 5 seconds
        return;
      }
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_KEY as string,
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: Error) => {
            console.log(error);
          }
        );
      e.currentTarget.reset();
      setStatus("Message Sent");
    } catch (error) {
      console.log(`failed: ${error}`);
      setStatus("Failed to Send");
    } finally {
      setTimeout(() => setStatus(''), 5000); // Remove status after 5 seconds
    }
  };

  return (
    <div id='contact' className='w-full'>
      <div className='m-auto px-2 py-16 w-full'>
        <h2 className='text-center tracking-widest'>
          Contact
        </h2>
        <div className='grid pt-8 md:pt-10 px-3 md:px-10 lg:grid-cols-8 gap-8'>
          <div className='col-span-4 lg:col-span-5 w-full h-auto bg-black text-white shadow-xl shadow-salonnblue rounded-xl lg:p-4'>
            <div className='p-4'>
            <form ref={form} onSubmit={handleSubmit}>
              <h3 className='py-2 md:py-4 text-center'>Get In Touch</h3>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input 
                      name="name"
                      className='border-2 rounded-lg p-2 md:p-3 flex bg-gray-300 text-black focus:outline-none focus:border-salonnblue' 
                      type='text'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input 
                      name="phoneNumber"
                      className='border-2 rounded-lg p-2 md:p-3 flex  bg-gray-300 text-black focus:outline-none focus:border-salonnblue' 
                      type='text' 
                    />
                  </div>
                </div>
                <div className='flex flex-col py-1 md:py-2'>
                  <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Email</label>
                      <input 
                        className='border-2 rounded-lg p-2 md:p-3 flex  bg-gray-300 text-black focus:outline-none focus:border-salonnblue' 
                        type='email'
                        name='email'
                        required
                      />
                    </div>
                </div>
                <div className='flex flex-col py-1 md:py-2'>
                  <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Subject</label>
                      <input 
                        name="subject"
                        className='border-2 rounded-lg p-2 md:p-3 flex  bg-gray-300 text-black focus:outline-none focus:border-salonnblue' 
                        type='text'
                        required 
                      />
                    </div>
                </div>
                <div className='flex flex-col py-1 md:py-2'>
                  <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Message</label>
                      <textarea 
                        name="message" 
                        className='border-2 rounded-lg p-2 md:p-3  bg-gray-300 text-black focus:outline-none focus:border-salonnblue' 
                        rows={7}
                        required></textarea>
                    </div>
                </div>
                <div className='flex flex-col' style={{ display: 'none' }}>
                    <label className='uppercase text-sm py-2'>Favorite color (honeypot)</label>
                    <input 
                      name='favoriteColor'
                      className='border-2 rounded-lg p-2 md:p-3 flex bg-gray-300 text-black focus:outline-none focus:border-salonnblue' 
                      type='text' 
                    />
                  </div>
                <button className='w-full p-4 text-white bg-gradient-to-r from-[#0e286e] to-[#1942b3] mt-4'>Send Message</button>
                <div className='text-center py-2'>{status}</div>
              </form>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3 flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 justify-evenly lg:justify-between items-center lg:my-20 lg:ml-0 lg:mr-0">
            <div className='rounded-full w-13 h-13 sm:w-20 sm:h-20 flex items-center justify-center bg-black shadow-lg text-white shadow-salonnblue p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <a href="https://www.linkedin.com/in/xander-carruth/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-7 h-7 sm:w-8 sm:h-8'/></a>
            </div>
            <div className='rounded-full w-13 h-13 sm:w-20 sm:h-20 flex items-center justify-center bg-black shadow-lg text-white shadow-salonnblue p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <a href="https://github.com/xander-carruth" target="_blank" rel="noopener noreferrer"><FaGithub className='w-7 h-7 sm:w-8 sm:h-8'/></a>
            </div>
            <div className='rounded-full w-13 h-13 sm:w-20 sm:h-20 flex items-center justify-center bg-black shadow-lg text-white shadow-salonnblue p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <a href={`${mto}${em}`} target="_blank" rel="noopener noreferrer"><AiOutlineMail className='w-7 h-7 sm:w-8 sm:h-8'/></a>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact