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
           {/*  <picture>
              <source media="(max-width: 799px)" srcset="puppy-480w-cropped.jpg" width=480 height=400/>
              <source media="(min-width: 800px)" srcset="puppy-800w.jpg" width=800 height=400/>
              <img src="puppy-800w.jpg" alt="Puppy with balloons" width=800 height=400/>
            </picture> */}
            {/*  */}
            <picture>
              <source 
                media="(max-width: 600px)" 
                srcSet="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688843556/dictonary-api/pause-btn_nisfr3.svg" 
                width={48}
                height={48} />
              <source 
                media="(min-width: 601px)" 
                srcSet="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688843556/dictonary-api/pause-btn_nisfr3.svg" 
                width={64}
                height={64} />
              <img 
                src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688843556/dictonary-api/pause-btn_nisfr3.svg" 
                alt="pause-botton" 
                width={64} 
                height={64}
              />
            </picture>
          </button>
        :
          <button onClick={handlePlayPauseBtn}>
            <picture>
              <source 
                media="(max-width: 600px)" 
                srcSet="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331218/dictonary-api/icon-play_p9o8lp.svg" 
                width={48}
                height={48} />
              <source 
                media="(min-width: 601px)" 
                srcSet="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331218/dictonary-api/icon-play_p9o8lp.svg" 
                width={64}
                height={64} />
              <img 
                src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331218/dictonary-api/icon-play_p9o8lp.svg" 
                alt="play-botton" 
                width={64} 
                height={64}
              />
            </picture>
          </button>
      }
    </>
  )
}