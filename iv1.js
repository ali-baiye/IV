// 答案地址：https://github.com/qiu-deqing/FE-interview

/**
 * question 1
 * 请用原生 js 实现一个函数,给页面制定的任意一个元素添加一个透明遮罩(透明度可变,默认 0.2),
 * 使这个区域点击无效,要求兼容 IE8+及各主流浏览器,遮罩层效果如下图所示:
 */


/**
 * question 2
 * 请用代码写出(今天是星期 x)其中 x 表示当天是星期几,如果当天是星期一,输出应该是"今天是星期一"
 */

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

/**
 * question 4
 * 现有一个 Page 类,其原型对象上有许多以 post 开头的方法(如 postMsg);
 * 另有一拦截函数 chekc,只返回 ture 或 false.
 * 请设计一个函数,该函数应批量改造原 Page 的 postXXX 方法,在保留其原有功能的同时,
 * 为每个 postXXX 方法增加拦截验证功能,当 chekc 返回 true 时继续执行原 postXXX 方法,
 * 返回 false 时不再执行原 postXXX 方法
 */

/**
 * question 5
 * 编写 javascript 深度克隆函数 deepClone
 */