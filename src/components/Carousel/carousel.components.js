import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class asNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="w-full px-10 ">
        <div className="border-2 border-solid rounded-xl bg-white/30">
          <h1 className="w-fit px-3 pb-1 mx-2 ml-7 text-2xl text-white font-bold border-b-2 bg-gradient-to-r from-cyan-500 to-black rounded-b-xl cursor-default">Projects</h1>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            speed={150}
            arrows={false}
            fade={true}>
            <div className="">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20 shadow-inner shadow-black rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl text-gray-100 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Myshow</h1>
                <p className="m-2 text-lg text-gray-200">This project is a clone of the popular "My Show" website, built using React.js, Tailwind CSS, TMDB API, NPM Packages [react-carousel, youtube-react, & sweetalert], and Razorpay. It allows users to browse and book movie tickets online, providing a seamless and user-friendly movie booking experience.</p>
              </div>
              <img className="w-full h-80 object-contain ml-60" src="/Img/myshow.png" alt="my show project" />
            </div>

            <div className="">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20 shadow-inner shadow-black rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl text-gray-100 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Ayurveda</h1>
                <p className="m-2 text-lg text-gray-200">Application is designed for using the ayurvedic remedies for the simple Diseases, Foods, Health Tips, Skincare, Yoga asanas, and Prakriti. This application is used for small diseases. For major diseases it will be better to consult the doctors before going for any medicines.</p>
              </div>
              <img className="w-full h-80 object-contain ml-60" src="/Img/ayurveda.png" alt="ayurveda project" />
            </div>

            <div className="">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20 shadow-inner shadow-black rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl text-gray-100 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">CCMS</h1>
                <p className="m-2 text-lg text-gray-200">This software helps manage Student, Teacher, Courses, Fees, Attendance related data. Administrators are provided with a full control over this software.</p>
              </div>
              <img className="w-full h-80 object-contain ml-60" src="/Img/ccms.png" alt="coaching class management system project" />
            </div>

            <div className="">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20 shadow-inner shadow-black rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl text-gray-100 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Booklist</h1>
                <p className="m-2 text-lg text-gray-200">This software helps manage Books related data. Provided books data to manupilate with postman api a full control over this software.</p>
              </div>
              <img className="w-full h-80 object-contain ml-60" src="/Img/booklist.png" alt="booklist project" />
            </div>

            <div className="">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20 shadow-inner shadow-black rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl text-gray-100 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Zomato-Clone</h1>
                <p className="m-2 text-lg text-gray-200">This project is a clone of the popular food delivery platform "Zomato," built using HTML, CSS, JavaScript, npm packages, and the Flexbox layout. It aims to replicate the key features and functionalities of Zomato, allowing users to search for restaurants, view menus, place orders, and more.</p>
              </div>
              <img className="w-full h-80 object-contain ml-60" src="/Img/zomato.png" alt="zomato clone project" />
            </div>
          </Slider>

          <Slider
            className="mx-16 my-3 font-bold"
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            infinite={true}
            slidesToShow={3}
            centerMode={true}
            focusOnSelect={true} >
            <div className="cursor-pointer w-fit h-fit px-2  shadow-inner shadow-black rounded-xl bg-gradient-to-r from-cyan-500 to-black">
              <h1 className="text-xl">Myshow</h1>
              <p className="text-base text-gray-200">(React.js)</p>
              <div className="w-fit h-60">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="my show project" /></div>
            </div>

            <div className="cursor-pointer w-fit h-fit px-2  shadow-inner shadow-black rounded-xl bg-gradient-to-r from-cyan-500 to-black">
              <h1 className="text-xl">Ayurveda App</h1>
              <p className="text-base text-gray-200">(Android Studio)</p>
              <div className="w-fit h-60">
                <img className="w-full h-full rounded-xl" src="/Img/ayurveda.png" alt="ayurveda project" /></div>
            </div>

            <div className="cursor-pointer w-fit h-fit px-2  shadow-inner shadow-black rounded-xl bg-gradient-to-r from-cyan-500 to-black">
              <h1 className="text-xl">CCMS</h1>
              <p className="text-base text-gray-200">(DotNet)</p>
              <div className="w-fit h-60">
                <img className="w-full h-full rounded-xl" src="/Img/ccms.png" alt="coaching class management system project" /></div>
            </div>

            <div className="cursor-pointer w-fit h-fit px-2  shadow-inner shadow-black rounded-xl bg-gradient-to-r from-cyan-500 to-black">
              <h1 className="text-xl">Booklist</h1>
              <p className="text-base text-gray-200">(JavaScript)</p>
              <div className="w-fit h-60">
                <img className="w-full h-full rounded-xl" src="/Img/booklist.png" alt="booklist project" /></div>
            </div>

            <div className="cursor-pointer w-fit h-fit px-2  shadow-inner shadow-black rounded-xl bg-gradient-to-r from-cyan-500 to-black">
              <h1 className="text-xl">Zomato-Clone</h1>
              <p className="text-base text-gray-200">(HTML, CSS & JavaScript)</p>
              <div className="w-fit h-60">
                <img className="w-full h-full rounded-xl" src="/Img/zomato.png" alt="zomato-clone project" /></div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
