import{d as f,m as i,g as t,o as y,e as g,j as m,t as B,u,n as q,p as r,f as x}from"./vue.esm-bundler-Cg6rw2kB.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const O="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let v=(e=21)=>{let o="",a=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)o+=O[a[e]&63];return o};const w={class:"radio-button__label"},h=f({__name:"radio-button",props:{label:{default:""},value:{default:""}},emits:["update:modelValue"],setup(e,{emit:o}){const a=e,d=i("groupValue",t("")),s=i("isDisabled",t(!1)),n=i("updateValue"),p=t(d.value===a.value),_=()=>{!s.value&&n&&n(a.value)};return(V,c)=>(y(),g("div",{key:u(v)(),class:q(["radio-button",{"radio-button--checked":p.value,"radio-button--disabled":u(s)}]),onClick:_},[c[0]||(c[0]=m("div",{class:"radio-button__circle"},null,-1)),m("span",w,B(V.label),1)],2))}}),C=b(h,[["__scopeId","data-v-21066c43"]]);h.__docgenInfo={exportName:"default",displayName:"radio-button",type:1,props:[{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"value",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[],exposed:[{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"value",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/Users/ula/Work/electron/common/my-ui-kit/src/components/common/radio/radio-button.vue"};const k=f({__name:"radio-group",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const a=e,d=o,s=t(a.modelValue);return r("groupValue",s),r("updateValue",n=>{a.disabled||(s.value=n,d("update:modelValue",n))}),r("isDisabled",t(a.disabled)),(n,p)=>(y(),g("div",{key:u(v)(),class:"radio-group"},[x(n.$slots,"default",{},void 0,!0)]))}}),R=b(k,[["__scopeId","data-v-7f6c30bc"]]);k.__docgenInfo={exportName:"default",displayName:"radio-group",type:1,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/Users/ula/Work/electron/common/my-ui-kit/src/components/common/radio/radio-group.vue"};const G={title:"Example/RadioGroup",component:R,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},args:{disabled:!1,label:"Test Label"}},l={render:e=>({components:{RadioGroup:R,RadioButton:C},setup(){return{args:e,selectedOption:t(""),disabled:t(!1)}},template:`
      <div style="display: flex; gap: 20px;">
      <RadioGroup v-model="selectedOption" :disabled="disabled">
        <RadioButton label="Телефон" value="Телефон" />
        <RadioButton label="Почта" value="Почта" />
        <RadioButton label="Личный сайт" value="Личный сайт" />
        <RadioButton label="Telegram" value="Telegram" />
        <RadioButton label="WhatsApp" value="WhatsApp" />
        <RadioButton label="Instagram" value="Instagram" />
        <RadioButton label="VK" value="VK" />
        <RadioButton label="Одноклассники" value="Одноклассники" />
      </RadioGroup>
      
      Выбрано: {{selectedOption}}
      </div>`})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioGroup,
      RadioButton
    },
    setup() {
      return {
        args,
        selectedOption: ref(''),
        disabled: ref(false)
      };
    },
    template: \`
      <div style="display: flex; gap: 20px;">
      <RadioGroup v-model="selectedOption" :disabled="disabled">
        <RadioButton label="Телефон" value="Телефон" />
        <RadioButton label="Почта" value="Почта" />
        <RadioButton label="Личный сайт" value="Личный сайт" />
        <RadioButton label="Telegram" value="Telegram" />
        <RadioButton label="WhatsApp" value="WhatsApp" />
        <RadioButton label="Instagram" value="Instagram" />
        <RadioButton label="VK" value="VK" />
        <RadioButton label="Одноклассники" value="Одноклассники" />
      </RadioGroup>
      
      Выбрано: {{selectedOption}}
      </div>\`
  })
}`,...l.parameters?.docs?.source}}};const K=["Example"];export{l as Example,K as __namedExportsOrder,G as default};
