import{d as y,g as n,o as i,e as r,j as d,k,n as c,t as h}from"./vue.esm-bundler-Cg6rw2kB.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x={key:0,class:"custom-checkbox__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"white","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},v={class:"custom-checkbox__label"},m=y({__name:"checkbox",props:{modelValue:{type:Boolean,default:!1},label:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:p}){const l=o,b=p,e=n(l.modelValue),f=()=>{l.disabled||(e.value=!e.value,b("update:modelValue",e.value))};return(s,t)=>(i(),r("div",{class:c(["custom-checkbox",{"custom-checkbox--disabled":l.disabled}]),onClick:f},[d("div",{class:c(["custom-checkbox__box",{"custom-checkbox__box--checked":e.value,"custom-checkbox__box--disabled":s.disabled,"custom-checkbox__box--disabled--checked":s.disabled&&e.value}])},[e.value?(i(),r("svg",x,t[0]||(t[0]=[d("polyline",{points:"20 6 9 17 4 12"},null,-1)]))):k("",!0)],2),d("span",v,h(s.label),1)],2))}}),u=g(m,[["__scopeId","data-v-0b0f549d"]]);m.__docgenInfo={exportName:"default",displayName:"checkbox",type:1,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[],exposed:[{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/Users/ula/Work/electron/common/my-ui-kit/src/components/common/checkbox/checkbox.vue"};const C={title:"Example/Checkbox",component:u,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},args:{disabled:!1,label:"Test Label"}},a={render:o=>({components:{Checkbox:u},setup(){return{args:o,modelValue1:n(!1),modelValue2:n(!1),modelValue3:n(!0),disabled:!1}},template:`
      <div style="display: flex; gap: 20px;">
     <Checkbox v-model="modelValue1" label="Checkbox" />
     <Checkbox disabled v-model="modelValue2" label="Checkbox disabled" />
     <Checkbox disabled v-model="modelValue3" label="Disabled and checked" />
      </div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args,
        modelValue1: ref(false),
        modelValue2: ref(false),
        modelValue3: ref(true),
        disabled: false
      };
    },
    template: \`
      <div style="display: flex; gap: 20px;">
     <Checkbox v-model="modelValue1" label="Checkbox" />
     <Checkbox disabled v-model="modelValue2" label="Checkbox disabled" />
     <Checkbox disabled v-model="modelValue3" label="Disabled and checked" />
      </div>\`
  })
}`,...a.parameters?.docs?.source}}};const w=["Example"];export{a as Example,w as __namedExportsOrder,C as default};
