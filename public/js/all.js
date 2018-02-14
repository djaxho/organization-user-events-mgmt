/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0;
})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.MotionUI = factory(root.jQuery);
  }
}(this, function($) {
'use strict';

// Polyfill for requestAnimationFrame
(function() {
  if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                 || window[vp+'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() { callback(lastTime = nextTime); },
                          nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
})();

var initClasses   = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];

// Find the right "transitionend" event for this browser
var endEvent = (function() {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  }
  var elem = window.document.createElement('div');

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      return transitions[t];
    }
  }

  return null;
})();

function animate(isIn, element, animation, cb) {
  element = $(element).eq(0);

  if (!element.length) return;

  if (endEvent === null) {
    isIn ? element.show() : element.hide();
    cb();
    return;
  }

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();
  element.addClass(animation);
  element.css('transition', 'none');
  requestAnimationFrame(function() {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(function() {
    element[0].offsetWidth;
    element.css('transition', '');
    element.addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one('transitionend', finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
  }
}

var MotionUI = {
  animateIn: function(element, animation, cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function(element, animation, cb) {
    animate(false, element, animation, cb);
  }
}

return MotionUI;
}));

!function($) {

"use strict";

var FOUNDATION_VERSION = '6.2.0';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Returns a boolean for RTL support
   */
  rtl: function(){
    return $('html').attr('dir') === 'rtl';
  },
  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function(plugin, name) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = (name || functionName(plugin));
    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas
    var attrName  = hyphenate(className);

    // Add to the Foundation object and the plugins list (for reflowing)
    this._plugins[attrName] = this[className] = plugin;
  },
  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repeditive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function(plugin, name){
    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
    plugin.uuid = this.GetYoDigits(6, pluginName);

    if(!plugin.$element.attr(`data-${pluginName}`)){ plugin.$element.attr(`data-${pluginName}`, plugin.uuid); }
    if(!plugin.$element.data('zfPlugin')){ plugin.$element.data('zfPlugin', plugin); }
          /**
           * Fires when the plugin has initialized.
           * @event Plugin#init
           */
    plugin.$element.trigger(`init.zf.${pluginName}`);

    this._uuids.push(plugin.uuid);

    return;
  },
  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repeditive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function(plugin){
    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
    plugin.$element.removeAttr(`data-${pluginName}`).removeData('zfPlugin')
          /**
           * Fires when the plugin has been destroyed.
           * @event Plugin#destroyed
           */
          .trigger(`destroyed.zf.${pluginName}`);
    for(var prop in plugin){
      plugin[prop] = null;//clean up script to prep for garbage collection.
    }
    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
   reInit: function(plugins){
     var isJQ = plugins instanceof $;
     try{
       if(isJQ){
         plugins.each(function(){
           $(this).data('zfPlugin')._init();
         });
       }else{
         var type = typeof plugins,
         _this = this,
         fns = {
           'object': function(plgs){
             plgs.forEach(function(p){
               p = hyphenate(p);
               $('[data-'+ p +']').foundation('_init');
             });
           },
           'string': function(){
             plugins = hyphenate(plugins);
             $('[data-'+ plugins +']').foundation('_init');
           },
           'undefined': function(){
             this['object'](Object.keys(_this._plugins));
           }
         };
         fns[type](plugins);
       }
     }catch(err){
       console.error(err);
     }finally{
       return plugins;
     }
   },

  /**
   * returns a random base-36 uid with namespacing
   * @function
   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
   * @returns {String} - unique id
   */
  GetYoDigits: function(length, namespace){
    length = length || 6;
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1) + (namespace ? `-${namespace}` : '');
  },
  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function(elem, plugins) {

    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    }
    // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
      plugins = [plugins];
    }

    var _this = this;

    // Iterate through each plugin
    $.each(plugins, function(i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name];

      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
      var $elem = $(elem).find('[data-'+name+']').addBack('[data-'+name+']');

      // For each plugin found, initialize it
      $elem.each(function() {
        var $el = $(this),
            opts = {};
        // Don't double-dip on plugins
        if ($el.data('zfPlugin')) {
          console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");
          return;
        }

        if($el.attr('data-options')){
          var thing = $el.attr('data-options').split(';').forEach(function(e, i){
            var opt = e.split(':').map(function(el){ return el.trim(); });
            if(opt[0]) opts[opt[0]] = parseValue(opt[1]);
          });
        }
        try{
          $el.data('zfPlugin', new plugin($(this), opts));
        }catch(er){
          console.error(er);
        }finally{
          return;
        }
      });
    });
  },
  getFnName: functionName,
  transitionend: function($elem){
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'otransitionend'
    };
    var elem = document.createElement('div'),
        end;

    for (var t in transitions){
      if (typeof elem.style[t] !== 'undefined'){
        end = transitions[t];
      }
    }
    if(end){
      return end;
    }else{
      end = setTimeout(function(){
        $elem.triggerHandler('transitionend', [$elem]);
      }, 1);
      return 'transitionend';
    }
  }
};

Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function (func, delay) {
    var timer = null;

    return function () {
      var context = this, args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};

// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
 * The Foundation jQuery method.
 * @param {String|Array} method - An action to perform on the current jQuery object.
 */
var foundation = function(method) {
  var type = typeof method,
      $meta = $('meta.foundation-mq'),
      $noJS = $('.no-js');

  if(!$meta.length){
    $('<meta class="foundation-mq">').appendTo(document.head);
  }
  if($noJS.length){
    $noJS.removeClass('no-js');
  }

  if(type === 'undefined'){//needs to initialize the Foundation object, or an individual plugin.
    Foundation.MediaQuery._init();
    Foundation.reflow(this);
  }else if(type === 'string'){//an individual method to invoke on a plugin or group of plugins
    var args = Array.prototype.slice.call(arguments, 1);//collect all the arguments, if necessary
    var plugClass = this.data('zfPlugin');//determine the class of plugin

    if(plugClass !== undefined && plugClass[method] !== undefined){//make sure both the class and method exist
      if(this.length === 1){//if there's only one, call it directly.
          plugClass[method].apply(plugClass, args);
      }else{
        this.each(function(i, el){//otherwise loop through the jQuery collection and invoke the method on each
          plugClass[method].apply($(el).data('zfPlugin'), args);
        });
      }
    }else{//error for no class or no method
      throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
    }
  }else{//error for invalid argument type
    throw new TypeError(`We're sorry, ${type} is not a valid parameter. You must use a string representing the method you wish to invoke.`);
  }
  return this;
};

window.Foundation = Foundation;
$.fn.foundation = foundation;

// Polyfill for requestAnimationFrame
(function() {
  if (!Date.now || !window.Date.now)
    window.Date.now = Date.now = function() { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                 || window[vp+'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() { callback(lastTime = nextTime); },
                          nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */
  if(!window.performance || !window.performance.now){
    window.performance = {
      start: Date.now(),
      now: function(){ return Date.now() - this.start; }
    };
  }
})();
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
// Polyfill to get the name of a function in IE9
function functionName(fn) {
  if (Function.prototype.name === undefined) {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = (funcNameRegex).exec((fn).toString());
    return (results && results.length > 1) ? results[1].trim() : "";
  }
  else if (fn.prototype === undefined) {
    return fn.constructor.name;
  }
  else {
    return fn.prototype.constructor.name;
  }
}
function parseValue(str){
  if(/true/.test(str)) return true;
  else if(/false/.test(str)) return false;
  else if(!isNaN(str * 1)) return parseFloat(str);
  return str;
}
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

}(jQuery);

'use strict';

!function($) {

/**
 * Abide module.
 * @module foundation.abide
 */

class Abide {
  /**
   * Creates a new instance of Abide.
   * @class
   * @fires Abide#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options = {}) {
    this.$element = element;
    this.options  = $.extend({}, Abide.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Abide');
  }

  /**
   * Initializes the Abide plugin and calls functions to get Abide functioning on load.
   * @private
   */
  _init() {
    this.$inputs = this.$element.find('input, textarea, select').not('[data-abide-ignore]');

    this._events();
  }

  /**
   * Initializes events for Abide.
   * @private
   */
  _events() {
    this.$element.off('.abide')
      .on('reset.zf.abide', () => {
        this.resetForm();
      })
      .on('submit.zf.abide', () => {
        return this.validateForm();
      });

    if (this.options.validateOn === 'fieldChange') {
      this.$inputs
        .off('change.zf.abide')
        .on('change.zf.abide', (e) => {
          this.validateInput($(e.target));
        });
    }

    if (this.options.liveValidate) {
      this.$inputs
        .off('input.zf.abide')
        .on('input.zf.abide', (e) => {
          this.validateInput($(e.target));
        });
    }
  }

  /**
   * Calls necessary functions to update Abide upon DOM change
   * @private
   */
  _reflow() {
    this._init();
  }

  /**
   * Checks whether or not a form element has the required attribute and if it's checked or not
   * @param {Object} element - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */
  requiredCheck($el) {
    if (!$el.attr('required')) return true;

    var isGood = true;

    switch ($el[0].type) {
      case 'checkbox':
      case 'radio':
        isGood = $el[0].checked;
        break;

      case 'select':
      case 'select-one':
      case 'select-multiple':
        var opt = $el.find('option:selected');
        if (!opt.length || !opt.val()) isGood = false;
        break;

      default:
        if(!$el.val() || !$el.val().length) isGood = false;
    }

    return isGood;
  }

  /**
   * Based on $el, get the first element with selector in this order:
   * 1. The element's direct sibling('s).
   * 3. The element's parent's children.
   *
   * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
   *
   * @param {Object} $el - jQuery object to use as reference to find the form error selector.
   * @returns {Object} jQuery object with the selector.
   */
  findFormError($el) {
    var $error = $el.siblings(this.options.formErrorSelector);

    if (!$error.length) {
      $error = $el.parent().find(this.options.formErrorSelector);
    }

    return $error;
  }

  /**
   * Get the first element in this order:
   * 2. The <label> with the attribute `[for="someInputId"]`
   * 3. The `.closest()` <label>
   *
   * @param {Object} $el - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */
  findLabel($el) {
    var id = $el[0].id;
    var $label = this.$element.find(`label[for="${id}"]`);

    if (!$label.length) {
      return $el.closest('label');
    }

    return $label;
  }

  /**
   * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
   * @param {Object} $el - jQuery object to add the class to
   */
  addErrorClasses($el) {
    var $label = this.findLabel($el);
    var $formError = this.findFormError($el);

    if ($label.length) {
      $label.addClass(this.options.labelErrorClass);
    }

    if ($formError.length) {
      $formError.addClass(this.options.formErrorClass);
    }

    $el.addClass(this.options.inputErrorClass).attr('data-invalid', '');
  }

  /**
   * Removes CSS error class as specified by the Abide settings from the label, input, and the form
   * @param {Object} $el - jQuery object to remove the class from
   */
  removeErrorClasses($el) {
    var $label = this.findLabel($el);
    var $formError = this.findFormError($el);

    if ($label.length) {
      $label.removeClass(this.options.labelErrorClass);
    }

    if ($formError.length) {
      $formError.removeClass(this.options.formErrorClass);
    }

    $el.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
  }

  /**
   * Goes through a form to find inputs and proceeds to validate them in ways specific to their type
   * @fires Abide#invalid
   * @fires Abide#valid
   * @param {Object} element - jQuery object to validate, should be an HTML input
   * @returns {Boolean} goodToGo - If the input is valid or not.
   */
  validateInput($el) {
    var clearRequire = this.requiredCheck($el),
        validated = false,
        customValidator = true,
        validator = $el.attr('data-validator'),
        equalTo = true;

    switch ($el[0].type) {
      case 'radio':
        validated = this.validateRadio($el.attr('name'));
        break;

      case 'checkbox':
        validated = clearRequire;
        break;

      case 'select':
      case 'select-one':
      case 'select-multiple':
        validated = clearRequire;
        break;

      default:
        validated = this.validateText($el);
    }

    if (validator) {
      customValidator = this.matchValidation($el, validator, $el.attr('required'));
    }

    if ($el.attr('data-equalto')) {
      equalTo = this.options.validators.equalTo($el);
    }

    var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
    var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

    this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);

    /**
     * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
     * Trigger includes the DOM element of the input.
     * @event Abide#valid
     * @event Abide#invalid
     */
    $el.trigger(message, [$el]);

    return goodToGo;
  }

  /**
   * Goes through a form and if there are any invalid inputs, it will display the form error element
   * @returns {Boolean} noError - true if no errors were detected...
   * @fires Abide#formvalid
   * @fires Abide#forminvalid
   */
  validateForm() {
    var acc = [];
    var _this = this;

    this.$inputs.each(function() {
      acc.push(_this.validateInput($(this)));
    });

    var noError = acc.indexOf(false) === -1;

    this.$element.find('[data-abide-error]').css('display', (noError ? 'none' : 'block'));

    /**
     * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
     * Trigger includes the element of the form.
     * @event Abide#formvalid
     * @event Abide#forminvalid
     */
    this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);

    return noError;
  }

  /**
   * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
   * @param {Object} $el - jQuery object to validate, should be a text input HTML element
   * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
   * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
   */
  validateText($el, pattern) {
    // pattern = pattern ? pattern : $el.attr('pattern') ? $el.attr('pattern') : $el.attr('type');
    pattern = (pattern || $el.attr('pattern') || $el.attr('type'));
    var inputText = $el.val();

    // if text, check if the pattern exists, if so, test it, if no text or no pattern, return true.
    return inputText.length ?
      this.options.patterns.hasOwnProperty(pattern) ? this.options.patterns[pattern].test(inputText) :
        pattern && pattern !== $el.attr('type') ?
          new RegExp(pattern).test(inputText) :
        true :
      true;
   }

  /**
   * Determines whether or a not a radio input is valid based on whether or not it is required and selected
   * @param {String} groupName - A string that specifies the name of a radio button group
   * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
   */
  validateRadio(groupName) {
    var $group = this.$element.find(`:radio[name="${groupName}"]`),
        counter = [],
        _this = this;

    $group.each(function(){
      var rdio = $(this),
          clear = _this.requiredCheck(rdio);
      counter.push(clear);
      if(clear) _this.removeErrorClasses(rdio);
    });

    return counter.indexOf(false) === -1;
  }

  /**
   * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
   * @param {Object} $el - jQuery input element.
   * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
   * @param {Boolean} required - self explanatory?
   * @returns {Boolean} - true if validations passed.
   */
  matchValidation($el, validators, required) {
    required = required ? true : false;

    var clear = validators.split(' ').map((v) => {
      return this.options.validators[v]($el, required, $el.parent());
    });
    return clear.indexOf(false) === -1;
  }

  /**
   * Resets form inputs and styles
   * @fires Abide#formreset
   */
  resetForm() {
    var $form = this.$element,
        opts = this.options;

    $(`.${opts.labelErrorClass}`, $form).not('small').removeClass(opts.labelErrorClass);
    $(`.${opts.inputErrorClass}`, $form).not('small').removeClass(opts.inputErrorClass);
    $(`${opts.formErrorSelector}.${opts.formErrorClass}`).removeClass(opts.formErrorClass);
    $form.find('[data-abide-error]').css('display', 'none');
    $(':input', $form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr('data-invalid');
    /**
     * Fires when the form has been reset.
     * @event Abide#formreset
     */
    $form.trigger('formreset.zf.abide', [$form]);
  }

  /**
   * Destroys an instance of Abide.
   * Removes error styles and classes from elements, without resetting their values.
   */
  destroy() {
    var _this = this;
    this.$element
      .off('.abide')
      .find('[data-abide-error]')
        .css('display', 'none');

    this.$inputs
      .off('.abide')
      .each(function() {
        _this.removeErrorClasses($(this));
      });

    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
Abide.defaults = {
  /**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @example 'fieldChange'
   */
  validateOn: 'fieldChange',

  /**
   * Class to be applied to input labels on failed validation.
   * @option
   * @example 'is-invalid-label'
   */
  labelErrorClass: 'is-invalid-label',

  /**
   * Class to be applied to inputs on failed validation.
   * @option
   * @example 'is-invalid-input'
   */
  inputErrorClass: 'is-invalid-input',

  /**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @example '.form-error'
   */
  formErrorSelector: '.form-error',

  /**
   * Class added to Form Errors on failed validation.
   * @option
   * @example 'is-visible'
   */
  formErrorClass: 'is-visible',

  /**
   * Set to true to validate text inputs on any value change.
   * @option
   * @example false
   */
  liveValidate: false,

  patterns: {
    alpha : /^[a-zA-Z]+$/,
    alpha_numeric : /^[a-zA-Z0-9]+$/,
    integer : /^[-+]?\d+$/,
    number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

    // amex, visa, diners
    card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    cvv : /^([0-9]){3,4}$/,

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
    email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

    url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
    // abc.de
    domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

    datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
    // YYYY-MM-DD
    date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
    // HH:MM:SS
    time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
    dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
    // MM/DD/YYYY
    month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
    // DD/MM/YYYY
    day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

    // #FFF or #FFFFFF
    color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
  },

  /**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
  validators: {
    equalTo: function (el, required, parent) {
      return $(`#${el.attr('data-equalto')}`).val() === el.val();
    }
  }
}

// Window exports
Foundation.plugin(Abide, 'Abide');

}(jQuery);

'use strict';

!function($) {

/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 */

class Accordion {
  /**
   * Creates a new instance of an accordion.
   * @class
   * @fires Accordion#init
   * @param {jQuery} element - jQuery object to make into an accordion.
   * @param {Object} options - a plain object with settings to override the default options.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Accordion.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Accordion');
    Foundation.Keyboard.register('Accordion', {
      'ENTER': 'toggle',
      'SPACE': 'toggle',
      'ARROW_DOWN': 'next',
      'ARROW_UP': 'previous'
    });
  }

  /**
   * Initializes the accordion by animating the preset active pane(s).
   * @private
   */
  _init() {
    this.$element.attr('role', 'tablist');
    this.$tabs = this.$element.children('li');
    if (this.$tabs.length === 0) {
      this.$tabs = this.$element.children('[data-accordion-item]');
    }
    this.$tabs.each(function(idx, el){

      var $el = $(el),
          $content = $el.find('[data-tab-content]'),
          id = $content[0].id || Foundation.GetYoDigits(6, 'accordion'),
          linkId = el.id || `${id}-label`;

      $el.find('a:first').attr({
        'aria-controls': id,
        'role': 'tab',
        'id': linkId,
        'aria-expanded': false,
        'aria-selected': false
      });
      $content.attr({'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id});
    });
    var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
    if($initActive.length){
      this.down($initActive, true);
    }
    this._events();
  }

  /**
   * Adds event handlers for items within the accordion.
   * @private
   */
  _events() {
    var _this = this;

    this.$tabs.each(function() {
      var $elem = $(this);
      var $tabContent = $elem.children('[data-tab-content]');
      if ($tabContent.length) {
        $elem.children('a').off('click.zf.accordion keydown.zf.accordion')
               .on('click.zf.accordion', function(e) {
        // $(this).children('a').on('click.zf.accordion', function(e) {
          e.preventDefault();
          if ($elem.hasClass('is-active')) {
            if(_this.options.allowAllClosed || $elem.siblings().hasClass('is-active')){
              _this.up($tabContent);
            }
          }
          else {
            _this.down($tabContent);
          }
        }).on('keydown.zf.accordion', function(e){
          Foundation.Keyboard.handleKey(e, 'Accordion', {
            toggle: function() {
              _this.toggle($tabContent);
            },
            next: function() {
              $elem.next().find('a').focus().trigger('click.zf.accordion');
            },
            previous: function() {
              $elem.prev().find('a').focus().trigger('click.zf.accordion');
            },
            handled: function() {
              e.preventDefault();
              e.stopPropagation();
            }
          });
        });
      }
    });
  }

  /**
   * Toggles the selected content pane's open/close state.
   * @param {jQuery} $target - jQuery object of the pane to toggle.
   * @function
   */
  toggle($target) {
    if($target.parent().hasClass('is-active')) {
      if(this.options.allowAllClosed || $target.parent().siblings().hasClass('is-active')){
        this.up($target);
      } else { return; }
    } else {
      this.down($target);
    }
  }

  /**
   * Opens the accordion tab defined by `$target`.
   * @param {jQuery} $target - Accordion pane to open.
   * @param {Boolean} firstTime - flag to determine if reflow should happen.
   * @fires Accordion#down
   * @function
   */
  down($target, firstTime) {
    var _this = this;
    if(!this.options.multiExpand && !firstTime){
      var $currentActive = this.$element.find('.is-active').children('[data-tab-content]');
      if($currentActive.length){
        this.up($currentActive);
      }
    }

    $target
      .attr('aria-hidden', false)
      .parent('[data-tab-content]')
      .addBack()
      .parent().addClass('is-active');

    // Foundation.Move(_this.options.slideSpeed, $target, function(){
      $target.slideDown(_this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
        _this.$element.trigger('down.zf.accordion', [$target]);
      });
    // });

    // if(!firstTime){
    //   Foundation._reflow(this.$element.attr('data-accordion'));
    // }
    $(`#${$target.attr('aria-labelledby')}`).attr({
      'aria-expanded': true,
      'aria-selected': true
    });
  }

  /**
   * Closes the tab defined by `$target`.
   * @param {jQuery} $target - Accordion tab to close.
   * @fires Accordion#up
   * @function
   */
  up($target) {
    var $aunts = $target.parent().siblings(),
        _this = this;
    var canClose = this.options.multiExpand ? $aunts.hasClass('is-active') : $target.parent().hasClass('is-active');

    if(!this.options.allowAllClosed && !canClose) {
      return;
    }

    // Foundation.Move(this.options.slideSpeed, $target, function(){
      $target.slideUp(_this.options.slideSpeed, function () {
        /**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
        _this.$element.trigger('up.zf.accordion', [$target]);
      });
    // });

    $target.attr('aria-hidden', true)
           .parent().removeClass('is-active');

    $(`#${$target.attr('aria-labelledby')}`).attr({
     'aria-expanded': false,
     'aria-selected': false
   });
  }

  /**
   * Destroys an instance of an accordion.
   * @fires Accordion#destroyed
   * @function
   */
  destroy() {
    this.$element.find('[data-tab-content]').slideUp(0).css('display', '');
    this.$element.find('a').off('.zf.accordion');

    Foundation.unregisterPlugin(this);
  }
}

Accordion.defaults = {
  /**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @example 250
   */
  slideSpeed: 250,
  /**
   * Allow the accordion to have multiple open panes.
   * @option
   * @example false
   */
  multiExpand: false,
  /**
   * Allow the accordion to close all panes.
   * @option
   * @example false
   */
  allowAllClosed: false
};

// Window exports
Foundation.plugin(Accordion, 'Accordion');

}(jQuery);

'use strict';

!function($) {

/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */

class AccordionMenu {
  /**
   * Creates a new instance of an accordion menu.
   * @class
   * @fires AccordionMenu#init
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'accordion');

    this._init();

    Foundation.registerPlugin(this, 'AccordionMenu');
    Foundation.Keyboard.register('AccordionMenu', {
      'ENTER': 'toggle',
      'SPACE': 'toggle',
      'ARROW_RIGHT': 'open',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'close',
      'ESCAPE': 'closeAll',
      'TAB': 'down',
      'SHIFT_TAB': 'up'
    });
  }



  /**
   * Initializes the accordion menu by hiding all nested menus.
   * @private
   */
  _init() {
    this.$element.find('[data-submenu]').not('.is-active').slideUp(0);//.find('a').css('padding-left', '1rem');
    this.$element.attr({
      'role': 'tablist',
      'aria-multiselectable': this.options.multiOpen
    });

    this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
    this.$menuLinks.each(function(){
      var linkId = this.id || Foundation.GetYoDigits(6, 'acc-menu-link'),
          $elem = $(this),
          $sub = $elem.children('[data-submenu]'),
          subId = $sub[0].id || Foundation.GetYoDigits(6, 'acc-menu'),
          isActive = $sub.hasClass('is-active');
      $elem.attr({
        'aria-controls': subId,
        'aria-expanded': isActive,
        'role': 'tab',
        'id': linkId
      });
      $sub.attr({
        'aria-labelledby': linkId,
        'aria-hidden': !isActive,
        'role': 'tabpanel',
        'id': subId
      });
    });
    var initPanes = this.$element.find('.is-active');
    if(initPanes.length){
      var _this = this;
      initPanes.each(function(){
        _this.down($(this));
      });
    }
    this._events();
  }

  /**
   * Adds event handlers for items within the menu.
   * @private
   */
  _events() {
    var _this = this;

    this.$element.find('li').each(function() {
      var $submenu = $(this).children('[data-submenu]');

      if ($submenu.length) {
        $(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function(e) {
          e.preventDefault();

          _this.toggle($submenu);
        });
      }
    }).on('keydown.zf.accordionmenu', function(e){
      var $element = $(this),
          $elements = $element.parent('ul').children('li'),
          $prevElement,
          $nextElement,
          $target = $element.children('[data-submenu]');

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i-1));
          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));

          if ($(this).children('[data-submenu]:visible').length) { // has open sub menu
            $nextElement = $element.find('li:first-child');
          }
          if ($(this).is(':first-child')) { // is first element of sub menu
            $prevElement = $element.parents('li').first();
          } else if ($prevElement.children('[data-submenu]:visible').length) { // if previous element has open sub menu
            $prevElement = $prevElement.find('li:last-child');
          }
          if ($(this).is(':last-child')) { // is last element of sub menu
            $nextElement = $element.parents('li').first().next('li');
          }

          return;
        }
      });
      Foundation.Keyboard.handleKey(e, 'AccordionMenu', {
        open: function() {
          if ($target.is(':hidden')) {
            _this.down($target);
            $target.find('li').first().focus();
          }
        },
        close: function() {
          if ($target.length && !$target.is(':hidden')) { // close active sub of this item
            _this.up($target);
          } else if ($element.parent('[data-submenu]').length) { // close currently open sub
            _this.up($element.parent('[data-submenu]'));
            $element.parents('li').first().focus();
          }
        },
        up: function() {
          $prevElement.focus();
        },
        down: function() {
          $nextElement.focus();
        },
        toggle: function() {
          if ($element.children('[data-submenu]').length) {
            _this.toggle($element.children('[data-submenu]'));
          }
        },
        closeAll: function() {
          _this.hideAll();
        },
        handled: function() {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    });//.attr('tabindex', 0);
  }

  /**
   * Closes all panes of the menu.
   * @function
   */
  hideAll() {
    this.$element.find('[data-submenu]').slideUp(this.options.slideSpeed);
  }

  /**
   * Toggles the open/close state of a submenu.
   * @function
   * @param {jQuery} $target - the submenu to toggle
   */
  toggle($target){
    if(!$target.is(':animated')) {
      if (!$target.is(':hidden')) {
        this.up($target);
      }
      else {
        this.down($target);
      }
    }
  }

  /**
   * Opens the sub-menu defined by `$target`.
   * @param {jQuery} $target - Sub-menu to open.
   * @fires AccordionMenu#down
   */
  down($target) {
    var _this = this;

    if(!this.options.multiOpen) {
      this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
    }

    $target.addClass('is-active').attr({'aria-hidden': false})
      .parent('.is-accordion-submenu-parent').attr({'aria-expanded': true});

      Foundation.Move(this.options.slideSpeed, $target, function() {
        $target.slideDown(_this.options.slideSpeed, function () {
          /**
           * Fires when the menu is done opening.
           * @event AccordionMenu#down
           */
          _this.$element.trigger('down.zf.accordionMenu', [$target]);
        });
      });
  }

  /**
   * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
   * @param {jQuery} $target - Sub-menu to close.
   * @fires AccordionMenu#up
   */
  up($target) {
    var _this = this;
    Foundation.Move(this.options.slideSpeed, $target, function(){
      $target.slideUp(_this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
        _this.$element.trigger('up.zf.accordionMenu', [$target]);
      });
    });

    var $menus = $target.find('[data-submenu]').slideUp(0).addBack().attr('aria-hidden', true);

    $menus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
  }

  /**
   * Destroys an instance of accordion menu.
   * @fires AccordionMenu#destroyed
   */
  destroy() {
    this.$element.find('[data-submenu]').slideDown(0).css('display', '');
    this.$element.find('a').off('click.zf.accordionMenu');

    Foundation.Nest.Burn(this.$element, 'accordion');
    Foundation.unregisterPlugin(this);
  }
}

AccordionMenu.defaults = {
  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @example 250
   */
  slideSpeed: 250,
  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @example true
   */
  multiOpen: true
};

// Window exports
Foundation.plugin(AccordionMenu, 'AccordionMenu');

}(jQuery);

'use strict';

!function($) {

/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */

class Drilldown {
  /**
   * Creates a new instance of a drilldown menu.
   * @class
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Drilldown.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'drilldown');

    this._init();

    Foundation.registerPlugin(this, 'Drilldown');
    Foundation.Keyboard.register('Drilldown', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'previous',
      'ESCAPE': 'close',
      'TAB': 'down',
      'SHIFT_TAB': 'up'
    });
  }

  /**
   * Initializes the drilldown by creating jQuery collections of elements
   * @private
   */
  _init() {
    this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent');
    this.$submenus = this.$submenuAnchors.children('[data-submenu]');
    this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'menuitem');

    this._prepareMenu();

    this._keyboardEvents();
  }

  /**
   * prepares drilldown menu by setting attributes to links and elements
   * sets a min height to prevent content jumping
   * wraps the element if not already wrapped
   * @private
   * @function
   */
  _prepareMenu() {
    var _this = this;
    // if(!this.options.holdOpen){
    //   this._menuLinkEvents();
    // }
    this.$submenuAnchors.each(function(){
      var $sub = $(this);
      var $link = $sub.find('a:first');
      if(_this.options.parentLink){
        $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>');
      }
      $link.data('savedHref', $link.attr('href')).removeAttr('href');
      $sub.children('[data-submenu]')
          .attr({
            'aria-hidden': true,
            'tabindex': 0,
            'role': 'menu'
          });
      _this._events($sub);
    });
    this.$submenus.each(function(){
      var $menu = $(this),
          $back = $menu.find('.js-drilldown-back');
      if(!$back.length){
        $menu.prepend(_this.options.backButton);
      }
      _this._back($menu);
    });
    if(!this.$element.parent().hasClass('is-drilldown')){
      this.$wrapper = $(this.options.wrapper).addClass('is-drilldown').css(this._getMaxDims());
      this.$element.wrap(this.$wrapper);
    }
  }

  /**
   * Adds event handlers to elements in the menu.
   * @function
   * @private
   * @param {jQuery} $elem - the current menu item to add handlers to.
   */
  _events($elem) {
    var _this = this;

    $elem.off('click.zf.drilldown')
    .on('click.zf.drilldown', function(e){
      if($(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')){
        e.stopImmediatePropagation();
        e.preventDefault();
      }

      // if(e.target !== e.currentTarget.firstElementChild){
      //   return false;
      // }
      _this._show($elem);

      if(_this.options.closeOnClick){
        var $body = $('body').not(_this.$wrapper);
        $body.off('.zf.drilldown').on('click.zf.drilldown', function(e){
          e.preventDefault();
          _this._hideAll();
          $body.off('.zf.drilldown');
        });
      }
    });
  }

  /**
   * Adds keydown event listener to `li`'s in the menu.
   * @private
   */
  _keyboardEvents() {
    var _this = this;
    this.$menuItems.add(this.$element.find('.js-drilldown-back')).on('keydown.zf.drilldown', function(e){
      var $element = $(this),
          $elements = $element.parent('ul').children('li'),
          $prevElement,
          $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i-1));
          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
          return;
        }
      });
      Foundation.Keyboard.handleKey(e, 'Drilldown', {
        next: function() {
          if ($element.is(_this.$submenuAnchors)) {
            _this._show($element);
            $element.on(Foundation.transitionend($element), function(){
              $element.find('ul li').filter(_this.$menuItems).first().focus();
            });
          }
        },
        previous: function() {
          _this._hide($element.parent('ul'));
          $element.parent('ul').on(Foundation.transitionend($element), function(){
            setTimeout(function() {
              $element.parent('ul').parent('li').focus();
            }, 1);
          });
        },
        up: function() {
          $prevElement.focus();
        },
        down: function() {
          $nextElement.focus();
        },
        close: function() {
          _this._back();
          //_this.$menuItems.first().focus(); // focus to first element
        },
        open: function() {
          if (!$element.is(_this.$menuItems)) { // not menu item means back button
            _this._hide($element.parent('ul'));
            setTimeout(function(){$element.parent('ul').parent('li').focus();}, 1);
          } else if ($element.is(_this.$submenuAnchors)) {
            _this._show($element);
            setTimeout(function(){$element.find('ul li').filter(_this.$menuItems).first().focus();}, 1);
          }
        },
        handled: function() {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    }); // end keyboardAccess
  }

  /**
   * Closes all open elements, and returns to root menu.
   * @function
   * @fires Drilldown#closed
   */
  _hideAll() {
    var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
    $elem.one(Foundation.transitionend($elem), function(e){
      $elem.removeClass('is-active is-closing');
    });
        /**
         * Fires when the menu is fully closed.
         * @event Drilldown#closed
         */
    this.$element.trigger('closed.zf.drilldown');
  }

  /**
   * Adds event listener for each `back` button, and closes open menus.
   * @function
   * @fires Drilldown#back
   * @param {jQuery} $elem - the current sub-menu to add `back` event.
   */
  _back($elem) {
    var _this = this;
    $elem.off('click.zf.drilldown');
    $elem.children('.js-drilldown-back')
      .on('click.zf.drilldown', function(e){
        e.stopImmediatePropagation();
        // console.log('mouseup on back');
        _this._hide($elem);
      });
  }

  /**
   * Adds event listener to menu items w/o submenus to close open menus on click.
   * @function
   * @private
   */
  _menuLinkEvents() {
    var _this = this;
    this.$menuItems.not('.is-drilldown-submenu-parent')
        .off('click.zf.drilldown')
        .on('click.zf.drilldown', function(e){
          // e.stopImmediatePropagation();
          setTimeout(function(){
            _this._hideAll();
          }, 0);
      });
  }

  /**
   * Opens a submenu.
   * @function
   * @fires Drilldown#open
   * @param {jQuery} $elem - the current element with a submenu to open.
   */
  _show($elem) {
    $elem.children('[data-submenu]').addClass('is-active');

    this.$element.trigger('open.zf.drilldown', [$elem]);
  };

  /**
   * Hides a submenu
   * @function
   * @fires Drilldown#hide
   * @param {jQuery} $elem - the current sub-menu to hide.
   */
  _hide($elem) {
    var _this = this;
    $elem.addClass('is-closing')
         .one(Foundation.transitionend($elem), function(){
           $elem.removeClass('is-active is-closing');
           $elem.blur();
         });
    /**
     * Fires when the submenu is has closed.
     * @event Drilldown#hide
     */
    $elem.trigger('hide.zf.drilldown', [$elem]);
  }

  /**
   * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
   * Prevents content jumping.
   * @function
   * @private
   */
  _getMaxDims() {
    var max = 0, result = {};
    this.$submenus.add(this.$element).each(function(){
      var numOfElems = $(this).children('li').length;
      max = numOfElems > max ? numOfElems : max;
    });

    result['min-height'] = `${max * this.$menuItems[0].getBoundingClientRect().height}px`;
    result['max-width'] = `${this.$element[0].getBoundingClientRect().width}px`;

    return result;
  }

  /**
   * Destroys the Drilldown Menu
   * @function
   */
  destroy() {
    this._hideAll();
    Foundation.Nest.Burn(this.$element, 'drilldown');
    this.$element.unwrap()
                 .find('.js-drilldown-back, .is-submenu-parent-item').remove()
                 .end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu')
                 .end().find('[data-submenu]').removeAttr('aria-hidden tabindex role')
                 .off('.zf.drilldown').end().off('zf.drilldown');
    this.$element.find('a').each(function(){
      var $link = $(this);
      if($link.data('savedHref')){
        $link.attr('href', $link.data('savedHref')).removeData('savedHref');
      }else{ return; }
    });
    Foundation.unregisterPlugin(this);
  };
}

Drilldown.defaults = {
  /**
   * Markup used for JS generated back button. Prepended to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @example '<\li><\a>Back<\/a><\/li>'
   */
  backButton: '<li class="js-drilldown-back"><a>Back</a></li>',
  /**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @example '<\div class="is-drilldown"><\/div>'
   */
  wrapper: '<div></div>',
  /**
   * Adds the parent link to the submenu.
   * @option
   * @example false
   */
  parentLink: false,
  /**
   * Allow the menu to return to root list on body click.
   * @option
   * @example false
   */
  closeOnClick: false
  // holdOpen: false
};

// Window exports
Foundation.plugin(Drilldown, 'Drilldown');

}(jQuery);

'use strict';

!function($) {

/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */

class Dropdown {
  /**
   * Creates a new instance of a dropdown.
   * @class
   * @param {jQuery} element - jQuery object to make into a dropdown.
   *        Object should be of the dropdown panel, rather than its anchor.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options);
    this._init();

    Foundation.registerPlugin(this, 'Dropdown');
    Foundation.Keyboard.register('Dropdown', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ESCAPE': 'close',
      'TAB': 'tab_forward',
      'SHIFT_TAB': 'tab_backward'
    });
  }

  /**
   * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
   * @function
   * @private
   */
  _init() {
    var $id = this.$element.attr('id');

    this.$anchor = $(`[data-toggle="${$id}"]`) || $(`[data-open="${$id}"]`);
    this.$anchor.attr({
      'aria-controls': $id,
      'data-is-focus': false,
      'data-yeti-box': $id,
      'aria-haspopup': true,
      'aria-expanded': false

    });

    this.options.positionClass = this.getPositionClass();
    this.counter = 4;
    this.usedPositions = [];
    this.$element.attr({
      'aria-hidden': 'true',
      'data-yeti-box': $id,
      'data-resize': $id,
      'aria-labelledby': this.$anchor[0].id || Foundation.GetYoDigits(6, 'dd-anchor')
    });
    this._events();
  }

  /**
   * Helper function to determine current orientation of dropdown pane.
   * @function
   * @returns {String} position - string value of a position class.
   */
  getPositionClass() {
    var position = this.$element[0].className.match(/\b(top|left|right)\b/g);
        position = position ? position[0] : '';
    return position;
  }

  /**
   * Adjusts the dropdown panes orientation by adding/removing positioning classes.
   * @function
   * @private
   * @param {String} position - position class to remove.
   */
  _reposition(position) {
    this.usedPositions.push(position ? position : 'bottom');
    //default, try switching to opposite side
    if(!position && (this.usedPositions.indexOf('top') < 0)){
      this.$element.addClass('top');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
      this.$element.removeClass(position)
          .addClass('right');
    }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
      this.$element.removeClass(position)
          .addClass('left');
    }

    //if default change didn't work, try bottom or left first
    else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.$element.addClass('left');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.$element.removeClass(position)
          .addClass('left');
    }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }
    //if nothing cleared, set to bottom
    else{
      this.$element.removeClass(position);
    }
    this.classChanged = true;
    this.counter--;
  }

  /**
   * Sets the position and orientation of the dropdown pane, checks for collisions.
   * Recursively calls itself if a collision is detected, with a new position class.
   * @function
   * @private
   */
  _setPosition() {
    if(this.$anchor.attr('aria-expanded') === 'false'){ return false; }
    var position = this.getPositionClass(),
        $eleDims = Foundation.Box.GetDimensions(this.$element),
        $anchorDims = Foundation.Box.GetDimensions(this.$anchor),
        _this = this,
        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
        param = (direction === 'top') ? 'height' : 'width',
        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset;

    if(($eleDims.width >= $eleDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.$element))){
      this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
        'width': $eleDims.windowDims.width - (this.options.hOffset * 2),
        'height': 'auto'
      });
      this.classChanged = true;
      return false;
    }

    this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset));

    while(!Foundation.Box.ImNotTouchingYou(this.$element) && this.counter){
      this._reposition(position);
      this._setPosition();
    }
  }

  /**
   * Adds event listeners to the element utilizing the triggers utility library.
   * @function
   * @private
   */
  _events() {
    var _this = this;
    this.$element.on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'resizeme.zf.trigger': this._setPosition.bind(this)
    });

    if(this.options.hover){
      this.$anchor.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
          .on('mouseenter.zf.dropdown', function(){
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function(){
              _this.open();
              _this.$anchor.data('hover', true);
            }, _this.options.hoverDelay);
          }).on('mouseleave.zf.dropdown', function(){
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function(){
              _this.close();
              _this.$anchor.data('hover', false);
            }, _this.options.hoverDelay);
          });
      if(this.options.hoverPane){
        this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
            .on('mouseenter.zf.dropdown', function(){
              clearTimeout(_this.timeout);
            }).on('mouseleave.zf.dropdown', function(){
              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function(){
                _this.close();
                _this.$anchor.data('hover', false);
              }, _this.options.hoverDelay);
            });
      }
    }
    this.$anchor.add(this.$element).on('keydown.zf.dropdown', function(e) {

      var $target = $(this),
        visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);

      Foundation.Keyboard.handleKey(e, 'Dropdown', {
        tab_forward: function() {
          if (_this.$element.find(':focus').is(visibleFocusableElements.eq(-1))) { // left modal downwards, setting focus to first element
            if (_this.options.trapFocus) { // if focus shall be trapped
              visibleFocusableElements.eq(0).focus();
              e.preventDefault();
            } else { // if focus is not trapped, close dropdown on focus out
              _this.close();
            }
          }
        },
        tab_backward: function() {
          if (_this.$element.find(':focus').is(visibleFocusableElements.eq(0)) || _this.$element.is(':focus')) { // left modal upwards, setting focus to last element
            if (_this.options.trapFocus) { // if focus shall be trapped
              visibleFocusableElements.eq(-1).focus();
              e.preventDefault();
            } else { // if focus is not trapped, close dropdown on focus out
              _this.close();
            }
          }
        },
        open: function() {
          if ($target.is(_this.$anchor)) {
            _this.open();
            _this.$element.attr('tabindex', -1).focus();
            e.preventDefault();
          }
        },
        close: function() {
          _this.close();
          _this.$anchor.focus();
        }
      });
    });
  }

  /**
   * Adds an event handler to the body to close any dropdowns on a click.
   * @function
   * @private
   */
  _addBodyHandler() {
     var $body = $(document.body).not(this.$element),
         _this = this;
     $body.off('click.zf.dropdown')
          .on('click.zf.dropdown', function(e){
            if(_this.$anchor.is(e.target) || _this.$anchor.find(e.target).length) {
              return;
            }
            if(_this.$element.find(e.target).length) {
              return;
            }
            _this.close();
            $body.off('click.zf.dropdown');
          });
  }

  /**
   * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
   * @function
   * @fires Dropdown#closeme
   * @fires Dropdown#show
   */
  open() {
    // var _this = this;
    /**
     * Fires to close other open dropdowns
     * @event Dropdown#closeme
     */
    this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
    this.$anchor.addClass('hover')
        .attr({'aria-expanded': true});
    // this.$element/*.show()*/;
    this._setPosition();
    this.$element.addClass('is-open')
        .attr({'aria-hidden': false});

    if(this.options.autoFocus){
      var $focusable = Foundation.Keyboard.findFocusable(this.$element);
      if($focusable.length){
        $focusable.eq(0).focus();
      }
    }

    if(this.options.closeOnClick){ this._addBodyHandler(); }

    /**
     * Fires once the dropdown is visible.
     * @event Dropdown#show
     */
    this.$element.trigger('show.zf.dropdown', [this.$element]);
  }

  /**
   * Closes the open dropdown pane.
   * @function
   * @fires Dropdown#hide
   */
  close() {
    if(!this.$element.hasClass('is-open')){
      return false;
    }
    this.$element.removeClass('is-open')
        .attr({'aria-hidden': true});

    this.$anchor.removeClass('hover')
        .attr('aria-expanded', false);

    if(this.classChanged){
      var curPositionClass = this.getPositionClass();
      if(curPositionClass){
        this.$element.removeClass(curPositionClass);
      }
      this.$element.addClass(this.options.positionClass)
          /*.hide()*/.css({height: '', width: ''});
      this.classChanged = false;
      this.counter = 4;
      this.usedPositions.length = 0;
    }
    this.$element.trigger('hide.zf.dropdown', [this.$element]);
  }

  /**
   * Toggles the dropdown pane's visibility.
   * @function
   */
  toggle() {
    if(this.$element.hasClass('is-open')){
      if(this.$anchor.data('hover')) return;
      this.close();
    }else{
      this.open();
    }
  }

  /**
   * Destroys the dropdown.
   * @function
   */
  destroy() {
    this.$element.off('.zf.trigger').hide();
    this.$anchor.off('.zf.dropdown');

    Foundation.unregisterPlugin(this);
  }
}

