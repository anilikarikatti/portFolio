


export default function ProjectTemplate({props}){

    let {title,content,technologies} = props;
   
    return(
        <>
            <div className="h-60 w-80 project-background text-white rounded-xl flex items-center flex-col transitionP">

                <div className="relative top-4 capitalize text-xl">{title}</div>

                <div className="w-72 h-36 overflow-hidden relative top-5 "><p className="break-words">{content.length >200 ? content.slice(0,200)+"  ..." : content}</p></div>
               
                <div className="flex relative top-8 w-full justify-around ">
                    {technologies.map(elem=>{
                        return(
                            <div className="h-8 w-20 bg-black flex justify-center items-center rounded-md text-sm capitalize" key={elem}>{elem}</div>
                        )
                    })}
                 </div>
            </div>
        </>
    )
}