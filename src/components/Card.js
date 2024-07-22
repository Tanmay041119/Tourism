import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
    const [desc, setDesc] = useState(`${info.substring(0, 200)}...`);
    const [text, setText] = useState(false);

    function textHandler() {
        setText((prevText) => {
            const newText = !prevText;
            setDesc(newText ? info : `${info.substring(0, 200)}...`);
            return newText;
        });
    }

    return (
        <div className="  flex  flex-col h-[max-content]  w-[300px] sm:w-[400px] p-[1rem] m-[1rem]  border-[1px] shadow-slate-800 shadow-sm  justify-center rounded-md">
            <img src={image} alt="Place" className="w-[380px] aspect-square object-cover"></img>
            <div className="p-2">
                <p className=" text-[1.3rem]  text-green-500">₹{price}</p>
                <p className=" text-[1.5rem]">{name}</p>
            </div>
            <div className="pl-2 pr-2 text-gray-600"> {desc}
            <span onClick={textHandler} className=" hover:cursor-pointer text-blue-400 font-semibold"> {text ? 'Read Less' : 'Read More'}</span>
            </div>
            
            <button onClick={() => removeTour(id)} className="w-[200px] sm:w-[300px] mx-auto border-[1px] border-red-800 bg-red-100 rounded-md mt-[18px] hover:bg-red-600 transition-all duration-200">
                Not Interested
            </button>
        </div>
    );
}

export default Card;
