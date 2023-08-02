import ProjectTemplate from "./project"

import {useRouter} from "next/router"

import Bio1 from "/public/images/bio3.png"
import Bio2 from "/public/images/bio4.png"

import Shala1 from "/public/images/kou1.png"
import Shala2 from "/public/images/kou2.png"


import Food1 from "/public/images/food1.png"
import Food2 from "/public/images/food2.png"

import Resume1 from "/public/images/rbuilder3.png"
import Resume2 from "/public/images/rbuilder4.png"


import Memory1 from "/public/images/memory_game1.png"
import Memory2 from "/public/images/memory_game2.png"


import Quiz1 from "/public/images/quiz1.png"
import Quiz2 from "/public/images/quiz2.png"

import Navigation from "./navigation"

export default function Projects(){

    console.log(Bio1,Bio2);

    const projects = [
        {title : "bio backup",content:"This Is Our Client Product . This Application is Available In Play Store Also. This Product Provides A Secured Account In Cloud To Everyone To Access Medical Documents Such As MRI Report, CT Scan, X Ray, Lab Reports, Other Medical Tests, 3D Imaging, Medical Prescriptions In Digital Format From The Original Issuers Of These Certificates. The Project Will Be Hosted On Aws I Have Also Little Bit Knowledge About This In This Project I Have Been Be Worked On Backend Using Node Js And Express Js And Mysql The Admin Side Of This Product Has Been Done By Be ..This Project Using Nunjucks Template, Tailwind Css , Html Javascript",technologies:['node js','mysql','aws'],allTechnologies:['Node Js',
            'Express Js',
            'Mysql',
            'Nunjucks Template',
            'Tailwind Css',
            'Html',
            'Javascript'] , 
        gallary:[Bio1.src,Bio2.src],
        src:"https://play.google.com/store/apps/details?id=project.sathwik.mybiobackup&hl=en_US"
        },

         {title:"my smart shala",content:"This Is Our Client Product This Product Provides A Learning Management For Universities And Also Details Of Teacher And Students Of University . Add Bulk Student And Bulk Teachers For The University And Admin Also Send The Video , Audio , Notes As A Documents . In This Project I Have Been Be Worked On Frontend Using React Js And Next Js And Also Used Tailwind Css And Material Ui Components",technologies:['react js','next js','material ui'] , allTechnologies:['React Js',
         'Next Js',
         
         'Tailwind Css',
         'Material ui',
         'Javascript'] , 
     gallary:[Shala1.src,Shala2.src],
    src:"https://play.google.com/store/apps/details?id=com.ksouonlinestudy.app.twa"
        },
 
            {title:"food order system",content:"This Is Food Order System Project Same Like Swiggy , Zomato And Also It Maintains Both Side Of Client And Restorent Side . The Client Is Capable To Order Foods After Login And He Also Want To See His Orders .. In Restorent Side The Hotels Can See The Todays Orders .. The Admin Can Add The Foods And Restorents . This Is A Full Stack Project Done In Node Js For Backend And Used Nunjucks Template For Front End And Mysql For Database And Tailwind For Css",technologies:['node js','nunjucks tempalte','tailwind css'],allTechnologies:['Node Js',
            'Express Js',
            'Mysql',
            'Nunjucks Template',
            'Tailwind Css',
            'Html',
            'Javascript'], 
        gallary:[Food1.src,Food2.src],
        src:"https://github.com/anilikarikatti/food_order"
    },

            {title:"resume builder",content:"This Is A Resume Builder App And This Project Gives The Ready Made Resume This Project Is In Next Js When User Enters His Information And Added His Projects And Clicked Confirm Then Click Any Template It Will Generate His Resume This Project Can Be Done In React Js , And Also Hosted On Vercel",technologies:['react js','tailwind css','next js'],

            allTechnologies:['React Js',
            'Next Js',
            
            'Tailwind Css',
            'Vercel',
            'Javascript'] , 
     gallary:[Resume1.src,Resume2.src],
     src:"https://github.com/anilikarikatti/resume_builder_ak"
     ,
        
        },

             {title:"memory game",content:"This Is Challenging Game Containing 4x4 Boxes That Highlights A Red Color In Each Random Box For Certain Seconds When User Click All Colored Boxes The Color Of Box Will Be Red And After Picking All Colored Boxes User Will Be Win The Game This Project Can Be Done By React Js And Also Hosted On Vercel The Same Project Will Be Done By Normal Html , Css And Javascript",technologies:['react js ','tailwind css','next js'] , 
            
             allTechnologies:['React Js',
             'Next Js',
             
             'Tailwind Css',
             'Vercel',
             'Javascript'] , 
      gallary:[Memory1.src,Memory2.src],

        src:"https://trying-vercel-anilikarikatti.vercel.app/"
            },

             {title:"quiz game",content:"This Is Challenging Game Containing 4x4 Boxes That Highlights A Red Color In Each Random Box For Certain Seconds When User Click All Colored Boxes The Color Of Box Will Be Red And After Picking All Colored Boxes User Will Be Win The Game This Project Can Be Done By React Js And Also Hosted On Vercel The Same Project Will Be Done By Normal Html , Css And Javascript",technologies:['react js ','tailwind css','next js'],
             allTechnologies:['React Js',
             'Next Js',
             
             'Tailwind Css',
             'Vercel',
             'Javascript'] , 
      gallary:[Quiz1.src,Quiz2.src],

      src:"https://github.com/anilikarikatti/quiz_game"

            },


]
    // class Project{
    //     constructor(title,content,technologies){
    //         this.title = title ;
    //         this.content =  content ;
    //         this.technologies = technologies;
    //     }
    // }

    // let project1 = new Project();


    // console.log(project1);

    // let projects = [];

  
    // projects.push(project1)
  

    let router = useRouter();

    let  toPage = (props)=>{
      console.log("called");
          router.push({pathname:"projectDescription" , query:props});
    }

    return(
        <>
            <div className="h-screen background-color overflow-y-scroll">

            <div className="sm:w-1/2 w-full">
                <Navigation />

                </div>

            <div className="flex relative top-16 text-white sm:text-4xl justify-center items-center">
                    <div className="capitalize relative fonts-header ">projects   . . . </div>
                    <div className="w-[70%] h-1 border-2 bar relative top-3"></div>
                </div>

                <div className="flex justify-center items-center  relative top-32">

                    <div className="grid sm:grid-cols-3 justify-center gap-10 ">

                            {projects.map(elem=>{
                            return(  <div key={elem.title} onClick={()=>toPage(elem)}>
                                <ProjectTemplate props= {elem} key={elem.title} />
                            </div>)
                            })}

                        </div>
                    </div>
            </div>
        </>
    )
}