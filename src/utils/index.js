/**
 * 防抖：在间隔不超过【延迟时间】内的触发，都会导致事件推辞运行。
 * @param fn 事件
 * @param delay  延迟时间
 * @returns {function(): void}
 */
let timer = null
export const debounce = (fn, delay) => {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
}

/**
 * 节流：在某一个【时间段内】，事件只会触发一次；超过时间段后又可以触发
 * @param fn  事件
 * @param delay 延迟
 * @returns {function(): (boolean|undefined)}
 */

let valid = true
export const throttle = (fn, delay) => {
    if (!valid) {
        return false
    }
    valid = false
    setTimeout(() => {
        fn()
        valid = true
    }, delay)
}
