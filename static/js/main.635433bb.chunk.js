(this.webpackJsonpants=this.webpackJsonpants||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/GitHub.ec6c0035.svg"},,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),o=n.n(s),r=n(2),u=n(1),c=n(10),l=(n(16),function(e){var t=e.posX,n=e.posY,a=e.radius,s=e.opacity;return i.a.createElement("div",{className:"dot",style:{height:2*a+"px",width:2*a+"px",left:t-a+"px",top:n-a+"px",opacity:s}})}),p=(n(17),n(8)),h=n.n(p),d=function(e){var t=e.fields,n=e.update,s=Object(a.useState)(!1),o=Object(r.a)(s,2),u=o[0],c=o[1];return i.a.createElement("div",{id:"dock"},i.a.createElement("div",{className:"ctrl"+(u?" open":" closed")},i.a.createElement("div",{className:"settings"},t.map((function(e,t){return i.a.createElement(a.Fragment,{key:t},i.a.createElement("label",null,e.label||e.key," ",i.a.createElement("span",{className:"value"},e.value)),i.a.createElement("input",{type:"range",value:e.value,min:e.min,max:e.max,step:e.step,onChange:function(t){return n(e.key,Number(t.target.value))}}))}))),i.a.createElement("div",{className:"source"},i.a.createElement("a",{href:"https://github.com/rasmusmerzin/ants"},i.a.createElement("img",{src:h.a,alt:"source"})))),i.a.createElement("button",{className:"door"+(u?" open":" closed"),onClick:function(){return c((function(e){return!e}))}},"\u2261"))},g=n(9),m=n(5),f=2*Math.PI,v=function(e){return(f+Math.atan(e[1]/e[0])+(e[0]<0?Math.PI:0))%f},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return[Math.cos(e)*t,Math.sin(e)*t]},w=function(e){return e*Math.PI/180},b=function(){function e(t){Object(g.a)(this,e),this.posX=void 0,this.posY=void 0,this.velX=0,this.velY=0,this._agility=w(30),this.speed=void 0,this.minSpeed=void 0,this.maxSpeed=void 0,this.distancingRange=void 0,this.distancingFactor=void 0,this.posX=t.posX||Math.random()*window.innerWidth,this.posY=t.posY||Math.random()*window.innerHeight,this.agility=t.agility,this.speed=t.speed,this.minSpeed=t.minSpeed,this.maxSpeed=t.maxSpeed,this.distancingRange=t.distancingRange,this.distancingFactor=t.distancingFactor}return Object(m.a)(e,[{key:"pos",get:function(){return[this.posX,this.posY]},set:function(e){this.posX=e[0],this.posY=e[1]}},{key:"vel",get:function(){return[this.velX,this.velY]},set:function(e){this.velX=e[0],this.velY=e[1]}},{key:"angle",get:function(){return v(this.vel)}},{key:"agility",set:function(e){this._agility=w(e)}}]),Object(m.a)(e,[{key:"getPushes",value:function(e){var t=this;return e.map((function(e){if(e!==t){var n=function(e,t,n){var a=[t[0]-e[0],t[1]-e[1]];return a[0]>n[0]/2&&(a[0]-=n[0]),a[1]>n[1]/2&&(a[1]-=n[1]),a}(t.pos,e.pos,[window.innerWidth,window.innerHeight]);if(n[0]<=t.distancingRange&&n[1]<=t.distancingRange){var a=(i=n,Math.pow(Math.pow(i[0],2)+Math.pow(i[1],2),.5));return a<=t.distancingRange?{posDiff:n,distance:a}:null}return null}return null;var i})).filter((function(e){return null!==e}))}},{key:"calcPush",value:function(e){return Math.min(this.minSpeed+this.distancingFactor*this.distancingRange/e-1,this.maxSpeed)}},{key:"updatePosition",value:function(){return this.posX+=window.innerWidth+this.velX,this.posY+=window.innerHeight+this.velY,this.posX%=window.innerWidth,this.posY%=window.innerHeight,this}},{key:"updateVelocity",value:function(e){var t=this,n=this.getPushes(e);if(n.length>0){var a=[0,0];n.forEach((function(e){var n=v(e.posDiff)+Math.PI,i=y(n,t.calcPush(e.distance));a[0]+=i[0],a[1]+=i[1]})),this.vel=a}else{var i=this.angle;isNaN(i)&&(i=0),i+=2*(Math.random()-.5)*this._agility;var s=y(i,this.speed),o=Object(r.a)(s,2);this.velX=o[0],this.velY=o[1]}return this}}]),e}(),E=(n(18),function(e,t){switch(t.type){case"updateAntVelocities":var n=Object(c.a)(e.ants);return e.mouseDown&&n.push({pos:e.mousePos}),e.touches.forEach((function(e){return n.push({pos:e})})),e.ants.forEach((function(e){return e.updateVelocity(n)})),Object(u.a)({},e);case"updateAntPositions":return e.ants.forEach((function(e){return e.updatePosition()})),Object(u.a)({},e);case"updateSettings":if(t.setting&&t.value){if("count"===t.setting){for(;e.ants.length<t.value;)e.ants.push(new b(e.antSettings));for(;e.ants.length>t.value;)e.ants.pop();return Object(u.a)({},e)}if("renderRate"===t.setting)return Object(u.a)({},e,{renderRate:t.value});var a=t.setting,i=t.value;return e.antSettings[a]=i,e.ants.forEach((function(e){e[a]=i})),Object(u.a)({},e)}break;case"mouseDown":return Object(u.a)({},e,{mouseDown:!0,mousePos:t.pos||e.mousePos});case"mouseUp":return Object(u.a)({},e,{mouseDown:!1,mousePos:t.pos||e.mousePos});case"mouseMove":if(t.pos)return Object(u.a)({},e,{mousePos:t.pos});break;case"touch":if(e.touches=[],t.touches)for(var s=0;s<t.touches.length;s++){var o=t.touches.item(s);o&&e.touches.push([o.clientX,o.clientY])}return Object(u.a)({},e)}return e}),k=function(){var e=Object(a.useReducer)(E,{renderRate:60,ants:[],antSettings:{agility:30,speed:6,minSpeed:1,maxSpeed:10,distancingRange:100,distancingFactor:2},mousePos:[0,0],mouseDown:!1,touches:[]}),t=Object(r.a)(e,2),n=t[0],s=t[1];return i.a.useEffect((function(){return s({type:"updateSettings",setting:"count",value:30})}),[]),i.a.useEffect((function(){var e=setInterval((function(){s({type:"updateAntPositions"}),s({type:"updateAntVelocities"})}),1e3/n.renderRate);return console.log("render init"),function(){return clearInterval(e)}}),[n.renderRate]),i.a.createElement("div",{id:"app"},i.a.createElement("div",{id:"canvas",onMouseDown:function(e){return s({type:"mouseDown",pos:[e.clientX,e.clientY]})},onMouseMove:function(e){return s({type:"mouseMove",pos:[e.clientX,e.clientY]})},onMouseUp:function(){return s({type:"mouseUp"})},onTouchStart:function(e){return s({type:"touch",touches:e.touches})},onTouchMove:function(e){return s({type:"touch",touches:e.touches})},onTouchEnd:function(e){return s({type:"touch",touches:e.touches})},style:{cursor:n.mouseDown?"grab":"pointer"}},n.ants.map((function(e,t){return i.a.createElement(l,{key:t,posX:e.posX,posY:e.posY,radius:5})})),n.mouseDown&&i.a.createElement(l,{posX:n.mousePos[0],posY:n.mousePos[1],radius:n.antSettings.distancingRange,opacity:.1}),n.touches.map((function(e,t){return i.a.createElement(l,{key:t,posX:e[0],posY:e[1],radius:n.antSettings.distancingRange,opacity:.1})}))),i.a.createElement(d,{fields:[{key:"renderRate",label:"render rate",value:n.renderRate,min:1,max:60,step:1},{key:"count",value:n.ants.length,min:1,max:200},{key:"agility",value:n.antSettings.agility,min:1,max:90},{key:"speed",value:n.antSettings.speed,min:1,max:50},{key:"distancingRange",label:"distancing range",value:n.antSettings.distancingRange,min:10,max:200,step:10},{key:"distancingFactor",label:"distancing factor",value:n.antSettings.distancingFactor,min:.1,max:4,step:.1}],update:function(e,t){return s({type:"updateSettings",setting:e,value:t})}}))};o.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.635433bb.chunk.js.map