Dropdown.defaults = {
  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @example 250
   */
  hoverDelay: 250,
  /**
   * Allow submenus to open on hover events
   * @option
   * @example false
   */
  hover: false,
  /**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @example true
   */
  hoverPane: false,
  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @example 1
   */
  vOffset: 1,
  /**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @example 1
   */
  hOffset: 1,
  /**
   * Class applied to adjust open position. JS will test and fill this in.
   * @option
   * @example 'top'
   */
  positionClass: '',
  /**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @example false
   */
  trapFocus: false,
  /**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @example true
   */
  autoFocus: false,
  /**
   * Allows a click on the body to close the dropdown.
   * @option
   * @example false
   */
  closeOnClick: false
}

// Window exports
Foundation.plugin(Dropdown, 'Dropdown');

}(jQuery);

'use strict';

!function($) {

/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */

class DropdownMenu {
  /**
   * Creates a new instance of DropdownMenu.
   * @class
   * @fires DropdownMenu#init
   * @param {jQuery} element - jQuery object to make into a dropdown menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'dropdown');
    this._init();

    Foundation.registerPlugin(this, 'DropdownMenu');
    Foundation.Keyboard.register('DropdownMenu', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'previous',
      'ESCAPE': 'close'
    });
  }

  /**
   * Initializes the plugin, and calls _prepareMenu
   * @private
   * @function
   */
  _init() {
    var subs = this.$element.find('li.is-dropdown-submenu-parent');
    this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');

    this.$menuItems = this.$element.find('[role="menuitem"]');
    this.$tabs = this.$element.children('[role="menuitem"]');
    this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

    if (this.$element.hasClass(this.options.rightClass) || this.options.alignment === 'right' || Foundation.rtl()) {
      this.options.alignment = 'right';
      subs.addClass('opens-left');
    } else {
      subs.addClass('opens-right');
    }
    this.changed = false;
    this._events();
  };
  /**
   * Adds event listeners to elements within the menu
   * @private
   * @function
   */
  _events() {
    var _this = this,
        hasTouch = 'ontouchstart' in window || (typeof window.ontouchstart !== 'undefined'),
        parClass = 'is-dropdown-submenu-parent';

    if (this.options.clickOpen || hasTouch) {
      this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', function(e) {
        var $elem = $(e.target).parentsUntil('ul', `.${parClass}`),
            hasSub = $elem.hasClass(parClass),
            hasClicked = $elem.attr('data-is-click') === 'true',
            $sub = $elem.children('.is-dropdown-submenu');

        if (hasSub) {
          if (hasClicked) {
            if (!_this.options.closeOnClick || (!_this.options.clickOpen && !hasTouch) || (_this.options.forceFollow && hasTouch)) { return; }
            else {
              e.stopImmediatePropagation();
              e.preventDefault();
              _this._hide($elem);
            }
          } else {
            e.preventDefault();
            e.stopImmediatePropagation();
            _this._show($elem.children('.is-dropdown-submenu'));
            $elem.add($elem.parentsUntil(_this.$element, `.${parClass}`)).attr('data-is-click', true);
          }
        } else { return; }
      });
    }

    if (!this.options.disableHover) {
      this.$menuItems.on('mouseenter.zf.dropdownmenu', function(e) {
        e.stopImmediatePropagation();
        var $elem = $(this),
            hasSub = $elem.hasClass(parClass);

        if (hasSub) {
          clearTimeout(_this.delay);
          _this.delay = setTimeout(function() {
            _this._show($elem.children('.is-dropdown-submenu'));
          }, _this.options.hoverDelay);
        }
      }).on('mouseleave.zf.dropdownmenu', function(e) {
        var $elem = $(this),
            hasSub = $elem.hasClass(parClass);
        if (hasSub && _this.options.autoclose) {
          if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) { return false; }

          clearTimeout(_this.delay);
          _this.delay = setTimeout(function() {
            _this._hide($elem);
          }, _this.options.closingTime);
        }
      });
    }
    this.$menuItems.on('keydown.zf.dropdownmenu', function(e) {
      var $element = $(e.target).parentsUntil('ul', '[role="menuitem"]'),
          isTab = _this.$tabs.index($element) > -1,
          $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
          $prevElement,
          $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(i-1);
          $nextElement = $elements.eq(i+1);
          return;
        }
      });

      var nextSibling = function() {
        if (!$element.is(':last-child')) $nextElement.children('a:first').focus();
      }, prevSibling = function() {
        $prevElement.children('a:first').focus();
      }, openSub = function() {
        var $sub = $element.children('ul.is-dropdown-submenu');
        if ($sub.length) {
          _this._show($sub);
          $element.find('li > a:first').focus();
        } else { return; }
      }, closeSub = function() {
        //if ($element.is(':first-child')) {
        var close = $element.parent('ul').parent('li');
          close.children('a:first').focus();
          _this._hide(close);
        //}
      };
      var functions = {
        open: openSub,
        close: function() {
          _this._hide(_this.$element);
          _this.$menuItems.find('a:first').focus(); // focus to first element
        },
        handled: function() {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      };

      if (isTab) {
        if (_this.vertical) { // vertical menu
          if (_this.options.alignment === 'left') { // left aligned
            $.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: openSub,
              previous: closeSub
            });
          } else { // right aligned
            $.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: closeSub,
              previous: openSub
            });
          }
        } else { // horizontal menu
          $.extend(functions, {
            next: nextSibling,
            previous: prevSibling,
            down: openSub,
            up: closeSub
          });
        }
      } else { // not tabs -> one sub
        if (_this.options.alignment === 'left') { // left aligned
          $.extend(functions, {
            next: openSub,
            previous: closeSub,
            down: nextSibling,
            up: prevSibling
          });
        } else { // right aligned
          $.extend(functions, {
            next: closeSub,
            previous: openSub,
            down: nextSibling,
            up: prevSibling
          });
        }
      }
      Foundation.Keyboard.handleKey(e, 'DropdownMenu', functions);

    });
  }

  /**
   * Adds an event handler to the body to close any dropdowns on a click.
   * @function
   * @private
   */
  _addBodyHandler() {
    var $body = $(document.body),
        _this = this;
    $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu')
         .on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function(e) {
           var $link = _this.$element.find(e.target);
           if ($link.length) { return; }

           _this._hide();
           $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
         });
  }

  /**
   * Opens a dropdown pane, and checks for collisions first.
   * @param {jQuery} $sub - ul element that is a submenu to show
   * @function
   * @private
   * @fires DropdownMenu#show
   */
  _show($sub) {
    var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
      return $(el).find($sub).length > 0;
    }));
    var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
    this._hide($sibs, idx);
    $sub.css('visibility', 'hidden').addClass('js-dropdown-active').attr({'aria-hidden': false})
        .parent('li.is-dropdown-submenu-parent').addClass('is-active')
        .attr({'aria-expanded': true});
    var clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
    if (!clear) {
      var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
          $parentLi = $sub.parent('.is-dropdown-submenu-parent');
      $parentLi.removeClass(`opens${oldClass}`).addClass(`opens-${this.options.alignment}`);
      clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
      if (!clear) {
        $parentLi.removeClass(`opens-${this.options.alignment}`).addClass('opens-inner');
      }
      this.changed = true;
    }
    $sub.css('visibility', '');
    if (this.options.closeOnClick) { this._addBodyHandler(); }
    /**
     * Fires when the new dropdown pane is visible.
     * @event DropdownMenu#show
     */
    this.$element.trigger('show.zf.dropdownmenu', [$sub]);
  }

  /**
   * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
   * @function
   * @param {jQuery} $elem - element with a submenu to hide
   * @param {Number} idx - index of the $tabs collection to hide
   * @private
   */
  _hide($elem, idx) {
    var $toClose;
    if ($elem && $elem.length) {
      $toClose = $elem;
    } else if (idx !== undefined) {
      $toClose = this.$tabs.not(function(i, el) {
        return i === idx;
      });
    }
    else {
      $toClose = this.$element;
    }
    var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

    if (somethingToClose) {
      $toClose.find('li.is-active').add($toClose).attr({
        'aria-expanded': false,
        'data-is-click': false
      }).removeClass('is-active');

      $toClose.find('ul.js-dropdown-active').attr({
        'aria-hidden': true
      }).removeClass('js-dropdown-active');

      if (this.changed || $toClose.find('opens-inner').length) {
        var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
        $toClose.find('li.is-dropdown-submenu-parent').add($toClose)
                .removeClass(`opens-inner opens-${this.options.alignment}`)
                .addClass(`opens-${oldClass}`);
        this.changed = false;
      }
      /**
       * Fires when the open menus are closed.
       * @event DropdownMenu#hide
       */
      this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
    }
  }

  /**
   * Destroys the plugin.
   * @function
   */
  destroy() {
    this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click')
        .removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
    $(document.body).off('.zf.dropdownmenu');
    Foundation.Nest.Burn(this.$element, 'dropdown');
    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @example false
   */
  disableHover: false,
  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @example true
   */
  autoclose: true,
  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @example 50
   */
  hoverDelay: 50,
  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @example true
   */
  clickOpen: false,
  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @example 500
   */

  closingTime: 500,
  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS.
   * @option
   * @example 'left'
   */
  alignment: 'left',
  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @example true
   */
  closeOnClick: true,
  /**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @example 'vertical'
   */
  verticalClass: 'vertical',
  /**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @example 'align-right'
   */
  rightClass: 'align-right',
  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @example false
   */
  forceFollow: true
};

