import React, {useEffect, useState} from "react";

const Syntax = _ => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);
    useEffect(_ => {
        console.log('in useEffect');
        return _ => {
            console.log('in useEffect Cleanup')
        }
    }, [checkBoxValue])

    return (<div></div>);
};

export default Syntax;