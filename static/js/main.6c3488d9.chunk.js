(this["webpackJsonpreact-to-the-movies"]=this["webpackJsonpreact-to-the-movies"]||[]).push([[0],{254:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(53),a(16)),i=a(17),m=a(20),s=a(18),u=a(21),d=a(5),h=a(47),p=a(44),E=a(45),v=a(46);function b(e){var t=e.data,a=e.isFavorite,n=!0===a?"warning":"dark",o=!0===a?E.a:v.a,l="N/A"!==t.Poster?t.Poster:"/react-to-the-movies/no-poster.jpg";return r.a.createElement(d.Card,{className:"h-100 shadow-sm bg-white rounded",style:{width:"280px"}},r.a.createElement(d.Card.Image,{variant:"top",src:l,style:{width:"280px",height:"340px"}}),r.a.createElement(d.Card.Body,{className:"d-flex flex-column"},r.a.createElement("div",{className:"d-flex mb-2 justify-content-between"},r.a.createElement(d.Card.Title,{className:"mb-0 font-weight-bold"},t.Title),r.a.createElement(p.a,{icon:o,className:"text-"+n})),r.a.createElement(d.Card.Text,{className:"text-secondary"},t.Year)))}function g(e){var t=Object(h.a)({path:"https://www.omdbapi.com/?apikey=5b7ddec2&type=movie&s="+e.data}).data;return t?"True"===t.Response?r.a.createElement("div",{className:"container"},r.a.createElement(d.Container,null,r.a.createElement(d.Row,null,t&&t.Search.map((function(e,t){return r.a.createElement(d.Col,{xs:4,className:"mb-5 mr-5",key:e.imdbID,target:"#movie"+e.imdbID,"aria-expanded":"false","aria-controls":e.imdbID},r.a.createElement(b,{data:e,isFavorite:!1}))}))))):r.a.createElement(d.Container,null,r.a.createElement(d.BDiv,{mx:"auto",style:{width:"800px"}},r.a.createElement("h2",null,"\xa1","Too many results."===t.Error?"Su texto es demasiado gen\xe9rico D: y no aguanto tanta informaci\xf3n":"Su busqueda no arroj\xf3 resultados :C","! "))):r.a.createElement(d.Container,null,r.a.createElement(d.BDiv,{mx:"auto",style:{width:"637px"}},r.a.createElement("h2",null,"Cargando... ")))}var y=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"letSearch",value:function(e){e.preventDefault();var t=document.getElementById("searchText").value;""!==t.value&&l.a.render(r.a.createElement(g,{data:t}),document.getElementById("content"))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Navbar,{expand:"sm",light:!0,style:{backgroundColor:"#e3f2fd"},mb:"3"},r.a.createElement(d.Navbar.Brand,{href:"./"},r.a.createElement(d.BImg,{src:"/react-to-the-movies/logo.png",width:"180",height:"45",display:"inline-block",align:"top",mr:"1"})),r.a.createElement(d.Navbar.Toggler,{target:"#searchToggle"}),r.a.createElement(d.Collapse,{navbar:!0,id:"searchToggle"},r.a.createElement(d.Navbar.Nav,{mr:"auto"}),r.a.createElement(d.Form,{inline:!0,my:"2 lg-0"},r.a.createElement(d.Form.Input,{type:"search",placeholder:"Pel\xedcula",mr:"sm-2",id:"searchText"}),r.a.createElement(d.Button,{outline:!0,primary:!0,my:"2 sm-0",onClick:this.letSearch},"Buscar")))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.BDiv,{mx:"auto",style:{width:"637px"}},r.a.createElement("h2",null,"\xa1Busca una pel\xedcula en el buscador superior!"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("header")),l.a.render(r.a.createElement(f,null),document.getElementById("content")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){e.exports=a(254)},53:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.6c3488d9.chunk.js.map