(function(a, b) {
    typeof define === "function" && define.amd ? define([], function() {
        return b()
    }) : typeof exports === "object" ? module.exports = b() : a.whatInput = b()
})(this, function() {
    function a(a) {
        clearTimeout(p);
        c(a);
        i = !0;
        p = setTimeout(function() {
            i = !1
        }, 1E3)
    }

    function b(a) {
        i || c(a)
    }

    function c(a) {
        var c = a.keyCode ? a.keyCode : a.which,
            b = a.target || a.srcElement,
            d = l[a.type];
        d === "pointer" && (d = typeof a.pointerType === "number" ? q[a.pointerType] : a.pointerType);
        if (h !== d && (k || !h || !(d === "keyboard" && o[c] !== "tab" && j.indexOf(b.nodeName.toLowerCase()) >=
                0))) h = d, f.setAttribute("data-whatinput", h), m.indexOf(h) === -1 && m.push(h);
        d === "keyboard" && g.indexOf(o[c]) === -1 && o[c] && g.push(o[c])
    }

    function d(a) {
        a = g.indexOf(o[a.keyCode ? a.keyCode : a.which]);
        a !== -1 && g.splice(a, 1)
    }
    var g = [],
        f = document.body,
        i = !1,
        h = null,
        j = ["input", "select", "textarea"],
        k = f.hasAttribute("data-whatinput-formtyping"),
        l = {
            keydown: "keyboard",
            mousedown: "mouse",
            mouseenter: "mouse",
            touchstart: "touch",
            pointerdown: "pointer",
            MSPointerDown: "pointer"
        },
        m = [],
        o = {
            9: "tab",
            13: "enter",
            16: "shift",
            27: "esc",
            32: "space",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        },
        q = {
            2: "touch",
            3: "touch",
            4: "mouse"
        },
        p;
    (function() {
        var c = "mousedown";
        window.PointerEvent ? c = "pointerdown" : window.MSPointerEvent && (c = "MSPointerDown");
        f.addEventListener ? (f.addEventListener(c, b), f.addEventListener("mouseenter", b), "ontouchstart" in document.documentElement && f.addEventListener("touchstart", a), f.addEventListener("keydown", b), f.addEventListener("keyup", d)) : (f.attachEvent(c, b), f.attachEvent("mouseenter", b), "ontouchstart" in document.documentElement && f.attachEvent("touchstart",
            a), f.attachEvent("keydown", b), f.attachEvent("keyup", d))
    })();
    return {
        ask: function() {
            return h
        },
        keys: function() {
            return g
        },
        types: function() {
            return m
        },
        set: c
    }
});