// Window exports
Foundation.plugin(DropdownMenu, 'DropdownMenu');

}(jQuery);

'use strict';

!function($) {

/**
 * Equalizer module.
 * @module foundation.equalizer
 */

class Equalizer {
  /**
   * Creates a new instance of Equalizer.
   * @class
   * @fires Equalizer#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options){
    this.$element = element;
    this.options  = $.extend({}, Equalizer.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Equalizer');
  }

  /**
   * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
   * @private
   */
  _init() {
    var eqId = this.$element.attr('data-equalizer') || '';
    var $watched = this.$element.find(`[data-equalizer-watch="${eqId}"]`);

    this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
    this.$element.attr('data-resize', (eqId || Foundation.GetYoDigits(6, 'eq')));

    this.hasNested = this.$element.find('[data-equalizer]').length > 0;
    this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
    this.isOn = false;

    var imgs = this.$element.find('img');
    var tooSmall;
    if(this.options.equalizeOn){
      tooSmall = this._checkMQ();
      $(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
    }else{
      this._events();
    }
    if((tooSmall !== undefined && tooSmall === false) || tooSmall === undefined){
      if(imgs.length){
        Foundation.onImagesLoaded(imgs, this._reflow.bind(this));
      }else{
        this._reflow();
      }
    }
  }

  /**
   * Removes event listeners if the breakpoint is too small.
   * @private
   */
  _pauseEvents() {
    this.isOn = false;
    this.$element.off('.zf.equalizer resizeme.zf.trigger');
  }

  /**
   * Initializes events for Equalizer.
   * @private
   */
  _events() {
    var _this = this;
    this._pauseEvents();
    if(this.hasNested){
      this.$element.on('postequalized.zf.equalizer', function(e){
        if(e.target !== _this.$element[0]){ _this._reflow(); }
      });
    }else{
      this.$element.on('resizeme.zf.trigger', this._reflow.bind(this));
    }
    this.isOn = true;
  }

  /**
   * Checks the current breakpoint to the minimum required size.
   * @private
   */
  _checkMQ() {
    var tooSmall = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
    if(tooSmall){
      if(this.isOn){
        this._pauseEvents();
        this.$watched.css('height', 'auto');
      }
    }else{
      if(!this.isOn){
        this._events();
      }
    }
    return tooSmall;
  }

  /**
   * A noop version for the plugin
   * @private
   */
  _killswitch() {
    return;
  }

  /**
   * Calls necessary functions to update Equalizer upon DOM change
   * @private
   */
  _reflow() {
    if(!this.options.equalizeOnStack){
      if(this._isStacked()){
        this.$watched.css('height', 'auto');
        return false;
      }
    }
    if (this.options.equalizeByRow) {
      this.getHeightsByRow(this.applyHeightByRow.bind(this));
    }else{
      this.getHeights(this.applyHeight.bind(this));
    }
  }

  /**
   * Manually determines if the first 2 elements are *NOT* stacked.
   * @private
   */
  _isStacked() {
    return this.$watched[0].offsetTop !== this.$watched[1].offsetTop;
  }

  /**
   * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
   * @param {Function} cb - A non-optional callback to return the heights array to.
   * @returns {Array} heights - An array of heights of children within Equalizer container
   */
  getHeights(cb) {
    var heights = [];
    for(var i = 0, len = this.$watched.length; i < len; i++){
      this.$watched[i].style.height = 'auto';
      heights.push(this.$watched[i].offsetHeight);
    }
    cb(heights);
  }

  /**
   * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
   * @param {Function} cb - A non-optional callback to return the heights array to.
   * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
   */
  getHeightsByRow(cb) {
    var lastElTopOffset = this.$watched.first().offset().top,
        groups = [],
        group = 0;
    //group by Row
    groups[group] = [];
    for(var i = 0, len = this.$watched.length; i < len; i++){
      this.$watched[i].style.height = 'auto';
      //maybe could use this.$watched[i].offsetTop
      var elOffsetTop = $(this.$watched[i]).offset().top;
      if (elOffsetTop!=lastElTopOffset) {
        group++;
        groups[group] = [];
        lastElTopOffset=elOffsetTop;
      }
      groups[group].push([this.$watched[i],this.$watched[i].offsetHeight]);
    }

    for (var j = 0, ln = groups.length; j < ln; j++) {
      var heights = $(groups[j]).map(function(){ return this[1]; }).get();
      var max         = Math.max.apply(null, heights);
      groups[j].push(max);
    }
    cb(groups);
  }

  /**
   * Changes the CSS height property of each child in an Equalizer parent to match the tallest
   * @param {array} heights - An array of heights of children within Equalizer container
   * @fires Equalizer#preequalized
   * @fires Equalizer#postequalized
   */
  applyHeight(heights) {
    var max = Math.max.apply(null, heights);
    /**
     * Fires before the heights are applied
     * @event Equalizer#preequalized
     */
    this.$element.trigger('preequalized.zf.equalizer');

    this.$watched.css('height', max);

    /**
     * Fires when the heights have been applied
     * @event Equalizer#postequalized
     */
     this.$element.trigger('postequalized.zf.equalizer');
  }

  /**
   * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
   * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
   * @fires Equalizer#preequalized
   * @fires Equalizer#preequalizedRow
   * @fires Equalizer#postequalizedRow
   * @fires Equalizer#postequalized
   */
  applyHeightByRow(groups) {
    /**
     * Fires before the heights are applied
     */
    this.$element.trigger('preequalized.zf.equalizer');
    for (var i = 0, len = groups.length; i < len ; i++) {
      var groupsILength = groups[i].length,
          max = groups[i][groupsILength - 1];
      if (groupsILength<=2) {
        $(groups[i][0][0]).css({'height':'auto'});
        continue;
      }
      /**
        * Fires before the heights per row are applied
        * @event Equalizer#preequalizedRow
        */
      this.$element.trigger('preequalizedrow.zf.equalizer');
      for (var j = 0, lenJ = (groupsILength-1); j < lenJ ; j++) {
        $(groups[i][j][0]).css({'height':max});
      }
      /**
        * Fires when the heights per row have been applied
        * @event Equalizer#postequalizedRow
        */
      this.$element.trigger('postequalizedrow.zf.equalizer');
    }
    /**
     * Fires when the heights have been applied
     */
     this.$element.trigger('postequalized.zf.equalizer');
  }

  /**
   * Destroys an instance of Equalizer.
   * @function
   */
  destroy() {
    this._pauseEvents();
    this.$watched.css('height', 'auto');

    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
Equalizer.defaults = {
  /**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @example true
   */
  equalizeOnStack: true,
  /**
   * Enable height equalization row by row.
   * @option
   * @example false
   */
  equalizeByRow: false,
  /**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @example 'medium'
   */
  equalizeOn: ''
};

// Window exports
Foundation.plugin(Equalizer, 'Equalizer');

}(jQuery);

'use strict';

!function($) {

/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.timerAndImageLoader
 */

class Interchange {
  /**
   * Creates a new instance of Interchange.
   * @class
   * @fires Interchange#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Interchange.defaults, options);
    this.rules = [];
    this.currentPath = '';

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'Interchange');
  }

  /**
   * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
   * @function
   * @private
   */
  _init() {
    this._addBreakpoints();
    this._generateRules();
    this._reflow();
  }

  /**
   * Initializes events for Interchange.
   * @function
   * @private
   */
  _events() {
    $(window).on('resize.zf.interchange', Foundation.util.throttle(this._reflow.bind(this), 50));
  }

  /**
   * Calls necessary functions to update Interchange upon DOM change
   * @function
   * @private
   */
  _reflow() {
    var match;

    // Iterate through each rule, but only save the last match
    for (var i in this.rules) {
      var rule = this.rules[i];

      if (window.matchMedia(rule.query).matches) {
        match = rule;
      }
    }

    if (match) {
      this.replace(match.path);
    }
  }

  /**
   * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
   * @function
   * @private
   */
  _addBreakpoints() {
    for (var i in Foundation.MediaQuery.queries) {
      var query = Foundation.MediaQuery.queries[i];
      Interchange.SPECIAL_QUERIES[query.name] = query.value;
    }
  }

  /**
   * Checks the Interchange element for the provided media query + content pairings
   * @function
   * @private
   * @param {Object} element - jQuery object that is an Interchange instance
   * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
   */
  _generateRules(element) {
    var rulesList = [];
    var rules;

    if (this.options.rules) {
      rules = this.options.rules;
    }
    else {
      rules = this.$element.data('interchange').match(/\[.*?\]/g);
    }

    for (var i in rules) {
      var rule = rules[i].slice(1, -1).split(', ');
      var path = rule.slice(0, -1).join('');
      var query = rule[rule.length - 1];

      if (Interchange.SPECIAL_QUERIES[query]) {
        query = Interchange.SPECIAL_QUERIES[query];
      }

      rulesList.push({
        path: path,
        query: query
      });
    }

    this.rules = rulesList;
  }

  /**
   * Update the `src` property of an image, or change the HTML of a container, to the specified path.
   * @function
   * @param {String} path - Path to the image or HTML partial.
   * @fires Interchange#replaced
   */
  replace(path) {
    if (this.currentPath === path) return;

    var _this = this,
        trigger = 'replaced.zf.interchange';

    // Replacing images
    if (this.$element[0].nodeName === 'IMG') {
      this.$element.attr('src', path).load(function() {
        _this.currentPath = path;
      })
      .trigger(trigger);
    }
    // Replacing background images
    else if (path.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i)) {
      this.$element.css({ 'background-image': 'url('+path+')' })
          .trigger(trigger);
    }
    // Replacing HTML
    else {
      $.get(path, function(response) {
        _this.$element.html(response)
             .trigger(trigger);
        $(response).foundation();
        _this.currentPath = path;
      });
    }

    /**
     * Fires when content in an Interchange element is done being loaded.
     * @event Interchange#replaced
     */
    // this.$element.trigger('replaced.zf.interchange');
  }

  /**
   * Destroys an instance of interchange.
   * @function
   */
  destroy() {
    //TODO this.
  }
}

/**
 * Default settings for plugin
 */
Interchange.defaults = {
  /**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   */
  rules: null
};

Interchange.SPECIAL_QUERIES = {
  'landscape': 'screen and (orientation: landscape)',
  'portrait': 'screen and (orientation: portrait)',
  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
};

// Window exports
Foundation.plugin(Interchange, 'Interchange');

}(jQuery);

'use strict';

!function($) {

/**
 * Magellan module.
 * @module foundation.magellan
 */

class Magellan {
  /**
   * Creates a new instance of Magellan.
   * @class
   * @fires Magellan#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options  = $.extend({}, Magellan.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Magellan');
  }

  /**
   * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
   * @private
   */
  _init() {
    var id = this.$element[0].id || Foundation.GetYoDigits(6, 'magellan');
    var _this = this;
    this.$targets = $('[data-magellan-target]');
    this.$links = this.$element.find('a');
    this.$element.attr({
      'data-resize': id,
      'data-scroll': id,
      'id': id
    });
    this.$active = $();
    this.scrollPos = parseInt(window.pageYOffset, 10);

    this._events();
  }

  /**
   * Calculates an array of pixel values that are the demarcation lines between locations on the page.
   * Can be invoked if new elements are added or the size of a location changes.
   * @function
   */
  calcPoints() {
    var _this = this,
        body = document.body,
        html = document.documentElement;

    this.points = [];
    this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
    this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));

    this.$targets.each(function(){
      var $tar = $(this),
          pt = Math.round($tar.offset().top - _this.options.threshold);
      $tar.targetPoint = pt;
      _this.points.push(pt);
    });
  }

  /**
   * Initializes events for Magellan.
   * @private
   */
  _events() {
    var _this = this,
        $body = $('html, body'),
        opts = {
          duration: _this.options.animationDuration,
          easing:   _this.options.animationEasing
        };
    $(window).one('load', function(){
      if(_this.options.deepLinking){
        if(location.hash){
          _this.scrollToLoc(location.hash);
        }
      }
      _this.calcPoints();
      _this._updateActive();
    });

    this.$element.on({
      'resizeme.zf.trigger': this.reflow.bind(this),
      'scrollme.zf.trigger': this._updateActive.bind(this)
    }).on('click.zf.magellan', 'a[href^="#"]', function(e) {
        e.preventDefault();
        var arrival   = this.getAttribute('href');
        _this.scrollToLoc(arrival);
    });
  }

  /**
   * Function to scroll to a given location on the page.
   * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
   * @function
   */
  scrollToLoc(loc) {
    var scrollPos = Math.round($(loc).offset().top - this.options.threshold / 2 - this.options.barOffset);

    $('html, body').stop(true).animate({ scrollTop: scrollPos }, this.options.animationDuration, this.options.animationEasing);
  }

  /**
   * Calls necessary functions to update Magellan upon DOM change
   * @function
   */
  reflow() {
    this.calcPoints();
    this._updateActive();
  }

  /**
   * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
   * @private
   * @function
   * @fires Magellan#update
   */
  _updateActive(/*evt, elem, scrollPos*/) {
    var winPos = /*scrollPos ||*/ parseInt(window.pageYOffset, 10),
        curIdx;

    if(winPos + this.winHeight === this.docHeight){ curIdx = this.points.length - 1; }
    else if(winPos < this.points[0]){ curIdx = 0; }
    else{
      var isDown = this.scrollPos < winPos,
          _this = this,
          curVisible = this.points.filter(function(p, i){
            return isDown ? p <= winPos : p - _this.options.threshold <= winPos;//&& winPos >= _this.points[i -1] - _this.options.threshold;
          });
      curIdx = curVisible.length ? curVisible.length - 1 : 0;
    }

    this.$active.removeClass(this.options.activeClass);
    this.$active = this.$links.eq(curIdx).addClass(this.options.activeClass);

    if(this.options.deepLinking){
      var hash = this.$active[0].getAttribute('href');
      if(window.history.pushState){
        window.history.pushState(null, null, hash);
      }else{
        window.location.hash = hash;
      }
    }

    this.scrollPos = winPos;
    /**
     * Fires when magellan is finished updating to the new active element.
     * @event Magellan#update
     */
    this.$element.trigger('update.zf.magellan', [this.$active]);
  }

  /**
   * Destroys an instance of Magellan and resets the url of the window.
   * @function
   */
  destroy() {
    this.$element.off('.zf.trigger .zf.magellan')
        .find(`.${this.options.activeClass}`).removeClass(this.options.activeClass);

    if(this.options.deepLinking){
      var hash = this.$active[0].getAttribute('href');
      window.location.hash.replace(hash, '');
    }

    Foundation.unregisterPlugin(this);
  }
}

/**
 * Default settings for plugin
 */
Magellan.defaults = {
  /**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @example 500
   */
  animationDuration: 500,
  /**
   * Animation style to use when scrolling between locations.
   * @option
   * @example 'ease-in-out'
   */
  animationEasing: 'linear',
  /**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @example 50
   */
  threshold: 50,
  /**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @example 'active'
   */
  activeClass: 'active',
  /**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @example true
   */
  deepLinking: false,
  /**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @example 25
   */
  barOffset: 0
}

// Window exports
Foundation.plugin(Magellan, 'Magellan');

}(jQuery);

