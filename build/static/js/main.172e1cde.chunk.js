(this.webpackJsonpserver=this.webpackJsonpserver||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,c){},function(e,n,c){},function(e,n,c){},,function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){"use strict";c.r(n);var t=c(2),s=c.n(t),a=c(7),i=c.n(a),r=(c(14),c(15),c(4)),l=(c(16),c(6)),o=c(1),d=function(e){var n=e.pageRefs;return Object(o.jsx)("section",{id:"home",className:"landing-section",ref:function(e){return n.current=Object(r.a)(Object(r.a)({},n.current),{},{home:e})},children:Object(o.jsx)("div",{className:"landing-flex",children:Object(o.jsxs)("div",{className:"landing-text",children:[Object(o.jsxs)("div",{className:"flex-row",children:["Hello, I'm\xa0",Object(o.jsx)("span",{children:"Trevor Howard"})]}),Object(o.jsxs)("div",{className:"flex-row",children:["I'm passionate about creating",Object(o.jsx)("br",{}),"and maintaining elegant applications"]}),Object(o.jsx)("div",{className:"project-button",onClick:function(){return n.current.projects.scrollIntoView({behavior:"smooth"})},children:Object(o.jsxs)("div",{className:"btn",children:["View Projects ",Object(o.jsx)(l.c,{})]})})]})})})},j=c(3),u=(c(18),c(8)),b=c.p+"static/media/Trevor Howard - Resume.ddc1870b.pdf",m=c.p+"static/media/Trevor Howard - Resume.9895f735.docx";var A=function(e){var n=e.pageRefs,c=Object(t.useState)(!1),s=Object(j.a)(c,2),a=s[0],i=s[1],r=Object(t.useRef)();function d(e){n.current[e].scrollIntoView({behavior:"smooth"})}function A(e){n.current[e].scrollIntoView({behavior:"smooth"}),document.getElementById("mobile-checkbox").checked=!1}return Object(t.useEffect)((function(){var e=function(e){r.current&&!r.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[a,r]),Object(o.jsx)("div",{className:"fixed-nav",children:Object(o.jsxs)("nav",{ref:r,children:[Object(o.jsxs)("div",{className:"header",onClick:function(){return d("home")},children:[Object(o.jsx)("div",{children:"Trevor Howard"}),Object(o.jsx)("div",{children:"Software Developer"})]}),Object(o.jsxs)("div",{className:"nav-bar",children:[Object(o.jsx)("div",{className:"page-link",onClick:function(){return d("home")},children:"Home"}),Object(o.jsx)("div",{className:"page-link",onClick:function(){return d("projects")},children:"Projects"}),Object(o.jsx)("div",{className:"page-link",onClick:function(){return d("contact")},children:"Contact"}),Object(o.jsx)("div",{className:"page-link",onClick:function(){return i(!a)},children:"Resume"}),a&&Object(o.jsx)("div",{className:"resume-container",children:Object(o.jsx)("div",{className:"resume-dropdown",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){return window.open(b,"_blank")},children:"PDF"}),Object(o.jsx)("li",{onClick:function(){return window.open(m,"_blank","noopener,noreferrer")},children:"DOCX"})]})})})]}),Object(o.jsxs)("div",{className:"mobile-nav-toggle",children:[Object(o.jsx)("input",{id:"mobile-checkbox",type:"checkbox"}),Object(o.jsx)("span",{}),Object(o.jsx)("span",{}),Object(o.jsx)("span",{}),Object(o.jsx)("div",{id:"mobile-menu",children:Object(o.jsxs)("div",{className:"page-link-padding",children:[Object(o.jsxs)("div",{className:"page-link",onClick:function(){return A("home")},children:[Object(o.jsx)(u.b,{}),"Home"]}),Object(o.jsxs)("div",{className:"page-link",onClick:function(){return A("projects")},children:[Object(o.jsx)(u.a,{}),"Projects"]}),Object(o.jsxs)("div",{className:"page-link",onClick:function(){return A("contact")},children:[Object(o.jsx)(u.c,{}),"Contact"]}),Object(o.jsxs)("div",{className:"resume-mobile-flex",children:[a&&Object(o.jsx)(l.b,{}),Object(o.jsxs)("div",{className:"page-link",onClick:function(){return i(!a)},children:[Object(o.jsx)(l.d,{}),"Resume"]})]}),a&&Object(o.jsx)("div",{className:"resume-container",children:Object(o.jsx)("div",{className:"resume-dropdown",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){return window.open(b,"_blank")},children:"PDF"}),Object(o.jsx)("li",{onClick:function(){return window.open(m,"_blank","noopener,noreferrer")},children:"DOCX"})]})})})]})})]})]})})},O=(c(19),c(20),c(5)),h=document.getElementById("modal-root");function v(e,n){var c=e.children,s=e.fade,i=void 0!==s&&s,r=e.defaultOpened,l=void 0!==r&&r,d=Object(t.useState)(l),u=Object(j.a)(d,2),b=u[0],m=u[1],A=Object(t.useCallback)((function(){m(!1),document.getElementsByClassName("fixed-nav")[0].classList.remove("hidden-nav")}),[]);Object(t.useImperativeHandle)(n,(function(){return{open:function(){return m(!0)},close:A}}),[A]);var v=Object(t.useCallback)((function(e){27===e.keyCode&&A()}),[A]);return Object(t.useEffect)((function(){return b&&document.addEventListener("keydown",v,!1),function(){document.removeEventListener("keydown",v,!1)}}),[v,b]),Object(a.createPortal)(b?Object(o.jsx)("div",{className:"modal-wrap ".concat(i?"modal-fade":""),children:Object(o.jsxs)("div",{className:"modal",children:[Object(o.jsx)("span",{role:"button",className:"modal-close","aria-label":"close",onClick:A,children:Object(o.jsx)(O.a,{})}),Object(o.jsxs)("div",{className:"modal-body",children:[c,Object(o.jsx)("div",{className:"mobile-close-modal",onClick:A,children:"Close modal"})]})]})}):null,h)}var x=Object(t.forwardRef)(v),f=c.p+"static/media/more-than-tired-logo.5ded002d.svg",p=function(e){var n=e.pageRefs,c=Object(t.useRef)(null),s=Object(t.useRef)(null),a=Object(t.useRef)(null),i=Object(t.useRef)(null),l=Object(t.useState)("hover-hidden"),d=Object(j.a)(l,2),u=d[0],b=d[1],m=Object(t.useState)("hover-hidden"),A=Object(j.a)(m,2),h=A[0],v=A[1],p=Object(t.useState)("hover-hidden"),g=Object(j.a)(p,2),k=g[0],S=g[1],C=Object(t.useState)("hover-hidden"),w=Object(j.a)(C,2);w[0],w[1];return Object(o.jsx)("section",{id:"projects",className:"projects-section",ref:function(e){return n.current=Object(r.a)(Object(r.a)({},n.current),{},{projects:e})},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"section-header",children:["Projects",Object(o.jsx)("div",{className:"section-header-bar"})]}),Object(o.jsx)("div",{className:"project-gallery",children:Object(o.jsxs)("div",{className:"project-cards",children:[Object(o.jsxs)("div",{className:"card",onClick:function(){c.current.open(),document.getElementsByClassName("fixed-nav")[0].className+=" hidden-nav"},onMouseEnter:function(){return b("hover-show")},onMouseLeave:function(){return b("hover-hidden")},children:[Object(o.jsx)(O.c,{className:"discord-icon"}),Object(o.jsx)("div",{className:u,children:Object(o.jsx)("div",{className:"hover-title",children:"Discord Bot"})})]}),Object(o.jsxs)(x,{ref:c,true:!0,children:[Object(o.jsx)("div",{className:"project-gifs"}),Object(o.jsxs)("div",{className:"project-description",children:["A commissioned Discord bot with fun and managerial commands for Saints Hall clan, playing Old School Runescape.",Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"MongoDB for storage needs"}),Object(o.jsx)("li",{children:"Express front-end"}),Object(o.jsx)("li",{children:"Node back-end"})]})]}),Object(o.jsxs)("div",{className:"project-btns",children:[Object(o.jsx)("div",{className:"project-link-btn btn",onClick:function(){return window.open("https://www.saintshall.com","_blank")},children:"View Site"}),Object(o.jsx)("div",{className:"project-source-btn btn",onClick:function(){return window.open("https://replit.com/@RelliKBooN/SaintsHallDiscordBot","_blank")},children:"View Source"}),Object(o.jsxs)("div",{className:"discord-btn btn",onClick:function(){return window.open("https://discord.gg/UuAtKjcgk5","_blank")},children:["Play on Discord!",Object(o.jsx)("span",{children:"(requires discord login)"})]})]})]}),Object(o.jsxs)("div",{className:"card",onClick:function(){s.current.open(),document.getElementsByClassName("fixed-nav")[0].className+=" hidden-nav"},onMouseEnter:function(){return v("hover-show")},onMouseLeave:function(){return v("hover-hidden")},children:[Object(o.jsx)("img",{src:f,alt:"More than tired"}),Object(o.jsx)("div",{className:h,children:Object(o.jsx)("div",{className:"hover-title",children:"More Than Tired"})})]}),Object(o.jsx)(x,{ref:s,fade:!0,children:"Project Modal 2"}),Object(o.jsxs)("div",{className:"card",onClick:function(){a.current.open(),document.getElementsByClassName("fixed-nav")[0].className+=" hidden-nav"},onMouseEnter:function(){return S("hover-show")},onMouseLeave:function(){return S("hover-hidden")},children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"Narcolepsy Link"}),Object(o.jsx)("div",{className:k,children:Object(o.jsx)("div",{className:"hover-title",children:"Narcolepsy Link"})})]}),Object(o.jsx)(x,{ref:a,true:!0,children:"Project Modal 3"}),Object(o.jsx)("div",{className:"card",onClick:function(){i.current.open(),document.getElementsByClassName("fixed-nav")[0].className+=" hidden-nav"},children:"Project Image 4"}),Object(o.jsx)(x,{ref:i,fade:!0,children:"Project Modal 4"})]})})]})})},g=(c(21),function(e){var n=e.pageRefs,c=Object(t.useState)(""),s=Object(j.a)(c,2),a=s[0],i=s[1],l=Object(t.useState)(!0),d=Object(j.a)(l,2),u=d[0],b=d[1],m=Object(t.useState)(""),A=Object(j.a)(m,2),O=A[0],h=A[1],v=Object(t.useState)(!0),x=Object(j.a)(v,2),f=x[0],p=x[1],g=Object(t.useState)(""),k=Object(j.a)(g,2),S=k[0],C=k[1],w=Object(t.useState)(!1),N=Object(j.a)(w,2),R=N[0],B=N[1],E=Object(t.useState)(!1),I=Object(j.a)(E,2),J=I[0],y=I[1];return Object(o.jsx)("section",{id:"contact",className:"contact-section",ref:function(e){return n.current=Object(r.a)(Object(r.a)({},n.current),{},{contact:e})},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"section-header",children:["Contact",Object(o.jsx)("div",{className:"section-header-bar"})]}),R&&Object(o.jsx)("h4",{children:"Something went wrong sending the email, please wait a moment and try again."}),!J&&Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=document.getElementsByClassName("submit-btn")[0],c=document.getElementById("loading").classList;if(n.disabled=!0,c.add("lds-hourglass"),a){var t={mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a,email:O,info:S})};fetch("/contact",t).then((function(e){200===e.status?(i(""),h(""),C(""),y(!0)):B(!0),n.disabled=!1,c.remove("lds-hourglass")}))}else document.getElementById("contact-name").focus(),b(!1),n.disabled=!1,c.remove("lds-hourglass")},className:"contact-form-flex",children:[Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsxs)("div",{className:"name-flex-column",children:[Object(o.jsx)("input",{type:"text",id:"contact-name",value:a,onChange:function(e){return i(e.target.value)},placeholder:"Name"}),!u&&Object(o.jsx)("div",{className:"name-invalid",children:"Please enter your name."})]}),Object(o.jsxs)("div",{className:"email-flex-column",children:[Object(o.jsx)("input",{type:"text",value:O,onChange:function(e){return function(e){var n=e.target.value;h(n),/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(n)||""===n?p(!0):p(!1)}(e)},placeholder:"Email"}),!f&&Object(o.jsx)("div",{className:"email-invalid",children:"Please enter your email address, or leave this field blank."})]})]}),Object(o.jsx)("textarea",{type:"text",value:S,onChange:function(e){return C(e.target.value)},placeholder:"Additional Info (please include preferred way to contact you)"}),Object(o.jsx)("input",{type:"submit",value:"Submit",className:"btn submit-btn",disabled:!f}),Object(o.jsx)("div",{id:"loading"})]}),J&&Object(o.jsx)("h3",{children:"Thank you for reaching out! I will be in contact with you shortly!"})]})})}),k=(c(22),function(){return Object(o.jsxs)("section",{id:"footer",className:"footer-section",children:[Object(o.jsx)("div",{className:"chevron-up",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(o.jsx)(l.a,{})}),Object(o.jsxs)("div",{className:"icon-wrap flex-row",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/trevor-howard-ut/",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)(O.e,{})}),Object(o.jsx)("a",{href:"https://github.com/trevorh2007",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)(O.d,{})})]}),Object(o.jsxs)("div",{className:"copyright",children:["TREVOR HOWARD\xa0",Object(o.jsx)(O.b,{}),(new Date).getFullYear()]})]})}),S=function(){var e=Object(t.useRef)({});return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(A,{pageRefs:e}),Object(o.jsx)(d,{pageRefs:e}),Object(o.jsx)(p,{pageRefs:e}),Object(o.jsx)(g,{pageRefs:e}),Object(o.jsx)(k,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(n){var c=n.getCLS,t=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;c(e),t(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),C()}],[[23,1,2]]]);
//# sourceMappingURL=main.172e1cde.chunk.js.map