import{g as vt,a as be,_ as Rt,b as Tt,d as wt,f as Et,C as It,r as $e,h as Ot,S as Dt,F as At,i as Nt,e as ie}from"../chunks/firestore._fNhU_D6.js";import{y as xt,z as Pt,q as de,i as Ct,s as Ut,n as C,o as yt,A as qe}from"../chunks/scheduler.CXGIGFVi.js";import{r as Lt,a as St,p as Mt,t as Ft,S as Ht,i as Vt,e as _,s as U,c as p,k as y,h as O,d as f,n as b,q as Be,b as L,f as J,j as Q,g as le,l as d,m as pe,A as Ae,o as me}from"../chunks/index.DTJa000i.js";/* empty css                         *//* empty css                       */import{u as jt}from"../chunks/useLocation.wyeUizUf.js";function ge(t,e){const s=e.token={};function n(r,o,i,l){if(e.token!==s)return;e.resolved=l;let c=e.ctx;i!==void 0&&(c=c.slice(),c[i]=l);const h=r&&(e.current=r)(c);let m=!1;e.block&&(e.blocks?e.blocks.forEach((g,k)=>{k!==o&&g&&(Lt(),St(g,1,1,()=>{e.blocks[k]===g&&(e.blocks[k]=null)}),Mt())}):e.block.d(1),h.c(),Ft(h,1),h.m(e.mount(),e.anchor),m=!0),e.block=h,e.blocks&&(e.blocks[o]=h),m&&Ct()}if(xt(t)){const r=Pt();if(t.then(o=>{de(r),n(e.then,1,e.value,o),de(null)},o=>{if(de(r),n(e.catch,2,e.error,o),de(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function it(t,e,s){const n=e.slice(),{resolved:r}=t;t.current===t.then&&(n[t.value]=r),t.current===t.catch&&(n[t.error]=r),t.block.p(n,s)}const $t=async({url:t})=>{let s=t.searchParams.get("id");if(s==null)throw new Error("ID not defined");return vt(s)},us=Object.freeze(Object.defineProperty({__proto__:null,load:$t},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="firebasestorage.googleapis.com",at="storageBucket",qt=2*60*1e3,Bt=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R extends At{constructor(e,s,n=0){super(De(e),`Firebase Storage: ${s} (${De(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,R.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return De(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var v;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(v||(v={}));function De(t){return"storage/"+t}function ct(){const t="An unknown error occurred, please check the error payload for server response.";return new R(v.UNKNOWN,t)}function Xt(t){return new R(v.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function zt(t){return new R(v.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new R(v.UNAUTHENTICATED,t)}function Wt(){return new R(v.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Gt(t){return new R(v.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Yt(){return new R(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zt(){return new R(v.CANCELED,"User canceled the upload/download.")}function Jt(t){return new R(v.INVALID_URL,"Invalid URL '"+t+"'.")}function Qt(t){return new R(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function en(){return new R(v.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+at+"' property when initializing the app?")}function tn(){return new R(v.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ne(t){return new R(v.INVALID_ARGUMENT,t)}function ut(){return new R(v.APP_DELETED,"The Firebase app was deleted.")}function nn(t){return new R(v.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ce(t){throw new R(v.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=A.makeFromUrl(e,s)}catch{return new A(e,"")}if(n.path==="")return n;throw Qt(e)}static makeFromUrl(e,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function h(x){x.path_=decodeURIComponent(x.path)}const m="v[A-Za-z0-9_]+",g=s.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${m}/b/${r}/o${k}`,"i"),M={bucket:1,path:3},j=s===lt?"(?:storage.googleapis.com|storage.cloud.google.com)":s,E="([^?#]*)",$=new RegExp(`^https?://${j}/${r}/${E}`,"i"),N=[{regex:l,indices:c,postModify:o},{regex:S,indices:M,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let x=0;x<N.length;x++){const q=N[x],W=q.regex.exec(e);if(W){const ae=W[q.indices.bucket];let H=W[q.indices.path];H||(H=""),n=new A(ae,H),q.postModify(n);break}}if(n==null)throw Jt(e);return n}}class sn{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e,s){let n=1,r=null,o=null,i=!1,l=0;function c(){return l===2}let h=!1;function m(...E){h||(h=!0,e.apply(null,E))}function g(E){r=setTimeout(()=>{r=null,t(S,c())},E)}function k(){o&&clearTimeout(o)}function S(E,...$){if(h){k();return}if(E){k(),m.call(null,E,...$);return}if(c()||i){k(),m.call(null,E,...$);return}n<64&&(n*=2);let N;l===1?(l=2,N=0):N=(n+Math.random())*1e3,g(N)}let M=!1;function j(E){M||(M=!0,k(),!h&&(r!==null?(E||(l=2),clearTimeout(r),g(0)):E||(l=1)))}return g(0),o=setTimeout(()=>{i=!0,j(!0)},s),j}function on(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return t!==void 0}function an(t){return typeof t=="object"&&!Array.isArray(t)}function ht(t){return typeof t=="string"||t instanceof String}function Xe(t,e,s,n){if(n<e)throw Ne(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw Ne(`Invalid value for '${t}'. Expected ${s} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e,s){let n=e;return s==null&&(n=`https://${e}`),`${s}://${n}/v0${t}`}function dt(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const r=e(n)+"="+e(t[n]);s=s+r+"&"}return s=s.slice(0,-1),s}var ee;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ee||(ee={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){const s=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return s||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,s,n,r,o,i,l,c,h,m,g,k=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=g,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,M)=>{this.resolve_=S,this.reject_=M,this.start_()})}start_(){const e=(n,r)=>{if(r){n(!1,new fe(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const l=o.getErrorCode()===ee.NO_ERROR,c=o.getStatus();if(!l||cn(c,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===ee.ABORT;n(!1,new fe(!1,null,m));return}const h=this.successCodes_.indexOf(c)!==-1;n(!0,new fe(h,o))})},s=(n,r)=>{const o=this.resolve_,i=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());ln(c)?o(c):o()}catch(c){i(c)}else if(l!==null){const c=ct();c.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,c)):i(c)}else if(r.canceled){const c=this.appDelete_?ut():Zt();i(c)}else{const c=Yt();i(c)}};this.canceled_?s(!1,new fe(!1,null,!0)):this.backoffId_=rn(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&on(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fe{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function hn(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dn(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fn(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _n(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pn(t,e,s,n,r,o,i=!0){const l=dt(t.urlParams),c=t.url+l,h=Object.assign({},t.headers);return fn(h,e),hn(h,s),dn(h,o),_n(h,n),new un(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){let e;try{e=JSON.parse(t)}catch{return null}return an(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gn(t,e){const s=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?s:t+"/"+s}function ft(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){return e}class D{constructor(e,s,n,r){this.server=e,this.local=s||e,this.writable=!!n,this.xform=r||kn}}let _e=null;function bn(t){return!ht(t)||t.length<2?t:ft(t)}function vn(){if(_e)return _e;const t=[];t.push(new D("bucket")),t.push(new D("generation")),t.push(new D("metageneration")),t.push(new D("name","fullPath",!0));function e(o,i){return bn(i)}const s=new D("name");s.xform=e,t.push(s);function n(o,i){return i!==void 0?Number(i):i}const r=new D("size");return r.xform=n,t.push(r),t.push(new D("timeCreated")),t.push(new D("updated")),t.push(new D("md5Hash",null,!0)),t.push(new D("cacheControl",null,!0)),t.push(new D("contentDisposition",null,!0)),t.push(new D("contentEncoding",null,!0)),t.push(new D("contentLanguage",null,!0)),t.push(new D("contentType",null,!0)),t.push(new D("metadata","customMetadata",!0)),_e=t,_e}function Rn(t,e){function s(){const n=t.bucket,r=t.fullPath,o=new A(n,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:s})}function Tn(t,e,s){const n={};n.type="file";const r=s.length;for(let o=0;o<r;o++){const i=s[o];n[i.local]=i.xform(n,e[i.server])}return Rn(n,t),n}function wn(t,e,s){const n=Pe(e);return n===null?null:Tn(t,n,s)}function En(t,e,s,n){const r=Pe(e);if(r===null||!ht(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(h=>{const m=t.bucket,g=t.fullPath,k="/b/"+i(m)+"/o/"+i(g),S=xe(k,s,n),M=dt({alt:"media",token:h});return S+M})[0]}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="prefixes",Ke="items";function In(t,e,s){const n={prefixes:[],items:[],nextPageToken:s.nextPageToken};if(s[ze])for(const r of s[ze]){const o=r.replace(/\/$/,""),i=t._makeStorageReference(new A(e,o));n.prefixes.push(i)}if(s[Ke])for(const r of s[Ke]){const o=t._makeStorageReference(new A(e,r.name));n.items.push(o)}return n}function On(t,e,s){const n=Pe(s);return n===null?null:In(t,e,n)}class _t{constructor(e,s,n,r){this.url=e,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){if(!t)throw ct()}function Dn(t,e){function s(n,r){const o=On(t,e,r);return pt(o!==null),o}return s}function An(t,e){function s(n,r){const o=wn(t,r,e);return pt(o!==null),En(o,r,t.host,t._protocol)}return s}function mt(t){function e(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=Wt():r=Kt():s.getStatus()===402?r=zt(t.bucket):s.getStatus()===403?r=Gt(t.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Nn(t){const e=mt(t);function s(n,r){let o=e(n,r);return n.getStatus()===404&&(o=Xt(t.path)),o.serverResponse=r.serverResponse,o}return s}function xn(t,e,s,n,r){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",s.length>0&&(o.delimiter=s),n&&(o.pageToken=n),r&&(o.maxResults=r);const i=e.bucketOnlyServerUrl(),l=xe(i,t.host,t._protocol),c="GET",h=t.maxOperationRetryTime,m=new _t(l,c,Dn(t,e.bucket),h);return m.urlParams=o,m.errorHandler=mt(e),m}function Pn(t,e,s){const n=e.fullServerUrl(),r=xe(n,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,l=new _t(r,o,An(t,s),i);return l.errorHandler=Nn(e),l}class Cn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ee.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ee.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ee.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,s,n,r){if(this.sent_)throw ce("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ce("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ce("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ce("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ce("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Un extends Cn{initXhr(){this.xhr_.responseType="text"}}function gt(){return new Un}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,s){this._service=e,s instanceof A?this._location=s:this._location=A.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new te(e,s)}get root(){const e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ft(this._location.path)}get storage(){return this._service}get parent(){const e=mn(this._location.path);if(e===null)return null;const s=new A(this._location.bucket,e);return new te(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw nn(e)}}function yn(t,e){const s={},n=xn(t.storage,t._location,"/",s.pageToken,s.maxResults);return t.storage.makeRequestWithTokens(n,gt)}function Ln(t){t._throwIfRoot("getDownloadURL");const e=Pn(t.storage,t._location,vn());return t.storage.makeRequestWithTokens(e,gt).then(s=>{if(s===null)throw tn();return s})}function Sn(t,e){const s=gn(t._location.path,e),n=new A(t._location.bucket,s);return new te(t.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){return/^[A-Za-z]+:\/\//.test(t)}function Fn(t,e){return new te(t,e)}function kt(t,e){if(t instanceof Ce){const s=t;if(s._bucket==null)throw en();const n=new te(s,s._bucket);return e!=null?kt(n,e):n}else return e!==void 0?Sn(t,e):t}function Hn(t,e){if(e&&Mn(e)){if(t instanceof Ce)return Fn(t,e);throw Ne("To use ref(service, url), the first argument must be a Storage instance.")}else return kt(t,e)}function We(t,e){const s=e==null?void 0:e[at];return s==null?null:A.makeFromBucketSpec(s,t)}function Vn(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:r}=n;r&&(t._overrideAuthToken=typeof r=="string"?r:Ot(r,t.app.options.projectId))}class Ce{constructor(e,s,n,r,o){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=lt,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qt,this._maxUploadRetryTime=Bt,this._requests=new Set,r!=null?this._bucket=A.makeFromBucketSpec(r,this._host):this._bucket=We(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=We(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xe("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xe("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new te(this,e)}_makeRequest(e,s,n,r,o=!0){if(this._deleted)return new sn(ut());{const i=pn(e,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,r).getPromise()}}const Ge="@firebase/storage",Ye="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="storage";function jn(t,e){return t=be(t),yn(t)}function $n(t){return t=be(t),Ln(t)}function Ze(t,e){return t=be(t),Hn(t,e)}function qn(t=wt(),e){t=be(t);const n=Rt(t,bt).getImmediate({identifier:e}),r=Tt("storage");return r&&Bn(n,...r),n}function Bn(t,e,s,n={}){Vn(t,e,s,n)}function Xn(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ce(s,n,r,e,Dt)}function zn(){Et(new It(bt,Xn,"PUBLIC").setMultipleInstances(!0)),$e(Ge,Ye,""),$e(Ge,Ye,"esm2017")}zn();const Je=qn(Nt);async function Kn(t){const e=Ze(Je,t),s=await jn(e);console.log(s);let n=[];for(const r of s.items){const o=Ze(Je,r.fullPath),i=await $n(o);n.push(i)}return n}function Qe(t,e,s){const n=t.slice();return n[4]=e[s][0],n[5]=e[s][1],n}function et(t,e,s){const n=t.slice();return n[4]=e[s][0],n[5]=e[s][1],n}function tt(t,e,s){const n=t.slice();return n[11]=e[s],n}function Wn(t){return{c:C,l:C,m:C,p:C,d:C}}function Gn(t){let e,s,n,r,o,i,l,c=t[3].name+"",h,m,g,k=t[3].stars+"",S,M,j,E,$,K,N,x=ns()+"",q,W,ae,H,Ue='<a href="www.google.com" id="mapLink">Here is where the map link would be</a>',ve,B,X,ye='<p>Tags</p> <button id="buttonEdit">Edit</button>',Re,F,ne,Le=`<h1>Features
							<hr/></h1>`,Te,G,we,se,Se=`<h1>Accessibility
							<hr/></h1>`,Ee,Y,I=t[1]&&nt(t),re=ie(Object.entries(t[3].tags)),T=[];for(let u=0;u<re.length;u+=1)T[u]=rt(et(t,re,u));let oe=ie(Object.entries(t[3].tags)),w=[];for(let u=0;u<oe.length;u+=1)w[u]=ot(Qe(t,oe,u));return{c(){e=_("div"),I&&I.c(),s=U(),n=_("main"),r=_("h1"),o=_("div"),i=_("div"),l=_("section"),h=J(c),m=U(),g=_("section"),S=J(k),M=J(" / 5 Stars"),j=U(),E=_("hr"),$=U(),K=_("div"),N=_("header"),q=J(x),W=J(" miles away"),ae=U(),H=_("div"),H.innerHTML=Ue,ve=U(),B=_("div"),X=_("div"),X.innerHTML=ye,Re=U(),F=_("div"),ne=_("div"),ne.innerHTML=Le,Te=U(),G=_("div");for(let u=0;u<T.length;u+=1)T[u].c();we=U(),se=_("div"),se.innerHTML=Se,Ee=U(),Y=_("div");for(let u=0;u<w.length;u+=1)w[u].c();this.h()},l(u){e=p(u,"DIV",{class:!0,id:!0});var P=O(e);I&&I.l(P),P.forEach(f),s=y(u),n=p(u,"MAIN",{id:!0});var a=O(n);r=p(a,"H1",{});var V=O(r);o=p(V,"DIV",{class:!0});var Me=O(o);i=p(Me,"DIV",{class:!0});var ue=O(i);l=p(ue,"SECTION",{});var Fe=O(l);h=Q(Fe,c),Fe.forEach(f),m=y(ue),g=p(ue,"SECTION",{});var Ie=O(g);S=Q(Ie,k),M=Q(Ie," / 5 Stars"),Ie.forEach(f),ue.forEach(f),Me.forEach(f),j=y(V),E=p(V,"HR",{}),V.forEach(f),$=y(a),K=p(a,"DIV",{});var He=O(K);N=p(He,"HEADER",{id:!0});var Oe=O(N);q=Q(Oe,x),W=Q(Oe," miles away"),Oe.forEach(f),He.forEach(f),ae=y(a),H=p(a,"DIV",{"data-svelte-h":!0}),le(H)!=="svelte-1hjhlox"&&(H.innerHTML=Ue),ve=y(a),B=p(a,"DIV",{id:!0});var he=O(B);X=p(he,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),le(X)!=="svelte-1f3lncl"&&(X.innerHTML=ye),Re=y(he),F=p(he,"DIV",{id:!0});var z=O(F);ne=p(z,"DIV",{"data-svelte-h":!0}),le(ne)!=="svelte-o607y4"&&(ne.innerHTML=Le),Te=y(z),G=p(z,"DIV",{class:!0});var Ve=O(G);for(let Z=0;Z<T.length;Z+=1)T[Z].l(Ve);Ve.forEach(f),we=y(z),se=p(z,"DIV",{"data-svelte-h":!0}),le(se)!=="svelte-1wtjf7n"&&(se.innerHTML=Se),Ee=y(z),Y=p(z,"DIV",{class:!0});var je=O(Y);for(let Z=0;Z<w.length;Z+=1)w[Z].l(je);je.forEach(f),z.forEach(f),he.forEach(f),a.forEach(f),this.h()},h(){b(e,"class","horizontal"),b(e,"id","firstImages"),b(i,"class","horizontal"),b(o,"class","col"),b(N,"id","locationPageFormat"),b(X,"class","horizontal"),b(X,"id","bottom"),b(G,"class","tagsList"),b(Y,"class","tagsList"),b(F,"id","box"),b(B,"id","listHeader"),b(n,"id","locationPageFormat")},m(u,P){L(u,e,P),I&&I.m(e,null),L(u,s,P),L(u,n,P),d(n,r),d(r,o),d(o,i),d(i,l),d(l,h),d(i,m),d(i,g),d(g,S),d(g,M),d(r,j),d(r,E),d(n,$),d(n,K),d(K,N),d(N,q),d(N,W),d(n,ae),d(n,H),d(n,ve),d(n,B),d(B,X),d(B,Re),d(B,F),d(F,ne),d(F,Te),d(F,G);for(let a=0;a<T.length;a+=1)T[a]&&T[a].m(G,null);d(F,we),d(F,se),d(F,Ee),d(F,Y);for(let a=0;a<w.length;a+=1)w[a]&&w[a].m(Y,null)},p(u,P){if(u[1]?I?I.p(u,P):(I=nt(u),I.c(),I.m(e,null)):I&&(I.d(1),I=null),P&1&&c!==(c=u[3].name+"")&&pe(h,c),P&1&&k!==(k=u[3].stars+"")&&pe(S,k),P&1){re=ie(Object.entries(u[3].tags));let a;for(a=0;a<re.length;a+=1){const V=et(u,re,a);T[a]?T[a].p(V,P):(T[a]=rt(V),T[a].c(),T[a].m(G,null))}for(;a<T.length;a+=1)T[a].d(1);T.length=re.length}if(P&1){oe=ie(Object.entries(u[3].tags));let a;for(a=0;a<oe.length;a+=1){const V=Qe(u,oe,a);w[a]?w[a].p(V,P):(w[a]=ot(V),w[a].c(),w[a].m(Y,null))}for(;a<w.length;a+=1)w[a].d(1);w.length=oe.length}},d(u){u&&(f(e),f(s),f(n)),I&&I.d(),Ae(T,u),Ae(w,u)}}}function nt(t){let e,s,n={ctx:t,current:null,token:null,hasCatch:!1,pending:Jn,then:Zn,catch:Yn,value:10};return ge(s=t[1],n),{c(){e=me(),n.block.c()},l(r){e=me(),n.block.l(r)},m(r,o){L(r,e,o),n.block.m(r,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e},p(r,o){t=r,n.ctx=t,o&2&&s!==(s=t[1])&&ge(s,n)||it(n,t,o)},d(r){r&&f(e),n.block.d(r),n.token=null,n=null}}}function Yn(t){return{c:C,l:C,m:C,p:C,d:C}}function Zn(t){let e,s=ie(t[10]),n=[];for(let r=0;r<s.length;r+=1)n[r]=st(tt(t,s,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=me()},l(r){for(let o=0;o<n.length;o+=1)n[o].l(r);e=me()},m(r,o){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(r,o);L(r,e,o)},p(r,o){if(o&2){s=ie(r[10]);let i;for(i=0;i<s.length;i+=1){const l=tt(r,s,i);n[i]?n[i].p(l,o):(n[i]=st(l),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(r){r&&f(e),Ae(n,r)}}}function st(t){let e,s;return{c(){e=_("img"),this.h()},l(n){e=p(n,"IMG",{src:!0,alt:!0,height:!0}),this.h()},h(){qe(e.src,s=t[11])||b(e,"src",s),b(e,"alt","hi"),b(e,"height","100")},m(n,r){L(n,e,r)},p(n,r){r&2&&!qe(e.src,s=n[11])&&b(e,"src",s)},d(n){n&&f(e)}}}function Jn(t){let e,s="Loading photos...";return{c(){e=_("p"),e.textContent=s},l(n){e=p(n,"P",{"data-svelte-h":!0}),le(e)!=="svelte-lg9prx"&&(e.textContent=s)},m(n,r){L(n,e,r)},p:C,d(n){n&&f(e)}}}function rt(t){let e,s=ke(t[4])+"",n,r;return{c(){e=_("p"),n=J(s),r=U(),this.h()},l(o){e=p(o,"P",{class:!0});var i=O(e);n=Q(i,s),r=y(i),i.forEach(f),this.h()},h(){b(e,"class","unfilled_tag")},m(o,i){L(o,e,i),d(e,n),d(e,r)},p(o,i){i&1&&s!==(s=ke(o[4])+"")&&pe(n,s)},d(o){o&&f(e)}}}function ot(t){let e,s=ke(t[4])+"",n,r;return{c(){e=_("p"),n=J(s),r=U(),this.h()},l(o){e=p(o,"P",{class:!0});var i=O(e);n=Q(i,s),r=y(i),i.forEach(f),this.h()},h(){b(e,"class","unfilled_tag")},m(o,i){L(o,e,i),d(e,n),d(e,r)},p(o,i){i&1&&s!==(s=ke(o[4])+"")&&pe(n,s)},d(o){o&&f(e)}}}function Qn(t){let e,s="Loading...";return{c(){e=_("p"),e.textContent=s},l(n){e=p(n,"P",{"data-svelte-h":!0}),le(e)!=="svelte-qdsr2u"&&(e.textContent=s)},m(n,r){L(n,e,r)},p:C,d(n){n&&f(e)}}}function es(t){let e,s,n,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:Qn,then:Gn,catch:Wn,value:3};return ge(r=t[0],o),{c(){e=_("meta"),s=U(),n=_("div"),o.block.c(),this.h()},l(i){e=p(i,"META",{name:!0,content:!0}),s=y(i),n=p(i,"DIV",{style:!0});var l=O(n);o.block.l(l),l.forEach(f),this.h()},h(){b(e,"name","viewport"),b(e,"content","width=device-width, initial-scale=1.0"),Be(n,"height","100dvh"),Be(n,"overflow","scroll")},m(i,l){L(i,e,l),L(i,s,l),L(i,n,l),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null},p(i,[l]){t=i,o.ctx=t,l&1&&r!==(r=t[0])&&ge(r,o)||it(o,t,l)},i:C,o:C,d(i){i&&(f(e),f(s),f(n)),o.block.d(),o.token=null,o=null}}}function ts(t){}function ke(t){const e=t.split("_");let s="";for(let n of e)s+=n.charAt(0).toUpperCase()+n.slice(1)+" ";return s.slice(0,s.length-1)}function ns(t){return 0}function ss(t,e,s){let{data:n}=e,r=[];return jt(ts),yt(async()=>{s(1,r=await Kn(n.id))}),t.$$set=o=>{"data"in o&&s(0,n=o.data)},[n,r]}class hs extends Ht{constructor(e){super(),Vt(this,e,ss,es,Ut,{data:0})}}export{hs as component,us as universal};
