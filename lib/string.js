var e=function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];return"string"==typeof e&&(r>=1&&n.push(e.slice(0,r)),null!==t?(n.push(e.slice(r,t)),n.push(e.slice(t))):n.push(e.slice(r))),n}},r=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"single";if("string"==typeof e){var t=e;return t="multiple"===r?t.toLowerCase().replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))})):t.trimStart().replace(/^\w/,(function(e){return e.toUpperCase()}))}};export{r as capitalize,e as split};