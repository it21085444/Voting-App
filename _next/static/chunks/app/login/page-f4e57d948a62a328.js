(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{8363:function(e,t,o){Promise.resolve().then(o.bind(o,4604))},4604:function(e,t,o){"use strict";o.r(t);var n=o(7437),i=o(2265),r=o(7138);t.default=function(){let[e,t]=(0,i.useState)({email:"",password:""}),o=o=>{t({...e,[o.target.name]:o.target.value})},a=async t=>{t.preventDefault();let o=await fetch("".concat("https://voting-app-ui85.onrender.com","/api/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(o.ok){let e=await o.json();localStorage.setItem("token",e.token),window.location.href="/voting"}else console.error("Login failed")};return(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(to right, #e0f7fa, #80deea)"},children:(0,n.jsxs)("form",{onSubmit:a,style:{border:"1px solid #ddd",padding:"20px",borderRadius:"10px",width:"300px",backgroundColor:"#ffffff",boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.2)"},children:[(0,n.jsx)("h2",{style:{textAlign:"center",marginBottom:"20px",color:"#333"},children:"Login"}),(0,n.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,n.jsx)("label",{style:{display:"block",marginBottom:"5px",color:"#555"},children:"Email"}),(0,n.jsx)("input",{type:"email",name:"email",value:e.email,onChange:o,style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},required:!0})]}),(0,n.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,n.jsx)("label",{style:{display:"block",marginBottom:"5px",color:"#555"},children:"Password"}),(0,n.jsx)("input",{type:"password",name:"password",value:e.password,onChange:o,style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},required:!0})]}),(0,n.jsx)("button",{type:"submit",style:{width:"100%",padding:"10px",backgroundColor:"#800000",color:"white",border:"none",borderRadius:"5px"},children:"Login"}),(0,n.jsxs)("p",{style:{marginTop:"10px",textAlign:"center",color:"#666"},children:["Don't have an account?"," ",(0,n.jsx)(r.default,{href:"/signup",style:{color:"#800000",textDecoration:"underline"},children:"Sign Up"})]})]})})}}},function(e){e.O(0,[138,971,23,744],function(){return e(e.s=8363)}),_N_E=e.O()}]);