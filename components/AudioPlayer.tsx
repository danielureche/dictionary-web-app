import React, { useRef, useState } from 'react';
import { IoPlaySharp, IoPauseSharp  } from "react-icons/io5";
import { useTheme } from '@/hooks/useTheme'

interface AudioPlayerProps {
    audioUrl: string;
    word: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, word }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { theme } = useTheme();

    const playAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            } else {
                audioRef.current.play()
                    .catch(err => {
                        console.error('Error playing audio', err);
                    });
            }
        }
    };

    return (
        <div>
            <audio
                ref={audioRef}
                src={audioUrl}
                onPlay={() => setIsPlaying(true)}
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
            />
            <button
                onClick={playAudio}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors 
                    ${theme === 'dark' 
                        ? 'bg-purple-800 text-white hover:bg-purple-700' 
                        : 'bg-purple-300 text-purple-700 hover:bg-purple-400'}`}
                aria-label={`Listen to pronunciation of ${word}`}
            > 
                {isPlaying ? (
                    <IoPauseSharp className="w-5 h-5" />
                ) : (
                    <IoPlaySharp className="w-5 h-5" />
                )}
            </button>
        </div>
    );
};

export default AudioPlayer;