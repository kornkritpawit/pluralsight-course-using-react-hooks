import React, {useEffect, useRef, useState} from "react";

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true)
    const isInView = _ => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >=0 && rect.bottom <= window.innerHeight;
    }
    // console.log(imageRef)
    const [inView, setInView] = useState(false)

    useEffect(()=>{
        setIsLoading(false);
        setInView(isInView())
        window.addEventListener("scroll", scrollHandler);
        return _ => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, []); // [] useEffect run only when component is first render

    const scrollHandler =_=>{
        setInView(isInView());
    };

    return (
        <img 
        src={isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            : inView ? secondaryImg : primaryImg}
        alt="" ref={imageRef}
        width="200" height="200"
        />
    );
};
export default ImageToggleOnScroll;