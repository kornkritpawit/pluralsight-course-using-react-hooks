import React, {useRef} from "react";

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    console.log(imageRef)
    return (
        <img 
        onMouseOver={()=> {
            imageRef.current.src = secondaryImg;
            console.log(imageRef)
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg;
            // console.log(imageRef)
        }}
        src={primaryImg}
        alt="" ref={imageRef}/>
    );
};
export default ImageToggleOnMouseOver;