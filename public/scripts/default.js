var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    //let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /*
     * IMPORTANT: Your use of this software indicates your acceptance of the terms
     * found at http://www.adobe.com/products/eulas/tou_typekit NOTE THAT YOUR
     * RIGHTS TO THIS SOFTWARE ARE LIMITED. USE AT YOUR OWN RISK. For font license
     * information, see the CSS file loaded by this JavaScript.
     */
    if (!window.Typekit) window.Typekit = {};
    window.Typekit.config = {
        "f": "https://fonts.cdnfonts.com/css/open-sans",
        "fi": [14546, 14541, 14548],
        "fn": ["open-sans", ["n3", "n4", "n7"]],
        "ht": "tk",
        "js": "1.14.9",
        "p": "/images/p.gif",
        "ps": 4
    };;
    (function(window, document, undefined) {
        if (!document.querySelector) {
            document.documentElement.className += " wf-inactive";
            return;
        }

        function aa(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function ba(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }

        function k(a, b, c) {
            k = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
            return k.apply(null, arguments)
        }
        var m = Date.now || function() {
            return +new Date
        };

        function ca() {
            this.P = this.R = this.I = this.N = this.O = !0
        };

        function da() {
            var a = [{
                name: "font-family",
                value: n.c[q + 1]
            }];
            this.g = [n.c[q]];
            this.b = a
        }

        function ea(a) {
            for (var b = a.g.join(","), c = [], d = 0; d < a.b.length; d++) {
                var e = a.b[d];
                c.push(e.name + ":" + e.value + ";")
            }
            return b + "{" + c.join("") + "}"
        };

        function fa(a) {
            this.b = a
        }
        fa.prototype.toString = function() {
            return encodeURIComponent(ga(this.b))
        };

        function ha(a, b) {
            this.g = a;
            this.b = b
        }
        ha.prototype.toString = function() {
            for (var a = [], b = 0; b < this.b.length; b++)
                for (var c = this.b[b], d = c.G(), c = c.G(this.g), e = 0; e < d.length; e++) {
                    var f;
                    a: {
                        for (f = 0; f < c.length; f++)
                            if (d[e] === c[f]) {
                                f = !0;
                                break a
                            } f = !1
                    }
                    a.push(f ? 1 : 0)
                }
            a = a.join("");
            a = a.replace(/^0+/, "");
            b = [];
            for (d = a.length; 0 < d; d -= 4) b.unshift(parseInt(a.slice(0 > d - 4 ? 0 : d - 4, d), 2).toString(16));
            return b.join("")
        };

        function ia(a, b) {
            this.b = a;
            this.g = b
        }
        ia.prototype.G = function() {
            return this.g
        };

        function ja(a) {
            this.b = a
        }

        function ka(a, b) {
            return b
        };

        function la() {
            this.b = this.g = -1
        }
        la.prototype.start = function() {
            this.g = (new Date).getTime();
            this.b = -1
        };
        var t = {
            V: "a",
            $: "d",
            U: "i",
            W: "j",
            T: "k",
            Z: "l",
            NONE: "x"
        };
        var v = {};
        v.a = v.d = v.l = v.j = function() {
            return []
        };
        v.i = function(a, b, c) {
            return [new fa(a), new ha(b, c)]
        };
        v.k = function(a) {
            return [new fa(a)]
        };

        function ma(a, b, c) {
            return v[b](a, b, c)
        };
        var na = {};
        na.i = new ja(function(a, b, c) {
            for (var d = 0; d < b.length; d += 1) {
                var e = b[d],
                    f;
                f = e;
                f = a.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + f;
                c.push(new ia(f, [e]))
            }
            a = {};
            for (e = 0; e < b.length; e++) c = b[e], d = c.charAt(1), (a[d] || (a[d] = [])).push(c);
            c = [
                [4, 3, 2, 1, 5, 6, 7, 8, 9],
                [7, 8, 9, 6, 5, 4, 3, 2, 1]
            ];
            d = [];
            for (e = 0; e < c.length; e++) {
                f = c[e];
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    if (a[h]) {
                        d = d.concat(a[h]);
                        break
                    }
                }
            }
            c = d;
            d = {};
            a = [];
            for (e = 0; e < c.length; e++) f = c[e], d[f] || (d[f] = !0, a.push(f));
            c = [];
            for (d = 0; d < b.length; d++)
                for (e = b[d], f = 0; f < a.length; f++) g = a[f],
                    g == e && c.push(g);
            return c
        });

        function oa(a) {
            this.b = a
        }
        oa.prototype.s = function(a, b) {
            var c = a || {},
                d = this.b.replace(/\{\/?([^*}]*)(\*?)\}/g, function(a, b, d) {
                    return d && c[b] ? "/" + c[b].join("/") : c[b] || ""
                });
            d.match(/^\/\//) && (d = (b ? "http:" : "https:") + d);
            return d.replace(/\/*\?*($|\?)/, "$1")
        };

        function pa(a, b) {
            for (var c = [], d = 0; d < b.length; d++) c.push(b[d].toString());
            return {
                format: a,
                extras: c
            }
        };

        function qa(a) {
            var b = new Image(1, 1),
                c = !1;
            b.src = a;
            b.onload = function() {
                c = !0;
                b.onload = null
            };
            setTimeout(function() {
                c || (b.src = "about:blank", b.onload = null)
            }, 3E3)
        };

        function w(a, b, c, d, e, f, g) {
            this.b = a;
            this.B = b;
            this.F = c;
            this.D = d;
            this.v = e;
            this.o = f;
            this.M = g
        }
        w.prototype.getName = function() {
            return this.b
        };

        function x(a, b, c, d) {
            this.b = null != a ? a : null;
            this.g = null != b ? b : null;
            this.h = null != c ? c : null;
            this.s = null != d ? d : null
        }
        var ra = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;

        function y(a, b) {
            return a.b > b.b || a.b === b.b && a.g > b.g || a.b === b.b && a.g === b.g && a.h > b.h ? 1 : a.b < b.b || a.b === b.b && a.g < b.g || a.b === b.b && a.g === b.g && a.h < b.h ? -1 : 0
        }

        function A(a, b) {
            return -1 === y(a, b)
        }

        function B(a, b) {
            return 0 === y(a, b) || 1 === y(a, b)
        }

        function sa(a, b) {
            return 0 === y(a, b) || -1 === y(a, b)
        }

        function ta(a, b) {
            return 0 === y(a, b)
        }
        x.prototype.toString = function() {
            return [this.b, this.g || "", this.h || "", this.s || ""].join("")
        };

        function C(a) {
            a = ra.exec(a);
            var b = null,
                c = null,
                d = null,
                e = null;
            a && (null !== a[1] && a[1] && (b = parseInt(a[1], 10)), null !== a[2] && a[2] && (c = parseInt(a[2], 10)), null !== a[3] && a[3] && (d = parseInt(a[3], 10)), null !== a[4] && a[4] && (/^[0-9]+$/.test(a[4]) ? e = parseInt(a[4], 10) : e = a[4]));
            return new x(b, c, d, e)
        };

        function ua(a) {
            return "Safari" === a.getName() && "AppleWebKit" === a.F || "Unknown" === a.getName() && "AppleWebKit" === a.F && ("iPhone" === a.v || "iPad" === a.v || "iPod" === a.v)
        }

        function va(a) {
            return "Chrome" === a.getName() && B(a.B, new x(6)) && sa(a.B, new x(35))
        }

        function wa(a) {
            return "Chrome" === a.getName() && B(a.B, new x(36))
        }

        function xa(a) {
            return "BuiltinBrowser" === a.getName()
        };

        function D(a) {
            return "Windows" === a.v
        }

        function ya(a) {
            return D(a) && B(a.o, new x(6, 1))
        }

        function E(a) {
            return D(a) && ta(a.o, new x(5, 1)) || D(a) && ta(a.o, new x(5, 2)) || D(a) && ta(a.o, new x(6, 0)) || ya(a)
        }

        function F(a) {
            return "Macintosh" === a.v && (B(a.o, new x(10, 4)) || null === a.o.b)
        }

        function za(a, b) {
            return b.O && ("iPhone" === a.v || "iPod" === a.v) && B(a.o, new x(4, 2)) && A(a.o, new x(5))
        }

        function Aa(a, b) {
            return b.O && ("iPhone" === a.v || "iPod" === a.v) && B(a.o, new x(5))
        }

        function Ba(a, b) {
            return b.N && "iPad" === a.v && B(a.o, new x(4, 2)) && A(a.o, new x(5))
        }

        function Ca(a, b) {
            return b.N && "iPad" === a.v && B(a.o, new x(5))
        }

        function J(a, b) {
            return b.I && "Android" === a.v
        }

        function Da(a, b) {
            return J(a, b) && B(a.o, new x(2, 2)) && A(a.o, new x(3, 1))
        }

        function Ea(a, b) {
            return J(a, b) && B(a.o, new x(3, 1)) && A(a.o, new x(4, 1))
        }

        function K(a) {
            return "Linux" === a.v || "Ubuntu" === a.v
        };
        var Fa = {
            a: function(a, b) {
                return "Safari" === a.getName() && "AppleWebKit" === a.F && B(a.D, new x(525, 13)) && A(a.D, new x(534, 50)) && (E(a) || F(a)) || xa(a) && (Da(a, b) || J(a, b) && B(a.o, new x(4, 1))) || b.I && "Silk" === a.getName() && A(a.B, new x(2)) && (Da(a, b) || F) || b.I && "Silk" === a.getName() && B(a.B, new x(2)) && J(a, b) && B(a.o, new x(4, 1)) || ua(a) && (Ba(a, b) || za(a, b)) || va(a) && (Ba(a, b) || za(a, b)) || wa(a) && (Ba(a, b) || za(a, b)) || "AdobeAIR" === a.getName() && B(a.B, new x(2, 5)) && (D(a) && null === a.o.b || K(a) || F(a))
            },
            d: function(a, b) {
                return va(a) && (E(a) ||
                        K(a) || F(a) || J(a, b) || "CrOS" === a.v || "CrKey" === a.v || Ca(a, b) || Aa(a, b)) || wa(a) && (Ca(a, b) || Aa(a, b)) || "Gecko" === a.F && 1 === y(a.D, new x(1, 9, 1)) && sa(a.D, new x(38)) && (E(a) || K(a) || F(a) || J(a, b)) || "Safari" === a.getName() && "AppleWebKit" === a.F && B(a.D, new x(534, 50)) && (E(a) || F(a)) || ua(a) && (Ca(a, b) || Aa(a, b)) || "Opera" === a.getName() && B(a.B, new x(11, 10)) && sa(a.B, new x(22)) && (E(a) || K(a) || F(a) || J(a, b)) || "MSIE" === a.getName() && 9 <= a.M && (ya(a) || D(a) && ta(a.o, new x(6, 0))) || "Edge" === a.getName() && ya(a) || "MSIE" === a.getName() && b.R &&
                    "Windows Phone" === a.v && B(a.o, new x(8)) || xa(a) && (b.P && "BlackBerry" === a.v && B(a.o, new x(10)) || K(a))
            },
            j: function(a, b) {
                return xa(a) && Ea(a, b) || b.I && "Silk" === a.getName() && B(a.B, new x(2)) && (Ea(a, b) || K(a))
            },
            i: function(a) {
                return "MSIE" === a.getName() && B(a.B, new x(6, 0)) && (void 0 === a.M || 9 > a.M) && E(a)
            },
            l: function(a, b) {
                return wa(a) && (E(a) || K(a) || F(a) || J(a, b) || "CrOS" === a.v || "CrKey" === a.v) || "Gecko" === a.F && B(a.D, new x(39)) && (E(a) || K(a) || F(a) || J(a, b)) || "Opera" === a.getName() && B(a.B, new x(23)) && (E(a) || K(a) || F(a) || J(a, b))
            },
            x: function() {
                return !1
            }
        };
        var Ga = new w("Unknown", new x, "Unknown", new x, "Unknown", new x, void 0);

        function L(a) {
            var b = M(a.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            if ("" !== b) return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
            a = M(a.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1);
            return "" !== a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"), a) : "Unknown"
        }

        function N(a) {
            var b = M(a.b, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
            if (b || (b = M(a.b, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = M(a.b, /(iPhone )?OS ([\d_]+)/, 2))) return b;
            if (b = M(a.b, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
                for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                    if (/^[\d\._]+$/.test(b[c])) return b[c];
            return (a = M(a.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
        }

        function Ha() {
            var a = O,
                b = "Unknown",
                c = C(M(a.b, /Presto\/([\d\w\.]+)/, 1)),
                d = C(N(a)),
                e = P(a.g);
            null !== c.b ? b = "Presto" : (-1 != a.b.indexOf("Gecko") && (b = "Gecko"), c = C(M(a.b, /rv:([^\)]+)/, 1)));
            if (-1 != a.b.indexOf("Opera Mini/")) {
                var f = C(M(a.b, /Opera Mini\/([\d\.]+)/, 1));
                return new w("OperaMini", f, b, c, L(a), d, e)
            }
            if (-1 != a.b.indexOf("Version/") && (f = C(M(a.b, /Version\/([\d\.]+)/, 1)), null !== f.b)) return new w("Opera", f, b, c, L(a), d, e);
            f = C(M(a.b, /Opera[\/ ]([\d\.]+)/, 1));
            return null !== f.b ? new w("Opera", f, b, c, L(a), d, e) : new w("Opera",
                new x, b, c, L(a), d, e)
        }

        function Ia() {
            var a = O,
                b = L(a),
                c = C(N(a)),
                d = C(M(a.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
                e = "Unknown",
                f = new x,
                f = "Unknown";
            /OPR\/[\d.]+/.test(a.b) ? e = "Opera" : -1 != a.b.indexOf("Chrome") || -1 != a.b.indexOf("CrMo") || -1 != a.b.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.b) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : -1 != a.b.indexOf("PhantomJS") ? e = "PhantomJS" : -1 != a.b.indexOf("Safari") ? e = "Safari" : -1 != a.b.indexOf("AdobeAIR") ? e = "AdobeAIR" : -1 != a.b.indexOf("PlayStation") && (e = "BuiltinBrowser");
            "BuiltinBrowser" ==
            e ? f = "Unknown" : "Silk" == e ? f = M(a.b, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? f = M(a.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.b.indexOf("Version/") ? f = M(a.b, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? f = M(a.b, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? f = M(a.b, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e && (f = M(a.b, /PhantomJS\/([\d.]+)/, 1));
            f = C(f);
            return new w(e, f, "AppleWebKit", d, b, c, P(a.g))
        }

        function M(a, b, c) {
            return (a = a.match(b)) && a[c] ? a[c] : ""
        }

        function P(a) {
            if (a.documentMode) return a.documentMode
        };

        function Ja(a) {
            this.b = a || "-"
        }
        Ja.prototype.s = function(a) {
            for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
            return b.join(this.b)
        };
        var Ka = !!window.FontFace;

        function La(a, b, c, d) {
            b = a.b.createElement(b);
            if (c)
                for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
            d && b.appendChild(a.b.createTextNode(d));
            return b
        }

        function Ma(a, b, c) {
            a = a.b.getElementsByTagName(b)[0];
            a || (a = document.documentElement);
            a.insertBefore(c, a.lastChild)
        }

        function Na(a, b) {
            a.b.body ? b() : a.b.addEventListener ? a.b.addEventListener("DOMContentLoaded", b) : a.b.attachEvent("onreadystatechange", function() {
                "interactive" != a.b.readyState && "complete" != a.b.readyState || b()
            })
        }

        function Oa(a) {
            a.parentNode && a.parentNode.removeChild(a)
        }

        function Q(a, b, c) {
            b = b || [];
            c = c || [];
            for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
                for (var f = !1, g = 0; g < d.length; g += 1)
                    if (b[e] === d[g]) {
                        f = !0;
                        break
                    } f || d.push(b[e])
            }
            b = [];
            for (e = 0; e < d.length; e += 1) {
                f = !1;
                for (g = 0; g < c.length; g += 1)
                    if (d[e] === c[g]) {
                        f = !0;
                        break
                    } f || b.push(d[e])
            }
            a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function Pa(a, b) {
            for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
                if (c[d] == b) return !0;
            return !1
        }

        function Qa(a) {
            if ("string" === typeof a.m) return a.m;
            var b = a.g.location.protocol;
            "about:" == b && (b = a.h.location.protocol);
            return "https:" == b ? "https:" : "http:"
        }

        function ga(a) {
            return a.g.location.hostname || a.h.location.hostname
        }

        function Ra(a, b, c, d) {
            function e() {
                G && p && z && (G(H), G = null)
            }

            function f(a) {
                for (var c = 0; c < l.length; c++)
                    if (l[c].href && -1 !== l[c].href.indexOf(b)) {
                        a();
                        return
                    } setTimeout(function() {
                    f(a)
                }, 0)
            }

            function g(a) {
                for (var c = 0; c < l.length; c++)
                    if (l[c].href && -1 !== l[c].href.indexOf(b) && l[c].media) {
                        var d = l[c].media;
                        if ("all" === d || d.mediaText && "all" === d.mediaText) {
                            a();
                            return
                        }
                    } setTimeout(function() {
                    g(a)
                }, 0)
            }
            var h = La(a, "link", {
                    rel: "stylesheet",
                    href: b,
                    media: d ? "only x" : "all"
                }),
                l = a.b.styleSheets,
                p = !1,
                z = !d,
                H = null,
                G = c || null;
            Ka ? (h.onload =
                function() {
                    p = !0;
                    e()
                }, h.onerror = function() {
                    p = !0;
                    H = Error("Stylesheet failed to load");
                    e()
                }) : setTimeout(function() {
                p = !0;
                e()
            }, 0);
            Ma(a, "head", h);
            d && f(function() {
                h.media = "all";
                g(function() {
                    z = !0;
                    e()
                })
            })
        }

        function Sa(a, b, c) {
            var d = a.b.getElementsByTagName("head")[0];
            if (d) {
                var e = La(a, "script", {
                        src: b
                    }),
                    f = !1;
                e.onload = e.onreadystatechange = function() {
                    f || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (f = !0, c && c(null), e.onload = e.onreadystatechange = null, "HEAD" == e.parentNode.tagName && d.removeChild(e))
                };
                d.appendChild(e);
                setTimeout(function() {
                    f || (f = !0, c && c(Error("Script load timeout")))
                }, 5E3)
            }
        };

        function Ta(a, b) {
            this.b = a;
            this.h = a.g.document.documentElement;
            this.u = b;
            this.g = new Ja("-");
            this.w = !1 !== b.events;
            this.m = !1 !== b.classes
        }

        function Ua(a) {
            if (a.m) {
                var b = Pa(a.h, a.g.s("wf", "active")),
                    c = [],
                    d = [a.g.s("wf", "loading")];
                b || c.push(a.g.s("wf", "inactive"));
                Q(a.h, c, d)
            }
            R(a, "inactive")
        }

        function R(a, b, c) {
            if (a.w && a.u[b])
                if (c) a.u[b](c.getName(), S(c));
                else a.u[b]()
        };

        function T(a, b) {
            this.h = a;
            this.g = 4;
            this.b = "n";
            var c = (b || "n4").match(/^([nio])([1-9])$/i);
            c && (this.b = c[1], this.g = parseInt(c[2], 10))
        }
        T.prototype.getName = function() {
            return this.h
        };

        function Va(a) {
            return Wa(a) + " " + (a.g + "00") + " 300px " + Xa(a.h)
        }

        function Xa(a) {
            var b = [];
            a = a.split(/,\s*/);
            for (var c = 0; c < a.length; c++) {
                var d = a[c].replace(/['"]/g, ""); - 1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
            }
            return b.join(",")
        }

        function S(a) {
            return a.b + a.g
        }

        function Wa(a) {
            var b = "normal";
            "o" === a.b ? b = "oblique" : "i" === a.b && (b = "italic");
            return b
        };

        function Ya(a, b) {
            this.b = a;
            this.m = b;
            this.h = {};
            this.g = {}
        }
        Ya.prototype.G = function(a) {
            return a ? (this.h[a] || this.m).slice(0) : this.m.slice(0)
        };

        function Za(a, b, c) {
            for (var d = [], e = a.b.split(",")[0].replace(/"|'/g, ""), f = a.G(), g, h = [], l = {}, p = 0; p < f.length; p++) g = f[p], 0 < g.length && !l[g] && (l[g] = !0, h.push(g));
            c = c.b ? c.b(e, h, d) : h;
            a.h[b] = c;
            a.g[b] = d
        }

        function $a(a, b) {
            for (var c = a.G(b), d = a.g[b] || [], e = [], f = 0; f < c.length; f++) e.push(new T(a.b, c[f]));
            for (f = 0; f < d.length; f++)
                if (c = d[f].b, c !== a.b)
                    for (var g = d[f].G(), h = 0; h < g.length; h++) e.push(new T(c, g[h]));
            return e
        };

        function bb(a, b) {
            this.b = a;
            this.h = b;
            this.g = La(this.b, "span", {
                "aria-hidden": "true"
            }, this.h)
        }

        function cb(a) {
            Ma(a.b, "body", a.g)
        }

        function db(a) {
            return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + Xa(a.h) + ";" + ("font-style:" + Wa(a) + ";font-weight:" + (a.g + "00") + ";")
        };

        function eb(a, b, c, d, e, f, g) {
            this.H = a;
            this.L = b;
            this.b = c;
            this.g = d;
            this.C = g || "BESbswy";
            this.h = {};
            this.S = e || 3E3;
            this.J = f || null;
            this.A = this.w = this.u = this.m = null;
            this.m = new bb(this.b, this.C);
            this.u = new bb(this.b, this.C);
            this.w = new bb(this.b, this.C);
            this.A = new bb(this.b, this.C);
            a = new T(this.g.getName() + ",serif", S(this.g));
            a = db(a);
            this.m.g.style.cssText = a;
            a = new T(this.g.getName() + ",sans-serif", S(this.g));
            a = db(a);
            this.u.g.style.cssText = a;
            a = new T("serif", S(this.g));
            a = db(a);
            this.w.g.style.cssText = a;
            a = new T("sans-serif",
                S(this.g));
            a = db(a);
            this.A.g.style.cssText = a;
            cb(this.m);
            cb(this.u);
            cb(this.w);
            cb(this.A)
        }
        var fb = {
                Y: "serif",
                X: "sans-serif"
            },
            gb = null;

        function hb() {
            if (null === gb) {
                var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                gb = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
            }
            return gb
        }
        eb.prototype.start = function() {
            this.h.serif = this.w.g.offsetWidth;
            this.h["sans-serif"] = this.A.g.offsetWidth;
            this.K = m();
            ib(this)
        };

        function jb(a, b, c) {
            for (var d in fb)
                if (fb.hasOwnProperty(d) && b === a.h[fb[d]] && c === a.h[fb[d]]) return !0;
            return !1
        }

        function ib(a) {
            var b = a.m.g.offsetWidth,
                c = a.u.g.offsetWidth,
                d;
            (d = b === a.h.serif && c === a.h["sans-serif"]) || (d = hb() && jb(a, b, c));
            d ? m() - a.K >= a.S ? hb() && jb(a, b, c) && (null === a.J || a.J.hasOwnProperty(a.g.getName())) ? kb(a, a.H) : kb(a, a.L) : lb(a) : kb(a, a.H)
        }

        function lb(a) {
            setTimeout(k(function() {
                ib(this)
            }, a), 50)
        }

        function kb(a, b) {
            setTimeout(k(function() {
                Oa(this.m.g);
                Oa(this.u.g);
                Oa(this.w.g);
                Oa(this.A.g);
                b(this.g)
            }, a), 0)
        };

        function mb(a, b, c, d, e, f) {
            this.m = a;
            this.w = b;
            this.g = d;
            this.b = c;
            this.h = e || 3E3;
            this.u = f || void 0
        }
        mb.prototype.start = function() {
            var a = this.b.g.document,
                b = this,
                c = m(),
                d = new Promise(function(d, e) {
                    function h() {
                        m() - c >= b.h ? e() : a.fonts.load(Va(b.g), b.u).then(function(a) {
                            1 <= a.length ? d() : setTimeout(h, 25)
                        }, function() {
                            e()
                        })
                    }
                    h()
                }),
                e = new Promise(function(a, c) {
                    setTimeout(c, b.h)
                });
            Promise.race([e, d]).then(function() {
                b.m(b.g)
            }, function() {
                b.w(b.g)
            })
        };

        function nb(a, b, c) {
            this.b = a;
            this.g = b;
            this.h = 0;
            this.A = this.w = !1;
            this.C = c
        }
        var ob = null;
        nb.prototype.m = function(a) {
            var b = this.g;
            b.m && Q(b.h, [b.g.s("wf", a.getName(), S(a).toString(), "active")], [b.g.s("wf", a.getName(), S(a).toString(), "loading"), b.g.s("wf", a.getName(), S(a).toString(), "inactive")]);
            R(b, "fontactive", a);
            this.A = !0;
            pb(this)
        };
        nb.prototype.u = function(a) {
            var b = this.g;
            if (b.m) {
                var c = Pa(b.h, b.g.s("wf", a.getName(), S(a).toString(), "active")),
                    d = [],
                    e = [b.g.s("wf", a.getName(), S(a).toString(), "loading")];
                c || d.push(b.g.s("wf", a.getName(), S(a).toString(), "inactive"));
                Q(b.h, d, e)
            }
            R(b, "fontinactive", a);
            pb(this)
        };

        function pb(a) {
            0 == --a.h && a.w && (a.A ? (a = a.g, a.m && Q(a.h, [a.g.s("wf", "active")], [a.g.s("wf", "loading"), a.g.s("wf", "inactive")]), R(a, "active")) : Ua(a.g))
        };

        function qb(a, b) {
            this.m = a;
            this.b = b;
            this.g = []
        }
        qb.prototype.h = function(a) {
            this.g.push(a)
        };
        qb.prototype.load = function(a, b) {
            var c = a,
                d = b || {};
            "string" == typeof c ? c = [c] : c && c.length || (d = c || {}, c = []);
            if (c.length)
                for (var e = this, f = c.length, g = 0; g < c.length; g++) rb(this, c[g], function() {
                    0 === --f && sb(e, d)
                });
            else sb(this, d)
        };

        function rb(a, b, c) {
            b = a.m.s({
                id: encodeURIComponent(b)
            });
            Sa(a.b, b, c)
        }

        function sb(a, b) {
            if (0 !== a.g.length) {
                for (var c = new Ta(a.b, b), d = !1, e = 0; e < a.g.length; e++) a.g[e].init(), d = d || a.g[e].supportsConfiguredBrowser();
                if (d)
                    for (c.m && Q(c.h, [c.g.s("wf", "loading")]), R(c, "loading"), c = 0; c < a.g.length; c++) d = a.g[c], d.supportsConfiguredBrowser() && d.load(null, c == a.g.length - 1, b);
                else Ua(c);
                a.g = []
            }
        };

        function tb() {
            this.g = 0;
            this.b = null
        }

        function ub(a) {
            a.g++;
            return function() {
                a.g--;
                vb(a)
            }
        }

        function wb(a, b) {
            a.b = b;
            vb(a)
        }

        function vb(a) {
            0 == a.g && a.b && (a.b(), a.b = null)
        };

        function xb(a, b) {
            this.b = b || Array(Math.ceil(a / 32));
            if (!b)
                for (var c = 0; c < this.b.length; c++) this.b[c] = 0
        };

        function U(a, b) {
            return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16)
        };

        function yb(a, b, c) {
            this.b = a;
            this.h = b;
            this.g = new xb(a, c)
        }
        var zb = [2449897292, 4218179547, 2675077685, 1031960064, 1478620578, 1386343184, 3194259988, 2656050674, 3012733295, 2193273665];

        function Ab() {
            var a;
            a = Bb;
            if (window.atob) a = window.atob(a);
            else {
                a = a.replace(/=+$/, "");
                if (1 == a.length % 4) throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var b = 0, c, d, e = 0, f = ""; d = a.charAt(e++); ~d && (c = b % 4 ? 64 * c + d : d, b++ % 4) ? f += String.fromCharCode(255 & c >> (-2 * b & 6)) : 0) d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);
                a = f
            }
            c = [];
            for (b = 0; b < a.length; b += 4) c.push(a.charCodeAt(b) << 24 | a.charCodeAt(b + 1) << 16 | a.charCodeAt(b + 2) << 8 | a.charCodeAt(b + 3) << 0);
            a = c.shift();
            b = c.shift();
            this.b = new yb(a, b, c)
        }

        function Cb(a) {
            for (var b = location.hostname.split("."); 0 !== b.length;) {
                var c;
                a: {
                    c = a.b;
                    var d = b.join(".");
                    if ("string" !== typeof d && "number" !== typeof d) throw Error("Value should be a string or number.");
                    for (var e = "number" === typeof d, f = 0; f < c.h; f++) {
                        var g = 0;
                        if (e) var g = zb[f] || 0,
                            h = d & 4294967295,
                            h = U(h, 3432918353),
                            h = h << 15 | h >>> 17,
                            h = U(h, 461845907),
                            g = g ^ h,
                            g = g << 13 | g >>> 19,
                            g = U(g, 5) + 3864292196,
                            g = g ^ 4;
                        else {
                            for (var g = zb[f] || 0, l = h = 0, p = d.length % 4, z = d.length - p, l = 0; l < z; l += 4) h = (d.charCodeAt(l + 0) & 4294967295) << 0 | (d.charCodeAt(l +
                                1) & 4294967295) << 8 | (d.charCodeAt(l + 2) & 4294967295) << 16 | (d.charCodeAt(l + 3) & 4294967295) << 24, h = U(h, 3432918353), h = h << 15 | h >>> 17, h = U(h, 461845907), g ^= h, g = g << 13 | g >>> 19, g = U(g, 5) + 3864292196;
                            h = 0;
                            switch (p) {
                                case 3:
                                    h ^= (d.charCodeAt(l + 2) & 4294967295) << 16;
                                case 2:
                                    h ^= (d.charCodeAt(l + 1) & 4294967295) << 8;
                                case 1:
                                    h ^= (d.charCodeAt(l + 0) & 4294967295) << 0, h = U(h, 3432918353), h = h << 15 | h >>> 17, h = U(h, 461845907), g ^= h
                            }
                            g ^= d.length
                        }
                        g ^= g >>> 16;
                        g = U(g, 2246822507);
                        g ^= g >>> 13;
                        g = U(g, 3266489909);
                        g ^= g >>> 16;
                        g = (g >>> 0) % c.b;
                        h = c.g;
                        if (Math.floor(g / 32 + 1) > h.b.length) throw Error("Index is out of bounds.");
                        l = Math.floor(g / 32);
                        if (!(h.b[l] & 1 << g - 32 * l)) {
                            c = !1;
                            break a
                        }
                    }
                    c = !0
                }
                if (c) return !0;
                b.shift()
            }
            return !1
        };

        function Db(a) {
            this.b = a;
            this.g = "x";
            this.C = this.L = null;
            this.h = [];
            this.m = [];
            this.H = this.u = null;
            this.J = !1;
            this.w = null;
            this.A = !1
        }
        Db.prototype.supportsConfiguredBrowser = function() {
            return "x" !== this.g
        };
        Db.prototype.init = function() {
            if (0 < this.m.length) {
                for (var a = [], b = 0; b < this.m.length; b++) a.push(ea(this.m[b]));
                var b = this.b,
                    a = a.join(""),
                    c = La(this.b, "style");
                c.setAttribute("type", "text/css");
                c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
                Ma(b, "head", c)
            }
        };
        Db.prototype.load = function(a, b, c) {
            function d() {}
            var e = this,
                f = c || {},
                g = f.contextPath || ".",
                h = f.hostname || this.H;
            a = f.timeout;
            c = !!f.async;
            var l = !1 !== f.events,
                p = null,
                z = new la,
                H = new la,
                G = new tb;
            f.active && (d = f.active);
            f.active = function() {
                H.b = (new Date).getTime();
                if (e.K) {
                    var a = e.K,
                        b = -1 !== z.g && -1 !== z.b ? z.b - z.g : -1,
                        c = -1 !== H.g && -1 !== H.b ? H.b - H.g : -1,
                        f = e.A,
                        g = new oa("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&dc={domainCheck}&js={version}&_={_}"),
                        h = encodeURIComponent((window.__adobewebfontsappname__ || a.app || "").toString().substr(0, 20)),
                        l = encodeURIComponent(ga(e.b)),
                        r = [],
                        p = [];
                    window.Typekit.fonts || (window.Typekit.fonts = []);
                    for (var p = window.Typekit.fonts, u = 0; u < a.b.length; u++) {
                        for (var G = !1, I = 0; I < p.length; I++)
                            if (a.b[u] === p[I]) {
                                G = !0;
                                break
                            } G || (r.push(a.b[u]), p.push(a.b[u]))
                    }
                    r.length && qa(g.s({
                        service: a.m,
                        token: a.u,
                        app: h,
                        hosting: a.h,
                        host: l,
                        variations: r.join("."),
                        account: a.g,
                        stylesheetLoadTime: b,
                        fontLoadTime: c,
                        domainCheck: f,
                        version: a.version,
                        _: (+new Date).toString()
                    }))
                }
                d()
            };
            p = new Ta(this.b, f);
            null !== this.w ? Cb(this.w) && (this.A = !0) : this.A = !0;
            if (this.g) {
                for (var f = na[this.g] || new ja(ka), u = 0; u < this.h.length; u++) Za(this.h[u], this.g, f);
                this.u && (f = ma(this.b, this.g, this.h), f = pa(this.g, f), f.contextPath = g, h && (f.hostname = h), g = this.u.s(f, this.J ? "https:" !== Qa(this.b) : !1), z.start(), Ra(this.b, g, ub(G), c));
                if (l) {
                    for (var I = [], ab = {}, r = new nb(this.b, p, a), u = 0; u < this.h.length; u++) I = I.concat($a(this.h[u], this.g));
                    for (u = 0; u < I.length; u++) ab[I[u].getName()] = "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";
                    wb(G, function() {
                        z.b = (new Date).getTime();
                        H.start();
                        Na(e.b, function() {
                            var a = I,
                                c = {},
                                d = ab || {};
                            if (0 === a.length && b) Ua(r.g);
                            else {
                                r.h += a.length;
                                b && (r.w = b);
                                var e, f = [];
                                for (e = 0; e < a.length; e++) {
                                    var g = a[e],
                                        h = d[g.getName()],
                                        l = r.g,
                                        p = g;
                                    l.m && Q(l.h, [l.g.s("wf", p.getName(), S(p).toString(), "loading")]);
                                    R(l, "fontloading", p);
                                    l = null;
                                    null === ob && (ob = window.FontFace ? (p = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(p[1], 10) : !0 : !1);
                                    ob ? l = new mb(k(r.m, r), k(r.u, r), r.b, g, r.C, h) : l = new eb(k(r.m, r), k(r.u, r),
                                        r.b, g, r.C, c, h);
                                    f.push(l)
                                }
                                for (e = 0; e < f.length; e++) f[e].start()
                            }
                        })
                    })
                }
            }
        };
        var Eb, O = new function() {
                var a = document;
                this.b = navigator.userAgent;
                this.g = a
            },
            Fb;
        if (-1 != O.b.indexOf("MSIE") || -1 != O.b.indexOf("Trident/")) {
            var V = O,
                Gb = L(V),
                Hb = C(N(V)),
                Ib = null,
                Jb = null,
                Kb = null,
                Lb = M(V.b, /Trident\/([\d\w\.]+)/, 1),
                Mb = P(V.g),
                Ib = -1 != V.b.indexOf("MSIE") ? C(M(V.b, /MSIE ([\d\w\.]+)/, 1)) : C(M(V.b, /rv:([\d\w\.]+)/, 1));
            "" !== Lb ? (Jb = "Trident", Kb = C(Lb)) : (Jb = "Unknown", Kb = new x);
            Fb = new w("MSIE", Ib, Jb, Kb, Gb, Hb, Mb)
        } else {
            var Nb;
            if (-1 != O.b.indexOf("Edge/")) {
                var Ob = O,
                    Pb = L(Ob),
                    Qb = C(N(Ob)),
                    Rb = C(M(Ob.b, /Edge\/([\d\w\.]+)/, 1));
                Nb = new w("Edge", Rb, "Edge", Rb, Pb, Qb, P(Ob.g))
            } else {
                var Sb;
                if (-1 !=
                    O.b.indexOf("Opera")) Sb = Ha();
                else {
                    var Tb;
                    if (/OPR\/[\d.]+/.test(O.b)) Tb = Ia();
                    else {
                        var Ub;
                        if (/AppleWeb(K|k)it/.test(O.b)) Ub = Ia();
                        else {
                            var Vb;
                            if (-1 != O.b.indexOf("Gecko")) {
                                var W = O,
                                    Wb = "Unknown",
                                    Xb = new x,
                                    Yb = C(N(W)); - 1 != W.b.indexOf("Firefox") ? (Wb = "Firefox", Xb = C(M(W.b, /Firefox\/([\d\w\.]+)/, 1))) : -1 != W.b.indexOf("Mozilla") && (Wb = "Mozilla");
                                var Zb = C(M(W.b, /rv:([^\)]+)/, 1));
                                Vb = new w(Wb, Xb, "Gecko", Zb, L(W), Yb, P(W.g))
                            } else Vb = Ga;
                            Ub = Vb
                        }
                        Tb = Ub
                    }
                    Sb = Tb
                }
                Nb = Sb
            }
            Fb = Nb
        }
        Eb = Fb;
        var $b = new function() {
            var a = window;
            this.g = this.h = a;
            this.b = this.g.document
        };
        window.Typekit || (window.Typekit = {});
        if (!window.Typekit.load) {
            var ac = window.Typekit.config || {},
                bc = null;
            ac.k && (bc = new oa(ac.k));
            var cc = new qb(bc, $b);
            window.Typekit.load = function() {
                cc.load.apply(cc, arguments)
            };
            window.Typekit.addKit = function() {
                cc.h.apply(cc, arguments)
            }
        }
        var dc, X, Y, n = window.Typekit.config || {};
        Y = new Db($b);
        Y.K = new function() {
            var a = n.ht,
                b = n.fi,
                c = n.a,
                d = n.kt,
                e = n.js,
                f = n.l;
            this.m = n.ps;
            this.h = a;
            this.b = b || [];
            this.g = c || null;
            this.u = d || null;
            this.version = e || null;
            this.app = f || null
        };
        X = new ca;
        X.O = !n.si;
        X.N = !n.st;
        X.I = !n.sa;
        X.R = !n.sw;
        X.P = !n.sb;
        Y.C = X;
        if (n.dl) {
            var Bb = n.dl;
            try {
                Y.w = new Ab
            } catch (a) {}
        }
        n.ds && (Y.J = n.ds);
        n.f && (dc = new oa(n.f), Y.u = dc);
        n.hn && (Y.H = n.hn);
        var q;
        if (n.fn)
            for (q = 0; q < n.fn.length; q += 2) Y.h.push(new Ya(n.fn[q], n.fn[q + 1]));
        if (n.c)
            for (q = 0; q < n.c.length; q += 2) Y.m.push(new da);
        Y.L = Eb;
        var ec;
        a: {
            var fc = Y.L,
                gc = new ca,
                hc = Y.C || gc,
                ic;
            for (ic in t) {
                var Z = t[ic];
                if (Fa[Z] && Fa[Z](fc, hc)) {
                    ec = Z;
                    break a
                }
            }
            for (ic in t)
                if (Z = t[ic], Fa[Z] && Fa[Z](fc, gc)) {
                    ec = "x";
                    break a
                } ec = "k"
        }
        Y.g = ec;
        window.Typekit.addKit(Y);
        if (window.WebFont) try {
            window.Typekit.load()
        } catch (a) {};
    }(this, document));

    try {
        Typekit.load();
    } catch (e) {};

}
