import{j as s}from"./react-three-BdgxNMf0_v2.js";import{c as r}from"./config-CKpVJ2R__v2.js";import{L as a}from"./vendor-DgkQOziQ_v2.js";const c=()=>s.jsxs("div",{className:"myworks-page",children:[s.jsx("style",{children:`
  .myworks-page {
    width: 100%;
    min-height: 100vh;
    background-color: #050a12;
    color: #e6f0fa;
    padding: 80px 0;
    font-family: 'Geist', sans-serif;
  }
  .myworks-header {
    max-width: 1000px;
    margin: 0 auto 60px;
    padding: 0 40px;
    position: relative;
    box-sizing: border-box;
  }
  .back-button {
    display: inline-block;
    margin-bottom: 20px;
    color: #00ffff;
    font-size: 16px;
    text-decoration: none;
    transition: transform 0.2s;
  }
  .back-button:hover {
    transform: translateX(-5px);
  }
  .myworks-header h1 {
    font-size: 48px;
    font-weight: 500;
    margin: 0 0 10px 0;
  }
  .myworks-header h1 span {
    color: #00ffff;
  }
  .myworks-header p {
    color: #adacac;
    font-size: 16px;
    margin: 0;
  }
  .myworks-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .myworks-box {
    width: 100%;
    max-width: 1000px;
    padding: 60px 40px;
    border-bottom: 1px solid #363636;
    box-sizing: border-box;
  }
  .myworks-box:last-child {
    border-bottom: none;
  }
  .myworks-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 28px;
    text-align: left;
  }
  .myworks-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
    padding-bottom: 15px;
  }
  .myworks-number {
    font-size: 50px;
    line-height: 50px;
    font-weight: 600;
    color: #00ffff;
    margin: 0;
  }
  .myworks-title-meta {
    text-align: right;
  }
  .myworks-title-meta h4 {
    font-size: 28px;
    font-weight: 500;
    margin: 0;
    color: #ffffff;
  }
  .myworks-title-meta p {
    font-size: 14px;
    color: #adacac;
    margin: 6px 0 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .myworks-desc-section h4 {
    font-size: 16px;
    font-weight: 600;
    color: #00ffff;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .myworks-desc-section p {
    font-size: 16px;
    line-height: 1.7;
    color: #adacac;
    margin: 0;
  }
  .myworks-features-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 10px;
  }
  .myworks-feature-item {
    font-size: 15px;
    color: #adacac;
    display: flex;
    gap: 8px;
    line-height: 1.5;
  }
  .myworks-feature-item strong {
    color: #ffffff;
  }
  .myworks-links {
    display: flex;
    gap: 15px;
    margin-top: 10px;
  }
  .myworks-btn {
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .myworks-btn.live {
    background: #00ffff;
    color: #000;
  }
  .myworks-btn.live:hover {
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
    transform: translateY(-2px);
  }
  .myworks-btn.code {
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;
  }
  .myworks-btn.code:hover {
    border-color: #00ffff;
    color: #00ffff;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    .myworks-box {
      padding: 40px 20px;
    }
    .myworks-header {
      padding: 0 20px;
    }
    .myworks-header h1 {
      font-size: 36px;
    }
    .myworks-features-list {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
`}),s.jsxs("div",{className:"myworks-header",children:[s.jsx(a,{to:"/",className:"back-button","data-cursor":"disable",children:"← Back to Home"}),s.jsxs("h1",{children:["All ",s.jsx("span",{children:"Works"})]}),s.jsx("p",{children:"A detailed showcase of my technical projects and system implementations"})]}),s.jsx("div",{className:"myworks-list",children:r.projects.map((r,a)=>s.jsxs("div",{className:"myworks-box","data-cursor":"disable",children:[s.jsxs("div",{className:"myworks-info",children:[s.jsxs("div",{className:"myworks-title-row",children:[s.jsxs("h3",{className:"myworks-number",children:["0",a+1]}),s.jsxs("div",{className:"myworks-title-meta",children:[s.jsx("h4",{children:r.title}),s.jsx("p",{children:r.category})]})]}),s.jsxs("div",{className:"myworks-desc-section",children:[s.jsx("h4",{children:"Project Overview"}),s.jsx("p",{children:r.description})]}),r.features&&s.jsxs("div",{className:"myworks-desc-section",children:[s.jsx("h4",{children:"Core Features & How it works"}),s.jsx("div",{className:"myworks-features-list",children:r.features.map((feat,idx)=>s.jsxs("div",{className:"myworks-feature-item",children:[s.jsx("span",{style:{color:"#00ffff",marginRight:"8px"},children:"✓"}),s.jsxs("strong",{children:[feat.name,": "]}),feat.details]},idx))})]}),r.techStack?s.jsxs("div",{className:"myworks-desc-section",children:[s.jsx("h4",{children:"Tech Stack"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},children:[s.jsxs("p",{style:{fontSize:"15px"},children:[s.jsx("strong",{style:{color:"#ffffff"},children:"Frontend: "}),r.techStack.frontend]}),s.jsxs("p",{style:{fontSize:"15px"},children:[s.jsx("strong",{style:{color:"#ffffff"},children:"Backend & Database: "}),r.techStack.backend]})]})]}):s.jsxs("div",{className:"myworks-desc-section",children:[s.jsx("h4",{children:"Tools and features"}),s.jsx("p",{children:r.technologies})]}),s.jsxs("div",{className:"myworks-links",children:[s.jsxs("a",{href:r.liveLink||"#",target:"_blank",rel:"noopener noreferrer",className:"myworks-btn live","data-cursor":"disable",children:["Live Demo"]}),s.jsxs("a",{href:r.githubLink||"#",target:"_blank",rel:"noopener noreferrer",className:"myworks-btn code","data-cursor":"disable",children:["GitHub Code"]})]})]})]},r.id))})]});export{c as default};
