window.lpTag=window.lpTag||{},'undefined'==typeof window.lpTag._tagCount?(window.lpTag={wl:lpTag.wl||null,scp:lpTag.scp||null,site:'12621129'||'',section:lpTag.section||'',tagletSection:lpTag.tagletSection||null,autoStart:lpTag.autoStart!==!1,ovr:lpTag.ovr||{},_v:'1.10.0',_tagCount:1,protocol:'https:',events:{bind:function(t,e,i){lpTag.defer(function(){lpTag.events.bind(t,e,i)},0)},trigger:function(t,e,i){lpTag.defer(function(){lpTag.events.trigger(t,e,i)},1)}},defer:function(t,e){0===e?(this._defB=this._defB||[],this._defB.push(t)):1===e?(this._defT=this._defT||[],this._defT.push(t)):(this._defL=this._defL||[],this._defL.push(t))},load:function(t,e,i){var n=this;setTimeout(function(){n._load(t,e,i)},0)},_load:function(t,e,i){var n=t;t||(n=this.protocol+'//'+(this.ovr&&this.ovr.domain?this.ovr.domain:'lptag.liveperson.net')+'/tag/tag.js?site='+this.site);var o=document.createElement('script');o.setAttribute('charset',e?e:'UTF-8'),i&&o.setAttribute('id',i),o.setAttribute('src',n),document.getElementsByTagName('head').item(0).appendChild(o)},init:function(){this._timing=this._timing||{},this._timing.start=(new Date).getTime();var t=this;window.attachEvent?window.attachEvent('onload',function(){t._domReady('domReady')}):(window.addEventListener('DOMContentLoaded',function(){t._domReady('contReady')},!1),window.addEventListener('load',function(){t._domReady('domReady')},!1)),'undefined'===typeof window._lptStop&&this.load()},start:function(){this.autoStart=!0},_domReady:function(t){this.isDom||(this.isDom=!0,this.events.trigger('LPT','DOM_READY',{t:t})),this._timing[t]=(new Date).getTime()},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],hooks:lpTag.hooks||[],identities:lpTag.identities||[],ev:lpTag.ev||[]},lpTag.init()):window.lpTag._tagCount+=1;

lpTag.identities = [];
lpTag.identities.push(identityFn);

function identityFn(callback) {
    console.log('called identity');
    callback({
        iss: 'web',
        acr: 'loa1',
        sub: 'tim1'
    })
}

privatekey = `MIIEogIBAAKCAQEAgSwQWG+qkFiPZuFdWnt1PW0ynqsscbIKhcPeeALFiCdrrSiIGfU8MBkf0FRm+qob0AR8/BwFEdWKIliuyB/6C0eWIufWWQrEYbB2zMd/zlwcNhSPFWs/poOUHAPq3vxigz32hf6RQegovl3HuUF+/wOZSjwbesBMEOxw1qF94TBN37QLzODmn/sHloot4W8Yjcn1iXOnd5algioS1gV8XZeHSmpWD1y4fY5N65l3dzRca3wfHZDVIjaPVxP7RuFgPP6zmr3ETh/gBf2bRumD4vnKMEaAsF5nKiikpzOqi1qDFUWKtK+e+dG23K21BUWk2Bum8ftemIFFdOjU01tvAQIDAQABAoIBACj8jVcyX4GbyCzR16hNQj8ydfxovhp5buNQ6jdUUc9JCt6P3Ne3u9hbMIAPN/nTni2cLvhj/6vQARuy3gq8Mr//gAElZRst0nBY6OlDaCdXjNAQJ/KY7EJuv8E/8Pe+R5fzQlT0GK07+CmnYidDRAOw5aPrfKCvgbNhAtDnvySDlFK7TG3nWqeyyZKBR5oY3l3ojbZHK7umZ2rrjt+fGIinY1sR/NF+8tzr5EEVHi3SgKQiIXUFt8MRyM99Dbrw/7cRmZpY6UbRWLD1flJsyCByx6HswR5HlUx2mxKNRnaMwNO/gUD+S8A9/ewta4qDqmIbhEbpTX/a/ruwVO40EAECgYEA4CYL9Aw5XZObN2cem4SA+FfXvg7IYL8rS8nl2YTHY3uGyBI2urvWVH7UMP7sQluJTsm3OQoje6voC82a5H6j1KrYyhCmJaUOoeZxJaGIlx1mDLC2ezsfbAip/smfZatIDfWtFrhDsEyaZw3mxQIyFT/wAG1QpwjnrzrGcnmGo8ECgYEAk4cD51UP36DllvlaiFAYwHxgWjv1xJMK4iR3EcX4+JIYrMXFFUUGoFGeHcyEPyeArJ276sCGaqaCK7jFruSFdLizgEi0PZHUWRFHQgdIsNQRYbncbtlcI0Z6IrfeC+2pD7bjq88GhTRj4veYUhExtgGmP1ysux3kht4GdLyGm0ECgYAUpqy3QWEPpAfK5O9G+MBBISa5VfdUIojEpMdOcRNFsR3L1RHBxoiKpFy8XuA5hOFzptYApVR7km0AmWLJ5nkFoO/0PfBwy3I7rFWEWAuTkJvUU3ucguf0NiAjX0QWQ9+Rma7mxvdFiOk40WkPgZJHrupXv7qMiR9/X3TlGxkygQKBgAtOB1CMxiCe1bkR9owHhz4IyeFgQt8DXYwiuzUTdJanq1hh904/8dgLKRCjgWbNgiC4HZRJmINHqyXqjMtwG4HsPWURLS6ipCEHH+zBXiKevY49jdS4t0TEu8s5R7ymQ5Q+sYeS368JarYTvwpa4vJNgg3M7jeQfNiQ3vHHGJGBAoGAdQ3QaCrOXsg05VCDnmjFt21x8gV8VKvkx9Z6pEKM6fsP6Kwa7RjFAgxLgHxUuGdVbsOVa/Ne/SX2tfvW+oU8m87Q8KnCW9+61Bl76burFRMxV++52ggFkNjvTzRc7bJ1V6kGuSpmmzevmz4dTMTwmIkxvAH6n5AunqyS9TXFgcw=`;

function authfn(callback) {
    console.log('called auth');
    callback(privatekey);
}
