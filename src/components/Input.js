import { PiGooglePhotosLogoThin } from "react-icons/pi";
import React, { useRef, useState } from "react";

export const Input = ({ onAddClick }) => {
    const [inputValue, setInputValue] = useState(null);
    const image = useRef(null);

    return (
        <div className='flex items-center justify-around'>
            <div>
                <input
                    ref={image}
                    type="file"
                    className="hidden"
                    onChange={(event) => {
                        console.log('Event Happened!', event.target.files);
                        setInputValue(event.target.files[0]);
                        event.target.value = null;
                    }}
                />
                <PiGooglePhotosLogoThin
                    className='w-48 h-48 text-zinc-300 cursor-pointer'
                    onClick={() => {image.current.click()}}
                />
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        if (inputValue) {
                            // console.log(inputValue);
                            const imageUrl = URL.createObjectURL(inputValue);
                            // console.log(imageUrl);
                            onAddClick(imageUrl);
                            setInputValue(null);
                        }
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
