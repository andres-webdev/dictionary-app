import { useState, useRef, useEffect } from 'react'

interface Props {
  audio: string
}

export default function AudioComponent({ audio }: Props) {

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayPauseBtn = () => {
    if(isPlaying){
      setIsPlaying(elem => !elem)
      audioRef.current?.pause()
    } else {
      setIsPlaying(elem => !elem)
      audioRef.current?.play()
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if(audioRef.current?.ended || isPlaying === true){
        setIsPlaying(false)
      }
    }, 1500);
  }, [isPlaying])

  return (
    <>
      <audio src={audio} ref={audioRef} />
      {
        isPlaying ?
          <button onClick={handlePlayPauseBtn}>
            <img 
              src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688843556/dictonary-api/pause-btn_nisfr3.svg" 
              alt="pause-botton" 
            />
          </button>
        :
          <button onClick={handlePlayPauseBtn}>
            <img 
              src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331218/dictonary-api/icon-play_p9o8lp.svg" 
              alt="play-botton" 
            />
          </button>
      }
    </>
  )
}