import { IoMdClose } from "react-icons/io";
import './images.css';

export const Images = ({ item, removeImg, id }) => {
    return (
        <div className="w-1/3 p-2 relative">
            <img
                src={item}
                alt="Selected"
                className="w-full h-auto rounded"
            />
            <button
                className="absolute top-0 right-0 p-2 bg-red-500 rounded-full text-white"
                onClick={() => {
                    removeImg(id);
                }}
            >
                <IoMdClose />
            </button>
        </div>
    );
};
