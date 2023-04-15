import{o as i,c as N,w as e,a as t,r as y,v as x,d as b,e as c,b as o,f as v,u as a,F as w,g as $,n as C,t as h,h as l}from"./app-1caeec8c.js";import{_ as L}from"./ActionMessage-e961195c.js";import{_ as z,a as U,b as T}from"./DialogModal-57502cc1.js";import{_ as S}from"./Checkbox-1265d0ef.js";import{_ as W}from"./DangerButton-56aa47e5.js";import{_ as E}from"./FormSection-7b60bb16.js";import{_ as H,a as Y}from"./TextInput-3dc92b32.js";import{_ as B}from"./InputLabel-08a6190b.js";import{_ as I}from"./PrimaryButton-891ffdd6.js";import{_ as A}from"./SecondaryButton-e566ec98.js";import{S as q}from"./SectionBorder-5c9da452.js";import"./SectionTitle-61d3bb15.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},J={class:"sm:flex sm:items-start"},K=t("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{class:"h-6 w-6 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])],-1),O={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Q={class:"text-lg font-medium text-gray-900"},R={class:"mt-4 text-sm text-gray-600"},X={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},Z={name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(d,{emit:P}){const r=()=>{P("close")};return(m,k)=>(i(),N(z,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:r},{default:e(()=>[t("div",G,[t("div",J,[K,t("div",O,[t("h3",Q,[y(m.$slots,"title")]),t("div",R,[y(m.$slots,"content")])])])]),t("div",X,[y(m.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},ee=l(" Create API Token "),se=l(" API tokens allow third-party services to authenticate with our application on your behalf. "),te={class:"col-span-6 sm:col-span-4"},oe={key:0,class:"col-span-6"},ne={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},le={class:"flex items-center"},ae={class:"ml-2 text-sm text-gray-600"},ie=l(" Created. "),re=l(" Create "),ce={key:0},de={class:"mt-10 sm:mt-0"},me=l(" Manage API Tokens "),ue=l(" You may delete any of your existing tokens if they are no longer needed. "),_e={class:"space-y-6"},pe={class:"break-all"},fe={class:"flex items-center ml-2"},ve={key:0,class:"text-sm text-gray-400"},he=["onClick"],ke=["onClick"],ge=l(" API Token "),ye=t("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),xe={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},be=l(" Close "),we=l(" API Token Permissions "),$e={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Ce={class:"flex items-center"},Ae={class:"ml-2 text-sm text-gray-600"},Pe=l(" Cancel "),Te=l(" Save "),Se=l(" Delete API Token "),Be=l(" Are you sure you would like to delete this API token? "),Ie=l(" Cancel "),Fe=l(" Delete "),Ge={name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const r=x({name:"",permissions:d.defaultPermissions}),m=x({permissions:[]}),k=x({}),g=b(!1),_=b(null),p=b(null),F=()=>{r.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,r.reset()}})},V=u=>{m.permissions=u.abilities,_.value=u},j=()=>{m.put(route("api-tokens.update",_.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>_.value=null})},D=u=>{p.value=u},M=()=>{k.delete(route("api-tokens.destroy",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})};return(u,n)=>(i(),c("div",null,[o(E,{onSubmitted:F},{title:e(()=>[ee]),description:e(()=>[se]),form:e(()=>[t("div",te,[o(B,{for:"name",value:"Name"}),o(H,{id:"name",modelValue:a(r).name,"onUpdate:modelValue":n[0]||(n[0]=s=>a(r).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),o(Y,{message:a(r).errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(i(),c("div",oe,[o(B,{for:"permissions",value:"Permissions"}),t("div",ne,[(i(!0),c(w,null,$(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",le,[o(S,{checked:a(r).permissions,"onUpdate:checked":n[1]||(n[1]=f=>a(r).permissions=f),value:s},null,8,["checked","value"]),t("span",ae,h(s),1)])]))),128))])])):v("",!0)]),actions:e(()=>[o(L,{on:a(r).recentlySuccessful,class:"mr-3"},{default:e(()=>[ie]),_:1},8,["on"]),o(I,{class:C({"opacity-25":a(r).processing}),disabled:a(r).processing},{default:e(()=>[re]),_:1},8,["class","disabled"])]),_:1}),d.tokens.length>0?(i(),c("div",ce,[o(q),t("div",de,[o(U,null,{title:e(()=>[me]),description:e(()=>[ue]),content:e(()=>[t("div",_e,[(i(!0),c(w,null,$(d.tokens,s=>(i(),c("div",{key:s.id,class:"flex items-center justify-between"},[t("div",pe,h(s.name),1),t("div",fe,[s.last_used_ago?(i(),c("div",ve," Last used "+h(s.last_used_ago),1)):v("",!0),d.availablePermissions.length>0?(i(),c("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:f=>V(s)}," Permissions ",8,he)):v("",!0),t("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:f=>D(s)}," Delete ",8,ke)])]))),128))])]),_:1})])])):v("",!0),o(T,{show:g.value,onClose:n[3]||(n[3]=s=>g.value=!1)},{title:e(()=>[ge]),content:e(()=>[ye,u.$page.props.jetstream.flash.token?(i(),c("div",xe,h(u.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:e(()=>[o(A,{onClick:n[2]||(n[2]=s=>g.value=!1)},{default:e(()=>[be]),_:1})]),_:1},8,["show"]),o(T,{show:_.value!=null,onClose:n[6]||(n[6]=s=>_.value=null)},{title:e(()=>[we]),content:e(()=>[t("div",$e,[(i(!0),c(w,null,$(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",Ce,[o(S,{checked:a(m).permissions,"onUpdate:checked":n[4]||(n[4]=f=>a(m).permissions=f),value:s},null,8,["checked","value"]),t("span",Ae,h(s),1)])]))),128))])]),footer:e(()=>[o(A,{onClick:n[5]||(n[5]=s=>_.value=null)},{default:e(()=>[Pe]),_:1}),o(I,{class:C(["ml-3",{"opacity-25":a(m).processing}]),disabled:a(m).processing,onClick:j},{default:e(()=>[Te]),_:1},8,["class","disabled"])]),_:1},8,["show"]),o(Z,{show:p.value!=null,onClose:n[8]||(n[8]=s=>p.value=null)},{title:e(()=>[Se]),content:e(()=>[Be]),footer:e(()=>[o(A,{onClick:n[7]||(n[7]=s=>p.value=null)},{default:e(()=>[Ie]),_:1}),o(W,{class:C(["ml-3",{"opacity-25":a(k).processing}]),disabled:a(k).processing,onClick:M},{default:e(()=>[Fe]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ge as default};