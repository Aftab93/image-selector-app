import React, { useState } from "react";
import { Input } from "./components/Input";
import { ImgContainer } from "./components/ImgContainer";

export const App = () => {
    const [images, setImages] = useState([]);

    console.log(images);

    return (
        <div className='p-3 w-full h-full bg-zinc-800'>
            <Input onAddClick={(inputValue) => {
                setImages([
                    ...images,
                    inputValue
                ]);
            }} />
            <ImgContainer images={images} removeHandler={(id) => {
                setImages(images.filter(
                    (d, index) => {
                        return index !== id;
                    }
                ));
            }} />
        </div>
    );
};
