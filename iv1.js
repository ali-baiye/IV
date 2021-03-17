// 答案地址：https://github.com/qiu-deqing/FE-interview

/**
 * question 1
 * 请用原生 js 实现一个函数,给页面制定的任意一个元素添加一个透明遮罩(透明度可变,默认 0.2),
 * 使这个区域点击无效,要求兼容 IE8+及各主流浏览器,遮罩层效果如下图所示:
 */

function renderMask(ele) {
  const opacity = 0.2;

  const rect = ele.getBoundingClientRect();
  const style = getComputedStyle(ele, null);
  const mask = document.createElement('div');

  const marginLeft = parseFloat(mask.style.marginLeft);
  const marginTop = parseFloat(style.marginTop);

  mask.style.position = 'absolute';
  mask.style.left = (ele.offsetLeft - marginLeft) + 'px';
  mask.style.top = (ele.offsetTop - marginTop) + 'px';
  mask.style.zIndex = '9999';
  mask.style.opacity = '' + opacity;
  mask.style.backgroundColor = '#000';

  mask.style.width = (parseFloat(style.marginLeft) +
  parseFloat(style.marginRight) + rect.width) + 'px';
  mask.style.height = (parseFloat(style.marginTop) +
  parseFloat(style.marginBottom) + rect.height) + 'px';

  ele.parentNode.appendChild(mask);
}

const target = document.getElementById('target');
renderMask(target);


/**
 * question 2
 * 请用代码写出(今天是星期 x)其中 x 表示当天是星期几,如果当天是星期一,输出应该是"今天是星期一"
 */

const a = () => {
  let days = ['日','一','二','三','四','五','六']
  let date = new Date();

  console.log('today is ', days[date.getDay()]);
  date.getFullYear();
  date.getMonth();
  // 这个月的第几天
  date.getDate();
  // 星期几0-6
  date.getDay();
  date.getHours();
  // 格林尼治时间
  date.getTime();
}

/**
 * question 3
 * 下面这段代码想要循环延时输出结果 0 1 2 3 4,
 * 请问输出结果是否正确,如果不正确,请说明为什么,并修改循环内的代码使其输出正确结果
 */
for (var i = 0; i < 5; ++i) {
    setTimeout(function () {
      console.log(i + ' ');
    }, 100);
}

for(let i = 0; i< 5; ++i) {
  setTimeout(()=>{
    console.log(i+'')
  },100)
}

for(var i=0; i<5; i++){
  (function(i){
    setTimeout(()=>{
      console.log(i+'')
    },100)
  })(i)
}

/**
 * question 4
 * 现有一个 Page 类,其原型对象上有许多以 post 开头的方法(如 postMsg);
 * 另有一拦截函数 chekc,只返回 ture 或 false.
 * 请设计一个函数,该函数应批量改造原 Page 的 postXXX 方法,在保留其原有功能的同时,
 * 为每个 postXXX 方法增加拦截验证功能,当 chekc 返回 true 时继续执行原 postXXX 方法,
 * 返回 false 时不再执行原 postXXX 方法
 */
function Page() {}

Page.prototype = {
  constructor: Page,

  postA: function (a) {
    console.log('a:' + a);
  },
  postB: function (b) {
    console.log('b:' + b);
  },
  postC: function (c) {
    console.log('c:' + c);
  },
  check: function () {
    return Math.random() > 0.5;
  }
}

function checkfy(obj) {
  for (var key in obj) {
    if (key.indexOf('post') === 0 && typeof obj[key] === 'function') {
      (function (key) {
        var fn = obj[key];
        obj[key] = function () {
          if (obj.check()) {
            fn.apply(obj, arguments);
          }
        };
      }(key));
    }
  }
}

checkfy(Page.prototype);

var obj = new Page();

obj.postA('checkfy');
obj.postB('checkfy');
obj.postC('checkfy');

/**
 * question 5
 * 编写 javascript 深度克隆函数 deepClone
 */

function deepClone(obj) {
  // rudimentary value: null, non-object, undefined, function
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // Dom
  if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true);
  }

  // Date
  if (Object.prototype.toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime());
  }

  // RegExp
  if (Object.prototype.toString.call(obj) === '[object RegExp]') {
    const flags = [];
    if (obj.global) {
      flags.push('g');
    }
    if (obj.multiline) {
      flags.push('m');
    }
    if (obj.ignoreCase) {
      flags.push('i');
    }

    return new RegExp(obj.source, flags.join(''));
  }

  // Array, object
  const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

  for (const key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}