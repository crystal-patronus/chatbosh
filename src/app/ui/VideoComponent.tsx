import { CSSProperties, useCallback, useEffect, useRef } from "react";
import { useIsVisible } from "@/hooks/use-is-visible";

type VideoComponentProps = {
  src: string;
  poster?: string;
  alt?: string;
  style?: CSSProperties;
};

export const VideoComponent = ({
  src,
  poster,
  style,
  alt,
}: VideoComponentProps) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "-200px",
      threshold: 0.1,
    },
    false,
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.play();
      }
    } catch (e) {
      // Handle play error
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } catch (e) {
      // Handle pause error
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  return (
    <span
      ref={targetRef}
      style={{
        position: "relative",
        minHeight: "50px",
        height: "100%",
      }}
    >
      {isVisible && (
        <div className="text-red-600">Visibled</div>
      )}
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={false}
        playsInline
        poster={poster}
        aria-label={alt}
        className="border border-solid border-neutral-50 rounded-xl object-fill"
        style={{
          objectFit: "contain",
          display: "block",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <source src={src} />
      </video>
    </span>
  );
};
