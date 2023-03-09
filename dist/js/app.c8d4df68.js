(function(){"use strict";var t={5693:function(t,e,s){var i=s(144),a=s(998),r=s(6232),n=s(3687),o=function(){var t=this,e=t._self._c;return e(a.Z,[e(r.Z,{attrs:{flat:"","max-height":"65"}},[e("Header")],1),e("router-view"),e(n.Z),e("Footer")],1)},l=[],A=s(8945);const c="/blog/";class p{static async getAllPost(){const t=await A.Z.get(c);return console.log("getAllPost ",t),t.data}static async getAllPostById(t){const e=await A.Z.get(`${c}/${t}`);return e.data}static async createPostBlog(t){const e=await A.Z.post(c,t);return e.data}static async updateBlogPost(t,e){const s=await A.Z.patch(`${c}/${t}`,e);return s.data}static async deletePostBlog(t){const e=await A.Z["delete"](`${c}/${t}`);return e.data}}var u=s(4562),d=s(9582),m=s(4886),h=s(2118),v=s(9223),g=s(8271),f=s(4324),Z=function(){var t=this,e=t._self._c;return e(h.Z,[e(g.Z,{attrs:{padless:""}},[e(d.Z,{staticClass:"text-center",attrs:{flat:""}},[e(m.ZB,t._l(t.icons,(function(s){return e(u.Z,{key:s,staticClass:"mx-4",attrs:{icon:""}},[e("a",{attrs:{href:s.link}},[e(f.Z,{attrs:{size:"24px"}},[t._v(t._s(s.icon))])],1)])})),1),e(m.ZB,{staticClass:"pt-0"},[t._v("SalesToon est un blog 100% francophone eduquant sur des techniques et astuce d'administration et de developpement salesforce. Apex , lightning web component,Flow,Aura component,Visual force Page etc....., sont abordés dans ce blog")]),e(v.Z),e(m.ZB,[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Design par Evariste avec Vue Js et Vuetify")]),e("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart"}})],1)],1)],1)],1)},y=[],C={name:"Header",data:()=>({icons:[{icon:"mdi-facebook",link:"https://m.facebook.com/"},{icon:"mdi-twitter",link:"https://mobile.twitter.com/home"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/home?originalSubdomain=fr"},{icon:"mdi-instagram",link:"https://www.instagram.com/accounts/login/"}]})},x=C,E=s(1001),b=(0,E.Z)(x,Z,y,!1,null,null,null),w=b.exports,_=s(5550),R=s(5495),B=s(5808),k=s(4525),I=s(8266),V=s(9541),P=s(6313),Q=s(7953),H=function(){var t=this,e=t._self._c;return e(h.Z,[e(P.Z,{staticClass:"mainHeader",attrs:{flat:""}},[e("div",{staticClass:"logo"},[e(R.Z,{attrs:{src:s(5646)}})],1),e(n.Z),e(Q.lj,{staticClass:"hidden-xs-only hidden-sm-only"},[e(u.Z,{attrs:{text:""}},[e("router-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),e(u.Z,{attrs:{text:""}},[e("router-link",{attrs:{to:"/ApexView"}},[t._v("Apex")])],1),e(u.Z,{attrs:{text:""}},[e("router-link",{attrs:{to:"/LwcView"}},[t._v("LWC")])],1),e(u.Z,{attrs:{text:""}},[e("router-link",{attrs:{to:"/VisualForceView"}},[t._v("VisualForce")])],1),e(u.Z,{attrs:{text:""}},[e("router-link",{attrs:{to:"/AdminView"}},[t._v("Administration")])],1),e(u.Z,{attrs:{text:""}},[e("router-link",{attrs:{to:"/AboutView"}},[t._v("A propos de moi")])],1)],1),e("div",{staticClass:"hidden-md-and-up"},[e(V.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(_.Z,t._g({},s))]}}])},[e(B.Z,{staticClass:"responsiveMenu"},[e(k.Z,[e(I.V9,[e("router-link",{attrs:{to:"/"}},[t._v("Accueil")])],1)],1),e(k.Z,[e(I.V9,[e("router-link",{attrs:{to:"/ApexView"}},[t._v("Apex")])],1)],1),e(k.Z,[e(I.V9,[e("router-link",{attrs:{to:"/LwcView"}},[t._v("LWC")])],1)],1),e(k.Z,[e(I.V9,[e("router-link",{attrs:{to:"/VisualForceView"}},[t._v("VisualForce")])],1)],1),e(k.Z,[e(I.V9,[e("router-link",{attrs:{to:"/AdminView"}},[t._v("Administration")])],1)],1),e(k.Z,[e(I.V9,[e("router-link",{attrs:{to:"/AboutViewabout"}},[t._v("A propos de moi")])],1)],1)],1)],1)],1)],1)],1)},F=[],T={name:"Header",data:()=>({})},M=T,S=(0,E.Z)(M,H,F,!1,null,null,null),j=S.exports,L={data:()=>({posts:[],links:["Home","Apex","LWC","Visual force Page","Admin"],icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],drawer:!0,items:[{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}],mini:!0}),async created(){this.posts=await p.getAllPost(),console.log(this.posts)},components:{Footer:w,Header:j}},q=L,D=(0,E.Z)(q,o,l,!1,null,null,null),G=D.exports,X=s(8345),W=s(720),z=function(){var t=this,e=t._self._c;return e(W.Z,[e("Hero"),e("Post")],1)},N=[],U=s(9654),K=s(6760),O=s(1713),J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"heroBlock"},[e(U.Z,{attrs:{cycle:"","hide-delimiters":""}},t._l(t.items,(function(s,i){return e(K.Z,{key:i,attrs:{src:s.src,"reverse-transition":"fade-transition",transition:"fade-transition"}},[e(O.Z,{staticClass:"title fill-height hidden-xs-only hidden-sm-only hidden-md-only ml-5",attrs:{align:"center",justify:"center"}},[t._v(t._s(s.title))])],1)})),1)],1)},Y=[],$={name:"Hero",data(){return{items:[{src:s(9439),title:"1er Blog 100% Francophone"},{src:s(9159),title:"SalesToon pour les Developpers et Administrateurs salesforce"},{src:s(6578),title:"Plus qu'une Passion , une determination a apprendre ensemble"}]}}},tt=$,et=(0,E.Z)(tt,J,Y,!1,null,null,null),st=et.exports,it=s(266),at=s(3305),rt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"latestPostBlock spinner"},[t.displaySpinner?e(at.Z,{attrs:{size:100,width:15,color:"blue",indeterminate:""}}):t._e()],1),t.displayCard?e("div",{staticClass:"block latestPostBlock"},[e(h.Z,[e("h2",{staticClass:"text-center"},[t._v("Apex")]),e(O.Z,t._l(t.ApexHome,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},["Apex"==s.category?e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}},[e(m.EB,{staticStyle:{color:"black"}},[t._v(t._s(s.title))])],1),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1):t._e()],1)})),1),e("router-link",{attrs:{to:"/ApexView"}},[e("button",{staticClass:"btn"},[t._v("Voir plus")])]),e("h2",{staticClass:"text-center"},[t._v("Lightning Web Component")]),e(O.Z,t._l(t.LwcHome,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},["LWC"==s.category?e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}},[e(m.EB,{staticStyle:{color:"black"}},[t._v(t._s(s.title))])],1),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1):t._e()],1)})),1),e("router-link",{attrs:{to:"/LwcView"}},[e("button",{staticClass:"btn"},[t._v("Voir plus")])]),e("h2",{staticClass:"text-center"},[t._v("VisualForce Page")]),e(O.Z,t._l(t.VFHome,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},["visualforce"==s.category?e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}},[e(m.EB,{staticStyle:{color:"black"}},[t._v(t._s(s.title))])],1),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1):t._e()],1)})),1),e("router-link",{attrs:{to:"/VisualForceView"}},[e("button",{staticClass:"btn"},[t._v("Voir plus")])]),e("h2",{staticClass:"text-center"},[t._v("Administration Salesforce")]),e(O.Z,t._l(t.AdminHome,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},["Administration"==s.category?e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}},[e(m.EB,{staticStyle:{color:"black"}},[t._v(t._s(s.title))])],1),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1):t._e()],1)})),1),e("router-link",{attrs:{to:"/AdminView"}},[e("button",{staticClass:"btn"},[t._v("Voir plus")])])],1)],1):t._e()])},nt=[];s(7658);const ot="/blog/";class lt{static async getAllPost(){const t=await A.Z.get(ot);return console.log("getAllPost ",t),t.data}static async getAllPostById(t){const e=await A.Z.get(`${ot}/${t}`);return e.data}static async createPostBlog(t){const e=await A.Z.post(ot,t);return e.data}static async updateBlogPost(t,e){const s=await A.Z.patch(`${ot}/${t}`,e);return s.data}static async deletePostBlog(t){const e=await A.Z["delete"](`${ot}/${t}`);return e.data}}var At={name:"LatestPost",data:()=>({displayCard:!1,displaySpinner:!0,show:!1,ApexHome:[],ApexTemp:[],LwcHome:[],lwcTemp:[],VFHome:[],VFTemp:[],AdminHome:[],AdminTemp:[],items:[]}),async created(){this.items=await lt.getAllPost(),this.displayCard=!0,this.displaySpinner=!1,console.log(this.items);for(let t=0;t<this.items.length;t++)"Apex"==this.items[t].category?(this.ApexTemp.push(this.items[t]),console.log("this.ApexTemp",this.ApexTemp)):"LWC"==this.items[t].category?(this.lwcTemp.push(this.items[t]),console.log("this.lwcTemp",this.lwcTemp)):"visualforce"==this.items[t].category?(this.VFTemp.push(this.items[t]),console.log("this.lwcTemp",this.VFTemp)):"Administration"==this.items[t].category&&(this.AdminTemp.push(this.items[t]),console.log("this.lwcTemp",this.AdminTemp));for(let t=0;t<3;t++)null!=this.ApexTemp[t]&&void 0!=this.ApexTemp[t]&&this.ApexHome.push(this.ApexTemp[t]),null!=this.lwcTemp[t]&&void 0!=this.lwcTemp[t]&&this.LwcHome.push(this.lwcTemp[t]),null!=this.VFTemp[t]&&void 0!=this.VFTemp[t]&&this.VFHome.push(this.VFTemp[t]),null!=this.AdminTemp[t]&&void 0!=this.AdminTemp[t]&&this.AdminHome.push(this.AdminTemp[t])}},ct=At,pt=(0,E.Z)(ct,rt,nt,!1,null,null,null),ut=pt.exports,dt={name:"Home",components:{Hero:st,Post:ut}},mt=dt,ht=(0,E.Z)(mt,z,N,!1,null,null,null),vt=ht.exports,gt=function(){var t=this,e=t._self._c;return e(W.Z,[e("div",{staticClass:"staticHero"},[e(R.Z,{attrs:{src:s(841)}},[e(O.Z,{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"end"}},[e(it.Z,[e(h.Z,[e("div",{staticClass:"headline"},[t._v("Apex ")])])],1)],1)],1)],1),e("div",{staticClass:"block"},[e(h.Z,[e("p",{staticClass:"contenu"},[t._v("Apex est un langage de programmation base cote serveur permettant d'implementer des logiques en servant des operations tel que le DML ,SOQL,SOSL, et bien d'autres.")])])],1),e("div",{staticClass:"latestPostBlock spinner"},[t.displaySpinner?e(at.Z,{attrs:{size:100,width:15,color:"blue",indeterminate:""}}):t._e()],1),t.displayCard?e("div",{staticClass:"block"},[e(h.Z,[e(O.Z,t._l(t.ApexView,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},[e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}}),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1)],1)})),1)],1)],1):t._e()])},ft=[],Zt={name:"About",data(){return{displayCard:!1,displaySpinner:!0,items:[],ApexView:[]}},async created(){this.items=await lt.getAllPost(),this.displayCard=!0,this.displaySpinner=!1,console.log(this.items);for(let t=0;t<this.items.length;t++)"Apex"==this.items[t].category&&(this.ApexView.push(this.items[t]),console.log("this.ApexTemp",this.ApexTemp))}},yt=Zt,Ct=(0,E.Z)(yt,gt,ft,!1,null,null,null),xt=Ct.exports,Et=function(){var t=this,e=t._self._c;return e(W.Z,[e("div",{staticClass:"staticHero"},[e(R.Z,{attrs:{src:s(841)}},[e(O.Z,{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"end"}},[e(it.Z,[e(h.Z,[e("div",{staticClass:"headline"},[t._v("Ligthning Web Components ")])])],1)],1)],1)],1),e("div",{staticClass:"block"},[e(h.Z,[e("p",{staticClass:"contenu"},[t._v("Framework Frontend permettant le developpement par Composant, sa structure est compose de 04 fichiers a savoir un fichier HTML, un fichier CSS, un fichier javascript et un fichier XML qui represente les configurations.")])])],1),e("div",{staticClass:"latestPostBlock spinner"},[t.displaySpinner?e(at.Z,{attrs:{size:100,width:15,color:"blue",indeterminate:""}}):t._e()],1),t.displayCard?e("div",{staticClass:"block"},[e(h.Z,[e(O.Z,t._l(t.LwcView,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},[e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}}),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1)],1)})),1)],1)],1):t._e()])},bt=[],wt={name:"About",data(){return{displayCard:!1,displaySpinner:!0,items:[],LwcView:[]}},async created(){this.items=await lt.getAllPost(),this.displayCard=!0,this.displaySpinner=!1,console.log(this.items);for(let t=0;t<this.items.length;t++)"LWC"==this.items[t].category&&(this.LwcView.push(this.items[t]),console.log("this.ApexTemp",this.LwcView))}},_t=wt,Rt=(0,E.Z)(_t,Et,bt,!1,null,null,null),Bt=Rt.exports,kt=function(){var t=this,e=t._self._c;return e(W.Z,[e("div",{staticClass:"staticHero"},[e(R.Z,{attrs:{src:s(841)}},[e(O.Z,{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"end"}},[e(it.Z,[e(h.Z,[e("div",{staticClass:"headline"},[t._v("VisualForce Page ")])])],1)],1)],1)],1),e("div",{staticClass:"block"},[e(h.Z,[e("p",{staticClass:"contenu"},[t._v("VisualForce Page est un moteur de template permettant de designer des interfaces dans salesforce l'extension des fichiers sont (NOM_FICHIER.page).")])])],1),e("div",{staticClass:"latestPostBlock spinner"},[t.displaySpinner?e(at.Z,{attrs:{size:100,width:15,color:"blue",indeterminate:""}}):t._e()],1),t.displayCard?e("div",{staticClass:"block"},[e(h.Z,[e(O.Z,t._l(t.VFview,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},[e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}}),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1)],1)})),1)],1)],1):t._e()])},It=[],Vt={name:"About",data(){return{displayCard:!1,displaySpinner:!0,items:[],VFview:[]}},async created(){this.items=await lt.getAllPost(),this.displayCard=!0,this.displaySpinner=!1,console.log(this.items);for(let t=0;t<this.items.length;t++)"visualforce"==this.items[t].category&&this.VFview.push(this.items[t])}},Pt=Vt,Qt=(0,E.Z)(Pt,kt,It,!1,null,null,null),Ht=Qt.exports,Ft=function(){var t=this,e=t._self._c;return e(W.Z,[e("div",{staticClass:"staticHero"},[e(R.Z,{attrs:{src:s(841)}},[e(O.Z,{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"end"}},[e(it.Z,[e(h.Z,[e("div",{staticClass:"headline"},[t._v("Administration Salesforce ")])])],1)],1)],1)],1),e("div",{staticClass:"block"},[e(h.Z,[e("p",{staticClass:"contenu"},[t._v("La partie administration de Salesforce est assez vaste et possede une panoplie de connaissances regroupant les notions telle que les flow , process builder , workflow rule , page layout , report , dashboard etc.................")])])],1),e("div",{staticClass:"latestPostBlock spinner"},[t.displaySpinner?e(at.Z,{attrs:{size:100,width:15,color:"blue",indeterminate:""}}):t._e()],1),t.displayCard?e("div",{staticClass:"block"},[e(h.Z,[e(O.Z,t._l(t.VFview,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},[e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:s.image}}),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1)],1)})),1)],1)],1):t._e()])},Tt=[],Mt={name:"About",data(){return{displayCard:!1,displaySpinner:!0,items:[],VFview:[]}},async created(){this.items=await lt.getAllPost(),this.displayCard=!0,this.displaySpinner=!1,console.log(this.items);for(let t=0;t<this.items.length;t++)"Administration"==this.items[t].category&&this.VFview.push(this.items[t])}},St=Mt,jt=(0,E.Z)(St,Ft,Tt,!1,null,null,null),Lt=jt.exports,qt=function(){var t=this,e=t._self._c;return e(h.Z,[e("h2",{staticClass:"text-center"},[t._v("QUI SUIS JE ?")]),e("div",{staticClass:"block"},[e(O.Z,t._l(t.items,(function(s){return e(it.Z,{key:s.id,staticClass:"d-flex child-flex",attrs:{cols:"6",sm:"4"}},[e(d.Z,{staticClass:"mx-auto",attrs:{flat:"",tile:""}},[e(R.Z,{staticClass:"grey lighten-2",attrs:{src:s.src,"aspect-ratio":"1",heigth:t.heigth}}),e(m.ZB,{staticClass:"text--primary text-center"},[e("div",{staticClass:"title"},[t._v(t._s(s.name))]),e("p",[t._v(t._s(s.title))])])],1)],1)})),1)],1),e("p",[t._v(" Depuis le jour ou j'ai pris connaissance du CRM Salesforce , je ne cesse d'apprendre jour apres jour pour me bonifier et me perfectionner, ouverture esprit et aisance dans le travail equipe sont mes qualites. j'aime coder puisque c'est ma passion, APex , Aura component , Ligthning web component, Integration des services externes sont mes technologies salesforce les plus a l'aise neamoins dans ma quete perpetuel du Savoir je reste ouvert au critique , observation et proposition. Avec une experience de 02 minimun je sur la technologie je suis sur les sentiers pour devenir un technical architecte avere ")]),e("div",{staticClass:"block"},[e(h.Z,[e("h2",{staticClass:"text-center"},[t._v("Mes Certifications")]),e(O.Z,t._l(t.certif,(function(s){return e(it.Z,{key:s.id,staticClass:"d-flex child-flex",attrs:{cols:"12",sm:"4"}},[e(d.Z,{staticClass:"mx-auto",attrs:{flat:"",tile:""}},[e(R.Z,{staticClass:"grey lighten-2",attrs:{src:s.src,"aspect-ratio":"1"}}),e(m.ZB,{staticClass:"text--primary text-center"},[e("div",{staticClass:"title"},[t._v(t._s(s.name))])])],1)],1)})),1)],1)],1)])},Dt=[],Gt={data(){return{heigth:15,items:[{id:1,src:s(830),name:"TCHEUFFA NOUAGA CENDRECE EVARISTE",title:"SALESFORCE DEVELOPPER"}],certif:[{id:1,src:s(5803),name:"Certification Developper 1"},{id:2,src:s(1820),name:"Certification Javascript 1"}]}}},Xt=Gt,Wt=(0,E.Z)(Xt,qt,Dt,!1,null,null,null),zt=Wt.exports,Nt=s(3423),Ut=function(){var t=this,e=t._self._c;return e(h.Z,[e(O.Z,{attrs:{"no-gutters":""}},[e(it.Z,{staticClass:"pa-4 mx-auto",attrs:{sm:"10"}},[e(d.Z,{staticClass:"pa-2"},[e(R.Z,{attrs:{height:"600",src:`/${t.post.image}`}}),e(m.h7,{staticClass:"pb-0"},[e(O.Z,{staticClass:"mt-1 mx-1"},[e(it.Z,{attrs:{sm:"2"}},[e(u.Z,{attrs:{small:"",outlined:"",color:"primary"}},[t._v(t._s(t.post.category))])],1),e(it.Z,{staticClass:"d-flex justify-end",attrs:{sm:"10"}},[e(Nt.Z,{attrs:{color:"indigo"}},[e(f.Z,{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1),e("div",{staticClass:"pl-10"},[t._v(" posté le "+t._s(t.post.createdDate)+" ")])],1)],1)],1),e(m.Qq,{staticClass:"headkine"},[e("h4",{staticClass:"title-h4"},[t._v(" "+t._s(t.post.title))])]),e(m.ZB,{staticClass:"grey--text"},[e("p",{attrs:{id:"textarea-content"}}),e("p",[t._v(t._s(t.post?.created))])])],1)],1)],1),e(O.Z,[e(it.Z,{staticClass:"pa-4 mx-auto",attrs:{sm:"10"}},[e("relatedAndComment",{attrs:{categoryParent:t.post.category}})],1)],1)],1)},Kt=[],Ot=s(5125),Jt=s(3059),Yt=s(8088),$t=s(2648),te=function(){var t=this,e=t._self._c;return e(Jt.Z,[e("h2",{staticClass:"text-center"},[t._v("Vous pouvez etre interesse par ces Posts .......")]),e(O.Z,t._l(t.varView,(function(s){return e(it.Z,{key:s.id,attrs:{cols:"12",md:"4"}},[e(d.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[e(R.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:`/${s.image}`}},[e(m.EB,[t._v(t._s(s.title))])],1),e(m.Qq,{staticClass:"pb-0"},[t._v(t._s(s.category))]),e(m.ZB,{staticClass:"text--primary"},[e("code",[t._v(" "+t._s(s.content.substring(0,100).replace("<","").replace("span","").replace('style="font-size: 14pt;"',"").replace("p>< >",""))+" ")])]),e(m.h7,[e(u.Z,{attrs:{color:"primary",text:"",to:{name:"post",params:{id:s._id}}}},[t._v("lire Plus")])],1)],1)],1)})),1),e("div",{staticClass:"block"},[e("h2",{staticClass:"text-center"},[t._v("Faite une remarque a propos du Post a travers ce formulaire")]),e(O.Z,[e(it.Z,{attrs:{cols:"12"}},[e(Ot.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(Yt.Z,{attrs:{counter:10,rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(Yt.Z,{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e($t.Z,{attrs:{rules:t.messageRules,label:"Message",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),e(u.Z,{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("Envoyer")]),e(u.Z,{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v("vider")])],1)],1)],1)],1)],1)},ee=[],se={name:"postandComment",props:{categoryParent:String},data:()=>({valid:!0,name:"",email:"",message:"",nameRules:[t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be less than 10 characters"],emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],messageRules:[t=>!!t||"Message is required",t=>t&&t.length>=10||"Message must be more than 10 characters"],items:[],varTemp:[],varView:[]}),async created(){this.items=await p.getAllPost(),console.log(this.items);for(let t=0;t<this.items.length;t++)this.items[t].category==this.categoryParent&&(this.varTemp.push(this.items[t]),console.log("@@@@this.varTemp",this.varTemp));for(let t=0;t<3;t++)null!=this.varTemp[t]&&void 0!=this.varTemp[t]&&(this.varView.push(this.varTemp[t]),console.log("@@@@ this.varView",this.varView))},methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0)},reset(){this.$refs.form.reset()}}},ie=se,ae=(0,E.Z)(ie,te,ee,!1,null,null,null),re=ae.exports,ne={data(){return{post:{}}},async created(){this.post=await p.getAllPostById(this.$route.params.id),console.log("@@@@@response ",this.post),document.getElementById("textarea-content").innerHTML=this.post.content},components:{relatedAndComment:re}},oe=ne,le=(0,E.Z)(oe,Ut,Kt,!1,null,null,null),Ae=le.exports;i.ZP.use(X.ZP);const ce=[{path:"/",name:"home",component:vt},{path:"/ApexView",name:"Apex",component:xt},{path:"/LwcView",name:"LWC",component:Bt},{path:"/VisualForceView",name:"VisualForcePage",component:Ht},{path:"/AdminView",name:"Administration",component:Lt},{path:"/AboutView",name:"About",component:zt},{path:"/post/:id",name:"post",component:Ae}],pe=new X.ZP({mode:"history",base:"/",routes:ce});var ue=pe,de=s(1705);i.ZP.use(de.Z);var me=new de.Z({});i.ZP.config.productionTip=!1,new i.ZP({router:ue,vuetify:me,render:t=>t(G)}).$mount("#app")},9439:function(t,e,s){t.exports=s.p+"img/crm.0eaae571.png"},9159:function(t,e,s){t.exports=s.p+"img/crm1.2e238692.png"},6578:function(t,e,s){t.exports=s.p+"img/crm2.39ad9e0c.png"},5803:function(t,e,s){t.exports=s.p+"img/dev1-2.97dd01c4.png"},830:function(t,e,s){t.exports=s.p+"img/evariste.0cb06f07.jpg"},841:function(t,e,s){t.exports=s.p+"img/img13.6a577864.jpg"},1820:function(t,e,s){t.exports=s.p+"img/js.8996b264.png"},5646:function(t){t.exports="data:image/jpeg;base64,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lQiaN4C4eq0anYhltkx+1PMyIs0J721HZMbUq1Hu8Ni5fdVOxfbfaMniXKxxH24kcuh49jPYSoXs8pK2bn9q816ybeT9z79cLp7Y/gFaTMP2eYz7n+USrMlvmL3msyZHg3H5UkdJOEIgJa67cpEpDGW2G445AtWRw5zlYXTWNrwrwHUS5iHupvHK8cvJKRjjQO+S+/UOlC1kHUdvEItr35H/AOc7l/YD/ioUzLbJDxiZZ8chzQ87PiZSddR2126SLwqrwfKm8VuLz0xlx1h5rQ+y12HvCXMmNSI1Y7eKNurxgP64Wv2y/AS8520DWW3UWhoA9qNeA+IhGpK+td8wu0T2ZsKDdhkMlxDbQqdOvjWQv92+W7xMn9n2VHj4iH1D0isr4xocOXryPu69nt5h4+cOaUekm76GEPfob6dj/wAFR3CU9P8AJMEmY5V9910qmZ9VS84JZzPcrh5U7BO3NyGhjidC7YRHq1/NqReFSLRl9sHFK2K/RJTrQGVQqwQjx5t/SW3Lze0uq9eb1bxy9OKu3Vh0XpwhI6k2PZgRctNttV5XltRERVBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,r){if(!i){var n=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],r=t[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(c--,1);var A=a();void 0!==A&&(e=A)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,r,n=i[0],o=i[1],l=i[2],A=0;if(n.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var c=l(s)}for(e&&e(i);A<n.length;A++)r=n[A],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},i=self["webpackChunkclient_user"]=self["webpackChunkclient_user"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(5693)}));i=s.O(i)})();
//# sourceMappingURL=app.c8d4df68.js.map