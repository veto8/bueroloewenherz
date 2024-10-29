/*
 Copyright 2011-2016 Adobe Systems Incorporated. All Rights Reserved.
*/
(function(c) {
    "function" === typeof define && define.amd && define.amd.jQuery ? define(["jquery", "museutils"], c) : c(jQuery)
})(function(c) {
    function b(a) {
        var b = a.css("background-image");
        a.css("background-image", "");
        var c = a.css("background-image");
        b != c && a.css("background-image", b);
        return c.replace(/^\s*url\(\"?/, "").replace(/['"]?\)$/, "")
    }
    if (!Muse.Browser.Features.checkCSSFeature("background-size")) {
        var d = function(a) {
                var d = c(a),
                    g = b(d),
                    j = document.createElement("img"),
                    l = document.createElement("div"),
                    k = this,
                    i = !1,
                    m = !1,
                    n = !0,
                    q = {};
                c(l).css({
                    overflow: "hidden",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: a.clientWidth + "px",
                    height: a.clientHeight + "px",
                    marginBottom: "-" + a.clientHeight + "px",
                    marginRight: "-" + a.clientWidth + "px",
                    zIndex: "-1"
                }).addClass("museBgSizePolyfill");
                j.src = g;
                j.alt = "";
                j.style.position = "absolute";
                l.appendChild(j);
                a.children.length > 0 ? a.insertBefore(l, a.children[0]) : a.appendChild(l);
                if (a === document.body) d = c("html"), a = d.get(0), g = b(d), j.src = g, d.css("background-attachment") == "fixed" ? (l.style.position =
                    "fixed", n = !1) : l.style.position = "absolute";
                else if (d.is("#page")) d.css("marginLeft").toLowerCase() == "auto" && (m = !0), l.style.top = d.offset().top + parseInt(d.css("borderTopWidth")) + "px", l.style.bottom = parseInt(d.parent().css("paddingBottom")) + parseInt(d.css("borderBottomWidth")) + "px", l.style.left = d.offset().left + parseInt(d.css("borderLeftWidth")) + "px", l.style.right = d.offset().left + parseInt(d.css("borderRightWidth")) + "px", l.style.zIndex = 0;
                else if (d.css("position") == "static") a.style.position = "relative";
                this.reloadImage =
                    function() {
                        var c = b(d),
                            g = d.css("background-color");
                        if (c != j.src) j.src = c;
                        a.style.backgroundImage = "none";
                        a.style.backgroundColor = "transparent";
                        l.style.backgroundColor = g;
                        c = (d.css("background-position-x") + " " + d.css("background-position-y")).replace(/^\s+/, "").replace(/\s+$/, "");
                        "0px 0px" == c && (c = "left top");
                        c = c.split(/\s+/);
                        c.length == 1 && c[0].indexOf("center") >= 0 && c.push("center");
                        if (d.data("hasBackgroundPositionScrollEffect") != !0)
                            for (var g = 0, i = c.length; g < i; g++) switch (c[g]) {
                                case "center":
                                case "50%":
                                    g == 0 ?
                                        (j.style.right = "", j.style.left = "50%", j.style.marginLeft = "-" + Math.ceil(j.offsetWidth / 2) + "px") : (j.style.bottom = "", j.style.top = "50%", j.style.marginTop = "-" + Math.ceil(j.offsetHeight / 2) + "px");
                                    break;
                                case "left":
                                    j.style.right = "";
                                    j.style.left = "0px";
                                    j.style.marginLeft = "0px";
                                    break;
                                case "right":
                                    j.style.left = "";
                                    j.style.right = "0px";
                                    j.style.marginLeft = "0px";
                                    break;
                                case "top":
                                    j.style.bottom = "";
                                    j.style.top = "0px";
                                    j.style.marginTop = "0px";
                                    break;
                                case "bottom":
                                    j.style.top = "";
                                    j.style.bottom = "0px";
                                    j.style.marginTop = "0px";
                                    break;
                                default:
                                    g == 0 ? (j.style.left = c[g], j.style.marginLeft = "-" + Math.ceil(j.offsetWidth / 2) + "px") : (j.style.top = c[g], j.style.marginTop = "-" + Math.ceil(j.offsetHeight / 2) + "px")
                            }
                    };
                this.resizeImage = function(b) {
                    var c = a.getBoundingClientRect(),
                        g = a.scrollWidth - (Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder ? c.right - c.left - d.innerWidth() : 0),
                        c = a.scrollHeight - (Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder ? c.bottom - c.top - d.innerHeight() : 0),
                        g = !n ? a.clientWidth : Math.max(g, a.clientWidth),
                        c = !n ? a.clientHeight : Math.max(c,
                            a.clientHeight);
                    !q[j.src] && j.clientWidth && (q[j.src] = {
                        width: j.clientWidth,
                        height: j.clientHeight
                    });
                    var i = g / (q[j.src] ? q[j.src].width : 1),
                        k = c / (q[j.src] ? q[j.src].height : 1);
                    l.style.height = c + "px";
                    l.style.marginBottom = "-" + c + "px";
                    l.style.width = g + "px";
                    l.style.marginRight = "-" + g + "px";
                    i < k == b ? (j.style.height = c + 1 + "px", j.style.width = "auto") : (j.style.width = g + 1 + "px", j.style.height = "auto")
                };
                this.update = function() {
                    if (i) {
                        a.style.backgroundImage = "";
                        d.css("background-color", "");
                        var b = d.css("background-image").toLowerCase(),
                            c = (a.currentStyle || window.getComputedStyle(a, null))["background-size"];
                        c && c.toLowerCase();
                        if (b != "none" && (c == "cover" || c == "contain")) {
                            if (k.reloadImage(), l.style.display = "block", l.style.width = "0px", l.style.height = "0px", k.resizeImage(c == "cover"), m) l.style.left = d.offset().left + parseInt(d.css("borderLeftWidth")) + "px", l.style.right = d.offset().left + parseInt(d.css("borderRightWidth")) + "px"
                        } else l.style.display = "none"
                    }
                };
                if (j.complete || g == "none") i = !0;
                else c(j).one("load", function() {
                    i = !0;
                    k.update()
                });
                this.update()
            },
            a = function() {
                this.updateList = []
            };
        a.prototype.initialize = function(a) {
            var b = this;
            a.each(function() {
                var a = new d(this);
                this !== document.body ? b.updateList.push(a) : (c(window).resize(function() {
                    setTimeout(function() {
                        a.update()
                    }, 10)
                }), c(window).load(function() {
                    setTimeout(function() {
                        a.update()
                    }, 10)
                }))
            });
            var g = b.updateList.length;
            g > 0 && setInterval(function() {
                for (var a = 0; a < g; a++) b.updateList[a].update()
            }, Math.max(120, 16 * g))
        };
        c(window).data("musePolyfill.bgSize", new a)
    }
});;
(function() {
    if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
        var c = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return c;
            return -1
        }(Muse.assets.required, "jquery.musepolyfill.bgsize.js");
        if (-1 != c) {
            Muse.assets.required.splice(c, 1);
            for (var c = document.getElementsByTagName("meta"), b = 0, d = c.length; b < d; b++) {
                var a = c[b];
                if ("generator" == a.getAttribute("name")) {
                    "2018.1.0.386" != a.getAttribute("content") && Muse.assets.outOfDate.push("jquery.musepolyfill.bgsize.js");
                    break
                }
            }
        }
    }
})();