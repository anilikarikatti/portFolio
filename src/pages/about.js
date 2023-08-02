import Image from "next/image";
import BackImg from "/public/images//anil_profile.png"
import "aos/dist/aos.css";
import AOS from 'aos'
import { useEffect } from 'react'
import Navigation from "./navigation";
export default function About(){
    useEffect(()=>{

        console.log(AOS);
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[])
    return(
        <>
              <div className={` h-screen background-color overflow-y-scroll overflow-x-hidden `} >

                {/* header */}

                <div className="sm:w-1/2 w-full">
                <Navigation />

                </div>
                <div className="flex relative top-16 text-white sm:text-4xl justify-center items-center">
                    <div className="capitalize relative fonts-header ">about me . . . </div>
                    <div className="w-[70%] h-1 border-2 bar relative top-3"></div>
                </div>

                <div className="h-full flex w-full flex-col sm:flex-row  ">
                   
                    <div className=" sm:w-1/2 w-full sm:h-full h-[60%] w-full justify-center items-center flex " >
                    
                        
                         <div className="backimg h-[60%] w-[60%] rounded" data-aos="fade-right"></div>
                    </div>

                    <div data-aos="zoom-in-right" className='sm:h-full h-[40%] sm:w-1/2  w-full'>
                        <div className="flex relative    text-40 text-gray-300 h-full flex-col gap-10 sm:top-10  -top-20 w-[96%] left-[2%] right-[2%] items-center">

                             <div className="flex gap-6 relative sm:top-12 top-4">
                                <h1  className = "text-3xl fonts-content">Hello ! </h1>
                                <div className="hello-png h-8 w-8 relative "></div>
                              
                            </div>
                           <div className="sm:justify-start justify-center flex flex-col relative sm:top-10 top-5 fonts-content text-justify ">
                           <h3 className=" text-2xl">I am <b className="capitalize">anil karikatii</b> ,</h3>
                            <h3 className="leading-8 sm:text-xl text-md">
                               
                                I have done my graduation in computer science and  Engineering and currently I am working as a full stack Developer.
                                I am passionate developer with hands on experience in developing scalable websites/application using a wide range of front end technologies and backend technologies. I am enthusiastic about fast evolving front end world and very Passionate and would love to explore the technologies</h3>
                            
                           </div>

                           <div className="relative top-8 w-full">
                                <h2 className="text-3xl capitalize underline-offset-4 underline fonts-header"> my skills</h2>

                                <div className=" flex w-full flex-wrap sm:gap-x-12 gap-x-10 relative top-10 fonts-content capitalize">
                                    <div>
                                        <div className="html h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">html</h2>
                                    </div>
                                    <div>
                                        <div className="css h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">css</h2>
                                    </div>
                                    <div>
                                        <div className="js h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">javascript</h2>
                                    </div>
                                    
                                  
                                    <div>
                                        <div className="express h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">express js</h2>
                                    </div>

                                    <div>
                                        <div className="node h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">node js</h2>
                                    </div>
                                    <div>
                                        <div className="tailwind h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">tailwind css</h2>
                                    </div>
                                    
                                     <div>
                                        <div className="react h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">react js</h2>
                                    </div>
                                    <div>
                                        <div className="next h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">next js</h2>
                                    </div>
                                    <div>
                                        <div className="sql h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">mysql </h2>
                                    </div>
                                    <div>
                                        <div className="aws h-24 w-20"> </div>
                                        <h2 className="text-center relative -top-4">aws</h2>
                                    </div>
                                    
                                   
                                    

                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                </div>
                        </>
    )
}