'use strict';

!function($) {

/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 * @requires foundation.util.motion
 */

class OffCanvas {
  /**
   * Creates a new instance of an off-canvas wrapper.
   * @class
   * @fires OffCanvas#init
   * @param {Object} element - jQuery object to initialize.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
    this.$lastTrigger = $();

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'OffCanvas');
  }

  /**
   * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
   * @function
   * @private
   */
  _init() {
    var id = this.$element.attr('id');

    this.$element.attr('aria-hidden', 'true');

    // Find triggers that affect this element and add aria-expanded to them
    $(document)
      .find('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
      .attr('aria-expanded', 'false')
      .attr('aria-controls', id);

    // Add a close trigger over the body if necessary
    if (this.options.closeOnClick) {
      if ($('.js-off-canvas-exit').length) {
        this.$exiter = $('.js-off-canvas-exit');
      } else {
        var exiter = document.createElement('div');
        exiter.setAttribute('class', 'js-off-canvas-exit');
        $('[data-off-canvas-content]').append(exiter);

        this.$exiter = $(exiter);
      }
    }

    this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);

    if (this.options.isRevealed) {
      this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
      this._setMQChecker();
    }
    if (!this.options.transitionTime) {
      this.options.transitionTime = parseFloat(window.getComputedStyle($('[data-off-canvas-wrapper]')[0]).transitionDuration) * 1000;
    }
  }

  /**
   * Adds event handlers to the off-canvas wrapper and the exit overlay.
   * @function
   * @private
   */
  _events() {
    this.$element.off('.zf.trigger .zf.offcanvas').on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
    });

    if (this.options.closeOnClick && this.$exiter.length) {
      this.$exiter.on({'click.zf.offcanvas': this.close.bind(this)});
    }
  }

  /**
   * Applies event listener for elements that will reveal at certain breakpoints.
   * @private
   */
  _setMQChecker() {
    var _this = this;

    $(window).on('changed.zf.mediaquery', function() {
      if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
        _this.reveal(true);
      } else {
        _this.reveal(false);
      }
    }).one('load.zf.offcanvas', function() {
      if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
        _this.reveal(true);
      }
    });
  }

  /**
   * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
   * @param {Boolean} isRevealed - true if element should be revealed.
   * @function
   */
  reveal(isRevealed) {
    var $closer = this.$element.find('[data-close]');
    if (isRevealed) {
      this.close();
      this.isRevealed = true;
      // if (!this.options.forceTop) {
      //   var scrollPos = parseInt(window.pageYOffset);
      //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
      // }
      // if (this.options.isSticky) { this._stick(); }
      this.$element.off('open.zf.trigger toggle.zf.trigger');
      if ($closer.length) { $closer.hide(); }
    } else {
      this.isRevealed = false;
      // if (this.options.isSticky || !this.options.forceTop) {
      //   this.$element[0].style.transform = '';
      //   $(window).off('scroll.zf.offcanvas');
      // }
      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this)
      });
      if ($closer.length) {
        $closer.show();
      }
    }
  }

  /**
   * Opens the off-canvas menu.
   * @function
   * @param {Object} event - Event object passed from listener.
   * @param {jQuery} trigger - element that triggered the off-canvas to open.
   * @fires OffCanvas#opened
   */
  open(event, trigger) {
    if (this.$element.hasClass('is-open') || this.isRevealed) { return; }
    var _this = this,
        $body = $(document.body);

    if (this.options.forceTop) {
      $('body').scrollTop(0);
    }
    // window.pageYOffset = 0;

    // if (!this.options.forceTop) {
    //   var scrollPos = parseInt(window.pageYOffset);
    //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
    //   if (this.$exiter.length) {
    //     this.$exiter[0].style.transform = 'translate(0,' + scrollPos + 'px)';
    //   }
    // }
    /**
     * Fires when the off-canvas menu opens.
     * @event OffCanvas#opened
     */
    Foundation.Move(this.options.transitionTime, this.$element, function() {
      $('[data-off-canvas-wrapper]').addClass('is-off-canvas-open is-open-'+ _this.options.position);

      _this.$element
        .addClass('is-open')

      // if (_this.options.isSticky) {
      //   _this._stick();
      // }
    });
    this.$element.attr('aria-hidden', 'false')
        .trigger('opened.zf.offcanvas');

    if (this.options.closeOnClick) {
      this.$exiter.addClass('is-visible');
    }

    if (trigger) {
      this.$lastTrigger = trigger.attr('aria-expanded', 'true');
    }

    if (this.options.autoFocus) {
      this.$element.one(Foundation.transitionend(this.$element), function() {
        _this.$element.find('a, button').eq(0).focus();
      });
    }

    if (this.options.trapFocus) {
      $('[data-off-canvas-content]').attr('tabindex', '-1');
      this._trapFocus();
    }
  }

  /**
   * Traps focus within the offcanvas on open.
   * @private
   */
  _trapFocus() {
    var focusable = Foundation.Keyboard.findFocusable(this.$element),
        first = focusable.eq(0),
        last = focusable.eq(-1);

    focusable.off('.zf.offcanvas').on('keydown.zf.offcanvas', function(e) {
      if (e.which === 9 || e.keycode === 9) {
        if (e.target === last[0] && !e.shiftKey) {
          e.preventDefault();
          first.focus();
        }
        if (e.target === first[0] && e.shiftKey) {
          e.preventDefault();
          last.focus();
        }
      }
    });
  }

  /**
   * Allows the offcanvas to appear sticky utilizing translate properties.
   * @private
   */
  // OffCanvas.prototype._stick = function() {
  //   var elStyle = this.$element[0].style;
  //
  //   if (this.options.closeOnClick) {
  //     var exitStyle = this.$exiter[0].style;
  //   }
  //
  //   $(window).on('scroll.zf.offcanvas', function(e) {
  //     console.log(e);
  //     var pageY = window.pageYOffset;
  //     elStyle.transform = 'translate(0,' + pageY + 'px)';
  //     if (exitStyle !== undefined) { exitStyle.transform = 'translate(0,' + pageY + 'px)'; }
  //   });
  //   // this.$element.trigger('stuck.zf.offcanvas');
  // };
  /**
   * Closes the off-canvas menu.
   * @function
   * @param {Function} cb - optional cb to fire after closure.
   * @fires OffCanvas#closed
   */
  close(cb) {
    if (!this.$element.hasClass('is-open') || this.isRevealed) { return; }

    var _this = this;

    //  Foundation.Move(this.options.transitionTime, this.$element, function() {
    $('[data-off-canvas-wrapper]').removeClass(`is-off-canvas-open is-open-${_this.options.position}`);
    _this.$element.removeClass('is-open');
      // Foundation._reflow();
    // });
    this.$element.attr('aria-hidden', 'true')
      /**
       * Fires when the off-canvas menu opens.
       * @event OffCanvas#closed
       */
        .trigger('closed.zf.offcanvas');
    // if (_this.options.isSticky || !_this.options.forceTop) {
    //   setTimeout(function() {
    //     _this.$element[0].style.transform = '';
    //     $(window).off('scroll.zf.offcanvas');
    //   }, this.options.transitionTime);
    // }
    if (this.options.closeOnClick) {
      this.$exiter.removeClass('is-visible');
    }

    this.$lastTrigger.attr('aria-expanded', 'false');
    if (this.options.trapFocus) {
      $('[data-off-canvas-content]').removeAttr('tabindex');
    }
  }

  /**
   * Toggles the off-canvas menu open or closed.
   * @function
   * @param {Object} event - Event object passed from listener.
   * @param {jQuery} trigger - element that triggered the off-canvas to open.
   */
  toggle(event, trigger) {
    if (this.$element.hasClass('is-open')) {
      this.close(event, trigger);
    }
    else {
      this.open(event, trigger);
    }
  }

  /**
   * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
   * @function
   * @private
   */
  _handleKeyboard(event) {
    if (event.which !== 27) return;

    event.stopPropagation();
    event.preventDefault();
    this.close();
    this.$lastTrigger.focus();
  }

  /**
   * Destroys the offcanvas plugin.
   * @function
   */
  destroy() {
    this.close();
    this.$element.off('.zf.trigger .zf.offcanvas');
    this.$exiter.off('.zf.offcanvas');

    Foundation.unregisterPlugin(this);
  }
}

OffCanvas.defaults = {
  /**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @example true
   */
  closeOnClick: true,

  /**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @example 500
   */
  transitionTime: 0,

  /**
   * Direction the offcanvas opens from. Determines class applied to body.
   * @option
   * @example left
   */
  position: 'left',

  /**
   * Force the page to scroll to top on open.
   * @option
   * @example true
   */
  forceTop: true,

  /**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @example false
   */
  isRevealed: false,

  /**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @example reveal-for-large
   */
  revealOn: null,

  /**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @example true
   */
  autoFocus: true,

  /**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * TODO improve the regex testing for this.
   * @example reveal-for-large
   */
  revealClass: 'reveal-for-',

  /**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @example true
   */
  trapFocus: false
}

// Window exports
Foundation.plugin(OffCanvas, 'OffCanvas');

}(jQuery);

'use strict';

!function($) {

/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timerAndImageLoader
 * @requires foundation.util.touch
 */

class Orbit {
  /**
  * Creates a new instance of an orbit carousel.
  * @class
  * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
  * @param {Object} options - Overrides to the default plugin settings.
  */
  constructor(element, options){
    this.$element = element;
    this.options = $.extend({}, Orbit.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Orbit');
    Foundation.Keyboard.register('Orbit', {
      'ltr': {
        'ARROW_RIGHT': 'next',
        'ARROW_LEFT': 'previous'
      },
      'rtl': {
        'ARROW_LEFT': 'next',
        'ARROW_RIGHT': 'previous'
      }
    });
  }

  /**
  * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
  * @function
  * @private
  */
  _init() {
    this.$wrapper = this.$element.find(`.${this.options.containerClass}`);
    this.$slides = this.$element.find(`.${this.options.slideClass}`);
    var $images = this.$element.find('img'),
    initActive = this.$slides.filter('.is-active');

    if (!initActive.length) {
      this.$slides.eq(0).addClass('is-active');
    }

    if (!this.options.useMUI) {
      this.$slides.addClass('no-motionui');
    }

    if ($images.length) {
      Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this));
    } else {
      this._prepareForOrbit();//hehe
    }

    if (this.options.bullets) {
      this._loadBullets();
    }

    this._events();

    if (this.options.autoPlay && this.$slides.length > 1) {
      this.geoSync();
    }

    if (this.options.accessible) { // allow wrapper to be focusable to enable arrow navigation
      this.$wrapper.attr('tabindex', 0);
    }
  }

  /**
  * Creates a jQuery collection of bullets, if they are being used.
  * @function
  * @private
  */
  _loadBullets() {
    this.$bullets = this.$element.find(`.${this.options.boxOfBullets}`).find('button');
  }

  /**
  * Sets a `timer` object on the orbit, and starts the counter for the next slide.
  * @function
  */
  geoSync() {
    var _this = this;
    this.timer = new Foundation.Timer(
      this.$element,
      {
        duration: this.options.timerDelay,
        infinite: false
      },
      function() {
        _this.changeSlide(true);
      });
    this.timer.start();
  }

  /**
  * Sets wrapper and slide heights for the orbit.
  * @function
  * @private
  */
  _prepareForOrbit() {
    var _this = this;
    this._setWrapperHeight(function(max){
      _this._setSlideHeight(max);
    });
  }

  /**
  * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
  * @function
  * @private
  * @param {Function} cb - a callback function to fire when complete.
  */
  _setWrapperHeight(cb) {//rewrite this to `for` loop
    var max = 0, temp, counter = 0;

    this.$slides.each(function() {
      temp = this.getBoundingClientRect().height;
      $(this).attr('data-slide', counter);

      if (counter) {//if not the first slide, set css position and display property
        $(this).css({'position': 'relative', 'display': 'none'});
      }
      max = temp > max ? temp : max;
      counter++;
    });

    if (counter === this.$slides.length) {
      this.$wrapper.css({'height': max}); //only change the wrapper height property once.
      cb(max); //fire callback with max height dimension.
    }
  }

  /**
  * Sets the max-height of each slide.
  * @function
  * @private
  */
  _setSlideHeight(height) {
    this.$slides.each(function() {
      $(this).css('max-height', height);
    });
  }

  /**
  * Adds event listeners to basically everything within the element.
  * @function
  * @private
  */
  _events() {
    var _this = this;

    //***************************************
    //**Now using custom event - thanks to:**
    //**      Yohai Ararat of Toronto      **
    //***************************************
    if (this.$slides.length > 1) {

      if (this.options.swipe) {
        this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit')
        .on('swipeleft.zf.orbit', function(e){
          e.preventDefault();
          _this.changeSlide(true);
        }).on('swiperight.zf.orbit', function(e){
          e.preventDefault();
          _this.changeSlide(false);
        });
      }
      //***************************************

      if (this.options.autoPlay) {
        this.$slides.on('click.zf.orbit', function() {
          _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
          _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
        });

        if (this.options.pauseOnHover) {
          this.$element.on('mouseenter.zf.orbit', function() {
            _this.timer.pause();
          }).on('mouseleave.zf.orbit', function() {
            if (!_this.$element.data('clickedOn')) {
              _this.timer.start();
            }
          });
        }
      }

      if (this.options.navButtons) {
        var $controls = this.$element.find(`.${this.options.nextClass}, .${this.options.prevClass}`);
        $controls.attr('tabindex', 0)
        //also need to handle enter/return and spacebar key presses
        .on('click.zf.orbit touchend.zf.orbit', function(){
          _this.changeSlide($(this).hasClass(_this.options.nextClass));
        });
      }

      if (this.options.bullets) {
        this.$bullets.on('click.zf.orbit touchend.zf.orbit', function() {
          if (/is-active/g.test(this.className)) { return false; }//if this is active, kick out of function.
          var idx = $(this).data('slide'),
          ltr = idx > _this.$slides.filter('.is-active').data('slide'),
          $slide = _this.$slides.eq(idx);

          _this.changeSlide(ltr, $slide, idx);
        });
      }

      this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function(e) {
        // handle keyboard event with keyboard util
        Foundation.Keyboard.handleKey(e, 'Orbit', {
          next: function() {
            _this.changeSlide(true);
          },
          previous: function() {
            _this.changeSlide(false);
          },
          handled: function() { // if bullet is focused, make sure focus moves
            if ($(e.target).is(_this.$bullets)) {
              _this.$bullets.filter('.is-active').focus();
            }
          }
        });
      });
    }
  }

  /**
  * Changes the current slide to a new one.
  * @function
  * @param {Boolean} isLTR - flag if the slide should move left to right.
  * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
  * @param {Number} idx - the index of the new slide in its collection, if one chosen.
  * @fires Orbit#slidechange
  */
  changeSlide(isLTR, chosenSlide, idx) {
    var $curSlide = this.$slides.filter('.is-active').eq(0);

    if (/mui/g.test($curSlide[0].className)) { return false; } //if the slide is currently animating, kick out of the function

    var $firstSlide = this.$slides.first(),
    $lastSlide = this.$slides.last(),
    dirIn = isLTR ? 'Right' : 'Left',
    dirOut = isLTR ? 'Left' : 'Right',
    _this = this,
    $newSlide;

    if (!chosenSlide) { //most of the time, this will be auto played or clicked from the navButtons.
      $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
      (this.options.infiniteWrap ? $curSlide.next(`.${this.options.slideClass}`).length ? $curSlide.next(`.${this.options.slideClass}`) : $firstSlide : $curSlide.next(`.${this.options.slideClass}`))//pick next slide if moving left to right
      :
      (this.options.infiniteWrap ? $curSlide.prev(`.${this.options.slideClass}`).length ? $curSlide.prev(`.${this.options.slideClass}`) : $lastSlide : $curSlide.prev(`.${this.options.slideClass}`));//pick prev slide if moving right to left
    } else {
      $newSlide = chosenSlide;
    }

    if ($newSlide.length) {
      if (this.options.bullets) {
        idx = idx || this.$slides.index($newSlide); //grab index to update bullets
        this._updateBullets(idx);
      }

      if (this.options.useMUI) {
        Foundation.Motion.animateIn(
          $newSlide.addClass('is-active').css({'position': 'absolute', 'top': 0}),
          this.options[`animInFrom${dirIn}`],
          function(){
            $newSlide.css({'position': 'relative', 'display': 'block'})
            .attr('aria-live', 'polite');
        });

        Foundation.Motion.animateOut(
          $curSlide.removeClass('is-active'),
          this.options[`animOutTo${dirOut}`],
          function(){
            $curSlide.removeAttr('aria-live');
            if(_this.options.autoPlay && !_this.timer.isPaused){
              _this.timer.restart();
            }
            //do stuff?
          });
      } else {
        $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
        $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
        if (this.options.autoPlay && !this.timer.isPaused) {
          this.timer.restart();
        }
      }
    /**
    * Triggers when the slide has finished animating in.
    * @event Orbit#slidechange
    */
      this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
    }
  }

  /**
  * Updates the active state of the bullets, if displayed.
  * @function
  * @private
  * @param {Number} idx - the index of the current slide.
  */
  _updateBullets(idx) {
    var $oldBullet = this.$element.find(`.${this.options.boxOfBullets}`)
    .find('.is-active').removeClass('is-active').blur(),
    span = $oldBullet.find('span:last').detach(),
    $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
  }

  /**
  * Destroys the carousel and hides the element.
  * @function
  */
  destroy() {
    this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
    Foundation.unregisterPlugin(this);
  }
}

