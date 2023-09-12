/**
 * debounce
 *
 * @param {Function} func 实际要执行的函数                 表示 func 是一个函数类型的参数。
 * @param {Number} delay 延迟时间，单位是 ms。在延迟时间内，如果函数多次被调用，只有最后一次调用会生效。       表示 delay 是一个数字类型的参数。
 * @param {Function} callback 在 func 执行后的回调  表示 callback 是一个函数类型的参数
 *
 * @return {Function}                              表示函数将返回一个函数类型的结果。
 * 
 * 这段代码定义了一个名为 debounce 的函数，它实现了防抖功能，用于限制函数在短时间内频繁触发的情况，以减少资源消耗和提高性能。

函数内部声明了一个 timer 变量，并返回了一个闭包函数。闭包函数中，首先获取当前执行环境和传入的参数。然后清除之前的延迟计时器。

接下来，通过 setTimeout 函数来设置新的延迟计时器。在延迟时间结束后，会执行传入的 func 函数，并通过 apply 方法将当前执行环境和参数传递给 func 函数。

最后，通过逻辑运算符 ! 来判断是否存在 callback 函数，并在条件满足时执行回调函数。

整个函数的作用是，在短时间内连续调用 debounce 返回的闭包函数时，只有最后一次调用会触发实际的 func 函数，
并在延迟结束后执行可选的回调函数。这样可以避免频繁触发函数造成的性能问题。
 */

export function debounce(func, delay, callback) {
  var timer

  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      func.apply(context, args)
      !callback || callback()
    }, delay)
  }
}



/**
 * merge
 *
 * @param  {Object} src
 * @param  {Object} dest
 * @return {Object}
 */
export function merge(src, dest) {
  for (var item in src) {
    dest[item] = src[item]
  }

  return dest
}

/**
 * 是否是函数
 *
 * @param  {Any} func 判断对象
 * @return {Boolean}
 */
export function isFunction(func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}

/**
 * 将类数组转化成数组
 *
 * @param  {Object} arrayLike 类数组对象
 * @return {Array} 转化后的数组
 */
export function arrayFrom(arrayLike) {
  return [].slice.call(arrayLike)
}
