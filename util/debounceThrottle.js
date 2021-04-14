/**  
 * 函数防抖 (只执行最后一次点击)  
 * @param fn  
 * @param delay  
 * @returns {Function}  
 * @constructor  
 */
let timer1 = null; //防抖，  
let timer2 = null; //节流  
//防抖  
function debounce(fn, wait = 500, isImmediate = false) {
	let timerId = null;
	let flag = true;
	if (isImmediate) {
		return function() {
			clearTimeout(timerId);
			if (flag) {
				fn.apply(this, arguments);
				flag = false
			}
			timerId = setTimeout(() => {
				flag = true
			}, wait)
		}
	}
	return function() {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			fn.apply(this, arguments)
		}, wait)
	}
}


/**  
 * 节流  
 */  
function throttle(fn, wait = 500, isImmediate = false) {  
  let flag = true;  
  if (isImmediate) {  
    return function() {  
      if (flag) {  
        fn.apply(this, arguments);  
        flag = false;  
        setTimeout(() => {  
          flag = true  
        }, wait)  
      }  
    }  
  }  
  return function() {  
    if (flag == true) {  
      flag = false  
      setTimeout(() => {  
        fn.apply(this, arguments)  
        flag = true  
      }, wait)  
    }  
  }  
}  


export {
	debounce,
	throttle
};