Orbit.defaults = {
  /**
  * Tells the JS to look for and loadBullets.
  * @option
  * @example true
  */
  bullets: true,
  /**
  * Tells the JS to apply event listeners to nav buttons
  * @option
  * @example true
  */
  navButtons: true,
  /**
  * motion-ui animation class to apply
  * @option
  * @example 'slide-in-right'
  */
  animInFromRight: 'slide-in-right',
  /**
  * motion-ui animation class to apply
  * @option
  * @example 'slide-out-right'
  */
  animOutToRight: 'slide-out-right',
  /**
  * motion-ui animation class to apply
  * @option
  * @example 'slide-in-left'
  *
  */
  animInFromLeft: 'slide-in-left',
  /**
  * motion-ui animation class to apply
  * @option
  * @example 'slide-out-left'
  */
  animOutToLeft: 'slide-out-left',
  /**
  * Allows Orbit to automatically animate on page load.
  * @option
  * @example true
  */
  autoPlay: true,
  /**
  * Amount of time, in ms, between slide transitions
  * @option
  * @example 5000
  */
  timerDelay: 5000,
  /**
  * Allows Orbit to infinitely loop through the slides
  * @option
  * @example true
  */
  infiniteWrap: true,
  /**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
  * @example true
  */
  swipe: true,
  /**
  * Allows the timing function to pause animation on hover.
  * @option
  * @example true
  */
  pauseOnHover: true,
  /**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
  * @example true
  */
  accessible: true,
  /**
  * Class applied to the container of Orbit
  * @option
  * @example 'orbit-container'
  */
  containerClass: 'orbit-container',
  /**
  * Class applied to individual slides.
  * @option
  * @example 'orbit-slide'
  */
  slideClass: 'orbit-slide',
  /**
  * Class applied to the bullet container. You're welcome.
  * @option
  * @example 'orbit-bullets'
  */
  boxOfBullets: 'orbit-bullets',
  /**
  * Class applied to the `next` navigation button.
  * @option
  * @example 'orbit-next'
  */
  nextClass: 'orbit-next',
  /**
  * Class applied to the `previous` navigation button.
  * @option
  * @example 'orbit-previous'
  */
  prevClass: 'orbit-previous',
  /**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.
  * @option
  * @example true
  */
  useMUI: true
};

// Window exports
Foundation.plugin(Orbit, 'Orbit');

}(jQuery);

'use strict';

!function($) {

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.accordionMenu
 * @requires foundation.util.drilldown
 * @requires foundation.util.dropdown-menu
 */

class ResponsiveMenu {
  /**
   * Creates a new instance of a responsive menu.
   * @class
   * @fires ResponsiveMenu#init
   * @param {jQuery} element - jQuery object to make into a dropdown menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = $(element);
    this.rules = this.$element.data('responsive-menu');
    this.currentMq = null;
    this.currentPlugin = null;

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'ResponsiveMenu');
  }

  /**
   * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
   * @function
   * @private
   */
  _init() {
    var rulesTree = {};

    // Parse rules from "classes" in data attribute
    var rules = this.rules.split(' ');

    // Iterate through every rule found
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i].split('-');
      var ruleSize = rule.length > 1 ? rule[0] : 'small';
      var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

      if (MenuPlugins[rulePlugin] !== null) {
        rulesTree[ruleSize] = MenuPlugins[rulePlugin];
      }
    }

    this.rules = rulesTree;

    if (!$.isEmptyObject(rulesTree)) {
      this._checkMediaQueries();
    }
  }

  /**
   * Initializes events for the Menu.
   * @function
   * @private
   */
  _events() {
    var _this = this;

    $(window).on('changed.zf.mediaquery', function() {
      _this._checkMediaQueries();
    });
    // $(window).on('resize.zf.ResponsiveMenu', function() {
    //   _this._checkMediaQueries();
    // });
  }

  /**
   * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
   * @function
   * @private
   */
  _checkMediaQueries() {
    var matchedMq, _this = this;
    // Iterate through each rule and find the last matching rule
    $.each(this.rules, function(key) {
      if (Foundation.MediaQuery.atLeast(key)) {
        matchedMq = key;
      }
    });

    // No match? No dice
    if (!matchedMq) return;

    // Plugin already initialized? We good
    if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

    // Remove existing plugin-specific CSS classes
    $.each(MenuPlugins, function(key, value) {
      _this.$element.removeClass(value.cssClass);
    });

    // Add the CSS class for the new plugin
    this.$element.addClass(this.rules[matchedMq].cssClass);

    // Create an instance of the new plugin
    if (this.currentPlugin) this.currentPlugin.destroy();
    this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
  }

  /**
   * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
   * @function
   */
  destroy() {
    this.currentPlugin.destroy();
    $(window).off('.zf.ResponsiveMenu');
    Foundation.unregisterPlugin(this);
  }
}

ResponsiveMenu.defaults = {};

// The plugin matches the plugin classes with these plugin instances.
var MenuPlugins = {
  dropdown: {
    cssClass: 'dropdown',
    plugin: Foundation._plugins['dropdown-menu'] || null
  },
 drilldown: {
    cssClass: 'drilldown',
    plugin: Foundation._plugins['drilldown'] || null
  },
  accordion: {
    cssClass: 'accordion-menu',
    plugin: Foundation._plugins['accordion-menu'] || null
  }
};

// Window exports
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');

}(jQuery);

'use strict';

!function($) {

/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 */

class ResponsiveToggle {
  /**
   * Creates a new instance of Tab Bar.
   * @class
   * @fires ResponsiveToggle#init
   * @param {jQuery} element - jQuery object to attach tab bar functionality to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'ResponsiveToggle');
  }

  /**
   * Initializes the tab bar by finding the target element, toggling element, and running update().
   * @function
   * @private
   */
  _init() {
    var targetID = this.$element.data('responsive-toggle');
    if (!targetID) {
      console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
    }

    this.$targetMenu = $(`#${targetID}`);
    this.$toggler = this.$element.find('[data-toggle]');

    this._update();
  }

  /**
   * Adds necessary event handlers for the tab bar to work.
   * @function
   * @private
   */
  _events() {
    var _this = this;

    $(window).on('changed.zf.mediaquery', this._update.bind(this));

    this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
  }

  /**
   * Checks the current media query to determine if the tab bar should be visible or hidden.
   * @function
   * @private
   */
  _update() {
    // Mobile
    if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
      this.$element.show();
      this.$targetMenu.hide();
    }

    // Desktop
    else {
      this.$element.hide();
      this.$targetMenu.show();
    }
  }

  /**
   * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
   * @function
   * @fires ResponsiveToggle#toggled
   */
  toggleMenu() {
    if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
      this.$targetMenu.toggle(0);

      /**
       * Fires when the element attached to the tab bar toggles.
       * @event ResponsiveToggle#toggled
       */
      this.$element.trigger('toggled.zf.responsiveToggle');
    }
  };

  destroy() {
    //TODO this...
  }
}

ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @example 'medium'
   */
  hideFor: 'medium'
};

// Window exports
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');

}(jQuery);

'use strict';

!function($) {

/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */

class Reveal {
  /**
   * Creates a new instance of Reveal.
   * @class
   * @param {jQuery} element - jQuery object to use for the modal.
   * @param {Object} options - optional parameters.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
    this._init();

    Foundation.registerPlugin(this, 'Reveal');
    Foundation.Keyboard.register('Reveal', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ESCAPE': 'close',
      'TAB': 'tab_forward',
      'SHIFT_TAB': 'tab_backward'
    });
  }

  /**
   * Initializes the modal by adding the overlay and close buttons, (if selected).
   * @private
   */
  _init() {
    this.id = this.$element.attr('id');
    this.isActive = false;
    this.cached = {mq: Foundation.MediaQuery.current};
    this.isiOS = iPhoneSniff();

    if(this.isiOS){ this.$element.addClass('is-ios'); }

    this.$anchor = $(`[data-open="${this.id}"]`).length ? $(`[data-open="${this.id}"]`) : $(`[data-toggle="${this.id}"]`);

    if (this.$anchor.length) {
      var anchorId = this.$anchor[0].id || Foundation.GetYoDigits(6, 'reveal');

      this.$anchor.attr({
        'aria-controls': this.id,
        'id': anchorId,
        'aria-haspopup': true,
        'tabindex': 0
      });
      this.$element.attr({'aria-labelledby': anchorId});
    }

    if (this.options.fullScreen || this.$element.hasClass('full')) {
      this.options.fullScreen = true;
      this.options.overlay = false;
    }
    if (this.options.overlay && !this.$overlay) {
      this.$overlay = this._makeOverlay(this.id);
    }

    this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
    });

    if(this.$overlay) {
      this.$element.detach().appendTo(this.$overlay);
    } else {
      this.$element.detach().appendTo($('body'));
      this.$element.addClass('without-overlay');
    }
    this._events();
    if (this.options.deepLink && window.location.hash === ( `#${this.id}`)) {
      $(window).one('load.zf.reveal', this.open.bind(this));
    }
  }

  /**
   * Creates an overlay div to display behind the modal.
   * @private
   */
  _makeOverlay(id) {
    var $overlay = $('<div></div>')
                    .addClass('reveal-overlay')
                    .attr({'tabindex': -1, 'aria-hidden': true})
                    .appendTo('body');
    return $overlay;
  }

  /**
   * Updates position of modal
   * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
   * @private
   */
  _updatePosition() {
    var width = this.$element.outerWidth();
    var outerWidth = $(window).width();
    var height = this.$element.outerHeight();
    var outerHeight = $(window).height();
    var left = parseInt((outerWidth - width) / 2, 10);
    var top;
    if (height > outerHeight) {
      top = parseInt(Math.min(100, outerHeight / 10), 10);
    } else {
      top = parseInt((outerHeight - height) / 4, 10);
    }
    this.$element.css({top: top + 'px'});
    // only worry about left if we don't have an overlay, otherwise we're perfectly in the middle
    if(!this.$overlay) {
      this.$element.css({left: left + 'px'});
    }

  }

  /**
   * Adds event handlers for the modal.
   * @private
   */
  _events() {
    var _this = this;

    this.$element.on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'resizeme.zf.trigger': function() {
        _this._updatePosition();
      }
    });

    if (this.$anchor.length) {
      this.$anchor.on('keydown.zf.reveal', function(e) {
        if (e.which === 13 || e.which === 32) {
          e.stopPropagation();
          e.preventDefault();
          _this.open();
        }
      });
    }

    if (this.options.closeOnClick && this.options.overlay) {
      this.$overlay.off('.zf.reveal').on('click.zf.reveal', function(e) {
        if (e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)) { return; }
        _this.close();
      });
    }
    if (this.options.deepLink) {
      $(window).on(`popstate.zf.reveal:${this.id}`, this._handleState.bind(this));
    }
  }

  /**
   * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
   * @private
   */
  _handleState(e) {
    if(window.location.hash === ( '#' + this.id) && !this.isActive){ this.open(); }
    else{ this.close(); }
  }


  /**
   * Opens the modal controlled by `this.$anchor`, and closes all others by default.
   * @function
   * @fires Reveal#closeme
   * @fires Reveal#open
   */
  open() {
    if (this.options.deepLink) {
      var hash = `#${this.id}`;

      if (window.history.pushState) {
        window.history.pushState(null, null, hash);
      } else {
        window.location.hash = hash;
      }
    }

    this.isActive = true;

    // Make elements invisible, but remove display: none so we can get size and positioning
    this.$element
        .css({ 'visibility': 'hidden' })
        .show()
        .scrollTop(0);
    if (this.options.overlay) {
      this.$overlay.css({'visibility': 'hidden'}).show();
    }

    this._updatePosition();

    this.$element
      .hide()
      .css({ 'visibility': '' });

    if(this.$overlay) {
      this.$overlay.css({'visibility': ''}).hide();
    }


    if (!this.options.multipleOpened) {
      /**
       * Fires immediately before the modal opens.
       * Closes any other modals that are currently open
       * @event Reveal#closeme
       */
      this.$element.trigger('closeme.zf.reveal', this.id);
    }

    // Motion UI method of reveal
    if (this.options.animationIn) {
      if (this.options.overlay) {
        Foundation.Motion.animateIn(this.$overlay, 'fade-in');
      }
      Foundation.Motion.animateIn(this.$element, this.options.animationIn, function() {
        this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
      });
    }
    // jQuery method of reveal
    else {
      if (this.options.overlay) {
        this.$overlay.show(0);
      }
      this.$element.show(this.options.showDelay);
    }

    // handle accessibility
    this.$element
      .attr({
        'aria-hidden': false,
        'tabindex': -1
      })
      .focus();

    /**
     * Fires when the modal has successfully opened.
     * @event Reveal#open
     */
    this.$element.trigger('open.zf.reveal');

    if (this.isiOS) {
      var scrollPos = window.pageYOffset;
      $('html, body').addClass('is-reveal-open').scrollTop(scrollPos);
    }
    else {
      $('body').addClass('is-reveal-open');
    }

    $('body')
      .addClass('is-reveal-open')
      .attr('aria-hidden', (this.options.overlay || this.options.fullScreen) ? true : false);

    setTimeout(() => {
      this._extraHandlers();
    }, 0);
  }

  /**
   * Adds extra event handlers for the body and window if necessary.
   * @private
   */
  _extraHandlers() {
    var _this = this;
    this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);

    if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
      $('body').on('click.zf.reveal', function(e) {
        if (e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)) { return; }
        _this.close();
      });
    }

    if (this.options.closeOnEsc) {
      $(window).on('keydown.zf.reveal', function(e) {
        Foundation.Keyboard.handleKey(e, 'Reveal', {
          close: function() {
            if (_this.options.closeOnEsc) {
              _this.close();
              _this.$anchor.focus();
            }
          }
        });
        if (_this.focusableElements.length === 0) { // no focusable elements inside the modal at all, prevent tabbing in general
          e.preventDefault();
        }
      });
    }

    // lock focus within modal while tabbing
    this.$element.on('keydown.zf.reveal', function(e) {
      var $target = $(this);
      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, 'Reveal', {
        tab_forward: function() {
          if (_this.$element.find(':focus').is(_this.focusableElements.eq(-1))) { // left modal downwards, setting focus to first element
            _this.focusableElements.eq(0).focus();
            e.preventDefault();
          }
        },
        tab_backward: function() {
          if (_this.$element.find(':focus').is(_this.focusableElements.eq(0)) || _this.$element.is(':focus')) { // left modal upwards, setting focus to last element
            _this.focusableElements.eq(-1).focus();
            e.preventDefault();
          }
        },
        open: function() {
          if (_this.$element.find(':focus').is(_this.$element.find('[data-close]'))) {
            setTimeout(function() { // set focus back to anchor if close button has been activated
              _this.$anchor.focus();
            }, 1);
          } else if ($target.is(_this.focusableElements)) { // dont't trigger if acual element has focus (i.e. inputs, links, ...)
            _this.open();
          }
        },
        close: function() {
          if (_this.options.closeOnEsc) {
            _this.close();
            _this.$anchor.focus();
          }
        }
      });
    });
  }

  /**
   * Closes the modal.
   * @function
   * @fires Reveal#closed
   */
  close() {
    if (!this.isActive || !this.$element.is(':visible')) {
      return false;
    }
    var _this = this;

    // Motion UI method of hiding
    if (this.options.animationOut) {
      if (this.options.overlay) {
        Foundation.Motion.animateOut(this.$overlay, 'fade-out', finishUp);
      }
      else {
        finishUp();
      }

      Foundation.Motion.animateOut(this.$element, this.options.animationOut);
    }
    // jQuery method of hiding
    else {
      if (this.options.overlay) {
        this.$overlay.hide(0, finishUp);
      }
      else {
        finishUp();
      }

      this.$element.hide(this.options.hideDelay);
    }

    // Conditionals to remove extra event listeners added on open
    if (this.options.closeOnEsc) {
      $(window).off('keydown.zf.reveal');
    }

    if (!this.options.overlay && this.options.closeOnClick) {
      $('body').off('click.zf.reveal');
    }

    this.$element.off('keydown.zf.reveal');

    function finishUp() {
      if (_this.isiOS) {
        $('html, body').removeClass('is-reveal-open');
      }
      else {
        $('body').removeClass('is-reveal-open');
      }

      $('body').attr({
        'aria-hidden': false,
        'tabindex': ''
      });

      _this.$element.attr('aria-hidden', true);

      /**
      * Fires when the modal is done closing.
      * @event Reveal#closed
      */
      _this.$element.trigger('closed.zf.reveal');
    }

    /**
    * Resets the modal content
    * This prevents a running video to keep going in the background
    */
    if (this.options.resetOnClose) {
      this.$element.html(this.$element.html());
    }

    this.isActive = false;
     if (_this.options.deepLink) {
       if (window.history.replaceState) {
         window.history.replaceState("", document.title, window.location.pathname);
       } else {
         window.location.hash = '';
       }
     }
  }

  /**
   * Toggles the open/closed state of a modal.
   * @function
   */
  toggle() {
    if (this.isActive) {
      this.close();
    } else {
      this.open();
    }
  };

  /**
   * Destroys an instance of a modal.
   * @function
   */
  destroy() {
    if (this.options.overlay) {
      this.$overlay.hide().off().remove();
    }
    this.$element.hide().off();
    this.$anchor.off('.zf');
    $(window).off(`.zf.reveal:${this.id}`);

    Foundation.unregisterPlugin(this);
  };
}

Reveal.defaults = {
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @example 'slide-in-left'
   */
  animationIn: '',
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @example 'slide-out-right'
   */
  animationOut: '',
  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @example 10
   */
  showDelay: 0,
  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @example 10
   */
  hideDelay: 0,
  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @example true
   */
  closeOnClick: true,
  /**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @example true
   */
  closeOnEsc: true,
  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @example false
   */
  multipleOpened: false,
  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @example 100
   */
  vOffset: 100,
  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @example 0
   */
  hOffset: 0,
  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @example false
   */
  fullScreen: false,
  /**
   * Percentage of screen height the modal should push up from the bottom of the view.
   * @option
   * @example 10
   */
  btmOffsetPct: 10,
  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @example true
   */
  overlay: true,
  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @example false
   */
  resetOnClose: false,
  /**
   * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
   * @option
   * @example false
   */
  deepLink: false
};

// Window exports
Foundation.plugin(Reveal, 'Reveal');

function iPhoneSniff() {
  return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent);
}

}(jQuery);

'use strict';

