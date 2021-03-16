/**
 * question 1
 * 补充代码,鼠标单击 Button1 后将 Button1 移动到 Button2 的后面
 * <div>
    <input type="button" id ="button1" value="1" />
    <input type="button" id ="button2" value="2" />
    </div>
 */

var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');

addListener(btn1, 'click', function (event) {
    btn1.parentNode.insertBefore(btn2, btn1);
});

function addListener(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
        return handler;
    } else if (elem.attachEvent) {
        function wrapper() {
            var event = window.event;
            event.target = event.srcElement;
            handler.call(elem, event);
        }
        elem.attachEvent('on' + type, wrapper);
        return wrapper;
    }
}

/**
 * question 2
 * 网页中实现一个计算当年还剩多少时间的倒数计时程序,要求网页上实时动态显示"×× 年还剩 ×× 天 ×× 时 ×× 分 ×× 秒"
 */


/** 
 * question 3
 * 完成一个函数,接受数组作为参数,数组元素为整数或者数组,数组元素包含整数或数组,函数返回扁平化后的数组
    如：[1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]
 */

/**
 * question 4
 * 如何判断一个对象是否为数组
 */

/**
 * question 5
 * 请评价以下事件监听器代码并给出改进意见
 */
if (window.addEventListener) {
    var addListener = function (el, type, listener, useCapture) {
      el.addEventListener(type, listener, useCapture);
    };
  }
  else if (document.all) {
    addListener = function (el, type, listener) {
      el.attachEvent('on' + type, function () {
        listener.apply(el);
      });
    };
  }