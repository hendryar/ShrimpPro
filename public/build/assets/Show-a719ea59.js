import{_ as c}from"./AppLayout-41132de3.js";import p from"./DeleteUserForm-284109c6.js";import l from"./LogoutOtherBrowserSessionsForm-68cef102.js";import{S as s}from"./SectionBorder-5c9da452.js";import f from"./TwoFactorAuthenticationForm-6b81f3a9.js";import u from"./UpdatePasswordForm-d8aa8b18.js";import d from"./UpdateProfileInformationForm-59628c08.js";import{c as _,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-1caeec8c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-57502cc1.js";import"./SectionTitle-61d3bb15.js";import"./DangerButton-56aa47e5.js";import"./TextInput-3dc92b32.js";import"./SecondaryButton-e566ec98.js";import"./ActionMessage-e961195c.js";import"./PrimaryButton-891ffdd6.js";import"./InputLabel-08a6190b.js";import"./FormSection-7b60bb16.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
