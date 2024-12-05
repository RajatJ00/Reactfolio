import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLink } from "react-icons/fa";
import ProjectInfo from "./Components/ProjectInfo.components";

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
          style={{ ...style, borderRadius: "50%", width: "50px", height: "50px", background: "#06c0df", boxShadow: "inset 0 0 20px #000f1e", position: "absolute", left: "965px", padding: "16px" }}
          onClick={onClick}
        />
      );
    }

    function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, borderRadius: "50%", width: "50px", height: "50px", background: "#06c0df", boxShadow: "inset 0 0 20px #000f1e", position: "absolute", left: "900px", padding: "16px" }}
          onClick={onClick}
        />
      );
    }
    return (
      <div className="block px-10">
        <div className=" rounded-xl bg-white/10 hover:bg-white/[0.14] backdrop-blur-sm transition duration-300 ease-in-out">
          <h1 className="w-fit bg-gradient-to-br from-cyan-500 to-black border-b rounded-b-xl text-black hover:text-neutral-50 flex gap-2 px-6 py-2 text-base font-medium uppercase mx-5 transition duration-150">Projects</h1>
          <Slider className="text-gray-100 mt-6 mx-80"
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            speed={150}
            arrows={false}
            fade={true}>
            {/* PROJECT DESC */}
            <ProjectInfo />
            <div className="h-[360px] hover:h-fit cursor-pointer shadow-black shadow-inner hover:text-black text-neutral-50 text-lg overflow-hidden group  rounded-xl bg-white/10 hover:bg-white/[0.14] backdrop-blur-sm transition duration-300 ease-in-out">
              <div>
                <h1 className="flex items-center justify-between mx-5 px-2 pt-[6px] pb-1 font-bold uppercase bg-white/20 rounded-b-xl">Space Tourism
                  <a title="MyShow-Vercel" href="https://space-tourism-rj.vercel.app/" className="text-neutral-50 hover:text-white/40"><FaLink className="w-5 h-5" /></a>
                </h1>
                <p className="m-2 line-clamp-6 text-center group-hover:text-black translate-y-5 text-transparent group-hover:translate-y-0 duration-500 ease-in-out">Explore the wonders of space with this immersive web platform, Space Tourism. Choose destinations - Moon, Mars, Europa, and Titan, each offering a unique experience. Meet the skilled crew members, and discover cutting-edge space technologies. Built using ReactJS, Tailwind CSS, and NPM packages for a sleek and responsive design.</p>
              </div>
              <img className="bg-white object-fill -translate-y-32 group-hover:-translate-y-0 duration-300 ease-in" src="/Img/Space_Tourism.jpg" alt="Space Tourism Project" />
            </div>
            <div className="h-[360px] hover:h-fit cursor-pointer bg-white/10 shadow-black shadow-inner rounded-xl hover:text-black text-neutral-50 hover:bg-white/20 text-lg transition duration-500 overflow-hidden group">
              <div>
                <h1 className="flex items-center justify-between mx-5 px-2 pt-[6px] pb-1 font-bold uppercase bg-white/20 rounded-b-xl">Ayurveda App
                  <a title="MyShow-Vercel" href="https://my-show-rj.vercel.app/" className="text-neutral-50 hover:text-white/40"><FaLink className="w-5 h-5" /></a>
                </h1>
                <p className="m-2 line-clamp-6 text-center group-hover:text-black translate-y-5 text-transparent group-hover:translate-y-0 duration-500 ease-in-out">Application is designed for using the ayurvedic remedies for the simple Diseases, Foods, Health Tips, Skincare, Yoga asanas, and Prakriti. This application is used for small diseases. For major diseases it will be better to consult the doctors before going for any medicines.</p>
              </div>
              <img className="bg-white object-fill -translate-y-32 group-hover:-translate-y-0 duration-300 ease-in" src="/Img/ayurveda.png" alt="Ayurveda App Project" />
            </div>
            <div className="h-[360px] hover:h-fit cursor-pointer bg-white/10 shadow-black shadow-inner rounded-xl hover:text-black text-neutral-50 hover:bg-white/20 text-lg transition duration-500 overflow-hidden group">
              <div>
                <h1 className="flex items-center justify-between mx-5 px-2 pt-[6px] pb-1 font-bold uppercase bg-white/20 rounded-b-xl">Coaching Class Management System
                  <a title="MyShow-Vercel" href="https://my-show-rj.vercel.app/" className="text-neutral-50 hover:text-white/40"><FaLink className="w-5 h-5" /></a>
                </h1>
                <p className="m-2 line-clamp-6 text-center group-hover:text-black translate-y-5 text-transparent group-hover:translate-y-0 duration-500 ease-in-out">This software helps manage Student, Teacher, Courses, Fees, Attendance related data. Administrators are provided with a full control over this software.</p>
              </div>
              <img className="bg-white object-fill -translate-y-32 group-hover:-translate-y-0 duration-300 ease-in" src="/Img/ccms.png" alt="coaching class management system Project" />
            </div>
            <div className="h-[360px] hover:h-fit cursor-pointer bg-white/10 shadow-black shadow-inner rounded-xl hover:text-black text-neutral-50 hover:bg-white/20 text-lg transition duration-500 overflow-hidden group">
              <div>
                <h1 className="flex items-center justify-between mx-5 px-2 pt-[6px] pb-1 font-bold uppercase bg-white/20 rounded-b-xl">Booklist
                  <a title="MyShow-Vercel" href="https://my-show-rj.vercel.app/" className="text-neutral-50 hover:text-white/40"><FaLink className="w-5 h-5" /></a>
                </h1>
                <p className="m-2 line-clamp-6 text-center group-hover:text-black translate-y-5 text-transparent group-hover:translate-y-0 duration-500 ease-in-out">This software helps manage Books related data. Provided books data to manupilate with postman api a full control over this software.</p>
              </div>
              <img className="bg-white object-fill -translate-y-32 group-hover:-translate-y-0 duration-300 ease-in" src="/Img/booklist.png" alt="Booklist Project" />
            </div>
            <div className="h-[360px] hover:h-fit cursor-pointer bg-white/10 shadow-black shadow-inner rounded-xl hover:text-black text-neutral-50 hover:bg-white/20 text-lg transition duration-500 overflow-hidden group">
              <div>
                <h1 className="flex items-center justify-between mx-5 px-2 pt-[6px] pb-1 font-bold uppercase bg-white/20 rounded-b-xl">Zomato-Clone
                  <a title="MyShow-Vercel" href="https://my-show-rj.vercel.app/" className="text-neutral-50 hover:text-white/40"><FaLink className="w-5 h-5" /></a>
                </h1>
                <p className="m-2 line-clamp-6 text-center group-hover:text-black translate-y-5 text-transparent group-hover:translate-y-0 duration-500 ease-in-out">This project is a clone of the popular food delivery platform "Zomato," built using HTML, CSS, JavaScript, npm packages, and the Flexbox layout. It aims to replicate the key features and functionalities of Zomato, allowing users to search for restaurants, view menus, place orders, and more.</p>
              </div>
              <img className="bg-white object-fill -translate-y-32 group-hover:-translate-y-0 duration-300 ease-in" src="/Img/zomato.png" alt="Zomato Clone Project" />
            </div>
          </Slider>

          <Slider
            className="w-4/6 my-6 mx-auto font-bold text-[#7ddefd]"
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            infinite={true}
            slidesToShow={3}
            centerMode={true}
            centerPadding="40px"
            onLazyLoad={true}
            focusOnSelect={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />} >
            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf] gap-10">
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Myshow</h1>
                <a title="MyShow-Vercel" href="https://my-show-rj.vercel.app/" className="text-cyan-400 m-2 hover:text-white/40 rounded-xl transition"><FaLink className="w-5 h-5" /></a>
              </div>
              <p className="text-base text-black"><i>(Reactjs)</i></p>
              <div className="w-fit h-40 flex justify-center items-center">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="MyShow project" /></div>
            </div>

            <div className="px-2 shadow-[inset_0_7px_50px_5px_#000f1e] rounded-xl bg-[#008aaf]">
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Space Tourism</h1>
                <a title="Space Tourism-Vercel" href="https://space-tourism-rj.vercel.app/" className="text-cyan-400 m-2 hover:text-white/40 rounded-xl transition"><FaLink className="w-5 h-5" /></a>
              </div>
              <p className="text-base text-black"><i>(Reactjs)</i></p>
              <div className="w-fit h-40">
                <img className="w-full h-full rounded-xl" src="/Img/myshow.png" alt="Space Tourism Project" /></div>
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
