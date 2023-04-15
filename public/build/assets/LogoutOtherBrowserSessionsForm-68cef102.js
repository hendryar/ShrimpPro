import{d as p,v,c as k,w as e,o as a,e as n,F as x,g as b,f as V,a as o,b as l,u as i,B,n as S,h as r,t as c}from"./app-1caeec8c.js";import{_ as C}from"./ActionMessage-e961195c.js";import{a as L,b as A}from"./DialogModal-57502cc1.js";import{_ as O,a as $}from"./TextInput-3dc92b32.js";import{_ as w}from"./PrimaryButton-891ffdd6.js";import{_ as H}from"./SecondaryButton-e566ec98.js";import"./SectionTitle-61d3bb15.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=r(" Browser Sessions "),I=r(" Manage and log out your active sessions on other browsers and devices. "),M=o("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),N={key:0,class:"mt-5 space-y-6"},K={key:0,class:"w-8 h-8 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},T=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"},null,-1),U=[T],j={key:1,class:"w-8 h-8 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},D=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"},null,-1),E=[D],P={class:"ml-3"},z={class:"text-sm text-gray-600"},q={class:"text-xs text-gray-500"},G={key:0,class:"text-green-500 font-semibold"},J={key:1},Q={class:"flex items-center mt-5"},R=r(" Log Out Other Browser Sessions "),W=r(" Done. "),X=r(" Log Out Other Browser Sessions "),Y=r(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),Z={class:"mt-4"},ss=r(" Cancel "),es=r(" Log Out Other Browser Sessions "),us={name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(m){const d=p(!1),u=p(null),t=v({password:""}),y=()=>{d.value=!0,setTimeout(()=>u.value.focus(),250)},h=()=>{t.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>_(),onError:()=>u.value.focus(),onFinish:()=>t.reset()})},_=()=>{d.value=!1,t.reset()};return(os,f)=>(a(),k(L,null,{title:e(()=>[F]),description:e(()=>[I]),content:e(()=>[M,m.sessions.length>0?(a(),n("div",N,[(a(!0),n(x,null,b(m.sessions,(s,g)=>(a(),n("div",{key:g,class:"flex items-center"},[o("div",null,[s.agent.is_desktop?(a(),n("svg",K,U)):(a(),n("svg",j,E))]),o("div",P,[o("div",z,c(s.agent.platform?s.agent.platform:"Unknown")+" - "+c(s.agent.browser?s.agent.browser:"Unknown"),1),o("div",null,[o("div",q,[r(c(s.ip_address)+", ",1),s.is_current_device?(a(),n("span",G,"This device")):(a(),n("span",J,"Last active "+c(s.last_active),1))])])])]))),128))])):V("",!0),o("div",Q,[l(w,{onClick:y},{default:e(()=>[R]),_:1}),l(C,{on:i(t).recentlySuccessful,class:"ml-3"},{default:e(()=>[W]),_:1},8,["on"])]),l(A,{show:d.value,onClose:_},{title:e(()=>[X]),content:e(()=>[Y,o("div",Z,[l(O,{ref_key:"passwordInput",ref:u,modelValue:i(t).password,"onUpdate:modelValue":f[0]||(f[0]=s=>i(t).password=s),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:B(h,["enter"])},null,8,["modelValue","onKeyup"]),l($,{message:i(t).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[l(H,{onClick:_},{default:e(()=>[ss]),_:1}),l(w,{class:S(["ml-3",{"opacity-25":i(t).processing}]),disabled:i(t).processing,onClick:h},{default:e(()=>[es]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{us as default};