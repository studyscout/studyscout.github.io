import{g as D,_ as le,a as he,b as de,d as fe,C as pe,r as $,f as _e,S as ge,F as me,h as Re}from"./editTags.7PafiEKS.js";import{o as Te}from"./scheduler.CUGVr-Db.js";/**
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
 */const W="firebasestorage.googleapis.com",G="storageBucket",ke=2*60*1e3,we=10*60*1e3;/**
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
 */class h extends me{constructor(t,n,s=0){super(L(t),`Firebase Storage: ${n} (${L(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return L(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var l;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(l||(l={}));function L(e){return"storage/"+e}function z(){const e="An unknown error occurred, please check the error payload for server response.";return new h(l.UNKNOWN,e)}function be(e){return new h(l.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ee(e){return new h(l.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ie(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(l.UNAUTHENTICATED,e)}function Oe(){return new h(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ne(e){return new h(l.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Ae(){return new h(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xe(){return new h(l.CANCELED,"User canceled the upload/download.")}function Ue(e){return new h(l.INVALID_URL,"Invalid URL '"+e+"'.")}function Pe(e){return new h(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ye(){return new h(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+G+"' property when initializing the app?")}function De(){return new h(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function S(e){return new h(l.INVALID_ARGUMENT,e)}function Y(){return new h(l.APP_DELETED,"The Firebase app was deleted.")}function ve(e){return new h(l.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function I(e){throw new h(l.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class f{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=f.makeFromUrl(t,n)}catch{return new f(t,"")}if(s.path==="")return s;throw Pe(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function c(g){g.path_=decodeURIComponent(g.path)}const p="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",k=new RegExp(`^https?://${R}/${p}/b/${r}/o${m}`,"i"),T={bucket:1,path:3},O=n===W?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",N=new RegExp(`^https?://${O}/${r}/${_}`,"i"),E=[{regex:a,indices:u,postModify:o},{regex:k,indices:T,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let g=0;g<E.length;g++){const A=E[g],v=A.regex.exec(t);if(v){const ce=v[A.indices.bucket];let C=v[A.indices.path];C||(C=""),s=new f(ce,C),A.postModify(s);break}}if(s==null)throw Ue(t);return s}}class Ce{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Le(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function u(){return a===2}let c=!1;function p(..._){c||(c=!0,t.apply(null,_))}function R(_){r=setTimeout(()=>{r=null,e(k,u())},_)}function m(){o&&clearTimeout(o)}function k(_,...N){if(c){m();return}if(_){m(),p.call(null,_,...N);return}if(u()||i){m(),p.call(null,_,...N);return}s<64&&(s*=2);let E;a===1?(a=2,E=0):E=(s+Math.random())*1e3,R(E)}let T=!1;function O(_){T||(T=!0,m(),!c&&(r!==null?(_||(a=2),clearTimeout(r),R(0)):_||(a=1)))}return R(0),o=setTimeout(()=>{i=!0,O(!0)},n),O}function Se(e){e(!1)}/**
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
 */function Fe(e){return e!==void 0}function Me(e){return typeof e=="object"&&!Array.isArray(e)}function Z(e){return typeof e=="string"||e instanceof String}function j(e,t,n,s){if(s<t)throw S(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw S(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function F(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function J(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var w;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(w||(w={}));/**
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
 */function He(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class $e{constructor(t,n,s,r,o,i,a,u,c,p,R,m=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=R,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,T)=>{this.resolve_=k,this.reject_=T,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new x(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===w.NO_ERROR,u=o.getStatus();if(!a||He(u,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===w.ABORT;s(!1,new x(!1,null,p));return}const c=this.successCodes_.indexOf(u)!==-1;s(!0,new x(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Fe(u)?o(u):o()}catch(u){i(u)}else if(a!==null){const u=z();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(r.canceled){const u=this.appDelete_?Y():xe();i(u)}else{const u=Ae();i(u)}};this.canceled_?n(!1,new x(!1,null,!0)):this.backoffId_=Le(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Se(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class x{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function je(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Be(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function qe(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ve(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Xe(e,t,n,s,r,o,i=!0){const a=J(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return qe(c,t),je(c,n),Be(c,o),Ve(c,s),new $e(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function M(e){let t;try{t=JSON.parse(e)}catch{return null}return Me(t)?t:null}/**
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
 */function Ke(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function We(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Q(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ge(e,t){return t}class d{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Ge}}let U=null;function ze(e){return!Z(e)||e.length<2?e:Q(e)}function Ye(){if(U)return U;const e=[];e.push(new d("bucket")),e.push(new d("generation")),e.push(new d("metageneration")),e.push(new d("name","fullPath",!0));function t(o,i){return ze(i)}const n=new d("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new d("size");return r.xform=s,e.push(r),e.push(new d("timeCreated")),e.push(new d("updated")),e.push(new d("md5Hash",null,!0)),e.push(new d("cacheControl",null,!0)),e.push(new d("contentDisposition",null,!0)),e.push(new d("contentEncoding",null,!0)),e.push(new d("contentLanguage",null,!0)),e.push(new d("contentType",null,!0)),e.push(new d("metadata","customMetadata",!0)),U=e,U}function Ze(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new f(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Je(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return Ze(s,e),s}function Qe(e,t,n){const s=M(t);return s===null?null:Je(e,s,n)}function et(e,t,n,s){const r=M(t);if(r===null||!Z(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const p=e.bucket,R=e.fullPath,m="/b/"+i(p)+"/o/"+i(R),k=F(m,n,s),T=J({alt:"media",token:c});return k+T})[0]}/**
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
 */const B="prefixes",q="items";function tt(e,t,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[B])for(const r of n[B]){const o=r.replace(/\/$/,""),i=e._makeStorageReference(new f(t,o));s.prefixes.push(i)}if(n[q])for(const r of n[q]){const o=e._makeStorageReference(new f(t,r.name));s.items.push(o)}return s}function nt(e,t,n){const s=M(n);return s===null?null:tt(e,t,s)}class ee{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function te(e){if(!e)throw z()}function st(e,t){function n(s,r){const o=nt(e,t,r);return te(o!==null),o}return n}function rt(e,t){function n(s,r){const o=Qe(e,r,t);return te(o!==null),et(o,r,e.host,e._protocol)}return n}function ne(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Oe():r=Ie():n.getStatus()===402?r=Ee(e.bucket):n.getStatus()===403?r=Ne(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ot(e){const t=ne(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=be(e.path)),o.serverResponse=r.serverResponse,o}return n}function it(e,t,n,s,r){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n.length>0&&(o.delimiter=n),s&&(o.pageToken=s),r&&(o.maxResults=r);const i=t.bucketOnlyServerUrl(),a=F(i,e.host,e._protocol),u="GET",c=e.maxOperationRetryTime,p=new ee(a,u,st(e,t.bucket),c);return p.urlParams=o,p.errorHandler=ne(t),p}function at(e,t,n){const s=t.fullServerUrl(),r=F(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new ee(r,o,rt(e,n),i);return a.errorHandler=ot(t),a}class ut{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=w.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=w.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=w.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw I("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw I("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw I("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw I("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw I("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class ct extends ut{initXhr(){this.xhr_.responseType="text"}}function se(){return new ct}/**
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
 */class b{constructor(t,n){this._service=t,n instanceof f?this._location=n:this._location=f.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new b(t,n)}get root(){const t=new f(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Q(this._location.path)}get storage(){return this._service}get parent(){const t=Ke(this._location.path);if(t===null)return null;const n=new f(this._location.bucket,t);return new b(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ve(t)}}function lt(e,t){const n={},s=it(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,se)}function ht(e){e._throwIfRoot("getDownloadURL");const t=at(e.storage,e._location,Ye());return e.storage.makeRequestWithTokens(t,se).then(n=>{if(n===null)throw De();return n})}function dt(e,t){const n=We(e._location.path,t),s=new f(e._location.bucket,n);return new b(e.storage,s)}/**
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
 */function ft(e){return/^[A-Za-z]+:\/\//.test(e)}function pt(e,t){return new b(e,t)}function re(e,t){if(e instanceof H){const n=e;if(n._bucket==null)throw ye();const s=new b(n,n._bucket);return t!=null?re(s,t):s}else return t!==void 0?dt(e,t):e}function _t(e,t){if(t&&ft(t)){if(e instanceof H)return pt(e,t);throw S("To use ref(service, url), the first argument must be a Storage instance.")}else return re(e,t)}function V(e,t){const n=t==null?void 0:t[G];return n==null?null:f.makeFromBucketSpec(n,e)}function gt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:_e(r,e.app.options.projectId))}class H{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=W,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ke,this._maxUploadRetryTime=we,this._requests=new Set,r!=null?this._bucket=f.makeFromBucketSpec(r,this._host):this._bucket=V(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=f.makeFromBucketSpec(this._url,t):this._bucket=V(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new b(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Ce(Y());{const i=Xe(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const X="@firebase/storage",K="0.13.2";/**
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
 */const oe="storage";function ie(e,t){return e=D(e),lt(e)}function ae(e){return e=D(e),ht(e)}function P(e,t){return e=D(e),_t(e,t)}function mt(e=de(),t){e=D(e);const s=le(e,oe).getImmediate({identifier:t}),r=he("storage");return r&&Rt(s,...r),s}function Rt(e,t,n,s={}){gt(e,t,n,s)}function Tt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new H(n,s,r,t,ge)}function kt(){fe(new pe(oe,Tt,"PUBLIC").setMultipleInstances(!0)),$(X,K,""),$(X,K,"esm2017")}kt();const y=mt(Re);async function Ot(e){const t=P(y,e),n=await ie(t);console.log(n);let s=[];for(const r of n.items){const o=P(y,r.fullPath),i=await ae(o);s.push(i)}return s}async function Nt(e){const t=P(y,e),n=await ie(t);for(const s of n.items){const r=P(y,s.fullPath);return await ae(r)}return""}function wt(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>bt(t,e)):console.warn("Geolocation Not Enabled")}function bt(e,t){t([e.coords.latitude,e.coords.longitude])}function At(e){Te(()=>{wt(e)})}export{Nt as a,Ot as g,At as u};
