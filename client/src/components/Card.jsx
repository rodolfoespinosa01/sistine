import painting from "../assets/painting.jpg";
import React from 'react';

function Card(props){
    return(
        <article className="border border-gray-300 rounded-lg shadow-md p-0 m-2 text-center max-w-xs inline-block relative overflow-hidden">
            <div className="group">
                <img className="w-full h-auto" src={painting} alt="Item Picture" />
                <div className="absolute inset-0 bg-black bg-opacity-30 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center">
                    <h3 className="font-sans font-bold text-white text-xl mb-1">Item Name Here</h3>
                    <p className="font-sans text-white">Description Here</p>
                </div>
            </div>
        </article>
    )
}

export default Card;