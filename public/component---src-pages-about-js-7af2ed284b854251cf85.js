"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[682],{9813:function(e,a,t){var r=t(7294),n=t(2530);a.Z=e=>{let{children:a}=e;const{0:t,1:l}=(0,r.useState)(0),{0:c,1:o}=(0,r.useState)(!0),{width:m}=(0,n.Z)(),s=()=>{const e=window.scrollY;o(t>e||e<80),l(e)};return(0,r.useEffect)((()=>{if(m>600)return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s);o(!1)}),[t,c,s]),r.createElement("div",{className:"page-header "+(c?"":"page-header-hide")},a)}},5465:function(e,a,t){t.r(a),t.d(a,{Head:function(){return u}});var r=t(7294),n=t(1883),l=t(7441),c=t(6359),o=t(8032),m=t(3750),s=t(9813),i=t(8421),d=t(9357);const u=()=>r.createElement(d.Z,{title:"About"});a.default=e=>{let{data:a}=e;const{designApproach:t,featuredProjects:d,headline:u,whoWeAre:p,whoWeAreImage:h,philosophy:E}=a.contentfulAboutLObservatoire,g=a.allContentfulAward.nodes,b=a.allContentfulBook.nodes,N=d.slice(0,3),f=d.slice(3);return r.createElement(c.Z,null,r.createElement(s.Z,null,r.createElement(n.Link,{to:"/about/#top"},"About")," |"," ",r.createElement(n.Link,{to:"/about/#who"},"Who we are")," |"," ",r.createElement(n.Link,{to:"/about/#philosophy"},"Our philosophy")," |"," ",r.createElement(n.Link,{to:"/about/#approach"},"Design approach")," |"," ",r.createElement(n.Link,{to:"/about/#awards"},"Awards")," |"," ",r.createElement(n.Link,{to:"/about/#books"},"Books")),r.createElement("div",{className:"about-page"},r.createElement(i.pT,{triggerOnce:!0},r.createElement("div",{dangerouslySetInnerHTML:{__html:l.TU.parse(u.headline)},className:"about-page-headline",id:"top"})),r.createElement("div",{className:"about-featured"},N.map(((e,a)=>r.createElement(i.pT,{triggerOnce:!0,key:a,className:"about-featured-link"},r.createElement("div",null,r.createElement(o.G,{image:e.heroImage.gatsbyImageData,alt:e.heroImage.description,className:"about-featured-image"}),r.createElement("p",null,e.projectName)))))),r.createElement(i.pT,{triggerOnce:!0,fraction:.25},r.createElement("div",{className:"anchor-margin",id:"who"}),r.createElement("div",{className:"home-container about-section"},r.createElement("p",{className:"home-preface-link"},"Who We Are"),r.createElement("div",{dangerouslySetInnerHTML:{__html:l.TU.parse(p.whoWeAre)},className:"home-right about-text"})),r.createElement("div",{className:"about-featured-link sierras"},r.createElement(o.G,{image:h.image.gatsbyImageData,alt:h.image.description,className:"about-featured-image"}),r.createElement("p",null,h.caption))),r.createElement(i.pT,{triggerOnce:!0,fraction:.25},r.createElement("div",{className:"anchor-margin",id:"philosophy"}),r.createElement("div",{className:"home-container about-section"},r.createElement("p",{className:"home-preface-link"},"Our Philosophy"),r.createElement("div",{dangerouslySetInnerHTML:{__html:l.TU.parse(E.philosophy)},className:"home-right about-text"}))),r.createElement("div",{className:"about-featured"},f.map(((e,a)=>r.createElement(i.pT,{triggerOnce:!0,className:"about-featured-link",key:a},r.createElement("div",null,r.createElement(o.G,{image:e.heroImage.gatsbyImageData,alt:e.heroImage.description,className:"about-featured-image"}),r.createElement("p",null,e.projectName)))))),r.createElement(i.pT,{triggerOnce:!0,fraction:.25},r.createElement("div",{className:"anchor-margin",id:"approach"}),r.createElement("div",{className:"home-container about-section"},r.createElement("p",{className:"home-preface-link"},"Our Design Approach"),r.createElement("div",{dangerouslySetInnerHTML:{__html:l.TU.parse(t.designApproach)},className:"home-right about-text"}))),r.createElement(i.pT,{triggerOnce:!0,fraction:.25},r.createElement("div",{className:"anchor-margin",id:"awards"}),r.createElement("div",{className:"home-container about-section"},r.createElement("p",{className:"home-preface-link"},"Awards"),r.createElement("div",{className:"home-right about-awards"},r.createElement("h2",null,"Our most recent awards"),r.createElement("div",{className:"about-awards-container"},g.map((e=>r.createElement("div",{key:e.id},r.createElement("hr",{className:"faded"}),r.createElement("div",{className:"about-award"},r.createElement("div",null,r.createElement("p",{className:"upper"},e.awardName),r.createElement("p",null,e.project[0].projectName)),r.createElement("p",{className:"faded"},e.year)))))),r.createElement("hr",{className:"faded"}),r.createElement(n.Link,{to:"/awards",className:"home-link"},r.createElement(m.lzl,null)," See All")))),r.createElement(i.pT,{triggerOnce:!0,fraction:.25},r.createElement("div",{className:"anchor-margin",id:"books"}),r.createElement("div",{className:"home-container about-section"},r.createElement("p",{className:"home-preface-link"},"Books"),r.createElement("div",{className:"home-right about-books"},b.map((e=>r.createElement("div",{key:e.id,className:"about-book-container"},r.createElement(o.G,{image:e.bookImage.gatsbyImageData,alt:e.bookImage.description}),r.createElement("p",null,e.publisher,", ",e.publicationYear),r.createElement("div",{dangerouslySetInnerHTML:{__html:l.TU.parse(e.description.description)}}),r.createElement("a",{href:e.purchaseLink,target:"_blank",rel:"noreferrer",className:"home-link"},r.createElement(m.lzl,null),"Order Here")))))))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-7af2ed284b854251cf85.js.map