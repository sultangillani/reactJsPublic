import React, { useState, useEffect, createRef,useRef } from 'react';
import MemeCard from '../components/Card';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import Draggable from "react-draggable";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { toJpeg } from 'html-to-image';

function EditPage() {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();
    const nodeRef = useRef(null);

    const addText = () => {
        setCount(count + 1);
        console.log(count);
    }

    const handleSave = (memeRef) => {
      if (memeRef.current) {
        toJpeg(memeRef.current, { quality: 0.95 })
          .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = new Date().getMilliseconds() + ' meme.jpeg';
            link.href = dataUrl;
            link.click();
          });
      }
    };
  return (
    <div>
        <div ref={memeRef} className='meme mt-5 mb-5' >
           <img src={params.get('url')} width="250px"/>
            {Array(count).fill(0).map((_, index) => (
              <Text key={index} />
            )) }
        </div>
        <button onClick={addText}>Add Text</button>
        <button variant="success" onClick={(e) => handleSave(memeRef) }>Save</button>
    </div>
  )
}

export default EditPage