!function($) {

/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */

class Slider {
  /**
   * Creates a new instance of a drilldown menu.
   * @class
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Slider.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Slider');
    Foundation.Keyboard.register('Slider', {
      'ltr': {
        'ARROW_RIGHT': 'increase',
        'ARROW_UP': 'increase',
        'ARROW_DOWN': 'decrease',
        'ARROW_LEFT': 'decrease',
        'SHIFT_ARROW_RIGHT': 'increase_fast',
        'SHIFT_ARROW_UP': 'increase_fast',
        'SHIFT_ARROW_DOWN': 'decrease_fast',
        'SHIFT_ARROW_LEFT': 'decrease_fast'
      },
      'rtl': {
        'ARROW_LEFT': 'increase',
        'ARROW_RIGHT': 'decrease',
        'SHIFT_ARROW_LEFT': 'increase_fast',
        'SHIFT_ARROW_RIGHT': 'decrease_fast'
      }
    });
  }

  /**
   * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
   * @function
   * @private
   */
  _init() {
    this.inputs = this.$element.find('input');
    this.handles = this.$element.find('[data-slider-handle]');

    this.$handle = this.handles.eq(0);
    this.$input = this.inputs.length ? this.inputs.eq(0) : $(`#${this.$handle.attr('aria-controls')}`);
    this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

    var isDbl = false,
        _this = this;
    if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
      this.options.disabled = true;
      this.$element.addClass(this.options.disabledClass);
    }
    if (!this.inputs.length) {
      this.inputs = $().add(this.$input);
      this.options.binding = true;
    }
    this._setInitAttr(0);
    this._events(this.$handle);

    if (this.handles[1]) {
      this.options.doubleSided = true;
      this.$handle2 = this.handles.eq(1);
      this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : $(`#${this.$handle2.attr('aria-controls')}`);

      if (!this.inputs[1]) {
        this.inputs = this.inputs.add(this.$input2);
      }
      isDbl = true;

      this._setHandlePos(this.$handle, this.options.initialStart, true, function() {

        _this._setHandlePos(_this.$handle2, _this.options.initialEnd, true);
      });
      // this.$handle.triggerHandler('click.zf.slider');
      this._setInitAttr(1);
      this._events(this.$handle2);
    }

    if (!isDbl) {
      this._setHandlePos(this.$handle, this.options.initialStart, true);
    }
  }

  /**
   * Sets the position of the selected handle and fill bar.
   * @function
   * @private
   * @param {jQuery} $hndl - the selected handle to move.
   * @param {Number} location - floating point between the start and end values of the slider bar.
   * @param {Function} cb - callback function to fire on completion.
   * @fires Slider#moved
   */
  _setHandlePos($hndl, location, noInvert, cb) {
  //might need to alter that slightly for bars that will have odd number selections.
    location = parseFloat(location);//on input change events, convert string to number...grumble.

    // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
    if (location < this.options.start) { location = this.options.start; }
    else if (location > this.options.end) { location = this.options.end; }

    var isDbl = this.options.doubleSided;

    if (isDbl) { //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
      if (this.handles.index($hndl) === 0) {
        var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
        location = location >= h2Val ? h2Val - this.options.step : location;
      } else {
        var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
        location = location <= h1Val ? h1Val + this.options.step : location;
      }
    }

    //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
    //for click and drag events, it's weird due to the scale(-1, 1) css property
    if (this.options.vertical && !noInvert) {
      location = this.options.end - location;
    }

    var _this = this,
        vert = this.options.vertical,
        hOrW = vert ? 'height' : 'width',
        lOrT = vert ? 'top' : 'left',
        handleDim = $hndl[0].getBoundingClientRect()[hOrW],
        elemDim = this.$element[0].getBoundingClientRect()[hOrW],
        //percentage of bar min/max value based on click or drag point
        pctOfBar = percent(location, this.options.end).toFixed(2),
        //number of actual pixels to shift the handle, based on the percentage obtained above
        pxToMove = (elemDim - handleDim) * pctOfBar,
        //percentage of bar to shift the handle
        movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
        //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
        location = parseFloat(location.toFixed(this.options.decimal));
        // declare empty object for css adjustments, only used with 2 handled-sliders
    var css = {};

    this._setValues($hndl, location);

    // TODO update to calculate based on values set to respective inputs??
    if (isDbl) {
      var isLeftHndl = this.handles.index($hndl) === 0,
          //empty variable, will be used for min-height/width for fill bar
          dim,
          //percentage w/h of the handle compared to the slider bar
          handlePct =  ~~(percent(handleDim, elemDim) * 100);
      //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
      if (isLeftHndl) {
        //left or top percentage value to apply to the fill bar.
        css[lOrT] = `${movement}%`;
        //calculate the new min-height/width for the fill bar.
        dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
        //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
        //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
        if (cb && typeof cb === 'function') { cb(); }//this is only needed for the initialization of 2 handled sliders
      } else {
        //just caching the value of the left/bottom handle's left/top property
        var handlePos = parseFloat(this.$handle[0].style[lOrT]);
        //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
        //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
        dim = movement - (isNaN(handlePos) ? this.options.initialStart/((this.options.end-this.options.start)/100) : handlePos) + handlePct;
      }
      // assign the min-height/width to our css object
      css[`min-${hOrW}`] = `${dim}%`;
    }

    this.$element.one('finished.zf.animate', function() {
                    /**
                     * Fires when the handle is done moving.
                     * @event Slider#moved
                     */
                    _this.$element.trigger('moved.zf.slider', [$hndl]);
                });

    //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
    var moveTime = this.$element.data('dragging') ? 1000/60 : this.options.moveTime;

    Foundation.Move(moveTime, $hndl, function() {
      //adjusting the left/top property of the handle, based on the percentage calculated above
      $hndl.css(lOrT, `${movement}%`);

      if (!_this.options.doubleSided) {
        //if single-handled, a simple method to expand the fill bar
        _this.$fill.css(hOrW, `${pctOfBar * 100}%`);
      } else {
        //otherwise, use the css object we created above
        _this.$fill.css(css);
      }
    });
  }

  /**
   * Sets the initial attribute for the slider element.
   * @function
   * @private
   * @param {Number} idx - index of the current handle/input to use.
   */
  _setInitAttr(idx) {
    var id = this.inputs.eq(idx).attr('id') || Foundation.GetYoDigits(6, 'slider');
    this.inputs.eq(idx).attr({
      'id': id,
      'max': this.options.end,
      'min': this.options.start,
      'step': this.options.step
    });
    this.handles.eq(idx).attr({
      'role': 'slider',
      'aria-controls': id,
      'aria-valuemax': this.options.end,
      'aria-valuemin': this.options.start,
      'aria-valuenow': idx === 0 ? this.options.initialStart : this.options.initialEnd,
      'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
      'tabindex': 0
    });
  }

  /**
   * Sets the input and `aria-valuenow` values for the slider element.
   * @function
   * @private
   * @param {jQuery} $handle - the currently selected handle.
   * @param {Number} val - floating point of the new value.
   */
  _setValues($handle, val) {
    var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
    this.inputs.eq(idx).val(val);
    $handle.attr('aria-valuenow', val);
  }

  /**
   * Handles events on the slider element.
   * Calculates the new location of the current handle.
   * If there are two handles and the bar was clicked, it determines which handle to move.
   * @function
   * @private
   * @param {Object} e - the `event` object passed from the listener.
   * @param {jQuery} $handle - the current handle to calculate for, if selected.
   * @param {Number} val - floating point number for the new value of the slider.
   * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
   */
  _handleEvent(e, $handle, val) {
    var value, hasVal;
    if (!val) {//click or drag events
      e.preventDefault();
      var _this = this,
          vertical = this.options.vertical,
          param = vertical ? 'height' : 'width',
          direction = vertical ? 'top' : 'left',
          pageXY = vertical ? e.pageY : e.pageX,
          halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
          barDim = this.$element[0].getBoundingClientRect()[param],
          barOffset = (this.$element.offset()[direction] -  pageXY),
          //if the cursor position is less than or greater than the elements bounding coordinates, set coordinates within those bounds
          barXY = barOffset > 0 ? -halfOfHandle : (barOffset - halfOfHandle) < -barDim ? barDim : Math.abs(barOffset),
          offsetPct = percent(barXY, barDim);
      value = (this.options.end - this.options.start) * offsetPct;

      // turn everything around for RTL, yay math!
      if (Foundation.rtl() && !this.options.vertical) {value = this.options.end - value;}

      value = _this._adjustValue(null, value);
      //boolean flag for the setHandlePos fn, specifically for vertical sliders
      hasVal = false;

      if (!$handle) {//figure out which handle it is, pass it to the next function.
        var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
            secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
            $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
      }

    } else {//change event on input
      value = this._adjustValue(null, val);
      hasVal = true;
    }

    this._setHandlePos($handle, value, hasVal);
  }

  /**
   * Adjustes value for handle in regard to step value. returns adjusted value
   * @function
   * @private
   * @param {jQuery} $handle - the selected handle.
   * @param {Number} value - value to adjust. used if $handle is falsy
   */
  _adjustValue($handle, value) {
    var val,
      step = this.options.step,
      div = parseFloat(step/2),
      left, prev_val, next_val;
    if (!!$handle) {
      val = parseFloat($handle.attr('aria-valuenow'));
    }
    else {
      val = value;
    }
    left = val % step;
    prev_val = val - left;
    next_val = prev_val + step;
    if (left === 0) {
      return val;
    }
    val = val >= prev_val + div ? next_val : prev_val;
    return val;
  }

  /**
   * Adds event listeners to the slider elements.
   * @function
   * @private
   * @param {jQuery} $handle - the current handle to apply listeners to.
   */
  _events($handle) {
    if (this.options.disabled) { return false; }

    var _this = this,
        curHandle,
        timer;

      this.inputs.off('change.zf.slider').on('change.zf.slider', function(e) {
        var idx = _this.inputs.index($(this));
        _this._handleEvent(e, _this.handles.eq(idx), $(this).val());
      });

      if (this.options.clickSelect) {
        this.$element.off('click.zf.slider').on('click.zf.slider', function(e) {
          if (_this.$element.data('dragging')) { return false; }

          if (!$(e.target).is('[data-slider-handle]')) {
            if (_this.options.doubleSided) {
              _this._handleEvent(e);
            } else {
              _this._handleEvent(e, _this.$handle);
            }
          }
        });
      }

    if (this.options.draggable) {
      this.handles.addTouch();

      var $body = $('body');
      $handle
        .off('mousedown.zf.slider')
        .on('mousedown.zf.slider', function(e) {
          $handle.addClass('is-dragging');
          _this.$fill.addClass('is-dragging');//
          _this.$element.data('dragging', true);

          curHandle = $(e.currentTarget);

          $body.on('mousemove.zf.slider', function(e) {
            e.preventDefault();

            _this._handleEvent(e, curHandle);

          }).on('mouseup.zf.slider', function(e) {
            _this._handleEvent(e, curHandle);

            $handle.removeClass('is-dragging');
            _this.$fill.removeClass('is-dragging');
            _this.$element.data('dragging', false);

            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
      });
    }

    $handle.off('keydown.zf.slider').on('keydown.zf.slider', function(e) {
      var _$handle = $(this),
          idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
          oldValue = parseFloat(_this.inputs.eq(idx).val()),
          newValue;

      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, 'Slider', {
        decrease: function() {
          newValue = oldValue - _this.options.step;
        },
        increase: function() {
          newValue = oldValue + _this.options.step;
        },
        decrease_fast: function() {
          newValue = oldValue - _this.options.step * 10;
        },
        increase_fast: function() {
          newValue = oldValue + _this.options.step * 10;
        },
        handled: function() { // only set handle pos when event was handled specially
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue, true);
        }
      });
      /*if (newValue) { // if pressed key has special function, update value
        e.preventDefault();
        _this._setHandlePos(_$handle, newValue);
      }*/
    });
  }

  /**
   * Destroys the slider plugin.
   */
  destroy() {
    this.handles.off('.zf.slider');
    this.inputs.off('.zf.slider');
    this.$element.off('.zf.slider');

    Foundation.unregisterPlugin(this);
  }
}

Slider.defaults = {
  /**
   * Minimum value for the slider scale.
   * @option
   * @example 0
   */
  start: 0,
  /**
   * Maximum value for the slider scale.
   * @option
   * @example 100
   */
  end: 100,
  /**
   * Minimum value change per change event.
   * @option
   * @example 1
   */
  step: 1,
  /**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @example 0
   */
  initialStart: 0,
  /**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @example 100
   */
  initialEnd: 100,
  /**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @example false
   */
  binding: false,
  /**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @example true
   */
  clickSelect: true,
  /**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @example false
   */
  vertical: false,
  /**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @example true
   */
  draggable: true,
  /**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @example false
   */
  disabled: false,
  /**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @example false
   */
  doubleSided: false,
  /**
   * Potential future feature.
   */
  // steps: 100,
  /**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @example 2
   */
  decimal: 2,
  /**
   * Time delay for dragged elements.
   */
  // dragDelay: 0,
  /**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @example 200
   */
  moveTime: 200,//update this if changing the transition time in the sass
  /**
   * Class applied to disabled sliders.
   * @option
   * @example 'disabled'
   */
  disabledClass: 'disabled',
  /**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @example false
   */
  invertVertical: false
};

function percent(frac, num) {
  return (frac / num);
}
function absPosition($handle, dir, clickPos, param) {
  return Math.abs(($handle.position()[dir] + ($handle[param]() / 2)) - clickPos);
}

// Window exports
Foundation.plugin(Slider, 'Slider');

}(jQuery);

//*********this is in case we go to static, absolute positions instead of dynamic positioning********
// this.setSteps(function() {
//   _this._events();
//   var initStart = _this.options.positions[_this.options.initialStart - 1] || null;
//   var initEnd = _this.options.initialEnd ? _this.options.position[_this.options.initialEnd - 1] : null;
//   if (initStart || initEnd) {
//     _this._handleEvent(initStart, initEnd);
//   }
// });

//***********the other part of absolute positions*************
// Slider.prototype.setSteps = function(cb) {
//   var posChange = this.$element.outerWidth() / this.options.steps;
//   var counter = 0
//   while(counter < this.options.steps) {
//     if (counter) {
//       this.options.positions.push(this.options.positions[counter - 1] + posChange);
//     } else {
//       this.options.positions.push(posChange);
//     }
//     counter++;
//   }
//   cb();
// };

'use strict';

!function($) {

/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */

class Sticky {
  /**
   * Creates a new instance of a sticky thing.
   * @class
   * @param {jQuery} element - jQuery object to make sticky.
   * @param {Object} options - options object passed when creating the element programmatically.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Sticky.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this, 'Sticky');
  }

  /**
   * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
   * @function
   * @private
   */
  _init() {
    var $parent = this.$element.parent('[data-sticky-container]'),
        id = this.$element[0].id || Foundation.GetYoDigits(6, 'sticky'),
        _this = this;

    if (!$parent.length) {
      this.wasWrapped = true;
    }
    this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element);
    this.$container.addClass(this.options.containerClass);

    this.$element.addClass(this.options.stickyClass)
                 .attr({'data-resize': id});

    this.scrollCount = this.options.checkEvery;
    this.isStuck = false;
    $(window).one('load.zf.sticky', function(){
      if(_this.options.anchor !== ''){
        _this.$anchor = $('#' + _this.options.anchor);
      }else{
        _this._parsePoints();
      }

      _this._setSizes(function(){
        _this._calc(false);
      });
      _this._events(id.split('-').reverse().join('-'));
    });
  }

  /**
   * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
   * @function
   * @private
   */
  _parsePoints() {
    var top = this.options.topAnchor,
        btm = this.options.btmAnchor,
        pts = [top, btm],
        breaks = {};
    if (top && btm) {

      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
        var pt;
        if (typeof pts[i] === 'number') {
          pt = pts[i];
        } else {
          var place = pts[i].split(':'),
              anchor = $(`#${place[0]}`);

          pt = anchor.offset().top;
          if (place[1] && place[1].toLowerCase() === 'bottom') {
            pt += anchor[0].getBoundingClientRect().height;
          }
        }
        breaks[i] = pt;
      }
    } else {
      breaks = {0: 1, 1: document.documentElement.scrollHeight};
    }

    this.points = breaks;
    return;
  }

  /**
   * Adds event handlers for the scrolling element.
   * @private
   * @param {String} id - psuedo-random id for unique scroll event listener.
   */
  _events(id) {
    var _this = this,
        scrollListener = this.scrollListener = `scroll.zf.${id}`;
    if (this.isOn) { return; }
    if (this.canStick) {
      this.isOn = true;
      $(window).off(scrollListener)
               .on(scrollListener, function(e) {
                 if (_this.scrollCount === 0) {
                   _this.scrollCount = _this.options.checkEvery;
                   _this._setSizes(function() {
                     _this._calc(false, window.pageYOffset);
                   });
                 } else {
                   _this.scrollCount--;
                   _this._calc(false, window.pageYOffset);
                 }
              });
    }

    this.$element.off('resizeme.zf.trigger')
                 .on('resizeme.zf.trigger', function(e, el) {
                     _this._setSizes(function() {
                       _this._calc(false);
                       if (_this.canStick) {
                         if (!_this.isOn) {
                           _this._events(id);
                         }
                       } else if (_this.isOn) {
                         _this._pauseListeners(scrollListener);
                       }
                     });
    });
  }

  /**
   * Removes event handlers for scroll and change events on anchor.
   * @fires Sticky#pause
   * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
   */
  _pauseListeners(scrollListener) {
    this.isOn = false;
    $(window).off(scrollListener);

    /**
     * Fires when the plugin is paused due to resize event shrinking the view.
     * @event Sticky#pause
     * @private
     */
     this.$element.trigger('pause.zf.sticky');
  }

  /**
   * Called on every `scroll` event and on `_init`
   * fires functions based on booleans and cached values
   * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
   * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
   */
  _calc(checkSizes, scroll) {
    if (checkSizes) { this._setSizes(); }

    if (!this.canStick) {
      if (this.isStuck) {
        this._removeSticky(true);
      }
      return false;
    }

    if (!scroll) { scroll = window.pageYOffset; }

    if (scroll >= this.topPoint) {
      if (scroll <= this.bottomPoint) {
        if (!this.isStuck) {
          this._setSticky();
        }
      } else {
        if (this.isStuck) {
          this._removeSticky(false);
        }
      }
    } else {
      if (this.isStuck) {
        this._removeSticky(true);
      }
    }
  }

  /**
   * Causes the $element to become stuck.
   * Adds `position: fixed;`, and helper classes.
   * @fires Sticky#stuckto
   * @function
   * @private
   */
  _setSticky() {
    var stickTo = this.options.stickTo,
        mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
        notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
        css = {};

    css[mrgn] = `${this.options[mrgn]}em`;
    css[stickTo] = 0;
    css[notStuckTo] = 'auto';
    css['left'] = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10);
    this.isStuck = true;
    this.$element.removeClass(`is-anchored is-at-${notStuckTo}`)
                 .addClass(`is-stuck is-at-${stickTo}`)
                 .css(css)
                 /**
                  * Fires when the $element has become `position: fixed;`
                  * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
                  * @event Sticky#stuckto
                  */
                 .trigger(`sticky.zf.stuckto:${stickTo}`);
  }

  /**
   * Causes the $element to become unstuck.
   * Removes `position: fixed;`, and helper classes.
   * Adds other helper classes.
   * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
   * @fires Sticky#unstuckfrom
   * @private
   */
  _removeSticky(isTop) {
    var stickTo = this.options.stickTo,
        stickToTop = stickTo === 'top',
        css = {},
        anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
        mrgn = stickToTop ? 'marginTop' : 'marginBottom',
        notStuckTo = stickToTop ? 'bottom' : 'top',
        topOrBottom = isTop ? 'top' : 'bottom';

    css[mrgn] = 0;

    if ((isTop && !stickToTop) || (stickToTop && !isTop)) {
      css[stickTo] = anchorPt;
      css[notStuckTo] = 0;
    } else {
      css[stickTo] = 0;
      css[notStuckTo] = anchorPt;
    }

    css['left'] = '';
    this.isStuck = false;
    this.$element.removeClass(`is-stuck is-at-${stickTo}`)
                 .addClass(`is-anchored is-at-${topOrBottom}`)
                 .css(css)
                 /**
                  * Fires when the $element has become anchored.
                  * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
                  * @event Sticky#unstuckfrom
                  */
                 .trigger(`sticky.zf.unstuckfrom:${topOrBottom}`);
  }

  /**
   * Sets the $element and $container sizes for plugin.
   * Calls `_setBreakPoints`.
   * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
   * @private
   */
  _setSizes(cb) {
    this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn);
    if (!this.canStick) { cb(); }
    var _this = this,
        newElemWidth = this.$container[0].getBoundingClientRect().width,
        comp = window.getComputedStyle(this.$container[0]),
        pdng = parseInt(comp['padding-right'], 10);

    if (this.$anchor && this.$anchor.length) {
      this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
    } else {
      this._parsePoints();
    }

    this.$element.css({
      'max-width': `${newElemWidth - pdng}px`
    });

    var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
    this.containerHeight = newContainerHeight;
    this.$container.css({
      height: newContainerHeight
    });
    this.elemHeight = newContainerHeight;

  	if (this.isStuck) {
  		this.$element.css({"left":this.$container.offset().left + parseInt(comp['padding-left'], 10)});
  	}

    this._setBreakPoints(newContainerHeight, function() {
      if (cb) { cb(); }
    });
  }

  /**
   * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
   * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
   * @param {Function} cb - optional callback function to be called on completion.
   * @private
   */
  _setBreakPoints(elemHeight, cb) {
    if (!this.canStick) {
      if (cb) { cb(); }
      else { return false; }
    }
    var mTop = emCalc(this.options.marginTop),
        mBtm = emCalc(this.options.marginBottom),
        topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
        bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
        // topPoint = this.$anchor.offset().top || this.points[0],
        // bottomPoint = topPoint + this.anchorHeight || this.points[1],
        winHeight = window.innerHeight;

    if (this.options.stickTo === 'top') {
      topPoint -= mTop;
      bottomPoint -= (elemHeight + mTop);
    } else if (this.options.stickTo === 'bottom') {
      topPoint -= (winHeight - (elemHeight + mBtm));
      bottomPoint -= (winHeight - mBtm);
    } else {
      //this would be the stickTo: both option... tricky
    }

    this.topPoint = topPoint;
    this.bottomPoint = bottomPoint;

    if (cb) { cb(); }
  }

  /**
   * Destroys the current sticky element.
   * Resets the element to the top position first.
   * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
   * @function
   */
  destroy() {
    this._removeSticky(true);

    this.$element.removeClass(`${this.options.stickyClass} is-anchored is-at-top`)
                 .css({
                   height: '',
                   top: '',
                   bottom: '',
                   'max-width': ''
                 })
                 .off('resizeme.zf.trigger');

    this.$anchor.off('change.zf.sticky');
    $(window).off(this.scrollListener);

    if (this.wasWrapped) {
      this.$element.unwrap();
    } else {
      this.$container.removeClass(this.options.containerClass)
                     .css({
                       height: ''
                     });
    }
    Foundation.unregisterPlugin(this);
  }
}

Sticky.defaults = {
  /**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @example '&lt;div data-sticky-container class="small-6 columns"&gt;&lt;/div&gt;'
   */
  container: '<div data-sticky-container></div>',
  /**
   * Location in the view the element sticks to.
   * @option
   * @example 'top'
   */
  stickTo: 'top',
  /**
   * If anchored to a single element, the id of that element.
   * @option
   * @example 'exampleId'
   */
  anchor: '',
  /**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @example 'exampleId:top'
   */
  topAnchor: '',
  /**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @example 'exampleId:bottom'
   */
  btmAnchor: '',
  /**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @example 1
   */
  marginTop: 1,
  /**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @example 1
   */
  marginBottom: 1,
  /**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @example 'medium'
   */
  stickyOn: 'medium',
  /**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @example 'sticky'
   */
  stickyClass: 'sticky',
  /**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @example 'sticky-container'
   */
  containerClass: 'sticky-container',
  /**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @example 50
   */
  checkEvery: -1
};

/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}

// Window exports
Foundation.plugin(Sticky, 'Sticky');

}(jQuery);

'use strict';

