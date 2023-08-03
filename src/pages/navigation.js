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

    let links = [{name:"home",link:home},{name:"about",link:about},{name:"projects",link:projects},{name:"contact",link:contact},]
    return (

        <>
            <div className="flex w-full  sm:h-12  relative top-10 gap-10">
                {
                    links.map(elem=>{
                        return(
                            <>
                                <div className={`${elem.name} icon  flex justify-center  ` }onClick={()=>toPage(elem.name)}>
                                    <Image src={elem.link} height={50} width = {50} alt="ab" className="cursor-pointer"></Image>
                                </div> 
                            </>
                        )
                    })
                }
                {/* <div className=" icon  flex justify-center  "  onClick={()=>toPage("about")}>
                    <Image src={about} height={50} width = {50} alt="ab" className="cursor-pointer"></Image>
                </div>
                <div className=" icon  justify-center flex "  onClick={()=>toPage("projects")}>
                    <Image src={projects} height={50} width = {50} alt="ab" className="cursor-pointer"></Image>
                </div>
                <div className=" icon  justify-center flex " onClick={()=>toPage("contact")}>
                    <Image src={contact} height={50} width = {50} alt="ab" className="cursor-pointer"></Image>
                </div> */}

            </div>
        </>
    )
}