!function (o, c) {
    var n = c.documentElement,
    t = " w-mod-";
  n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);

(function () {
  var hbspt = {
    forms: {
      create: function (c) {
        hubcache.forms.push(c)
      }
    },
  };

  var hubcache = {
    forms: [],
    letsgo: function () {
      for (var i in hubcache.forms) {
        hbspt.forms.create(hubcache.forms[i]);
      }
    }
  }

  var url = window.location.href;
  var isDebug = url.includes('debug=gorgias');
  var commitVersion = '4d48600'
  var scriptBase = isDebug ? "http://127.0.0.1:5500" : "https://cdn.jsdelivr.net/gh/gorgias/gorgias-webflow@" + commitVersion;
  var minBase = isDebug ? "" : ".min";

  var styleHsFormHref = scriptBase + "/src/css/hubspot" + minBase + ".css";
  var styleHsFormTag = document.createElement('link');
  styleHsFormTag.setAttribute('rel', 'stylesheet');
  styleHsFormTag.setAttribute('type', 'text/css');
  styleHsFormTag.setAttribute('href', styleHsFormHref);
  document.head.appendChild(styleHsFormTag);

  var scripts = [
    { src: scriptBase + "/src/js/all" + minBase + ".js", async: false, defer: false, location: 'head', onload: '' },
    { src: scriptBase + "/src/js/sessions" + minBase + ".js", async: false, defer: false, location: 'head', onload: '' },
    { src: scriptBase + "/src/main" + minBase + ".js", async: true, defer: true, location: 'body', onload: '' },
    { src: scriptBase + "/src/js/cookies" + minBase + ".js", async: true, defer: true, location: 'body', onload: '' },
    { src: "//js.hsforms.net/forms/embed/v2.js", async: true, defer: true, location: 'body', onload: 'hubcache.letsgo()' }
  ];

  function loadScripts(index) {
    if (index >= scripts.length) {
      return;
    }
    var script = document.createElement('script');
    var isExtScript = scripts[index].src.includes('//');
    var isOnLoad = scripts[index].onload.length != 0;

    script.src = scripts[index].src;
    script.type = "text/javascript";
    script.async = scripts[index].async;
    script.defer = scripts[index].defer;

    if (isOnLoad) {
      script.setAttribute("onload", scripts[index].onload);
    }
    script.addEventListener('load', function () {
      loadScripts(index + 1);
    });

    var location = scripts[index].location === 'head' ? document.head : document.body;
    location.appendChild(script);
  }
  loadScripts(0);

  var SEGMENT_WRITE_KEY = window.location.hostname === 'www.gorgias.com' ? "4K8cOhGhUlCNfE3rlsYVGBTBAR92Q2Nk" : "nPhO6SyfURLuit010EVhib2Xe8t9Mgw
