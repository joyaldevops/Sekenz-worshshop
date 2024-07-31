import React from 'react';
import graduationIcon from '../assets/5310239_education_graduation_hat_icon.svg';
import bookIcon from '../assets/8665118_book_open_icon.svg';
import collegeIcon from '../assets/5925622_college_government_institute_icon.svg';
import studentIcon from '../assets/5402435_account_profile_user_avatar_man_icon.svg';
import bgShape from '../assets/bgshape.jpg'; // Ensure this path is correct
import Image from '../assets/about.jpg';
import CertifiedCoursesIcon from '../assets/2124302_document_app_essential_icon.svg';
import StudentsEnrolledIcon from '../assets/3586376_education_graduate_graduation cap_icon.svg';
import PassingToUniversitiesIcon from '../assets/290139_address_book_bookmark_document_education_icon.svg';
import SatisfiedParentsIcon from '../assets/2202250_account_avatar_human_man_profile_icon.svg';

const AboutUs = () => {
  return (
    <div className="font-sans">
    <main className="bg-black text-white text-center py-8">
      <h1 className="text-3xl md:text-4xl mb-4">
        <span className="text-red-600">About</span> Us
      </h1>
      <p className="text-xl md:text-2xl">Inspiring growth through education</p>
    </main>


      <div className="flex justify-around mt-8">
        {[
          { src: graduationIcon, text: 'Graduation' },
          { src: bookIcon, text: 'Majors' },
          { src: collegeIcon, text: 'Colleges' },
          { src: studentIcon, text: 'Students' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="p-4"
              style={{
                backgroundImage: `url(${bgShape})`,
                backgroundSize: 'cover',
                width: '300px',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={item.src} alt={item.text} className="w-32 h-32" />
            </div>
            <p className="-mt-24 text-white text-lg">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-white mt-24 space-y-4 md:space-y-0">
        <div className="w-full md:w-2/5 relative">
          <iframe
            className="w-full h-56 md:h-80"
            src="https://www.youtube.com/embed/0j78_6JtARU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="w-full md:w-3/5 p-4">
          <h2 className="text-md md:text-lg font-semibold text-gray-500">ABOUT US</h2>
          <h1 className="text-lg md:text-xl font-bold mt-2 text-gray-800">Welcome to <span className="text-red-500">upGrad</span></h1>
          <p className="mt-4 text-sm md:text-lg text-gray-700">
            upGrad is the overseas education division of Asia's leading integrated learning, skilling, and workforce development company. Their mission is to transform your aspiration of studying abroad into a tangible experience. upGrad offers distinctive pathway programs designed to provide easy, flexible, and affordable access to international education, ensuring students can achieve their academic and professional goals abroad.
          </p>
          <div className="mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full text-md md:text-lg">Learn More</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-black text-white h-[30vh] md:h-[50vh] relative mb-24">
        <div className="text-center text-2xl md:text-5xl mt-10">
          <p>Our campuses are living <br /> laboratories for sustainability</p>
        </div>

        <div className="w-full flex justify-center mt-24">
          <div className="relative w-full max-w-md mx-auto">
            <iframe
              width="800"
              height="340"
              src="https://www.youtube.com/embed/YpwXLyZz1O8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-35 relative z-10"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button className="bg-purple-500 text-white p-2 rounded-full">
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-white z-0"></div>
          </div>
        </div>
      </div>
      <div className="p-8 mt-32">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-6">Who we are</h1>
            <p className="text-lg leading-relaxed mb-6">
              At UpGrad Kalam, we are passionate about transforming education through innovative and accessible online learning solutions. As a leading online higher education platform, we offer a wide range of industry-relevant courses designed in collaboration with top universities and industry experts. Our mission is to empower individuals with the knowledge and skills they need to excel in their careers and make a meaningful impact in their fields. With a commitment to quality education, personalized support, and a community of lifelong learners, UpGrad Kalam is dedicated to helping you achieve your professional and personal goals.
            </p>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
            <img src={Image} alt="Who we are" className="rounded-lg" />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-8 mt-8">
        <h2 className="text-center text-xl font-semibold mb-4">THE NUMBER SAYS IT ALL</h2>
        <h3 className="text-center text-3xl font-bold mb-6">WHY CHOOSE US</h3>
        <div className="flex flex-wrap justify-around">
          <div className="text-center mb-4 flex-shrink-0">
            <img src={CertifiedCoursesIcon} alt="Certified Courses" className="mx-auto mb-2" />
            <p className="text-3xl font-bold">36</p>
            <p className="text-lg">Certified Courses</p>
          </div>
          <div className="text-center mb-4 flex-shrink-0">
            <img src={StudentsEnrolledIcon} alt="Students Enrolled" className="mx-auto mb-2" />
            <p className="text-3xl font-bold">2,675</p>
            <p className="text-lg">Students Enrolled</p>
          </div>
          <div className="text-center mb-4 flex-shrink-0">
            <img src={PassingToUniversitiesIcon} alt="Passing to Universities" className="mx-auto mb-2 mt-[-07px]" />
            <p className="text-3xl font-bold">95%</p>
            <p className="text-lg">Passing to Universities</p>
          </div>
          <div className="text-center mb-4 flex-shrink-0">
            <img src={SatisfiedParentsIcon} alt="Satisfied Parents" className="mx-auto mb-2" />
            <p className="text-3xl font-bold">100%</p>
            <p className="text-lg">Satisfied Parents</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16 md:mt-24 px-4">
  <div className="relative w-full max-w-none mx-auto">
    <iframe
      width="100%"
      height="600"
      src="https://www.youtube.com/embed/LtRZGymAUIE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-50"
    ></iframe>
  </div>

</div>

      </div>
   
  );
};

export default AboutUs;