!function($) {

/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.timerAndImageLoader if tabs contain images
 */

class Tabs {
  /**
   * Creates a new instance of tabs.
   * @class
   * @fires Tabs#init
   * @param {jQuery} element - jQuery object to make into tabs.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Tabs.defaults, this.$element.data(), options);

    this._init();
    Foundation.registerPlugin(this, 'Tabs');
    Foundation.Keyboard.register('Tabs', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'previous',
      'ARROW_DOWN': 'next',
      'ARROW_LEFT': 'previous'
      // 'TAB': 'next',
      // 'SHIFT_TAB': 'previous'
    });
  }

  /**
   * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
   * @private
   */
  _init() {
    var _this = this;

    this.$tabTitles = this.$element.find(`.${this.options.linkClass}`);
    this.$tabContent = $(`[data-tabs-content="${this.$element[0].id}"]`);

    this.$tabTitles.each(function(){
      var $elem = $(this),
          $link = $elem.find('a'),
          isActive = $elem.hasClass('is-active'),
          hash = $link[0].hash.slice(1),
          linkId = $link[0].id ? $link[0].id : `${hash}-label`,
          $tabContent = $(`#${hash}`);

      $elem.attr({'role': 'presentation'});

      $link.attr({
        'role': 'tab',
        'aria-controls': hash,
        'aria-selected': isActive,
        'id': linkId
      });

      $tabContent.attr({
        'role': 'tabpanel',
        'aria-hidden': !isActive,
        'aria-labelledby': linkId
      });

      if(isActive && _this.options.autoFocus){
        $link.focus();
      }
    });

    if(this.options.matchHeight) {
      var $images = this.$tabContent.find('img');

      if ($images.length) {
        Foundation.onImagesLoaded($images, this._setHeight.bind(this));
      } else {
        this._setHeight();
      }
    }

    this._events();
  }

  /**
   * Adds event handlers for items within the tabs.
   * @private
   */
  _events() {
    this._addKeyHandler();
    this._addClickHandler();

    if (this.options.matchHeight) {
      $(window).on('changed.zf.mediaquery', this._setHeight.bind(this));
    }
  }

  /**
   * Adds click handlers for items within the tabs.
   * @private
   */
  _addClickHandler() {
    var _this = this;

    this.$element
      .off('click.zf.tabs')
      .on('click.zf.tabs', `.${this.options.linkClass}`, function(e){
        e.preventDefault();
        e.stopPropagation();
        if ($(this).hasClass('is-active')) {
          return;
        }
        _this._handleTabChange($(this));
      });
  }

  /**
   * Adds keyboard event handlers for items within the tabs.
   * @private
   */
  _addKeyHandler() {
    var _this = this;
    var $firstTab = _this.$element.find('li:first-of-type');
    var $lastTab = _this.$element.find('li:last-of-type');

    this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function(e){
      if (e.which === 9) return;
      e.stopPropagation();
      e.preventDefault();

      var $element = $(this),
        $elements = $element.parent('ul').children('li'),
        $prevElement,
        $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          if (_this.options.wrapOnKeys) {
            $prevElement = i === 0 ? $elements.last() : $elements.eq(i-1);
            $nextElement = i === $elements.length -1 ? $elements.first() : $elements.eq(i+1);
          } else {
            $prevElement = $elements.eq(Math.max(0, i-1));
            $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
          }
          return;
        }
      });

      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, 'Tabs', {
        open: function() {
          $element.find('[role="tab"]').focus();
          _this._handleTabChange($element);
        },
        previous: function() {
          $prevElement.find('[role="tab"]').focus();
          _this._handleTabChange($prevElement);
        },
        next: function() {
          $nextElement.find('[role="tab"]').focus();
          _this._handleTabChange($nextElement);
        }
      });
    });
  }

  /**
   * Opens the tab `$targetContent` defined by `$target`.
   * @param {jQuery} $target - Tab to open.
   * @fires Tabs#change
   * @function
   */
  _handleTabChange($target) {
    var $tabLink = $target.find('[role="tab"]'),
        hash = $tabLink[0].hash,
        $targetContent = this.$tabContent.find(hash),
        $oldTab = this.$element.
          find(`.${this.options.linkClass}.is-active`)
          .removeClass('is-active')
          .find('[role="tab"]')
          .attr({ 'aria-selected': 'false' });

    $(`#${$oldTab.attr('aria-controls')}`)
      .removeClass('is-active')
      .attr({ 'aria-hidden': 'true' });

    $target.addClass('is-active');

    $tabLink.attr({'aria-selected': 'true'});

    $targetContent
      .addClass('is-active')
      .attr({'aria-hidden': 'false'});

    /**
     * Fires when the plugin has successfully changed tabs.
     * @event Tabs#change
     */
    this.$element.trigger('change.zf.tabs', [$target]);
  }

  /**
   * Public method for selecting a content pane to display.
   * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
   * @function
   */
  selectTab(elem) {
    var idStr;

    if (typeof elem === 'object') {
      idStr = elem[0].id;
    } else {
      idStr = elem;
    }

    if (idStr.indexOf('#') < 0) {
      idStr = `#${idStr}`;
    }

    var $target = this.$tabTitles.find(`[href="${idStr}"]`).parent(`.${this.options.linkClass}`);

    this._handleTabChange($target);
  };
  /**
   * Sets the height of each panel to the height of the tallest panel.
   * If enabled in options, gets called on media query change.
   * If loading content via external source, can be called directly or with _reflow.
   * @function
   * @private
   */
  _setHeight() {
    var max = 0;
    this.$tabContent
      .find(`.${this.options.panelClass}`)
      .css('height', '')
      .each(function() {
        var panel = $(this),
            isActive = panel.hasClass('is-active');

        if (!isActive) {
          panel.css({'visibility': 'hidden', 'display': 'block'});
        }

        var temp = this.getBoundingClientRect().height;

        if (!isActive) {
          panel.css({
            'visibility': '',
            'display': ''
          });
        }

        max = temp > max ? temp : max;
      })
      .css('height', `${max}px`);
  }

  /**
   * Destroys an instance of an tabs.
   * @fires Tabs#destroyed
   */
  destroy() {
    this.$element
      .find(`.${this.options.linkClass}`)
      .off('.zf.tabs').hide().end()
      .find(`.${this.options.panelClass}`)
      .hide();

    if (this.options.matchHeight) {
      $(window).off('changed.zf.mediaquery');
    }

    Foundation.unregisterPlugin(this);
  }
}

Tabs.defaults = {
  /**
   * Allows the window to scroll to content of active pane on load if set to true.
   * @option
   * @example false
   */
  autoFocus: false,

  /**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @example true
   */
  wrapOnKeys: true,

  /**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @example false
   */
  matchHeight: false,

  /**
   * Class applied to `li`'s in tab link list.
   * @option
   * @example 'tabs-title'
   */
  linkClass: 'tabs-title',

  /**
   * Class applied to the content containers.
   * @option
   * @example 'tabs-panel'
   */
  panelClass: 'tabs-panel'
};

function checkClass($elem){
  return $elem.hasClass('is-active');
}

// Window exports
Foundation.plugin(Tabs, 'Tabs');

}(jQuery);

'use strict';

!function($) {

/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */

class Toggler {
  /**
   * Creates a new instance of Toggler.
   * @class
   * @fires Toggler#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Toggler.defaults, element.data(), options);
    this.className = '';

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'Toggler');
  }

  /**
   * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
   * @function
   * @private
   */
  _init() {
    var input;
    // Parse animation classes if they were set
    if (this.options.animate) {
      input = this.options.animate.split(' ');

      this.animationIn = input[0];
      this.animationOut = input[1] || null;
    }
    // Otherwise, parse toggle class
    else {
      input = this.$element.data('toggler');
      // Allow for a . at the beginning of the string
      this.className = input[0] === '.' ? input.slice(1) : input;
    }

    // Add ARIA attributes to triggers
    var id = this.$element[0].id;
    $(`[data-open="${id}"], [data-close="${id}"], [data-toggle="${id}"]`)
      .attr('aria-controls', id);
    // If the target is hidden, add aria-hidden
    this.$element.attr('aria-expanded', this.$element.is(':hidden') ? false : true);
  }

  /**
   * Initializes events for the toggle trigger.
   * @function
   * @private
   */
  _events() {
    this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
  }

  /**
   * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
   * @function
   * @fires Toggler#on
   * @fires Toggler#off
   */
  toggle() {
    this[ this.options.animate ? '_toggleAnimate' : '_toggleClass']();
  }

  _toggleClass() {
    this.$element.toggleClass(this.className);

    var isOn = this.$element.hasClass(this.className);
    if (isOn) {
      /**
       * Fires if the target element has the class after a toggle.
       * @event Toggler#on
       */
      this.$element.trigger('on.zf.toggler');
    }
    else {
      /**
       * Fires if the target element does not have the class after a toggle.
       * @event Toggler#off
       */
      this.$element.trigger('off.zf.toggler');
    }

    this._updateARIA(isOn);
  }

  _toggleAnimate() {
    var _this = this;

    if (this.$element.is(':hidden')) {
      Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
        this.trigger('on.zf.toggler');
        _this._updateARIA(true);
      });
    }
    else {
      Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
        this.trigger('off.zf.toggler');
        _this._updateARIA(false);
      });
    }
  }

  _updateARIA(isOn) {
    this.$element.attr('aria-expanded', isOn ? true : false);
  }

  /**
   * Destroys the instance of Toggler on the element.
   * @function
   */
  destroy() {
    this.$element.off('.zf.toggler');
    Foundation.unregisterPlugin(this);
  }
}

Toggler.defaults = {
  /**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @example false
   */
  animate: false
};

// Window exports
Foundation.plugin(Toggler, 'Toggler');

}(jQuery);

'use strict';

!function($) {

/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */

class Tooltip {
  /**
   * Creates a new instance of a Tooltip.
   * @class
   * @fires Tooltip#init
   * @param {jQuery} element - jQuery object to attach a tooltip to.
   * @param {Object} options - object to extend the default configuration.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);

    this.isActive = false;
    this.isClick = false;
    this._init();

    Foundation.registerPlugin(this, 'Tooltip');
  }

  /**
   * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
   * @private
   */
  _init() {
    var elemId = this.$element.attr('aria-describedby') || Foundation.GetYoDigits(6, 'tooltip');

    this.options.positionClass = this._getPositionClass(this.$element);
    this.options.tipText = this.options.tipText || this.$element.attr('title');
    this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);

    this.template.appendTo(document.body)
        .text(this.options.tipText)
        .hide();

    this.$element.attr({
      'title': '',
      'aria-describedby': elemId,
      'data-yeti-box': elemId,
      'data-toggle': elemId,
      'data-resize': elemId
    }).addClass(this.triggerClass);

    //helper variables to track movement on collisions
    this.usedPositions = [];
    this.counter = 4;
    this.classChanged = false;

    this._events();
  }

  /**
   * Grabs the current positioning class, if present, and returns the value or an empty string.
   * @private
   */
  _getPositionClass(element) {
    if (!element) { return ''; }
    // var position = element.attr('class').match(/top|left|right/g);
    var position = element[0].className.match(/\b(top|left|right)\b/g);
        position = position ? position[0] : '';
    return position;
  };
  /**
   * builds the tooltip element, adds attributes, and returns the template.
   * @private
   */
  _buildTemplate(id) {
    var templateClasses = (`${this.options.tooltipClass} ${this.options.positionClass} ${this.options.templateClasses}`).trim();
    var $template =  $('<div></div>').addClass(templateClasses).attr({
      'role': 'tooltip',
      'aria-hidden': true,
      'data-is-active': false,
      'data-is-focus': false,
      'id': id
    });
    return $template;
  }

  /**
   * Function that gets called if a collision event is detected.
   * @param {String} position - positioning class to try
   * @private
   */
  _reposition(position) {
    this.usedPositions.push(position ? position : 'bottom');

    //default, try switching to opposite side
    if (!position && (this.usedPositions.indexOf('top') < 0)) {
      this.template.addClass('top');
    } else if (position === 'top' && (this.usedPositions.indexOf('bottom') < 0)) {
      this.template.removeClass(position);
    } else if (position === 'left' && (this.usedPositions.indexOf('right') < 0)) {
      this.template.removeClass(position)
          .addClass('right');
    } else if (position === 'right' && (this.usedPositions.indexOf('left') < 0)) {
      this.template.removeClass(position)
          .addClass('left');
    }

    //if default change didn't work, try bottom or left first
    else if (!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)) {
      this.template.addClass('left');
    } else if (position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)) {
      this.template.removeClass(position)
          .addClass('left');
    } else if (position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)) {
      this.template.removeClass(position);
    } else if (position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)) {
      this.template.removeClass(position);
    }
    //if nothing cleared, set to bottom
    else {
      this.template.removeClass(position);
    }
    this.classChanged = true;
    this.counter--;
  }

  /**
   * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
   * if the tooltip is larger than the screen width, default to full width - any user selected margin
   * @private
   */
  _setPosition() {
    var position = this._getPositionClass(this.template),
        $tipDims = Foundation.Box.GetDimensions(this.template),
        $anchorDims = Foundation.Box.GetDimensions(this.$element),
        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
        param = (direction === 'top') ? 'height' : 'width',
        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset,
        _this = this;

    if (($tipDims.width >= $tipDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.template))) {
      this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
      // this.$element.offset(Foundation.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
        'width': $anchorDims.windowDims.width - (this.options.hOffset * 2),
        'height': 'auto'
      });
      return false;
    }

    this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element,'center ' + (position || 'bottom'), this.options.vOffset, this.options.hOffset));

    while(!Foundation.Box.ImNotTouchingYou(this.template) && this.counter) {
      this._reposition(position);
      this._setPosition();
    }
  }

  /**
   * reveals the tooltip, and fires an event to close any other open tooltips on the page
   * @fires Tooltip#closeme
   * @fires Tooltip#show
   * @function
   */
  show() {
    if (this.options.showOn !== 'all' && !Foundation.MediaQuery.atLeast(this.options.showOn)) {
      // console.error('The screen is too small to display this tooltip');
      return false;
    }

    var _this = this;
    this.template.css('visibility', 'hidden').show();
    this._setPosition();

    /**
     * Fires to close all other open tooltips on the page
     * @event Closeme#tooltip
     */
    this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));


    this.template.attr({
      'data-is-active': true,
      'aria-hidden': false
    });
    _this.isActive = true;
    // console.log(this.template);
    this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function() {
      //maybe do stuff?
    });
    /**
     * Fires when the tooltip is shown
     * @event Tooltip#show
     */
    this.$element.trigger('show.zf.tooltip');
  }

  /**
   * Hides the current tooltip, and resets the positioning class if it was changed due to collision
   * @fires Tooltip#hide
   * @function
   */
  hide() {
    // console.log('hiding', this.$element.data('yeti-box'));
    var _this = this;
    this.template.stop().attr({
      'aria-hidden': true,
      'data-is-active': false
    }).fadeOut(this.options.fadeOutDuration, function() {
      _this.isActive = false;
      _this.isClick = false;
      if (_this.classChanged) {
        _this.template
             .removeClass(_this._getPositionClass(_this.template))
             .addClass(_this.options.positionClass);

       _this.usedPositions = [];
       _this.counter = 4;
       _this.classChanged = false;
      }
    });
    /**
     * fires when the tooltip is hidden
     * @event Tooltip#hide
     */
    this.$element.trigger('hide.zf.tooltip');
  }

  /**
   * adds event listeners for the tooltip and its anchor
   * TODO combine some of the listeners like focus and mouseenter, etc.
   * @private
   */
  _events() {
    var _this = this;
    var $template = this.template;
    var isFocus = false;

    if (!this.options.disableHover) {

      this.$element
      .on('mouseenter.zf.tooltip', function(e) {
        if (!_this.isActive) {
          _this.timeout = setTimeout(function() {
            _this.show();
          }, _this.options.hoverDelay);
        }
      })
      .on('mouseleave.zf.tooltip', function(e) {
        clearTimeout(_this.timeout);
        if (!isFocus || (!_this.isClick && _this.options.clickOpen)) {
          _this.hide();
        }
      });
    }

    if (this.options.clickOpen) {
      this.$element.on('mousedown.zf.tooltip', function(e) {
        e.stopImmediatePropagation();
        if (_this.isClick) {
          _this.hide();
          // _this.isClick = false;
        } else {
          _this.isClick = true;
          if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
            _this.show();
          }
        }
      });
    }

    if (!this.options.disableForTouch) {
      this.$element
      .on('tap.zf.tooltip touchend.zf.tooltip', function(e) {
        _this.isActive ? _this.hide() : _this.show();
      });
    }

    this.$element.on({
      // 'toggle.zf.trigger': this.toggle.bind(this),
      // 'close.zf.trigger': this.hide.bind(this)
      'close.zf.trigger': this.hide.bind(this)
    });

    this.$element
      .on('focus.zf.tooltip', function(e) {
        isFocus = true;
        // console.log(_this.isClick);
        if (_this.isClick) {
          return false;
        } else {
          // $(window)
          _this.show();
        }
      })

      .on('focusout.zf.tooltip', function(e) {
        isFocus = false;
        _this.isClick = false;
        _this.hide();
      })

      .on('resizeme.zf.trigger', function() {
        if (_this.isActive) {
          _this._setPosition();
        }
      });
  }

  /**
   * adds a toggle method, in addition to the static show() & hide() functions
   * @function
   */
  toggle() {
    if (this.isActive) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Destroys an instance of tooltip, removes template element from the view.
   * @function
   */
  destroy() {
    this.$element.attr('title', this.template.text())
                 .off('.zf.trigger .zf.tootip')
                //  .removeClass('has-tip')
                 .removeAttr('aria-describedby')
                 .removeAttr('data-yeti-box')
                 .removeAttr('data-toggle')
                 .removeAttr('data-resize');

    this.template.remove();

    Foundation.unregisterPlugin(this);
  }
}

Tooltip.defaults = {
  disableForTouch: false,
  /**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @example 200
   */
  hoverDelay: 200,
  /**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @example 150
   */
  fadeInDuration: 150,
  /**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @example 150
   */
  fadeOutDuration: 150,
  /**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @example false
   */
  disableHover: false,
  /**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @example 'my-cool-tip-class'
   */
  templateClasses: '',
  /**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @example 'tooltip'
   */
  tooltipClass: 'tooltip',
  /**
   * Class applied to the tooltip anchor element.
   * @option
   * @example 'has-tip'
   */
  triggerClass: 'has-tip',
  /**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @example 'small'
   */
  showOn: 'small',
  /**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @example '&lt;div class="tooltip"&gt;&lt;/div&gt;'
   */
  template: '',
  /**
   * Text displayed in the tooltip template on open.
   * @option
   * @example 'Some cool space fact here.'
   */
  tipText: '',
  touchCloseText: 'Tap to close.',
  /**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @example true
   */
  clickOpen: true,
  /**
   * Additional positioning classes, set by the JS
   * @option
   * @example 'top'
   */
  positionClass: '',
  /**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @example 10
   */
  vOffset: 10,
  /**
   * Distance, in pixels, the template should push away from the anchor on the X axis, if aligned to a side.
   * @option
   * @example 12
   */
  hOffset: 12
};

/**
 * TODO utilize resize event trigger
 */

// Window exports
Foundation.plugin(Tooltip, 'Tooltip');

}(jQuery);

'use strict';

!function($) {

Foundation.Box = {
  ImNotTouchingYou: ImNotTouchingYou,
  GetDimensions: GetDimensions,
  GetOffsets: GetOffsets
}

/**
 * Compares the dimensions of an element to a container and determines collision events with container.
 * @function
 * @param {jQuery} element - jQuery object to test for collisions.
 * @param {jQuery} parent - jQuery object to use as bounding container.
 * @param {Boolean} lrOnly - set to true to check left and right values only.
 * @param {Boolean} tbOnly - set to true to check top and bottom values only.
 * @default if no parent object passed, detects collisions with `window`.
 * @returns {Boolean} - true if collision free, false if a collision in any direction.
 */
function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
  var eleDims = GetDimensions(element),
      top, bottom, left, right;

  if (parent) {
    var parDims = GetDimensions(parent);

    bottom = (eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top);
    top    = (eleDims.offset.top >= parDims.offset.top);
    left   = (eleDims.offset.left >= parDims.offset.left);
    right  = (eleDims.offset.left + eleDims.width <= parDims.width);
  }
  else {
    bottom = (eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top);
    top    = (eleDims.offset.top >= eleDims.windowDims.offset.top);
    left   = (eleDims.offset.left >= eleDims.windowDims.offset.left);
    right  = (eleDims.offset.left + eleDims.width <= eleDims.windowDims.width);
  }

  var allDirs = [bottom, top, left, right];

  if (lrOnly) {
    return left === right === true;
  }

  if (tbOnly) {
    return top === bottom === true;
  }

  return allDirs.indexOf(false) === -1;
};

/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */
function GetDimensions(elem, test){
  elem = elem.length ? elem[0] : elem;

  if (elem === window || elem === document) {
    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
  }

  var rect = elem.getBoundingClientRect(),
      parRect = elem.parentNode.getBoundingClientRect(),
      winRect = document.body.getBoundingClientRect(),
      winY = window.pageYOffset,
      winX = window.pageXOffset;

  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + winY,
      left: rect.left + winX
    },
    parentDims: {
      width: parRect.width,
      height: parRect.height,
      offset: {
        top: parRect.top + winY,
        left: parRect.left + winX
      }
    },
    windowDims: {
      width: winRect.width,
      height: winRect.height,
      offset: {
        top: winY,
        left: winX
      }
    }
  }
}

/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */
function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
  var $eleDims = GetDimensions(element),
      $anchorDims = anchor ? GetDimensions(anchor) : null;

  switch (position) {
    case 'top':
      return {
        left: (Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left),
        top: $anchorDims.offset.top - ($eleDims.height + vOffset)
      }
      break;
    case 'left':
      return {
        left: $anchorDims.offset.left - ($eleDims.width + hOffset),
        top: $anchorDims.offset.top
      }
      break;
    case 'right':
      return {
        left: $anchorDims.offset.left + $anchorDims.width + hOffset,
        top: $anchorDims.offset.top
      }
      break;
    case 'center top':
      return {
        left: ($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2),
        top: $anchorDims.offset.top - ($eleDims.height + vOffset)
      }
      break;
    case 'center bottom':
      return {
        left: isOverflow ? hOffset : (($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2)),
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      }
      break;
    case 'center left':
      return {
        left: $anchorDims.offset.left - ($eleDims.width + hOffset),
        top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
      }
      break;
    case 'center right':
      return {
        left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
        top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
      }
      break;
    case 'center':
      return {
        left: ($eleDims.windowDims.offset.left + ($eleDims.windowDims.width / 2)) - ($eleDims.width / 2),
        top: ($eleDims.windowDims.offset.top + ($eleDims.windowDims.height / 2)) - ($eleDims.height / 2)
      }
      break;
    case 'reveal':
      return {
        left: ($eleDims.windowDims.width - $eleDims.width) / 2,
        top: $eleDims.windowDims.offset.top + vOffset
      }
    case 'reveal full':
      return {
        left: $eleDims.windowDims.offset.left,
        top: $eleDims.windowDims.offset.top
      }
      break;
    default:
      return {
        left: (Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left),
        top: $anchorDims.offset.top + $anchorDims.height + vOffset
      }
  }
}

}(jQuery);

/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/

'use strict';

