import React from "react";
 
function Genre () {
    return(
        <div className="bg bg-black max-h-64 w-48 m-3 ">
            <h1 className=" text-white  text-sm">Genre</h1>
            <div className="flex flex-wrap text-white ">
                <div className=" bg bg-slate-900 w-11 rounded-xl p-1 text-xs m-2">
                    classic 
                </div>
                <div className=" bg bg-slate-900 w-13 rounded-xl p-1 text-xs m-2">
                    chill-out
                </div>
                <div className=" bg bg-slate-900 w-13 rounded-xl p-1 text-xs m-2">
                    Hip-hop
                </div>
                <div className=" bg bg-slate-900 w-12 rounded-xl p-1 text-xs m-2">
                    minimal
                </div>
                <div className=" bg bg-slate-900 w-14 rounded-xl p-1 text-xs m-2">
                    Electronic 
                </div>
                <div className=" bg bg-slate-900 w-10 rounded-xl p-1 text-xs m-2">
                    Blues 
                </div>
                <div className=" bg bg-slate-900 w-12 rounded-xl p-1 text-xs m-2">
                    Country 
                </div>
                <div className=" bg bg-slate-900 w-12 rounded-xl p-1 text-xs m-2">
                    Techno 
                </div>
                <div className=" bg bg-slate-900 w-11 rounded-xl p-1 text-xs m-2">
                    House 
                </div><div className=" bg bg-slate-900 w-44 rounded-xl p-1 text-xs m-2 text-center">
                    All Genres 
                </div>

                

            </div>

        </div>
    )
}
export default  Genre    