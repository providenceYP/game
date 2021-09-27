export function animate<T = void>(
  callback: (step: number, ...params: any[]) => T,
  time: number,
  ...args: any[]
): Promise<T> {
  let step = 0;
  let requestID: number;

  return new Promise((resolve) => {
    const func = () => {
      const res = callback(step, ...args);

      step += 1;

      if (step > time) {
        cancelAnimationFrame(requestID);
        resolve(res);
      } else {
        requestID = requestAnimationFrame(func);
      }
    };

    requestID = requestAnimationFrame(func);
  });
}
