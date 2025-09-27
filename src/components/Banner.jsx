import React from "react";
import Vector1 from "../image/vector1.png";

export default function Banner({ inProgress, resolved }) {
  return (
    <div className="flex gap-6 flex-wrap mt-4">
      
      <div className="relative flex-1 min-w-[200px] rounded-xl shadow-md text-center text-white bg-gradient-to-r from-purple-800 to-purple-400 overflow-hidden">
        
        <img
          src={Vector1}
          alt="vector-left"
          className="absolute inset-y-0 left-0 h-full object-cover"
        />
        <img
          src={Vector1}
          alt="vector-right"
          className="absolute inset-y-0 right-0 h-full object-cover scale-x-[-1]"
        />

        
        <div className="relative z-10 px-6 py-12">
          <h3 className="font-bold text-lg mb-4">In Progress</h3>
          <p className="text-3xl font-bold">{inProgress}</p>
        </div>
      </div>

      {/* Resolved Card */}
      <div className="relative flex-1 min-w-[200px] rounded-xl shadow-md text-center text-white bg-gradient-to-r from-green-700 to-green-400 overflow-hidden">
       
        <img
          src={Vector1}
          alt="vector-left"
          className="absolute inset-y-0 left-0 h-full object-cover"
        />
        <img
          src={Vector1}
          alt="vector-right"
          className="absolute inset-y-0 right-0 h-full object-cover scale-x-[-1]"
        />

        
        <div className="relative z-10 px-6 py-12">
          <h3 className="font-bold text-lg mb-4">Resolved</h3>
          <p className="text-3xl font-bold">{resolved}</p>
        </div>
      </div>
    </div>
  );
}
