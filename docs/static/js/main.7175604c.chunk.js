(this["webpackJsonpsorteo-app"]=this["webpackJsonpsorteo-app"]||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return pause})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Sortear2}));var C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6);function pause(e){return new Promise((function(a,t){setTimeout((function(){a()}),e)}))}var Sortear=function(){var e=Object(C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(a,t,r,o,c){var n,s,i,d,l,u,_,p,m;return C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],s=[],i=[],console.log("valores",t,r,o),d=100/t,l=t;case 6:if(!(t>0)){e.next=30;break}if(n=addLog(n,"Inicio sorteo."),u=d*(l-t),console.log("progreso",u),c(u),console.log("premios",t),_=getRandomInt(r,o),n=addLog(n,"N\xfamero (".concat(_,")")),void 0!==(p=buscarConcursante(a,_))){e.next=18;break}return n=addLog(n,"N\xfamero (".concat(_,") no encontrados entre los concursantes.")),e.abrupt("continue",6);case 18:if(!buscarPremiado(s,_)){e.next=21;break}return n=addLog(n,"N\xfamero (".concat(_,") ya premiado.")),e.abrupt("continue",6);case 21:return m=1,p.idacomp1>0&&m++,p.idacomp2>0&&m++,p.idacomp3>0&&m++,t>=m?(s=addToGanadores(s,_),t=substractPremio(t,1),i=addToGanadores(i,p.idsolicitante),n=addLog(n,"Agregar ganador (".concat(_,") premiado, idUnico:").concat(p.idsolicitante," quedan ").concat(t,".")),p.idacomp1>0&&(i=addToGanadores(i,p.idacomp1),t=substractPremio(t,1),n=addLog(n,"Agregar ganador acompa\xf1ante(".concat(p.idacomp1,") premiado, quedan ").concat(t,"."))),p.idacomp2>0&&(i=addToGanadores(i,p.idacomp2),t=substractPremio(t,1),n=addLog(n,"Agregar ganador acompa\xf1ante (".concat(p.idacomp3,") premiado, quedan ").concat(t,"."))),p.idacomp2>0&&(i=addToGanadores(i,p.idacomp3),t=substractPremio(t,1),n=addLog(n,"Agregar ganador acompa\xf1ante (".concat(p.idacomp3,") premiado, quedan ").concat(t,".")))):n=addLog(n,"Saltamos el n\xfamero (".concat(_,") porque no quedan suficientes premios, hay:").concat(t," y se solicitan: ").concat(m,".")),e.next=28,pause(1);case 28:e.next=6;break;case 30:return n=addLog(n,"Fin sorteo."),e.abrupt("return",[n,i,s]);case 32:case"end":return e.stop()}}),e)})));return function(a,t,r,o,c){return e.apply(this,arguments)}}(),Sortear2=function(){var _ref2=Object(C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function _callee2(data,premios,min,max,setParentProgress){var log,numerosGanadores,ganadores,campo,listaPremios,i,valor,valorProgreso,valorOrginalPremios,progreso,indiceASeleccionar,numeroPremiado,concursante,totalPremios;return C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:for(log=[],numerosGanadores=[],ganadores=[],console.log("valores",premios,min,max),campo="idsolicitante",listaPremios=[premios],i=0;i<data.length;i++)valor=eval("data["+i+"]."+campo),console.log("valor_"+i,valor),listaPremios[i]=valor;valorProgreso=100/premios,valorOrginalPremios=premios,log=addLog(log,"Inicio sorteo.");case 10:if(!(premios>0)){_context2.next=34;break}if(progreso=valorProgreso*(valorOrginalPremios-premios),console.log("progreso",progreso),setParentProgress(progreso),console.log("premios",premios),indiceASeleccionar=getRandomInt(1,listaPremios.length-1),numeroPremiado=listaPremios[indiceASeleccionar],log=addLog(log,"N\xfamero seleccionado: (".concat(numeroPremiado,")")),concursante=buscarConcursante(data,numeroPremiado),void 0!==concursante){_context2.next=22;break}return log=addLog(log,"N\xfamero (".concat(numeroPremiado,") no encontrados entre los concursantes.")),_context2.abrupt("continue",10);case 22:if(!buscarPremiado(numerosGanadores,numeroPremiado)){_context2.next=25;break}return log=addLog(log,"N\xfamero (".concat(numeroPremiado,") ya premiado.")),_context2.abrupt("continue",10);case 25:return totalPremios=1,concursante.idacomp1>0&&totalPremios++,concursante.idacomp2>0&&totalPremios++,concursante.idacomp3>0&&totalPremios++,premios>=totalPremios?(listaPremios.splice(indiceASeleccionar,1),numerosGanadores=addToGanadores(numerosGanadores,numeroPremiado),premios=substractPremio(premios,1),ganadores=addToGanadores(ganadores,concursante.idsolicitante),log=addLog(log,"Agregar ganador (".concat(numeroPremiado,") premiado, idUnico:").concat(concursante.idsolicitante," quedan ").concat(premios,".")),concursante.idacomp1>0&&(ganadores=addToGanadores(ganadores,concursante.idacomp1),premios=substractPremio(premios,1),log=addLog(log,"Agregar ganador acompa\xf1ante(".concat(concursante.idacomp1,") premiado, quedan ").concat(premios,"."))),concursante.idacomp2>0&&(ganadores=addToGanadores(ganadores,concursante.idacomp2),premios=substractPremio(premios,1),log=addLog(log,"Agregar ganador acompa\xf1ante (".concat(concursante.idacomp3,") premiado, quedan ").concat(premios,"."))),concursante.idacomp2>0&&(ganadores=addToGanadores(ganadores,concursante.idacomp3),premios=substractPremio(premios,1),log=addLog(log,"Agregar ganador acompa\xf1ante (".concat(concursante.idacomp3,") premiado, quedan ").concat(premios,".")))):log=addLog(log,"Saltamos el n\xfamero (".concat(numeroPremiado,") porque no quedan suficientes premios, hay:").concat(premios," y se solicitan: ").concat(totalPremios,".")),_context2.next=32,pause(1);case 32:_context2.next=10;break;case 34:return log=addLog(log,"Fin sorteo."),_context2.abrupt("return",[log,ganadores,numerosGanadores]);case 36:case"end":return _context2.stop()}}),_callee2)})));return function(e,a,t,r,o){return _ref2.apply(this,arguments)}}(),getRandomInt=function(e,a){return Math.round(Math.random()*(a-e))+e},buscarConcursante=function buscarConcursante(data,concursante){var campo="idsolicitante",res=data.find((function(c){return eval("c."+campo)===concursante.toString()}));return res},buscarPremiado=function(e,a){return void 0!==e.find((function(e){return e===a.toString()}))},addToGanadores=function(e,a){return[].concat(Object(C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[a.toString()])},addLog=function(e,a){var t=(new Date).toISOString("es-ES")+" "+a;return[].concat(Object(C_React_sorteo_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[t])},substractPremio=function(e,a){return e-a}},49:function(e,a,t){"use strict";t.r(a);var r=t(1),o=t.n(r),c=t(20),n=t.n(c),s=t(4),i=t(2),d=t.n(i),l=t(6),u=t(5),_=t(21),p=t(17),m=t(0),b=function(e){var a=e.bgcolor,t=e.progress,r={height:e.height,width:"80%",backgroundColor:"whitesmoke",borderRadius:40,margin:50},o={height:"100%",width:"".concat(t,"%"),backgroundColor:a,borderRadius:40,textAlign:"right"};return Object(m.jsx)("div",{style:r,children:Object(m.jsx)("div",{style:o,children:Object(m.jsx)("span",{style:{padding:10,color:"black",fontWeight:900},children:"".concat(t,"%")})})})},j=t(13),x=function(){var e=Object(r.useState)([]),a=Object(u.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)(!1),n=Object(u.a)(c,2),i=n[0],x=n[1],O=Object(r.useState)(!1),g=Object(u.a)(O,2),h=g[0],f=g[1],v=Object(r.useState)(),P=Object(u.a)(v,2),N=P[0],C=P[1],E=Object(r.useRef)(null),y=Object(r.useState)(!0),M=Object(u.a)(y,2),S=M[0],w=M[1],L=Object(r.useState)(0),R=Object(u.a)(L,2),k=R[0],A=R[1];Object(r.useEffect)((function(){console.log(t)}),[t]);var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(u.a)(a,2),o=t[0],c=t[1];return[o,function(e){var a=e.target;c(Object(p.a)(Object(p.a)({},o),{},Object(s.a)({},a.name,a.value)))},function(){c(e)}]}({NumPremios:20,NumMinSorteo:1,NumMaxSorteo:200}),T=Object(u.a)(D,2),G=T[0],q=T[1],I=G.NumPremios,U=G.NumMinSorteo,B=G.NumMaxSorteo,W=function(){var e=Object(l.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),console.log("Empieza Sorteo",I,U,B),e.next=4,Object(j.a)(t,I,U,B,F);case 4:a=e.sent,A(100),w(!1),K(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fin sorteo",a),e.next=3,Object(j.b)(1e3);case 3:return C(a),f(!0),e.next=7,Object(j.b)(1e3);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("setParentProgress",a),A(Math.round(a));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Sorteo App v0.6"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-5",children:[Object(m.jsxs)("div",{className:"input-group input-group mb-3",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("span",{className:"input-group-text",id:"inputGroup-NumPremios",children:"*Total premios del sorteo"})}),Object(m.jsx)("input",{type:"text",name:"NumPremios",onChange:q,value:I,placeholder:"Total Premios",autoComplete:"off",required:!0,className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-NumPremios"})]}),Object(m.jsxs)("div",{className:"input-group input-group mb-3",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("span",{className:"input-group-text",id:"inputGroup-NumMinSorteo",children:"*Valor inicial del sorteo"})}),Object(m.jsx)("input",{type:"text",name:"NumMinSorteo",onChange:q,value:U,placeholder:"N\xfamero inicial sorteo",autoComplete:"off",required:!0,className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-NumMinSorteo"})]}),Object(m.jsxs)("div",{className:"input-group input-group mb-3",children:[Object(m.jsx)("div",{cclassNamelass:"input-group-prepend",children:Object(m.jsx)("span",{className:"input-group-text",id:"inputGroup-NumMaxSorteo",children:"*Valor m\xe1ximo del sorteo"})}),Object(m.jsx)("input",{type:"text",name:"NumMaxSorteo",onChange:q,value:B,placeholder:"N\xfamero m\xe1ximo sorteo",autoComplete:"off",required:!0,className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-NumMaxSorteo"})]}),Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("div",{className:"input-group-prepend",children:Object(m.jsx)("span",{className:"input-group-text",children:"Subir"})}),Object(m.jsxs)("div",{className:"custom-file",children:[Object(m.jsx)("input",Object(s.a)({required:!0,ref:E,onChange:function(){console.log(E.current.files),Object(l.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("uploaded!"),e.next=3,E.current.files[0].text();case 3:return a=e.sent,e.next=6,_.a(a);case 6:t=e.sent,o(t),x(!0);case 9:case"end":return e.stop()}}),e)})))()},disabled:i,type:"file",id:"input",class:"custom-file-input"},"id","inputGroupFile01")),Object(m.jsx)("label",{className:"custom-file-label",htmlFor:"inputGroupFile01",children:"Elegir Fichero"})]})]})]})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-5",children:Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:W,disabled:h,children:"Iniciar Sorteo"})})})}),h?Object(m.jsx)("div",{className:"row mt-5",children:Object(m.jsx)("div",{className:"col-5",children:Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){window.print()},disabled:!h,children:"Imprimir Resultados"})})}):Object(m.jsx)("div",{}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:S?Object(m.jsx)(b,{bgcolor:"orange",progress:k,height:30}):Object(m.jsx)("div",{})})})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"container col-12",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"card p-1 col-2",children:Object(m.jsxs)("div",{className:"card-body p-1",children:[" ",Object(m.jsx)("h2",{className:"card-title text-center",children:"Paticipaciones"}),Object(m.jsx)("div",{children:i?Object(m.jsxs)("table",{className:"table table-bordered",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Orden"}),Object(m.jsx)("th",{scope:"col",children:"Participaci\xf3n"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e,a){return Object(m.jsxs)("tr",{className:a%2===0?"table-active":"table",children:[Object(m.jsx)("td",{className:"text-right",children:a+1}),Object(m.jsx)("td",{className:"text-left",children:e.idsolicitante})]},"p"+a)}))})]}):Object(m.jsx)("div",{})})]})}),Object(m.jsx)("div",{className:"card p-1 col-6",children:Object(m.jsxs)("div",{className:"card-body p-1 ",children:[Object(m.jsx)("h2",{className:"card-title text-center",children:"Sorteo"}),Object(m.jsx)("div",{children:N?Object(m.jsxs)("table",{className:"table table-bordered",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Orden"}),Object(m.jsx)("th",{scope:"col",children:"Detalle"})]})}),Object(m.jsx)("tbody",{children:N[0].map((function(e,a){return Object(m.jsxs)("tr",{className:a%2===0?"table-active":"table",children:[Object(m.jsx)("td",{className:"text-right",children:a+1}),Object(m.jsx)("td",{className:"text-left",children:e})]},"p"+a)}))})]}):Object(m.jsx)("div",{})})]})}),Object(m.jsx)("div",{className:"card p-1 col-2",children:Object(m.jsxs)("div",{className:"card-body p-1",children:[Object(m.jsx)("h2",{className:"card-title text-center",children:"N\xfameros"}),Object(m.jsx)("div",{children:h?Object(m.jsxs)("table",{className:"table table-bordered",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Orden"}),Object(m.jsx)("th",{scope:"col",children:"N\xfamero Ganador"})]})}),Object(m.jsx)("tbody",{children:N[2].map((function(e,a){return Object(m.jsxs)("tr",{className:a%2===0?"table-active":"table",children:[Object(m.jsx)("td",{className:"text-right",children:a+1}),Object(m.jsx)("td",{className:"text-right",children:e})]},"p"+a)}))})]}):Object(m.jsx)("div",{})})]})}),Object(m.jsx)("div",{className:"card p-1 col-2",children:Object(m.jsxs)("div",{className:"card-body p-1",children:[Object(m.jsx)("h2",{className:"card-title text-center",children:"Abonados"}),Object(m.jsx)("div",{children:h?Object(m.jsxs)("table",{className:"table table-bordered",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Orden"}),Object(m.jsx)("th",{scope:"col",children:"Id Unico"})]})}),Object(m.jsx)("tbody",{children:N[1].map((function(e,a){return Object(m.jsxs)("tr",{className:a%2===0?"table-active":"table",children:[Object(m.jsx)("td",{className:"text-right",children:a+1}),Object(m.jsx)("td",{className:"text-right",children:e})]},"p"+a)}))})]}):Object(m.jsx)("div",{})})]})})]})})]})},O=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(x,{})})};n.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7175604c.chunk.js.map