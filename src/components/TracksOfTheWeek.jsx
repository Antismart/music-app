import React from "react";

function TracksOfTheWeek() {
    return (
        <div className="bg bg-black text-white max-h-60 w-1/2 m-2 ">
          <h1 className=" text-sm">Tracks of the Week</h1>
          <div className=" bg-neutral-900 rounded-xl p-1 overflow-auto max-h-48 border scrollbar-hide ">
            
            <div className="  h-11  flex  ">
                <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1"></div>
                   <div className=" self-center w-96"> <h1 className="text-xs"> track1</h1></div>
                   <div className=" bg-zinc-900 h-9 w-20 rounded-full border flex">
                     <div className=" w-1/2 flex items-stretch">
                          <span className=" self-center p-2 material-symbols-sharp">
                              favorite
                          </span>
                   </div>
                    <div className=" w-1/2 bg-zinc-900 h-9 rounded-full border "></div>
                 </div>
                </div>

            <div className="  h-11 flex ">
               <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1"></div>
                  <div className=" self-center w-96"><h1 className=" text-xs  "> track2</h1></div> 
                  <div className=" bg-zinc-900 h-9 w-20 rounded-full border flex">
                     <div className=" w-1/2 flex items-stretch">
                           <span className=" self-center p-2 material-symbols-sharp">
                              favorite
                          </span>
                     </div>     
                    <div className=" w-1/2 bg-zinc-900 h-9 rounded-full border "></div>
                 </div>
            </div>

            <div className="  h-11 flex ">
              <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1"></div>
                 <div className=" self-center w-96"><h1 className=" text-xs "> track3</h1></div>
                 <div className=" bg-zinc-900 h-9 w-20 rounded-full border flex ">
                 <div className=" w-1/2 flex items-center">
                           <span className=" self-center p-2 material-symbols-sharp">
                              favorite
                          </span>
                     </div>     
                    <div className=" w-1/2 bg-zinc-900  h-9 rounded-full border "></div>
                 </div>
            </div>

            <div className="  h-11 flex">
              <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1 "></div>
                 <div className=" self-center w-96"><h1 className=" text-xs  "> track4</h1></div> 
                 <div className=" bg-zinc-900 h-9 w-20 rounded-full border flex">
                 <div className=" w-1/2 flex items-stretch">
                           <span className=" self-center p-2 material-symbols-sharp">
                              favorite
                          </span>
                     </div>     
                    <div className=" w-1/2 bg-zinc-900  h-9 rounded-full border "></div>
                 </div>
            </div>

            <div className=" h-11 flex">
              <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1 "></div>
                 <div className=" self-center w-96"> <h1 className=" text-xs "> track5</h1></div>
                 <div className=" bg-zinc-900 h-9 w-20 rounded-full border flex">
                 <div className=" w-1/2 flex items-stretch">
                           <span className=" self-center p-2 material-symbols-sharp">
                              favorite
                          </span>
                     </div>     
                    <div className=" w-1/2 bg-zinc-900  h-9 rounded-full border"></div>
                 </div>
            </div>

            <div className=" h-11 flex">
                
              <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1 "></div>
                 <div className=" self-center w-96"> <h1 className="  text-xs "> track6</h1></div>
                 <div className=" bg-zinc-900 h-9 w-20 rounded-full border flex">
                 <div className=" w-1/2 flex items-stretch ">
                           <span className=" self-center p-2 material-symbols-sharp">
                              favorite
                          </span>
                     </div>     
                    <div className=" w-1/2 bg-zinc-900  h-9 rounded-full border "></div>
                 </div>
            </div>

          </div>
        </div>
    )
}
export default TracksOfTheWeek