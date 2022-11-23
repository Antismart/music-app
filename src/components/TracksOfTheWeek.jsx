import React from "react";

function TracksOfTheWeek() {
    return (
        <div className="bg bg-black text-white max-h-60 w-1/2 m-3 ">
          <h1 className=" text-sm">Tracks of the Week</h1>
          <div className=" rounded-xl p-1 overflow-auto max-h-48 border ">
            <div className="  h-11  flex  ">
                <d iv className=" bg-white h-9 w-9 m-1 rounded-xl p-1"></d>
                <h1 className=" text-xs align-middle  "> track1</h1>
                </div>
            <div className="  h-11 flex ">
            <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1"></div>
                <h1 className=" text-xs "> track2</h1>
            </div>
            <div className="  h-11 flex ">
            <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1">
                
            </div>
                <h1 className=" text-xs "> track3</h1>
            </div>
            <div className="  h-11 flex">
            <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1 "></div>
                <h1 className=" text-xs "> track4</h1>
            </div>
            <div className=" h-11 flex">
            <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1 "></div>
                <h1 className=" text-xs "> track5</h1>
            </div>
            <div className=" h-11 flex ">
            <div className=" bg-white h-9 w-9 m-1 rounded-xl p-1"></div>
                <h1 className="  text-xs "> track6</h1>
            </div>
          </div>
        </div>
    )
}
export default TracksOfTheWeek