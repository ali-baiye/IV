/**
 * question 1
 * 补充代码,鼠标单击 Button1 后将 Button1 移动到 Button2 的后面
 * <div>
    <input type="button" id ="button1" value="1" />
    <input type="button" id ="button2" value="2" />
    </div>
 */

 let btn1 = document.querySelector('#button1');
 let btn2 = document.querySelector('#button2');

 btn1.addEventListener('click', ()=>{
  btn1.parentNode.insertBefore(btn2, btn1);
  }, false);

/**
 * question 2
 * 网页中实现一个计算当年还剩多少时间的倒数计时程序,要求网页上实时动态显示"×× 年还剩 ×× 天 ×× 时 ×× 分 ×× 秒"
 */

  <span id="target"></span>

  // 为了简化。每月默认30天
  function getTimeString() {
    var start = new Date();
    var end = new Date(start.getFullYear() + 1, 0, 1);
    var elapse = Math.floor((end - start) / 1000);

    var seconds = elapse % 60 ;
    var minutes = Math.floor(elapse / 60) % 60;
    var hours = Math.floor(elapse / (60 * 60)) % 24;
    var days = Math.floor(elapse / (60 * 60 * 24)) % 30;
    var months = Math.floor(elapse / (60 * 60 * 24 * 30)) % 12;
    var years = Math.floor(elapse / (60 * 60 * 24 * 30 * 12));

    return start.getFullYear() + '年还剩' + years + '年' + months + '月' + days + '日'
        + hours + '小时' + minutes + '分' + seconds + '秒';
  }

  function domText(elem, text) {
      if (text == undefined) {

          if (elem.textContent) {
              return elem.textContent;
          } else if (elem.innerText) {
              return elem.innerText;
          }
      } else {
          if (elem.textContent) {
              elem.textContent = text;
          } else if (elem.innerText) {
              elem.innerText = text;
          } else {
              elem.innerHTML = text;
          }
      }
  }

  var target = document.getElementById('target');

  setInterval(function () {
      domText(target, getTimeString());
  }, 1000)



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