(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(t,e){},162:function(t,e,a){t.exports=a(177)},168:function(t,e,a){},169:function(t,e,a){},173:function(t,e){},177:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),i=a(98),r=a.n(i),l=(a(167),a(168),a(3)),c=a(2),s=a(6),h=a(77),u=a(7),m=(a(169),a(32)),p=a.n(m),d=a(40),g=a(0),v=a(34),f=a(140),b=a(69),E=a(149),w=a(141),C=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={start:"",dest:"",goal:"Minimize Elevation Gain",limit:"0",algorithm:"Uniform Cost Search",loading:!1},t.handleChange=function(e){t.setState(Object(g.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.setState({loading:!0});fetch("/route",{method:"POST",body:JSON.stringify(t.state)}).then(function(){var e=Object(d.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:n=e.sent,console.log(n),t.props.updateData(n),t.setState({loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}))},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement(E.a,{body:!0,style:{width:"400px",background:"rgba(0, 0, 0, 0.5)",color:"#ffffff",marginTop:"5%",marginLeft:"5%"}},o.a.createElement(v.a,{onSubmit:function(e){t.handleSubmit(e)}},o.a.createElement(v.a.Row,null,o.a.createElement(v.a.Group,{as:b.a,controlId:"start"},o.a.createElement(v.a.Label,null,"Start Location"),o.a.createElement(v.a.Control,{type:"text",placeholder:"Enter start location",value:this.state.start,onChange:function(e){t.handleChange(e)}}))),o.a.createElement(v.a.Row,null,o.a.createElement(v.a.Group,{as:b.a,controlId:"dest"},o.a.createElement(v.a.Label,null,"End Location"),o.a.createElement(v.a.Control,{type:"text",placeholder:"Enter end location",value:this.state.dest,onChange:function(e){t.handleChange(e)}}))),o.a.createElement(v.a.Row,null,o.a.createElement(v.a.Group,{as:b.a,controlId:"algorithm"},o.a.createElement(v.a.Label,null,"Algorithm"),o.a.createElement(v.a.Control,{as:"select",value:this.state.algorithm,onChange:function(e){t.handleChange(e)}},o.a.createElement("option",null,"Uniform Cost Search"),o.a.createElement("option",null,"A Star"),o.a.createElement("option",null,"Breadth First Search")))),o.a.createElement(v.a.Row,null,o.a.createElement(v.a.Group,{as:b.a,controlId:"goal"},o.a.createElement(v.a.Label,null,"Optimization"),o.a.createElement(v.a.Control,{as:"select",value:this.state.goal,onChange:function(e){t.handleChange(e)}},o.a.createElement("option",null,"Minimize Elevation Gain"),o.a.createElement("option",null,"Maximize Elevation Gain")))),o.a.createElement(v.a.Row,null,o.a.createElement(v.a.Group,{as:b.a,controlId:"limit"},o.a.createElement(v.a.Label,null,"Deviation Limit (x%)"),o.a.createElement(v.a.Control,{type:"number",placeholder:"x%",value:this.state.limit,onChange:function(e){t.handleChange(e)}}))),o.a.createElement(v.a.Row,{className:"justify-content-md-center"},o.a.createElement(f.a,{variant:"light",type:"submit"},this.state.loading?o.a.createElement(w.a,{animation:"border"}):"Submit"))))}}]),a}(n.Component),S=a(191),y=a(195),O=a(196),j=a(145),x=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t,e=this,a=this.props.data,n=new y.a({id:"path-layer",data:a,pickable:!0,widthScale:5,widthMinPixels:2,getColor:[255,255,255]}),i=new O.a((t={id:"icon-layer",startPinData:[{name:"Colma (COLM)",address:"365 D Street, Colma CA 94014",exits:4214,coordinates:[42.20515744581611,-72.19204888633023]}],pickable:!0,getIcon:function(t){return{url:"https://img.icons8.com/color/50/000000/map-pin.png",width:128,height:128,anchorY:128}}},Object(g.a)(t,"getIcon",(function(t){return"marker"})),Object(g.a)(t,"sizeScale",15),Object(g.a)(t,"getPosition",(function(t){return t.coordinates})),Object(g.a)(t,"getSize",(function(t){return 5})),Object(g.a)(t,"getColor",(function(t){return[Math.sqrt(t.exits),140,0]})),t)),r={top:"auto",left:"auto",zIndex:"0",marginTop:this.props.marginTop};return o.a.createElement(S.a,{viewState:this.props.viewport,onViewStateChange:function(t){e.props._onViewStateChange(t)},controller:!0,layers:[n,i],width:this.props.width,height:this.props.height,style:r},o.a.createElement(j.a,{mapStyle:"mapbox://styles/mapbox/dark-v10",onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:"pk.eyJ1IjoibmlsYXkxODA4IiwiYSI6ImNrOG1iaXp0cjBkeTEzZm12N3l3ODJweWEifQ.TDhSzGcCsjt5CsVRljpcrw"}))}}]),a}(o.a.Component),I=a(190),M=a(122),k=a(123),z=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).updateData=function(t){console.log("update");var e=[];e.push(t),n.setState({data:e});var a=Math.max(Math.floor((t.path.length-1)/2),0),o=t.path[a],i=n.state.viewport,r=n.calculateZoom(t.path);i.latitude=o[1],i.longitude=o[0],i.zoom=r,i.transitionDuration=5e3,i.transitionInterpolator=new I.a,n.setState({viewport:i}),console.log(n.state),n.updateHeight()},n.updateHeight=function(){"100vh"===n.state.height?n.setState({height:"99vh",marginTop:"1vh"}):n.setState({height:"100vh",marginTop:"0vh"})},n.calculateZoom=function(t){var e=t[0],a=t[t.length-1],o=n.haversine(e[1],e[0],a[1],a[0]);return console.log(o),o<=1500?14.5:o<=5e3?13:o<=15e3?12:10},n.haversine=function(t,e,a,n){var o=t*Math.PI/180,i=a*Math.PI/180,r=(a-t)*Math.PI/180,l=(n-e)*Math.PI/180,c=Math.sin(r/2)*Math.sin(r/2)+Math.cos(o)*Math.cos(i)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))},n.state={data:[],viewport:{latitude:42.20515744581611,longitude:-72.19204888633023,zoom:7.5,bearing:0,pitch:0},height:"99vh",width:"100vw",marginTop:"1vh"},n._onViewStateChange=n._onViewStateChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"_onViewStateChange",value:function(t){var e=t.viewState;this.setState({viewport:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App",style:{background:"rgb(23, 24, 24)",position:"relative",alignItems:"bottom"}},o.a.createElement("div",{style:{zIndex:0,position:"absolute"}},o.a.createElement(x,{data:this.state.data,viewport:this.state.viewport,_onViewStateChange:this._onViewStateChange,height:this.state.height,width:this.state.width,marginTop:this.state.marginTop})),o.a.createElement("div",{style:{zIndex:9,height:"100vh"}},o.a.createElement(M.a,{variant:"dark",style:{height:"8vh",background:"rgba(0, 0, 0, 0.5)"},className:"ml-auto"},o.a.createElement(M.a.Brand,{style:{marginLeft:"15px"}},"EleNa: Elevation-based Navigation"),o.a.createElement(k.a,{className:"ml-auto"},o.a.createElement(k.a.Link,{href:"https://github.com",style:{borderLeft:"solid 1px grey"}},"Github"))),o.a.createElement("div",null,o.a.createElement(C,{className:"userInput",updateData:this.updateData,payload:this.state}))))}}]),a}(n.Component);r.a.render(o.a.createElement(z,null),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.645f8722.chunk.js.map