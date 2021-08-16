import React, { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

export const CSVFileUpload = () => {
  const [ parsed, setParsed ] = useState({});
  const uploadFile = useRef(null);

  useEffect(()=>{
    console.log(parsed);
  },[parsed])

  const handleFiles = () => {
    console.log(uploadFile.current.files);
    (async ()=>{
      console.log('uploaded!');
        const text = await uploadFile.current.files[0].text();
        const data = await d3.csvParse(text);
        setParsed(data);
    })();
  }

return (
    <div>
      <input ref={uploadFile} onChange={handleFiles} type="file" id="input" multiple/>
    </div>
  )

};

