import{l,A as i,o,e as u,a as c,t as d,d as m,y as p}from"./app-1caeec8c.js";const f={class:"text-sm text-red-600"},_={name:"InputError",props:{message:String},setup(t){return(s,e)=>l((o(),u("div",null,[c("p",f,d(t.message),1)],512)),[[i,t.message]])}},g=["value"],h={name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(t,{expose:s}){const e=m(null);return p(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(n,a)=>(o(),u("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:t.modelValue,onInput:a[0]||(a[0]=r=>n.$emit("update:modelValue",r.target.value))},null,40,g))}};export{h as _,_ as a};