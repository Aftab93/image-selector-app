import React from "react";
import { Images } from "./Images";

export const ImgContainer = ({ images, removeHandler }) => {
    return <div className='flex'>
        {images.map((item, index) => (
            <Images key={index} removeImg={removeHandler} id={index} item={item} />
        ))}
    </div>;
};
