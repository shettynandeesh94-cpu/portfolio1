"use client";
import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <video
      id="bg-video"
      autoPlay
      muted={true}
      loop
      playsInline
      className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      src="/hello_background.mp4"
    />
  );
};

export default BackgroundVideo;
