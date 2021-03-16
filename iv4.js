/**
 * question 1
 * 现有一个字符串 richText,是一段富文本,
 * 需要显示在页面上.有个要求,需要给其中只包含一个 img 元素的 p 标签增加一个叫 pic 的 class.请编写代码实现.
 * 可以使用 jQuery 或 KISSY.
 */

/**
 * question 2
 * 请实现一个 Event 类,继承自此类的对象都会拥有两个方法 on,off,once 和 trigger
 */

/**
 * question 3
 * 编写一个函数将列表子元素顺序反转
 */

/**
 * question 4
 * 以下函数的作用是?空白区域应该填写什么
 */
// define
(function (window) {
    function fn(str) {
        this.str = str;
    }

    fn.prototype.format = function () {
        var arg = __1__;
        return this.str.replace(__2__, function (a, b) {
            return arg[b] || '';
        });
    };

    window.fn = fn;
})(window);

// use
(function () {
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome'));
})();

/**
 * question 5
 * 编写一个函数实现 form 的序列化(即将一个表单中的键值序列化为可提交的字符串)
 */