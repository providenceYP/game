import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Props } from './types';

const Timer = ({ started }: Props) => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(0);
  const requestId = useRef(null);

  const animationCallback = useCallback(() => {
    if (requestId.current) {
      setTime(Math.ceil(performance.now() / 1000) - start);
      requestId.current = requestAnimationFrame(animationCallback);
    }
  }, [start]);

  useEffect(() => {
    if (started) {
      setStart(Math.ceil(performance.now() / 1000));
    } else if (requestId.current) {
      cancelAnimationFrame(requestId.current);

      setStart(0);
      requestId.current = null;
    }
  }, [started]);

  useEffect(() => {
    if (start) {
      requestId.current = requestAnimationFrame(animationCallback);
    }
  }, [start]);

  return (
    <div className="font-medium font-mono mb-4 text-xl text-right">
      <span>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}
      </span>
      :<span>{(time % 60).toString().padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;
