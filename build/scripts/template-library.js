!function(n,e){"function"==typeof define&&define.amd?define("templateLibrary",["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):n.templateLibrary=e(n.$)}(this,function(n){"use strict";return function(){var e="notification",t="warning",i="error",r=function(e,t,i){n(e).append('<p class="message '+i+'">'+t+"</p>")};return{showNotification:function(n,t){r(n,t,e)},showWarning:function(n,e){r(n,e,t)},showError:function(n,e){r(n,e,i)}}}()});