"use client";
import React, { useState } from 'react';

/**
 * Fullscreen looping video background.
 * The video file should be placed in the public folder, e.g. /hello_background.mp4.
 * This component renders the video fixed behind all other content.
 */
const BackgroundVideo: React.FC = () => {
  const [muted, setMuted] = useState(false);
  return (
    <>
      <button
        onClick={() => setMuted(!muted)}
        className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded text-white"
        aria-label={muted ? 'Unmute background video' : 'Mute background video'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
      <video
        autoPlay
        muted={muted}
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
        src="/hello_background.mp4"
      />
    </>
  );
};

export default BackgroundVideo;
