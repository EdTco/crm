(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d7218c6"],{2400:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"Name"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"Status",clearable:""},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"Type",clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.calendarTypeOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name+"("+t.key+")",value:t.key}})})),1),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" Search ")]),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(" Add ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v(" Export ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":t.getSortClass("id")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.customerId))])]}}])}),a("el-table-column",{attrs:{label:"Date",width:"230px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.utilTimestamp))])]}}])}),a("el-table-column",{attrs:{label:"Name","min-width":"110px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",{staticClass:"link-type",on:{click:function(e){return t.handleUpdate(i)}}},[t._v(t._s(i.name))]),a("el-tag",[t._v(t._s(t._f("typeFilter")(i.type)))])]}}])}),a("el-table-column",{attrs:{label:"Last Name",width:"190px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.lastname))])]}}])}),t.showReviewer?a("el-table-column",{attrs:{label:"Status",width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",{staticStyle:{color:"red"}},[t._v(t._s(i.status))])]}}],null,!1,2304502525)}):t._e(),a("el-table-column",{attrs:{label:"Email",width:"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.email))])]}}])}),a("el-table-column",{attrs:{label:"Status","class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tag",{attrs:{type:t._f("statusFilter")(i.status)}},[t._v(" "+t._s(i.status)+" ")])]}}])}),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,n=e.$index;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(i)}}},[t._v(" Edit ")]),"active"!=i.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.handleModifyStatus(i,"active")}}},[t._v(" Active ")]):t._e(),"inactive"!=i.status?a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleModifyStatus(i,"inactive")}}},[t._v(" Inactive ")]):t._e(),"deleted"!=i.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(i,n)}}},[t._v(" Delete ")]):t._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"City",prop:"city"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),1)],1),a("el-form-item",{attrs:{label:"Date",prop:"utilTimestamp"}},[a("el-date-picker",{attrs:{disabled:!0,type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.utilTimestamp,callback:function(e){t.$set(t.temp,"utilTimestamp",e)},expression:"temp.utilTimestamp"}})],1),a("el-form-item",{attrs:{label:"Name",prop:"name"}},[a("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),a("el-form-item",{attrs:{label:"Status"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-form-item",{attrs:{label:"Email"}},[a("el-input",{model:{value:t.temp.email,callback:function(e){t.$set(t.temp,"email",e)},expression:"temp.email"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" Cancel ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(" Confirm ")])],1)],1),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},n=[],l=(a("c740"),a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("2423")),s=(a("8d41"),"@@wavesContext");function o(t,e){function a(a){var i=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var s=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",l.appendChild(o)),n.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return t[s]?t[s].removeHandle=a:t[s]={removeHandle:a},a}var r={bind:function(t,e){t.addEventListener("click",o(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[s].removeHandle,!1),t.addEventListener("click",o(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[s].removeHandle,!1),t[s]=null,delete t[s]}},u=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(u)),r.install=u;var c=r,d=a("ed08"),p=a("333d"),m=[{key:"QT",display_name:"Quetzaltenango"},{key:"TOT",display_name:"Totonicapan"},{key:"KI",display_name:"Kiche"},{key:"SM",display_name:"San Marcos"}],f=m.reduce((function(t,e){return t[e.key]=e.display_name,t}),{}),h={name:"ComplexTable",components:{Pagination:p["a"]},directives:{waves:c},filters:{statusFilter:function(t){var e={active:"success",inactive:"info"};return e[t]},typeFilter:function(t){return f[t]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:m,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["active","inactive"],showReviewer:!1,temp:{id:void 0,importance:1,email:"",utilTimestamp:new Date,name:"",type:"",status:"active"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{name:[{required:!0,message:"Name is required",trigger:"change"}],email:[{required:!0,message:"Email is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(l["c"])(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,setTimeout((function(){t.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"Operate Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,email:"",utilTimestamp:new Date,name:"",status:"active",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",Object(l["a"])(t.temp).then((function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.utilTimestamp=new Date(this.temp.utilTimestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);a.utilTimestamp=+new Date(a.utilTimestamp),Object(l["e"])(a).then((function(){var e=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(e,1,t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(t,e){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(l["d"])(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-6e87ca78"),a.e("chunk-71e3923d"),a.e("chunk-2125b98f")]).then(a.bind(null,"4bf8")).then((function(e){var a=["timestamp","title","type","importance","status"],i=["timestamp","title","type","importance","status"],n=t.formatJson(i);e.export_json_to_excel({header:a,data:n,filename:"table-list"}),t.downloadLoading=!1}))},formatJson:function(t){return this.list.map((function(e){return t.map((function(t){return"utilTimestamp"===t?Object(d["d"])(e[t]):e[t]}))}))},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"}}},y=h,v=a("2877"),g=Object(v["a"])(y,i,n,!1,null,null,null);e["default"]=g.exports},2423:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return l})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return r}));var i=a("b775");function n(t){return Object(i["a"])({url:"/clients/list",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:t}})}function s(t){return Object(i["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function o(t){return Object(i["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},n=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,a){var i=o(),n=t-i,r=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=r;var o=Math.easeInOutQuad(u,i,n,e);s(o),u<e?l(t):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},c=u,d=(a("adf1"),a("2877")),p=Object(d["a"])(c,i,n,!1,null,"508d8d49",null);e["a"]=p.exports},"8d41":function(t,e,a){},adf1:function(t,e,a){"use strict";a("f97e")},f97e:function(t,e,a){}}]);