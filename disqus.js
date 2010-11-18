

showComments = function(sit, ref) {
  var a = document.getElementById("comments");
  a || window.alert("Could not enable comments on this page.");
  var d = document.getElementById("disqus_thread");
  if(d) {
    a.style.display = a.style.display == "none" ? "" : "none"
  }else {
//    var disqus_developer = 1;
    var disqus_identifier = ref;
    var disqus_url = sit + ref;
    d = document.createElement("div");
    d.id = "disqus_thread";
    a.appendChild(d);
    a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.src = "http://trimartolod.disqus.com/embed.js";
    document.getElementsByTagName("head")[0].appendChild(a);
  }
}
