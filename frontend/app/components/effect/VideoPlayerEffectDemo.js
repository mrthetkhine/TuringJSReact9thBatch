import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);

    console.log("Video player render");
    useEffect(() => {
        console.log('UseEffect fired');
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlayerEffectDemo() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}
