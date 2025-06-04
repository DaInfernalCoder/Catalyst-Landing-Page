"use client";
import Image from "next/image";
import ic_import from "../../../../public/svgs/ic_import.svg";

import { Wrapper, Inner, SecondOverlay, ScrollIndicator } from "./styles";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { gsap } from "gsap";

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ["W", "a", "i", "t", "l", "i", "s", "t"];

  const spans = useRef<any>([]); // Create a ref to store the span elements
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const isCompletedRef = useRef(false);

  const completeAnimation = useCallback(() => {
    if (isCompletedRef.current) return;
    isCompletedRef.current = true;
    setComplete(true);
  }, [setComplete]);

  const handleScroll = useCallback(
    (e: Event) => {
      e.preventDefault();
      if (isCompletedRef.current || !timelineRef.current) return;

      // Hide the scroll indicator immediately when user starts scrolling
      setShowScrollIndicator(false);

      // Get current progress and add to it based on scroll intensity
      const currentProgress = timelineRef.current.progress();
      let scrollDelta = 0;

      if (e.type === "wheel") {
        const wheelEvent = e as WheelEvent;
        // Much smaller, smoother increments - about 2-3% per scroll tick
        scrollDelta = Math.abs(wheelEvent.deltaY) * 0.0002;
      } else if (e.type === "touchmove") {
        // Smaller increment for touch to feel natural
        scrollDelta = 0.015;
      } else if (e.type === "keydown") {
        // Moderate increment for keyboard
        scrollDelta = 0.03;
      }

      // Calculate new progress with much smaller minimum increment (1% instead of 5%)
      const newProgress = Math.min(
        1,
        currentProgress + Math.max(0.01, scrollDelta)
      );

      // Smoothly animate to the new progress instead of jumping
      gsap.to(timelineRef.current, {
        progress: newProgress,
        duration: 0.1, // Short smooth transition
        ease: "power2.out",
      });

      // If we've reached the end, complete the animation
      if (newProgress >= 1) {
        completeAnimation();
      }
    },
    [completeAnimation]
  );

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: completeAnimation,
    });

    timelineRef.current = tl;

    tl.to(imageRef.current, {
      rotate: "360deg",
      ease: "back.out(1.7)", // Easing function
      duration: 1.4,
    });
    tl.to(imageRef.current, {
      y: "-100%", // Move the spans up
      ease: "back.out(1.7)", // Easing function
    });
    // Iterate through the span elements and animate them
    tl.to(spans.current, {
      y: "-100%", // Move the spans up
      ease: "back.out(1.7)", // Easing function
      duration: 1.4, // Animation duration
      stagger: 0.05, // Stagger duration (0.2 seconds delay between each span)
    });
    // Animate both the wrapper and the second overlay almost at the same time
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: "top",
      ease: "back.out(1.7)",
      duration: 1,
      stagger: 0.2,
    });

    // Apply a small delay to one of the elements (adjust as needed)
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9, // Adjust this delay as needed to fine-tune the timing
    });

    // Add scroll event listeners
    const addScrollListeners = () => {
      // Mouse wheel events
      window.addEventListener("wheel", handleScroll, { passive: false });
      // Touch events for mobile
      window.addEventListener("touchmove", handleScroll, { passive: false });
      // Keyboard events (arrow keys, space, page down)
      window.addEventListener("keydown", (e) => {
        if (
          ["ArrowDown", "ArrowUp", "Space", "PageDown", "PageUp"].includes(
            e.code
          )
        ) {
          handleScroll(e);
        }
      });
    };

    const removeScrollListeners = () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("keydown", handleScroll);
    };

    // Add listeners immediately
    addScrollListeners();

    // Hide scroll indicator after 2 seconds if no interaction
    const indicatorTimeout = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 2000);

    // Cleanup function
    return () => {
      removeScrollListeners();
      clearTimeout(indicatorTimeout);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [handleScroll, completeAnimation]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image ref={imageRef} src={ic_import} alt="import icon" />
          <div>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(element) => (spans.current[i] = element)} // Assign ref to each span
              >
                {t}
              </div>
            ))}
          </div>
        </Inner>
        {showScrollIndicator && (
          <ScrollIndicator>
            <span>Scroll to skip</span>
            <div className="scroll-icon">↓</div>
          </ScrollIndicator>
        )}
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
