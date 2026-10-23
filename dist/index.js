"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(w,n){
var f=require('@stdlib/stats-strided-dvarianceyc/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,i,m){return p(f(e,r,a,i,m)/e)}n.exports=x
});var q=s(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,a,i){return l(e,r,a,i,j(e,i))}v.exports=R
});var y=s(function(A,d){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),E=t();_(c,"ndarray",E);d.exports=c
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),u,o=b(O(__dirname,"./native.js"));g(o)?u=h:u=o;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
