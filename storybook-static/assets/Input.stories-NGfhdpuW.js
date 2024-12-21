import{f as _}from"./index-BGHfnJZS.js";import{d as I,g as a,w as q,o as i,e as u,j as p,t as c,n as m,l as M,v as T,k as x}from"./vue.esm-bundler-Cg6rw2kB.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w=["disabled"],B={key:0,class:"custom-input__error-message"},f=I({__name:"input",props:{modelValue:{default:""},placeholder:{default:""},label:{default:""},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{default:""}},emits:["update:modelValue"],setup(t,{emit:b}){const o=t,y=b,l=a(o.modelValue),r=a(!1),n=a(null),h=()=>{r.value=!0},v=()=>{r.value=l.value!==""},V=()=>{!o.disabled&&n.value&&(n.value?.focus(),r.value=!0)};return q(()=>l.value,e=>y("update:modelValue",e)),(e,d)=>(i(),u("div",{class:m(["custom-input",[{"custom-input--active":r.value},{"custom-input--disabled":e.disabled},{"custom-input--error":e.error}]])},[p("label",{class:m(["custom-input__label",{"custom-input__label--error":e.error,"custom-input__label--active":r.value||l.value,"custom-input__label--disabled":e.disabled}]),onClick:V},c(e.label),3),M(p("input",{ref_key:"inputRef",ref:n,"onUpdate:modelValue":d[0]||(d[0]=k=>l.value=k),disabled:e.disabled,placeholder:"",class:"custom-input__field",onFocus:h,onBlur:v},null,40,w),[[T,l.value]]),e.errorMessage?(i(),u("p",B,c(e.errorMessage),1)):x("",!0)],2))}}),g=C(f,[["__scopeId","data-v-c773784f"]]);f.__docgenInfo={exportName:"default",displayName:"input",type:1,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"placeholder",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"error",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"any[]",signature:'(event: "update:modelValue", ...args: any[]): void',declarations:[],schema:["any"]}],slots:[],exposed:[{name:"error",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"label",type:"string",description:"",declarations:[],schema:"string"},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"},{name:"placeholder",type:"string",description:"",declarations:[],schema:"string"},{name:"errorMessage",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/Users/ula/Work/electron/common/my-ui-kit/src/components/common/input/input.vue"};const R={title:"Example/Input",component:g,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},error:{control:"boolean"}},args:{disabled:!1,error:!1,label:"Test Label",onClick:_()}},s={render:t=>({components:{Input:g},setup(){return{args:t,modelValue1:a(""),modelValue2:a(""),modelValue3:a("disabled text"),error:!1}},template:`
      <div style="display: flex; gap: 20px;">
      <Input
          v-model="modelValue1"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="false"
          :error="error"
          :errorMessage="error ? 'Поле обязательно для заполнения' : null"
      />
      <Input
          v-model="modelValue2"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="false"
          :error="true"
          :errorMessage="true ? 'Поле обязательно для заполнения' : null"
      />
      <Input
          v-model="modelValue3"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="true"
          :error="error"
          :errorMessage="error ? 'Поле обязательно для заполнения' : null"
      />
      </div>`})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Input
    },
    setup() {
      return {
        args,
        modelValue1: ref(''),
        modelValue2: ref(''),
        modelValue3: ref('disabled text'),
        error: false
      };
    },
    template: \`
      <div style="display: flex; gap: 20px;">
      <Input
          v-model="modelValue1"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="false"
          :error="error"
          :errorMessage="error ? 'Поле обязательно для заполнения' : null"
      />
      <Input
          v-model="modelValue2"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="false"
          :error="true"
          :errorMessage="true ? 'Поле обязательно для заполнения' : null"
      />
      <Input
          v-model="modelValue3"
          label="Test Label"
          placeholder="Введите текст"
          :disabled="true"
          :error="error"
          :errorMessage="error ? 'Поле обязательно для заполнения' : null"
      />
      </div>\`
  })
}`,...s.parameters?.docs?.source}}};const P=["Example"];export{s as Example,P as __namedExportsOrder,R as default};
