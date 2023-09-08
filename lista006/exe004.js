var sBrowser,
  sUsrAg = navigator.userAgent;
console.log (sUsrAg)
if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
  sBrowser = "Microsoft Internet Explorer";
}
var h1 = document.createElement("h1")
h1.innerHTML = sBrowser
h1.style.textAlign = "center"
document.body.appendChild(h1)