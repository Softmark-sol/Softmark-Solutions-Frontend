import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Typewriter.css";

const Typewriter = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  startDelay = 500,
  backDelay = 1000,
  loop = false,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      startDelay,
      backDelay,
      loop,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: false, // Disable the default cursor styling
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, startDelay, backDelay, loop]);

  return <span ref={el}></span>;
};

export default Typewriter;
