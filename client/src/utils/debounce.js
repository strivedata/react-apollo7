/**
 * Debounce a function with passed delay.
 */

export function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
