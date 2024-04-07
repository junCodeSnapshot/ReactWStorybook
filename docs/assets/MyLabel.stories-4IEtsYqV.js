import{j as v}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const b=({label:C,size:x="normal",color:g="text-secondary",fontColor:L,caps:h=!1})=>v.jsx("div",{className:`${x} ${g}`,style:{textTransform:`${h?"uppercase":"lowercase"}`,color:L},children:C});b.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Label text"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Size of the label",defaultValue:{value:'"normal"',computed:!1}},caps:{required:!1,tsType:{name:"boolean"},description:"Caps",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' |'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color of the label",defaultValue:{value:"'text-secondary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Color of the text"}}};const q={title:"MyLabel",component:b,tags:["autodocs"],argTypes:{size:{control:"select"},fontColor:{control:"color"},color:{control:"select"}},parameters:{layout:"centered"}},e={args:{label:"Basic Label",caps:!1}},a={args:{label:"All Caps Label",caps:!0}},r={args:{label:"Secondary Label",caps:!1,color:"text-secondary"}},s={args:{label:"Custom Color Label",caps:!1,fontColor:"yellow"}};var l,o,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label',
    caps: false
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,c,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    caps: true
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,i,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    caps: false,
    color: 'text-secondary'
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,f,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    caps: false,
    fontColor: 'yellow'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const w=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,s as CustomColor,r as Secondary,w as __namedExportsOrder,q as default};
