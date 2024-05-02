import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, useMotionValue } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null); // Creating a reference to the DOM element

  const motionValue = useMotionValue(0); // Creating a motion value
  const springValue = useSpring(motionValue, { duration: 3000 }); // Applying spring animation to the motion value
  const isInView = useInView(ref, { once: true }); // Checking if the component is in view

  useEffect(() => {
    if (isInView) { // Checking if the component is in view
      motionValue.set(value); // Setting the motion value to the provided value
    }
  }, [isInView, value, motionValue]); // Running the effect whenever isInView, value, or motionValue changes

  useEffect(() => {
    springValue.on("change", (latest) => { // Listening for changes in the spring animation
      if (ref.current && latest.toFixed(0) <= value) { // Checking if the DOM element exists and if the animation value is less than or equal to the provided value
        ref.current.textContent = latest.toFixed(0); // Updating the text content of the DOM element with the animation value
      }
    });
  }, [springValue, value]); // Running the effect whenever springValue or value changes

  return <span ref={ref}></span>; // Returning a span element with a ref
};

export default AnimatedNumbers;
