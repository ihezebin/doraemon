"use strict";(self.webpackChunk_hezebin_doraemon=self.webpackChunk_hezebin_doraemon||[]).push([[923],{26520:function(P,i,e){e.r(i),e.d(i,{default:function(){return T}});var b=e(5574),h=e.n(b),r=e(67294),a=e(99974),N=e(56790),C=e(64236),n={CaptchaInput:{type:"COMPONENT",id:"CaptchaInput",title:"CaptchaInput",propsConfig:{type:"object",required:[],className:"CaptchaInputProps",additionalProperties:{type:"any"},properties:{disabled:{type:"boolean"},canClick:{type:"boolean"},intervalSec:{type:"number"},placeholder:{type:"string"},onClick:{type:"function",signature:{isAsync:!0,returnType:{type:"any"},arguments:[]},className:"__type"},len:{type:"number"},mode:{type:"string",enum:["inside","outside"]},icon:{type:"reactNode",className:"ReactNode"}}}},ResizeBorder:{type:"COMPONENT",id:"ResizeBorder",title:"ResizeBorder",propsConfig:{type:"object",required:["containerRef"],className:"ResizeBorderProps",additionalProperties:{type:"any"},properties:{containerRef:{type:"object",required:["current"],className:"RefObject",properties:{current:{oneOf:[{type:"any",className:"T"},{const:null}],description:"The current value of the ref."}}},position:{type:"string",enum:["absolute","fixed","relative"]},initial:{type:"object",required:[],className:"__type",properties:{width:{type:"number"},height:{type:"number"},top:{type:"number"},left:{type:"number"}}},minWidth:{type:"number"},minHeight:{type:"number"},maxWidth:{type:"number"},maxHeight:{type:"number"},onMouseDown:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"width",type:"number",isRequired:!0},{key:"height",type:"number",isRequired:!0},{key:"top",type:"number",isRequired:!0},{key:"left",type:"number",isRequired:!0}]},className:"MouseCallBack"},onMouseUp:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"width",type:"number",isRequired:!0},{key:"height",type:"number",isRequired:!0},{key:"top",type:"number",isRequired:!0},{key:"left",type:"number",isRequired:!0}]},className:"MouseCallBack"},onMouseMove:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"width",type:"number",isRequired:!0},{key:"height",type:"number",isRequired:!0},{key:"top",type:"number",isRequired:!0},{key:"left",type:"number",isRequired:!0}]},className:"MouseCallBack"},corners:{type:"array",className:"Array<Corner>",items:{type:"string",enum:["top-left","top-right","bottom-left","bottom-right"],className:"Corner"}},borders:{type:"array",className:"Array<Border>",items:{type:"string",enum:["top","bottom","left","right"],className:"Border"}},pinned:{type:"boolean"}}}},Typewriter:{type:"COMPONENT",id:"Typewriter",title:"Typewriter",propsConfig:{type:"object",required:["text"],className:"TypewriterProps",additionalProperties:{type:"any"},properties:{text:{type:"string"},interval:{type:"number",description:"\u6253\u5B57\u901F\u5EA6",tags:{description:"\u6253\u5B57\u901F\u5EA6",default:"120, timeout \u7684 ms \u503C"},default:"120, timeout \u7684 ms \u503C"},timeout:{type:"number",description:"\u591A\u4E45\u5EF6\u8FDF\u540E\u5F00\u59CB\u6253\u5B57",tags:{description:"\u591A\u4E45\u5EF6\u8FDF\u540E\u5F00\u59CB\u6253\u5B57"}},showCursorWhenTyping:{type:"boolean"}}}},TagCloud:{type:"COMPONENT",id:"TagCloud",title:"TagCloud",propsConfig:{type:"object",required:["data"],className:"TagCloudProps",additionalProperties:{type:"any"},properties:{data:{type:"array",className:"Array<TagConfig>",items:{type:"object",required:["text"],className:"TagConfig",properties:{text:{type:"string"},weight:{type:"number"},key:{type:"string"}}}},className:{type:"string"},tagClassName:{type:"string"},onClick:{type:"(tag: TagConfig) => void",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"tag",type:'import("/src/components/TagCloud/index").TagConfig',isRequired:!0}]},className:"__type",tags:{type:"(tag: TagConfig) => void",param:"tag"}},baseFontSize:{type:"number",description:"\u6807\u7B7E\u7684\u57FA\u7840\u5927\u5C0F",tags:{description:"\u6807\u7B7E\u7684\u57FA\u7840\u5927\u5C0F",default:"14"},default:14},maxGrowFontSize:{type:"number",description:"\u6807\u7B7E\u7684\u6700\u5927\u589E\u5927\u50CF\u7D20",tags:{description:"\u6807\u7B7E\u7684\u6700\u5927\u589E\u5927\u50CF\u7D20",default:"20"},default:20},center:{type:"boolean"}}}},Upload:{type:"COMPONENT",id:"Upload",title:"Upload",propsConfig:{type:"object",required:["onUpload"],className:"IUploadProps",additionalProperties:{type:"any"},properties:{type:{type:"string",enum:["image","drag","default"],description:"\u6587\u4EF6\u4E0A\u4F20\u7C7B\u578B",tags:{description:"\u6587\u4EF6\u4E0A\u4F20\u7C7B\u578B",default:"'default'",exception:"\u5982\u679C type \u4E3A image \u65F6\uFF0Cmultiple \u5F3A\u5236\u4E3A false"},default:"default"},multiple:{type:"boolean"},beforeUpload:{type:"function",signature:{isAsync:!1,returnType:{type:"boolean"},arguments:[{key:"file",type:"any",isRequired:!0}]},className:"BeforeUploadEvent"},onUpload:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"file",type:"any",isRequired:!0},{key:"getBase64",type:'import("/src/components/Upload/type").GetBase64Func',isRequired:!0}]},className:"UploadEvent"},disabled:{type:"boolean"},cropProps:{type:"object",required:[],className:"__type",properties:{aspectRatio:{type:"number"},width:{type:"number"},height:{type:"number"},previewKey:{type:"string"}}}}}},Layout:{type:"COMPONENT",id:"Layout",title:"Layout",propsConfig:{type:"object",required:["menu"],className:"LayoutProps",additionalProperties:{type:"any"},properties:{height:{oneOf:[{type:"number"},{type:"string"}],default:"100%",tags:{default:"100%"}},header:{type:"reactNode",className:"ReactNode"},headerWrapperClassName:{type:"string"},headerClassName:{type:"string"},brand:{type:"reactNode",className:"ReactNode"},brandClassName:{type:"string"},footer:{type:"reactNode",className:"ReactNode"},footerClassName:{type:"string"},dark:{type:"boolean",description:'\u901A\u8FC7\u5728\u5BB9\u5668\u4E0A\u52A0\u5165 theme="dark" \u5C5E\u6027\u6765\u5E94\u7528 :root \u4E0B\u7684\u53D8\u91CF',tags:{description:'\u901A\u8FC7\u5728\u5BB9\u5668\u4E0A\u52A0\u5165 theme="dark" \u5C5E\u6027\u6765\u5E94\u7528 :root \u4E0B\u7684\u53D8\u91CF'}},onClick:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"keys",type:"string[]",isRequired:!0}]},className:"__type"},collapsed:{type:"boolean",default:!1,tags:{default:"false"}},onCollapsedChange:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"collapsed",type:"boolean",isRequired:!0}]},className:"__type"},defaultOpenKeys:{type:"array",className:"Array",description:"\u9ED8\u8BA4\u5C55\u5F00\u7684\u83DC\u5355\u9879\uFF0C\u4E0D\u6307\u5B9A\u503C\u5219\u5C55\u5F00\u5168\u90E8",items:{type:"string"}},selectedKeys:{type:"array",className:"Array",items:{type:"string"}},menu:{type:"array",className:"Array<LayoutMenuItem>",items:{type:"object",required:["key","label"],className:"LayoutMenuItem",properties:{key:{type:"string"},icon:{type:"reactNode",className:"ReactNode"},label:{type:"string"},disabled:{type:"boolean"},children:{type:"array",className:"Array<LayoutMenuItem>",items:{$ref:"#/definition/LayoutMenuItem"}}}}},menuWrapperClassName:{type:"string"},menuClassName:{type:"string"},menuStyle:{type:"object",className:"CSSProperties"},contentClassName:{type:"string"}}}},ExitButton:{type:"COMPONENT",id:"ExitButton",title:"ExitButton",propsConfig:{type:"object",required:[],className:"ButtonProps",additionalProperties:{type:"any"},properties:{size:{type:"string",enum:["small","middle","large"],default:"middle",tags:{default:"middle"}},disabled:{type:"boolean"}}}},FullscreenButton:{type:"COMPONENT",id:"FullscreenButton",title:"FullscreenButton",propsConfig:{type:"object",required:[],className:"ButtonProps",additionalProperties:{type:"any"},properties:{size:{type:"string",enum:["small","middle","large"],default:"middle",tags:{default:"middle"}},disabled:{type:"boolean"}}}},FullscreenExitButton:{type:"COMPONENT",id:"FullscreenExitButton",title:"FullscreenExitButton",propsConfig:{type:"object",required:[],className:"ButtonProps",additionalProperties:{type:"any"},properties:{size:{type:"string",enum:["small","middle","large"],default:"middle",tags:{default:"middle"}},disabled:{type:"boolean"}}}},MinimizedButton:{type:"COMPONENT",id:"MinimizedButton",title:"MinimizedButton",propsConfig:{type:"object",required:[],className:"ButtonProps",additionalProperties:{type:"any"},properties:{size:{type:"string",enum:["small","middle","large"],default:"middle",tags:{default:"middle"}},disabled:{type:"boolean"}}}}},s=e(90482),v=e(85893),o={},p={name:"@hezebin/doraemon",description:"A library of React components and tools commonly used in hezebin",version:"1.3.4",license:"MIT",authors:["hezebin <ihezebin@qq.com>"]},l="browser",u=void 0,d={footer:"\u2764\uFE0F Powered by hezebin",prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,logo:"/logo.png",rtl:!1,name:"\u54C6\u5566 A \u68A6",title:"Doraemon",description:"\u6CB3\u6CFD\u51B0\u751F\u6001\u7CFB\u5217\u4E0B\u4F7F\u7528\u7684 React \u7EC4\u4EF6\u53CA\u5DE5\u5177\u51FD\u6570\u5E93",bannerConfig:{showBanner:!0,bannerMobileImgUrl:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JmlaR5oQn3MAAAAAAAAAAAAADrJ8AQ/original",bannerImgUrl:""},docVersions:{"1.3.4":""},moreLinks:[{text:"\u6CB3\u6CFD\u51B0",link:"https://www.hezebin.com"},{text:"Chat",link:"https://chat.hezebin.com"}],actions:[{type:"primary",text:"\u5FEB\u901F\u5F00\u59CB",link:"/quick-start"},{text:"\u7EC4\u4EF6",link:"/component/button"}],github:"https://github.com/ihezebin/doraemon",features:[{title:"\u5185\u7F6E\u5168\u6587\u641C\u7D22",details:"\u4E0D\u9700\u8981\u63A5\u5165\u4EFB\u4F55\u4E09\u65B9\u670D\u52A1\uFF0C\u6807\u9898\u3001\u6B63\u6587\u3001demo \u7B49\u5185\u5BB9\u5747\u53EF\u88AB\u641C\u7D22\uFF0C\u652F\u6301\u591A\u5173\u952E\u8BCD\u641C\u7D22\uFF0C\u4E14\u4E0D\u4F1A\u5E26\u6765\u4EA7\u7269\u4F53\u79EF\u7684\u589E\u52A0\u3002"},{title:"\u66F4\u597D\u7684\u7F16\u8BD1\u6027\u80FD",details:"\u901A\u8FC7\u7ED3\u5408\u4F7F\u7528 Umi 4 MFSU\u3001esbuild\u3001SWC\u3001\u6301\u4E45\u7F13\u5B58\u7B49\u65B9\u6848\uFF0C\u5E26\u6765\u6BD4 dumi 1.x \u66F4\u5FEB\u7684\u7F16\u8BD1\u901F\u5EA6\u3002"},{title:"SSR",details:"\u5168\u9762\u652F\u6301 SSR\uFF0C\u8BA9\u6587\u6863\u5177\u6709\u66F4\u597D\u7684\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u3001\u66F4\u597D\u7684SEO\u6548\u679C\u3001\u66F4\u5FEB\u7684\u5185\u5BB9\u5230\u8FBE\u7387\u3002"},{title:"\u6837\u5F0F\u98CE\u683C\u7EDF\u4E00",details:"\u57FA\u4E8E antd 5.0 CSS-in-JS \u6837\u5F0F\u52A0\u6301\uFF0C\u5168\u9762\u7EDF\u4E00 dumi \u5185\u7F6E\u6837\u5F0F\uFF0C\u540C\u65F6\u652F\u6301\u81EA\u5B9A\u4E49\u4E3B\u9898\u52A0\u8F7D\u3002"},{title:"\u529F\u80FD\u589E\u5F3A",details:"\u5728 dumi \u5185\u7F6E markdown \u589E\u5F3A\u57FA\u7840\u4E0A\u65B0\u589E\u7279\u6709 FrontMatter \u914D\u7F6E\uFF0C\u5E76\u4E14\u5185\u7F6E\u591A\u79CD\u7EC4\u4EF6\uFF0C\u4F7F\u6587\u6863\u5C55\u793A\u6548\u679C\u5F97\u4EE5\u63D0\u5347\u3002"},{title:"\u5F00\u7BB1\u5373\u7528",details:"\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design \u98CE\u683C\uFF0C\u5185\u7F6E\u4E3B\u9898\u5207\u6362\uFF0C\u7D27\u51D1\u6A21\u5F0F\u7B49\u529F\u80FD\u3002"}],showLineNum:!0},y=!0;function T(){var k=(0,a.pC)(),R=(0,r.useState)(!1),m=h()(R,2),c=m[0],g=m[1],f=(0,r.useRef)(a.m8.location.pathname);(0,r.useEffect)(function(){return a.m8.listen(function(t){t.location.pathname!==f.current&&(f.current=t.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var A=r.useMemo(function(){var t={pkg:p,historyType:l,entryExports:o,demos:null,components:n,locales:s.k,loading:c,setLoading:g,hostname:u,themeConfig:d,_2_level_nav_available:y};return Object.defineProperty(t,"demos",{get:function(){return(0,N.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),t},[p,l,o,n,s.k,c,g,u,d,y]);return(0,v.jsx)(C.D.Provider,{value:A,children:k})}}}]);