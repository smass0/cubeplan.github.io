!function(i){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.uaParserJs=i()}}(function(){var i;return function e(i,s,o){function r(t,a){if(!s[t]){if(!i[t]){var w="function"==typeof require&&require;if(!a&&w)return w(t,!0);if(n)return n(t,!0);var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}var d=s[t]={exports:{}};i[t][0].call(d.exports,function(e){var s=i[t][1][e];return r(s?s:e)},d,d.exports,e,i,s,o)}return s[t].exports}for(var n="function"==typeof require&&require,t=0;t<o.length;t++)r(o[t]);return r}({1:[function(e,s,o){!function(e,r){"use strict";var n="0.7.10",t="",a="?",w="function",l="undefined",d="object",u="string",p="major",c="model",f="name",m="type",b="vendor",g="version",h="architecture",v="console",x="mobile",y="tablet",k="smarttv",A="wearable",E="embedded",S={extend:function(i,e){for(var s in e)-1!=="browser cpu device engine os".indexOf(s)&&e[s].length%2===0&&(i[s]=e[s].concat(i[s]));return i},has:function(i,e){return"string"==typeof i?-1!==e.toLowerCase().indexOf(i.toLowerCase()):!1},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===u?i.split(".")[0]:r}},T={rgx:function(){for(var i,e,s,o,n,t,a,u=0,p=arguments;u<p.length&&!t;){var c=p[u],f=p[u+1];if(typeof i===l){i={};for(o in f)f.hasOwnProperty(o)&&(n=f[o],typeof n===d?i[n[0]]=r:i[n]=r)}for(e=s=0;e<c.length&&!t;)if(t=c[e++].exec(this.getUA()))for(o=0;o<f.length;o++)a=t[++s],n=f[o],typeof n===d&&n.length>0?2==n.length?typeof n[1]==w?i[n[0]]=n[1].call(this,a):i[n[0]]=n[1]:3==n.length?typeof n[1]!==w||n[1].exec&&n[1].test?i[n[0]]=a?a.replace(n[1],n[2]):r:i[n[0]]=a?n[1].call(this,a,n[2]):r:4==n.length&&(i[n[0]]=a?n[3].call(this,a.replace(n[1],n[2])):r):i[n]=a?a:r;u+=2}return i},str:function(i,e){for(var s in e)if(typeof e[s]===d&&e[s].length>0){for(var o=0;o<e[s].length;o++)if(S.has(e[s][o],i))return s===a?r:s}else if(S.has(e[s],i))return s===a?r:s;return i}},N={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},O={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[f,g],[/\s(opr)\/([\w\.]+)/i],[[f,"Opera"],g],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[f,g],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[f,"IE"],g],[/(edge)\/((\d+)?[\w\.]+)/i],[f,g],[/(yabrowser)\/([\w\.]+)/i],[[f,"Yandex"],g],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],g],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[f,g],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[f,"UCBrowser"],g],[/(dolfin)\/([\w\.]+)/i],[[f,"Dolphin"],g],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[f,"Chrome"],g],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[g,[f,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[g,[f,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[g,[f,"Facebook"]],[/fxios\/([\w\.-]+)/i],[g,[f,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[g,[f,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[g,f],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[f,[g,T.str,N.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[f,g],[/(navigator|netscape)\/([\w\.-]+)/i],[[f,"Netscape"],g],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[f,g]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,S.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[h,/ower/,"",S.lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[h,S.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[c,b,[m,y]],[/applecoremedia\/[\w\.]+ \((ipad)/],[c,[b,"Apple"],[m,y]],[/(apple\s{0,1}tv)/i],[[c,"Apple TV"],[b,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[b,c,[m,y]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[c,[b,"Amazon"],[m,y]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[c,T.str,N.device.amazon.model],[b,"Amazon"],[m,x]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[c,b,[m,x]],[/\((ip[honed|\s\w*]+);/i],[c,[b,"Apple"],[m,x]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[b,c,[m,x]],[/\(bb10;\s(\w+)/i],[c,[b,"BlackBerry"],[m,x]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[c,[b,"Asus"],[m,y]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[b,"Sony"],[c,"Xperia Tablet"],[m,y]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[b,"Sony"],[c,"Xperia Phone"],[m,x]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[b,c,[m,v]],[/android.+;\s(shield)\sbuild/i],[c,[b,"Nvidia"],[m,v]],[/(playstation\s[34portablevi]+)/i],[c,[b,"Sony"],[m,v]],[/(sprint\s(\w+))/i],[[b,T.str,N.device.sprint.vendor],[c,T.str,N.device.sprint.model],[m,x]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[b,c,[m,y]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[b,[c,/_/g," "],[m,x]],[/(nexus\s9)/i],[c,[b,"HTC"],[m,y]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[c,[b,"Microsoft"],[m,v]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[b,"Microsoft"],[m,x]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],[c,[b,"Motorola"],[m,x]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[c,[b,"Motorola"],[m,y]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[b,"Samsung"],c,[m,y]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[b,"Samsung"],c,[m,x]],[/(samsung);smarttv/i],[b,c,[m,k]],[/\(dtv[\);].+(aquos)/i],[c,[b,"Sharp"],[m,k]],[/sie-(\w+)*/i],[c,[b,"Siemens"],[m,x]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[b,"Nokia"],c,[m,x]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[c,[b,"Acer"],[m,y]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[b,"LG"],c,[m,y]],[/(lg) netcast\.tv/i],[b,c,[m,k]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[c,[b,"LG"],[m,x]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[c,[b,"Lenovo"],[m,y]],[/linux;.+((jolla));/i],[b,c,[m,x]],[/((pebble))app\/[\d\.]+\s/i],[b,c,[m,A]],[/android.+;\s(glass)\s\d/i],[c,[b,"Google"],[m,A]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[c,/_/g," "],[b,"Xiaomi"],[m,x]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[[m,S.lowerize],b,c]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[g,[f,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[f,g],[/rv\:([\w\.]+).*(gecko)/i],[g,f]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[f,g],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[f,[g,T.str,N.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[f,"Windows"],[g,T.str,N.os.windows.version]],[/\((bb)(10);/i],[[f,"BlackBerry"],g],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[f,g],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[f,"Symbian"],g],[/\((series40);/i],[f],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[f,"Firefox OS"],g],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[f,g],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[f,"Chromium OS"],g],[/(sunos)\s?([\w\.]+\d)*/i],[[f,"Solaris"],g],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[f,g],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[f,"iOS"],[g,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[f,"Mac OS"],[g,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[f,g]]},M=function(i,s){if(!(this instanceof M))return new M(i,s).getResult();var o=i||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:t),r=s?S.extend(O,s):O;return this.getBrowser=function(){var i=T.rgx.apply(this,r.browser);return i.major=S.major(i.version),i},this.getCPU=function(){return T.rgx.apply(this,r.cpu)},this.getDevice=function(){return T.rgx.apply(this,r.device)},this.getEngine=function(){return T.rgx.apply(this,r.engine)},this.getOS=function(){return T.rgx.apply(this,r.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=i,this},this.setUA(o),this};M.VERSION=n,M.BROWSER={NAME:f,MAJOR:p,VERSION:g},M.CPU={ARCHITECTURE:h},M.DEVICE={MODEL:c,VENDOR:b,TYPE:m,CONSOLE:v,MOBILE:x,SMARTTV:k,TABLET:y,WEARABLE:A,EMBEDDED:E},M.ENGINE={NAME:f,VERSION:g},M.OS={NAME:f,VERSION:g},typeof o!==l?(typeof s!==l&&s.exports&&(o=s.exports=M),o.UAParser=M):typeof i===w&&i.amd?i(function(){return M}):e.UAParser=M;var z=e.jQuery||e.Zepto;if(typeof z!==l){var _=new M;z.ua=_.getResult(),z.ua.get=function(){return _.getUA()},z.ua.set=function(i){_.setUA(i);var e=_.getResult();for(var s in e)z.ua[s]=e[s]}}}("object"==typeof window?window:this)},{}]},{},[1])(1)});