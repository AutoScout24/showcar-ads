/* eslint-disable */
export const registerHBLite = () => {
    (function(window) {
        var h = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
                a != Array.prototype && a != Object.prototype && (a[b] = c.value)
            },
            n = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

        function u() {
            u = function() {
            };
            n.Symbol || (n.Symbol = y)
        }

        var A = 0;

        function y(a) {
            return "jscomp_symbol_" + (a || "") + A++
        }

        function C() {
            u();
            var a = n.Symbol.iterator;
            a || (a = n.Symbol.iterator = n.Symbol("iterator"));
            "function" != typeof Array.prototype[a] && h(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return D(this)
                }
            });
            C = function() {
            }
        }

        function D(a) {
            var b = 0;
            return E(function() {
                return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
            })
        }

        function E(a) {
            C();
            a = {next: a};
            a[n.Symbol.iterator] = function() {
                return this
            };
            return a
        }

        function F(a) {
            C();
            var b = a[Symbol.iterator];
            return b ? b.call(a) : D(a)
        }

        function G(a, b) {
            if (b) {
                for (var c = n, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    g in c || (c[g] = {});
                    c = c[g]
                }
                d = d[d.length - 1];
                e = c[d];
                g = b(e);
                g != e && null != g && h(c, d, {configurable: !0, writable: !0, value: g})
            }
        }

        G("Object.assign", function(a) {
            return a ? a : function(a, c) {
                for (var b = 1; b < arguments.length; b++) {
                    var e = arguments[b];
                    if (e) for (var g in e) Object.prototype.hasOwnProperty.call(e, g) && (a[g] = e[g])
                }
                return a
            }
        });

        function I(a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
                var g = a[e];
                if (b.call(c, g, e, a)) return {u: e, G: g}
            }
            return {u: -1, G: void 0}
        }

        G("Array.prototype.find", function(a) {
            return a ? a : function(a, c) {
                return I(this, a, c).G
            }
        });
        G("Object.is", function(a) {
            return a ? a : function(a, c) {
                return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
            }
        });
        G("Array.prototype.includes", function(a) {
            return a ? a : function(a, c) {
                var b = this;
                b instanceof String && (b = String(b));
                for (var e = b.length, g = c || 0; g < e; g++) if (b[g] == a || Object.is(b[g], a)) return !0;
                return !1
            }
        });
        G("Promise", function(a) {
            function b(a) {
                this.b = 0;
                this.i = void 0;
                this.a = [];
                var b = this.g();
                try {
                    a(b.resolve, b.reject)
                } catch (k) {
                    b.reject(k)
                }
            }

            function c() {
                this.a = null
            }

            if (a) return a;
            c.prototype.b = function(a) {
                this.a || (this.a = [], this.g());
                this.a.push(a)
            };
            c.prototype.g = function() {
                var a = this;
                this.f(function() {
                    a.i()
                })
            };
            var d = n.setTimeout;
            c.prototype.f = function(a) {
                d(a, 0)
            };
            c.prototype.i = function() {
                for (; this.a && this.a.length;) {
                    var a = this.a;
                    this.a = [];
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        delete a[b];
                        try {
                            c()
                        } catch (l) {
                            this.h(l)
                        }
                    }
                }
                this.a =
                    null
            };
            c.prototype.h = function(a) {
                this.f(function() {
                    throw a;
                })
            };
            b.prototype.g = function() {
                function a(a) {
                    return function(d) {
                        c || (c = !0, a.call(b, d))
                    }
                }

                var b = this, c = !1;
                return {resolve: a(this.U), reject: a(this.h)}
            };
            b.prototype.U = function(a) {
                if (a === this) this.h(new TypeError("A Promise cannot resolve to itself")); else if (a instanceof b) this.V(a); else {
                    var c;
                    a:switch (typeof a) {
                        case "object":
                            c = null != a;
                            break a;
                        case "function":
                            c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    c ? this.P(a) : this.w(a)
                }
            };
            b.prototype.P = function(a) {
                var b = void 0;
                try {
                    b = a.then
                } catch (k) {
                    this.h(k);
                    return
                }
                "function" == typeof b ? this.H(b, a) : this.w(a)
            };
            b.prototype.h = function(a) {
                this.A(2, a)
            };
            b.prototype.w = function(a) {
                this.A(1, a)
            };
            b.prototype.A = function(a, b) {
                if (0 != this.b) throw Error("Cannot settle(" + a + ", " + b | "): Promise already settled in state" + this.b);
                this.b = a;
                this.i = b;
                this.N()
            };
            b.prototype.N = function() {
                if (this.a) {
                    for (var a = this.a, b = 0; b < a.length; ++b) a[b].call(), a[b] = null;
                    this.a = null
                }
            };
            var e = new c;
            b.prototype.V = function(a) {
                var b = this.g();
                a.f(b.resolve, b.reject)
            };
            b.prototype.H =
                function(a, b) {
                    var c = this.g();
                    try {
                        a.call(b, c.resolve, c.reject)
                    } catch (l) {
                        c.reject(l)
                    }
                };
            b.prototype.then = function(a, c) {
                function d(a, b) {
                    return "function" == typeof a ? function(b) {
                        try {
                            e(a(b))
                        } catch (V) {
                            g(V)
                        }
                    } : b
                }

                var e, g, f = new b(function(a, b) {
                    e = a;
                    g = b
                });
                this.f(d(a, e), d(c, g));
                return f
            };
            b.prototype["catch"] = function(a) {
                return this.then(void 0, a)
            };
            b.prototype.f = function(a, b) {
                function c() {
                    switch (d.b) {
                        case 1:
                            a(d.i);
                            break;
                        case 2:
                            b(d.i);
                            break;
                        default:
                            throw Error("Unexpected state: " + d.b);
                    }
                }

                var d = this;
                this.a ? this.a.push(function() {
                        e.b(c)
                    }) :
                    e.b(c)
            };
            b.resolve = function(a) {
                return a instanceof b ? a : new b(function(b) {
                    b(a)
                })
            };
            b.reject = function(a) {
                return new b(function(b, c) {
                    c(a)
                })
            };
            b.race = function(a) {
                return new b(function(c, d) {
                    for (var e = F(a), g = e.next(); !g.done; g = e.next()) b.resolve(g.value).f(c, d)
                })
            };
            b.all = function(a) {
                var c = F(a), d = c.next();
                return d.done ? b.resolve([]) : new b(function(a, e) {
                    function g(b) {
                        return function(c) {
                            f[b] = c;
                            l--;
                            l || a(f)
                        }
                    }

                    var f = [], l = 0;
                    do f.push(void 0), l++, b.resolve(d.value).f(g(f.length - 1), e), d = c.next(); while (!d.done)
                })
            };
            b.$jscomp$new$AsyncExecutor =
                function() {
                    return new c
                };
            return b
        });
        G("Array.prototype.fill", function(a) {
            return a ? a : function(a, c, d) {
                var b = this.length || 0;
                0 > c && (c = Math.max(0, b + c));
                if (null == d || d > b) d = b;
                d = Number(d);
                0 > d && (d = Math.max(0, b + d));
                for (c = Number(c || 0); c < d; c++) this[c] = a;
                return this
            }
        });
        G("Array.prototype.findIndex", function(a) {
            return a ? a : function(a, c) {
                return I(this, a, c).u
            }
        });

        function J(a) {
            a = K(a);
            return Object.keys(a).map(function(b) {
                return b + "\x3d" + a[b]
            }).join("\x26")
        }

        function K(a) {
            var b = {}, c = {}, d;
            for (d in a) c.key = d, a.hasOwnProperty(c.key) && a[c.key] && (Array.isArray(a[c.key]) ? b[c.key] = a[c.key].join(",") : "object" === typeof a[c.key] ? (c.j = K(a[c.key]), Object.keys(c.j).map(function(a) {
                return function(c) {
                    b[a.key + "." + c] = a.j[c]
                }
            }(c))) : b[c.key] = a[c.key]), c = {key: c.key, j: c.j};
            return b
        }

        function L(a) {
            return a.substring(a.indexOf("?") + 1).split("\x26").reduce(function(a, c) {
                var b = c.split("\x3d");
                a[b[0]] = b[1];
                return a
            }, {})
        };

        function M() {
            var a = 0;
            return function() {
                a++;
                return a
            }
        };

        function N(a, b) {
            var c = {method: "GET", withCredentials: !0}, c = void 0 === c ? {} : c;
            try {
                var d, e = !1, g = c.method || "GET";
                window.XMLHttpRequest ? (d = new window.XMLHttpRequest, void 0 === d.responseType && (e = !0)) : e = !0;
                e ? (d = new window.XDomainRequest, d.onload = function() {
                    b(d.responseText, d)
                }, d.onerror = function() {
                    console.log("xhr onerror")
                }, d.ontimeout = function() {
                    console.log("xhr timeout")
                }, d.onprogress = function() {
                    console.log("xhr onprogress")
                }) : d.onreadystatechange = function() {
                    4 === d.readyState && b && b(d.responseText, d)
                };
                d.open(g,
                    a);
                e || (c.withCredentials && (d.withCredentials = !0), c.Y && d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.setRequestHeader("Content-Type", c.contentType || "text/plain"));
                d.send(void 0);
                return !0
            } catch (f) {
                return console.error("xhr construction", f), !1
            }
        };

        function O(a) {
            var b = document.createElement("script");
            b.async = !0;
            b.src = a;
            a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(b, a)
        };

        function P(a, b) {
            return a.map(function(a) {
                return a.oxAdUnitId && "display" === a.type || Q(a) ? a : b.find(function(b) {
                    return a.getSlotElementId && b.divId === a.getSlotElementId()
                })
            }).filter(function(a) {
                return a
            })
        }

        function R(a) {
            return a.reduce(function(a, c) {
                Q(c) ? a[1].push(c) : a[0].push(c);
                return a
            }, [[], []])
        }

        function Q(a) {
            return a.oxAdUnitId && "video" === a.type
        };

        function S(a) {
            return a.reduce(function(a, c) {
                return a.concat(Array.isArray(c) ? S(c) : c)
            }, [])
        };var aa = M(), T = null;

        function U(a) {
            a = a ? a : {};
            this.id = aa();
            this.adMapping = a;
            this.a = this.f = 1;
            Q(a) ? this.type = "video" : (this.type = "display", this.divId = a.divId, this.h = a.oxAdUnitId)
        }

        function W(a) {
            var b;
            b = void 0 === b ? 1 : b;
            T ? a = T(a, b) : (a = 1E3 * a / (void 0 === b ? 1 : b), b = Math.min(a, 2E4), 0 < b && 25 > b && (b = 25), a = 1E3 > a ? 5 * Math.round(b / 50) : 5E3 > a ? 10 * Math.round(b / 100) : 50 * Math.round(b / 500));
            return a
        }

        U.prototype.fill = function(a) {
            a = a ? a : {};
            this.D();
            this.adUnit = a;
            this.pub_rev = a.pub_rev ? parseInt(a.pub_rev, 10) : 0;
            var b;
            a.pub_rev ? (b = Math.pow(10, 3), b = Math.round(parseInt(a.pub_rev, 10) / 1E3 * b) / b) : b = 0;
            this.cpm = b;
            "video" === this.type ? (this.b = a.cache_key, this.per_colo_domain = a.per_colo_domain, this.ph = a.ph) : (this.b = a.ts, this.ad = a.html, this.g = a.deal_id, this.i = 1 === a.auct_win_is_deal, a.creative && 0 < a.creative.length ? (this.width = parseInt(a.creative[0].width, 10), this.height = parseInt(a.creative[0].height, 10), this.tracking =
                a.creative[0].tracking) : this.adMapping.sizes && 0 < this.adMapping.sizes.length && (this.width = this.adMapping.sizes[0][0], this.height = this.adMapping.sizes[0][1]));
            return this
        };
        U.prototype.fill = U.prototype.fill;
        U.prototype.m = function() {
            var a = [W(this.cpm)];
            this.g && a.push(this.g);
            this.i && a.push("pmp" + W(this.cpm));
            a = a.join(",");
            return [this.width + "x" + this.height, a].join("_")
        };
        U.prototype.getOxTargetingValue = U.prototype.m;
        U.prototype.o = function() {
            return [this.width + "x" + this.height, W(this.adUnit && this.adUnit.tbd || 0)].join("_")
        };
        U.prototype.getSmartFloorTargetingValue = U.prototype.o;
        U.prototype.s = function() {
            return !(!this.adUnit || !this.adUnit.tbd)
        };
        U.prototype.hasSmartFloor = U.prototype.s;
        U.prototype.L = function(a) {
            return this.R < (a || (new Date).getTime()) - 27E4
        };
        U.prototype.isExpired = U.prototype.L;
        U.prototype.D = function() {
            this.a = 2
        };
        U.prototype.setFilled = U.prototype.D;
        U.prototype.l = function() {
            return 2 <= this.a
        };
        U.prototype.isFilled = U.prototype.l;
        U.prototype.F = function() {
            this.a = 3
        };
        U.prototype.setTargeted = U.prototype.F;
        U.prototype.M = function() {
            return 3 <= this.a
        };
        U.prototype.isTargeted = U.prototype.M;
        U.prototype.C = function() {
            this.a = 4
        };
        U.prototype.setDisplayed = U.prototype.C;
        U.prototype.O = function() {
            this.a = 1
        };
        U.prototype.resetBidState = U.prototype.O;
        U.prototype.v = function() {
            return 4 <= this.a
        };
        U.prototype.isDisplayed = U.prototype.v;

        function ba(a) {
            a = a.map(function(a) {
                return a.customKeyValuePairs
            });
            return a.filter(function(a) {
                return a
            }).length ? a.map(function(a) {
                var b = a ? Object.keys(a).map(function(b) {
                    var c = a[b], c = Array.isArray(c) ? a[b] : [a[b]], c = c.filter(function(a) {
                        return ["string", "number", "boolean"].includes(typeof a)
                    }).join(",");
                    return b + "\x3d" + c
                }).join("\x26") : "";
                return btoa(b.replace(/\+|\//g, function(a) {
                    return "+" === a ? "." : "_"
                }))
            }).join(",") : ""
        }

        function ca(a, b, c, d) {
            var e = {};
            e.url = b.location.href && encodeURIComponent(b.location.href);
            e.be = !0;
            e.auid = a.oxAdUnitId;
            e.bc = "hb_lite_1.0.0";
            c && (e.jsonp = c);
            d && (e.tid = d);
            return J(e)
        }

        function da(a) {
            return a.filter(function(a) {
                return a.floor && !!a.floor
            }).length ? a.map(function(a) {
                return a.floor ? Math.round(1E3 * a.floor) : 0
            }).join(",") : ""
        }

        function ea(a) {
            return a.map(function(a) {
                return a.oxAdUnitId
            }).join("%2C")
        }

        function fa(a) {
            return a.map(function(a) {
                return Array.isArray(a.sizes) ? a.sizes.map(function(a) {
                    return Array.isArray(a) ? a[0] + "x" + a[1] : String(a)
                }).join(",") : String(a.sizes)
            }).join("|")
        };var ga = M();

        function ha(a, b) {
            var c = (b && b.document || window.document).body;
            c && c.appendChild(ia(a, b))
        }

        function X(a, b, c, d, e) {
            var g = a.tracking && a.tracking.impression.match(/([^?]+\/)ri\?/), f = {};
            f.bd = +new Date - b;
            f.bp = a.pub_rev;
            f.bs = d;
            f.bsq = a.f;
            f.bt = c;
            f.ca = 0;
            f.ts = a.b;
            f.br = e ? "t" : a.pub_rev ? "p" : "0";
            g && ((new Image).src = g[1] + "bo?" + J(f), a.f++)
        }

        function ia(a, b) {
            var c = (b && b.document || window.document).createElement("iframe");
            c.id = "openx-pd" + ga();
            c.width = "0";
            c.height = "0";
            c.border = "0px";
            c.frameBorder = "0";
            c.hspace = "0";
            c.marginHeight = "0";
            c.marginWidth = "0";
            c.scrolling = "no";
            c.src = a || "about:blank";
            c.style.border = "0";
            c.style.display = "none";
            c.vspace = "0";
            return c
        };

        function Y(a, b) {
            this.adMappings = [];
            this.a = [];
            this.b = M();
            this.g = M();
            this.deliveryDomain = "";
            this.singleRequest = !1;
            this.namespace = "oxhbjs";
            this.timeLimit = 2500;
            this.window = b || window;
            this.f = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
            this.B(a);
            this.cmds = {
                push: function(a) {
                    return a()
                }
            };
            return this
        }

        Y.prototype.B = function(a) {
            a = void 0 === a ? {} : a;
            this.deliveryDomain = a.deliveryDomain;
            this.timeLimit = a.timeLimit || this.timeLimit;
            this.singleRequest = void 0 !== a.singleRequest ? a.singleRequest : this.singleRequest;
            this.namespace = a.namespace || this.namespace;
            this.window[this.namespace] = this.window[this.namespace] || {};
            this.adMappings = a.adMappings || this.adMappings;
            this.contentTopicId = void 0 !== a.contentTopicId ? a.contentTopicId : this.contentTopicId;
            this.customKeyValuePairs = void 0 !== a.customKeyValuePairs ? a.customKeyValuePairs :
                this.customKeyValuePairs;
            a.customPriceBucket && typeof a.customPriceBucket === Z && (T = a.customPriceBucket);
            return this
        };
        Y.prototype.setConfig = Y.prototype.B;
        Y.prototype.K = function(a, b) {
            function c(a, b, c, d) {
                return new Promise(function(f) {
                    if (a) {
                        var l = new U(a), k = (new Date).valueOf(), p = "videoAdResponseHandler" + g.g(),
                            H = ca(a, d, "window." + b + "." + p, B);
                        d[b][p] = function(a, b, c) {
                            var d = !1, e = setTimeout(function() {
                                d || (d = !0, c(l))
                            }, a);
                            return function(f) {
                                var p = f;
                                if ("string" === typeof f) try {
                                    p = JSON.parse(f)
                                } catch (m) {
                                    p = {pub_rev: "", cache_key: "", per_colo_domain: "", ph: ""}
                                }
                                l.fill({
                                    pub_rev: p.pub_rev,
                                    cache_key: p.cache_key,
                                    per_colo_domain: p.per_colo_domain,
                                    ph: p.ph
                                });
                                d || (d = !0, clearTimeout(e),
                                    c(l));
                                g.a.push(l);
                                X(l, k, a, b, d)
                            }
                        }(c, d.location.hostname, f);
                        O("//" + e + "/v/1.0/avjp?" + H)
                    } else f()
                })
            }

            a = a ? a : {};
            var d = this, e = a.deliveryDomain || this.deliveryDomain;
            if (!e) return console.error("OX Header Bidder: getBids() Error: deliveryDomain not defined"), new Promise(function(a) {
                a([])
            });
            var g = this, f = a.timeLimit || this.timeLimit,
                k = void 0 !== a.singleRequest ? a.singleRequest : this.singleRequest, l = [],
                B = a.contentTopicId || this.contentTopicId, H = a.customKeyValuePairs || this.customKeyValuePairs;
            a.customPriceBucket && typeof a.customPriceBucket ===
            Z && (T = a.customPriceBucket);
            var q = [];
            Array.isArray(a.adMappings) ? q = P(a.adMappings, this.adMappings) : q = this.adMappings;
            var v = F(R(q)), q = v.next().value, v = v.next().value;
            l.push(function(a, b, c, d, f) {
                return new Promise(function(l) {
                    function k(a, b, c) {
                        var d = !1, e = a.map(function(a) {
                            return z.find(function(b) {
                                return b.divId === a.divId
                            })
                        }).filter(function(a) {
                            return a
                        }), l = setTimeout(function() {
                            d || (d = !0, c(z))
                        }, b);
                        return function(a) {
                            var k = a;
                            if ("string" === typeof a) try {
                                k = JSON.parse(a)
                            } catch (la) {
                                k = {
                                    ads: {
                                        ad: [], count: 0, pixels: "",
                                        version: -1
                                    }
                                }
                            }
                            a = {
                                ads: {
                                    ad: k.ads && k.ads.ad,
                                    count: k.ads && k.ads.count,
                                    pixels: k.ads && k.ads.pixels,
                                    version: k.ads && k.ads.version
                                }
                            };
                            var m = d, k = ja(e, a.ads.ad || []);
                            q--;
                            d || q || (d = !0, clearTimeout(l), c(z));
                            g.a = g.a.concat(k);
                            a.ads && a.ads.pixels && ha(a.ads.pixels, f);
                            k.forEach(function(a) {
                                X(a, p, b, f.location.hostname, m)
                            })
                        }
                    }

                    if (b.length && b.length) {
                        var p = (new Date).valueOf(), q = a ? 1 : b.length, z = b.map(function(a) {
                            return new U(a)
                        });
                        b = a ? [b] : b;
                        b.forEach(function(b) {
                            var q = g.b();
                            b = a ? b : [b];
                            var r;
                            r = b;
                            var p = B;
                            if (Array.isArray(r)) {
                                var z =
                                    da(r), w = f.self !== f.top, m = {};
                                m.auid = ea(r);
                                m.aus = fa(r);
                                m.bc = "hb_lite_1.0.0";
                                m.be = 1;
                                m.ch = f.document.a || f.document.characterSet;
                                m.ifr = w;
                                m.jr = f.document.referrer;
                                m.ju = f.location.href && encodeURIComponent(f.location.href);
                                m.res = f.screen.width + "x" + f.screen.height + "x" + f.screen.colorDepth;
                                var x, t;
                                t = f;
                                x = f.document;
                                var v;
                                w ? (t = f.top, x = f.top.document, w = x.documentElement, v = x.body, x = t.innerWidth || w.clientWidth || v.clientWidth, t = t.innerHeight || w.clientHeight || v.clientHeight) : (w = x.documentElement, x = t.innerWidth || w.clientWidth,
                                    t = t.innerHeight || w.clientHeight);
                                m.tws = x + "x" + t;
                                m.tz = (new Date).getTimezoneOffset();
                                m.nocache = (new Date).getTime();
                                m.aumfs = z;
                                m.tid = p;
                                m.c = H;
                                m.tps = ba(r);
                                r = J(m)
                            } else r = "";
                            r = "//" + e + "/w/1.0/arj?" + r;
                            b = k(b, d, l);
                            q = "displayAdResponseHandler" + q;
                            p = !0;
                            g.f && (p = !N(r, b));
                            p && (f[c][q] = b, O(r + ("\x26callback\x3dwindow." + c + "." + q)))
                        })
                    } else l([])
                })
            }(k, q, this.namespace, f, this.window));
            k = v.map(function(a) {
                return c(a, d.namespace, f, d.window)
            });
            return Promise.all(l.concat(k)).then(function(a) {
                var c = (new Date).getTime();
                a = S(a).filter(function(a) {
                    return a
                }).map(function(a) {
                    a.R =
                        c;
                    return a
                });
                b && b(a);
                return a
            })
        };
        Y.prototype.getBids = Y.prototype.K;
        Y.prototype.S = function(a, b) {
            function c() {
                function a(a) {
                    return "undefined" != typeof a
                }

                var b;
                try {
                    b = window.parent || window.top || window
                } catch (q) {
                    b = window
                }
                var c = b.document.documentElement, d = b.innerWidth;
                b = b.innerHeight;
                d = a(d) ? d : c.clientWidth;
                b = a(b) ? b : c.clientHeight;
                return a(d) && a(b) ? [d, b] : [0, 0]
            }

            if (a) {
                var d = function(a, b) {
                    var c = a.getSlotElementId();
                    return b.find(function(a) {
                        return a.divId === c && !a.J && !a.v()
                    }) || null
                }(a, b), e = function(a, b) {
                    if (!b) return !1;
                    var d = c();
                    return a.getSizes(d[0], d[1]).some(function(a) {
                        return a.getWidth() ===
                            b.width && a.getHeight() === b.height
                    })
                }(a, d), g;
                g = "0x0";
                var f = c();
                (f = a.getSizes(f[0], f[1])) && 0 < f.length && (g = f[0].getWidth() + "x" + f[0].getHeight());
                g = d ? d.l() ? e ? d.m() : g + "_0" : g + "_t" : g + "_0";
                try {
                    a.setTargeting("oxb", g), d && d.l() && e && (a.setTargeting("oxb_bid_id", d.id.toString()), a.setTargeting("oxb_bid_namespace", this.namespace), d.s() && a.setTargeting("oxb1", d.o()), d.F())
                } catch (k) {
                    console.error("AuctionEvents.ERROR", "Unexpected error in setOxTargeting", k)
                }
            }
        };
        Y.prototype.setOxTargetingForGoogletagSlot = Y.prototype.S;
        Y.prototype.T = function(a, b, c) {
            var d = b.oxb_bid_id && parseInt(b.oxb_bid_id[0], 10);
            if ((a = c.document) && d) try {
                var e = this.a.find(function(a) {
                    return a.id === d
                });
                if (e) {
                    e.C();
                    e.J = e.Z = !0;
                    var g = e.height, f = e.width, k = e.W, l = e.ad;
                    a === document || "video" === e.X ? console.error("Error trying to write ad. Ad render call ad id " + d + " was prevented from writing to the main document.") : l ? (a.write(l), a.close(), a.defaultView && a.defaultView.frameElement && (a.defaultView.frameElement.width = f, a.defaultView.frameElement.height = g)) :
                        k ? (a.write('\x3cIFRAME SRC\x3d"' + k + '" FRAMEBORDER\x3d"0" SCROLLING\x3d"no" MARGINHEIGHT\x3d"0" MARGINWIDTH\x3d"0" TOPMARGIN\x3d"0" LEFTMARGIN\x3d"0" ALLOWTRANSPARENCY\x3d"true" WIDTH\x3d"' + f + '" HEIGHT\x3d"' + g + '"\x3e\x3c/IFRAME\x3e'), a.close(), a.defaultView && a.defaultView.frameElement && (a.defaultView.frameElement.width = f, a.defaultView.frameElement.height = g)) : console.error("Error trying to write ad. No ad for bid response id: " + d)
                } else console.error("Error trying to write ad. Cannot find ad by given id : " +
                    d)
            } catch (B) {
                console.error("Error trying to write ad Id :" + d + " to the page:" + B.message)
            } else console.error("Error trying to write ad Id :" + d + " to the page. Missing document or adId")
        };
        Y.prototype.showAd = Y.prototype.T;
        Y.prototype.I = function(a, b) {
            a = void 0 === a ? "" : a;
            if (!b) return a;
            var c = a.substring(0, a.indexOf("?") + 1), d = L(a),
                e = encodeURIComponent("ff\x3d" + b.b + "\x26oxcolo\x3d" + b.per_colo_domain + "\x26oxph\x3d" + b.ph + "\x26oxb\x3d" + d.sz + "v_" + W(b.cpm));
            d.url = window.location.href && encodeURIComponent(window.location.href);
            d.description_url = window.location.hostname && encodeURIComponent(window.location.hostname);
            d.cust_params = d.cust_params ? d.cust_params + "%26" + e : e;
            return c + J(d)
        };
        Y.prototype.buildVastUrl = Y.prototype.I;

        function ja(a, b) {
            var c = b.slice();
            return a.map(function(a) {
                var b, d = c.findIndex(function(b) {
                    return String(a.h) === String(b.adunitid) && ka(b, a.adMapping)
                });
                0 <= d && (b = c.splice(d, 1)[0]);
                return a.fill(b)
            })
        }

        function ka(a, b) {
            var c = a.creative && a.creative[0];
            return b.sizes && 0 !== b.sizes.length ? c ? b.sizes.some(function(a) {
                if (!a) return !1;
                var b = F(a);
                a = b.next().value;
                b = b.next().value;
                return a == c.width && b == c.height
            }) : !1 : !0
        }

        var Z = "function";
        window.HeaderBidder = Y;
    })(window)
};
/* eslint-enable */