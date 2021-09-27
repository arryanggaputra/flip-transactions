/**
 * This function to debouncing your function
 * @param callback function to call
 * @param waitFor time to wait before fire the function
 * @returns
 * https://www.geeksforgeeks.org/debouncing-in-javascript/
 */
const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(...args);
    }, waitFor);
    return result;
  };
};

export default debounce;
