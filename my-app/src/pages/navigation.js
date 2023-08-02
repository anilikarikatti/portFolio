import {useRouter} from "next/router"
import Image from "next/image";

import about from "public/images/about.png"
import home from "public/images/home.png"
import contact from "public/images/contact.png"
import projects from "public/images/projects.png"


export default function Navigation (){
    
    let router = useRouter();

  let  toPage = (page)=>{
    console.log("called");
        router.push(page);
  }
    return (

        <>
            <div className="flex w-full  sm:h-12  relative top-10 gap-10">
                <div className=" icon relative left-2  justify-center flex " onClick={()=>toPage("home")} >
                    <Image src={home} height={50} width = {50} alt="ab"  className="cursor-pointer"></Image>
                </div>
                <div className=" icon  flex justify-center  "  onClick={()=>toPage("about")}>
                    <Image src={about} height={50} width = {50} alt="ab" className="cursor-pointer"></Image>
                </div>
                <div className=" icon  justify-center flex "  onClick={()=>toPage("projects")}>
                    <Image src={projects} height={50} width = {50} alt="ab" className="cursor-pointer"></Image>
                </div>
                <div className=" icon  justify-center flex " onClick={()=>toPage("contact")}>
                    <Image src={contact} height={50} width = {50} alt="ab" className="cursor-pointer"></Image>
                </div>

            </div>
        </>
    )
}