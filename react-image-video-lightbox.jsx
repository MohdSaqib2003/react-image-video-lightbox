import React, { useState } from 'react';
import ReactImageVideoLightbox from 'react-image-video-lightbox';

function Carousol() {
    const [showLightbox, setShowLightbox] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
  
    const data = [
      {
        url: 'https://placekitten.com/450/300',
        type: 'photo',
        altTag: 'some image',
      },
      {
        url: 'https://placekitten.com/550/500',
        type: 'photo',
        altTag: 'some other image',
      },
      {
        url: 'https://api1.reglado.org/sites/default/files/2022-06/SampleVideo_1280x720_1mb.mp4',
        type: 'video',
        altTag: 'some other image',
      },
    ];
  
    const callback = () => {
      console.log('Callback Function called ');
      setShowLightbox(false);
    };
    const callBackShowLightBox = (ind) => {
      setStartIndex(ind);
      setShowLightbox(true);
    };
    return (
      <div>
        <div style={{display:'flex'}}>
        {data.map((item, ind) => {
          if (item.type === 'photo') {
            return (
            <div>
              <img
                src={item.url}
                width="320"
                height="250"
                onClick={() => callBackShowLightBox(ind)}
              />
              </div>
            );
          } else {
            return (
                <div>              
              <video
                width="320"
                height="250"
                controls
                autoplay
                onClick={() => callBackShowLightBox(ind)}
                key={ind}
              >
                <source src={item.url} type="video/mp4" />
              </video>
              </div>
            );
          }
        })}
        </div>
  
        {showLightbox ? (
          <ReactImageVideoLightbox
            data={data}
            startIndex={startIndex}
            showResourceCount={true}
            onCloseCallback={callback}
          />
        ) : null}
      </div>
    );
}

export default Carousol
