(()=>{"use strict";var e={403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,o,a,s,i,l=r(622),c=r(747),u=Object.prototype.toString;function d(e){return void 0!==e}function g(e){return"[object Number]"===u.call(e)}function f(e){return"[object String]"===u.call(e)}function p(e){return JSON.parse(c.readFileSync(e,"utf8"))}function h(e,t){return i&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,r){var n=r[0],o=t[n],a=e;return"string"==typeof o?a=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(a=String(o)),a}))}function b(e){return function(t,r){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return g(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):h(e[t],n):f(r)?(console.warn("Message "+r+" didn't get externalized correctly."),h(r,n)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return h(t,r)}function m(e,t){return a[e]=t,t}function y(e){try{return function(e){var t=p(l.join(e,"nls.metadata.json")),r=Object.create(null);for(var n in t){var o=t[n];r[n]=o.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function S(e,t){var r;if(!0===s.languagePackSupport&&void 0!==s.cacheRoot&&void 0!==s.languagePackId&&void 0!==s.translationsConfigFile&&void 0!==s.translationsConfig)try{r=function(e,t){var r,n,o,a=l.join(s.cacheRoot,e.id+"-"+e.hash+".json"),i=!1,u=!1;try{return r=JSON.parse(c.readFileSync(a,{encoding:"utf8",flag:"r"})),n=a,o=new Date,c.utimes(n,o,o,(function(){})),r}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),c.unlink(a,(function(e){e&&console.error("Deleting corrupted bundle "+a+" failed.")})),i=!0}}if(!(r=function(e,t){var r=s.translationsConfig[e.id];if(r){var n=p(r).contents,o=p(l.join(t,"nls.metadata.json")),a=Object.create(null);for(var i in o){var c=o[i],u=n[e.outDir+"/"+i];if(u){for(var d=[],g=0;g<c.keys.length;g++){var h=c.keys[g],b=u[f(h)?h:h.key];void 0===b&&(b=c.messages[g]),d.push(b)}a[i]=d}else a[i]=c.messages}return a}}(e,t))||i)return r;if(u)try{c.writeFileSync(a,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(s.languagePackSupport)return y(t);var n=function(e){for(var t=s.locale;t;){var r=l.join(e,"nls.bundle."+t+".json");if(c.existsSync(r))return r;var n=t.lastIndexOf("-");t=n>0?t.substring(0,n):void 0}if(void 0===t&&(r=l.join(e,"nls.bundle.json"),c.existsSync(r)))return r}(t);if(n)try{return p(n)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=y(t)}return r}function F(e){if(!e)return v;var t=l.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),s.messageFormat===n.both||s.messageFormat===n.bundle){var r=function(e){for(var t,r=l.dirname(e);t=l.join(r,"nls.metadata.header.json"),!c.existsSync(t);){var n=l.dirname(r);if(n===r){t=void 0;break}r=n}return t}(e);if(r){var o=l.dirname(r),u=a[o];if(void 0===u)try{var g=JSON.parse(c.readFileSync(r,"utf8"));try{var f=S(g,o);u=m(o,f?{header:g,nlsBundle:f}:null)}catch(e){console.error("Failed to load nls bundle",e),u=m(o,null)}}catch(e){console.error("Failed to read header file",e),u=m(o,null)}if(u){var h=e.substr(o.length+1).replace(/\\/g,"/"),y=u.nlsBundle[h];return void 0===y?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):b(y)}}}if(s.messageFormat===n.both||s.messageFormat===n.file)try{var F=p(function(e){var t;if(s.cacheLanguageResolution&&t)t=t;else{if(i||!s.locale)t=".nls.json";else for(var r=s.locale;r;){var n=".nls."+r+".json";if(c.existsSync(e+n)){t=n;break}var o=r.lastIndexOf("-");o>0?r=r.substring(0,o):(t=".nls.json",r=null)}s.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(F)?b(F):d(F.messages)&&d(F.keys)?b(F.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(n=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(o||(o={})),function(){if(s={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:n.bundle},f(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(f(e.locale)&&(s.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(s.languagePackSupport=e._languagePackSupport),f(e._cacheRoot)&&(s.cacheRoot=e._cacheRoot),f(e._languagePackId)&&(s.languagePackId=e._languagePackId),f(e._translationsConfigFile)){s.translationsConfigFile=e._translationsConfigFile;try{s.translationsConfig=p(s.translationsConfigFile)}catch(t){e._corruptedFile&&c.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}var t;i="pseudo"===s.locale,a=Object.create(null)}(),t.loadMessageBundle=F,t.config=function(e){return e&&(f(e.locale)&&(s.locale=e.locale.toLowerCase(),a=Object.create(null)),void 0!==e.messageFormat&&(s.messageFormat=e.messageFormat)),i="pseudo"===s.locale,F}},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")},549:e=>{e.exports=require("vscode")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=r(549),o=r(669),a=r(403).loadMessageBundle(r(622).join(__dirname,"extension.ts"));class s extends t.Disposable{constructor(e){super((()=>this.internalDispose())),this.session=e,this.hasFired=!1,this.disposables=[],this.regexp=new RegExp(e.configuration.serverReadyAction.pattern||"listening on.* (https?://\\S+|[0-9]+)","i")}static start(e){if(e.configuration.serverReadyAction){let t=s.detectors.get(e);return t||(t=new s(e),s.detectors.set(e,t)),t}}static stop(e){let t=s.detectors.get(e);t&&(s.detectors.delete(e),t.dispose())}static rememberShellPid(e,t){let r=s.detectors.get(e);r&&(r.shellPid=t)}static async startListeningTerminalData(){this.terminalDataListener||(this.terminalDataListener=t.window.onDidWriteTerminalData((async e=>{const t=await e.terminal.processId;for(let[,r]of this.detectors)if(r.shellPid===t)return void r.detectPattern(e.data);for(let[,t]of this.detectors)if(t.detectPattern(e.data))return})))}internalDispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[]}detectPattern(e){if(!this.hasFired){const t=this.regexp.exec(e);if(t&&t.length>=1)return this.openExternalWithString(this.session,t.length>1?t[1]:""),this.hasFired=!0,this.internalDispose(),!0}return!1}openExternalWithString(e,r){const n=e.configuration.serverReadyAction;let s;if(""===r){const e=n.uriFormat||"";if(e.indexOf("%s")>=0){const r=a(0,null,e);return void t.window.showErrorMessage(r,{modal:!0}).then((e=>{}))}s=e}else{const e=n.uriFormat||(/^[0-9]+$/.test(r)?"http://localhost:%s":"%s");if(2!==e.split("%s").length){const r=a(1,null,e);return void t.window.showErrorMessage(r,{modal:!0}).then((e=>{}))}s=o.format(e,r)}this.openExternalWithUri(e,s)}openExternalWithUri(e,r){const n=e.configuration.serverReadyAction;switch(n.action||"openExternally"){case"openExternally":t.env.openExternal(t.Uri.parse(r));break;case"debugWithChrome":this.debugWithBrowser("pwa-chrome",e,r);break;case"debugWithEdge":this.debugWithBrowser("pwa-msedge",e,r);break;case"startDebugging":t.debug.startDebugging(e.workspaceFolder,n.name||"unspecified")}}debugWithBrowser(e,r,n){return t.debug.startDebugging(r.workspaceFolder,{type:e,name:"Browser Debug",request:"launch",url:n,webRoot:r.configuration.serverReadyAction.webRoot||"${workspaceFolder}"})}}s.detectors=new Map,e.activate=function(e){e.subscriptions.push(t.debug.onDidChangeActiveDebugSession((e=>{e&&e.configuration.serverReadyAction&&s.start(e)&&s.startListeningTerminalData()}))),e.subscriptions.push(t.debug.onDidTerminateDebugSession((e=>{s.stop(e)})));const r=new Set;e.subscriptions.push(t.debug.registerDebugConfigurationProvider("*",{resolveDebugConfigurationWithSubstitutedVariables:(n,o)=>(o.type&&o.serverReadyAction&&(r.has(o.type)||(r.add(o.type),function(e,r){e.subscriptions.push(t.debug.registerDebugAdapterTrackerFactory(r,{createDebugAdapterTracker(e){const t=s.start(e);if(t){let r;return{onDidSendMessage:e=>{if("event"===e.type&&"output"===e.event&&e.body)switch(e.body.category){case"console":case"stderr":case"stdout":e.body.output&&t.detectPattern(e.body.output)}"request"===e.type&&"runInTerminal"===e.command&&e.arguments&&"integrated"===e.arguments.kind&&(r=e.seq)},onWillReceiveMessage:t=>{r&&"response"===t.type&&"runInTerminal"===t.command&&t.body&&r===t.request_seq&&(r=void 0,s.rememberShellPid(e,t.body.shellProcessId))}}}}}))}(e,o.type))),o)}))}})();var o=exports;for(var a in n)o[a]=n[a];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379476f0e13988d90fab105c5c19e7abc8b1dea8/extensions/debug-server-ready/dist/extension.js.map