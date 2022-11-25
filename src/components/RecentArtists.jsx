import React from "react";
import willypaul from "../assets/Images/willypaul.png";
import khaligragh from "../assets/Images/khaligragh-1.png";
import lilwayne from "../assets/Images/lilwyne.png";
import lilnas from "../assets/Images/lilnas.png"
import davido from "../assets/Images/davido.png"
import nickiminaj from "../assets/Images/nickiminaj.png"
import ssaru from "../assets/Images/ssaru.png"
import koffee from "../assets/Images/koffee.png"

function RecentArtists() {
    return (
        <div className="bg bg-black max-h-60  w-60 m-3 " >
           <h1 className=" font-thin text-sm text-white">Recent Artists</h1>
          <div className=" max-h-48 overflow-y-auto  flex flex-wrap gap-3  scrollbar-hide">
              <div className=" bg-yellow-500 h-20 w-20 m-0 rounded-xl p-1">
              <img className=" object-contain h-16  w-20z m-2 " src={willypaul} alt="istock" />
              </div>
              <div className=" bg-red-600 h-20 w-20 m-0 rounded-xl p-1">
                <img className=" object-contain h-20 w-32" src={khaligragh} alt="img"/>
              </div>
              <div className=" bg-blue-600 h-20 w-20 m-0 rounded-xl p-1">
              <img className=" object-contain h-20 w-32" src={lilwayne} alt="img"/>
              </div>
              <div className=" bg-gray-500 h-20 w-20 m-0 rounded-xl">
              <img className=" object-contain h-20 w-32" src={lilnas} alt="img"/>
              </div>
              <div className=" bg-purple-600 h-20 w-20 m-0 rounded-xl p-1">
              <img className=" object-contain h-20 w-32" src={davido} alt="img"/>
              </div>
              <div className= " bg-orange-500 h-20 w-20 m-0 rounded-xl p-1">
              <img className=" object-contain h-20 w-32" src={nickiminaj} alt="img"/>
              </div>
              <div className=" bg-indigo-400 h-20 w-20 m-0 rounded-xl p-1">
              <img className=" object-contain h-20 w-32" src={ssaru} alt="img"/>
              </div>
              <div className=" bg-green-700  h-20 w-20 m-0 rounded-xl">
              <img className=" object-contain h-20 w-32" src={koffee} alt="img"/>
              </div>
              
              
          </div>
        </div>
    )
}
export default RecentArtists