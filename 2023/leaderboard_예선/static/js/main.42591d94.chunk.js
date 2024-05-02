(this["webpackJsonpdeepracer-board"]=this["webpackJsonpdeepracer-board"]||[]).push([[0],{135:function(e,t,a){e.exports=a(549)},534:function(e,t,a){},535:function(e,t,a){},546:function(e,t,a){},549:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(122),i=a.n(s),l=a(128),o=a(43);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(131),u=a(49),m=r.a.createContext({cart:{itemCount:0},items:[],user:null,clearCart:function(){},addItemToCart:function(e,t){},addItems:function(e){},storeUser:function(e){}}),h=function(e){var t=e.children,a={cart:{items:[]},items:[],user:null,addItemToCart:function(e,t){o((function(a){var n=Object.assign({},a);return n.cart.items.push({id:e.id,quantity:t}),Object(u.a)({},a,{cart:{items:n.cart.items}})}))},incrementItems:function(){o((function(e){return Object(u.a)({},e,{cart:{itemCount:e.cart.itemCount+1}})}))},addItems:function(e){o((function(t){return Object(u.a)({},t,{items:e})}))},storeUser:function(e){o((function(t){return Object(u.a)({},t,{user:e})}))},clearCart:function(){o((function(e){return Object(u.a)({},e,{cart:{items:[]}})}))}},s=Object(n.useState)(a),i=Object(c.a)(s,2),l=i[0],o=i[1];return r.a.createElement(m.Provider,{value:l},t)},p=a(7),d=a(8),g=a(10),v=a(9),f=a(11),b=a(14),y=a.n(b),E=a(17),k=a(16),w=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e="".concat(this.props.pathPrefix,"/league/").concat(this.props.item.league),t="".concat(this.props.pathPrefix,"/racers/").concat(this.props.item.league);return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,r.a.createElement("img",{src:this.props.item.logo,alt:"logo",className:"icon-logo"})),r.a.createElement("div",null,r.a.createElement("a",{href:e},this.props.item.title)),r.a.createElement("div",null,r.a.createElement("a",{href:t},this.props.item.league))))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a.getLeagues=Object(E.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("leagues","/items/all");case 2:(t=e.sent)&&t.length>0&&a.reloaded(t);case 4:case"end":return e.stop()}}),e)}))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getLeagues()}},{key:"reloaded",value:function(e){var t=e.sort(this.compare).reverse();this.setState({items:t})}},{key:"compare",value:function(e,t){var a=e.registered,n=t.registered;return a<n?-1:a>n?1:0}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t,a){return r.a.createElement(w,{key:a,item:t,pathPrefix:e.props.pathPrefix})}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"lb-items"},r.a.createElement("div",{className:"lb-header lb-rank0"},r.a.createElement("div",null,"Logo"),r.a.createElement("div",null,"Title"),r.a.createElement("div",null,"Code")),t))}}]),t}(n.Component),O=(a(534),a(535),function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{alt:"deepracer",src:"https://deepracer-logos.s3.ap-northeast-2.amazonaws.com/logo_deepracer.png"}))),r.a.createElement(_,{pathPrefix:""}),r.a.createElement("div",{className:"center"},r.a.createElement("a",{href:"/manage",className:"btn-link"},"Manage")))}}]),t}(n.Component)),j=a(34),C=a.n(j),N=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={logo:"",title:"",timeout:3e3},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"start",value:function(e){this.setState({logo:this.props.logo,title:this.props.title}),e||(e=this.state.timeout),C()(".pop-logo").fadeIn().delay(e).fadeOut()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pop-logo"},r.a.createElement("div",{className:"pop-bg"}),r.a.createElement("div",{className:"pop-container"},r.a.createElement("div",{className:"pop-header"},r.a.createElement("img",{src:this.state.logo,alt:"deepracer"})),r.a.createElement("div",{className:"pop-message"},this.state.title))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={logo:"/icon-trophy.png",title:"",dateClose:"",dateOpen:"",timeZone:""},a.getLeague=Object(E.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.league&&"undefined"!==a.props.league){e.next=2;break}return e.abrupt("return");case 2:return console.log("getLeague ".concat(a.props.league)),e.next=5,k.a.get("leagues","/items/object/".concat(a.props.league));case 5:(t=e.sent)&&t.league&&a.setState({logo:t.logo,title:t.title,dateClose:t.dateClose,dateOpen:t.dateOpen,timeZone:t.timeZone});case 7:case"end":return e.stop()}}),e)}))),a.handleKey=function(e){console.log("handleKey ".concat(e.keyCode)),13===e.keyCode&&a.tada()},a.logoCmp=r.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getLeague(),document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"tada",value:function(){this.logoCmp.current.start(3500)}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{id:"logo",src:this.state.logo,alt:"deepracer"})),r.a.createElement("h1",{id:"title",className:"title"},this.state.title),r.a.createElement(N,{ref:this.logoCmp,logo:this.state.logo,title:this.state.title}))}}]),t}(n.Component),A=a(57),S=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={alpha:.8,count:300,frameInterval:15,gradient:!1,speed:2,timeout:1e3},a.supportsAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,a.colors=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],a.context=null,a.lastFrameTime=Date.now(),a.particles=[],a.streaming=!1,a.waveAngle=0,a.animate=function(e){if(0===a.particles.length)e.clearRect(0,0,window.innerWidth,window.innerHeight);else{var t=Date.now(),n=t-a.lastFrameTime;(!a.supportsAnimationFrame||n>a.state.frameInterval)&&(e.clearRect(0,0,window.innerWidth,window.innerHeight),a.update(),a.draw(e),a.lastFrameTime=t-n%a.state.frameInterval)}requestAnimationFrame((function(){return a.animate(e)}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){var e=window.innerWidth,t=window.innerHeight,a=document.getElementById("pollen-canvas");null===a?((a=document.createElement("canvas")).setAttribute("id","pollen-canvas"),a.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(a),a.width=e,a.height=t,window.addEventListener("resize",(function(){a.width=window.innerWidth,a.height=window.innerHeight}),!0),this.context=a.getContext("2d")):null===this.context&&(this.context=a.getContext("2d")),this.animate(this.context)}},{key:"start",value:function(e){this.streaming=!0;for(var t=window.innerWidth,a=window.innerHeight;this.particles.length<this.state.count;)this.particles.push(this.particle(t,a));e||(e=this.state.timeout),setTimeout(function(){this.stop()}.bind(this),e)}},{key:"stop",value:function(){this.streaming=!1}},{key:"particle",value:function(e,t){return{color1:this.colors[Math.random()*this.colors.length|0]+(this.state.alpha+")"),color2:this.colors[Math.random()*this.colors.length|0]+(this.state.alpha+")"),diameter:10*Math.random()+10,tilt:10*Math.random()-10,tiltAngle:Math.random()*Math.PI,tiltAngleIncrement:.07*Math.random()+.05,x:Math.random()*e,y:Math.random()*t-t}}},{key:"update",value:function(){for(var e,t=window.innerWidth,a=window.innerHeight,n=0;n<this.particles.length;n++)e=this.particles[n],!this.streaming&&e.y<-15?e.y=a+100:(e.y+=.5*(e.diameter+this.state.speed),e.tiltAngle+=e.tiltAngleIncrement,e.tilt=15*Math.sin(e.tiltAngle)),e.y>a&&(this.streaming?this.particles[n]=this.particle(t,a):(this.particles.splice(n,1),n--))}},{key:"draw",value:function(e){for(var t,a,n,r,s=0;s<this.particles.length;s++){if(t=this.particles[s],e.beginPath(),e.lineWidth=t.diameter,a=(n=t.x+t.tilt)+t.diameter/2,r=t.y+t.tilt+t.diameter/2,this.state.gradient){var i=e.createLinearGradient(a,t.y,n,r);i.addColorStop("0.0",t.color1),i.addColorStop("1.0",t.color2),e.strokeStyle=i}else e.strokeStyle=t.color1;e.moveTo(a,t.y),e.lineTo(n,r),e.stroke()}}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"canvas",className:"pollen"}))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={popInfo:{rank:"",header:"",message:"",footer:""},timeout:1e3},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"start",value:function(e,t){this.props.popInfo&&this.setState({popInfo:this.props.popInfo}),e||(e=this.state.timeout),t&&this.setState({popInfo:{rank:this.state.rank,header:this.state.header,message:t,footer:this.state.footer}}),C()(".pop-layer").fadeIn().delay(e).fadeOut()}},{key:"render",value:function(){var e="pop-message pop-rank".concat(this.state.popInfo.rank);return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pop-layer"},r.a.createElement("div",{className:"pop-bg"}),r.a.createElement("div",{className:"pop-container"},r.a.createElement("div",{className:"pop-header"},this.state.popInfo.header),r.a.createElement("div",{className:e},this.state.popInfo.message),r.a.createElement("div",{className:"pop-footer"},this.state.popInfo.footer))))}}]),t}(n.Component),I=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e="lb-row lb-rank".concat(this.props.rank),t=this.props.rank,a="";return t<4&&(a=r.a.createElement("img",{src:"/icon-trophy.png",alt:"trophy",className:"icon-trophy"})),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:e},r.a.createElement("div",null,a," ",t),r.a.createElement("div",null,this.props.item.racerName),r.a.createElement("div",null,this.props.item.laptime)))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).interval=200,a.defaultTimeout=6e5/a.interval,a.timeout=a.defaultTimeout,a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.countdown.bind(this),this.interval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"countdown",value:function(){this.timeout--,this.timeout<=0&&this.scroll("down")}},{key:"scroll",value:function(e){console.log("scroll: ".concat(e)),this.timeout=this.defaultTimeout,e||(e="down");var t=0,a=1e3;if("down"===e){if((e=this.props.items)<=5)return;e>100&&(e=100),t=C()(".lb-rank".concat(e)).offset().top,a=1e3*e}else e<=5?t=0:(e-=5,t=C()(".lb-rank".concat(e)).offset().top),a=1e3;0===t?C()("html, body").stop().animate({scrollTop:t},a):C()("html, body").stop().animate({scrollTop:t},a).delay(5e3).animate({scrollTop:0},1e3)}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"scroller"}))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={items:[],popInfo:{rank:"",header:"",message:"",footer:""}},a.getRacers=Object(E.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getRacers ".concat(a.props.league)),e.next=3,k.a.get("racers","/items/".concat(a.props.league));case 3:(t=e.sent)&&t.length>0&&a.reloaded(t);case 5:case"end":return e.stop()}}),e)}))),a.handleKey=function(e){console.log("handleKey ".concat(e.keyCode)),13===e.keyCode&&setTimeout(function(){this.tada(1,0)}.bind(Object(A.a)(a)),4e3)},a.pollenCmp=r.a.createRef(),a.popupCmp=r.a.createRef(),a.scrollCmp=r.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getRacers(),this.intervalId=setInterval(this.getRacers.bind(this),1e4),document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId),document.removeEventListener("keydown",this.handleKey)}},{key:"reloaded",value:function(e){var t=e.sort(this.compare);if(t.length<this.state.items.length)this.setState({items:t});else{var a=0,n=0;t.length>this.state.items.length&&this.state.items.length>0&&(a=t.length,n=2);for(var r=0;r<this.state.items.length;r++)if(this.state.items[r].racerName!==t[r].racerName||this.state.items[r].laptime!==t[r].laptime){a=r+1,n=1;break}this.setState({items:t}),a>0&&this.tada(a,n)}}},{key:"tada",value:function(e,t){if(0!==this.state.items.length){var a;a=1===t?"New Record!":2===t?"New Challenger!":"Congratulations!";var n=this.state.items[e-1].racerName,r=this.state.items[e-1].laptime;if(this.setState({popInfo:{rank:e,header:a,message:n,footer:r}}),console.log("tada ".concat(e," ").concat(n," ").concat(r)),this.scrollCmp.current.scroll(e),this.pollenCmp.current.start(5e3),this.popupCmp.current.start(5e3),0===t){var s=new Audio("/fanfare.mp3");s.loop=!1,s.play()}}}},{key:"compare",value:function(e,t){var a=e.laptime.split(":"),n=t.laptime.split(":"),r=60*+a[0]+ +a[1],s=60*+n[0]+ +n[1];return r<s?-1:r>s?1:0}},{key:"render",value:function(){var e=this.state.items.map((function(e,t){return r.a.createElement(I,{key:t,rank:t+1,item:e})}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"lb-items"},r.a.createElement("div",{className:"lb-header lb-rank0"},r.a.createElement("div",null,"Rank"),r.a.createElement("div",null,"Name"),r.a.createElement("div",null,"Time")),e),r.a.createElement(S,{ref:this.pollenCmp}),r.a.createElement(L,{ref:this.popupCmp,popInfo:this.state.popInfo}),r.a.createElement(F,{ref:this.scrollCmp,items:this.state.items.length}),r.a.createElement("footer",{className:"lb-footer"}))}}]),t}(n.Component),T=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"App-header"},r.a.createElement(x,{league:this.props.match.params.league})),r.a.createElement("div",{className:"App-body"},r.a.createElement(R,{league:this.props.match.params.league})))}}]),t}(n.Component),M=a(40),z={header:"Create an Account",hiddenDefaults:["phone_number"],defaultCountryCode:"82",signUpFields:[{label:"First name",key:"given_name",required:!0,displayOrder:100,type:"string"},{label:"Last name",key:"family_name",required:!0,displayOrder:101,type:"string"}]},D=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a.getLeagues=Object(E.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("leagues","/items");case 2:(t=e.sent)&&t.length>0&&a.reloaded(t);case 4:case"end":return e.stop()}}),e)}))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getLeagues()}},{key:"reloaded",value:function(e){var t=e.sort(this.compare).reverse();this.setState({items:t})}},{key:"compare",value:function(e,t){var a=e.registered,n=t.registered;return a<n?-1:a>n?1:0}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t,a){return r.a.createElement(w,{key:a,item:t,pathPrefix:e.props.pathPrefix})}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"lb-items"},r.a.createElement("div",{className:"lb-header lb-rank0"},r.a.createElement("div",null,"Logo"),r.a.createElement("div",null,"League"),r.a.createElement("div",null,"Racers")),t))}}]),t}(n.Component),U=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"App-header auth"},r.a.createElement(M.a,{usernameAttributes:"email"})),r.a.createElement("div",{className:"App-body"},r.a.createElement(D,{pathPrefix:"/manage"})),r.a.createElement("div",{className:"center"},r.a.createElement("a",{href:"/manage/league",className:"btn-link"},"Create")))}}]),t}(n.Component),P=Object(M.b)(U,{usernameAttributes:"email",signUpConfig:z}),q=a(39),Z=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={defaultLogo:!1,league_class:"text_normal width_80",league_read:!1,league:"",logo_class:"text_normal width_80",logo:"",title_class:"text_normal width_80",title:""},a.logos=[{url:"https://deepracer-logos.s3.ap-northeast-2.amazonaws.com/logo_deepracer.png"}],a.getLeague=Object(E.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.league){e.next=2;break}return e.abrupt("return");case 2:return console.log("getLeague: ".concat(a.props.league)),e.next=5,k.a.get("leagues","/items/object/".concat(a.props.league));case 5:t=e.sent,console.log("getLeague: ".concat(JSON.stringify(t,null,2))),t&&t.league&&(a.setState({league:t.league,title:t.title,logo:t.logo,league_read:!0}),a.validateAll());case 8:case"end":return e.stop()}}),e)}))),a.postLeague=Object(E.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("postLeague"),e.prev=1,t={league:a.state.league,title:a.state.title,logo:a.state.logo},console.log("postLeague: ".concat(JSON.stringify(t,null,2))),e.next=6,k.a.post("leagues","/items",{body:t});case 6:n=e.sent,console.log("postLeague: ".concat(JSON.stringify(n,null,2))),a.popupCmp.current.start(3e3,"Saved!"),a.props.league||(a.setState({league:"",title:"",logo:""}),a.props.history.push("/manage/league/".concat(a.state.league))),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("postLeague: ".concat(JSON.stringify(e.t0,null,2))),a.popupCmp.current.start(3e3,e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,12]])}))),a.handleChange=function(e){var t=e.target.value;switch(e.target.name){case"league":t=t.replace(/[^a-z0-9-_]/g,"");break;case"title":document.getElementById("title").innerText=t;break;case"logo":document.getElementById("logo").src=t}a.setState(Object(q.a)({},e.target.name,t)),a.validate(e.target.name,t)},a.handleLogo=function(e){a.setState({logo:e.target.src}),document.getElementById("logo").src=e.target.src},a.handleChangeTZ=function(e){a.setState({dateTZ:e})},a.handleSubmit=function(e){e.preventDefault(),a.validateAll()&&a.postLeague()},a.popupCmp=r.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getLeague()}},{key:"validateString",value:function(e){return/^([a-z][a-z0-9-_]{3,19})$/g.test(e)}},{key:"validateUrl",value:function(e){return/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/g.test(e)}},{key:"validateDate",value:function(e){return/^([0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2})$/.test(e)}},{key:"getClassValue",value:function(e,t){return e?"text_normal ".concat(t):"text_red ".concat(t)}},{key:"validateLeague",value:function(e){var t=""!==e&&this.validateString(e);return this.setState({league_class:this.getClassValue(e,"width_80")}),t}},{key:"validateTitle",value:function(e){var t=""!==e;return this.setState({title_class:this.getClassValue(t,"width_80")}),t}},{key:"validateLogo",value:function(e){var t=""!==e&&this.validateUrl(e);return this.setState({logo_class:this.getClassValue(t,"width_80")}),t}},{key:"validateDateClose",value:function(e){var t=""===e||this.validateDate(e);return this.setState({dateClose_class:this.getClassValue(t)}),t}},{key:"validateDateOpen",value:function(e){var t=""===e||this.validateDate(e);return this.setState({dateOpen_class:this.getClassValue(t)}),t}},{key:"validateAll",value:function(){var e=this.validateLeague(this.state.league);return e=this.validateTitle(this.state.title)&&e,e=this.validateLogo(this.state.logo)&&e}},{key:"validate",value:function(e,t){var a=!1;switch(e){case"league":a=this.validateLeague(t);break;case"title":a=this.validateTitle(t);break;case"logo":a=this.validateLogo(t);break;case"dateClose":a=this.validateDateClose(t);break;case"dateOpen":a=this.validateDateOpen(t)}return a}},{key:"render",value:function(){var e=this,t=this.logos.map((function(t,a){return r.a.createElement("img",{key:a,src:t.url,onClick:e.handleLogo,alt:"logo",className:"icon-logo"})}));return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"lb-submit"},r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,"League"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"league",value:this.state.league,onChange:this.handleChange,className:this.state.league_class,readOnly:this.state.league_read,placeholder:"Only lowercase letters and numbers and -_",autoComplete:"off",maxLength:"20"}))),r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,"Title"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,className:this.state.title_class,placeholder:"",autoComplete:"off",maxLength:"64"}))),r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,"Logo"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"logo",value:this.state.logo,onChange:this.handleChange,className:this.state.logo_class,placeholder:"Logo uri, including http:// or https://",autoComplete:"off",maxLength:"256"}),t)),r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn-submit"},"Save"))))),r.a.createElement(L,{ref:this.popupCmp}))}}]),t}(n.Component),W=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"App-header auth"},r.a.createElement(M.a,{usernameAttributes:"email"})),r.a.createElement("header",{className:"App-header"},r.a.createElement(x,{league:this.props.match.params.league})),r.a.createElement("div",{className:"App-body"},r.a.createElement(Z,{league:this.props.match.params.league})))}}]),t}(n.Component),K=Object(M.b)(W,{usernameAttributes:"email",signUpConfig:z}),V=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={email_class:"text_normal width_80",email:"",forceUpdate:!1,laptime_class:"text_normal",laptime:"",racerName_class:"text_normal width_80",racerName:""},a.postRacer=Object(E.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("postRacer"),e.prev=1,t={league:a.props.league,email:a.state.email,racerName:a.state.racerName,laptime:a.state.laptime,forceUpdate:a.state.forceUpdate},console.log("postRacer: "+JSON.stringify(t,null,2)),e.next=6,k.a.post("racers","/items",{body:t});case 6:n=e.sent,console.log("postRacer: "+JSON.stringify(n,null,2)),a.popupCmp.current.start(3e3,"Saved!"),a.setState({email:"",racerName:"",laptime:"",forceUpdate:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("postRacer: "+JSON.stringify(e.t0,null,2)),a.popupCmp.current.start(3e3,e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,12]])}))),a.handleChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value)),a.validate(e.target.name,e.target.value)},a.handleCheckBox=function(e){a.setState(Object(q.a)({},e.target.name,e.target.checked))},a.handleSubmit=function(e){e.preventDefault(),a.validateAll()&&a.postRacer()},a.popupCmp=r.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\].,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}},{key:"validateTime",value:function(e){return/^([0-9]{2}:[0-9]{2}\.[0-9]{3})$/.test(e)}},{key:"getClassValue",value:function(e,t){return e?"text_normal ".concat(t):"text_red ".concat(t)}},{key:"validateRacerEmail",value:function(e){var t=""!==e&&this.validateEmail(e);return this.setState({email_class:this.getClassValue(e,"width_80")}),t}},{key:"validateRacerName",value:function(e){var t=""!==e;return this.setState({racerName_class:this.getClassValue(t,"width_80")}),t}},{key:"validateRacerTime",value:function(e){var t=""!==e&&this.validateTime(e);return this.setState({laptime_class:this.getClassValue(t)}),t}},{key:"validateAll",value:function(){var e=this.validateRacerEmail(this.state.email);return e=this.validateRacerName(this.state.racerName)&&e,e=this.validateRacerTime(this.state.laptime)&&e}},{key:"validate",value:function(e,t){var a=!1;switch(e){case"email":a=this.validateRacerEmail(t);break;case"racerName":a=this.validateRacerName(t);break;case"laptime":a=this.validateRacerTime(t);break;case"forceUpdate":a=!0}return a}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"lb-submit"},r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,"Email"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange,className:this.state.email_class,placeholder:"",autoComplete:"off",maxLength:"256"}))),r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,"Name"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"racerName",value:this.state.racerName,onChange:this.handleChange,className:this.state.racerName_class,placeholder:"",autoComplete:"off",maxLength:"32"}))),r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,"Time"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"laptime",value:this.state.laptime,onChange:this.handleChange,className:this.state.laptime_class,placeholder:"00:00.000",autoComplete:"off",maxLength:"9"}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"forceUpdate",value:"Y",checked:this.state.forceUpdate,onChange:this.handleCheckBox,className:"checkbox"})," Force update"))),r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn-submit"},"Save"))))),r.a.createElement(L,{ref:this.popupCmp}))}}]),t}(n.Component),J=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"App-header auth"},r.a.createElement(M.a,{usernameAttributes:"email"})),r.a.createElement("header",{className:"App-header"},r.a.createElement(x,{league:this.props.match.params.league})),r.a.createElement("div",{className:"App-body"},r.a.createElement(V,{league:this.props.match.params.league})))}}]),t}(n.Component),B=Object(M.b)(J,{usernameAttributes:"email",signUpConfig:z}),H=a(52),$=a.n(H),G=(a(546),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={bestlap:"",display:"00:00.000",limiter:"00:00.000",results:"",limiterClass:$()("tm-limiter",{"tm-limiter_yellow":!1,"tm-limiter_red":!1})},a.limit=[],a.times=[],a.records=[],a.running=!1,a.time=null,a.btnMap={btn_start:"start",btn_pause:"pause",btn_passed:"passed",btn_reset:"reset",btn_clear:"clear",btn_squeeze:"squeeze"},a.keyMap={81:"start",87:"pause",69:"passed",82:"reset",84:"clear",89:"squeeze"},a.handleClick=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.exec(a.btnMap[t.target.id]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleKeyDown=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.exec(a.keyMap[t.keyCode]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){C()(document.body).on("keydown",this.handleKeyDown),this.clear()}},{key:"componentWillUnmount",value:function(){C()(document.body).off("keydown",this.handleKeyDown)}},{key:"exec",value:function(e){switch(e){case"start":this.start();break;case"pause":this.pause();break;case"passed":this.passed();break;case"press":this.press();break;case"reset":this.reset();break;case"clear":this.clear();break;case"squeeze":this.squeeze()}}},{key:"start",value:function(){this.time||(this.time=performance.now()),this.running||(this.running=!0,requestAnimationFrame(this.step.bind(this)))}},{key:"pause",value:function(){this.time=null,this.running=!1}},{key:"passed",value:function(){this.time&&(this.times[0]>0||this.times[1]>3)&&(this.record(),this.restart())}},{key:"reset",value:function(){this.times=[0,0,0],this.print(),this.pause()}},{key:"clear",value:function(){this.time||(this.records=[],this.limit=[4,0,0],this.reset(),this.setState({bestlap:"",results:""}))}},{key:"press",value:function(){var e=(new Date).getTime();(!this.pressed||e-this.pressed>3e3)&&(this.passed(),this.pressed=(new Date).getTime())}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"step",value:function(e){this.running&&(this.calculate(e),this.time=e,this.print(),requestAnimationFrame(this.step.bind(this)))}},{key:"calculate",value:function(e){var t=e-this.time;if(this.limit[2]-=t,this.limit[2]<0&&(this.limit[2]+=1e3,this.limit[1]-=1),this.limit[1]<0&&(this.limit[1]+=60,this.limit[0]-=1),this.limit[0]<0)return this.limit[2]=0,this.limit[1]=0,this.limit[0]=0,void this.pause();this.times[2]+=t,this.times[2]>=1e3&&(this.times[2]-=1e3,this.times[1]+=1),this.times[1]>=60&&(this.times[1]-=60,this.times[0]+=1),this.times[0]>=60&&(this.times[0]-=60),this.times[2]<0&&(this.times[2]=0)}},{key:"print",value:function(){this.setState({limiter:this.format(this.limit),display:this.format(this.times)}),this.limit[0]<=0&&this.limit[1]<=30?this.setState({limiterClass:$()("tm-limiter",{"tm-limiter_yellow":!1,"tm-limiter_red":!0})}):this.limit[0]<=0&&this.limit[1]<=60?this.setState({limiterClass:$()("tm-limiter",{"tm-limiter_yellow":!0,"tm-limiter_red":!1})}):this.setState({limiterClass:$()("tm-limiter",{"tm-limiter_yellow":!1,"tm-limiter_red":!1})})}},{key:"record",value:function(){console.log("record ".concat(this.format(this.times))),this.records.push(this.times),this.results()}},{key:"squeeze",value:function(){if(0!==this.records.length){var e=this.records[this.records.length-1];console.log("squeeze ".concat(this.format(e))),this.pause(),this.times[2]+=e[2],this.times[1]+=e[1],this.times[0]+=e[0],this.times[2]>=1e3&&(this.times[2]-=1e3,this.times[1]+=1),this.times[1]>=60&&(this.times[1]-=60,this.times[0]+=1),this.times[0]>=60&&(this.times[0]-=60),this.times[2]<0&&(this.times[2]=0),this.records.splice(this.records.length-1,1),this.results(),this.start()}}},{key:"results",value:function(){var e=this,t=this.records.slice();t.sort(this.compare);var a=this.records.map((function(t,a){return r.a.createElement("li",{key:a},e.format(t))}));this.setState({bestlap:this.format(t[0]),results:a})}},{key:"format",value:function(e){return"".concat(this.lpad(e[0],2),":").concat(this.lpad(e[1],2),".").concat(this.lpad(Math.floor(e[2]),3))}},{key:"compare",value:function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:e[1]<t[1]?-1:e[1]>t[1]?1:e[2]<t[2]?-1:e[2]>t[2]?1:0}},{key:"lpad",value:function(e,t){var a="000"+e;return a.substr(a.length-t)}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:"tm-controls"},r.a.createElement("button",{id:"btn_start",className:"tm-button tm-btn_start",onClick:this.handleClick},"Start"),r.a.createElement("button",{id:"btn_pause",className:"tm-button tm-btn_pause",onClick:this.handleClick},"Pause"),r.a.createElement("button",{id:"btn_passed",className:"tm-button tm-btn_passed",onClick:this.handleClick},"Passed"),r.a.createElement("button",{id:"btn_reset",className:"tm-button tm-btn_reset",onClick:this.handleClick},"Reset"),r.a.createElement("button",{id:"btn_clear",className:"tm-button tm-btn_clear",onClick:this.handleClick},"Clear")),r.a.createElement("div",{className:this.state.limiterClass},this.state.limiter),r.a.createElement("div",{className:"tm-display"},this.state.display),r.a.createElement("div",{className:"tm-bestlap"},this.state.bestlap),r.a.createElement("ul",{className:"tm-results"},this.state.results))}}]),t}(n.Component)),Q=a(18),Y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={url:"",uploading:!1},a.uploadFile=function(){var e=Object(E.a)(y.a.mark((function e(t){var a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(Q.v4)(),e.next=3,k.c.currentAuthenticatedUser();case 3:return n=e.sent,e.next=6,k.d.put(a,t,{customPrefix:{public:"origin/"},metadata:{owner:n.username}});case 6:r=e.sent,console.log("Uploaded: ",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleUpload=function(){var e=Object(E.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a.setState({uploading:!0}),n=[],r=0;r<t.target.files.length;r++)n.push(t.target.files.item(r));Promise.all(n.map((function(e){return a.uploadFile(e)}))),a.setState({uploading:!1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"file",onChange:this.handleUpload,className:"input_file",accept:"image/png, image/jpeg"}))}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={logo:""},a.handleChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault()},a.uploadCmp=r.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"App-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"lb-submit"},r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null,"Logo"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"logo",value:this.state.logo,onChange:this.handleChange,className:"text_normal width_80",autoComplete:"off",maxLength:"256"}),r.a.createElement(Y,{ref:this.uploadCmp}))),r.a.createElement("div",{className:"lb-row"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn-submit"},"Save")))))))}}]),t}(n.Component),ee={aws_project_region:"ap-northeast-2",aws_content_delivery_bucket:"deepracer-board-20200131113635-hostingbucket-dev",aws_content_delivery_bucket_region:"ap-northeast-2",aws_content_delivery_url:"https://dk9572xf4hcic.cloudfront.net",aws_cognito_identity_pool_id:"ap-northeast-2:ba046e4a-9059-44f7-a46e-2ef7461a26df",aws_cognito_region:"ap-northeast-2",aws_user_pools_id:"ap-northeast-2_QTbZgP1Jw",aws_user_pools_web_client_id:"75rrtas6m56o0r99j76r4otjmm",oauth:{},aws_cognito_login_mechanisms:["EMAIL"],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"],aws_mobile_analytics_app_id:"5ad0a0f945f94b1d9deefeaa080d53c0",aws_mobile_analytics_app_region:"us-west-2",aws_dynamodb_all_tables_region:"ap-northeast-2",aws_dynamodb_table_schemas:[{tableName:"deepracer-board-racers-dev",region:"ap-northeast-2"},{tableName:"deepracer-board-leagues-dev",region:"ap-northeast-2"}],aws_user_files_s3_bucket:"deepracer-board-logosdev-dev",aws_user_files_s3_bucket_region:"ap-northeast-2",aws_cloud_logic_custom:[{name:"racers",endpoint:"https://uefxhov2c3.execute-api.ap-northeast-2.amazonaws.com/dev",region:"ap-northeast-2"},{name:"leagues",endpoint:"https://u9bp80y80m.execute-api.ap-northeast-2.amazonaws.com/dev",region:"ap-northeast-2"}]};k.e.configure(ee),k.b.record("Page_Load"),k.b.autoTrack("pageView",{enable:!0,type:"SPA"});var te=r.a.createElement(h,null,r.a.createElement(l.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:O}),r.a.createElement(o.a,{path:"/manage/racers/:league",component:B}),r.a.createElement(o.a,{path:"/manage/league/:league",component:K}),r.a.createElement(o.a,{path:"/manage/league/",component:K}),r.a.createElement(o.a,{path:"/manage/",component:P}),r.a.createElement(o.a,{path:"/racers/:league",component:T}),r.a.createElement(o.a,{path:"/league/:league",component:T}),r.a.createElement(o.a,{path:"/timer",component:G}),r.a.createElement(o.a,{path:"/upload",component:X}),r.a.createElement(o.a,{component:O}))));i.a.render(te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t){}},[[135,1,2]]]);
//# sourceMappingURL=main.42591d94.chunk.js.map