!function($) {

const keyCodes = {
  9: 'TAB',
  13: 'ENTER',
  27: 'ESCAPE',
  32: 'SPACE',
  37: 'ARROW_LEFT',
  38: 'ARROW_UP',
  39: 'ARROW_RIGHT',
  40: 'ARROW_DOWN'
}

var commands = {}

var Keyboard = {
  keys: getKeyCodes(keyCodes),

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  parseKey(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
    if (event.shiftKey) key = `SHIFT_${key}`;
    if (event.ctrlKey) key = `CTRL_${key}`;
    if (event.altKey) key = `ALT_${key}`;
    return key;
  },

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  handleKey(event, component, functions) {
    var commandList = commands[component],
      keyCode = this.parseKey(event),
      cmds,
      command,
      fn;

    if (!commandList) return console.warn('Component not defined!');

    if (typeof commandList.ltr === 'undefined') { // this component does not differentiate between ltr and rtl
        cmds = commandList; // use plain list
    } else { // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
        if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);

        else cmds = $.extend({}, commandList.rtl, commandList.ltr);
    }
    command = cmds[keyCode];

    fn = functions[command];
    if (fn && typeof fn === 'function') { // execute function  if exists
      fn.apply();
      if (functions.handled || typeof functions.handled === 'function') { // execute function when event was handled
          functions.handled.apply();
      }
    } else {
      if (functions.unhandled || typeof functions.unhandled === 'function') { // execute function when event was not handled
          functions.unhandled.apply();
      }
    }
  },

  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
  findFocusable($element) {
    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
      if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) { return false; } //only have visible elements and those that have a tabindex greater or equal 0
      return true;
    });
  },

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */

  register(componentName, cmds) {
    commands[componentName] = cmds;
  }
}

/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function getKeyCodes(kcs) {
  var k = {};
  for (var kc in kcs) k[kcs[kc]] = kcs[kc];
  return k;
}

Foundation.Keyboard = Keyboard;

}(jQuery);

'use strict';

!function($) {

// Default set of media queries
const defaultQueries = {
  'default' : 'only screen',
  landscape : 'only screen and (orientation: landscape)',
  portrait : 'only screen and (orientation: portrait)',
  retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
    'only screen and (min--moz-device-pixel-ratio: 2),' +
    'only screen and (-o-min-device-pixel-ratio: 2/1),' +
    'only screen and (min-device-pixel-ratio: 2),' +
    'only screen and (min-resolution: 192dpi),' +
    'only screen and (min-resolution: 2dppx)'
};

var MediaQuery = {
  queries: [],

  current: '',

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init() {
    var self = this;
    var extractedStyles = $('.foundation-mq').css('font-family');
    var namedQueries;

    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      self.queries.push({
        name: key,
        value: `only screen and (min-width: ${namedQueries[key]})`
      });
    }

    this.current = this._getCurrentSize();

    this._watcher();
  },

  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast(size) {
    var query = this.get(size);

    if (query) {
      return window.matchMedia(query).matches;
    }

    return false;
  },

  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get(size) {
    for (var i in this.queries) {
      var query = this.queries[i];
      if (size === query.name) return query.value;
    }

    return null;
  },

  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize() {
    var matched;

    for (var i in this.queries) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if (typeof matched === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },

  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher() {
    $(window).on('resize.zf.mediaquery', () => {
      var newSize = this._getCurrentSize();

      if (newSize !== this.current) {
        // Broadcast the media query change on the window
        $(window).trigger('changed.zf.mediaquery', [newSize, this.current]);

        // Change the current media query
        this.current = newSize;
      }
    });
  }
};

Foundation.MediaQuery = MediaQuery;

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
window.matchMedia || (window.matchMedia = function() {
  'use strict';

  // For browsers that support matchMedium api such as IE 9 and webkit
  var styleMedia = (window.styleMedia || window.media);

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style   = document.createElement('style'),
    script      = document.getElementsByTagName('script')[0],
    info        = null;

    style.type  = 'text/css';
    style.id    = 'matchmediajs-test';

    script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium(media) {
        var text = `@media ${media}{ #matchmediajs-test { width: 1px; } }`;

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    }
  }

  return function(media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  }
}());

// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function(ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
    return ret;
  }, {});

  return styleObject;
}

Foundation.MediaQuery = MediaQuery;

}(jQuery);

'use strict';

!function($) {

/**
 * Motion module.
 * @module foundation.motion
 */

const initClasses   = ['mui-enter', 'mui-leave'];
const activeClasses = ['mui-enter-active', 'mui-leave-active'];

const Motion = {
  animateIn: function(element, animation, cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function(element, animation, cb) {
    animate(false, element, animation, cb);
  }
}

function Move(duration, elem, fn){
  var anim, prog, start = null;
  // console.log('called');

  function move(ts){
    if(!start) start = window.performance.now();
    // console.log(start, ts);
    prog = ts - start;
    fn.apply(elem);

    if(prog < duration){ anim = window.requestAnimationFrame(move, elem); }
    else{
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }
  anim = window.requestAnimationFrame(move);
}

/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */
function animate(isIn, element, animation, cb) {
  element = $(element).eq(0);

  if (!element.length) return;

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();

  element
    .addClass(animation)
    .css('transition', 'none');

  requestAnimationFrame(() => {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(() => {
    element[0].offsetWidth;
    element
      .css('transition', '')
      .addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one(Foundation.transitionend(element), finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(`${initClass} ${activeClass} ${animation}`);
  }
}

Foundation.Move = Move;
Foundation.Motion = Motion;

}(jQuery);

'use strict';

!function($) {

const Nest = {
  Feather(menu, type = 'zf') {
    menu.attr('role', 'menubar');

    var items = menu.find('li').attr({'role': 'menuitem'}),
        subMenuClass = `is-${type}-submenu`,
        subItemClass = `${subMenuClass}-item`,
        hasSubClass = `is-${type}-submenu-parent`;

    menu.find('a:first').attr('tabindex', 0);

    items.each(function() {
      var $item = $(this),
          $sub = $item.children('ul');

      if ($sub.length) {
        $item
          .addClass(hasSubClass)
          .attr({
            'aria-haspopup': true,
            'aria-expanded': false,
            'aria-label': $item.children('a:first').text()
          });

        $sub
          .addClass(`submenu ${subMenuClass}`)
          .attr({
            'data-submenu': '',
            'aria-hidden': true,
            'role': 'menu'
          });
      }

      if ($item.parent('[data-submenu]').length) {
        $item.addClass(`is-submenu-item ${subItemClass}`);
      }
    });

    return;
  },

  Burn(menu, type) {
    var items = menu.find('li').removeAttr('tabindex'),
        subMenuClass = `is-${type}-submenu`,
        subItemClass = `${subMenuClass}-item`,
        hasSubClass = `is-${type}-submenu-parent`;

    menu
      .find('*')
      .removeClass(`${subMenuClass} ${subItemClass} ${hasSubClass} is-submenu-item submenu is-active`)
      .removeAttr('data-submenu').css('display', '');

    // console.log(      menu.find('.' + subMenuClass + ', .' + subItemClass + ', .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
    //           .removeClass(subMenuClass + ' ' + subItemClass + ' has-submenu is-submenu-item submenu')
    //           .removeAttr('data-submenu'));
    // items.each(function(){
    //   var $item = $(this),
    //       $sub = $item.children('ul');
    //   if($item.parent('[data-submenu]').length){
    //     $item.removeClass('is-submenu-item ' + subItemClass);
    //   }
    //   if($sub.length){
    //     $item.removeClass('has-submenu');
    //     $sub.removeClass('submenu ' + subMenuClass).removeAttr('data-submenu');
    //   }
    // });
  }
}

Foundation.Nest = Nest;

}(jQuery);

'use strict';

!function($) {

function Timer(elem, options, cb) {
  var _this = this,
      duration = options.duration,//options is an object for easily adding features later.
      nameSpace = Object.keys(elem.data())[0] || 'timer',
      remain = -1,
      start,
      timer;

  this.isPaused = false;

  this.restart = function() {
    remain = -1;
    clearTimeout(timer);
    this.start();
  }

  this.start = function() {
    this.isPaused = false;
    // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    remain = remain <= 0 ? duration : remain;
    elem.data('paused', false);
    start = Date.now();
    timer = setTimeout(function(){
      if(options.infinite){
        _this.restart();//rerun the timer.
      }
      cb();
    }, remain);
    elem.trigger(`timerstart.zf.${nameSpace}`);
  }

  this.pause = function() {
    this.isPaused = true;
    //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
    clearTimeout(timer);
    elem.data('paused', true);
    var end = Date.now();
    remain = remain - (end - start);
    elem.trigger(`timerpaused.zf.${nameSpace}`);
  }
}

/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function onImagesLoaded(images, callback){
  var self = this,
      unloaded = images.length;

  if (unloaded === 0) {
    callback();
  }

  images.each(function() {
    if (this.complete) {
      singleImageLoaded();
    }
    else if (typeof this.naturalWidth !== 'undefined' && this.naturalWidth > 0) {
      singleImageLoaded();
    }
    else {
      $(this).one('load', function() {
        singleImageLoaded();
      });
    }
  });

  function singleImageLoaded() {
    unloaded--;
    if (unloaded === 0) {
      callback();
    }
  }
}

Foundation.Timer = Timer;
Foundation.onImagesLoaded = onImagesLoaded;

}(jQuery);

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
(function($) {

  $.spotSwipe = {
    version: '1.0.0',
    enabled: 'ontouchstart' in document.documentElement,
    preventDefault: false,
    moveThreshold: 75,
    timeThreshold: 200
  };

  var   startPosX,
        startPosY,
        startTime,
        elapsedTime,
        isMoving = false;

  function onTouchEnd() {
    //  alert(this);
    this.removeEventListener('touchmove', onTouchMove);
    this.removeEventListener('touchend', onTouchEnd);
    isMoving = false;
  }

  function onTouchMove(e) {
    if ($.spotSwipe.preventDefault) { e.preventDefault(); }
    if(isMoving) {
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      var dx = startPosX - x;
      var dy = startPosY - y;
      var dir;
      elapsedTime = new Date().getTime() - startTime;
      if(Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
        dir = dx > 0 ? 'left' : 'right';
      }
      // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
      //   dir = dy > 0 ? 'down' : 'up';
      // }
      if(dir) {
        e.preventDefault();
        onTouchEnd.call(this);
        $(this).trigger('swipe', dir).trigger(`swipe${dir}`);
      }
    }
  }

  function onTouchStart(e) {
    if (e.touches.length == 1) {
      startPosX = e.touches[0].pageX;
      startPosY = e.touches[0].pageY;
      isMoving = true;
      startTime = new Date().getTime();
      this.addEventListener('touchmove', onTouchMove, false);
      this.addEventListener('touchend', onTouchEnd, false);
    }
  }

  function init() {
    this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
  }

  function teardown() {
    this.removeEventListener('touchstart', onTouchStart);
  }

  $.event.special.swipe = { setup: init };

  $.each(['left', 'up', 'down', 'right'], function () {
    $.event.special[`swipe${this}`] = { setup: function(){
      $(this).on('swipe', $.noop);
    } };
  });
})(jQuery);
/****************************************************
 * Method for adding psuedo drag events to elements *
 ***************************************************/
!function($){
  $.fn.addTouch = function(){
    this.each(function(i,el){
      $(el).bind('touchstart touchmove touchend touchcancel',function(){
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function(event){
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup'
          },
          type = eventTypes[event.type],
          simulatedEvent
        ;

      if('MouseEvent' in window && typeof window.MouseEvent === 'function') {
        simulatedEvent = window.MouseEvent(type, {
          'bubbles': true,
          'cancelable': true,
          'screenX': first.screenX,
          'screenY': first.screenY,
          'clientX': first.clientX,
          'clientY': first.clientY
        });
      } else {
        simulatedEvent = document.createEvent('MouseEvent');
        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
      }
      first.target.dispatchEvent(simulatedEvent);
    };
  };
}(jQuery);


//**********************************
//**From the jQuery Mobile Library**
//**need to recreate functionality**
//**and try to improve if possible**
//**********************************

/* Removing the jQuery function ****
************************************

(function( $, window, undefined ) {

	var $document = $( document ),
		// supportTouch = $.mobile.support.touch,
		touchStartEvent = 'touchstart'//supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = 'touchend'//supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = 'touchmove'//supportTouch ? "touchmove" : "mousemove";

	// setup new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"swipe swipeleft swiperight" ).split( " " ), function( i, name ) {

		$.fn[ name ] = function( fn ) {
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	function triggerCustomEvent( obj, eventType, event, bubble ) {
		var originalType = event.type;
		event.type = eventType;
		if ( bubble ) {
			$.event.trigger( event, undefined, obj );
		} else {
			$.event.dispatch.call( obj, event );
		}
		event.type = originalType;
	}

	// also handles taphold

	// Also handles swipeleft, swiperight
	$.event.special.swipe = {

		// More than this horizontal displacement, and we will suppress scrolling.
		scrollSupressionThreshold: 30,

		// More time than this, and it isn't a swipe.
		durationThreshold: 1000,

		// Swipe horizontal displacement must be more than this.
		horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		// Swipe vertical displacement must be less than this.
		verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		getLocation: function ( event ) {
			var winPageX = window.pageXOffset,
				winPageY = window.pageYOffset,
				x = event.clientX,
				y = event.clientY;

			if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
				event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

				// iOS4 clientX/clientY have the value that should have been
				// in pageX/pageY. While pageX/page/ have the value 0
				x = x - winPageX;
				y = y - winPageY;
			} else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

				// Some Android browsers have totally bogus values for clientX/Y
				// when scrolling/zooming a page. Detectable since clientX/clientY
				// should never be smaller than pageX/pageY minus page scroll
				x = event.pageX - winPageX;
				y = event.pageY - winPageY;
			}

			return {
				x: x,
				y: y
			};
		},

		start: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ]
					};
		},

		handleSwipe: function( start, stop, thisObject, origTarget ) {
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
				var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

				triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
				triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
				return true;
			}
			return false;

		},

		// This serves as a flag to ensure that at most one swipe event event is
		// in work at any given time
		eventInProgress: false,

		setup: function() {
			var events,
				thisObject = this,
				$this = $( thisObject ),
				context = {};

			// Retrieve the events data for this element and add the swipe context
			events = $.data( this, "mobile-events" );
			if ( !events ) {
				events = { length: 0 };
				$.data( this, "mobile-events", events );
			}
			events.length++;
			events.swipe = context;

			context.start = function( event ) {

				// Bail if we're already working on a swipe event
				if ( $.event.special.swipe.eventInProgress ) {
					return;
				}
				$.event.special.swipe.eventInProgress = true;

				var stop,
					start = $.event.special.swipe.start( event ),
					origTarget = event.target,
					emitted = false;

				context.move = function( event ) {
					if ( !start || event.isDefaultPrevented() ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );
					if ( !emitted ) {
						emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
						if ( emitted ) {

							// Reset the context to make way for the next swipe event
							$.event.special.swipe.eventInProgress = false;
						}
					}
					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				};

				context.stop = function() {
						emitted = true;

						// Reset the context to make way for the next swipe event
						$.event.special.swipe.eventInProgress = false;
						$document.off( touchMoveEvent, context.move );
						context.move = null;
				};

				$document.on( touchMoveEvent, context.move )
					.one( touchStopEvent, context.stop );
			};
			$this.on( touchStartEvent, context.start );
		},

		teardown: function() {
			var events, context;

			events = $.data( this, "mobile-events" );
			if ( events ) {
				context = events.swipe;
				delete events.swipe;
				events.length--;
				if ( events.length === 0 ) {
					$.removeData( this, "mobile-events" );
				}
			}

			if ( context ) {
				if ( context.start ) {
					$( this ).off( touchStartEvent, context.start );
				}
				if ( context.move ) {
					$document.off( touchMoveEvent, context.move );
				}
				if ( context.stop ) {
					$document.off( touchStopEvent, context.stop );
				}
			}
		}
	};
	$.each({
		swipeleft: "swipe.left",
		swiperight: "swipe.right"
	}, function( event, sourceEvent ) {

		$.event.special[ event ] = {
			setup: function() {
				$( this ).bind( sourceEvent, $.noop );
			},
			teardown: function() {
				$( this ).unbind( sourceEvent );
			}
		};
	});
})( jQuery, this );
*/

'use strict';

!function($) {

const MutationObserver = (function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  for (var i=0; i < prefixes.length; i++) {
    if (`${prefixes[i]}MutationObserver` in window) {
      return window[`${prefixes[i]}MutationObserver`];
    }
  }
  return false;
}());

const triggers = (el, type) => {
  el.data(type).split(' ').forEach(id => {
    $(`#${id}`)[ type === 'close' ? 'trigger' : 'triggerHandler'](`${type}.zf.trigger`, [el]);
  });
};
// Elements with [data-open] will reveal a plugin that supports it when clicked.
$(document).on('click.zf.trigger', '[data-open]', function() {
  triggers($(this), 'open');
});

// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
$(document).on('click.zf.trigger', '[data-close]', function() {
  let id = $(this).data('close');
  if (id) {
    triggers($(this), 'close');
  }
  else {
    $(this).trigger('close.zf.trigger');
  }
});

// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
$(document).on('click.zf.trigger', '[data-toggle]', function() {
  triggers($(this), 'toggle');
});

// Elements with [data-closable] will respond to close.zf.trigger events.
$(document).on('close.zf.trigger', '[data-closable]', function(e){
  e.stopPropagation();
  let animation = $(this).data('closable');

  if(animation !== ''){
    Foundation.Motion.animateOut($(this), animation, function() {
      $(this).trigger('closed.zf');
    });
  }else{
    $(this).fadeOut().trigger('closed.zf');
  }
});

$(document).on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', function() {
  let id = $(this).data('toggle-focus');
  $(`#${id}`).triggerHandler('toggle.zf.trigger', [$(this)]);
});

/**
* Fires once after all other scripts have loaded
* @function
* @private
*/
$(window).load(() => {
  checkListeners();
});

function checkListeners() {
  eventsListener();
  resizeListener();
  scrollListener();
  closemeListener();
}

//******** only fires this function once on load, if there's something to watch ********
function closemeListener(pluginName) {
  var yetiBoxes = $('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if(pluginName){
    if(typeof pluginName === 'string'){
      plugNames.push(pluginName);
    }else if(typeof pluginName === 'object' && typeof pluginName[0] === 'string'){
      plugNames.concat(pluginName);
    }else{
      console.error('Plugin names must be strings');
    }
  }
  if(yetiBoxes.length){
    let listeners = plugNames.map((name) => {
      return `closeme.zf.${name}`;
    }).join(' ');

    $(window).off(listeners).on(listeners, function(e, pluginId){
      let plugin = e.namespace.split('.')[0];
      let plugins = $(`[data-${plugin}]`).not(`[data-yeti-box="${pluginId}"]`);

      plugins.each(function(){
        let _this = $(this);

        _this.triggerHandler('close.zf.trigger', [_this]);
      });
    });
  }
}

function resizeListener(debounce){
  let timer,
      $nodes = $('[data-resize]');
  if($nodes.length){
    $(window).off('resize.zf.trigger')
    .on('resize.zf.trigger', function(e) {
      if (timer) { clearTimeout(timer); }

      timer = setTimeout(function(){

        if(!MutationObserver){//fallback for IE 9
          $nodes.each(function(){
            $(this).triggerHandler('resizeme.zf.trigger');
          });
        }
        //trigger all listening elements and signal a resize event
        $nodes.attr('data-events', "resize");
      }, debounce || 10);//default time to emit resize event
    });
  }
}

function scrollListener(debounce){
  let timer,
      $nodes = $('[data-scroll]');
  if($nodes.length){
    $(window).off('scroll.zf.trigger')
    .on('scroll.zf.trigger', function(e){
      if(timer){ clearTimeout(timer); }

      timer = setTimeout(function(){

        if(!MutationObserver){//fallback for IE 9
          $nodes.each(function(){
            $(this).triggerHandler('scrollme.zf.trigger');
          });
        }
        //trigger all listening elements and signal a scroll event
        $nodes.attr('data-events', "scroll");
      }, debounce || 10);//default time to emit scroll event
    });
  }
}

function eventsListener() {
  if(!MutationObserver){ return false; }
  let nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

  //element callback
  var listeningElementsMutation = function(mutationRecordsList) {
    var $target = $(mutationRecordsList[0].target);
    //trigger the event handler for the element depending on type
    switch ($target.attr("data-events")) {

      case "resize" :
      $target.triggerHandler('resizeme.zf.trigger', [$target]);
      break;

      case "scroll" :
      $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
      break;

      // case "mutate" :
      // console.log('mutate', $target);
      // $target.triggerHandler('mutate.zf.trigger');
      //
      // //make sure we don't get stuck in an infinite loop from sloppy codeing
      // if ($target.index('[data-mutate]') == $("[data-mutate]").length-1) {
      //   domMutationObserver();
      // }
      // break;

      default :
      return false;
      //nothing
    }
  }

  if(nodes.length){
    //for each element that needs to listen for resizing, scrolling, (or coming soon mutation) add a single observer
    for (var i = 0; i <= nodes.length-1; i++) {
      let elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe(nodes[i], { attributes: true, childList: false, characterData: false, subtree:false, attributeFilter:["data-events"]});
    }
  }
}

// ------------------------------------

// [PH]
// Foundation.CheckWatchers = checkWatchers;
Foundation.IHearYou = checkListeners;
// Foundation.ISeeYou = scrollListener;
// Foundation.IFeelYou = closemeListener;

}(jQuery);

// function domMutationObserver(debounce) {
//   // !!! This is coming soon and needs more work; not active  !!! //
//   var timer,
//   nodes = document.querySelectorAll('[data-mutate]');
//   //
//   if (nodes.length) {
//     // var MutationObserver = (function () {
//     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
//     //   for (var i=0; i < prefixes.length; i++) {
//     //     if (prefixes[i] + 'MutationObserver' in window) {
//     //       return window[prefixes[i] + 'MutationObserver'];
//     //     }
//     //   }
//     //   return false;
//     // }());
//
//
//     //for the body, we need to listen for all changes effecting the style and class attributes
//     var bodyObserver = new MutationObserver(bodyMutation);
//     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
//
//
//     //body callback
//     function bodyMutation(mutate) {
//       //trigger all listening elements and signal a mutation event
//       if (timer) { clearTimeout(timer); }
//
//       timer = setTimeout(function() {
//         bodyObserver.disconnect();
//         $('[data-mutate]').attr('data-events',"mutate");
//       }, debounce || 150);
//     }
//   }
// }

//# sourceMappingURL=all.js.map
