(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"title":"Bento Buzz - AI assisted news curation.","description":"Bento Buzz harnesses the power of artificial intelligence to sift through a thousand news stories daily, assigning them a score ranging from 0 to 10 to gauge their significance. Only stories earning a score surpassing 7 are featured.","id":"bentobuzz","url":"https://www.bentobuzz.xyz","tags":"UI / UX, Development, React, AI, ChatGPT"},{"title":"Coin Feed - News aggregator app for Crypto.","description":"A news aggregator app that presents all that\'s going in the Crypto & Web 3 landscape in a sleek interface, letting you pick and choose your sources and re-arrange them based on your preferences. No ads, no bloat, just content in an intuitive interface.","id":"coinfeed","url":"https://www.producthunt.com/posts/coin-feed","tags":"UI / UX, Development, React Native, Web3"},{"title":"Ping Pong AI","description":"I built a ping-pong game where you play against an AI bot that gets better with every level. This project walks you through the entire design process and talks briefly about the development details.","id":"ping-pong","url":"https://eccentricdz.github.io/ping-pong-react/","tags":"UI / UX, Web Design, Web Development, Branding"},{"title":"Learning Motion Design","description":"I am learning motion design and this collection showcases some of my work.","id":"motion","url":"https://dribbble.com/eccentricdz/collections/2036293-Learning-Motion-Design","tags":"Motion Design, Animation, Lottie, Amazon Web Dev Con","extension":"gif"},{"title":"Logofolio 2023","description":"A collection of logos I designed between 2021 - 2023.","id":"logofolio-2023","url":"https://www.behance.net/gallery/171730325/Logofolio-2021-2023","tags":"Branding, Graphic Design","extension":"png"},{"title":"Alpha & Omega","description":"Identity design for Alpha & Omega, a trading company based out of Belize.","id":"alphaomega","url":"https://www.behance.net/gallery/102488509/Alpha-Omega","tags":"Branding, Graphic Design, Creative Direction"},{"title":"Jeevan - Mental Health Awareness Campaign","description":"Jeevan is a NGO based out of Jamshedpur, India that aims to reduce the stigma around mental health. I have been working with this NGO to design graphics for their social media outreach and related events and the project showcases some of them.","id":"jeevan","url":"https://www.behance.net/gallery/103796937/Jeevan-Mental-Health-Awareness-Campaign","tags":"Illustration, Graphic Design, Volunteering"},{"title":"Watercolor Portraits","description":"I picked up this hobby during the ongoing lockdown, trying to learn how to paint watercolor portraits. This is a collection of some of my paintings.","id":"watercolor-portraits","url":"https://www.behance.net/gallery/101867293/Watercolor-Portraits","tags":"Watercolors, Painting, Portraits"}]')},,,,function(e,t,a){e.exports=a(27)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(5),o=a.n(s);a(15),a(16),a(17);class r extends i.a.Component{render(){return i.a.createElement("p",null,i.a.createElement("a",{className:"my-link",href:this.props.href,target:"_blank",rel:"noopener noreferrer",id:this.props.id,onClick:()=>k({category:"User Action",action:"Link Click",label:this.props.id})},this.props.children))}}a(18);class c extends i.a.Component{render(){return i.a.createElement("div",{className:"my-rotator",id:this.props.id},this.props.elements.map(e=>i.a.createElement("p",{className:"rotating-element",key:e},e)))}}a(19);class l extends i.a.Component{constructor(e){super(e),this.state={content:this.props.initialContent}}setContent(e){this.setState(t=>{if(t.content!==e)return this.props.contentToggleHandler(e),{content:e}})}render(){return i.a.createElement("section",{className:"".concat(this.state.content,"-active content-toggle")},i.a.createElement("div",{className:"content-toggle-button",id:"about",onClick:()=>this.setContent("about")},"About"),i.a.createElement("div",{className:"content-toggle-button",id:"work",onClick:()=>this.setContent("work")},"Work"),i.a.createElement("div",{className:"content-toggle-divider"},i.a.createElement("div",{className:"content-toggle-shifter"})))}}a(20);class d extends i.a.Component{constructor(e){super(e),this.state={switchPosition:"left"},this.toggle=this.toggle.bind(this)}toggle(){this.setState((e,t)=>({switchPosition:"left"===e.switchPosition?"right":"left"})),this.props.handleToggle()}render(){return i.a.createElement("div",{className:"".concat(this.state.switchPosition," toggle-container"),onClick:this.toggle},i.a.createElement("div",{className:"toggle-switch"}))}}a(21),a(22);class h extends i.a.Component{render(){return i.a.createElement("div",{className:"".concat(!0===this.props.shouldClose?"close":"open"," curtain")})}}class m extends i.a.Component{render(){return i.a.createElement("section",{className:"about"},i.a.createElement(h,null),i.a.createElement("p",null,"Hello! ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"I'm a Vancouver-based Software Engineer with a passion for crafting visually stunning and functionally rich user experiences. Equipped with a Bachelor's degree in Computer Science and experience at both Amazon and Cloud Kitchens, I seamlessly blend aesthetics with technical expertise. ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Whether it's building intuitive interfaces, innovating with cutting-edge tech, or bridging the gap between creativity and code, I thrive in dynamic environments. My insatiable curiosity fuels my drive to continuously learn and master new technologies, pushing the boundaries of what's possible. ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Interested in collaborating? Let's chat! Hit me up at",i.a.createElement("br",null),i.a.createElement("a",{className:"about-link",href:"mailto:this.agarwal@gmail.com"},"this.agarwal@gmail.com")))}}a(23);const g=e=>{let{src:t,alt:a}=e;return p.read(t),i.a.createElement("img",{src:t,alt:a})},p={__cache:{},read(e){if(this.__cache[e]||(this.__cache[e]=new Promise(t=>{const a=new Image;a.onload=()=>{this.__cache[e]=!0,t(this.__cache[e])},a.src=e}).then(()=>{this.__cache[e]=!0})),this.__cache[e]instanceof Promise)throw this.__cache[e];return this.__cache[e]}};a(24);const u=()=>i.a.createElement("section",{className:"project skeleton"});class w extends i.a.Component{render(){const e=this.props.tags.split(",").map((e,t)=>i.a.createElement("p",{className:"project-tags",key:t},e));return i.a.createElement("section",{className:"project",id:this.props.id,onClick:()=>this.props.clickHandler(this.props.id)},i.a.createElement("a",{className:"project-link",href:this.props.url,rel:"noopener noreferrer",target:"_blank"},i.a.createElement(g,{src:"".concat("","/project-images/").concat(this.props.id,".").concat(this.props.imageExtension),alt:this.props.title})),i.a.createElement("div",{className:"project-details"},i.a.createElement("div",{className:"project-details-top"},i.a.createElement("p",{className:"project-title"},this.props.title),i.a.createElement("div",{className:"project-divider"}),i.a.createElement("p",{className:"project-description"},this.props.description)),i.a.createElement("div",{className:"project-details-bottom"},e)))}}var E=e=>{let{count:t}=e;const a=[];for(let n=0;n<t;n++)a.push(i.a.createElement(u,{key:n}));return i.a.createElement("div",{className:"skeleton-container"},a)},f=a(2);var b=e=>{let{clickHandler:t}=e;const[a,s]=Object(n.useReducer)((e,t)=>{switch(t.type){case"INCREMENT_PAGE":return{...e,projectCount:f.size,projects:f};default:return e}},{projectCount:6,projects:f.slice(0,6)}),[o,r]=i.a.useTransition({timeoutMs:1e4});return Object(n.useEffect)(()=>{const e=()=>{r(()=>{s({type:"INCREMENT_PAGE"})}),document.removeEventListener("scroll",e)};document.addEventListener("scroll",e)},[s,r]),i.a.createElement("section",{className:"work"},i.a.createElement(h,null),i.a.createElement(n.Suspense,{fallback:i.a.createElement(E,{count:4})},a.projects.map((e,a)=>{const{id:n,description:s,title:o,url:r,tags:c,extension:l}=e;return i.a.createElement(w,{key:a,id:n,title:o,description:s,tags:c,url:r,imageExtension:void 0===l?"jpg":l,clickHandler:e=>t(e)})}),o?i.a.createElement(E,{count:4}):null))},v=a(3);function k(e){v.a.event(e)}class y extends i.a.Component{constructor(e){super(e),this.state={content:"work",showCurtain:!1},this.toggleMode=this.toggleMode.bind(this),this.contentToggleHandler=this.contentToggleHandler.bind(this),this.logUserAction=this.logUserAction.bind(this)}assignColorModeToBody(e){"dark"===e?document.body.classList.add("dark"):document.body.classList.remove("dark")}setInitialColorMode(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.setState({mode:"dark"}),this.assignColorModeToBody("dark"),window.matchMedia("(prefers-color-scheme: dark)")&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{const t=e.matches?"dark":"light";this.setState({mode:t}),this.assignColorModeToBody(t)}))}initializeReactGA(){v.a.initialize("UA-104943545-2"),v.a.pageview("/homepage")}logUserAction(e,t){k({category:"User Action",action:e,label:t})}toggleMode(){this.setState(e=>{const t="light"===e.mode?"dark":"light";return this.assignColorModeToBody(t),this.logUserAction("Dark Mode Toggle",t),{mode:t}})}contentToggleHandler(e){this.setState({showCurtain:!0}),setTimeout(()=>{this.logUserAction("Content Toggle",e),this.setState({content:e,showCurtain:!1})},500)}componentDidMount(){this.initializeReactGA(),this.setInitialColorMode()}render(){return i.a.createElement("div",{className:"".concat(this.state.mode," App")},i.a.createElement("div",{className:"left-grid"},i.a.createElement("div",{className:"grid-lines",id:"left-grid-line-1"}),i.a.createElement("div",{className:"grid-lines",id:"left-grid-line-2"}),i.a.createElement("div",{className:"left-grid-1"},i.a.createElement(d,{handleToggle:this.toggleMode})),i.a.createElement("div",{className:"left-grid-2"},i.a.createElement("div",{className:"left-grid-2-1"},i.a.createElement("section",{className:"primary"},i.a.createElement("p",{id:"my-name"},"Rahul Agarwal"),i.a.createElement(c,{elements:["Developer","Designer","Learner"],id:"primary-rotator"}))),i.a.createElement("div",{className:"left-grid-2-2"},i.a.createElement("section",{className:"account-links-1"},i.a.createElement(r,{href:"https://github.com/eccentricdz",id:"github"},"Github"),i.a.createElement(r,{href:"https://www.behance.net/eccentricdz",id:"behance"},"Behance")),i.a.createElement("section",{className:"account-links-2"},i.a.createElement(r,{href:"https://www.linkedin.com/in/simplyrahul93/",id:"linkedin"},"Linkedin"),i.a.createElement(r,{href:"https://www.instagram.com/createdbyrahul/",id:"instagram"},"Instagram"))))),i.a.createElement("div",{className:"right-grid"},i.a.createElement("div",{className:"grid-lines",id:"right-grid-line-1"}),i.a.createElement("div",{className:"grid-lines",id:"right-grid-line-2"}),i.a.createElement("div",{className:"grid-lines",id:"right-grid-line-3"}),i.a.createElement("div",{className:"right-grid-1"},i.a.createElement(l,{initialContent:this.state.content,contentToggleHandler:this.contentToggleHandler})),i.a.createElement("div",{className:"right-grid-2"},this.state.showCurtain?i.a.createElement(h,{shouldClose:!0}):null,"about"===this.state.content?i.a.createElement(m,null):i.a.createElement(b,{clickHandler:e=>this.logUserAction("Project Click",e)})),i.a.createElement("footer",null,i.a.createElement("div",{className:"left"},"Built with \u2764 during the COVID-19 lockdown."))))}}o.a.createRoot(document.getElementById("root")).render(i.a.createElement(y,null))}],[[6,1,2]]]);
//# sourceMappingURL=main.473f9722.chunk.js.map