(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return p});a(9);var A=a(0),n=a.n(A),r=a(188),i=a(195),o=a(191),c=a(193),s=a(186);var l=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,A=a.previous,l=a.next;return n.a.createElement(o.a,{location:this.props.location,title:e},n.a.createElement(c.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),n.a.createElement("h1",{style:{marginTop:Object(s.a)(1),marginBottom:0}},t.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(s.b)(-.2),{display:"block",marginBottom:Object(s.a)(1)})},t.frontmatter.date),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),n.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)}}),n.a.createElement(i.a,null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,A&&n.a.createElement(r.a,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),n.a.createElement("li",null,l&&n.a.createElement(r.a,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →"))))},A}(n.a.Component);e.default=l;var p="3654438753"},186:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var A=a(197),n=a.n(A),r=a(198),i=a.n(r);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new n.a(i.a);var c=o.rhythm,s=o.scale},187:function(t,e,a){var A;t.exports=(A=a(189))&&A.default||A},188:function(t,e,a){"use strict";var A=a(0),n=a.n(A),r=a(13),i=a.n(r),o=a(60),c=a.n(o);a.d(e,"a",function(){return c.a});a(187),n.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},189:function(t,e,a){"use strict";a.r(e);a(9);var A=a(0),n=a.n(A),r=a(13),i=a.n(r),o=a(89),c=function(t){var e=t.location,a=t.pageResources;return a?n.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},191:function(t,e,a){"use strict";a(9),a(185);var A=a(192),n=a(0),r=a.n(n),i=a(188),o=a(190),c=a.n(o),s=a(186);e.a=function(t){var e=A.data,a=t.location,n=t.title,o=t.children,l=r.a.createElement(i.a,{style:{boxShadow:"none"},to:"/"},r.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,alt:n})),p="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0,textAlign:"center"})},l):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,textAlign:"center"}},l);return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},r.a.createElement("header",null,p),r.a.createElement("main",null,o),r.a.createElement("footer",{style:{textAlign:"center",color:"#999",marginTop:Object(s.a)(3.5)}},"© Copyright ",(new Date).getFullYear(),","," ",r.a.createElement("a",{href:"https://macambira.co"},"Walter Macambira"),". Powered by"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"."))}},192:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACUUlEQVQoz12QX2hSYRjGv/VnuxCiupAlMpvmyfNXi2QloxW5zdq6CbawzBqjrFmtuSxiToxoLU0vdC1pSKaeM7GMwosKbVG7Kwhi10HEiCCIbnabPd/hXEQf/Hie9/E573c8hODwPO/lOK4IHsI/AmM0x3wMPk0zeCswgAzNoO3QfZovQPcT7aEWEEfQCWaABcRYlqUXpbQL7wIduIKuU8s2ggRmqteAqC60c/xunuPHRJFzigJ3iuP4Q7wg9qFwCeUR+iB0HCqBRaId+AkQ0fwUOmYQJUbB5mUE1rmDEX06wx6rIPJu1sbMcRybom8KZkEB5VsMw6Sgo4Ig3EBG/9VtzNNQhfboZyFvzG5bs6O+IXeRtDdrZCu9sav3TDdVgWNMkmS3iKJocrlcrclkshO+W6/Xm7Q3M2DeKUmS0eFwbFZf/emWrkac2AY+r1rHP3wyLpFos30gtPzRNfpyG/nnVCoVW7lcPkx9o9EQs9msgfx3PB7POhK8HE1E5qvVF/5YPZgM/LwZrt47klt5/S45ayzK8oVSqRTM5/PbZVn2gFA6nd5UKBR2KYrixW+DdBF0CJxQt4biS45h//21oHnyW64j9vU9E/wzN//MX6o9OSAX5XOKIp/EoqNYcJUugQ+AfvgREABu0IdsCCqpS6/fif9w+iLLKw96ct+HB5u/iI9ZqD/vLT8uulDcC8IoZ0AcnMUcgdqhx8E0OA+mwEF14cJaLTzxqnL6d9XSv5rvSdDs7ZfJ9bWZDEGpBbTi+xEsUfuY26hibqMZZh2FZn8B8yEBe2qDc20AAAAASUVORK5CYII=",width:227,height:110,src:"/static/12c9ae716e574fb19e9f30e810e73a47/c3ec4/logo.png",srcSet:"/static/12c9ae716e574fb19e9f30e810e73a47/c3ec4/logo.png 1x,\n/static/12c9ae716e574fb19e9f30e810e73a47/d56be/logo.png 1.5x,\n/static/12c9ae716e574fb19e9f30e810e73a47/1008e/logo.png 2x"}}}}}},193:function(t,e,a){"use strict";var A=a(194),n=a(0),r=a.n(n),i=a(13),o=a.n(i),c=a(199),s=a.n(c);function l(t){var e=t.description,a=t.lang,n=t.meta,i=t.title,o=A.data.site,c=e||o.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=l},194:function(t){t.exports={data:{site:{siteMetadata:{title:"walter macambira",description:"My personal blog",author:"Walter Macambira"}}}}},195:function(t,e,a){"use strict";a(185);var A=a(196),n=a(0),r=a.n(n),i=a(190),o=a.n(i),c=a(186);e.a=function(){var t=A.data,e=t.site.siteMetadata,a=e.author,n=e.social;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},r.a.createElement(o.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"A fair attempt to express ",r.a.createElement("strong",null,a),"'s opinion about stuff that he works with, hates or enjoys."," ",r.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You can find him on Twitter.")))}},196:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAGrTz7Yug86opwDpCHn/8QAGhAAAwEBAQEAAAAAAAAAAAAAAQIDABIRM//aAAgBAQABBQK1GXI9FbvdE0PgTtteYCP8Ad//xAAWEQEBAQAAAAAAAAAAAAAAAAABAhD/2gAIAQMBAT8BmRMc/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECECH/2gAIAQIBAT8BcjRV/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAECEBMhMSIyYf/aAAgBAQAGPwJRj2YrmUzRzY5eGxMVP//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExQVFhgf/aAAgBAQABPyGop68QfQqr6ga0mQXWG4FhntLNKF+7fY/qxQn/2gAMAwEAAgADAAAAENTofv/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBFR/9oACAEDAQE/EFGzCEFzlf/EABgRAQEBAQEAAAAAAAAAAAAAAAERABBR/9oACAECAQE/EGEmuOhfef/EABwQAQACAgMBAAAAAAAAAAAAAAEAESExQVFhof/aAAgBAQABPxBJYCjqDmYUHra4jrfaASKoXXrMCCmwvN1AI0fGI+3zdjUWnsF8lTO2f//Z",width:50,height:50,src:"/static/19ae708054e8865fab5706258c2f7e26/9b664/profile-pic.jpg",srcSet:"/static/19ae708054e8865fab5706258c2f7e26/9b664/profile-pic.jpg 1x,\n/static/19ae708054e8865fab5706258c2f7e26/06a10/profile-pic.jpg 1.5x,\n/static/19ae708054e8865fab5706258c2f7e26/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Walter Macambira",social:{twitter:"WalterMacambira"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ba0f63ff3ee355aa9924.js.map