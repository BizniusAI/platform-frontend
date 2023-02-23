import classNames from 'classnames'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

type TProps = {
  videoId: 1 | 2 | 3 | 4
  nextVideoId: 1 | 2 | 3 | 4
  step: 1 | 2 | 3 | 4
  setStep: (step: 1 | 2 | 3 | 4) => void
}

const VideoPlayer = ({
  videoId,
  nextVideoId,
  step,
  setStep,
}: TProps): JSX.Element => {
  return (
    <div
      className={classNames(
        'absolute w-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out',
        step === videoId ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      <ReactPlayer
        url={`/videos/mechanism.step${videoId}.mp4`}
        width="auto"
        height="auto"
        playing={step === videoId}
        muted={true}
        playsinline={true}
        onEnded={() => {
          setTimeout(
            () => {
              setStep(nextVideoId)
            },
            videoId === 4 ? 2000 : 20
          )
        }}
      />
    </div>
  )
}

export default VideoPlayer
