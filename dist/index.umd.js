!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).alevent={})}(this,function(t){function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r=/*#__PURE__*/function(){function t(){this.events=new Map}var e=t.prototype;return e.on=function(t,e,n){void 0===n&&(n=-1),this.events.has(t)||this.events.set(t,[]);var r=this.events.get(t);n<0||n>=r.length?r.push(e):r.splice(n,0,e)},e.off=function(t,e){this.events.has(t)&&this.events.set(t,this.events.get(t).filter(function(t){return t!==e}))},e.emit=function(t,e){if(this.events.has(t))for(var r,i=n(this.events.get(t));!(r=i()).done&&!1!==(0,r.value)(e););},t}(),i=/*#__PURE__*/function(){function t(){var t=this;this.handlers=new Map,this.dispatchHandler=function(e){if(e instanceof CustomEvent){var r=e.type;if(t.handlers.has(r))for(var i,o=n(t.handlers.get(r));!(i=o()).done;){var a=i.value;if(e.detail.stopPropagation)break;!1===a(e.detail.data)&&(e.detail.stopPropagation=!0)}}}}var e=t.prototype;return e.on=function(t,e,n){void 0===n&&(n=-1),this.handlers.has(t)||this.handlers.set(t,[]);var r=this.handlers.get(t);n<0||n>=r.length?r.push(e):r.splice(n,0,e),window.addEventListener(t,this.dispatchHandler)},e.off=function(t,e){this.handlers.has(t)&&(this.handlers.set(t,this.handlers.get(t).filter(function(t){return t!==e})),0===this.handlers.get(t).length&&window.removeEventListener(t,this.dispatchHandler))},e.emit=function(t,e){window.dispatchEvent(new CustomEvent(t,{detail:{data:e,stopPropagation:!1}}))},t}();t.AppEventBus=r,t.GlobalEventBus=i});
//# sourceMappingURL=index.umd.js.map
