import React, { useRef, useEffect } from 'react';

const Video = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const resizeIframe = () => {
      const containerWidth = iframeRef.current.parentNode.offsetWidth;
      const aspectRatio = 9 / 16; // 16:9 aspect ratio
      const calculatedHeight = Math.floor(containerWidth * aspectRatio);
      iframeRef.current.style.height = `${calculatedHeight}px`;
    };

    resizeIframe();
    window.addEventListener('resize', resizeIframe);

    return () => {
      window.removeEventListener('resize', resizeIframe);
    };
  }, []);

  return (
    <div className="w-[70%] mt-20 mx-auto">
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/VchuKL44s6E"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe>
    </div>
  );
};

export default Video;
