
!function() {
    "use strict";
    function t(n) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, t(n)
    }
    var n = function h(t) {
            if (!(this instanceof h)) return new h(t);
            h.t(t) ? this.o = document.querySelectorAll(t) : h.i(t) ? t.o ? this.o = t.o : this.o[0] = t : this.o = []
        },
        e = n.prototype = {
            get length() {
                return this.o.length
            }
        };
    e.o = [], e.l = function(t) {
        for (var n = 0; n < this.o.length; n++) {
            var e = t(this.o[n], n);
            if (e) return e
        }
        return this
    }, n.i = function(t) {
        return Object(t) === t
    }, n.t = function(t) {
        return "string" == typeof t
    }, e.u = function(t) {
        var n = t.split(" ");
        return this.l((function(e) {
            e.classList ? e.classList.add.apply(e.classList, n) : e.className += " " + t
        }))
    }, n.h = {
        method: "POST",
        async: !0
    }, n.v = function(t) {
        var e,
            i = "GET" == (t = Object.assign(Object.assign({}, n.h), t)).method;
        if (t.p) {
            var r = [];
            for (var o in t.p) i ? r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t.p[o])) : r.push(o + "=" + t.p[o]);
            r = r.join("&")
        }
        i ? r && (t.url += "?" + r) : t.p = r, (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function() {
            4 == e.readyState && (/^2/.test(e.status) ? t.g && t.g(e.response) : t.m && t.m(e), t.complete && t.complete(e))
        }, t.k && t.k(), e.open(t.method, t.url, t.async), i ? (e.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.send()) : (e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(t.p))
    }, e.C = function(t, n, e, i, r, o) {
        var a = e + " " + n + "s " + (i = i || "linear") + " 0s 1 " + {
                show: "reverse",
                hide: "normal"
            }[t],
            c = ["inherit", "inherit"];
        return "hide" == t && (c = ["inherit", "none"]), this.l((function(t) {
                var e = t.style;
                e.display = c[0], r && (e.transformOrigin = r), e.animation = a, setTimeout((function() {
                    e.display = c[1], e.transformOrigin = "", e.animation = "", o && o()
                }), 1e3 * n - 10)
            }))
    }, n.O = function(t) {
        return n.t(t) ? t : t.join("")
    }, e.F = function(t, e) {
        if (this.length) {
            var i = this;
            return n.S(t, e, (function(t) {
                return i.o[0].getAttribute(t)
            }), (function(t) {
                return Object.keys(t).map((function(n) {
                        i.l((function(e) {
                            e.setAttribute(n, t[n])
                        }))
                    })), i.o
            }))
        }
    }, e.click = function(t) {
        return this.l((function(n) {
            n.onclick = t
        }))
    }, e.create = function(t) {
        var e = n.T(t);
        n.t(e) && (e = {
            type: e
        });
        var i = e.type;
        if (
                delete e.type
                , i.includes(":")) {
            var r = i.split(":");
            i = r[0], e.type = r[1]
        }
        var o = document.createElement(i);
        if (Object.keys(e).map((function(t) {
                    t.match(/^(on)/) ? o[t] = e[t] : "html" == t ? o.innerHTML = e.html : o.setAttribute(t, e[t])
                })), e.type = i, this.length) {
            var a = [];
            return this.l((function(t, n) {
                    var e = o;
                    n > 0 && (e = o.cloneNode(!0)), a.push(t.appendChild(e))
                })), this.o = a, this
        }
        return o
    }, e.M = function(t, e) {
        if (this.length) {
            var i = this;
            return n.S(t, e, (function(t) {
                return getComputedStyle(i.o[0])[t]
            }), (function(t) {
                return Object.keys(t).map((function(n) {
                        i.l((function(e) {
                            e.style[n] = t[n]
                        }))
                    })), i
            }))
        }
    }, n.S = function(t, e, i, r) {
        if (n.t(t)) {
            if (e) {
                var o = {};
                return o[t] = e, r(o)
            }
            return i(t)
        }
        if (n.i(t)) return r(t)
    }, n.A = function(t, n, e) {
        var i = document.createElement(t);
        return i.setAttribute("class", n), null == e || (i.innerHTML = e), i
    };n._ = !1, n.G = function(e, i, r, o, a) {
        var c = {
            title: null,
            D: "",
            B: null,
            P: null,
            R: "OK",
            I: "Cancel",
            placeholder: "Enter value",
            N: !1,
            W: !0,
            defaultValue: "",
            j: "",
            H: "body"
        };
        if ("alert" == a && (c.I = null), "object" === t(e)) {
            for (var l in e) c[l] = e[l];
            "function" != typeof c.B && (c.B = null), "function" != typeof c.P && (c.P = null)
        } else c.title = "string" == typeof e ? e : c.title, c.D = "string" == typeof i ? i : c.D, c.B = "function" == typeof r ? r : c.B, c.P = "function" == typeof o ? o : c.P, "function" == typeof i && (c.B = i);
        c.type && (a = c.type);
        var s = document.getElementsByClassName("msc-confirm");
        "modal" !== a && s.length > 0 ? document.body.removeChild(s[0]) : s.length > 0 && s[0].parentElement.removeChild(s[0]);
        var u = n.A("div", "msc-confirm"),
            f = n.A("div", "msc-overlay");
        c.N && f.addEventListener("click", y);
        var d = n.A("div", "msc-content"),
            v = n.A("div", "msc-body"),
            w = n.A("div", "msc-action");
        if (c.R) var m = n.A("button", "msc-ok", c.R);
        if (c.I) var g = n.A("button", "msc-cancel", c.I);
        if (c.title && d.appendChild(n.A("h3", "msc-title", c.title)), c.D && v.appendChild(n.A("p", "msc-sub", c.D)), d.appendChild(v), g && (w.appendChild(g), g.addEventListener("click", F)), "modal" !== a) m && (w.appendChild(m), m.addEventListener("click", k)), d.appendChild(w);
        else if (d.classList.add("msc-modal"), c.W) {
            var b = n.A("button", "msc-close");
            b.innerHTML = "&times;", d.appendChild(b), b.addEventListener("click", y)
        }
        if (u.appendChild(f), u.appendChild(d), n(c.H).J().appendChild(u), n._ = !0, u.style.display = "block", d.classList.add("msc-confirm--animate"), "body" != c.H && u.classList.add("msc-notonbody"), c.j && u.classList.add(c.j), "prompt" === a) {
            var p = n.A("input", "msc-input");
            p.setAttribute("type", "text"), p.setAttribute("placeholder", c.placeholder), p.value = c.defaultValue, p.addEventListener("keyup", (function(t) {
                13 === t.keyCode && k()
            })), v.appendChild(p), p.focus()
        } else
            "alert" === a ? m && m.focus() : g && g.focus();
        function y() {
            if (u) {
                n._ = !1, b && b.removeEventListener("click", y), m && m.removeEventListener("click", k), g && g.removeEventListener("click", F), c.N && f.removeEventListener("click", y);try {
                    n(c.H).J().removeChild(u)
                } catch ( t ) {}
            }
        }
        function k() {
            y(), null !== c.B && ("prompt" === a ? c.B(p.value) : c.B())
        }
        function F() {
            y(), null !== c.P && c.P()
        }
        "modal" == a && (v.innerHTML = c.content), n(".msc-destroy").on("click", y), n.$ = y
    }, n.L = function() {
        n._ && n.$()
    }, n.alert = function(t, e, i, r) {
        n.G(t, e, i, r, "alert")
    }, n.confirm = function(t, e, i, r) {
        n.G(t, e, i, r, "confirm")
    }, n.prompt = function(t, e, i, r) {
        n.G(t, e, i, r, "prompt")
    }, n.q = function(t) {
        var e = n.A("div", "msc-toast");
        e.innerHTML = t, document.body.appendChild(e), setTimeout((function() {
            e.className += " msc-toast-fadeout", setTimeout((function() {
                document.body.removeChild(e)
            }), 3100)
        }), 1e3)
    }, n.X = function(t, e, i, r, o, a) {
        void 0 === a && (a = !0), n.G({
            type: "modal",
            title: t,
            N: i || !1,
            j: r,
            H: o = o || "body",
            W: a,
            content: e || ""
        })
    }, e.find = function(t) {
        if (this.length) return this.o = this.o[0].querySelectorAll(t), this
    }, e.J = function() {
        return this.o[0] || !1
    }, e.U = function(t) {
        return this.J().classList.contains(t)
    }, e.hide = function() {
        return this.l((function(t) {
            t.style.display = "none"
        }))
    }, e.html = function(t) {
        return void 0 === t ? this.o[0].innerHTML : (t = n.O(t), this.l((function(n) {
            n.innerHTML = t
        })))
    }, e.Y = function(t, e) {
        return e = {
                top: "afterbegin",
                bottom: "beforeend",
                before: "beforebegin",
                after: "afterend"
            }[e = e || "bottom"], t = n.O(t), this.l((function(n) {
                n.insertAdjacentHTML(e, t)
            }))
    }, e.K = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "admain",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "position:absolute!important;top:20px;left:20px;width:10px;height:10px;",
            e = !1,
            i = this.create({
                type: "div",
                id: t,
                class: t,
                style: n
            }).J().getBoundingClientRect();
        return 0 != i.height && 0 != i.width || (e = !0), e
    }, n.V = function() {
        return (/Android|iPad|iPhone|iPod|IEMobile|Opera Mini/.exec(navigator.userAgent) || (navigator.platform.includes("Mac") && navigator.maxTouchPoints > 1 ? ["iPad"] : null) || [!1])[0]
    }, n.Z = function() {
        return !!("ontouchstart" in window) || !!("tt" in window.navigator)
    }, e.nt = function(t) {
        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            e = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0;
        if (this.length) {
            var r = document.createElement("script");
            return r.type = "text/javascript", r.async = n, e && (r.onload = e), i && (r.onerror = i), r.src = t, this.J().appendChild(r)
        }
    }, n.localStorage = function() {
        var t = localStorage;
        this.et = !1;try {
            var n = "test";
            t.setItem(n, n), t.removeItem(n), this.et = !0
        } catch ( t ) {
            this.et = !1
        } this.set = function(n, e) {
            this.et && t.setItem(n, e)
        }, this.get = function(n) {
            if (this.et) return t.getItem(n)
        }, this.remove = function(n) {
            this.et && t.removeItem(n)
        }
    }, e.ot = function(t, n) {
        var e = this;
        t ? t.split(/\s+/g).forEach((function(t) {
            e.l((function(e) {
                e.removeEventListener(t, n)
            }))
        })) : this.l((function(t) {
            t.parentNode.replaceChild(t.cloneNode(!0), t)
        }))
    }, e.on = function(t, n) {
        var e = this,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                passive: !0
            };
        t.split(/\s+/g).forEach((function(t) {
            e.l((function(e) {
                e.addEventListener(t, n, i)
            }))
        }))
    }, n.T = function(t) {
        if (">" !== t[0]) return t;
        var n = t.split(/\$|=/)[0],
            e = {};
        return [["type", /^>[a-z0-9:_-]*/gi, t], ["id", /#[a-z0-9:_-]*/gi, n], ["class", /(\.[a-z0-9:_-]*)/gi, n], ["value", /\=.*/g, t], ["html", /\$.*/g, t]].forEach((function(t) {
                var n = t[2].match(t[1]);
                n && (e[t[0]] = n.map((function(t) {
                    return t.substring(1)
                })).join(" "))
            })), e
    }, Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(t) {
            for (var n = Object(t), e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                if (null != i) {
                    i = Object(i);
                    for (var r = Object.keys(Object(i)), o = 0, a = r.length; o < a; o++) {
                        var c = r[o],
                            l = Object.getOwnPropertyDescriptor(i, c);
                        void 0 !== l && l.enumerable && (n[c] = i[c])
                    }
                }
            }
            return n
        }
    }), String.prototype.includes || (String.prototype.includes = function(t, n) {
        return void 0 === n && (n = 0), -1 !== this.indexOf(t, n)
    }), n.ready = function(t) {
        var n = document;
        "complete" === n.readyState || "interactive" === document.readyState ? setTimeout(t, 1) : n.addEventListener("DOMContentLoaded", t)
    }, e.remove = function() {
        this.l((function(t) {
            t.parentNode.removeChild(t)
        }))
    }, e.it = function(t) {
        var n = t.split(" ");
        return this.l((function(e) {
            e.classList ? e.classList.remove.apply(e.classList, n) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
        }))
    }, n.rt = function() {
        var t = n.Z();
        n.at = t ? "touchstart" : "mousedown", n.ct = t ? "touchend" : "mouseup", n.st = t ? "touchmove" : "mousemove"
    }, e.show = function(t) {
        return this.l((function(n) {
            n.style.display = t || "initial"
        }))
    }, n.lt = function(t) {
        var n = 3,
            e = !1;
        return t.split("").map((function(t) {
            var i = t.charCodeAt();
            if (e || "~" != t) return i -= n, n = parseInt(t.charCodeAt().toString().slice(-1)), e && (i += 10), e = !1, String.fromCharCode(i);
            e = !0
        })).join("")
    }, e.ut = function(t) {
        var n = t.split(" ");
        return this.l((function(t) {
            t.classList.toggle.apply(t.classList, n)
        }))
    }, n.ft = "", n.dt = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return e && (e = ' style="' + e + '"'), '<svg role="img"' + e + '><use xlink:href="' + n.ft + "#" + t + '"/></svg>'
    }, e.ht = function(t) {
        return void 0 === t ? this.o.length ? this.o[0].value : null : this.l((function(n) {
            n.value = t
        }))
    }, window.h = n, window.top.location !== window.location && (window.top.location = window.location);
    var i = function() {
        var t = h(".shares");
        if (t.length) {
            var n = h(t).F("data-url") || document.URL,
                e = h(t).F("data-img"),
                i = "Word Search Puzzle - " + h(t).F("data-title");
            h(t).find("li").length || (h(t).create(">li.twitter$Tweet").click((function() {
                r("//twitter.com/intent/tweet?text=Play an online word search puzzle, " + n + "&hashtags=word,search,wordsearch,puzzle,game", 750, 540)
            })), h(t).create(">li.facebook$Post").click((function() {
                r("//www.facebook.com/sharer.php?u=" + n, 566, 378)
            })), h(t).create(">li.pinterest$Pin It").click((function() {
                var t = "Play word search puzzles on-line, including this one.\n\nMore at...\nhttps://thewordsearch.com";
                r("//www.pinterest.com/pin/create/button/?url=" + o(n) + "&media=" + o(e) + "&description=" + o(t), 784, 382)
            })), h(t).create(">li.tumblr$Tumblr").click((function() {
                var t = "<b><big><big>" + i + '</big></big><br><br>Play word search puzzles online @ <br><big><a href="https://thewordsearch.com">thewordsearch.com</a></b></big>';
                r("//www.tumblr.com/share/photo?source=" + o(e) + "&click_thru=" + o(n) + "&caption=" + o(t), 500, 520)
            })), h(t).create(">li.reddit$Reddit").click((function() {
                r("//www.reddit.com/submit?url=" + o(n), 740, 480)
            }))), window.set_share_img = function(t) {
                e = t
            }
        }
        function r(t, n, h) {
            window.open(t, "shareWin", "height=" + h + ",width=" + n + ",resizable=no,scrollbars=no,toolbar=no,status=no", !0)
        }
        function o(t) {
            return encodeURIComponent(t)
        }
    };
    if (h.ready(i), window.add_shares = i, h.ready((function() {
                h("section#category").length && h("section#category .rows li").l((function(t) {
                    var n = h(t).find("a").F("href");
                    h(t).click((function() {
                        return location.href = n, !1
                    }))
                }))
            })), h.ready((function() {
                h("section#downloadable").length && h("section#downloadable .col2 img").l((function(t) {
                    var n = h(t).F("src").match(/([a-z]+)\.png$/)[1];
                    h(t).click((function() {
                        return function(t) {
                                var n = "puzzle";
                                "white" !== t && (n += "_" + t);
                                var e = h("section#downloadable").F("data-id"),
                                    i = "//" + window.location.hostname + "/static/" + n + "/word-search-" + e + ".png";
                                h(".download-image").F("src", i), h(".download-image-btn").F("href", i), window.set_share_img(i)
                            }(n), !1
                    }))
                }))
            })), h("#gcse-search").length) {
        h("#gcse-search").html('<div class="gcse-search"></div>');h("head").nt("https://cse.google.com/cse.js?cx=partner-pub-1107925068996705:4464867361", !0)
    }
    h.ready((function() {
        h(".menu").click((function() {
            h("nav").ut("open").C("show", .25, "blind", "linear", "top left")
        }))
    })), h.ready((function() {
        var t = document.createEvent("Event");
        t.initEvent("themechange", !0, !0);
        var n = new h.localStorage,
            e = "dark",
            i = "light",
            r = h("body");
        h("nav").create({
            type: "div",
            class: "switch_theme",
            html: '<svg role="img"><use xlink:href="/v4/img/icons.svg#switch"/></svg> Switch Theme',
            onclick: function() {
                var o = n.get("theme");
                (o = o == e ? i : e) == e ? (r.it(i), r.u(e)) : r.it(e), n.set("theme", o), document.dispatchEvent(t)
            }
        })
    }));
    var r,
        o,
        a,
        c = function() {
            var t = {
                    fullscreenEnabled: 0,
                    fullscreenElement: 1,
                    requestFullscreen: 2,
                    exitFullscreen: 3
                },
                n = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen"],
                e = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen"],
                i = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen"],
                r = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
                o = "fullscreenEnabled" in r && Object.keys(t) || n[0] in r && n || e[0] in r && e || i[0] in r && i || [];
            return {
                requestFullscreen: function(n) {
                    return n[o[t.requestFullscreen]]()
                },
                get exitFullscreen() {
                    return r[o[t.exitFullscreen]].bind(r)
                },
                get fullscreenEnabled() {
                    return Boolean(r[o[t.fullscreenEnabled]])
                },
                get Eo() {
                    return !!r[o[t.fullscreenElement]]
                }
            }
        }(),
        l = {},
        s = {},
        u = {};
    l._o = function(t) {
        r = t;
        var n = document.location.hostname;
        n && n != atob("dGhld29yZHNlYXJjaC5jb20=") || (t = JSON.parse(t), s = new d, window.settings = s, window.settings.setSetting = s.setSetting, window.settings.getSetting = s.getSetting, u = new p, (o = {}).title = t.title, o.words = t.words, o.To = t.id, o.Vt = 14, o.Zt = 12, o.format = s.getSetting("format"), o.allowDiagonalWords = s.getSetting("allowDiagonalWords"), o.allowReverseWords = s.getSetting("allowReverseWords"), o.kidMode = s.getSetting("kidMode"), o.dragSelect = s.getSetting("dragSelect"), l.ao(o, f))
    };
    var f = function() {
        a.it("puzzle-loader"), h.ft = "/v4/img/icons.svg";
        var t = h.dt("hex");
        "hex" == o.format && (t = h.dt("sq"));
        var n = '<div id="gOver"><div class="goBox">';
        "iPhone" != A && "iPad" != A || (n += '<button id="goNote" class="goNote"><p>Instructions</p>for ' + A + " users</button>", h("#opt-btns").Y('<button class="smBtn goNote">' + h.dt("info") + "Note for " + A + " Users</button>")), n += '<p style="font-size:28px;font-variant:small-caps;">ready to play</p>', n += '<button id="gBegin" class="goBtn">' + h.dt("finger") + "begin</button>", n += '<button class="goBtn3 shape-btn" onclick="toggleShape()">' + t + "Change grid shape</button>", n += '<button class="goBtn3 set-btn" onclick="show_settings()">' + h.dt("cog") + "Settings / Difficulty</button>", n += "</div></div>", a.Y(n), h("#gBegin").click((function() {
            h("#gOver").hide(), l.uo(), q && l.wo()
        })), h(".goNote").click((function() {
            "iPhone" == A ? h.alert("iPhone Users", "<p>If you're using Safari on an iPhone, before pressing the 'begin' button, scroll down the page a little. This will force the bottom toolbar to be hidden, allowing more space for the puzzle to display.</p><p>Alternatively, if you add our site to your home screen, it will open without any toolbars, giving the puzzles maximum space. Click the ".concat(h.dt("safari-menu"), " icon in the toolbar, and choose \"Add to Home Screen\". If you do this, be sure to turn off the 'Touch Deadzone' game setting.</p>")) : "iPad" == A && h.alert("iPad Users", "<p>It is recommended on iPad to add our site to your home screen. This will allow the game to open without any toolbars, giving the puzzles maximum space. Click the ".concat(h.dt("safari-menu"), ' icon in the toolbar, and choose "Add to Home Screen".</p>'))
        }))
    };
    h.ready((function() {
        (a = h("#gameGrid")).length && l._o(h.lt(h("#game-data").html()))
    }));
    function d() {
        var t = this;
        t.vt, t.settings, t.init = function() {
            try {
                t.vt = "localStorage" in window && null !== window.localStorage
            } catch ( n ) {
                t.vt = !1
            } t.wt()
        }, t.wt = function() {
            t.vt && (t.settings = t.gt(), localStorage.settings && Object.assign(t.settings, JSON.parse(localStorage.settings)))
        }, t.setSetting = function(n) {
            t.vt && ("true" == n.ht ? n.ht = !0 : "false" == n.ht && (n.ht = !1), t.settings[n.id] = n.ht, localStorage.settings = JSON.stringify(t.settings))
        }, t.getSetting = function(n) {
            return t.vt ? t.settings[n] : {}
        }, t.bt = function(n) {
            t.vt && (t.settings[n] ? t.settings[n] = !1 : t.settings[n] = !0, localStorage.settings = JSON.stringify(t.settings))
        }, t.gt = function() {
            return {
                audio: !0,
                showGrid: !0,
                dragSelect: !0,
                allowHints: !0,
                kidMode: !1,
                allowReverseWords: !0,
                allowDiagonalWords: !0,
                gridFont: "rubik",
                gridFontSize: 0,
                fontBold: !0,
                gridTheme: "light",
                useLowercase: !1,
                format: "rect",
                numplayed: 0,
                btmDeadzone: 0
            }
        }, t.init()
    }
    window.toggleShape = function() {
        "hex" == s.getSetting("format") ? s.setSetting({
            id: "format",
            ht: "rect"
        }) : s.setSetting({
            id: "format",
            ht: "hex"
        }), reInitGame()
    }, window.reInitGame = function() {
        a.html(""), a.u("puzzle-loader"), setTimeout((function() {
            l._o(r)
        }), 100)
    };
    var v = function() {
        h.X("Game Settings", function() {
            var t = '<div style="text-align:center"><button onclick="reInitGame()" class="msc-destroy" style="background:#607D8B;color:#fff;width:70%;font-weight:400;font-size:14px;border-radius:50px;">Save & Restart</button></div>',
                n = t;
            return n += '<p style="font-size:.8em;text-align:center">Changed will only take effect next time you begin a new game</p>', n += g("audio", "Sounds", 0), n += g("gridFont", "Game Font", [["Rubik"], ["Montserrat"], ["PatrickHand"], ["FredokaOne"], ["RussoOne"], ["VarelaRound"], ["OpenDyslexic"]]), n += g("gridFontSize", "Game Font Size", [["Small", "-4"], ["Normal", "0"], ["Big", "+4"], ["Bigger", "+8"], ["Biggest", "+12"]], "Applies to the letter grid"), n += g("fontBold", "Use Bold Font", 0), n += g("useLowercase", "Use Lowercase Letters", 0), n += g("showGrid", "Display Grid Lines", 0, "Does not apply to hex grids"), n += g("dragSelect", "Word Selection Method", [["Tap", "false"], ["Drag", "true"]], "Drag : Selects words in grid by dragging across the hidden word<br />Tap : Selects words by taping the first and last letters in the grid"), n += g("kidMode", "Kids Mode", 0, "Extra letters will not be added to the game grid making it easier to find the words"), n += g("allowReverseWords", "Allow Reverse Words", 0, "When ON, words can appear in grid in reverse, either Right->Left  or Bottom->Top"), n += g("allowDiagonalWords", "Allow Diagonal Words", 0, "When ON, words can appear diagonally in the grid. If reverse setting above is also on, then words may appear diagonally reversed"), n += g("allowHints", "Allow Hints", 0, "When ON, taping on a word will highlight it's first letter in the grid"), q && (n += g("btmDeadzone", "Touch Deadzone", [["Auto", "0"], ["None", "-1"], ["Small", "36"], ["Big", "72"]], "When ON, the puzzle will leave a gap at the bottom of your screen. Useful if your device has a bottom toolbar which blocks the puzzle.")), n + "<br><br>" + t
        }(), !0, "settings-wrap", "#gameGrid"), b()
    };
    window.show_settings = v;
    var w,
        m = [],
        g = function(t, n, e, i) {
            e = e || [["Off", "false"], ["On", "true"]];
            for (var r = '<label for="' + t + 'Flip" style="font-weight:bold">' + n + '</label><select name="' + t + '" id="' + t + 'Flip" onchange="changeSetting(\'' + t + "', this)\">", o = 0; o < e.length; o++) {
                var a = e[o][0];
                r += '<option value="' + (e[o][1] || e[o][0]).toLowerCase() + '">' + a + "</option>"
            }
            return r += "</select>", i = i ? '<p class="tt">' + i + "</p>" : "", m.push(t), '<div class="row">' + r + i + "</div>"
        },
        b = function() {
            m.forEach((function(t) {
                h("#" + t + "Flip").ht(s.getSetting(t).toString())
            }))
        };
    function p() {
        var t = this;
        t.zo = ".mp3", t.path = "/v4/sounds/", t.init = function() {
            (t.AudioContext = window.AudioContext || window.webkitAudioContext, t.AudioContext) && ((new Audio).canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (t.zo = ".ogg"))
        }, t.Ao = function(n, e) {
            t[n] && e(t[n]), t.context || (t.context = new t.AudioContext);
            var i = new XMLHttpRequest;
            i.open("GET", t.path + n + t.zo, !0), i.responseType = "arraybuffer", i.onload = function() {
                t.context.decodeAudioData(i.response, (function(i) {
                    t[n] = i, e(i)
                }))
            }, i.send()
        }, t.play = function(n) {
            s.getSetting("audio") && t.AudioContext && t.Ao(n, (function(n) {
                var e = t.context.createBufferSource();
                e.buffer = n, e.connect(t.context.destination), e.start(0)
            }))
        }, t.init()
    }
    window.changeSetting = function(t, n) {
        s.setSetting({
            id: t,
            ht: h(n).ht()
        }), l.Dt()
    }, h.ready((function() {
        var t = h(".settings-btn");
        t.length && t.on("click", v)
    }));
    var y = {
            light: {
                kt: "#fefffb",
                yt: "#CCC",
                xt: "#333",
                Ct: "transparent",
                Ot: "#FFF",
                Ft: "#222",
                St: "#888",
                Tt: "#8D8D8D",
                Mt: "#3399FF",
                zt: ["#E451FF", "#00E874", "#FF7E53", "#768DED", "#6BEE64", "#FF8811", "#5FAFAF", "#63E91B", "#7B1CF0", "#FF0939", "#EF93FF", "#59FFAC", "#FFA384", "#A9B8F3", "#A9F5A5", "#FFB56A", "#94C9C9", "#98F068", "#B078F5", "#FF6685"]
            },
            dark: {
                kt: "#333",
                yt: "#000",
                xt: "#FFF",
                Ft: "#333",
                Tt: "#ff3939",
                Mt: "#FFF",
                At: "#ccc"
            },
            blue: {
                kt: "#263d6f",
                yt: "#CCC",
                xt: "#FFF",
                Ft: "#263d6f",
                Tt: "#ff3939",
                Mt: "#63E91B",
                zt: ["#a3c6ff"],
                At: "#8ca342"
            },
            red: {
                kt: "#661613",
                yt: "#ff615b",
                xt: "#FFF",
                Ft: "#333",
                Tt: "#ff3939",
                Mt: "#fff23f",
                zt: ["#cffcc7"],
                At: "#fc5d95",
                _t: ["#fc9e83"]
            }
        },
        k = {
            light: {
                Ot: "#555",
                Ft: "#faffe4"
            },
            dark: {
                Ot: "#222",
                Ft: "#faffe4"
            },
            blue: {
                Ot: "#222",
                Ft: "#faffe4"
            },
            red: {
                Ot: "#222",
                Ft: "#FFF"
            }
        };
    l.Gt = function() {
        var t = s.getSetting("gridTheme");
        for (var n in w = JSON.parse(JSON.stringify(y.light)), y[t]) w[n] = y[t][n];
        if (h("body").U("dark"))
            for (var n in k[t]) w[n] = k[t][n];
        "hex" == N.format && (w.At && (w.Mt = w.At), w._t && (w.zt = w._t))
    }, h.ready((function() {
        h(document).on("themechange", (function() {
            s.getSetting && (l.Gt(), l.Dt())
        }))
    }));
    var F = function() {
        h.L(), h.X("Found a Misspelling?", function() {
            var t = "";
            t += '<div style="font-size:.8em;text-align:center">Please click on the misspelt word to correct it.</div>', t += "<ul>";
            for (var n = N.words, e = 0; e < n.length; e++) t += "<li>" + n[e].Qt.toUpperCase() + "</li>";
            return t + "</ul>"
        }(), !0, "misspelling-wrap", "#gameGrid"), h(".misspelling-wrap li").click((function() {
            var t = h(this).html();
            h.L(), h.X("Correct a Misspelling", function(t) {
                var n = "<p>Thank you for making thewordsearch.com better</p>";
                return n += '<label>Current spelling</label><span class="miss_orig">' + t + "</span>", n += '<label>Corrected spelling</label><input class="miss_new" type="text">', n + '<button class="sub-btn" onclick="misspell_submit()">Submit Your Correction</button><div class="err"></div>'
            }(t), !0, "misspelling-wrap", "#gameGrid")
        }))
    };
    window.misspell_pop = F;
    var S = function(t) {
            var n = h(".misspelling-wrap .sub-btn").J();
            if (t) return x = !0, void h(n).html("...submitting");
            x = !1, h(n).html("Submit")
        },
        x = !1;
    window.misspell_submit = function() {
        if (!x) {
            x = !0, S(!0);
            var t,
                n = {
                    puzzle_id: N.To,
                    original_word: h(".miss_orig").html(),
                    new_word: h(".miss_new").ht()
                },
                e = (t = n.new_word).length < 3 ? "Word is too short" : /^[A-Za-z '-.]*$/.test(t) ? void 0 : "Only letters a-z plus '-, are allowed";
            if (e) return h(".misspelling-wrap .err").html("Error : " + e), void S(!1);
            h.v({
                url: "/api/pri/testapikey/word_correction/",
                method: "POST",
                p: n,
                g: z,
                m: function() {
                    h(".misspelling-wrap .err").html("There was a problem connecting to the server"), S(!1)
                }
            })
        }
    };
    var z = function(t) {
        x = !1;
        var n = "<p>Thank you, your correction will be reviewed</p>";
        n += '<button class="sub-btn" onclick="misspell_close()">Close</button>', n += '<button class="sub-btn" style="background:none;border:1px solid #333" onclick="' + F.name + '()">Another Correction</button>', h(".misspelling-wrap .msc-body").html(n)
    };
    window.misspell_close = h.L;
    var C = function() {
        h.X("Game Themes", '<div style="font-size:.8em;text-align:center">Click on a theme to try it out</div><img src="/v4/img/theme-light.png" class="msc-destroy" onclick="changeTheme(\'light\')"><img src="/v4/img/theme-dark.png" class="msc-destroy" onclick="changeTheme(\'dark\')"><img src="/v4/img/theme-blue.png" class="msc-destroy" onclick="changeTheme(\'blue\')"><img src="/v4/img/theme-red.png" class="msc-destroy" onclick="changeTheme(\'red\')">', !0, "themes-wrap", "#gameGrid")
    };
    window.changeTheme = function(t) {
        s.setSetting({
            id: "gridTheme",
            ht: t
        }), l.Gt(), l.Dt()
    }, h.ready((function() {
        h(".theme-btn").length && h(".theme-btn").on("click", C)
    }));
    var O,
        T,
        M,
        B,
        E,
        G,
        P,
        A,
        D,
        I,
        N = {},
        j = {},
        R = {
            w: 680,
            h: 780
        },
        W = {},
        _ = "Calibri, Trebuchet MS, Arial, sans-serif",
        L = "30",
        H = 0,
        J = !0,
        U = 1,
        $ = !1,
        q = !1,
        X = 0;
    l.ao = function(t, n) {
        (N = JSON.parse(JSON.stringify(t))).Vt = parseInt(N.Vt), N.Zt = parseInt(N.Zt), L = 14 - Math.min(N.Vt, N.Zt) + 26, isNaN(L) && (L = 26), l.Gt(), (A = h.V()) && (q = !0), q && ($ = !0, J = !1, R = {
            w: 540,
            h: 960
        }, H = parseInt(s.getSetting("btmDeadzone")), "iPhone" == A && 0 == H ? H = 72 : -1 == H && (H = 0), l.co()), l.so(), l.lo(), "hex" == N.format ? l.Pe() : l.Et(), s.getSetting("allowHints") && l.eo(), l.uo(), n && n()
    }, l.uo = function() {
        P = N.Pt ? l.fo() - N.do : l.fo()
    }, l.Dt = function() {
        l.Bo(), l.Po()
    }, l.Po = function() {
        "hex" == N.format ? l.We() : l.Nt()
    }, l.Bo = function() {
        var t = s.getSetting("gridFont"),
            n = s.getSetting("fontBold") ? "bold" : "";
        I != t && ["montserrat", "russoone", "varelaround", "opendyslexic"].indexOf(t) && ((D = D || h("body").create(">span#fontPreLoader").html("&nbsp;")).M("font-family", t), setTimeout(l.Po, 500));
        var e = L + parseInt(s.getSetting("gridFontSize"));
        I = t, E = "".concat(n, " ").concat(e, "px ").concat(t, ", ").concat(_), G = "".concat(n, " 16px ").concat(t, ", ").concat(_)
    }, String.prototype.reverse = function() {
        return this.split("").reverse().join("")
    }, l.ho = function() {
        window.innerHeight < 700 && (U = .91), j.x = U, j.y = U;
        var t = R.h,
            n = R.w;
        return q && (U = 1, t = window.outerWidth - 0, n = window.outerHeight - 0, j.x = t / R.w, j.y = n / R.h), {
                w: t,
                h: n
        }
    }, l.lo = function() {
        var t,
            n = l.ho(),
            e = h("#gameGrid");
        (h("#fs-style").length || h("body").create(">style#fs-style"), O = l.vo("wsGrid", n.w, n.h, 1, "gameGrid"), T = O.getContext("2d"), $ || (n.w -= W.yn), M = l.vo("wsGridOverlay", n.w, n.h, 1, "gameGrid"), B = M.getContext("2d"), q) ? (e.create(">button.sml-back-btn").click((function() {
            l.wo()
        })), h(O).M({
            width: "100%",
            height: "auto"
        }), h(M).M({
            width: "100%",
            height: "auto"
        }), window.onresize = function() {
            t && clearTimeout(t), t = setTimeout(l.po, 100)
        }, T.scale(j.x * U, j.y * U), B.scale(j.x * U, j.y * U), l.po()) : 1 != U && e.M("transform-origin", "top left").M("transform", "scale(" + U + ")").M("margin-bottom", 684 * U - 684 + "px")
    }, l.bo = !1, l.co = function() {
        if (X = window.innerWidth > window.innerHeight ? 90 : 0, l.bo && (l.bo = !1, h.L()), X && Y) {
            h.X("PAUSED", '<br><p style="font-size:1.2em">please rotate your device to portrait mode</p>', !1, "dialog-go-fullscreen", "#gameGrid", !1), l.bo = !0
        }
        return X
    }, l.mo = !1, l.ko = function() {
        if (!l.mo) {
            window.gofs = function() {
                h.L(), l.wo()
            }, window.igfs = function(t) {
                l.mo = !0, h.L()
            };'<button onclick="igfs()">play without fullscreen</button>', h.X("PAUSED", '<button onclick="gofs()" style="color:green;font-size:1.8em;">return to fullscreen</button><button onclick="igfs()">play without fullscreen</button>', !1, "dialog-go-fullscreen", "#gameGrid", !1)
        }
    }, l.po = function() {
        var t = {};
        t.w = window.innerWidth - 0, t.h = window.innerHeight - 0 - H, c.Eo ? t.h = window.screen.availHeight - 0 - H : Y && l.wo(!0), l.co(), nt = {}, h("#fs-style").html("#puzzle.is-full-screen canvas{width:" + t.w + "px !important;height:" + t.h + "px !important}")
    };
    var Y = !1;
    function K() {
        c.Eo && c.exitFullscreen()
    }
    l.wo = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = h("#puzzle"),
            e = "is-full-screen";
        if (t) return Y = !1, n.it(e), void K();
        Y = !Y, n.ut(e), Y ? function() {
            if (!c.fullscreenEnabled) return;
            c.Eo || c.requestFullscreen(document.body)
        }() : (l.ko(), K())
    }, l.vo = function(t, n, e, i, r) {
        var o;
        return h("#" + t).length > 0 ? ((o = document.getElementById(t)).width = n * i, o.height = e * i, o.setAttribute("style", "height:" + e + "px; width:" + n + "px;"), o) : ((o = document.createElement("canvas")).setAttribute("width", n * i), o.setAttribute("height", e * i), o.setAttribute("id", t), o.setAttribute("style", "height:" + e * i + "px; width:" + n * i + "px;"), o.addEventListener("touchstart touchmove", (function(t) {
            t.preventDefault()
        }), {
            passive: !0
        }), document.getElementById(r).appendChild(o), o)
    }, l.Wt = function(t) {
        window.requestAnimationFrame((function() {
            t.canvas.width = t.canvas.width, q && t.scale(j.x, j.y)
        }))
    }, l.yo = function(t) {
        t.clearRect(0, 0, t.canvas.width / j.x, t.canvas.height / j.y), t.canvas.style.display = "none", t.canvas.offsetHeight, t.canvas.style.display = "inherit"
    }, l.fo = function() {
        return (new Date).getTime() / 1e3
    }, l.so = function() {
        W.cols = N.Zt, W.fn = N.Vt * N.Zt, J ? l.xo() : (W.He = .86 * R.h, W.je = R.w, W.yn = .14 * R.h, W.mn = W.je / N.Zt, W.gn = W.He / N.Vt)
    }, l.xo = function() {
        W.He = R.w, W.je = .8 * R.h, W.yn = .2 * R.h, W.mn = W.je / N.Zt, W.gn = W.He / N.Vt, W.mn = Math.floor(W.mn), W.gn = Math.floor(W.gn)
    }, l.Rt = function() {
        for (var t = 0; t < N.words.length; t++) {
            var n = N.words[t].toUpperCase();
            N.words[t] = {
                Co: n,
                hn: !1,
                nn: 0,
                en: 0
            }, N.words[t].Qt = n.replace(/[ '-.]/gi, "")
        }
        N.$t = []
    }, l.Ut = function(t, n) {
        return Math.floor(Math.random() * (n - t + 1) + t)
    };
    var V,
        Z,
        Q,
        tt,
        nt = {},
        et = {},
        it = {};
    l.zn = function(t) {
        null == nt.top && (nt = M.getBoundingClientRect(), it.x = nt.width / R.w, it.y = nt.height / R.h);
        var n = {};
        if (t.touches)
            if (t.touches[0]) {
                var e = q ? it : j;
                n.x = (t.touches[0].clientX - nt.left - 0) / e.x, n.y = (t.touches[0].clientY - nt.top - 0) / e.y, et = n
            } else
                n = et;
        else n.x = (t.clientX - nt.left - 0) / j.x, n.y = (t.clientY - nt.top - 0) / j.y;
        return $ && (n.y < W.yn || n.x > W.je) && (n.An = !0), n
    }, l.jn = function(t) {
        for (var n = N.words, e = 0; e < n.length; e++)
            if (t == n[e].Qt) return n[e].hn ? -1 : e;
        t = t.reverse();
        for (e = 0; e < n.length; e++)
            if (t == n[e].Qt) return n[e].hn ? -1 : e;
        return -1
    }, l.Ln = function(t) {
        var n = t % w.zt.length;
        return w.zt[n]
    }, l.jt = function() {
        window.requestAnimationFrame((function() {
            l.Oo()
        }))
    }, l.Oo = function() {
        T.globalAlpha = 1, T.textAlign = "left", T.font = G;
        if ($) {
            T.beginPath(), T.rect(0, 0, R.w, W.yn), T.fillStyle = w.Ot, T.fill(), T.lineWidth = 1, T.strokeStyle = "#6A6D5C", T.stroke();
            var t = 14,
                n = 18,
                e = 29,
                i = 14
        } else {
            t = W.je + 10, n = 0;T.beginPath(), T.rect(W.je + 4, 1, W.yn - 5, R.w - 2), T.fillStyle = w.Ct, T.fill(), t += 10;
            e = 27
        }
        V = [];
        for (var r = T.measureText("•").width, o = [], a = 0; a < N.words.length; a++)
            if (!N.words[a].hn) {
                var c = o.push(N.words[a]);
                o[c - 1].Fo = a
        }
        for (a = 0; a < N.words.length; a++) N.words[a].hn && o.push(N.words[a]);
        var u = 1;
        for (a = 0; a < o.length; a++) {
            var f = T.measureText(o[a].Co).width;
            if ($) {
                var d = 20;
                if (i + f + d > W.je) {
                    if (++u > 5) break;
                    t = 14, n += e, i = 14
                } else
                    t = i;
                i = i + f + d
            } else
                n += e;
            14 != t && $ && (T.fillStyle = w.Tt, T.fillText("•", t - (d + r) / 2, n)), T.textBaseline = "middle", o[a].hn ? T.fillStyle = w.St : T.fillStyle = w.Ft;var v = o[a].Co;
            if (s.getSetting("useLowercase") && (v = v.toLowerCase()), T.fillText(v, t, n), o[a].hn && (T.globalAlpha = .8, T.strokeStyle = l.Ln(a), T.beginPath(), T.lineWidth = 2, T.lineCap = "round", T.moveTo(t, n), T.lineTo(t + f, n), T.stroke(), T.globalAlpha = 1), 0 == o[a].hn) {
                var m = new Object;
                m.x = t, m.y = n - e / 2, m.x2 = m.x + f, m.y2 = m.y + e, m.io = o[a].Fo, V[V.length] = m
            }
        }
    }, l.Jn = function() {
        for (var t = 0; t < N.words.length; t++)
            if (0 == N.words[t].hn) return !1;
        return !0
    }, l.$n = function() {
        var t,
            n = {};
        n.So = parseInt(l.fo() - P, 10), t = N.To, h.v({
            url: "/api/pri/testapikey/log_played/?id=" + t,
            method: "GET"
        });
        var e = s.getSetting("numplayed") + 1;
        s.setSetting({
            id: "numplayed",
            ht: e
        }), setTimeout((function() {
            u.play("finished"), l.Mo(n), q && (l.mo = !0, l.wo(!0))
        }), 700)
    }, l.Mo = function(t) {
        var n = '<div id="gOver2"><div class="goBox">';
        n += '<p style="font-size:54px;margin:30px 0 12px 0;">Well done!</p>', n += '<p style="font-size:22px;margin-bottom:66px;">You completed the puzzle in ' + t.So + " seconds</p>", n += '<button class="goBtn2" onclick="window.location=\'/\'">Find another puzzle</button>', n += '<br/><button class="goBtn2" onclick="window.location=\'.\'">Play again</button>', n += '<button class="misspelling-btn" onclick="misspell_pop()">Correct a misspelling</button>', n += "</div>", h("#gameGrid").Y(n)
    }, l.Et = function() {
        l.Bt(), N.Pt || (l.Rt(), l.It()), l.Dt()
    }, l.Nt = function() {
        l.Wt(T), l.jt(), l.Ht()
    }, l.Jt = function() {
        for (var t = [], n = N.$t.length, e = 0; e < n; e++) Q.forEach((function(n) {
                var i = {};
                i.Lt = e, i.orientation = n, t.push(i)
            }), this);
        return t
    }, l.qt = function(t, n, e) {
        Q.forEach((function(i) {
            for (var r = 0; r < t.length - 1; r++) t[r].Lt == n && t[r].orientation == e && t.splice(r, 1)
        }), this)
    }, l.Xt = function(t) {
        return l.Ut(0, t.length - 1)
    }, l.It = function() {
        var t = N.words;
        l.Yt(), l.Kt(), Z = Math.max(N.Vt, N.Zt);
        for (var n = l.Jt(), e = 0; e < t.length; e++) {
            for (var i = -1, r = 10001, o = JSON.parse(JSON.stringify(n)); i < 0 && !(t[e].Qt.length > Z) && (r--, i = l.tn(t[e].Qt, o), !(r < 2));) ;
            i instanceof Array ? (t[e].nn = i[0], t[e].en = i[1]) : (N.words.splice(e, 1), e--)
        }
        l.rn()
    }, l.Yt = function() {
        for (var t = N.Vt * N.Zt, n = 0; n < t; n++) N.$t[n] = ""
    }, l.tn = function(t, n) {
        if (!t) return -1;
        if (t.length > Z) return -1;
        var e = l.Xt(n),
            i = n[e].Lt,
            r = n[e].orientation,
            o = l.an(t, i, r);
        return o instanceof Array ? o : (l.qt(n, i, r), -1)
    }, l.an = function(t, n, e, i) {
        i || (i = !1);
        var r = N.$t,
            o = e,
            a = t,
            c = n,
            s = !1;
        switch (e) {
        case "bt":
            o = "tb", s = !0;
            break;case "rl":
            o = "lr", s = !0;
            break;case "brtl":
            o = "tlbr", s = !0;
            break;case "bltr":
            o = "trbl", s = !0
        }
        s && (a = a.reverse());
        var u,
            f = r.length - 1;
        switch (o) {
        case "tb":
            for (var d = 0; d < a.length; d++) {
                if (i) l.cn(c, a[d]);
                else {
                    if (c > f) return -1;
                    if (r[c].length > 0 && r[c] != a[d]) return -2
                }
                u = c, c += N.Zt
            }
            break;case "lr":
            var v = l.sn(c);
            for (d = 0; d < a.length; d++) {
                if (i) l.cn(c, a[d]);
                else {
                    if (c > f) return -1;
                    if (v != l.sn(c)) return -1;
                    if (r[c].length > 0 && r[c] != a[d]) return -2
                }
                u = c, c += 1
            }
            break;case "tlbr":
        case "trbl":
            for (v = l.sn(c), d = 0; d < a.length; d++) {
                if (i) l.cn(c, a[d]);
                else {
                    if (c > f) return -1;
                    if (l.sn(c) != v + d) return -1;
                    if (r[c].length > 0 && r[c] != a[d]) return -2
                }
                u = c, c = "tlbr" == o ? c + 1 + N.Zt : c - 1 + N.Zt
            }
        }
        if (i) {
            var w = n,
                m = u;
            return s && (w = u, m = n), [w, m]
        }
        return l.an(t, n, e, !0)
    }, l.cn = function(t, n) {
        N.$t[t] = n
    }, l.ln = function() {
        return l.Ut(0, N.$t.length - 1)
    }, l.Kt = function() {
        var t = ["tb", "tb", "tb", "tb", "lr", "lr", "lr", "lr"];
        N.allowDiagonalWords && (t = t.concat(["tlbr", "tlbr", "tlbr", "bltr", "bltr"])), N.allowReverseWords && (t = t.concat(["bt", "bt", "rl", "rl"])), N.allowDiagonalWords && N.allowReverseWords && (t = t.concat(["trbl", "trbl", "brtl", "brtl"])), Q = t
    }, l.un = function() {
        var t = l.Ut(0, Q.length - 1);
        return Q[t]
    }, l.sn = function(t) {
        return Math.ceil((t + 1) / N.Zt)
    }, l.rn = function() {
        for (var t = "", n = 0; n < N.words.length; n++) t += N.words[n].Qt;
        for (n = 0; n < W.fn; n++) N.kidMode && "" == N.$t[n] ? N.$t[n] = " " : "" == N.$t[n] && (N.$t[n] = t.charAt(Math.floor(Math.random() * t.length)))
    }, l.Ht = function() {
        for (var t = 0; t < W.fn; t++) l.dn(t, T);
        for (t = 0; t < N.words.length; t++) 1 == N.words[t].hn && l.vn(t, N.words[t].nn, N.words[t].en);
        for (t = 0; t < W.fn; t++) l.wn(t, T)
    }, l.pn = function(t) {
        return Math.floor(t / N.Zt + 1) * W.gn - W.gn
    }, l.bn = function(t) {
        return Math.floor(t % N.Zt + 1) * W.mn - W.mn
    }, l.dn = function(t, n, e) {
        window.requestAnimationFrame((function() {
            l.kn(t, n, e)
        }))
    }, l.kn = function(t, n, e) {
        var i = l.pn(t),
            r = l.bn(t);
        $ && (i += W.yn), n.globalAlpha = 1, e ? (n.strokeStyle = "#FF9933", n.fillStyle = "#FFCD9B", n.lineWidth = 3, n.fillRect(r, i, W.mn, W.gn), n.strokeRect(r + 2, i + 2, W.mn - 4, W.gn - 4)) : (n.fillStyle = w.kt, n.fillRect(r, i, W.mn, W.gn), s.getSetting("showGrid") && (n.strokeStyle = w.yt, n.lineWidth = 1, n.strokeRect(r + 0, i + 0, W.mn - 0, W.gn - 0)))
    }, l.wn = function(t, n) {
        window.requestAnimationFrame((function() {
            l.xn(t, n)
        }))
    }, l.xn = function(t, n) {
        var e = l.pn(t),
            i = l.bn(t);
        $ && (e += W.yn), n.globalAlpha = 1, n.font = E, n.textBaseline = "middle", n.fillStyle = w.xt;
        var r = N.$t[t];
        s.getSetting("useLowercase") && (r = r.toLowerCase());
        var o = n.measureText(r).width,
            a = Math.floor((W.mn - o) / 2);
        n.fillText(r, i + a, e + W.gn / 2 + 1)
    }, l.Cn = function(t, n, e, i) {
        window.requestAnimationFrame((function() {
            l.On(t, n, e, i)
        }))
    }, l.On = function(t, n, e, i) {
        t.globalAlpha = .5, t.beginPath(), t.strokeStyle = n, tt || (tt = .8 * Math.min(W.mn, W.gn)), t.lineWidth = tt, t.lineCap = "round", t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
    };
    var rt = null,
        ot = null,
        at = {},
        ct = !1;
    l.Bt = function() {
        h.rt(), h("#wsGridOverlay").on(h.at, l.Fn), N.dragSelect && (h("#wsGridOverlay").on(h.ct, l.Sn), h("#wsGridOverlay").on(h.st, l.Tn))
    }, l.Fn = function(t) {
        nt = {};
        var n = l.zn(t);
        if (!n.An)
            if (N.dragSelect) {
                rt = l._n(n.x, n.y);
                var e = l.Gn(rt);
                at.x = e.x - W.mn / 2, at.y = e.y - W.gn / 2, ct = !0
            } else if (rt) {
                var i = l._n(n.x, n.y);
                l.Dn(i), l.En(rt, i) ? u.play("correct") : u.play("wrong"), setTimeout(l.Bn, 300), rt = null
            } else rt = l._n(n.x, n.y), l.Dn(rt)
    };
    var lt = 0;
    l.Tn = function(t) {
        if (ct) {
            var n = Date.now();
            if (!(lt + 50 > n)) {
                lt = n;
                var e = l.zn(t);
                if (!e.An) {
                    l.Wt(B), l.Cn(B, "#3399FF", at, e);
                    var i = l._n(e.x, e.y);
                    if (i != ot) ot = i, l.En(rt, i) && (ct = !1, l.Wt(B), u.play("correct"), st = !0)
                }
            }
        }
    };
    var st = !1;
    l.Sn = function(t) {
        if (st)
            st = !1;
        else {
            var n = l.zn(t);
            if (!n.An) {
                var e = l._n(n.x, n.y);
                ct = !1, l.Wt(B), l.En(rt, e) ? u.play("correct") : u.play("wrong")
            }
        }
    }, l._n = function(t, n) {
        $ && (n -= W.yn);
        var e = Math.ceil(t / W.mn),
            i = Math.ceil(n / W.gn);
        return l.Pn(i, e)
    }, l.Rn = function(t) {
        var n = new Object;
        return n.In = Math.ceil(t / N.Zt), n.Nn = t - (n.In - 1) * N.Zt, n
    }, l.Pn = function(t, n) {
        var e = 0;
        return n > 0 && t > 0 && (e = t * N.Zt + n - N.Zt), e
    }, l.Gn = function(t) {
        var n = l.Rn(t),
            e = new Object;
        return e.x = n.Nn * W.mn, e.y = n.In * W.gn, $ && (e.y = e.y + W.yn), e
    }, l.Dn = function(t) {
        l.dn(t - 1, B, !0), l.wn(t - 1, B)
    }, l.Bn = function() {
        l.Wt(B)
    }, l.En = function(t, n) {
        var e = l.Wn(t, n);
        if (e) {
            var i = l.jn(e);
            return i > -1 && (l.Hn(i, t, n), l.Nt(), l.Jn() && l.$n(), !0)
        }
    }, l.Wn = function(t, n) {
        if (t == n) return "";
        var e = "",
            i = l.Rn(t),
            r = l.Rn(n),
            o = N.$t;
        if (i.In == r.In)
            if (i.Nn < r.Nn)
                for (var a = i.Nn; a < r.Nn + 1; a++) e += o[l.Pn(i.In, a) - 1];
            else
                for (a = i.Nn; a >= r.Nn; a--) e += o[l.Pn(i.In, a) - 1];
        else if (i.Nn == r.Nn)
            if (i.In < r.In)
                for (a = i.In; a < r.In + 1; a++) e += o[l.Pn(a, i.Nn) - 1];
            else
                for (a = i.In; a >= r.In; a--) e += o[l.Pn(a, i.Nn) - 1];
        else {
            if (Math.abs(i.In - r.In) != Math.abs(i.Nn - r.Nn)) return "";
            if (n > t)
                if (r.Nn > i.Nn)
                    for (a = t; a <= n; a = a + N.Zt + 1) e += o[a - 1];
                else
                    for (a = t; a <= n; a = a + N.Zt - 1) e += o[a - 1];
            else if (i.Nn > r.Nn)
                for (a = t; a >= n; a = a - N.Zt - 1) e += o[a - 1];
            else
                for (a = t; a >= n; a = a - N.Zt + 1) e += o[a - 1]
        }
        return e
    }, l.jn = function(t) {
        for (var n = N.words, e = 0; e < n.length; e++)
            if (t == n[e].Qt) return n[e].hn ? -1 : e;
        t = t.reverse();
        for (e = 0; e < n.length; e++)
            if (t == n[e].Qt) return n[e].hn ? -1 : e;
        return -1
    }, l.vn = function(t, n, e) {
        var i = l.Gn(n);
        i.x = i.x - W.mn / 2, i.y = i.y - W.gn / 2;
        var r = l.Gn(e);
        r.x = r.x - W.mn / 2, r.y = r.y - W.gn / 2, l.Cn(T, l.Ln(t), i, r)
    }, l.Hn = function(t, n, e) {
        N.words[t].hn = !0, N.words[t].nn = n, N.words[t].en = e
    };
    var ut,
        ft = ft || {};
    function ht(t) {
        var n = [],
            e = ut.qn[t],
            i = !1,
            r = 2 * W.cols - 1;
        e.In % 2 == 0 && (i = !0, r--), 1 == e.In ? (n[0] = null, n[5] = null) : e.In == W.rows && (n[2] = null, n[3] = null), i || e.Nn != r ? i && e.Nn == r && (n[1] = null) : (n[0] = null, n[1] = null, n[2] = null), i || 1 != e.Nn ? i && 2 == e.Nn && (n[4] = null) : (n[3] = null, n[4] = null, n[5] = null);
        for (var o = 0; o < 6; o++)
            if (null !== n[o]) switch (o) {
                case 0:
                    var a = parseInt(t) - W.cols + 1;
                    n[0] = a;
                    break;case 1:
                    a = parseInt(t) + 1;n[1] = a;
                    break;case 2:
                    a = parseInt(t) + W.cols;n[2] = a;
                    break;case 3:
                    a = parseInt(t) + W.cols - 1;n[3] = a;
                    break;case 4:
                    a = parseInt(t) - 1;n[4] = a;
                    break;case 5:
                    a = parseInt(t) - W.cols;n[5] = a
        }
        return n
    }
    function dt(t, n) {
        return ut.qn[t].In == ut.qn[n].In || Math.abs(ut.qn[t].In - ut.qn[n].In) == Math.abs(ut.qn[t].Nn - ut.qn[n].Nn)
    }
    function vt(t, n) {
        var e = ut.qn[t],
            i = ut.qn[n];
        return e.In == i.In ? i.Nn > e.Nn ? 1 : 4 : i.Nn < e.Nn ? i.In > e.In ? 3 : 5 : i.In > e.In ? 2 : 0
    }
    ft.Xn = function(t, n) {
        this.Un = t, this.Yn = n
    }, ft.Kn = function(t, n, e, i) {
        this.Un = t, this.Yn = n, this.Vn = e, this.Zn = i
    }, ft.Qn = function(t, n, e, i) {
        this.te = t, this.ne = n, this.ee = e, this.oe = i
    }, ft.ie = function(t, n, e) {
        this.re = [];
        var i = null,
            r = null;
        ft.ie.ce.ae == ft.ie.le.se ? (i = (ft.ie.ce.ue - ft.ie.ce.fe) / 2, r = ft.ie.ce.de / 2, this.re.push(new ft.Xn(i + n, e)), this.re.push(new ft.Xn(i + ft.ie.ce.fe + n, e)), this.re.push(new ft.Xn(ft.ie.ce.ue + n, r + e)), this.re.push(new ft.Xn(i + ft.ie.ce.fe + n, ft.ie.ce.de + e)), this.re.push(new ft.Xn(i + n, ft.ie.ce.de + e)), this.re.push(new ft.Xn(n, r + e))) : (i = ft.ie.ce.ue / 2, r = (ft.ie.ce.de - ft.ie.ce.fe) / 2, this.re.push(new ft.Xn(i + n, e)), this.re.push(new ft.Xn(ft.ie.ce.ue + n, r + e)), this.re.push(new ft.Xn(ft.ie.ce.ue + n, r + ft.ie.ce.fe + e)), this.re.push(new ft.Xn(i + n, ft.ie.ce.de + e)), this.re.push(new ft.Xn(n, r + ft.ie.ce.fe + e)), this.re.push(new ft.Xn(n, r + e))), this.he = t, this.ve = "", this.x = n, this.y = e, this.x1 = i, this.y1 = r, this.we = new ft.Xn(this.x, this.y), this.pe = new ft.Xn(this.x + ft.ie.ce.ue, this.y + ft.ie.ce.de), this.ge = new ft.Xn(this.x + ft.ie.ce.ue / 2, this.y + ft.ie.ce.de / 2), this.be = new ft.Xn(n + i, e + r), this.selected = !1
    }, ft.ie.prototype.draw = function(t, n, e) {
        window.requestAnimationFrame(function() {
            t.strokeStyle = w.kt, t.fillStyle = w.kt, s.getSetting("showGrid") && (t.strokeStyle = w.yt), void 0 !== this.ke && (t.fillStyle = l.Ln(this.ke)), e && (t.fillStyle = w.Mt), t.lineWidth = 1, t.beginPath(), t.moveTo(this.re[0].Un, this.re[0].Yn);
            for (var n = 1; n < this.re.length; n++) {
                var i = this.re[n];
                t.lineTo(i.Un, i.Yn)
            }
            if (t.closePath(), t.stroke(), t.fill(), this.ve) {
                t.fillStyle = w.xt, t.font = E, t.textAlign = "center", t.textBaseline = "middle";
                var r = this.ve;
                s.getSetting("useLowercase") && (r = r.toLowerCase()), t.fillText(r, this.ge.Un, this.ge.Yn + 1)
            }
        }.bind(this))
    }, ft.ie.prototype.ye = function(t, n) {
        return this.xe(new ft.Xn(t, n))
    }, ft.ie.prototype.Ce = function(t) {
        return this.we.Un < t.Un && this.we.Yn < t.Yn && t.Un < this.pe.Un && t.Yn < this.pe.Yn
    }, ft.ie.prototype.xe = function(t) {
        var n = !1;
        if (this.Ce(t)) {
            var e,
                i = 0;
            for (e = 0, i = this.re.length - 1; e < this.re.length; i = e++) {
                var r = this.re[e],
                    o = this.re[i];
                (r.Yn <= t.Yn && t.Yn < o.Yn || o.Yn <= t.Yn && t.Yn < r.Yn) && t.Un < (o.Un - r.Un) * (t.Yn - r.Yn) / (o.Yn - r.Yn) + r.Un && (n = !n)
            }
        }
        return n
    }, ft.ie.prototype.Oe = function(t) {
        var n = this.ge.Un - t.Un,
            e = this.ge.Yn - t.Yn;
        return Math.sqrt(n * n + e * e)
    }, ft.ie.le = {
        se: 0,
        Fe: 1
    }, ft.Se = function(t, n, e) {
        e || (e = 1), this.qn = [];
        for (var i = 0, r = 0 + e; r + ft.ie.ce.de <= n + e;) {
            var o = 0,
                a = 0;
            i % 2 == 1 && (a = ft.ie.ce.ae == ft.ie.le.se ? (ft.ie.ce.ue - ft.ie.ce.fe) / 2 + ft.ie.ce.fe : ft.ie.ce.ue / 2, o = 1);
            for (var c = a + 1; c + ft.ie.ce.ue <= t;) {
                var l = this.Te(i, o),
                    h = new ft.ie(l, c, r);
                ft.ie.ce.ae == ft.ie.le.se ? h.Me = o : h.ze = i, h.In = i + 1, h.Nn = o + 1, this.qn.push(h), o += 2, ft.ie.ce.ae == ft.ie.le.se ? c += ft.ie.ce.ue + ft.ie.ce.fe : c += ft.ie.ce.ue
            }
            i++, ft.ie.ce.ae == ft.ie.le.se ? r += ft.ie.ce.de / 2 : r += (ft.ie.ce.de - ft.ie.ce.fe) / 2 + ft.ie.ce.fe
        }
        W.fn = W.rows * W.cols
    }, ft.Se.ce = {
        Ae: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }, ft.Se.prototype.Te = function(t, n) {
        for (var e = t, i = ""; e > 25;) i = ft.Se.ce.Ae[e % 26] + i, e -= 26;
        return ft.Se.ce.Ae[e] + i + (n + 1)
    }, ft.Se.prototype._e = function(t) {
        for (var h in this.qn)
            if (this.qn[h].xe(t)) return h;
        return null
    }, ft.Se.prototype.Ge = function(t, n) {
        var e = t.Me - n.Me,
            i = t.ze - n.ze;
        return (Math.abs(e) + Math.abs(i) + Math.abs(e - i)) / 2
    }, ft.Se.prototype.De = function(t) {
        for (var n in this.qn)
            if (this.qn[n].he == t) return this.qn[n];
        return null
    }, ft.Se.prototype.Ee = function(t) {
        var n,
            e = Number.MAX_VALUE,
            i = null;
        for (var h in this.qn) (n = this.qn[h].Oe(t)) < e && (e = n, i = this.qn[h]);
        return i
    }, ft.ie.ce = {
        de: 40,
        ue: 40,
        fe: 20,
        ae: ft.ie.le.Fe,
        Be: !1
    }, l.Pe = function() {
        l.Re(), l.Ie(), N.Pt || (l.Rt(), l.Ne()), l.Dt()
    }, l.Re = function() {
        if (function(t, n) {
                    n += 2;
                    var e = -2 * --t,
                        i = Math.pow(t, 2) + Math.pow(n, 2),
                        r = (-e - Math.sqrt(Math.pow(e, 2) - -12 * i)) / -6;
                    ft.ie.ce.ue = t, ft.ie.ce.de = n, ft.ie.ce.fe = r
                }(W.mn, W.gn), $) var t = W.yn;
        else
            t = 0;
        ut = new ft.Se(W.je, W.He, t)
    }, l.Ne = function() {
        var t = N.words,
            n = ut.qn.length - 1;
        if (N.allowReverseWords) var e = [1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 4, 4, 4, 5, 5, 6, 6];
        else
            e = [1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0];
        for (var i = 0, r = 0; r < t.length; r++) {
            var o = !1,
                a = 0,
                c = !1,
                s = 0;
            for (r % 3 == 0 && (s = 30); !(o || ++a > 60);) {
                for (var u = null, f = t[r].Qt[0], d = 0; !u;) {
                    if (++d > 2 * n) return;
                    var v = l.Ut(0, n),
                        w = ut.qn[v].ve;
                    w && w != f || (u = v)
                }
                for (var m = null; !m;) {
                    m = e[v = l.Ut(0, e.length)]
                }
                var g = 2 * W.cols,
                    b = W.rows,
                    p = t[r].Qt.length,
                    y = ut.qn[u];
                switch (m) {
                case 0:
                    y.Nn + p <= g && y.In - p >= 1 && (o = !0);
                    break;case 1:
                    y.Nn + 2 * p - 1 <= g && (o = !0);
                    break;case 2:
                    y.Nn + p <= g && y.In + p <= b && (o = !0);
                    break;case 3:
                    y.Nn - p + 1 >= 1 && y.In + p <= b && (o = !0);
                    break;case 4:
                    y.Nn - 2 * p + 2 >= 1 && (o = !0);
                    break;case 5:
                    y.Nn - (p + 1) >= 1 && y.In - p >= 1 && (o = !0)
                }
                if (o)
                    for (var k = u, F = 0; F < p; F++) {
                        if (ut.qn[k].ve) {
                            if (ut.qn[k].ve != t[r].Qt[F]) {
                                o = !1;break
                            }
                            c = !0
                        }
                        k = (S = ht(k))[m]
                }
                ++s > 30 && (c = !0), o && c || (o = !1)
            }
            if (o) {
                i++;
                for (k = u, F = 0; F < p; F++) {
                    var S = ht(k);
                    ut.qn[k].ve = t[r].Qt[F], k = S[m]
                }
                if (N.words[r].nn = u, N.words[r].en = k, i > 20) {
                    F = N.words.length - r + 1;N.words.splice(r + 1, F);break
                }
            } else N.words.splice(r, 1), r--
        }
        l.Je()
    }, l.Je = function() {
        for (var t = "", n = 0; n < N.words.length; n++) t += N.words[n].Qt;
        for (n = 0; n < ut.qn.length; n++) N.kidMode && "" == ut.qn[n].ve ? ut.qn[n].ve = " " : "" == ut.qn[n].ve && (ut.qn[n].ve = t.charAt(Math.floor(Math.random() * t.length)))
    }, l.$e = function() {
        for (var t = 0; t < ut.qn.length; t++) ut.qn[t].draw(T, t)
    }, l.We = function() {
        l.Wt(T), l.jt(), l.$e()
    }, l.Le = function(t, n, e, i) {
        if (e == i) return l.Wt(B), void ut.qn[e].draw(t, e, !0);
        if (dt(e, i)) {
            l.Wt(B);
            for (var r = vt(e, i), o = e; o != i;) {
                var a = ht(o);
                ut.qn[o].draw(t, o, !0), (o = a[r]) == i && ut.qn[o].draw(t, o, !0)
            }
        }
    };rt = null, ot = null, at = {}, ct = !1;l.Ie = function() {
        h.rt(), h("#wsGridOverlay").on(h.at, l.qe), N.dragSelect && (h("#wsGridOverlay").on(h.ct, l.Xe), h("#wsGridOverlay").on(h.st, l.Ue))
    }, l.qe = function(t) {
        nt = {};
        var n = l.zn(t);
        if (!n.An)
            if (st = !1, N.dragSelect) {
                var e = new ft.Xn(n.x, n.y);
                rt = ut._e(e), ct = !0, l.Le(B, "#3399FF", rt, rt)
            } else if (rt) {
                e = new ft.Xn(n.x, n.y);
                var i = ut._e(e);
                if (!i) return;
                l.Ye(i), l.Ke(rt, i) ? u.play("correct") : u.play("wrong"), setTimeout(l.Ve, 300), rt = null
            } else {
                var e = new ft.Xn(n.x, n.y);
                (rt = ut._e(e)) && l.Ye(rt)
        }
    };
    lt = 0;
    l.Ue = function(t) {
        if (ct) {
            var n = Date.now();
            if (!(lt + 50 > n)) {
                lt = n;
                var e = l.zn(t);
                if (!e.An) {
                    var i = new ft.Xn(e.x, e.y),
                        r = ut._e(i);
                    if (r)
                        if (r != ot) ot = r, l.Le(B, "#3399FF", rt, r), l.Ke(rt, r) && (ct = !1, l.Wt(B), u.play("correct"), st = !0)
                }
            }
        }
    };
    st = !1;l.Xe = function(t) {
        var n = l.zn(t);
        if (!n.An) {
            var e = new ft.Xn(n.x, n.y),
                i = ut._e(e);
            if (st)
                st = !1;else ct = !1, l.Wt(B), l.Ke(rt, i) ? u.play("correct") : rt != i && u.play("wrong")
        }
    }, l.Ye = function(t) {
        ut.qn[t].draw(B, t, !0)
    }, l.Ve = function() {
        l.Wt(B)
    }, l.Ke = function(t, n) {
        var e = l.Ze(t, n);
        if (e) {
            var i = l.jn(e);
            return i > -1 && (l.Qe(i, t, n), l.no(i, t, n), l.Jn() && l.$n(), !0)
        }
    }, l.Ze = function(t, n) {
        if (t == n) return "";
        if (!dt(t, n)) return "";
        for (var e = "", i = vt(t, n), r = t; r != n;) {
            var o = ht(r);
            e += ut.qn[r].ve, (r = o[i]) == n && (e += ut.qn[r].ve)
        }
        return e
    }, l.no = function(t, n, e) {
        for (var i = vt(n, e), r = t, o = n; o != e;) {
            var a = ht(o);
            ut.qn[o].hn = !0, ut.qn[o].ke = r, (o = a[i]) == e && (ut.qn[o].hn = !0, ut.qn[o].ke = r)
        }
        l.We()
    }, l.Qe = function(t, n, e) {
        N.words[t].hn = !0, N.words[t].nn = n, N.words[t].en = e
    }, l.eo = function() {
        var t = "#wsGrid";
        q && (t = "#wsGridOverlay"), h.rt(), h(t).on(h.at, l.oo)
    }, l.oo = function(t) {
        for (var n = l.zn(t), e = 0; e < V.length; e++) n.x >= V[e].x && n.x <= V[e].x2 && n.y >= V[e].y && n.y <= V[e].y2 && ("hex" == N.format ? (l.Ve(), rt = N.words[V[e].io].nn, l.Ye(rt)) : (l.Bn(), rt = N.words[V[e].io].nn + 1, l.Dn(rt)))
    }
}();