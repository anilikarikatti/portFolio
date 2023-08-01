import ProjectTemplate from "./project"

export default function Projects(){

    const projects = [
        {title : "bio backup",content:"This Is Our Client Product . This Is Application Available In Play Store Also. This Product Provides A Secured Account In Cloud To Everyone To Access Medical Documents Such As MRI Report, CT Scan, X Ray, Lab Reports, Other Medical Tests, 3D Imaging, Medical Prescriptions In Digital Format From The Original Issuers Of These Certificates. The Project Will Be Hosted On Aws I Have Also Little Bit Knowledge About This In This Project I Have Been Be Worked On Backend Using Node Js And Express Js And Mysql The Admin Side Of This Product Has Been Done By Be ..This Project Using Nunjucks Template, Tailwind Css , Html Javascript",technologies:['node js','mysql','aws']},

         {title:"my smart shala",content:"This Is Our Client Product This Product Provides A Learning Management For Universities And Also Details Of Teacher And Students Of University . Add Bulk Student And Bulk Teachers For The University And Admin Also Send The Video , Audio , Notes As A Documents . In This Project I Have Been Be Worked On Frontend Using React Js And Next Js And Also Used Tailwind Css And Material Ui Components",technologies:['react js','next js','material ui']},
 
            {title:"food order system",content:"This Is Food Order System Project Same Like Swiggy , Zomato And Also It Maintains Both Side Of Client And Restorent Side . The Client Is Capable To Order Foods After Login And He Also Want To See His Orders .. In Restorent Side The Hotels Can See The Todays Orders .. The Admin Can Add The Foods And Restorents . This Is A Full Stack Project Done In Node Js For Backend And Used Nunjucks Template For Front End And Mysql For Database And Tailwind For Css",technologies:['node js','nunjucks tempalte','tailwind css']},
            {title:"resume builder",content:"This Is A Resume Builder App And This Project Gives The Ready Made Resume This Project Is In Next Js When User Enters His Information And Added His Projects And Clicked Confirm Then Click Any Template It Will Generate His Resume This Project Can Be Done In React Js , And Also Hosted On Vercel",technologies:['react js','tailwind css','next js']},
             {title:"memory game",content:"This Is Challenging Game Containing 4x4 Boxes That Highlights A Red Color In Each Random Box For Certain Seconds When User Click All Colored Boxes The Color Of Box Will Be Red And After Picking All Colored Boxes User Will Be Win The Game This Project Can Be Done By React Js And Also Hosted On Vercel The Same Project Will Be Done By Normal Html , Css And Javascript",technologies:['react js ','tailwind css','next js']},

             {title:"quiz game",content:"This Is Challenging Game Containing 4x4 Boxes That Highlights A Red Color In Each Random Box For Certain Seconds When User Click All Colored Boxes The Color Of Box Will Be Red And After Picking All Colored Boxes User Will Be Win The Game This Project Can Be Done By React Js And Also Hosted On Vercel The Same Project Will Be Done By Normal Html , Css And Javascript",technologies:['react js ','tailwind css','next js']},


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
  


    return(
        <>
            <div className="h-screen background-color overflow-y-scroll">

            <div className="flex relative top-16 text-white sm:text-4xl justify-center items-center">
                    <div className="capitalize relative fonts-header ">projects   . . . </div>
                    <div className="w-[70%] h-1 border-2 bar relative top-3"></div>
                </div>
                <div className="flex justify-center items-center h-full relative top-10">

                <div className="grid grid-cols-3 justify-center gap-10">

                        {projects.map(elem=>{
                          return(  <ProjectTemplate props= {elem} key={elem.title}/>)
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}