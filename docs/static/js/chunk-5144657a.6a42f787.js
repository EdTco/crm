(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5144657a"],{"133c":function(e,t,a){"use strict";a("7c25")},"3cbc":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pan-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[e._t("default")],2)]),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+e.image+")"}})])},i=[],n=(a("a9e3"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),r=n,c=(a("133c"),a("2877")),l=Object(c["a"])(r,s,i,!1,null,"799537af",null);t["a"]=l.exports},"7c25":function(e,t,a){},"7fdc":function(e,t,a){},ecac:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.user?a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,xs:24}},[a("user-card",{attrs:{user:e.user}})],1),a("el-col",{attrs:{span:18,xs:24}},[a("el-card",[a("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"Account",name:"account"}},[a("account",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1):e._e()])},i=[],n=a("5530"),r=(a("b0c0"),a("a15b"),a("2f62")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("About me")])]),a("div",{staticClass:"user-profile"},[a("div",{staticClass:"box-center"},[a("pan-thumb",{attrs:{image:e.user.avatar,height:"100px",width:"100px",hoverable:!1}},[a("div",[e._v("Hello")]),e._v(" "+e._s(e.user.role)+" ")])],1),a("div",{staticClass:"box-center"},[a("div",{staticClass:"user-name text-center"},[e._v(e._s(e.user.name))]),a("div",{staticClass:"user-role text-center text-muted"},[e._v(e._s(e._f("uppercaseFirst")(e.user.role)))])])]),a("div",{staticClass:"user-bio"},[a("div",{staticClass:"user-education user-bio-section"},[a("div",{staticClass:"user-bio-section-header"},[a("svg-icon",{attrs:{"icon-class":"education"}}),a("span",[e._v("Education")])],1),a("div",{staticClass:"user-bio-section-body"},[a("div",{staticClass:"text-muted"},[e._v(" Student at the Mariano Galvez University of Guatemlaa ")])])])])])},l=[],u=a("3cbc"),o={components:{PanThumb:u["a"]},props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",role:""}}}}},d=o,m=(a("fdbb"),a("2877")),p=Object(m["a"])(d,c,l,!1,null,"26dda972",null),b=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",[a("el-form-item",{attrs:{label:"Name"}},[a("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name","string"===typeof t?t.trim():t)},expression:"user.name"}})],1),a("el-form-item",{attrs:{label:"Email"}},[a("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"===typeof t?t.trim():t)},expression:"user.email"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("Update")])],1)],1)},v=[],h={props:{user:{type:Object,default:function(){return{name:"",email:""}}}},methods:{submit:function(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},x=h,_=Object(m["a"])(x,f,v,!1,null,null,null),g=_.exports,y={name:"Profile",components:{UserCard:b,Account:g},data:function(){return{user:{},activeTab:"account"}},computed:Object(n["a"])({},Object(r["b"])(["name","avatar","roles"])),created:function(){this.getUser()},methods:{getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar}}}},C=y,w=Object(m["a"])(C,s,i,!1,null,null,null);t["default"]=w.exports},fdbb:function(e,t,a){"use strict";a("7fdc")}}]);