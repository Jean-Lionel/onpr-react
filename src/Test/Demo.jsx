import React, { useState,useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Demo = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log(value);

    }, [value])

    return (
        <div>
            <div>
            <ReactQuill
                value={value}
                readOnly={true}
                theme={"bubble"}
                />
            </div>
            <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </div>
      
    );
}
 
export default Demo;