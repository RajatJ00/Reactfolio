import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLink } from "react-icons/fa";

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
    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, borderRadius: "50%", width: "50px", height: "50px", background: "#06c0df", boxShadow: "inset 0 0 20px #000f1e", position: "absolute", left: "1165px", padding: "16px" }}
          onClick={onClick}
        />
      );
    }

    function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, borderRadius: "50%", width: "50px", height: "50px", background: "#06c0df", boxShadow: "inset 0 0 20px #000f1e", position: "absolute", left: "1105px", padding: "16px" }}
          onClick={onClick}
        />
      );
    }
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
            <div className="text-gray-100">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20 shadow-black shadow-inner rounded-xl px-5 pb-2 mt-8">
                <div className="flex gap-5">
                  <h1 className="w-fit pb-1 px-3 text-3xl bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Myshow</h1>
                </div>
                <p className="m-2 text-lg text-black">Built a project to search for Movies details and TV details by using Reactjs, Tailwind CSS, TMDB API, NPM Packages, and Razorpay. and project interface even better than any other website! Integrate with a movie database API, display data based on user queries, and provide movie details.</p>
              </div>
              <img className="float-right rounded-xl w-fit h-80 object-contain mr-32 z-10 hover:scale-110" src="/Img/myshow1.png" alt="my show project" />
            </div>

            <div className="text-gray-100">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20  shadow-black shadow-inner rounded-xl px-5 pb-2 mt-8">
                <div className="flex gap-5">
                  <h1 className="w-fit pb-1 px-3 text-3xl bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Space Tourism</h1>
                </div>
                <p className="m-2 text-lg text-black">Explore the wonders of space with this immersive web platform, Space Tourism. Choose destinations - Moon, Mars, Europa, and Titan, each offering a unique experience. Meet the skilled crew members, and discover cutting-edge space technologies. Built using ReactJS, Tailwind CSS, and NPM packages for a sleek and responsive design.</p>
              </div>
              <img className="float-right rounded-xl w-fit h-80 object-contain mr-32 z-10 hover:scale-110" src="/Img/myshow1.png" alt="my show project" />
            </div>

            <div className="text-gray-100">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20  shadow-black shadow-inner rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Ayurveda</h1>
                <p className="m-2 text-lg text-black">Application is designed for using the ayurvedic remedies for the simple Diseases, Foods, Health Tips, Skincare, Yoga asanas, and Prakriti. This application is used for small diseases. For major diseases it will be better to consult the doctors before going for any medicines.</p>
              </div>
              <img className="float-right rounded-xl w-fit h-80 object-contain mr-32" src="/Img/ayurveda.png" alt="ayurveda project" />
              <img className="float-right rounded-xl w-fit h-80 object-contain mr-32" src="/Img/ayurveda_login.png" alt="ayurveda_login project" />
            </div>

            <div className="text-gray-100">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20  shadow-black shadow-inner rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">CCMS</h1>
                <p className="m-2 text-lg text-black">This software helps manage Student, Teacher, Courses, Fees, Attendance related data. Administrators are provided with a full control over this software.</p>
              </div>
              <img className="float-right rounded-xl w-fit h-80 object-contain mr-32" src="/Img/ccms.png" alt="coaching class management system project" />
            </div>

            <div className="text-gray-100">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20  shadow-black shadow-inner rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Booklist</h1>
                <p className="m-2 text-lg text-black">This software helps manage Books related data. Provided books data to manupilate with postman api a full control over this software.</p>
              </div>
              <img className="float-right rounded-xl w-fit h-80 object-contain mr-32" src="/Img/booklist.png" alt="booklist project" />
            </div>

            <div className="text-gray-100">
              <div className="absolute w-1/3 font-bold ml-16 bg-white/20  shadow-black shadow-inner rounded-xl px-5 pb-2 mt-8">
                <h1 className="w-fit pb-1 px-3 text-3xl bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Zomato-Clone</h1>
                <p className="m-2 text-lg text-black">This project is a clone of the popular food delivery platform "Zomato," built using HTML, CSS, JavaScript, npm packages, and the Flexbox layout. It aims to replicate the key features and functionalities of Zomato, allowing users to search for restaurants, view menus, place orders, and more.</p>
              </div>
              <img className="float-right rounded-xl w-fit h-80 object-contain mr-32" src="/Img/zomato.png" alt="zomato clone project" />
            </div>
          </Slider>

          <Slider
            className="w-4/6 my-3 mx-auto font-bold text-[#7ddefd]"
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            infinite={true}
            slidesToShow={5}
            centerMode={true}
            centerPadding="0"
            onLazyLoad={true}
            focusOnSelect={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />} >
            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf]">
              <h1 className="text-xl">Myshow<a title="MyShow-Vercel" href="https://my-show-rj.vercel.app/" className="text-cyan-400 p-3 m-1 hover:text-white/40 rounded-xl float-right"><FaLink /></a></h1>
              <p className="text-base text-black"><i>(Reactjs)</i></p>
              <div className="w-fit h-40">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="my show project" /></div>
            </div>
            
            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf]">
              <h1 className="text-xl">Space Tourism<a title="Space Tourism-Vercel" href="https://space-tourism-rj.vercel.app/" className="text-cyan-400 p-3 m-1 hover:text-white/40 rounded-xl float-right"><FaLink /></a></h1>
              <p className="text-base text-black"><i>(Reactjs)</i></p>
              <div className="w-fit h-40">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="my show project" /></div>
            </div>

            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf]">
              <h1 className="text-xl">Ayurveda App</h1>
              <p className="text-base text-black"><i>(Android Studio)</i></p>
              <div className="w-fit h-40">
                <img className="w-fit h-40 rounded-xl object-contain" src="/Img/myshow.png" alt="ayurveda project" /></div>
            </div>

            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf]">
              <h1 className="text-xl">CCMS</h1>
              <p className="text-base text-black"><i>(DotNet)</i></p>
              <div className="w-fit h-40">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="coaching class management system project" /></div>
            </div>

            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf]">
              <h1 className="text-xl">Booklist</h1>
              <p className="text-base text-black"><i>(JavaScript)</i></p>
              <div className="w-fit h-40">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="booklist project" /></div>
            </div>

            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf]">
              <h1 className="text-xl">Zomato-Clone</h1>
              <p className="text-base text-black"><i>(HTML, CSS & JS)</i></p>
              <div className="w-fit h-40">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="zomato-clone project" /></div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
