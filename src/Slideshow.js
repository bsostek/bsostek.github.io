import React, {useState, useEffect} from 'react';
const imageCount=6;
const slideTime=5000;

function Slideshow(props) {
    
    const [index, setIndex] = useState(0);
    useEffect(() => {

    }, [index]);

    setTimeout(()=> 
            setIndex((index+1)%imageCount), slideTime);
            
    return (
        <div className='slideshow'>
            <img src={require("./images/bg"+index+".JPG")} alt=""/>
        </div>
    ); 
}


export default Slideshow;