"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{3845:function(o,A,i){i.d(A,{Z:function(){return r}});var K,n=i(168),t=i(6562).ZP.button(K||(K=(0,n.Z)(["\n  margin-top: 70px;\n  margin-bottom: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  background-color: #fff;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  border: 1px solid black;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: black;\n\n  &:hover {\n    border-color: red;\n  }\n"]))),e=i(184),r=function(o){var A=o.onClick;return(0,e.jsx)(t,{type:"button",onClick:A,children:"Load more"})}},5073:function(o,A,i){i.d(A,{Z:function(){return w}});var K,n,t,e,r=i(1087),g=i(7689),a=i(4757),C=i(168),p=i(6562),c=p.ZP.ul(K||(K=(0,C.Z)(["\n  display: flex;\n  gap: 30px;\n  row-gap: 90px;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-wrap: wrap;\n  list-style: none;\n  justify-content: center;\n"]))),s=p.ZP.li(n||(n=(0,C.Z)(["\n  width: 210px;\n  height: 310px;\n  > a {\n    width: 210px;\n    height: 310px;\n    /* margin-top: 50px; */\n    text-decoration: none;\n    color: black;\n    width: 200px;\n\n    &:hover {\n      color: red;\n    }\n  }\n"]))),l=p.ZP.img(t||(t=(0,C.Z)(["\n  /* width: 200px; */\n  width: 100%;\n  height: 100%;\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"]))),f=p.ZP.p(e||(e=(0,C.Z)(["\n  width: 100%;\n  font-size: 18px;\n  text-align: center;\n  margin: 0;\n  padding: 10px;\n"]))),u=i(184),w=function(o){var A=o.movies,i=(0,g.TH)();return(0,u.jsx)(c,{children:A.map((function(o){return(0,u.jsx)(s,{children:(0,u.jsxs)(r.rU,{to:"/movies/".concat(o.id),state:{from:i},children:[null!==o.poster_path&&(0,u.jsx)(l,{src:"".concat("https://image.tmdb.org/t/p/w500"+o.poster_path),alt:o.title,width:"200"}),null===o.poster_path&&(0,u.jsx)("img",{src:a,alt:o.title}),(0,u.jsxs)(f,{children:[o.title,o.name]})]})},o.id)}))})}},6336:function(o,A,i){i.r(A),i.d(A,{default:function(){return E}});var K,n,t,e=i(3433),r=i(9439),g=i(1087),a=i(2791),C=i(1737),p=i(3845),c=i(5073),s=i(168),l=i(6562),f=l.ZP.form(K||(K=(0,s.Z)(["\n  margin-top: 25px;\n  text-align: center;\n"]))),u=l.ZP.input(n||(n=(0,s.Z)(["\n  width: 300px;\n  height: 25px;\n"]))),w=l.ZP.button(t||(t=(0,s.Z)(["\n  cursor: pointer;\n  height: 25px;\n"]))),x=i(5861),h=i(7757),d=i.n(h),m=i(1243),v=function(){var o=(0,x.Z)(d().mark((function o(A,i){var K;return d().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return"https://api.themoviedb.org/3","2ec93d095b3f7dd7321ac567053c0ad5",o.next=4,m.Z.get("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("2ec93d095b3f7dd7321ac567053c0ad5","&query=").concat(A,"&page=").concat(i,"&language=en-US&page=1&include_adult=false"));case 4:return K=o.sent,o.abrupt("return",K);case 6:case"end":return o.stop()}}),o)})));return function(A,i){return o.apply(this,arguments)}}(),D=v,b=i(184),E=function(){var o,A=(0,a.useState)([]),i=(0,r.Z)(A,2),K=i[0],n=i[1],t=(0,a.useState)(1),s=(0,r.Z)(t,2),l=s[0],x=s[1],h=(0,a.useState)(!1),d=(0,r.Z)(h,2),m=d[0],v=d[1],E=(0,a.useState)(null),j=(0,r.Z)(E,2),Z=j[0],B=j[1],P=(0,a.useState)(null),R=(0,r.Z)(P,2),S=R[0],H=R[1],F=(0,g.lr)(),M=(0,r.Z)(F,2),Q=M[0],y=M[1],k=null!==(o=Q.get("movieId"))&&void 0!==o?o:"";console.log(k),(0,a.useEffect)((function(){k&&(v(!0),D(k.trim(),l).then((function(o){return console.log(o.data),n(1===l?o.data.results:function(A){return[].concat((0,e.Z)(A),(0,e.Z)(o.data.results))}),H(o.data.total_results)})).catch((function(o){B(o)})).finally((function(){return v(!1)})))}),[k,l]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(f,{onSubmit:function(o){o.preventDefault();var A=o.currentTarget.elements.movieId.value;if(""===A.trim())return y({}),void alert("Fill out the field, please.");y({movieId:A}),x(1),n([]),H(null),o.currentTarget.reset()},children:[(0,b.jsx)(u,{type:"text",name:"movieId",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsx)(w,{type:"submit",children:(0,b.jsx)("span",{children:"Search"})})]}),m&&(0,b.jsx)(C.Z,{}),Z&&(0,b.jsx)("h2",{children:Z.message}),K&&!m&&(0,b.jsx)(c.Z,{movies:K}),K.length<S&&!m&&(0,b.jsx)(p.Z,{onClick:function(){x((function(o){return o+1}))}})]})}},4757:function(o){o.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAE2AM4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9lKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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9namziuJhjqiSK5J7eQ5/hJr6y/ZP/bQ+FPhL/glXpP9peK/DdpdeG/Cd1pOoaJLexrfy3apLH5S25PmSGd2VlKqQwlySBuI+xfDvgbRfCHgy18OaXpGmWHh+ztfsMGmQ2yLZx25BUxeVjaUILZBB3bjnOTnwK+/4JDfs56h4q/tiT4aWazF9/2eLVL6KzznOBAswjC/7IAXHGMcUcoNnyv/AMEtfg34T1v/AIJhfEC3+LmoW/h/wD488TxWtrfXV4tkqzRpbRR3EUz/ACqRdIEVmGwtCwPANYkmqfEH/gk9+0v8M/B/hL4sQ/FL4f8AjS/iiTw4zrI1vBJcxRECEPItu7+dujlgZVkdH3JtUg/pP41+Angv4ifCdvAes+F9GvPBpgjtl0dYPJtYY4yGjEax7fL2MoKlMEEda85+Bn/BNL4H/s4eNofEnhLwDY2euWrF7a8ury6vns2II3RCeR1jfBI3qNwzwRRyiPlH9p7xFpvw7/4L9fDnVNd1Gz0nS10m1Bvr2ZYLdA9rfQKzOxCqpl+XJIGe9cv/AMFib6z1b9sn4FeNIvF11o/gnVrGC2tvFuhXHn/2YYNSdri6tpImw0kKTRyAo2Tt45Ffef7SH7EPwv8A2tptPn8feFYNavNJjMNrdx3c9ncRxEljEZIHRmj3EttYkAkkYyc6OtfsjfDTxH8C9L+GmoeDdJvvA+iRpHp+mXHmSCy27sPFKW81JPnf5w4Y7255o5QPiTx5+w78M/ifq3hNfGP7aGueOt2pQR6LZ6h4httUkluJpI1WO3RriRlaQhFLKvpnpVr9pmKO/wD+Dgn4T+dHHJ/xL7KYK6hgrrDqDo3P8SsqsD1BUEYIr6R+GP8AwSn+APwh8aWPiHRfh9ANY0u5S8s57zVL28W1mjIZJFSWZk3KwBBIOCARjFela9+zD4B8UfHHS/iVqHhixuvHeiwi3stYeWYTQIBIoAQOIzgSyAEoSN3XpRygd2owopaKKoAooooAKKKKACiiigAooooAKKKKACiiigAooooAMkHjig8tmiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q=="}}]);
//# sourceMappingURL=336.6242c9cf.chunk.js.map