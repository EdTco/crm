(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0caf973c"],{"10e8":function(e,t,i){"use strict";i("b37f")},1482:function(e,t,i){},2423:function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"d",(function(){return s})),i.d(t,"a",(function(){return l})),i.d(t,"e",(function(){return r}));var n=i("b775");function a(){return Object(n["a"])({url:"/clients/list",method:"get"})}function o(e){return Object(n["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:e}})}function s(e){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:e}})}function l(e){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:e})}},"3bd9":function(e,t,i){"use strict";i("68f8")},"68f8":function(e,t,i){},"828d":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o}));var n=i("b775");function a(e){return Object(n["a"])({url:"/vue-element-admin/search/user",method:"get",params:{name:e}})}function o(e){return Object(n["a"])({url:"/vue-element-admin/transaction/list",method:"get",params:e})}},8978:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"createPost-container"},[i("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules}},[i("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.status}},[i("CommentDropdown",{model:{value:e.postForm.comment_disabled,callback:function(t){e.$set(e.postForm,"comment_disabled",t)},expression:"postForm.comment_disabled"}}),i("PlatformDropdown",{model:{value:e.postForm.platforms,callback:function(t){e.$set(e.postForm,"platforms",t)},expression:"postForm.platforms"}}),i("SourceUrlDropdown",{model:{value:e.postForm.source_uri,callback:function(t){e.$set(e.postForm,"source_uri",t)},expression:"postForm.source_uri"}}),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:e.submitForm}},[e._v(" Publish ")]),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:e.draftForm}},[e._v(" Draft ")])],1),i("div",{staticClass:"createPost-main-container"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[i("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:e.postForm.title,callback:function(t){e.$set(e.postForm,"title",t)},expression:"postForm.title"}},[e._v(" Title ")])],1),i("div",{staticClass:"postInfo-container"},[i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Publish Time:"}},[i("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"Select date and time"},model:{value:e.displayTime,callback:function(t){e.displayTime=t},expression:"displayTime"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"90px",label:"Importance:"}},[i("el-rate",{staticStyle:{display:"inline-block"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:e.postForm.importance,callback:function(t){e.$set(e.postForm,"importance",t)},expression:"postForm.importance"}})],1)],1)],1)],1)],1)],1),i("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"70px",label:"Summary:"}},[i("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:e.postForm.content_short,callback:function(t){e.$set(e.postForm,"content_short",t)},expression:"postForm.content_short"}}),i("span",{directives:[{name:"show",rawName:"v-show",value:e.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[e._v(e._s(e.contentShortLength)+"words")])],1),i("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[i("Tinymce",{ref:"editor",attrs:{height:400},model:{value:e.postForm.content,callback:function(t){e.$set(e.postForm,"content",t)},expression:"postForm.content"}})],1),i("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"image_uri"}},[i("Upload",{model:{value:e.postForm.image_uri,callback:function(t){e.$set(e.postForm,"image_uri",t)},expression:"postForm.image_uri"}})],1)],1)],1)],1)},a=[],o=(i("d81d"),i("b0c0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tinymce-container",class:{fullscreen:e.fullscreen},style:{width:e.containerWidth}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:e.tinymceId}}),e._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:e.imageSuccessCBK}})],1)])}),s=[],l=(i("b680"),i("a9e3"),i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:e.color,borderColor:e.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(" upload ")]),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":e.fileList,"show-file-list":!0,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v(" Click upload ")])],1),i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(" Cancel ")]),i("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(" Confirm ")])],1)],1)}),r=[],c=(i("b64b"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var e=this;return Object.keys(this.listObj).every((function(t){return e.listObj[t].hasSuccess}))},handleSubmit:function(){var e=this,t=Object.keys(this.listObj).map((function(t){return e.listObj[t]}));this.checkAllSuccess()?(this.$emit("successCBK",t),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(e,t){for(var i=t.uid,n=Object.keys(this.listObj),a=0,o=n.length;a<o;a++)if(this.listObj[n[a]].uid===i)return this.listObj[n[a]].url=e.files.file,void(this.listObj[n[a]].hasSuccess=!0)},handleRemove:function(e){for(var t=e.uid,i=Object.keys(this.listObj),n=0,a=i.length;n<a;n++)if(this.listObj[i[n]].uid===t)return void delete this.listObj[i[n]]},beforeUpload:function(e){var t=this,i=window.URL||window.webkitURL,n=e.uid;return this.listObj[n]={},new Promise((function(a,o){var s=new Image;s.src=i.createObjectURL(e),s.onload=function(){t.listObj[n]={hasSuccess:!1,uid:e.uid,width:this.width,height:this.height}},a(!0)}))}}}),u=c,d=(i("ed12"),i("2877")),m=Object(d["a"])(u,l,r,!1,null,"e92a3050",null),p=m.exports,h=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],f=h,g=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],v=g,b=i("b85c"),y=[];function w(){return window.tinymce}var _=function(e,t){var i=document.getElementById(e),n=t||function(){};if(!i){var a=document.createElement("script");a.src=e,a.id=e,document.body.appendChild(a),y.push(n);var o="onload"in a?s:l;o(a)}function s(t){t.onload=function(){this.onerror=this.onload=null;var e,i=Object(b["a"])(y);try{for(i.s();!(e=i.n()).done;){var n=e.value;n(null,t)}}catch(a){i.e(a)}finally{i.f()}y=null},t.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+e),t)}}function l(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var t,i=Object(b["a"])(y);try{for(i.s();!(t=i.n()).done;){var n=t.value;n(null,e)}}catch(a){i.e(a)}finally{i.f()}y=null}}}i&&n&&(w()?n(null,i):y.push(n))},k=_,x="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",C={name:"Tinymce",components:{editorImage:p},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var e=this.width;return/^[\d]+(\.[\d]+)?$/.test(e)?"".concat(e,"px"):e}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(t.tinymceId).setContent(e||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var e=this;k(x,(function(t){t?e.$message.error(t.message):e.initTinymce()}))},initTinymce:function(){var e=this,t=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:v,menubar:this.menubar,plugins:f,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){t.value&&i.setContent(t.value),t.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",(function(){e.hasChange=!0,e.$emit("input",i.getContent())}))},setup:function(e){e.on("FullscreenStateChanged",(function(e){t.fullscreen=e.state}))},convert_urls:!1})},destroyTinymce:function(){var e=window.tinymce.get(this.tinymceId);this.fullscreen&&e.execCommand("mceFullScreen"),e&&e.destroy()},setContent:function(e){window.tinymce.get(this.tinymceId).setContent(e)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(e){var t=this;e.forEach((function(e){return window.tinymce.get(t.tinymceId).insertContent('<img class="wscnph" src="'.concat(e.url,'" >'))}))}}},S=C,F=(i("af96"),Object(d["a"])(S,o,s,!1,null,"5b920c83",null)),j=F.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-container"},[i("el-upload",{staticClass:"image-uploader",attrs:{data:e.dataObj,multiple:!1,"show-file-list":!1,"on-success":e.handleImageSuccess,drag:"",action:"https://httpbin.org/post"}},[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[e._v(" Drag the file here, or"),i("em",[e._v("Click upload")])])]),i("div",{staticClass:"image-preview image-app-preview"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[i("img",{attrs:{src:e.imageUrl}}),i("div",{staticClass:"image-preview-action"},[i("i",{staticClass:"el-icon-delete",on:{click:e.rmImage}})])])]),i("div",{staticClass:"image-preview"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[i("img",{attrs:{src:e.imageUrl}}),i("div",{staticClass:"image-preview-action"},[i("i",{staticClass:"el-icon-delete",on:{click:e.rmImage}})])])])],1)},$=[],I=i("b775");function V(){return Object(I["a"])({url:"/qiniu/upload/token",method:"get"})}var E={name:"SingleImageUpload3",props:{value:{type:String,default:""}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""}}},computed:{imageUrl:function(){return this.value}},methods:{rmImage:function(){this.emitInput("")},emitInput:function(e){this.$emit("input",e)},handleImageSuccess:function(e){this.emitInput(e.files.file)},beforeUpload:function(){var e=this,t=this;return new Promise((function(i,n){V().then((function(n){var a=n.data.qiniu_key,o=n.data.qiniu_token;t._data.dataObj.token=o,t._data.dataObj.key=a,e.tempUrl=n.data.qiniu_url,i(!0)})).catch((function(e){console.log(e),n(!1)}))}))}}},P=E,M=(i("da7e"),Object(d["a"])(P,O,$,!1,null,"10c32c6b",null)),T=M.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"material-input__component",class:e.computedClasses},[i("div",{class:{iconClass:e.icon}},[e.icon?i("i",{staticClass:"el-input__icon material-input__icon",class:["el-icon-"+e.icon]}):e._e(),"email"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"email"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"url"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"url"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"number"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,step:e.step,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"number"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"password"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,required:e.required,type:"password"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"tel"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"tel"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"text"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"text"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),i("span",{staticClass:"material-input-bar"}),i("label",{staticClass:"material-label"},[e._t("default")],2)])])},q=[],N={name:"MdInput",props:{icon:String,name:String,type:{type:String,default:"text"},value:[String,Number],placeholder:String,readonly:Boolean,disabled:Boolean,min:String,max:String,step:String,minlength:Number,maxlength:Number,required:{type:Boolean,default:!0},autoComplete:{type:String,default:"off"},validateEvent:{type:Boolean,default:!0}},data:function(){return{currentValue:this.value,focus:!1,fillPlaceHolder:null}},computed:{computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--raised":Boolean(this.focus||this.currentValue)}}},watch:{value:function(e){this.currentValue=e}},methods:{handleModelInput:function(e){var t=e.target.value;this.$emit("input",t),"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.change",[t]),this.$emit("change",t)},handleMdFocus:function(e){this.focus=!0,this.$emit("focus",e),this.placeholder&&""!==this.placeholder&&(this.fillPlaceHolder=this.placeholder)},handleMdBlur:function(e){this.focus=!1,this.$emit("blur",e),this.fillPlaceHolder=null,"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.blur",[this.currentValue])}}},U=N,L=(i("10e8"),Object(d["a"])(U,B,q,!1,null,"e87247ea",null)),R=L.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.height+"px",zIndex:e.zIndex}},[i("div",{class:e.className,style:{top:e.isSticky?e.stickyTop+"px":"",zIndex:e.zIndex,position:e.position,width:e.width,height:e.height+"px"}},[e._t("default",[i("div",[e._v("sticky")])])],2)])},D=[],A={name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var e=this.$el.getBoundingClientRect().width;this.width=e||"auto";var t=this.$el.getBoundingClientRect().top;t<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}},H=A,K=Object(d["a"])(H,z,D,!1,null,null,null),W=K.exports,J=i("61f7"),X=i("2423"),G=i("828d"),Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",[e._v(" Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details "),i("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[e._v("Document")])])}],Z={},ee=Object(d["a"])(Z,Q,Y,!1,null,null,null),te=ee.exports,ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[i("el-button",{attrs:{plain:""}},[e._v(" "+e._s(e.comment_disabled?"Comment: closed":"Comment: opened")+" "),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),i("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("el-radio-group",{staticStyle:{padding:"10px"},model:{value:e.comment_disabled,callback:function(t){e.comment_disabled=t},expression:"comment_disabled"}},[i("el-radio",{attrs:{label:!0}},[e._v(" Close comment ")]),i("el-radio",{attrs:{label:!1}},[e._v(" Open comment ")])],1)],1)],1)],1)},ne=[],ae={props:{value:{type:Boolean,default:!1}},computed:{comment_disabled:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},oe=ae,se=Object(d["a"])(oe,ie,ne,!1,null,null,null),le=se.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[i("el-button",{attrs:{plain:""}},[e._v(" Platfroms("+e._s(e.platforms.length)+") "),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),i("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:e.platforms,callback:function(t){e.platforms=t},expression:"platforms"}},e._l(e.platformsOptions,(function(t){return i("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1)},ce=[],ue={props:{value:{required:!0,default:function(){return[]},type:Array}},data:function(){return{platformsOptions:[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}]}},computed:{platforms:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},de=ue,me=Object(d["a"])(de,re,ce,!1,null,null,null),pe=me.exports,he=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[i("el-button",{attrs:{plain:""}},[e._v(" Link "),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),i("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"source_uri"}},[i("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:e.source_uri,callback:function(t){e.source_uri=t},expression:"source_uri"}},[i("template",{slot:"prepend"},[e._v(" URL ")])],2)],1)],1)],1)},fe=[],ge={props:{value:{type:String,default:""}},computed:{source_uri:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},ve=ge,be=Object(d["a"])(ve,he,fe,!1,null,null,null),ye=be.exports,we={status:"draft",title:"",content:"",content_short:"",source_uri:"",image_uri:"",display_time:void 0,id:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0},_e={name:"ArticleDetail",components:{Tinymce:j,MDinput:R,Upload:T,Sticky:W,Warning:te,CommentDropdown:le,PlatformDropdown:pe,SourceUrlDropdown:ye},props:{isEdit:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,i,n){""===i?(e.$message({message:t.field+"Must pass",type:"error"}),n(new Error(t.field+"Must pass"))):n()},i=function(t,i,n){i?Object(J["e"])(i)?n():(e.$message({message:"The external link url is incorrectly filled",type:"error"}),n(new Error("The external link url is incorrectly filled"))):n()};return{postForm:Object.assign({},we),loading:!1,userListOptions:[],rules:{image_uri:[{validator:t}],title:[{validator:t}],content:[{validator:t}],source_uri:[{validator:i,trigger:"blur"}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.content_short.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(e){this.postForm.display_time=new Date(e)}}},created:function(){if(this.isEdit){var e=this.$route.params&&this.$route.params.id;this.fetchData(e)}this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(e){var t=this;Object(X["b"])(e).then((function(e){t.postForm=e.data,t.postForm.title+="   Article Id:".concat(t.postForm.id),t.postForm.content_short+="   Article Id:".concat(t.postForm.id),t.setTagsViewTitle(),t.setPageTitle()})).catch((function(e){console.log(e)}))},setTagsViewTitle:function(){var e="Edit Article",t=Object.assign({},this.tempRoute,{title:"".concat(e,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",t)},setPageTitle:function(){var e="Edit Article";document.title="".concat(e," - ").concat(this.postForm.id)},submitForm:function(){var e=this;console.log(this.postForm),this.$refs.postForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$notify({title:"success",message:"Published the article successfully",type:"success",duration:2e3}),e.postForm.status="published",e.loading=!1}))},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?(this.$message({message:"Saved successfully",type:"success",showClose:!0,duration:1e3}),this.postForm.status="draft"):this.$message({message:"Please fill in the necessary title and content",type:"warning"})},getRemoteUserList:function(e){var t=this;Object(G["a"])(e).then((function(e){e.data.items&&(t.userListOptions=e.data.items.map((function(e){return e.name})))}))}}},ke=_e,xe=(i("3bd9"),Object(d["a"])(ke,n,a,!1,null,"a3765ec0",null));t["a"]=xe.exports},af96:function(e,t,i){"use strict";i("c431")},b37f:function(e,t,i){},c431:function(e,t,i){},da7e:function(e,t,i){"use strict";i("f1e5")},ed12:function(e,t,i){"use strict";i("1482")},f1e5:function(e,t,i){}}]);