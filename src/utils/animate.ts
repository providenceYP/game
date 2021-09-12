export function animate<T = void>(
  callback: (step: number, ...params: any[]) => T,
  time: number,
  ...args: any[]
): Promise<T> {
  let step = 0;
  let handle: number;

  return new Promise((resolve) => {
    const func = () => {
      const res = callback(step, ...args);

      step += 1;

      if (step > time) {
        cancelAnimationFrame(handle);
        resolve(res);
      } else {
        handle = requestAnimationFrame(func);
      }
    };

    handle = requestAnimationFrame(func);
  });
}
