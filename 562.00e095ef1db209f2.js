"use strict";(self.webpackChunkinfracciones_amt=self.webpackChunkinfracciones_amt||[]).push([[562],{2562:(h,d,r)=>{r.r(d),r.d(d,{LandingPageModule:()=>L});var c=r(6814),g=r(2125),e=r(9291),l=r(3911),p=r(9153);let m=(()=>{class n{constructor(t,o){this.document=t,this.translate=o}ngOnInit(){this.translate.stream("LANDING_PAGE.TITLE").subscribe(t=>this.document.title=t),this.translate.stream("HEADER.AMT").subscribe(t=>this.document.title+=" - "+t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.K0),e.Y36(l.sK))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-landing-page"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"app-nav-footer-template")},dependencies:[p.f],styles:["app-nav-footer-template[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column}"]}),n})();var s=r(4181),i=r(3510);const v=[{name:"LANDING_PAGE.SERVICES.AMOUNTS",link:i.a.AMOUNTS,isAvailable:!1,imageUrl:s.l.LANDING_SERVICES+"amounts.png"},{name:"LANDING_PAGE.SERVICES.INFRINGEMENTS_AMT",link:i.a.INFRINGEMENTS_AMT,isAvailable:!0,imageUrl:s.l.LANDING_SERVICES+"infringements-amt.png"},{name:"LANDING_PAGE.SERVICES.INFRINGEMENTS_ANT",link:i.a.INFRINGEMENTS_ANT,isAvailable:!1,imageUrl:s.l.LANDING_SERVICES+"infringements-ant.png"},{name:"LANDING_PAGE.SERVICES.PREFECTURE_VALUES",link:i.a.PREFECTURE_VALUES,isAvailable:!1,imageUrl:s.l.LANDING_SERVICES+"prefecture-values.png"},{name:"LANDING_PAGE.SERVICES.SRI_AMOUNTS",link:i.a.SRI_AMOUNTS,isAvailable:!1,imageUrl:s.l.LANDING_SERVICES+"sri-amounts.png"},{name:"LANDING_PAGE.SERVICES.ONLINE_PAYMENTS",link:i.a.ONLINE_PAYMENTS,isAvailable:!1,imageUrl:s.l.LANDING_SERVICES+"online-payments.png"}];function u(n,a){1&n&&(e.TgZ(0,"p",4),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"LANDING_PAGE.UNAVAILABLE_SERVICE"),""))}const A=function(n,a){return{"service-card--available":n,"service-card--unavailable":a}};let E=(()=>{class n{constructor(){this.service={}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-service-card"]],inputs:{service:"service"},decls:10,vars:22,consts:[[1,"service-card","bg-color--light",3,"routerLink","ngClass"],[1,"service-card__img",3,"src","alt"],[1,"service-card__name","text-color--gray-dark"],["class","service-card__status text-color--gray-dark",4,"ngIf"],[1,"service-card__status","text-color--gray-dark"]],template:function(t,o){1&t&&(e.TgZ(0,"a",0),e.ALo(1,"translate"),e.ALo(2,"translate"),e.ALo(3,"translate"),e._UZ(4,"img",1),e.ALo(5,"translate"),e.TgZ(6,"p",2),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.YNc(9,u,3,3,"p",3),e.qZA()),2&t&&(e.Q6J("routerLink",o.service.isAvailable?o.service.link:null)("ngClass",e.WLB(19,A,o.service.isAvailable,!o.service.isAvailable)),e.uIk("aria-disabled",!o.service.isAvailable)("tabindex",0)("aria-label",o.service.isAvailable?e.lcZ(1,9,o.service.name):e.lcZ(2,11,o.service.name)+e.lcZ(3,13,"LANDING_PAGE.UNAVAILABLE_SERVICE")),e.xp6(4),e.Q6J("src",o.service.imageUrl,e.LSH)("alt",e.lcZ(5,15,o.service.name)),e.xp6(3),e.Oqu(e.lcZ(8,17,o.service.name)),e.xp6(2),e.Q6J("ngIf",!o.service.isAvailable))},dependencies:[c.mk,c.O5,g.rH,l.X$],styles:[".bg-color--primary[_ngcontent-%COMP%]{background-color:#29367e}.bg-color--light[_ngcontent-%COMP%]{background-color:#fff}.bg-color--dark[_ngcontent-%COMP%]{background-color:#000}.bg-color--gray-dark[_ngcontent-%COMP%]{background-color:#474747}.bg-color--info[_ngcontent-%COMP%]{background-color:#0c5763}.bg-color--danger[_ngcontent-%COMP%]{background-color:#b3000f}.bg-color--success[_ngcontent-%COMP%]{background-color:#1b5f24}.bg-color--gray-light[_ngcontent-%COMP%]{background-color:#d9d9d9}.service-card[_ngcontent-%COMP%]{display:block;width:194px;height:204px;text-align:center;display:flex;flex-direction:column;justify-content:space-between;align-items:center;border-color:#d9d9d9;border-style:solid;border-width:1px 3px;border-radius:10px;padding:20px;transition:all .3s ease;text-decoration:none}.service-card__img[_ngcontent-%COMP%]{height:105px}.service-card__status[_ngcontent-%COMP%]{font-size:12px}.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.service-card--available[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:0 0 20px 1px #29367e;-webkit-box-shadow:0px 0px 20px 1px #29367E;-moz-box-shadow:0px 0px 20px 1px #29367E}.service-card--unavailable[_ngcontent-%COMP%]{pointer-events:none}"]}),n})();function N(n,a){1&n&&e._UZ(0,"app-service-card",4),2&n&&e.Q6J("service",a.$implicit)}const f=[{path:i.a.INFRINGEMENTS_AMT,loadChildren:()=>r.e(343).then(r.bind(r,5343)).then(n=>n.InfringementsModule)},{path:"",component:m,children:[{path:"",component:(()=>{class n{constructor(){this.services=v}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-services"]],decls:6,vars:4,consts:[[1,"container"],[1,"title--h1","text-color--link"],[1,"services"],[3,"service",4,"ngFor","ngForOf"],[3,"service"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,N,1,1,"app-service-card",3),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,2,"LANDING_PAGE.TITLE")),e.xp6(3),e.Q6J("ngForOf",o.services))},dependencies:[c.sg,E,l.X$],styles:[".container[_ngcontent-%COMP%]{padding:20px}h1[_ngcontent-%COMP%]{text-align:center;margin-top:0}.services[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;column-gap:70px;row-gap:35px;max-width:750px;margin:auto}"]}),n})()}]},{path:"**",loadChildren:()=>r.e(592).then(r.bind(r,4489)).then(n=>n.ErrorPagesModule)}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(f),g.Bz]}),n})();var I=r(6208);let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,S,I.m,l.aw.forChild()]}),n})()}}]);