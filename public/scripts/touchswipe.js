/*

 @fileOverview TouchSwipe - jQuery Plugin
 @version 1.6.6

 @author Matt Bryson http://www.github.com/mattbryson
 @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 @see http://labs.skinkers.com/touchSwipe/
 @see http://plugins.jquery.com/project/touchSwipe

 Copyright (c) 2010 Matt Bryson
 Dual licensed under the MIT or GPL Version 2 licenses.

*/
(function(a) {
    typeof define === "function" && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
})(function(a) {
    function b(f) {
        if (f && f.allowPageScroll === void 0 && (f.swipe !== void 0 || f.swipeStatus !== void 0)) f.allowPageScroll = k;
        if (f.click !== void 0 && f.tap === void 0) f.tap = f.click;
        f || (f = {});
        f = a.extend({}, a.fn.swipe.defaults, f);
        return this.each(function() {
            var b = a(this),
                d = b.data(Q);
            d || (d = new c(this, f), b.data(Q, d))
        })
    }

    function c(c, b) {
        function ha(f) {
            if (v.data(Q + "_intouch") !== !0 && !(a(f.target).closest(b.excludedElements,
                    v).length > 0)) {
                var c = f.originalEvent ? f.originalEvent : f,
                    d, g = r ? c.touches[0] : c;
                A = w;
                r ? B = c.touches.length : f.preventDefault();
                F = 0;
                K = G = null;
                M = N = E = 0;
                I = 1;
                L = 0;
                x = Ba();
                Y = Ca();
                Z = U = 0;
                if (!r || B === b.fingers || b.fingers === y || V()) {
                    if (ia(0, g), aa = O(), B == 2 && (ia(1, c.touches[1]), N = M = ja(x[0].start, x[1].start)), b.swipeStatus || b.pinchStatus) d = J(c, A)
                } else d = !1;
                if (d === !1) return A = z, J(c, A), d;
                else b.hold && (ka = setTimeout(a.proxy(function() {
                        v.trigger("hold", [c.target]);
                        b.hold && (d = b.hold.call(v, c, c.target))
                    }, this), b.longTapThreshold)),
                    ba(!0);
                return null
            }
        }

        function la(c) {
            var o = c.originalEvent ? c.originalEvent : c;
            if (!(A === D || A === z || ta())) {
                var q, p = ua(r ? o.touches[0] : o);
                W = O();
                if (r) B = o.touches.length;
                b.hold && clearTimeout(ka);
                A = s;
                B == 2 && (N == 0 ? (ia(1, o.touches[1]), N = M = ja(x[0].start, x[1].start)) : (ua(o.touches[1]), M = ja(x[0].end, x[1].end), K = I < 1 ? j : h), I = (M / N * 1).toFixed(2), L = Math.abs(N - M));
                if (B === b.fingers || b.fingers === y || !r || V()) {
                    var n;
                    n = p.start;
                    var m = p.end;
                    n = Math.round(Math.atan2(m.y - n.y, n.x - m.x) * 180 / Math.PI);
                    n < 0 && (n = 360 - Math.abs(n));
                    n = G = n <= 45 &&
                        n >= 0 ? d : n <= 360 && n >= 315 ? d : n >= 135 && n <= 225 ? g : n > 45 && n < 135 ? i : f;
                    if (b.allowPageScroll === k || V()) c.preventDefault();
                    else switch (m = b.allowPageScroll === l, n) {
                        case d:
                            (b.swipeLeft && m || !m && b.allowPageScroll != t) && c.preventDefault();
                            break;
                        case g:
                            (b.swipeRight && m || !m && b.allowPageScroll != t) && c.preventDefault();
                            break;
                        case f:
                            (b.swipeUp && m || !m && b.allowPageScroll != u) && c.preventDefault();
                            break;
                        case i:
                            (b.swipeDown && m || !m && b.allowPageScroll != u) && c.preventDefault()
                    }
                    F = Math.round(Math.sqrt(Math.pow(p.end.x - p.start.x, 2) + Math.pow(p.end.y -
                        p.start.y, 2)));
                    E = W - aa;
                    c = G;
                    n = F;
                    n = Math.max(n, va(c));
                    Y[c].distance = n;
                    if (b.swipeStatus || b.pinchStatus) q = J(o, A);
                    if (!b.triggerOnTouchEnd || b.triggerOnTouchLeave) c = !0, b.triggerOnTouchLeave && (c = a(this), n = c.offset(), c = {
                        left: n.left,
                        right: n.left + c.outerWidth(),
                        top: n.top,
                        bottom: n.top + c.outerHeight()
                    }, c = p.end.x > c.left && p.end.x < c.right && p.end.y > c.top && p.end.y < c.bottom), !b.triggerOnTouchEnd && c ? A = ma(s) : b.triggerOnTouchLeave && !c && (A = ma(D)), (A == z || A == D) && J(o, A)
                } else A = z, J(o, A);
                q === !1 && (A = z, J(o, A))
            }
        }

        function na(a) {
            var c =
                a.originalEvent;
            if (r && c.touches.length > 0) return U = O(), Z = event.touches.length + 1, !0;
            ta() && (B = Z);
            W = O();
            E = W - aa;
            oa() || !pa() ? (A = z, J(c, A)) : b.triggerOnTouchEnd || b.triggerOnTouchEnd == !1 && A === s ? (a.preventDefault(), A = D, J(c, A)) : !b.triggerOnTouchEnd && b.tap ? (A = D, R(c, A, q)) : A === s && (A = z, J(c, A));
            ba(!1);
            return null
        }

        function S() {
            M = N = aa = W = B = 0;
            I = 1;
            Z = U = 0;
            ba(!1)
        }

        function qa(a) {
            a = a.originalEvent;
            b.triggerOnTouchLeave && (A = ma(D), J(a, A))
        }

        function wa() {
            v.unbind(ca, ha);
            v.unbind(da, S);
            v.unbind(ra, la);
            v.unbind(sa, na);
            T && v.unbind(T,
                qa);
            ba(!1)
        }

        function ma(a) {
            var c = a,
                f = b.maxTimeThreshold ? E >= b.maxTimeThreshold ? !1 : !0 : !0,
                d = pa(),
                g = oa();
            !f || g ? c = z : d && a == s && (!b.triggerOnTouchEnd || b.triggerOnTouchLeave) ? c = D : !d && a == D && b.triggerOnTouchLeave && (c = z);
            return c
        }

        function J(a, c) {
            var f = void 0;
            if (xa() && ya() || ya()) f = R(a, c, m);
            else if ((za() && V() || V()) && f !== !1) f = R(a, c, o);
            Aa() && b.doubleTap && f !== !1 ? f = R(a, c, p) : E > b.longTapThreshold && F < C && b.longTap && f !== !1 ? f = R(a, c, n) : (B === 1 || !r) && (isNaN(F) || F < b.threshold) && b.tap && f !== !1 && (f = R(a, c, q));
            c === z && S(a);
            c === D &&
                (r ? a.touches.length == 0 && S(a) : S(a));
            return f
        }

        function R(c, k, l) {
            var s = void 0;
            if (l == m) {
                v.trigger("swipeStatus", [k, G || null, F || 0, E || 0, B, x]);
                if (b.swipeStatus && (s = b.swipeStatus.call(v, c, k, G || null, F || 0, E || 0, B, x), s === !1)) return !1;
                if (k == D && xa()) {
                    v.trigger("swipe", [G, F, E, B, x]);
                    if (b.swipe && (s = b.swipe.call(v, c, G, F, E, B, x), s === !1)) return !1;
                    switch (G) {
                        case d:
                            v.trigger("swipeLeft", [G, F, E, B, x]);
                            b.swipeLeft && (s = b.swipeLeft.call(v, c, G, F, E, B, x));
                            break;
                        case g:
                            v.trigger("swipeRight", [G, F, E, B, x]);
                            b.swipeRight && (s = b.swipeRight.call(v,
                                c, G, F, E, B, x));
                            break;
                        case f:
                            v.trigger("swipeUp", [G, F, E, B, x]);
                            b.swipeUp && (s = b.swipeUp.call(v, c, G, F, E, B, x));
                            break;
                        case i:
                            v.trigger("swipeDown", [G, F, E, B, x]), b.swipeDown && (s = b.swipeDown.call(v, c, G, F, E, B, x))
                    }
                }
            }
            if (l == o) {
                v.trigger("pinchStatus", [k, K || null, L || 0, E || 0, B, I, x]);
                if (b.pinchStatus && (s = b.pinchStatus.call(v, c, k, K || null, L || 0, E || 0, B, I, x), s === !1)) return !1;
                if (k == D && za()) switch (K) {
                    case h:
                        v.trigger("pinchIn", [K || null, L || 0, E || 0, B, I, x]);
                        b.pinchIn && (s = b.pinchIn.call(v, c, K || null, L || 0, E || 0, B, I, x));
                        break;
                    case j:
                        v.trigger("pinchOut",
                            [K || null, L || 0, E || 0, B, I, x]), b.pinchOut && (s = b.pinchOut.call(v, c, K || null, L || 0, E || 0, B, I, x))
                }
            }
            if (l == q) {
                if (k === z || k === D) clearTimeout(ea), clearTimeout(ka), b.doubleTap && !Aa() ? (P = O(), ea = setTimeout(a.proxy(function() {
                    P = null;
                    v.trigger("tap", [c.target]);
                    b.tap && (s = b.tap.call(v, c, c.target))
                }, this), b.doubleTapThreshold)) : (P = null, v.trigger("tap", [c.target]), b.tap && (s = b.tap.call(v, c, c.target)))
            } else if (l == p) {
                if (k === z || k === D) clearTimeout(ea), P = null, v.trigger("doubletap", [c.target]), b.doubleTap && (s = b.doubleTap.call(v,
                    c, c.target))
            } else if (l == n && (k === z || k === D)) clearTimeout(ea), P = null, v.trigger("longtap", [c.target]), b.longTap && (s = b.longTap.call(v, c, c.target));
            return s
        }

        function pa() {
            var a = !0;
            b.threshold !== null && (a = F >= b.threshold);
            return a
        }

        function oa() {
            var a = !1;
            b.cancelThreshold !== null && G !== null && (a = va(G) - F >= b.cancelThreshold);
            return a
        }

        function za() {
            var a = B === b.fingers || b.fingers === y || !r,
                c = x[0].end.x !== 0,
                f;
            f = b.pinchThreshold !== null ? L >= b.pinchThreshold : !0;
            return a && c && f
        }

        function V() {
            return !(!b.pinchStatus && !b.pinchIn &&
                !b.pinchOut)
        }

        function xa() {
            var a = b.maxTimeThreshold ? E >= b.maxTimeThreshold ? !1 : !0 : !0,
                c = pa(),
                f = B === b.fingers || b.fingers === y || !r,
                d = x[0].end.x !== 0;
            return !oa() && d && f && c && a
        }

        function ya() {
            return !(!b.swipe && !b.swipeStatus && !b.swipeLeft && !b.swipeRight && !b.swipeUp && !b.swipeDown)
        }

        function Aa() {
            if (P == null) return !1;
            var a = O();
            return !!b.doubleTap && a - P <= b.doubleTapThreshold
        }

        function ta() {
            var a = !1;
            U && O() - U <= b.fingerReleaseThreshold && (a = !0);
            return a
        }

        function ba(a) {
            a === !0 ? (v.bind(ra, la), v.bind(sa, na), T && v.bind(T, qa)) :
                (v.unbind(ra, la, !1), v.unbind(sa, na, !1), T && v.unbind(T, qa, !1));
            v.data(Q + "_intouch", a === !0)
        }

        function ia(a, c) {
            x[a].identifier = c.identifier !== void 0 ? c.identifier : 0;
            x[a].start.x = x[a].end.x = c.pageX || c.clientX;
            x[a].start.y = x[a].end.y = c.pageY || c.clientY;
            return x[a]
        }

        function ua(a) {
            var c;
            a: {
                for (c = 0; c < x.length; c++)
                    if (x[c].identifier == (a.identifier !== void 0 ? a.identifier : 0)) {
                        c = x[c];
                        break a
                    } c = void 0
            }
            c.end.x = a.pageX || a.clientX;
            c.end.y = a.pageY || a.clientY;
            return c
        }

        function Ba() {
            for (var a = [], c = 0; c <= 5; c++) a.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return a
        }

        function va(a) {
            if (Y[a]) return Y[a].distance
        }

        function Ca() {
            var a = {};
            a[d] = fa(d);
            a[g] = fa(g);
            a[f] = fa(f);
            a[i] = fa(i);
            return a
        }

        function fa(a) {
            return {
                direction: a,
                distance: 0
            }
        }

        function ja(a, c) {
            var f = Math.abs(a.x - c.x),
                b = Math.abs(a.y - c.y);
            return Math.round(Math.sqrt(f * f + b * b))
        }

        function O() {
            return (new Date).getTime()
        }
        var ga = r || X || !b.fallbackToMouseEvents,
            ca = ga ? X ? H ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            ra = ga ? X ? H ? "MSPointerMove" : "pointermove" : "touchmove" :
            "mousemove",
            sa = ga ? X ? H ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            T = ga ? null : "mouseleave",
            da = X ? H ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            F = 0,
            G = null,
            E = 0,
            N = 0,
            M = 0,
            I = 1,
            L = 0,
            K = 0,
            Y = null,
            v = a(c),
            A = "start",
            B = 0,
            x = null,
            aa = 0,
            W = 0,
            U = 0,
            Z = 0,
            P = 0,
            ea = null,
            ka = null;
        try {
            v.bind(ca, ha), v.bind(da, S)
        } catch (Da) {
            a.error("events not supported " + ca + "," + da + " on jQuery.swipe")
        }
        this.enable = function() {
            v.bind(ca, ha);
            v.bind(da, S);
            return v
        };
        this.disable = function() {
            wa();
            return v
        };
        this.destroy = function() {
            wa();
            v.data(Q, null);
            return v
        };
        this.option = function(c, f) {
            if (b[c] !== void 0)
                if (f === void 0) return b[c];
                else b[c] = f;
            else a.error("Option " + c + " does not exist on jQuery.swipe.options");
            return null
        }
    }
    var d = "left",
        g = "right",
        f = "up",
        i = "down",
        h = "in",
        j = "out",
        k = "none",
        l = "auto",
        m = "swipe",
        o = "pinch",
        q = "tap",
        p = "doubletap",
        n = "longtap",
        t = "horizontal",
        u = "vertical",
        y = "all",
        C = 10,
        w = "start",
        s = "move",
        D = "end",
        z = "cancel",
        r = "ontouchstart" in window,
        H = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        X = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        Q = "TouchSwipe";
    a.fn.swipe = function(c) {
        var f = a(this),
            d = f.data(Q);
        if (d && typeof c === "string")
            if (d[c]) return d[c].apply(this, Array.prototype.slice.call(arguments, 1));
            else a.error("Method " + c + " does not exist on jQuery.swipe");
        else if (!d && (typeof c === "object" || !c)) return b.apply(this, arguments);
        return f
    };
    a.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    a.fn.swipe.phases = {
        PHASE_START: w,
        PHASE_MOVE: s,
        PHASE_END: D,
        PHASE_CANCEL: z
    };
    a.fn.swipe.directions = {
        LEFT: d,
        RIGHT: g,
        UP: f,
        DOWN: i,
        IN: h,
        OUT: j
    };
    a.fn.swipe.pageScroll = {
        NONE: k,
        HORIZONTAL: t,
        VERTICAL: u,
        AUTO: l
    };
    a.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: y
    }
});;
(function() {
    if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
        var c = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return c;
            return -1
        }(Muse.assets.required, "touchswipe.js");
        if (-1 != c) {
            Muse.assets.required.splice(c, 1);
            for (var c = document.getElementsByTagName("meta"), b = 0, d = c.length; b < d; b++) {
                var a = c[b];
                if ("generator" == a.getAttribute("name")) {
                    "2018.1.0.386" != a.getAttribute("content") && Muse.assets.outOfDate.push("touchswipe.js");
                    break
                }
            }
        }
    }
})();