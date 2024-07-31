//  Contact Page

import React, { useState } from 'react';
import upgrad from '../assets/upgrad.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Youtube from '../assets/youtube.png';



const ContactUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white ">
      <img src={upgrad} alt="upGrad Logo" className="mx-auto w-40 h-auto py-5 ml-20" />
      <nav className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-60">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/home" className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-xl font-medium">Home</a>
                  <a href="/course" className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-xl font-medium">Course</a>
                  <a href="/contact" className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-xl font-medium">Contact us</a>
                  <a href="/about" className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-xl font-medium">About us</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative ">
                  <input type="text" placeholder="SEARCH NOW" className=" bg-red-400 text-white placeholder-white  px-4 py-2 rounded-md border-b focus:outline-none focus:ring-2 focus:ring-white" />
                  <button className="absolute right-0 top-0 mt-2 mr-2">
                    <svg className="h-5 w-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/home" className="text-white hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/course" className="text-white hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">Course</a>
              <a href="/contact" className="text-white hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
              <a href="/about" className="text-white hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">About us</a>
            </div>
            <div className="pt-4 pb-3 border-t border-red-700">
              <div className="px-2">
                <div className="relative">
                  <input type="text" placeholder="SEARCH NOW" className="w-full bg-red-400 text-white placeholder-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
                  <button className="absolute right-0 top-0 mt-2 mr-2">
                    <svg className="h-5 w-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>



      <div className="bg-black text-white py-10 px-5 md:px-20 lg:px-40 text-start">
        <div className="text-3xl md:text-5xl font-bold">
          <span className="text-red-600">Contact</span> Us
        </div>
        <div className="text-xl md:text-3xl mt-5">
          <span className="text-red-600">upGrad</span> Kollam is ready for you
        </div>
      </div>


      <div className="bg-red-600  min-h-64"></div>


      <main className="p-8 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10  -translate-y-48">
          <div className="md:w-1/3 bg-white p-6 h-auto md:h-80 shadow-md shadow-slate-300">
            <h2 className="text-xl font-bold mb-4">Contact info</h2>
            <p className="mb-6">Address: Kollam</p>
            <div className="flex items-center mb-6">
              <svg className="w-6 h-6 mr-4 md:mr-9 text-red-500 mr-2 fill-red-600" fill="none" stroke="red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <p>+91 1234567890</p>
            </div>
            <div className="flex items-center mb-6">
              <svg className="w-6 h-6  mr-4 md:mr-9 text-red-500 mr-2 fill-red-600" fill="none" stroke="red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <p>+91 1234567890</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6  mr-4 md:mr-9 text-white mr-2 fill-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <p>www.upgrad.com</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.6091,8.8882,76.6191,8.8982&layer=mapnik&marker=8.8932,76.6141"
              style={{ border: 0, width: '100%', height: '320px' }}
              allowFullScreen=""
              loading="lazy"
              title="map">
            </iframe>
          </div>
        </div>




        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-9">
            We're here to <span className="text-red-500">help</span> you
          </h1>
          <p className="text-start mb-8 ">
            Welcome to the UpGrad Kollam ! Our dedicated team is here to provide you with the support you need. Whether you have questions
            about our courses, need help with your enrollment process, or require technical assistance, we are committed to ensuring you have a
            smooth and enriching experience with us. Reach out to us anytime, and we'll be happy to assist you!
          </p>
        </div>




        <div className="bg-white py-8 ">
          <div className=" grid grid-cols-1 md:grid-cols-3 items-center justify-start  md:items-start">
            <div className="flex items-start mb-8 md:mb-0 md:mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8  fill-red-600 text-red-600 mr-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 1234567890</p>
                <p>+91 1234567890</p>
              </div>
            </div>
            <div className="flex items-start mb-8 md:mb-0 md:mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-red-600 text-red-600 mr-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13401 2 5 5.13401 5 9C5 12.866 12 22 12 22C12 22 19 12.866 19 9C19 5.13401 15.866 2 12 2ZM12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11Z"
                />
              </svg>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>Kollam</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-red-600 text-white mr-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="font-bold">E-mail</h3>
                <p>www.upgrad.com</p>
              </div>
            </div>
          </div>
        </div>




        <div className="max-w-5xl mx-auto px-4 py-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-9 ">Get in touch with us</h3>
          <p>We'd love to hear from you! Whether you have questions about our programs, need support, or just want to learn more about UpGrad Kollam, feel free to reach out to us.Stay connected and updated by following us on Facebook, Twitter, LinkedIn, and Instagram. You can also send us a message through our contact form and we’ll get back to you as soon as possible. We look forward to connecting with you!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-start ">
          <div className="bg-white p-6 max-w-lg w-full">
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"
                  placeholder="Enter your name"
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Enter your name
                </label>
              </div>
            </form>
          </div>
          <div className="bg-white  p-6 max-w-lg w-full">
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"
                  placeholder="Your E - mail"
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your E - mail
                </label>
              </div>
            </form>
          </div>




          <div className="bg-white  p-6 max-w-lg w-full">
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"
                  placeholder="Phone Number"
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Phone Number
                </label>
              </div>
            </form>
          </div>




          <div className="bg-white p-6 max-w-lg w-full ">
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0"
                  placeholder="Your message here"
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your message here
                </label>
              </div>
              <div className="pt-10">
                <button
                  type="submit"
                  className="w-32 flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send to us
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>



      <div className="bg-red-600  min-h-20"></div>



      <footer className="bg-black text-white p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h2 className="text-lg font-bold mt-6">upGrad kollam</h2>
            <img src={upgrad} alt="upGrad Logo" className="w-40 h-auto py-5" />
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex items-center mb-6 gap-10">
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.354 19.6806C12.6043 17.4243 10.7684 14.6401 9.80312 13.056L9.08312 11.7014C9.33486 11.4319 11.2547 9.38041 12.0866 8.26734C13.1321 6.86965 11.6163 5.60733 11.6163 5.60733C11.6163 5.60733 7.35108 1.35042 6.37903 0.506009C5.40698 -0.339581 4.28803 0.13006 4.28803 0.13006C2.24501 1.44736 0.127064 2.59264 4.28898e-06 8.10065C-0.00473452 13.2575 3.91811 18.5764 8.16023 22.6941C12.4092 27.3444 18.2429 32.0053 23.883 32C29.4019 31.8744 30.5493 29.7612 31.8694 27.7224C31.8694 27.7224 32.3403 26.6067 31.4938 25.6358C30.6468 24.6652 26.3804 20.4079 26.3804 20.4079C26.3804 20.4079 25.1163 18.895 23.7154 19.9392C22.6714 20.718 20.7966 22.4502 20.3449 22.8702C20.3458 22.8717 17.2096 21.2033 15.354 19.6806Z" fill="white" />
              </svg>
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center mb-6 gap-10">
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.354 19.6806C12.6043 17.4243 10.7684 14.6401 9.80312 13.056L9.08312 11.7014C9.33486 11.4319 11.2547 9.38041 12.0866 8.26734C13.1321 6.86965 11.6163 5.60733 11.6163 5.60733C11.6163 5.60733 7.35108 1.35042 6.37903 0.506009C5.40698 -0.339581 4.28803 0.13006 4.28803 0.13006C2.24501 1.44736 0.127064 2.59264 4.28898e-06 8.10065C-0.00473452 13.2575 3.91811 18.5764 8.16023 22.6941C12.4092 27.3444 18.2429 32.0053 23.883 32C29.4019 31.8744 30.5493 29.7612 31.8694 27.7224C31.8694 27.7224 32.3403 26.6067 31.4938 25.6358C30.6468 24.6652 26.3804 20.4079 26.3804 20.4079C26.3804 20.4079 25.1163 18.895 23.7154 19.9392C22.6714 20.718 20.7966 22.4502 20.3449 22.8702C20.3458 22.8717 17.2096 21.2033 15.354 19.6806Z" fill="white" />
              </svg>
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center mb-6 gap-10">
              <svg width="25" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18.75C14.9669 18.75 13.9338 18.397 13.0525 17.6816L0 7.10937V21.875C0 23.6003 1.34312 25 3 25H29C30.6569 25 32 23.6009 32 21.875V7.10937L18.95 17.6888C18.0688 18.3984 17.0312 18.75 16 18.75ZM1.01813 5.29297L14.2806 16.0417C15.2925 16.862 16.71 16.862 17.7219 16.0417L30.9844 5.29297C31.5688 4.77214 32 3.97135 32 3.125C32 1.39909 30.6562 0 29 0H3C1.34312 0 0 1.39909 0 3.125C0 3.97135 0.375625 4.77214 1.01813 5.29297Z" fill="white" />
              </svg>
              <span>www.upgrad.com</span>
            </div>
          </div>
          <div className="mt-6">
            <a href="#" className="block mb-6">Home</a>
            <a href="#" className="block mb-6">Courses</a>
            <a href="#" className="block mb-6">Contact</a>
            <a href="#" className="block mb-4">About</a>
          </div>
        </div>
        <div className="flex space-x-10 border-t pl-20">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" className="w-15 h-8 mt-4 " />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" className="w-15 h-8 mt-4" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="YouTube" className="w-15 h-8 mt-4" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default ContactUs