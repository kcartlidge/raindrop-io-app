function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function RdCopyText(a,b){var c=a.createElement("textarea");c.value=b,c.style.top="0",c.style.left="0",c.style.position="fixed",a.body.appendChild(c),c.focus(),c.select(),a.execCommand("copy"),a.body.removeChild(c)}function RdPrompt(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",c=2<arguments.length?arguments[2]:void 0;if("electron"==rdhPlatform){var d=window.open("","prompt","popup,frame=false,width=".concat(350,",height=").concat(100,",left=").concat(screen.width/2-175,",top=").concat(screen.height/2-50));d.document.documentElement.innerHTML=" <meta name=\"color-scheme\" content=\"light dark\"> <style> * { box-sizing: border-box; font: 14px -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; margin: 0; } html, body, form { width: 100vw;height: 100vh;height: -webkit-fill-available; } form { display: flex; flex-direction: column; padding: 1em; gap: 1em; } input[type=\"text\"] { flex: 1; display: block; padding: .5em; } div { display: flex; justify-content: flex-end; gap: .5em; } input[type=\"submit\"] { order: 1; font-weight: bold; } </style> <form><input type=\"text\" autoFocus placeholder=\"".concat(a,"\" /><div><input type=\"submit\" value=\"OK\" /><button>Cancel</button></div></form> ");var f=d.document.querySelector("input[type=\"text\"]");f.value=b;var g=d.document.querySelector("form");g.addEventListener("submit",function(a){a.preventDefault(),d.closed||(c(f.value),d.close())});var h=d.document.querySelector("button");return h.addEventListener("click",function(a){a.preventDefault(),d.closed||(c(b),d.close())}),d.window.addEventListener("keydown",function(a){"Escape"==a.code&&h.click()}),void d.window.addEventListener("blur",()=>{h.click()})}var e=prompt(a,b);c(null===e?b:e)}class RdTooltip{constructor(a,b){var{onColorClick:c,onNoteClick:d,onCopyClick:e,onRemoveClick:f}=b;_defineProperty(this,"_parent",null),_defineProperty(this,"_menu",null),_defineProperty(this,"_listeners",{}),_defineProperty(this,"_hidden",!0),_defineProperty(this,"_colors",["yellow","blue","green","red"]),_defineProperty(this,"_classMenu","rdhm"),_defineProperty(this,"_classButtonColor","rdhbh"),_defineProperty(this,"_classButtonNote","rdhbn"),_defineProperty(this,"_classButtonCopy","rdhbc"),_defineProperty(this,"_classButtonRemove","rdhbr"),_defineProperty(this,"_idCss","rdhss"),_defineProperty(this,"_attrColor","data-rdhsc"),this._parent=a,this._listeners={onColorClick:c,onNoteClick:d,onCopyClick:e,onRemoveClick:f},this._initStyles(),this._initMenu(),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this._windowMouseDown=this._windowMouseDown.bind(this),this._windowResize=this._windowResize.bind(this),this._parent._isMobile?(this._parent._document.removeEventListener("touchstart",this._windowMouseDown),this._parent._document.addEventListener("touchstart",this._windowMouseDown),this._parent._document.removeEventListener("touchend",this._windowMouseUp),this._parent._document.addEventListener("touchend",this._windowMouseUp)):(this._parent._window.removeEventListener("mousedown",this._windowMouseDown),this._parent._window.addEventListener("mousedown",this._windowMouseDown)),this._parent._window.removeEventListener("resize",this._windowResize),this._parent._window.addEventListener("resize",this._windowResize)}show(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",d=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3],e=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],f=a,g=b;this._parent._isMobile&&(f=a-this._menu.offsetWidth/2);var h=this._parent._window.scrollX+10,i=h+this._parent._window.innerWidth-this._menu.offsetWidth-10;f<h&&(f=h),f>i&&(f=i);var j=this._parent._window.scrollY+10,k=j+this._parent._window.innerHeight-this._menu.offsetHeight-10;if(g<j&&(g=j),g>k&&(g=k),this._menu.setAttribute("style","left: ".concat(f,"px !important; top: ").concat(g,"px !important;")),this._menu.querySelectorAll("[".concat(this._attrColor,"]")).forEach(a=>a.removeAttribute("data-active")),c){var n=this._menu.querySelector("[".concat(this._attrColor,"=\"").concat(c.trim(),"\"]"));n&&n.setAttribute("data-active","true")}var l=this._menu.querySelector(".".concat(this._classButtonNote));d?l.setAttribute("data-badge","1"):l.removeAttribute("data-badge");var m=this._menu.querySelector(".".concat(this._classButtonRemove));m.setAttribute("hidden",e?"false":"true"),this._menu.removeAttribute("hidden"),this._hidden=!1}hide(){this._menu&&(this._hidden=!0,this._menu.setAttribute("hidden","true"))}_windowMouseDown(a){this._hidden||a.target==this._menu||this._menu.contains(a.target)||this.hide()}_windowResize(){this._hidden||this.hide()}_colorClick(a){a.preventDefault();"function"!=typeof this._listeners.onColorClick||this._listeners.onColorClick(a.currentTarget.getAttribute(this._attrColor)||"")}_noteClick(a){a.preventDefault();"function"!=typeof this._listeners.onNoteClick||this._listeners.onNoteClick(a.screenX-14,a.screenY-14)}_copyClick(a){a.preventDefault();"function"!=typeof this._listeners.onCopyClick||this._listeners.onCopyClick()}_removeClick(a){a.preventDefault();"function"!=typeof this._listeners.onRemoveClick||this._listeners.onRemoveClick()}_initMenu(){this._menu||(this._menu=this._parent._document.createElement("menu"),this._menu.className=this._classMenu,this._menu.setAttribute("hidden","true"),this._menu.innerHTML=" <li title=\"Add highlight to Raindrop.io\"> ".concat(this._colors.map(a=>" <button class=\"".concat(this._classButtonColor,"\" ").concat(this._attrColor,"=\"").concat(a,"\"><span /></button> ")).join("")," </li> <button class=\"").concat(this._classButtonNote,"\" title=\"Add annotation to Raindrop.io\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M10,2 C14.418278,2 18,5.581722 18,10 C18,14.418278 14.418278,18 10,18 C8.57827688,18 7.24317393,17.629135 6.08615605,16.9788699 L2,18 L3.0222629,13.9158589 C2.37129574,12.7583762 2,11.4225485 2,10 C2,5.581722 5.581722,2 10,2 Z M10,3 C6.13400675,3 3,6.13400675 3,10 C3,11.1072789 3.25670533,12.1753459 3.74159283,13.1395754 L3.89387602,13.4256645 L4.08897687,13.7725727 L3.375,16.625 L6.22947002,15.9123036 L6.57609819,16.107115 C7.61276874,16.6897427 8.78268976,17 10,17 C13.8659932,17 17,13.8659932 17,10 C17,6.13400675 13.8659932,3 10,3 Z M6,9 C6.55228475,9 7,9.44771525 7,10 C7,10.5522847 6.55228475,11 6,11 C5.44771525,11 5,10.5522847 5,10 C5,9.44771525 5.44771525,9 6,9 Z M10,9 C10.5522847,9 11,9.44771525 11,10 C11,10.5522847 10.5522847,11 10,11 C9.44771525,11 9,10.5522847 9,10 C9,9.44771525 9.44771525,9 10,9 Z M14,9 C14.5522847,9 15,9.44771525 15,10 C15,10.5522847 14.5522847,11 14,11 C13.4477153,11 13,10.5522847 13,10 C13,9.44771525 13.4477153,9 14,9 Z\"/></svg> </button> <button class=\"").concat(this._classButtonCopy,"\" title=\"Copy text\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M2 11.5c0 .8.7 1.5 1.5 1.5H7v-1H3.5a.5.5 0 0 1-.5-.5v-8c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5V7H8.5C7.7 7 7 7.7 7 8.5v8c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5v-8c0-.8-.7-1.5-1.5-1.5H13V3.5c0-.8-.7-1.5-1.5-1.5h-8C2.7 2 2 2.7 2 3.5v8Zm6-3c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5h-8a.5.5 0 0 1-.5-.5v-8Z\"/></svg> </button> <button class=\"").concat(this._classButtonRemove,"\" title=\"Delete\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M5.5 2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2 4.5c0-.3.2-.5.5-.5h15a.5.5 0 0 1 0 1H16v12c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5H2.5a.5.5 0 0 1-.5-.5ZM5 5h10v12H5V5Z\"/></svg> </button> "),this._parent._container.appendChild(this._menu),this._menu.querySelectorAll(".".concat(this._classButtonColor)).forEach(a=>{this._colorClick=this._colorClick.bind(this),a.removeEventListener("mousedown",this._colorClick),a.addEventListener("mousedown",this._colorClick)}),this._menu.querySelectorAll(".".concat(this._classButtonNote)).forEach(a=>{this._noteClick=this._noteClick.bind(this),a.removeEventListener("mousedown",this._noteClick),a.addEventListener("mousedown",this._noteClick)}),this._menu.querySelectorAll(".".concat(this._classButtonCopy)).forEach(a=>{"function"==typeof this._listeners.onCopyClick?(this._copyClick=this._copyClick.bind(this),a.removeEventListener("mousedown",this._copyClick),a.addEventListener("mousedown",this._copyClick)):a.setAttribute("hidden","true")}),this._menu.querySelectorAll(".".concat(this._classButtonRemove)).forEach(a=>{this._removeClick=this._removeClick.bind(this),a.removeEventListener("mousedown",this._removeClick),a.addEventListener("mousedown",this._removeClick)}))}_initStyles(){if(!this._parent._container.querySelector("#".concat(this._idCss))){var a=this._parent._document.createElement("style");a.id=this._idCss,a.innerHTML=" :root { --r-menu-bg: Canvas; --r-menu-color: FieldText; --r-menu-active: GrayText; --r-menu-item-width: 30px; --r-menu-item-height: 30px; --r-menu-border-radius: 8px; } @supports (background-color: -apple-system-control-background) { :root { --r-menu-bg: -apple-system-control-background; } } /* mobile */ @media (pointer: coarse) { /* android */ @supports not (-webkit-backdrop-filter: blur(0)) { :root { --r-menu-item-width: 44px; --r-menu-item-height: 48px; --r-menu-border-radius: 24px; } /* android preferes system theme */ @media (prefers-color-scheme: dark) { :root { --r-menu-bg: #282828; --r-menu-color: white; --r-menu-active: rgba(255,255,255,.2); } } @media (prefers-color-scheme: light) { :root { --r-menu-bg: white; --r-menu-color: black; --r-menu-active: rgba(0,0,0,.2); } } } /* ios */ @supports (-webkit-backdrop-filter: blur(0)) { :root { /* ios safari always black */ --r-menu-bg: black; --r-menu-color: white; --r-menu-active: rgba(255,255,255,.3); --r-menu-item-width: 44px; --r-menu-item-height: 38px; --r-menu-border-radius: 8px; } } } .".concat(this._classMenu," { position: absolute !important; display: flex !important; z-index: 99999999 !important; background-color: var(--r-menu-bg) !important; background-image: linear-gradient(to bottom, rgba(255,255,255,.1) 0, rgba(255,255,255,.1) 100%) !important; box-shadow: 0 0 0 .5px rgba(0,0,0,.15), 0 .5px 0 rgba(0,0,0,.1), 0 6px 12px rgba(0,0,0,.1), 0 10px 20px rgba(0,0,0,.05) !important; margin: 4px !important; width: auto !important; height: auto !important; left: 0 !important; top: 0 !important; animation: none !important; transition: opacity .1s ease-in-out, transform .1s ease-in-out !important; will-change: opacity; border: 0 !important; padding: 0 !important; border-radius: var(--r-menu-border-radius) !important; overflow: hidden !important; } .").concat(this._classMenu,", .").concat(this._classMenu," * { margin: 0 !important; } .").concat(this._classMenu,", .").concat(this._classMenu," * { box-sizing: border-box !important; user-select: none !important; -webkit-user-select: none !important; } .").concat(this._classMenu,"[hidden='true'] { transition-duration: .2s !important; pointer-events: none !important; opacity: 0 !important; } .").concat(this._classMenu,"[hidden='false'] { opacity: 1 !important; } /* Dropdown */ .").concat(this._classMenu," > li { display: flex !important; flex-direction: row !important; flex-wrap: wrap !important; } /* Dropdown grow down on desktop on hover */ @media (pointer: fine) { .").concat(this._classMenu," > li { display: grid !important; max-height: var(--r-menu-item-height) !important; transition: max-height .2s ease-in-out !important; transition-delay: .25s !important; will-change: max-height; overflow: hidden !important; } .").concat(this._classMenu," > li:hover { transition-delay: .15s !important; max-height: ").concat(32*this._colors.length,"px !important; } } /* Buttons */ .").concat(this._classMenu," button { -webkit-tap-highlight-color: transparent !important; flex-shrink: 0 !important; cursor: default !important; color: var(--r-menu-color) !important; width: var(--r-menu-item-width) !important; height: var(--r-menu-item-height) !important; appearance: none !important; background: transparent !important; border: 0 !important; border-radius: 0 !important; box-shadow: none !important; margin: 0 !important; padding: 0 !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: none !important; will-change: background, color; filter: none !important; position: relative !important; } .").concat(this._classMenu," button:hover { background: rgba(150,150,150,.2) !important; } .").concat(this._classMenu," button:active { background: var(--r-menu-active) !important; } .").concat(this._classMenu," button[hidden='true'] { display: none !important; } .").concat(this._classMenu," button[hidden='false'] { display: flex !important; } .").concat(this._classMenu," button[data-badge]:before { content: \"\" !important; width: 12px !important; height: 12px !important; border-radius: 6px !important; display: flex !important; align-items: center !important; justify-content: center !important; background: red !important; color: white !important; position: absolute !important; top: 3px !important; right: 2px !important; font-size: 11px !important; line-height: 11px !important; font-weight: 600 !important; } @media (pointer: fine) { .").concat(this._classMenu," button[data-active='true'] { order: -1 !important; } } @media (pointer: coarse) { .").concat(this._classMenu," button[data-active='true'] { display: none !important; } } .").concat(this._classMenu," * { fill: var(--r-menu-color) !important; } /* Color */ .").concat(this._classMenu," button[").concat(this._attrColor,"] span { position: relative !important; background-image: linear-gradient(to bottom, rgba(255,255,255,.3) 0, rgba(255,255,255,.3) 100%) !important; } .").concat(this._classMenu," button[").concat(this._attrColor,"] span, .").concat(this._classMenu," button[").concat(this._attrColor,"] span:before { display: block !important; width: 17px !important; height: 17px !important; border-radius: 17px !important; } ").concat(this._colors.map(a=>" .".concat(this._classMenu," button[").concat(this._attrColor,"=").concat(a,"] span { background-color: ").concat(a," !important; } ")).join("")," .").concat(this._classMenu," button[").concat(this._attrColor,"] span:before { position: absolute !important; content: '' !important; left: 0 !important; top: 0 !important; right: 0 !important; bottom: 0 !important; box-shadow: inset 0 0 0 .5px var(--r-menu-color) !important; opacity: .35; mix-blend-mode: multiply; } "),this._parent._container.appendChild(a)}}}class RdSelection{constructor(a){_defineProperty(this,"_parent",null),_defineProperty(this,"_tooltip",null),this._parent=a,this._tooltip=new RdTooltip(a,{onColorClick:a=>this._parent.addSelection({color:a}),onNoteClick:(a,b)=>this._parent.noteSelection(a,b)}),this.render=this.render.bind(this),this._onSelectionChange=this._onSelectionChange.bind(this),this._parent._document.removeEventListener("selectionchange",this._onSelectionChange),this._parent._document.addEventListener("selectionchange",this._onSelectionChange),this._parent._window.removeEventListener("focus",this.render),this._parent._window.addEventListener("focus",this.render),this._parent._window.removeEventListener("blur",this.render),this._parent._window.addEventListener("blur",this.render),this._onSelectionChange()}have(){var a=this._parent._window.getSelection();return a&&0<a.rangeCount&&!a.isCollapsed&&0<a.toString().trim().length}render(){if(!this._parent.enabled||!this.have()||!this._parent._document.hasFocus())return void this._tooltip.hide();var a=this._parent._window.getSelection(),{x:b,y:c,width:d,height:e}=a.getRangeAt(0).getBoundingClientRect(),f=this._parent._window.scrollX+b+d,g=this._parent._window.scrollY+c-32;this._parent._isMobile&&(f=this._parent._window.scrollX+b+d/2,g=this._parent._window.scrollY+c+e+(80<c?16:80)),this._tooltip.show(f,g)}_onSelectionChange(){clearTimeout(this._selectTimeout),this._tooltip.hide(),this._selectTimeout=setTimeout(this.render,this.have()?this._parent._isMobile?400:250:0)}}class RdHighlight{constructor(a){_defineProperty(this,"_container",null),_defineProperty(this,"_window",null),_defineProperty(this,"_document",null),_defineProperty(this,"_isMobile",matchMedia("(pointer:coarse)").matches),_defineProperty(this,"_selection",null),_defineProperty(this,"_tooltip",null),_defineProperty(this,"_activeMarkId",null),_defineProperty(this,"_attrId","data-rdhid"),_defineProperty(this,"_idCss","rdhs"),_defineProperty(this,"_cssColorVar","--rdhc"),_defineProperty(this,"_classNoteIcon","rdhni"),_defineProperty(this,"_classNav","rdhnav"),_defineProperty(this,"enabled",!1),_defineProperty(this,"pro",!1),_defineProperty(this,"nav",!1),_defineProperty(this,"onUpdate",()=>{}),_defineProperty(this,"onRemove",()=>{}),_defineProperty(this,"onAdd",()=>{}),this._container=a,this._document=this._container.ownerDocument,this._window=this._document.defaultView,this._markClick=this._markClick.bind(this),this._markColorClick=this._markColorClick.bind(this),this._markNoteClick=this._markNoteClick.bind(this),this._markCopyClick=this._markCopyClick.bind(this),this._markRemoveClick=this._markRemoveClick.bind(this),this._navClick=this._navClick.bind(this),this._selection=new RdSelection(this),this._tooltip=new RdTooltip(this,{onColorClick:this._markColorClick,onNoteClick:this._markNoteClick,onCopyClick:this._markCopyClick,onRemoveClick:this._markRemoveClick})}apply(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];if(this.reset(),this._initStyles(),Array.isArray(a))for(var b of a)this.mark(this._getRanges(this._getTextNodes(this._container),b.text),b)}test(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";if(5e3<a.length)return!1;var b=this._getTextNodes(this._container),c=this._getRanges(b,a);return 0<c.length}getSelectionText(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0],b=this._window.getSelection();if(b.rangeCount){var c=b.getRangeAt(0).toString().trim();return a&&!this.test(c)?void alert("Unfortunately we can't add this text"):c}}reset(){this._container.querySelectorAll("mark[".concat(this._attrId,"]")).forEach(a=>a.outerHTML=a.innerText),this._container.querySelectorAll(".".concat(this._classNav)).forEach(a=>a.remove())}scrollToId(a){if(a){var b=this._container.querySelector("mark[".concat(this._attrId,"=\"").concat(a+"","\"]"));b&&b.scrollIntoView((navigator.vendor||"").includes("Apple")?{}:{behavior:"smooth",block:"center"})}}addSelection(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};if("function"==typeof this.onAdd){var b=this.getSelectionText(!0);b&&(this.onAdd(_objectSpread(_objectSpread({},a),{},{text:b})),this._window.getSelection().removeAllRanges())}}noteSelection(){if(!this.pro)return alert("Annotations available in Raindrop.io Pro");var a=this.getSelectionText(!0);a&&RdPrompt("Notes","",b=>{(b||"").trim()&&(this.onAdd({note:b,text:a}),this._window.getSelection().removeAllRanges())})}copySelection(){this._document.execCommand("copy")}mark(a,b){var{_id:c,color:d,note:e}=b;a.forEach((b,f)=>{var g=this._document.createElement("mark");if(g.setAttribute(this._attrId,c),d&&"yellow"!=d&&g.setAttribute("style","".concat(this._cssColorVar,": ").concat(d)),e&&g.setAttribute("title",e),g.addEventListener("click",this._markClick),g.addEventListener("contextmenu",this._markClick),b.surroundContents(g),f==a.length-1&&e&&g.insertAdjacentHTML("beforeend","<svg class=\"".concat(this._classNoteIcon,"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 10\"> <path d=\"M8 0a2 2 0 0 1 2 2v8L6 8H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h6ZM2 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z\"/> </svg>")),this.nav&&0==f){var h=this._document.createElement("a");h.className=this._classNav,h.setAttribute(this._attrId,c);var i=b.getBoundingClientRect();h.setAttribute("style"," ".concat(d&&"yellow"!=d?"".concat(this._cssColorVar,": ").concat(d,";"):""," top: ").concat(100/this._document.documentElement.scrollHeight*(this._window.scrollY+i.top-10),"%; ").trim()),h.addEventListener("click",this._navClick),this._container.appendChild(h)}b.detach()})}_markClick(a){if("A"!=a.currentTarget.parentElement.tagName){a.preventDefault(),a.stopPropagation();var b=a.currentTarget,c=b.getAttribute(this._attrId),d=(getComputedStyle(b).getPropertyValue(this._cssColorVar)||"yellow").trim(),e=b.hasAttribute("title");this._activeMarkId=c,this._tooltip.show(a.pageX+5,a.pageY+5,d,e,!0)}}_markColorClick(a){this._activeMarkId&&(this.onUpdate({_id:this._activeMarkId,color:a}),this._tooltip.hide())}_markNoteClick(){if(!this.pro)return alert("Annotations available in Raindrop.io Pro");if(this._activeMarkId){var a=this._container.querySelector("[".concat(this._attrId,"=\"").concat(this._activeMarkId,"\"]")),b=a.getAttribute("title")||"";RdPrompt("Notes",b,a=>{b!=a&&this.onUpdate({_id:this._activeMarkId,note:a})}),this._tooltip.hide()}}_markCopyClick(){if(this._activeMarkId){var a=this._container.querySelectorAll("mark[".concat(this._attrId,"=\"").concat(this._activeMarkId,"\"]"));if(a.length){var b=new Range;b.setStartBefore(a[0]),b.setEndAfter(a[a.length-1]),RdCopyText(this._document,b.toString()),b.detach()}this._tooltip.hide()}}_markRemoveClick(){if(this._activeMarkId){var a=this._container.querySelector("[".concat(this._attrId,"=\"").concat(this._activeMarkId,"\"]")),b=!0;if(a.hasAttribute("title"))try{b=confirm("Remove highlight?")}catch(a){}b&&(this.onRemove({_id:this._activeMarkId}),this._tooltip.hide())}}_navClick(a){a.preventDefault(),a.stopPropagation();var b=a.currentTarget,c=b.getAttribute(this._attrId);this.scrollToId(c)}_initStyles(){if(!this._container.querySelector("#".concat(this._idCss))){var a=this._document.createElement("style");a.id=this._idCss,a.innerHTML=" mark[".concat(this._attrId,"], .").concat(this._classNav,":before { background: var(").concat(this._cssColorVar,", #ffee00) !important; user-select: none !important; -webkit-user-select: none !important; } mark[").concat(this._attrId,"] { background-image: linear-gradient(to bottom, rgba(255,255,255,.7) 0, rgba(255,255,255,.7) 100%) !important; color: black !important; -webkit-text-fill-color: black !important; cursor: pointer !important; } .").concat(this._classNoteIcon," { display: inline !important; margin: 0 !important; padding: 0 !important; border: 0 !important; color: inherit !important; opacity: 0.5 !important; fill: currentColor !important; background: transparent !important; border-radius: 0 !important; margin-left: 0.3em !important; margin-right: 0.3em !important; width: 0.85em !important; height: 0.85em !important; } .").concat(this._classNav," { position: fixed !important; right: 0px !important; padding: 10px !important; padding-right: 6px !important; cursor: pointer !important; } .").concat(this._classNav,":before { content: '' !important; display: block !important; width: 10px !important; height: 10px !important; border-radius: 10px !important; box-shadow: 0 0 0 0.5px ButtonShadow, 0 5px 30px rgb(0 0 0 / 30%) !important; background-image: linear-gradient(to bottom, rgba(255,255,255,.2) 0, rgba(255,255,255,.2) 100%) !important; } .").concat(this._classNav,":hover:before { background-image: linear-gradient(to bottom, rgba(255,255,255,.5) 0, rgba(255,255,255,.5) 100%) !important; } .").concat(this._classNav,":active { filter: brightness(50%) !important; } "),this._container.appendChild(a)}}_getRanges(a,b){var d=b.replace(/\s+/g,""),e="",f=[],g=function(){for(var i in h.textContent){var c=h.textContent[i];"string"==typeof c&&c.trim()&&(f[e.length]=[h,parseInt(i)],e+=c)}var a=e.indexOf(d);if(-1==a)return"continue";var b=f.slice(a,a+d.length),g=new Map;return b.forEach((a,c)=>{var d=g.get(a[0])||[-1,-1];-1==d[0]&&(d[0]=a[1]),c==b.length-1?d[1]=a[1]+1:-1==d[1]&&(d[1]=a[0].textContent.length),g.set(a[0],d)}),{v:Array.from(g).map(a=>{var b=new Range;return b.setStart(a[0],a[1][0]),b.setEnd(a[0],a[1][1]),b})}};for(var h of a){var i=g();if("continue"!==i&&"object"==typeof i)return i.v}return[]}_getTextNodes(a){if(a&&a.childNodes){var b=[];for(var c of a.childNodes)switch(c.nodeType){case 1:c.hasAttribute(this._attrId)||b.push(...this._getTextNodes(c));break;case 3:b.push(c);}return b}}}var rdh,rdhPlatform,rdhEmbed={enabled:!1,wait:[],send:()=>{},receive:()=>{}};if("object"==typeof chrome&&chrome.runtime&&chrome.runtime.onMessage||"object"==typeof browser&&browser.runtime&&browser.runtime.onMessage){var{runtime}="object"==typeof browser?browser:chrome;rdhEmbed.enabled=!0,rdhEmbed.send=(a,b)=>runtime.sendMessage(null,{type:a,payload:b});var onMessage=(a,b)=>{var{type:c,payload:d}=a;b.id!=runtime.id||"string"!=typeof c||"undefined"!=typeof d&&"object"!=typeof d||rdhEmbed.receive(c,d)};runtime.onMessage.removeListener(onMessage),runtime.onMessage.addListener(onMessage),rdhPlatform="extension"}else if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.rdh)rdhEmbed.enabled=!0,rdhEmbed.send=(a,b)=>window.webkit.messageHandlers.rdh.postMessage({type:a,payload:b}),window.rdhSend=a=>rdhEmbed.receive(a.type,a.payload),rdhPlatform="wkwebview";else if("function"==typeof require){rdhEmbed.enabled=!0;var{ipcRenderer}=require("electron");rdhEmbed.send=(a,b)=>ipcRenderer.sendToHost("RDH",{type:a,payload:b});var _onMessage=(a,b)=>rdhEmbed.receive(b.type,b.payload);ipcRenderer.removeListener("RDH",_onMessage),ipcRenderer.on("RDH",_onMessage),rdhPlatform="electron"}else if("ReactNativeWebView"in window)rdhEmbed.enabled=!0,rdhEmbed.send=(a,b)=>window.ReactNativeWebView.postMessage(JSON.stringify({type:a,payload:b})),window.ReactNativeWebViewSendMessage=a=>rdhEmbed.receive(a.type,a.payload),rdhPlatform="reactnative";else if(window.self!==window.top){rdhEmbed.enabled=!0,rdhEmbed.send=(a,b)=>window.parent.postMessage({type:a,payload:b},"*");var _onMessage2=a=>{var{data:b,source:c}=a;c!==window.parent||"object"!=typeof b||"string"!=typeof b.type||"undefined"!=typeof b.payload&&"object"!=typeof b.payload||rdhEmbed.receive(b.type,b.payload)};window.removeEventListener("message",_onMessage2),window.addEventListener("message",_onMessage2),rdhPlatform="iframe"}if(rdhEmbed.enabled){function a(){function b(){if(window.removeEventListener("DOMContentLoaded",a),rdh=new RdHighlight(document.body),rdh.onUpdate=a=>rdhEmbed.send("RDH_UPDATE",a),rdh.onRemove=a=>rdhEmbed.send("RDH_REMOVE",a),rdh.onAdd=a=>rdhEmbed.send("RDH_ADD",a),rdhEmbed.wait.length){for(var{type:b,payload:c}of rdhEmbed.wait)rdhEmbed.receive(b,c);rdhEmbed.enabled=[]}rdhEmbed.send("RDH_READY",{url:location.href}),window.addEventListener("load",()=>{rdhEmbed.send("RDH_READY",{url:location.href})})}clearTimeout(window._rh_delay),window._rh_delay=setTimeout(b,150)}rdhEmbed.receive=(a,b)=>rdh?void("RDH_APPLY"===a?rdh.apply(b):"RDH_CONFIG"===a?("boolean"==typeof b.enabled&&(rdh.enabled=b.enabled),"boolean"==typeof b.pro&&(rdh.pro=b.pro),"boolean"==typeof b.nav&&(rdh.nav=b.nav)):"RDH_SCROLL"===a?rdh.scrollToId(b._id):"RDH_ADD_SELECTION"===a?rdh.addSelection(b):"RDH_NOTE_SELECTION"===a?rdh.noteSelection():void 0):void rdhEmbed.wait.push({type:a,payload:b}),"loading"==document.readyState?(window.removeEventListener("DOMContentLoaded",a),window.addEventListener("DOMContentLoaded",a)):a()}
