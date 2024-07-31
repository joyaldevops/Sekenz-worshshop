//  Courses Page

import React from "react";
import { FaSearch } from "react-icons/fa";
import heroBg from "../../assets/images/luxury-hotel-dubai-front-view-illuminated-dusk-generated-by-ai.jpg";
import liverPool from "../../assets/images/Liverpool John Moores University.webp";
import coloraDo from "../../assets/images/Colorado State University.jpg";
import deakinBuss from "../../assets/images/Deakin Business School.jpg";
import bangLore from "../../assets/images/IIIT Bangalore.webp";
import kozhiKode from "../../assets/images/IIM Kozhikode.jpg";
import opJindal from "../../assets/images/OP Jindal Globl University.jpg";
import YouTube from 'react-youtube';

const CoursePage = () => {

  const videoUrl = 'https://www.youtube.com/watch?v=hOHKltAiKXQ&list=RDhOHKltAiKXQ&start_radio=1';

  const cardData = [
    {
      id: 1,
      image: liverPool,
      imageTitle: "Liverpool John Moores University",
      courseTitle: "Master of Business Administration",
      description:
        "With a focus on quality education, upGrad's MBA programs provide industry-relevant curriculum, experienced faculty, and a global learning experience to help students achieve their professional aspirations.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 2,
      image: deakinBuss,
      imageTitle: "Deakin Business School",
      courseTitle: "Master of Business Administration",
      description:
        "With a focus on quality education, upGrad's MBA programs provide industry-relevant curriculum, experienced faculty, and a global learning experience to help students achieve their professional aspirations.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 3,
      image: coloraDo,
      imageTitle: "Colorado State University",
      courseTitle: "Master of Business Administration",
      description:
        "UpGrad partners with Colorado State University to offer flexible and affordable MBA programs, providing industry-relevant curriculum and a global learning experience to help students achieve their professional goals.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 4,
      image: liverPool,
      imageTitle: "Liverpool John Moores University",
      courseTitle: "Master of Science in Data Science",
      description:
        "upGrad partners with Liverpool John Moores University to offer a flexible and affordable MS in Data Science program, featuring industry-relevant curriculum and a global learning experience to help students achieve their professional goals.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 5,
      image: bangLore,
      imageTitle: "IIIT Bangalore",
      courseTitle: "Post Graduate in Data Science & AI ( Executive)",
      description:
        "upGrad partners with IIIT Bangalore to offer a Post Graduate in Data Science & AI (Executive) program, providing a flexible, affordable, and industry-relevant curriculum with a global learning experience for professionals.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 6,
      image: coloraDo,
      imageTitle: "Colorado State University",
      courseTitle: "Masters in Applied Statistics",
      description:
        "upGrad partners with Colorado State University to offer a Master in Applied Statistics program, providing a flexible, affordable, and industry-relevant curriculum with a global learning experience for professionals.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 7,
      image: opJindal,
      imageTitle: "OP Jindal Globl University",
      courseTitle: "Master of Design in User Experience Design",
      description:
        "upGrad partners with OP Jindal Global University to offer a Master of Design in User Experience Design program. This program provides a flexible, affordable, and industry-relevant curriculum, along with a global learning experience for aspiring UX designers.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 8,
      image: kozhiKode,
      imageTitle: "IIM Kozhikode",
      courseTitle: "HR Management & Analytics",
      description:
        "upGrad partners with IIM Kozhikode to offer an HR Management & Analytics program, providing a flexible, affordable, and industry-relevant curriculum with a global learning experience for HR professionals.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
    {
      id: 9,
      image: liverPool,
      imageTitle: "Liverpool John Moores University",
      courseTitle: "Master of Science in Machine Learning & AI",
      description:
        "upGrad partners with Liverpool John Moores University to offer a Master of Science in Machine Learning & AI program. This program provides a flexible, affordable, and industry-relevant curriculum, along with a global learning experience for aspiring AI professionals.",
      duration: "2 Year",
      course: "Course",
      subtype: "Degree",
      type: "Maters Degree",
    },
  ];

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">ADMISSION ‘24</h1>
          <h2 className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Your bright future is
          </h2>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8">our mission</h2>
          <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded-full flex items-center pr-1 pl-2 py-1 shadow-lg">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter your keyword"
              className="flex-grow bg-white focus:outline-none"
            />
            <button className="bg-red-600 text-white py-2 px-4 rounded-full ml-2">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl">ABOUT US</h1>
        <h2 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl">Welcome to</h2>
        <h2 className="text-red-600 text-2xl sm:text-3xl md:text-4xl mb-6">upGrad Kollam</h2>
        <p className="text-white w-full sm:w-3/4 lg:w-2/3 text-left">
          upGrad is the overseas education division of Asia’s leading integrated
          learning, skilling, and workforce development company. Their mission
          is to transform your aspiration of studying abroad into a tangible
          experience. upGrad offers distinctive pathway programs designed to
          provide easy, flexible, and affordable access to international
          education, ensuring students can achieve their academic and
          professional goals abroad.
        </p>
        <button className="mt-6 bg-red-600 text-white rounded-full w-28 h-8">
          {" "}
        </button>
      </div>

      <div className="bg-rose-50 py-10 px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="mb-6 text-center">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl">FEATURED COURSES</h1>
        </div>
        <div className="mb-10 text-center">
          <p className="text-xl font-bold">
            We’re here to <span className="text-red-500">help</span> you
          </p>
          <p className="text-xl font-bold">build your career</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <div key={card.id} className="bg-white rounded-[50px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <img
                    src={card.image}
                    alt={card.imageTitle}
                    className="rounded-t-[50px] h-52 w-full object-cover mb-4 mx-auto"
                  />
                  <h2 className="text-red-500 font-bold text-center mb-6">
                    {card.imageTitle}
                  </h2>
                  <h3 className="text-black font-bold text-center mb-6">
                    {card.courseTitle}
                  </h3>
                  <p className="text-black text-center mx-2 mb-6">{card.description}</p>
                </div>

                <div className="flex items-center m-4 justify-center space-x-6">
                  <button className="bg-red-600 text-white rounded-[50px] px-8 py-1">
                    Apply
                  </button>

                  <div className="text-black flex flex-col items-center">
                    <span className="font-bold"> {card.duration}</span>
                    <span> {card.course}</span>
                  </div>
                  <div className="border-l-2 border-black h-9 mx-4 my-auto"></div>

                  <div className="text-black flex flex-col items-center">
                    <span className="font-bold"> {card.type}</span>
                    <span> {card.subtype}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-black h-[50vh] flex flex-col justify-center items-center text-center">
        <div className="mb-4 pt-10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">YOUR BRIGHT FUTURE</h1>
          <h2 className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-semibold">IS OUR MISSION</h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="border-2 border-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
            <YouTube className="w-full" videoId={videoUrl} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
