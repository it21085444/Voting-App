(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{8504:function(e,t,n){Promise.resolve().then(n.bind(n,6502))},6463:function(e,t,n){"use strict";var a=n(1169);n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}})},6502:function(e,t,n){"use strict";n.r(t);var a=n(7437),o=n(2265),s=n(6463);t.default=function(){let[e,t]=(0,o.useState)([]),[n,i]=(0,o.useState)(!1),r=(0,s.useRouter)();(0,o.useEffect)(()=>{let e=localStorage.getItem("token");if(!e){r.push("/login");return}let n=async()=>{let e=await fetch("".concat("https://voting-app-ui85.onrender.com","/api/votes"));t(await e.json())};(async()=>{let t=await fetch("".concat("https://voting-app-ui85.onrender.com","/api/users/me"),{headers:{Authorization:"Bearer ".concat(e)}});t.ok?"admin"===(await t.json()).role?(i(!0),n()):r.push("/voting"):r.push("/login")})()},[r]);let c=async n=>{let a=localStorage.getItem("token");(await fetch("".concat("https://voting-app-ui85.onrender.com","/api/vote/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}})).ok&&t(e.filter(e=>e._id!==n))};return n?(0,a.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-r from-[#e0f7fa] to-[#80deea] p-6",children:(0,a.jsxs)("div",{className:"w-full max-w-3xl",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-center text-black",children:"Manage Polls"}),e.map(e=>(0,a.jsxs)("div",{className:"border border-gray-300 p-6 rounded-lg mb-6 bg-white shadow-lg",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-4 text-black",children:e.question}),(0,a.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"single"===e.type?"Single Choice":"Multiple Choice"}),(0,a.jsx)("button",{onClick:()=>c(e._id),className:"w-full p-2 bg-red-500 text-white rounded mt-4",children:"Delete Poll"})]},e._id))]})}):(0,a.jsx)("div",{children:"Loading..."})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=8504)}),_N_E=e.O()}]);