import { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface Props {
  t: string;
  className: string;
  runOnce?: boolean;
}

export default function TextEffect({ t, className, runOnce }: Props) {
  const [text, setText] = useState(t);
  const [hasRun, setHasRun] = useState(false);
  let interval: any;

  const onMouseOver = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return t[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setText(newText);

      if (iteration >= t.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 40);
  };

  useEffect(() => {
    if (runOnce && !hasRun) {
      onMouseOver();
      setHasRun(true);
    }
  }, [runOnce, hasRun]);

  useEffect(() => {
    if (!runOnce) {
      onMouseOver();
    }
  }, []);

  return <h1 onMouseOver={!runOnce ? onMouseOver : undefined} className={className}>{text}</h1>;
}
