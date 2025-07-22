function D1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  )
}
;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function Sg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
function Bn(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments)
    }
    n.prototype = t.prototype
  } else n = {}
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r)
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r]
              },
            }
      )
    }),
    n
  )
}
var Cg = { exports: {} },
  da = {},
  wg = { exports: {} },
  ie = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cs = Symbol.for("react.element"),
  U1 = Symbol.for("react.portal"),
  W1 = Symbol.for("react.fragment"),
  H1 = Symbol.for("react.strict_mode"),
  V1 = Symbol.for("react.profiler"),
  K1 = Symbol.for("react.provider"),
  G1 = Symbol.for("react.context"),
  q1 = Symbol.for("react.forward_ref"),
  Q1 = Symbol.for("react.suspense"),
  X1 = Symbol.for("react.memo"),
  Y1 = Symbol.for("react.lazy"),
  wp = Symbol.iterator
function J1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wp && e[wp]) || e["@@iterator"]),
      typeof e == "function" ? e : null)
}
var Eg = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rg = Object.assign,
  kg = {}
function Ao(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = kg),
    (this.updater = n || Eg)
}
Ao.prototype.isReactComponent = {}
Ao.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    )
  this.updater.enqueueSetState(this, e, t, "setState")
}
Ao.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function Pg() {}
Pg.prototype = Ao.prototype
function Nd(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = kg),
    (this.updater = n || Eg)
}
var Ld = (Nd.prototype = new Pg())
Ld.constructor = Nd
Rg(Ld, Ao.prototype)
Ld.isPureReactComponent = !0
var Ep = Array.isArray,
  $g = Object.prototype.hasOwnProperty,
  Ad = { current: null },
  Tg = { key: !0, ref: !0, __self: !0, __source: !0 }
function _g(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      $g.call(t, r) && !Tg.hasOwnProperty(r) && (o[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) o.children = n
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
    o.children = a
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r])
  return { $$typeof: cs, type: e, key: i, ref: s, props: o, _owner: Ad.current }
}
function Z1(e, t) {
  return {
    $$typeof: cs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function zd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cs
}
function ex(e) {
  var t = { "=": "=0", ":": "=2" }
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Rp = /\/+/g
function ku(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ex("" + e.key)
    : t.toString(36)
}
function tl(e, t, n, r, o) {
  var i = typeof e
  ;(i === "undefined" || i === "boolean") && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (i) {
      case "string":
      case "number":
        s = !0
        break
      case "object":
        switch (e.$$typeof) {
          case cs:
          case U1:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + ku(s, 0) : r),
      Ep(o)
        ? ((n = ""),
          e != null && (n = e.replace(Rp, "$&/") + "/"),
          tl(o, t, n, "", function (u) {
            return u
          }))
        : o != null &&
          (zd(o) &&
            (o = Z1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Rp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    )
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ep(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l]
      var a = r + ku(i, l)
      s += tl(i, t, n, a, o)
    }
  else if (((a = J1(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + ku(i, l++)), (s += tl(i, t, n, a, o))
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    )
  return s
}
function $s(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    tl(e, r, "", "", function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function tx(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var gt = { current: null },
  nl = { transition: null },
  nx = {
    ReactCurrentDispatcher: gt,
    ReactCurrentBatchConfig: nl,
    ReactCurrentOwner: Ad,
  }
function jg() {
  throw Error("act(...) is not supported in production builds of React.")
}
ie.Children = {
  map: $s,
  forEach: function (e, t, n) {
    $s(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      $s(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      $s(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!zd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      )
    return e
  },
}
ie.Component = Ao
ie.Fragment = W1
ie.Profiler = V1
ie.PureComponent = Nd
ie.StrictMode = H1
ie.Suspense = Q1
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nx
ie.act = jg
ie.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    )
  var r = Rg({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Ad.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (a in t)
      $g.call(t, a) &&
        !Tg.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    l = Array(a)
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: cs, type: e.type, key: o, ref: i, props: r, _owner: s }
}
ie.createContext = function (e) {
  return (
    (e = {
      $$typeof: G1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: K1, _context: e }),
    (e.Consumer = e)
  )
}
ie.createElement = _g
ie.createFactory = function (e) {
  var t = _g.bind(null, e)
  return (t.type = e), t
}
ie.createRef = function () {
  return { current: null }
}
ie.forwardRef = function (e) {
  return { $$typeof: q1, render: e }
}
ie.isValidElement = zd
ie.lazy = function (e) {
  return { $$typeof: Y1, _payload: { _status: -1, _result: e }, _init: tx }
}
ie.memo = function (e, t) {
  return { $$typeof: X1, type: e, compare: t === void 0 ? null : t }
}
ie.startTransition = function (e) {
  var t = nl.transition
  nl.transition = {}
  try {
    e()
  } finally {
    nl.transition = t
  }
}
ie.unstable_act = jg
ie.useCallback = function (e, t) {
  return gt.current.useCallback(e, t)
}
ie.useContext = function (e) {
  return gt.current.useContext(e)
}
ie.useDebugValue = function () {}
ie.useDeferredValue = function (e) {
  return gt.current.useDeferredValue(e)
}
ie.useEffect = function (e, t) {
  return gt.current.useEffect(e, t)
}
ie.useId = function () {
  return gt.current.useId()
}
ie.useImperativeHandle = function (e, t, n) {
  return gt.current.useImperativeHandle(e, t, n)
}
ie.useInsertionEffect = function (e, t) {
  return gt.current.useInsertionEffect(e, t)
}
ie.useLayoutEffect = function (e, t) {
  return gt.current.useLayoutEffect(e, t)
}
ie.useMemo = function (e, t) {
  return gt.current.useMemo(e, t)
}
ie.useReducer = function (e, t, n) {
  return gt.current.useReducer(e, t, n)
}
ie.useRef = function (e) {
  return gt.current.useRef(e)
}
ie.useState = function (e) {
  return gt.current.useState(e)
}
ie.useSyncExternalStore = function (e, t, n) {
  return gt.current.useSyncExternalStore(e, t, n)
}
ie.useTransition = function () {
  return gt.current.useTransition()
}
ie.version = "18.3.1"
wg.exports = ie
var y = wg.exports
const an = Sg(y),
  wl = D1({ __proto__: null, default: an }, [y])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rx = y,
  ox = Symbol.for("react.element"),
  ix = Symbol.for("react.fragment"),
  sx = Object.prototype.hasOwnProperty,
  lx = rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ax = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ig(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (r in t) sx.call(t, r) && !ax.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: ox, type: e, key: i, ref: s, props: o, _owner: lx.current }
}
da.Fragment = ix
da.jsx = Ig
da.jsxs = Ig
Cg.exports = da
var c = Cg.exports,
  vc = {},
  Og = { exports: {} },
  Nt = {},
  Mg = { exports: {} },
  Ng = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t($, M) {
    var V = $.length
    $.push(M)
    e: for (; 0 < V; ) {
      var J = (V - 1) >>> 1,
        oe = $[J]
      if (0 < o(oe, M)) ($[J] = M), ($[V] = oe), (V = J)
      else break e
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0]
  }
  function r($) {
    if ($.length === 0) return null
    var M = $[0],
      V = $.pop()
    if (V !== M) {
      $[0] = V
      e: for (var J = 0, oe = $.length, be = oe >>> 1; J < be; ) {
        var te = 2 * (J + 1) - 1,
          ye = $[te],
          ue = te + 1,
          qe = $[ue]
        if (0 > o(ye, V))
          ue < oe && 0 > o(qe, ye)
            ? (($[J] = qe), ($[ue] = V), (J = ue))
            : (($[J] = ye), ($[te] = V), (J = te))
        else if (ue < oe && 0 > o(qe, V)) ($[J] = qe), ($[ue] = V), (J = ue)
        else break e
      }
    }
    return M
  }
  function o($, M) {
    var V = $.sortIndex - M.sortIndex
    return V !== 0 ? V : $.id - M.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var s = Date,
      l = s.now()
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    h = 3,
    C = !1,
    v = !1,
    x = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function g($) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u)
      else if (M.startTime <= $) r(u), (M.sortIndex = M.expirationTime), t(a, M)
      else break
      M = n(u)
    }
  }
  function S($) {
    if (((x = !1), g($), !v))
      if (n(a) !== null) (v = !0), B(k)
      else {
        var M = n(u)
        M !== null && U(S, M.startTime - $)
      }
  }
  function k($, M) {
    ;(v = !1), x && ((x = !1), p(P), (P = -1)), (C = !0)
    var V = h
    try {
      for (
        g(M), f = n(a);
        f !== null && (!(f.expirationTime > M) || ($ && !I()));

      ) {
        var J = f.callback
        if (typeof J == "function") {
          ;(f.callback = null), (h = f.priorityLevel)
          var oe = J(f.expirationTime <= M)
          ;(M = e.unstable_now()),
            typeof oe == "function" ? (f.callback = oe) : f === n(a) && r(a),
            g(M)
        } else r(a)
        f = n(a)
      }
      if (f !== null) var be = !0
      else {
        var te = n(u)
        te !== null && U(S, te.startTime - M), (be = !1)
      }
      return be
    } finally {
      ;(f = null), (h = V), (C = !1)
    }
  }
  var R = !1,
    E = null,
    P = -1,
    T = 5,
    j = -1
  function I() {
    return !(e.unstable_now() - j < T)
  }
  function N() {
    if (E !== null) {
      var $ = e.unstable_now()
      j = $
      var M = !0
      try {
        M = E(!0, $)
      } finally {
        M ? O() : ((R = !1), (E = null))
      }
    } else R = !1
  }
  var O
  if (typeof m == "function")
    O = function () {
      m(N)
    }
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      z = L.port2
    ;(L.port1.onmessage = N),
      (O = function () {
        z.postMessage(null)
      })
  } else
    O = function () {
      w(N, 0)
    }
  function B($) {
    ;(E = $), R || ((R = !0), O())
  }
  function U($, M) {
    P = w(function () {
      $(e.unstable_now())
    }, M)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || C || ((v = !0), B(k))
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < $ ? Math.floor(1e3 / $) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function ($) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var M = 3
          break
        default:
          M = h
      }
      var V = h
      h = M
      try {
        return $()
      } finally {
        h = V
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, M) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          $ = 3
      }
      var V = h
      h = $
      try {
        return M()
      } finally {
        h = V
      }
    }),
    (e.unstable_scheduleCallback = function ($, M, V) {
      var J = e.unstable_now()
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? J + V : J))
          : (V = J),
        $)
      ) {
        case 1:
          var oe = -1
          break
        case 2:
          oe = 250
          break
        case 5:
          oe = 1073741823
          break
        case 4:
          oe = 1e4
          break
        default:
          oe = 5e3
      }
      return (
        (oe = V + oe),
        ($ = {
          id: d++,
          callback: M,
          priorityLevel: $,
          startTime: V,
          expirationTime: oe,
          sortIndex: -1,
        }),
        V > J
          ? (($.sortIndex = V),
            t(u, $),
            n(a) === null &&
              $ === n(u) &&
              (x ? (p(P), (P = -1)) : (x = !0), U(S, V - J)))
          : (($.sortIndex = oe), t(a, $), v || C || ((v = !0), B(k))),
        $
      )
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function ($) {
      var M = h
      return function () {
        var V = h
        h = M
        try {
          return $.apply(this, arguments)
        } finally {
          h = V
        }
      }
    })
})(Ng)
Mg.exports = Ng
var ux = Mg.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cx = y,
  Mt = ux
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n])
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  )
}
var Lg = new Set(),
  Mi = {}
function Fr(e, t) {
  wo(e, t), wo(e + "Capture", t)
}
function wo(e, t) {
  for (Mi[e] = t, e = 0; e < t.length; e++) Lg.add(t[e])
}
var Ln = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yc = Object.prototype.hasOwnProperty,
  dx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kp = {},
  Pp = {}
function fx(e) {
  return yc.call(Pp, e)
    ? !0
    : yc.call(kp, e)
    ? !1
    : dx.test(e)
    ? (Pp[e] = !0)
    : ((kp[e] = !0), !1)
}
function px(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-")
    default:
      return !1
  }
}
function hx(e, t, n, r) {
  if (t === null || typeof t > "u" || px(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function vt(e, t, n, r, o, i, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s)
}
var st = {}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    st[e] = new vt(e, 0, !1, e, null, !1, !1)
  })
;[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0]
  st[t] = new vt(t, 1, !1, e[1], null, !1, !1)
})
;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  st[e] = new vt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  st[e] = new vt(e, 2, !1, e, null, !1, !1)
})
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    st[e] = new vt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;["checked", "multiple", "muted", "selected"].forEach(function (e) {
  st[e] = new vt(e, 3, !0, e, null, !1, !1)
})
;["capture", "download"].forEach(function (e) {
  st[e] = new vt(e, 4, !1, e, null, !1, !1)
})
;["cols", "rows", "size", "span"].forEach(function (e) {
  st[e] = new vt(e, 6, !1, e, null, !1, !1)
})
;["rowSpan", "start"].forEach(function (e) {
  st[e] = new vt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Fd = /[\-:]([a-z])/g
function Bd(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fd, Bd)
    st[t] = new vt(t, 1, !1, e, null, !1, !1)
  })
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fd, Bd)
    st[t] = new vt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
  })
;["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fd, Bd)
  st[t] = new vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})
;["tabIndex", "crossOrigin"].forEach(function (e) {
  st[e] = new vt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
st.xlinkHref = new vt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
)
;["src", "href", "action", "formAction"].forEach(function (e) {
  st[e] = new vt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Dd(e, t, n, r) {
  var o = st.hasOwnProperty(t) ? st[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hx(t, n, o, r) && (n = null),
    r || o === null
      ? fx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Dn = cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ts = Symbol.for("react.element"),
  to = Symbol.for("react.portal"),
  no = Symbol.for("react.fragment"),
  Ud = Symbol.for("react.strict_mode"),
  xc = Symbol.for("react.profiler"),
  Ag = Symbol.for("react.provider"),
  zg = Symbol.for("react.context"),
  Wd = Symbol.for("react.forward_ref"),
  bc = Symbol.for("react.suspense"),
  Sc = Symbol.for("react.suspense_list"),
  Hd = Symbol.for("react.memo"),
  qn = Symbol.for("react.lazy"),
  Fg = Symbol.for("react.offscreen"),
  $p = Symbol.iterator
function Yo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($p && e[$p]) || e["@@iterator"]),
      typeof e == "function" ? e : null)
}
var Ne = Object.assign,
  Pu
function hi(e) {
  if (Pu === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Pu = (t && t[1]) || ""
    }
  return (
    `
` +
    Pu +
    e
  )
}
var $u = !1
function Tu(e, t) {
  if (!e || $u) return ""
  $u = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ")
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                )
              }
            while (1 <= s && 0 <= l)
          break
        }
    }
  } finally {
    ;($u = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : "") ? hi(e) : ""
}
function mx(e) {
  switch (e.tag) {
    case 5:
      return hi(e.type)
    case 16:
      return hi("Lazy")
    case 13:
      return hi("Suspense")
    case 19:
      return hi("SuspenseList")
    case 0:
    case 2:
    case 15:
      return (e = Tu(e.type, !1)), e
    case 11:
      return (e = Tu(e.type.render, !1)), e
    case 1:
      return (e = Tu(e.type, !0)), e
    default:
      return ""
  }
}
function Cc(e) {
  if (e == null) return null
  if (typeof e == "function") return e.displayName || e.name || null
  if (typeof e == "string") return e
  switch (e) {
    case no:
      return "Fragment"
    case to:
      return "Portal"
    case xc:
      return "Profiler"
    case Ud:
      return "StrictMode"
    case bc:
      return "Suspense"
    case Sc:
      return "SuspenseList"
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zg:
        return (e.displayName || "Context") + ".Consumer"
      case Ag:
        return (e._context.displayName || "Context") + ".Provider"
      case Wd:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        )
      case Hd:
        return (
          (t = e.displayName || null), t !== null ? t : Cc(e.type) || "Memo"
        )
      case qn:
        ;(t = e._payload), (e = e._init)
        try {
          return Cc(e(t))
        } catch {}
    }
  return null
}
function gx(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return "Cache"
    case 9:
      return (t.displayName || "Context") + ".Consumer"
    case 10:
      return (t._context.displayName || "Context") + ".Provider"
    case 18:
      return "DehydratedFragment"
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      )
    case 7:
      return "Fragment"
    case 5:
      return t
    case 4:
      return "Portal"
    case 3:
      return "Root"
    case 6:
      return "Text"
    case 16:
      return Cc(t)
    case 8:
      return t === Ud ? "StrictMode" : "Mode"
    case 22:
      return "Offscreen"
    case 12:
      return "Profiler"
    case 21:
      return "Scope"
    case 13:
      return "Suspense"
    case 19:
      return "SuspenseList"
    case 25:
      return "TracingMarker"
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null
      if (typeof t == "string") return t
  }
  return null
}
function dr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e
    case "object":
      return e
    default:
      return ""
  }
}
function Bg(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  )
}
function vx(e) {
  var t = Bg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (s) {
          ;(r = "" + s), i.call(this, s)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = "" + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function _s(e) {
  e._valueTracker || (e._valueTracker = vx(e))
}
function Dg(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ""
  return (
    e && (r = Bg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function El(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function wc(e, t) {
  var n = t.checked
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Tp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = dr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    })
}
function Ug(e, t) {
  ;(t = t.checked), t != null && Dd(e, "checked", t, !1)
}
function Ec(e, t) {
  Ug(e, t)
  var n = dr(t.value),
    r = t.type
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n)
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value")
    return
  }
  t.hasOwnProperty("value")
    ? Rc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Rc(e, t.type, dr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function _p(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n)
}
function Rc(e, t, n) {
  ;(t !== "number" || El(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var mi = Array.isArray
function ho(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + dr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function kc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91))
  return Ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  })
}
function jp(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92))
      if (mi(n)) {
        if (1 < n.length) throw Error(A(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), (n = t)
  }
  e._wrapperState = { initialValue: dr(n) }
}
function Wg(e, t) {
  var n = dr(t.value),
    r = dr(t.defaultValue)
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ip(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Hg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg"
    case "math":
      return "http://www.w3.org/1998/Math/MathML"
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function Pc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e
}
var js,
  Vg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t
    else {
      for (
        js = js || document.createElement("div"),
          js.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = js.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Ni(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var xi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yx = ["Webkit", "ms", "Moz", "O"]
Object.keys(xi).forEach(function (e) {
  yx.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xi[t] = xi[e])
  })
})
function Kg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xi.hasOwnProperty(e) && xi[e])
    ? ("" + t).trim()
    : t + "px"
}
function Gg(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Kg(n, t[n], r)
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var xx = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function $c(e, t) {
  if (t) {
    if (xx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60))
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62))
  }
}
function Tc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string"
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1
    default:
      return !0
  }
}
var _c = null
function Vd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var jc = null,
  mo = null,
  go = null
function Op(e) {
  if ((e = ps(e))) {
    if (typeof jc != "function") throw Error(A(280))
    var t = e.stateNode
    t && ((t = ga(t)), jc(e.stateNode, e.type, t))
  }
}
function qg(e) {
  mo ? (go ? go.push(e) : (go = [e])) : (mo = e)
}
function Qg() {
  if (mo) {
    var e = mo,
      t = go
    if (((go = mo = null), Op(e), t)) for (e = 0; e < t.length; e++) Op(t[e])
  }
}
function Xg(e, t) {
  return e(t)
}
function Yg() {}
var _u = !1
function Jg(e, t, n) {
  if (_u) return e(t, n)
  _u = !0
  try {
    return Xg(e, t, n)
  } finally {
    ;(_u = !1), (mo !== null || go !== null) && (Yg(), Qg())
  }
}
function Li(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ga(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != "function") throw Error(A(231, t, typeof n))
  return n
}
var Ic = !1
if (Ln)
  try {
    var Jo = {}
    Object.defineProperty(Jo, "passive", {
      get: function () {
        Ic = !0
      },
    }),
      window.addEventListener("test", Jo, Jo),
      window.removeEventListener("test", Jo, Jo)
  } catch {
    Ic = !1
  }
function bx(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var bi = !1,
  Rl = null,
  kl = !1,
  Oc = null,
  Sx = {
    onError: function (e) {
      ;(bi = !0), (Rl = e)
    },
  }
function Cx(e, t, n, r, o, i, s, l, a) {
  ;(bi = !1), (Rl = null), bx.apply(Sx, arguments)
}
function wx(e, t, n, r, o, i, s, l, a) {
  if ((Cx.apply(this, arguments), bi)) {
    if (bi) {
      var u = Rl
      ;(bi = !1), (Rl = null)
    } else throw Error(A(198))
    kl || ((kl = !0), (Oc = u))
  }
}
function Br(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Zg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Mp(e) {
  if (Br(e) !== e) throw Error(A(188))
}
function Ex(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Br(e)), t === null)) throw Error(A(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Mp(o), e
        if (i === r) return Mp(o), t
        i = i.sibling
      }
      throw Error(A(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          ;(s = !0), (n = o), (r = i)
          break
        }
        if (l === r) {
          ;(s = !0), (r = o), (n = i)
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            ;(s = !0), (n = i), (r = o)
            break
          }
          if (l === r) {
            ;(s = !0), (r = i), (n = o)
            break
          }
          l = l.sibling
        }
        if (!s) throw Error(A(189))
      }
    }
    if (n.alternate !== r) throw Error(A(190))
  }
  if (n.tag !== 3) throw Error(A(188))
  return n.stateNode.current === n ? e : t
}
function ev(e) {
  return (e = Ex(e)), e !== null ? tv(e) : null
}
function tv(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = tv(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var nv = Mt.unstable_scheduleCallback,
  Np = Mt.unstable_cancelCallback,
  Rx = Mt.unstable_shouldYield,
  kx = Mt.unstable_requestPaint,
  De = Mt.unstable_now,
  Px = Mt.unstable_getCurrentPriorityLevel,
  Kd = Mt.unstable_ImmediatePriority,
  rv = Mt.unstable_UserBlockingPriority,
  Pl = Mt.unstable_NormalPriority,
  $x = Mt.unstable_LowPriority,
  ov = Mt.unstable_IdlePriority,
  fa = null,
  Cn = null
function Tx(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(fa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var un = Math.clz32 ? Math.clz32 : Ix,
  _x = Math.log,
  jx = Math.LN2
function Ix(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_x(e) / jx) | 0)) | 0
}
var Is = 64,
  Os = 4194304
function gi(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function $l(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var l = s & ~o
    l !== 0 ? (r = gi(l)) : ((i &= s), i !== 0 && (r = gi(i)))
  } else (s = n & ~o), s !== 0 ? (r = gi(s)) : i !== 0 && (r = gi(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - un(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function Ox(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Mx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - un(i),
      l = 1 << s,
      a = o[s]
    a === -1
      ? (!(l & n) || l & r) && (o[s] = Ox(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l)
  }
}
function Mc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function iv() {
  var e = Is
  return (Is <<= 1), !(Is & 4194240) && (Is = 64), e
}
function ju(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function ds(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - un(t)),
    (e[t] = n)
}
function Nx(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - un(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function Gd(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - un(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var ge = 0
function sv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var lv,
  qd,
  av,
  uv,
  cv,
  Nc = !1,
  Ms = [],
  nr = null,
  rr = null,
  or = null,
  Ai = new Map(),
  zi = new Map(),
  Xn = [],
  Lx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    )
function Lp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nr = null
      break
    case "dragenter":
    case "dragleave":
      rr = null
      break
    case "mouseover":
    case "mouseout":
      or = null
      break
    case "pointerover":
    case "pointerout":
      Ai.delete(t.pointerId)
      break
    case "gotpointercapture":
    case "lostpointercapture":
      zi.delete(t.pointerId)
  }
}
function Zo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ps(t)), t !== null && qd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Ax(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (nr = Zo(nr, e, t, n, r, o)), !0
    case "dragenter":
      return (rr = Zo(rr, e, t, n, r, o)), !0
    case "mouseover":
      return (or = Zo(or, e, t, n, r, o)), !0
    case "pointerover":
      var i = o.pointerId
      return Ai.set(i, Zo(Ai.get(i) || null, e, t, n, r, o)), !0
    case "gotpointercapture":
      return (
        (i = o.pointerId), zi.set(i, Zo(zi.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function dv(e) {
  var t = Rr(e.target)
  if (t !== null) {
    var n = Br(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zg(n)), t !== null)) {
          ;(e.blockedOn = t),
            cv(e.priority, function () {
              av(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function rl(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(_c = r), n.target.dispatchEvent(r), (_c = null)
    } else return (t = ps(n)), t !== null && qd(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Ap(e, t, n) {
  rl(e) && n.delete(t)
}
function zx() {
  ;(Nc = !1),
    nr !== null && rl(nr) && (nr = null),
    rr !== null && rl(rr) && (rr = null),
    or !== null && rl(or) && (or = null),
    Ai.forEach(Ap),
    zi.forEach(Ap)
}
function ei(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Nc ||
      ((Nc = !0), Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority, zx)))
}
function Fi(e) {
  function t(o) {
    return ei(o, e)
  }
  if (0 < Ms.length) {
    ei(Ms[0], e)
    for (var n = 1; n < Ms.length; n++) {
      var r = Ms[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    nr !== null && ei(nr, e),
      rr !== null && ei(rr, e),
      or !== null && ei(or, e),
      Ai.forEach(t),
      zi.forEach(t),
      n = 0;
    n < Xn.length;
    n++
  )
    (r = Xn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Xn.length && ((n = Xn[0]), n.blockedOn === null); )
    dv(n), n.blockedOn === null && Xn.shift()
}
var vo = Dn.ReactCurrentBatchConfig,
  Tl = !0
function Fx(e, t, n, r) {
  var o = ge,
    i = vo.transition
  vo.transition = null
  try {
    ;(ge = 1), Qd(e, t, n, r)
  } finally {
    ;(ge = o), (vo.transition = i)
  }
}
function Bx(e, t, n, r) {
  var o = ge,
    i = vo.transition
  vo.transition = null
  try {
    ;(ge = 4), Qd(e, t, n, r)
  } finally {
    ;(ge = o), (vo.transition = i)
  }
}
function Qd(e, t, n, r) {
  if (Tl) {
    var o = Lc(e, t, n, r)
    if (o === null) Du(e, t, r, _l, n), Lp(e, r)
    else if (Ax(o, e, t, n, r)) r.stopPropagation()
    else if ((Lp(e, r), t & 4 && -1 < Lx.indexOf(e))) {
      for (; o !== null; ) {
        var i = ps(o)
        if (
          (i !== null && lv(i),
          (i = Lc(e, t, n, r)),
          i === null && Du(e, t, r, _l, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Du(e, t, r, null, n)
  }
}
var _l = null
function Lc(e, t, n, r) {
  if (((_l = null), (e = Vd(r)), (e = Rr(e)), e !== null))
    if (((t = Br(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Zg(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (_l = e), null
}
function fv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4
    case "message":
      switch (Px()) {
        case Kd:
          return 1
        case rv:
          return 4
        case Pl:
        case $x:
          return 16
        case ov:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Jn = null,
  Xd = null,
  ol = null
function pv() {
  if (ol) return ol
  var e,
    t = Xd,
    n = t.length,
    r,
    o = "value" in Jn ? Jn.value : Jn.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ol = o.slice(e, 1 < r ? 1 - r : void 0))
}
function il(e) {
  var t = e.keyCode
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ns() {
  return !0
}
function zp() {
  return !1
}
function Lt(e) {
  function t(n, r, o, i, s) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null)
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ns
        : zp),
      (this.isPropagationStopped = zp),
      this
    )
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ns))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ns))
      },
      persist: function () {},
      isPersistent: Ns,
    }),
    t
  )
}
var zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yd = Lt(zo),
  fs = Ne({}, zo, { view: 0, detail: 0 }),
  Dx = Lt(fs),
  Iu,
  Ou,
  ti,
  pa = Ne({}, fs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ti &&
            (ti && e.type === "mousemove"
              ? ((Iu = e.screenX - ti.screenX), (Ou = e.screenY - ti.screenY))
              : (Ou = Iu = 0),
            (ti = e)),
          Iu)
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ou
    },
  }),
  Fp = Lt(pa),
  Ux = Ne({}, pa, { dataTransfer: 0 }),
  Wx = Lt(Ux),
  Hx = Ne({}, fs, { relatedTarget: 0 }),
  Mu = Lt(Hx),
  Vx = Ne({}, zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kx = Lt(Vx),
  Gx = Ne({}, zo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    },
  }),
  qx = Lt(Gx),
  Qx = Ne({}, zo, { data: 0 }),
  Bp = Lt(Qx),
  Xx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Yx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Jx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }
function Zx(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Jx[e]) ? !!t[e] : !1
}
function Jd() {
  return Zx
}
var eb = Ne({}, fs, {
    key: function (e) {
      if (e.key) {
        var t = Xx[e.key] || e.key
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress"
        ? ((e = il(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Yx[e.keyCode] || "Unidentified"
        : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jd,
    charCode: function (e) {
      return e.type === "keypress" ? il(e) : 0
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === "keypress"
        ? il(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0
    },
  }),
  tb = Lt(eb),
  nb = Ne({}, pa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Dp = Lt(nb),
  rb = Ne({}, fs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jd,
  }),
  ob = Lt(rb),
  ib = Ne({}, zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sb = Lt(ib),
  lb = Ne({}, pa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ab = Lt(lb),
  ub = [9, 13, 27, 32],
  Zd = Ln && "CompositionEvent" in window,
  Si = null
Ln && "documentMode" in document && (Si = document.documentMode)
var cb = Ln && "TextEvent" in window && !Si,
  hv = Ln && (!Zd || (Si && 8 < Si && 11 >= Si)),
  Up = String.fromCharCode(32),
  Wp = !1
function mv(e, t) {
  switch (e) {
    case "keyup":
      return ub.indexOf(t.keyCode) !== -1
    case "keydown":
      return t.keyCode !== 229
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0
    default:
      return !1
  }
}
function gv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
}
var ro = !1
function db(e, t) {
  switch (e) {
    case "compositionend":
      return gv(t)
    case "keypress":
      return t.which !== 32 ? null : ((Wp = !0), Up)
    case "textInput":
      return (e = t.data), e === Up && Wp ? null : e
    default:
      return null
  }
}
function fb(e, t) {
  if (ro)
    return e === "compositionend" || (!Zd && mv(e, t))
      ? ((e = pv()), (ol = Xd = Jn = null), (ro = !1), e)
      : null
  switch (e) {
    case "paste":
      return null
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case "compositionend":
      return hv && t.locale !== "ko" ? null : t.data
    default:
      return null
  }
}
var pb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Hp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === "input" ? !!pb[e.type] : t === "textarea"
}
function vv(e, t, n, r) {
  qg(r),
    (t = jl(t, "onChange")),
    0 < t.length &&
      ((n = new Yd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Ci = null,
  Bi = null
function hb(e) {
  $v(e, 0)
}
function ha(e) {
  var t = so(e)
  if (Dg(t)) return e
}
function mb(e, t) {
  if (e === "change") return t
}
var yv = !1
if (Ln) {
  var Nu
  if (Ln) {
    var Lu = "oninput" in document
    if (!Lu) {
      var Vp = document.createElement("div")
      Vp.setAttribute("oninput", "return;"),
        (Lu = typeof Vp.oninput == "function")
    }
    Nu = Lu
  } else Nu = !1
  yv = Nu && (!document.documentMode || 9 < document.documentMode)
}
function Kp() {
  Ci && (Ci.detachEvent("onpropertychange", xv), (Bi = Ci = null))
}
function xv(e) {
  if (e.propertyName === "value" && ha(Bi)) {
    var t = []
    vv(t, Bi, e, Vd(e)), Jg(hb, t)
  }
}
function gb(e, t, n) {
  e === "focusin"
    ? (Kp(), (Ci = t), (Bi = n), Ci.attachEvent("onpropertychange", xv))
    : e === "focusout" && Kp()
}
function vb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ha(Bi)
}
function yb(e, t) {
  if (e === "click") return ha(t)
}
function xb(e, t) {
  if (e === "input" || e === "change") return ha(t)
}
function bb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var fn = typeof Object.is == "function" ? Object.is : bb
function Di(e, t) {
  if (fn(e, t)) return !0
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!yc.call(t, o) || !fn(e[o], t[o])) return !1
  }
  return !0
}
function Gp(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function qp(e, t) {
  var n = Gp(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Gp(n)
  }
}
function bv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Sv() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = El(e.document)
  }
  return t
}
function ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  )
}
function Sb(e) {
  var t = Sv(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ef(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = qp(n, i))
        var s = qp(n, r)
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Cb = Ln && "documentMode" in document && 11 >= document.documentMode,
  oo = null,
  Ac = null,
  wi = null,
  zc = !1
function Qp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  zc ||
    oo == null ||
    oo !== El(r) ||
    ((r = oo),
    "selectionStart" in r && ef(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wi && Di(wi, r)) ||
      ((wi = r),
      (r = jl(Ac, "onSelect")),
      0 < r.length &&
        ((t = new Yd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = oo))))
}
function Ls(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  )
}
var io = {
    animationend: Ls("Animation", "AnimationEnd"),
    animationiteration: Ls("Animation", "AnimationIteration"),
    animationstart: Ls("Animation", "AnimationStart"),
    transitionend: Ls("Transition", "TransitionEnd"),
  },
  Au = {},
  Cv = {}
Ln &&
  ((Cv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete io.animationend.animation,
    delete io.animationiteration.animation,
    delete io.animationstart.animation),
  "TransitionEvent" in window || delete io.transitionend.transition)
function ma(e) {
  if (Au[e]) return Au[e]
  if (!io[e]) return e
  var t = io[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Cv) return (Au[e] = t[n])
  return e
}
var wv = ma("animationend"),
  Ev = ma("animationiteration"),
  Rv = ma("animationstart"),
  kv = ma("transitionend"),
  Pv = new Map(),
  Xp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    )
function hr(e, t) {
  Pv.set(e, t), Fr(t, [e])
}
for (var zu = 0; zu < Xp.length; zu++) {
  var Fu = Xp[zu],
    wb = Fu.toLowerCase(),
    Eb = Fu[0].toUpperCase() + Fu.slice(1)
  hr(wb, "on" + Eb)
}
hr(wv, "onAnimationEnd")
hr(Ev, "onAnimationIteration")
hr(Rv, "onAnimationStart")
hr("dblclick", "onDoubleClick")
hr("focusin", "onFocus")
hr("focusout", "onBlur")
hr(kv, "onTransitionEnd")
wo("onMouseEnter", ["mouseout", "mouseover"])
wo("onMouseLeave", ["mouseout", "mouseover"])
wo("onPointerEnter", ["pointerout", "pointerover"])
wo("onPointerLeave", ["pointerout", "pointerover"])
Fr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
)
Fr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
)
Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"])
Fr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
)
Fr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
)
Fr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
)
var vi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Rb = new Set("cancel close invalid load scroll toggle".split(" ").concat(vi))
function Yp(e, t, n) {
  var r = e.type || "unknown-event"
  ;(e.currentTarget = n), wx(r, t, void 0, e), (e.currentTarget = null)
}
function $v(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e
          Yp(o, l, u), (i = a)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e
          Yp(o, l, u), (i = a)
        }
    }
  }
  if (kl) throw ((e = Oc), (kl = !1), (Oc = null), e)
}
function Re(e, t) {
  var n = t[Wc]
  n === void 0 && (n = t[Wc] = new Set())
  var r = e + "__bubble"
  n.has(r) || (Tv(t, e, 2, !1), n.add(r))
}
function Bu(e, t, n) {
  var r = 0
  t && (r |= 4), Tv(n, e, r, t)
}
var As = "_reactListening" + Math.random().toString(36).slice(2)
function Ui(e) {
  if (!e[As]) {
    ;(e[As] = !0),
      Lg.forEach(function (n) {
        n !== "selectionchange" && (Rb.has(n) || Bu(n, !1, e), Bu(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[As] || ((t[As] = !0), Bu("selectionchange", !1, t))
  }
}
function Tv(e, t, n, r) {
  switch (fv(t)) {
    case 1:
      var o = Fx
      break
    case 4:
      o = Bx
      break
    default:
      o = Qd
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ic ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function Du(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return
            s = s.return
          }
        for (; l !== null; ) {
          if (((s = Rr(l)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  Jg(function () {
    var u = i,
      d = Vd(n),
      f = []
    e: {
      var h = Pv.get(e)
      if (h !== void 0) {
        var C = Yd,
          v = e
        switch (e) {
          case "keypress":
            if (il(n) === 0) break e
          case "keydown":
          case "keyup":
            C = tb
            break
          case "focusin":
            ;(v = "focus"), (C = Mu)
            break
          case "focusout":
            ;(v = "blur"), (C = Mu)
            break
          case "beforeblur":
          case "afterblur":
            C = Mu
            break
          case "click":
            if (n.button === 2) break e
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Fp
            break
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Wx
            break
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = ob
            break
          case wv:
          case Ev:
          case Rv:
            C = Kx
            break
          case kv:
            C = sb
            break
          case "scroll":
            C = Dx
            break
          case "wheel":
            C = ab
            break
          case "copy":
          case "cut":
          case "paste":
            C = qx
            break
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Dp
        }
        var x = (t & 4) !== 0,
          w = !x && e === "scroll",
          p = x ? (h !== null ? h + "Capture" : null) : h
        x = []
        for (var m = u, g; m !== null; ) {
          g = m
          var S = g.stateNode
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              p !== null && ((S = Li(m, p)), S != null && x.push(Wi(m, S, g)))),
            w)
          )
            break
          m = m.return
        }
        0 < x.length &&
          ((h = new C(h, v, null, n, d)), f.push({ event: h, listeners: x }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (C = e === "mouseout" || e === "pointerout"),
          h &&
            n !== _c &&
            (v = n.relatedTarget || n.fromElement) &&
            (Rr(v) || v[An]))
        )
          break e
        if (
          (C || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          C
            ? ((v = n.relatedTarget || n.toElement),
              (C = u),
              (v = v ? Rr(v) : null),
              v !== null &&
                ((w = Br(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((C = null), (v = u)),
          C !== v)
        ) {
          if (
            ((x = Fp),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Dp),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (w = C == null ? h : so(C)),
            (g = v == null ? h : so(v)),
            (h = new x(S, m + "leave", C, n, d)),
            (h.target = w),
            (h.relatedTarget = g),
            (S = null),
            Rr(d) === u &&
              ((x = new x(p, m + "enter", v, n, d)),
              (x.target = g),
              (x.relatedTarget = w),
              (S = x)),
            (w = S),
            C && v)
          )
            t: {
              for (x = C, p = v, m = 0, g = x; g; g = Vr(g)) m++
              for (g = 0, S = p; S; S = Vr(S)) g++
              for (; 0 < m - g; ) (x = Vr(x)), m--
              for (; 0 < g - m; ) (p = Vr(p)), g--
              for (; m--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t
                ;(x = Vr(x)), (p = Vr(p))
              }
              x = null
            }
          else x = null
          C !== null && Jp(f, h, C, x, !1),
            v !== null && w !== null && Jp(f, w, v, x, !0)
        }
      }
      e: {
        if (
          ((h = u ? so(u) : window),
          (C = h.nodeName && h.nodeName.toLowerCase()),
          C === "select" || (C === "input" && h.type === "file"))
        )
          var k = mb
        else if (Hp(h))
          if (yv) k = xb
          else {
            k = vb
            var R = gb
          }
        else
          (C = h.nodeName) &&
            C.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = yb)
        if (k && (k = k(e, u))) {
          vv(f, k, n, d)
          break e
        }
        R && R(e, h, u),
          e === "focusout" &&
            (R = h._wrapperState) &&
            R.controlled &&
            h.type === "number" &&
            Rc(h, "number", h.value)
      }
      switch (((R = u ? so(u) : window), e)) {
        case "focusin":
          ;(Hp(R) || R.contentEditable === "true") &&
            ((oo = R), (Ac = u), (wi = null))
          break
        case "focusout":
          wi = Ac = oo = null
          break
        case "mousedown":
          zc = !0
          break
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ;(zc = !1), Qp(f, n, d)
          break
        case "selectionchange":
          if (Cb) break
        case "keydown":
        case "keyup":
          Qp(f, n, d)
      }
      var E
      if (Zd)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart"
              break e
            case "compositionend":
              P = "onCompositionEnd"
              break e
            case "compositionupdate":
              P = "onCompositionUpdate"
              break e
          }
          P = void 0
        }
      else
        ro
          ? mv(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart")
      P &&
        (hv &&
          n.locale !== "ko" &&
          (ro || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && ro && (E = pv())
            : ((Jn = d),
              (Xd = "value" in Jn ? Jn.value : Jn.textContent),
              (ro = !0))),
        (R = jl(u, P)),
        0 < R.length &&
          ((P = new Bp(P, e, null, n, d)),
          f.push({ event: P, listeners: R }),
          E ? (P.data = E) : ((E = gv(n)), E !== null && (P.data = E)))),
        (E = cb ? db(e, n) : fb(e, n)) &&
          ((u = jl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Bp("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = E)))
    }
    $v(f, t)
  })
}
function Wi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Li(e, n)),
      i != null && r.unshift(Wi(e, i, o)),
      (i = Li(e, t)),
      i != null && r.push(Wi(e, i, o))),
      (e = e.return)
  }
  return r
}
function Vr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Jp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode
    if (a !== null && a === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Li(n, i)), a != null && s.unshift(Wi(n, a, l)))
        : o || ((a = Li(n, i)), a != null && s.push(Wi(n, a, l)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var kb = /\r\n?/g,
  Pb = /\u0000|\uFFFD/g
function Zp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      kb,
      `
`
    )
    .replace(Pb, "")
}
function zs(e, t, n) {
  if (((t = Zp(t)), Zp(e) !== t && n)) throw Error(A(425))
}
function Il() {}
var Fc = null,
  Bc = null
function Dc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Uc = typeof setTimeout == "function" ? setTimeout : void 0,
  $b = typeof clearTimeout == "function" ? clearTimeout : void 0,
  eh = typeof Promise == "function" ? Promise : void 0,
  Tb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof eh < "u"
      ? function (e) {
          return eh.resolve(null).then(e).catch(_b)
        }
      : Uc
function _b(e) {
  setTimeout(function () {
    throw e
  })
}
function Uu(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Fi(t)
          return
        }
        r--
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++
    n = o
  } while (n)
  Fi(t)
}
function ir(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
      if (t === "/$") return null
    }
  }
  return e
}
function th(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var Fo = Math.random().toString(36).slice(2),
  Sn = "__reactFiber$" + Fo,
  Hi = "__reactProps$" + Fo,
  An = "__reactContainer$" + Fo,
  Wc = "__reactEvents$" + Fo,
  jb = "__reactListeners$" + Fo,
  Ib = "__reactHandles$" + Fo
function Rr(e) {
  var t = e[Sn]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[An] || n[Sn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = th(e); e !== null; ) {
          if ((n = e[Sn])) return n
          e = th(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function ps(e) {
  return (
    (e = e[Sn] || e[An]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function so(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(A(33))
}
function ga(e) {
  return e[Hi] || null
}
var Hc = [],
  lo = -1
function mr(e) {
  return { current: e }
}
function ke(e) {
  0 > lo || ((e.current = Hc[lo]), (Hc[lo] = null), lo--)
}
function we(e, t) {
  lo++, (Hc[lo] = e.current), (e.current = t)
}
var fr = {},
  ft = mr(fr),
  Ct = mr(!1),
  Ir = fr
function Eo(e, t) {
  var n = e.type.contextTypes
  if (!n) return fr
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function wt(e) {
  return (e = e.childContextTypes), e != null
}
function Ol() {
  ke(Ct), ke(ft)
}
function nh(e, t, n) {
  if (ft.current !== fr) throw Error(A(168))
  we(ft, t), we(Ct, n)
}
function _v(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(A(108, gx(e) || "Unknown", o))
  return Ne({}, n, r)
}
function Ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fr),
    (Ir = ft.current),
    we(ft, e),
    we(Ct, Ct.current),
    !0
  )
}
function rh(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(A(169))
  n
    ? ((e = _v(e, t, Ir)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ke(Ct),
      ke(ft),
      we(ft, e))
    : ke(Ct),
    we(Ct, n)
}
var Tn = null,
  va = !1,
  Wu = !1
function jv(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e)
}
function Ob(e) {
  ;(va = !0), jv(e)
}
function gr() {
  if (!Wu && Tn !== null) {
    Wu = !0
    var e = 0,
      t = ge
    try {
      var n = Tn
      for (ge = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Tn = null), (va = !1)
    } catch (o) {
      throw (Tn !== null && (Tn = Tn.slice(e + 1)), nv(Kd, gr), o)
    } finally {
      ;(ge = t), (Wu = !1)
    }
  }
  return null
}
var ao = [],
  uo = 0,
  Nl = null,
  Ll = 0,
  Wt = [],
  Ht = 0,
  Or = null,
  jn = 1,
  In = ""
function Sr(e, t) {
  ;(ao[uo++] = Ll), (ao[uo++] = Nl), (Nl = e), (Ll = t)
}
function Iv(e, t, n) {
  ;(Wt[Ht++] = jn), (Wt[Ht++] = In), (Wt[Ht++] = Or), (Or = e)
  var r = jn
  e = In
  var o = 32 - un(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - un(t) + o
  if (30 < i) {
    var s = o - (o % 5)
    ;(i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (jn = (1 << (32 - un(t) + o)) | (n << o) | r),
      (In = i + e)
  } else (jn = (1 << i) | (n << o) | r), (In = e)
}
function tf(e) {
  e.return !== null && (Sr(e, 1), Iv(e, 1, 0))
}
function nf(e) {
  for (; e === Nl; )
    (Nl = ao[--uo]), (ao[uo] = null), (Ll = ao[--uo]), (ao[uo] = null)
  for (; e === Or; )
    (Or = Wt[--Ht]),
      (Wt[Ht] = null),
      (In = Wt[--Ht]),
      (Wt[Ht] = null),
      (jn = Wt[--Ht]),
      (Wt[Ht] = null)
}
var jt = null,
  _t = null,
  _e = !1,
  ln = null
function Ov(e, t) {
  var n = Gt(5, null, null, 0)
  ;(n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function oh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (jt = e), (_t = ir(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (jt = e), (_t = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Or !== null ? { id: jn, overflow: In } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (jt = e),
            (_t = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Vc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Kc(e) {
  if (_e) {
    var t = _t
    if (t) {
      var n = t
      if (!oh(e, t)) {
        if (Vc(e)) throw Error(A(418))
        t = ir(n.nextSibling)
        var r = jt
        t && oh(e, t)
          ? Ov(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (jt = e))
      }
    } else {
      if (Vc(e)) throw Error(A(418))
      ;(e.flags = (e.flags & -4097) | 2), (_e = !1), (jt = e)
    }
  }
}
function ih(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  jt = e
}
function Fs(e) {
  if (e !== jt) return !1
  if (!_e) return ih(e), (_e = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Dc(e.type, e.memoizedProps))),
    t && (t = _t))
  ) {
    if (Vc(e)) throw (Mv(), Error(A(418)))
    for (; t; ) Ov(e, t), (t = ir(t.nextSibling))
  }
  if ((ih(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === "/$") {
            if (t === 0) {
              _t = ir(e.nextSibling)
              break e
            }
            t--
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++
        }
        e = e.nextSibling
      }
      _t = null
    }
  } else _t = jt ? ir(e.stateNode.nextSibling) : null
  return !0
}
function Mv() {
  for (var e = _t; e; ) e = ir(e.nextSibling)
}
function Ro() {
  ;(_t = jt = null), (_e = !1)
}
function rf(e) {
  ln === null ? (ln = [e]) : ln.push(e)
}
var Mb = Dn.ReactCurrentBatchConfig
function ni(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309))
        var r = n.stateNode
      }
      if (!r) throw Error(A(147, e))
      var o = r,
        i = "" + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs
            s === null ? delete l[i] : (l[i] = s)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != "string") throw Error(A(284))
    if (!n._owner) throw Error(A(290, e))
  }
  return e
}
function Bs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  )
}
function sh(e) {
  var t = e._init
  return t(e._payload)
}
function Nv(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m)
    }
  }
  function n(p, m) {
    if (!e) return null
    for (; m !== null; ) t(p, m), (m = m.sibling)
    return null
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling)
    return p
  }
  function o(p, m) {
    return (p = ur(p, m)), (p.index = 0), (p.sibling = null), p
  }
  function i(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    )
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function l(p, m, g, S) {
    return m === null || m.tag !== 6
      ? ((m = Xu(g, p.mode, S)), (m.return = p), m)
      : ((m = o(m, g)), (m.return = p), m)
  }
  function a(p, m, g, S) {
    var k = g.type
    return k === no
      ? d(p, m, g.props.children, S, g.key)
      : m !== null &&
        (m.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === qn &&
            sh(k) === m.type))
      ? ((S = o(m, g.props)), (S.ref = ni(p, m, g)), (S.return = p), S)
      : ((S = fl(g.type, g.key, g.props, null, p.mode, S)),
        (S.ref = ni(p, m, g)),
        (S.return = p),
        S)
  }
  function u(p, m, g, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = Yu(g, p.mode, S)), (m.return = p), m)
      : ((m = o(m, g.children || [])), (m.return = p), m)
  }
  function d(p, m, g, S, k) {
    return m === null || m.tag !== 7
      ? ((m = jr(g, p.mode, S, k)), (m.return = p), m)
      : ((m = o(m, g)), (m.return = p), m)
  }
  function f(p, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Xu("" + m, p.mode, g)), (m.return = p), m
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ts:
          return (
            (g = fl(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = ni(p, null, m)),
            (g.return = p),
            g
          )
        case to:
          return (m = Yu(m, p.mode, g)), (m.return = p), m
        case qn:
          var S = m._init
          return f(p, S(m._payload), g)
      }
      if (mi(m) || Yo(m)) return (m = jr(m, p.mode, g, null)), (m.return = p), m
      Bs(p, m)
    }
    return null
  }
  function h(p, m, g, S) {
    var k = m !== null ? m.key : null
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : l(p, m, "" + g, S)
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ts:
          return g.key === k ? a(p, m, g, S) : null
        case to:
          return g.key === k ? u(p, m, g, S) : null
        case qn:
          return (k = g._init), h(p, m, k(g._payload), S)
      }
      if (mi(g) || Yo(g)) return k !== null ? null : d(p, m, g, S, null)
      Bs(p, g)
    }
    return null
  }
  function C(p, m, g, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(g) || null), l(m, p, "" + S, k)
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ts:
          return (p = p.get(S.key === null ? g : S.key) || null), a(m, p, S, k)
        case to:
          return (p = p.get(S.key === null ? g : S.key) || null), u(m, p, S, k)
        case qn:
          var R = S._init
          return C(p, m, g, R(S._payload), k)
      }
      if (mi(S) || Yo(S)) return (p = p.get(g) || null), d(m, p, S, k, null)
      Bs(m, S)
    }
    return null
  }
  function v(p, m, g, S) {
    for (
      var k = null, R = null, E = m, P = (m = 0), T = null;
      E !== null && P < g.length;
      P++
    ) {
      E.index > P ? ((T = E), (E = null)) : (T = E.sibling)
      var j = h(p, E, g[P], S)
      if (j === null) {
        E === null && (E = T)
        break
      }
      e && E && j.alternate === null && t(p, E),
        (m = i(j, m, P)),
        R === null ? (k = j) : (R.sibling = j),
        (R = j),
        (E = T)
    }
    if (P === g.length) return n(p, E), _e && Sr(p, P), k
    if (E === null) {
      for (; P < g.length; P++)
        (E = f(p, g[P], S)),
          E !== null &&
            ((m = i(E, m, P)), R === null ? (k = E) : (R.sibling = E), (R = E))
      return _e && Sr(p, P), k
    }
    for (E = r(p, E); P < g.length; P++)
      (T = C(E, p, P, g[P], S)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? P : T.key),
          (m = i(T, m, P)),
          R === null ? (k = T) : (R.sibling = T),
          (R = T))
    return (
      e &&
        E.forEach(function (I) {
          return t(p, I)
        }),
      _e && Sr(p, P),
      k
    )
  }
  function x(p, m, g, S) {
    var k = Yo(g)
    if (typeof k != "function") throw Error(A(150))
    if (((g = k.call(g)), g == null)) throw Error(A(151))
    for (
      var R = (k = null), E = m, P = (m = 0), T = null, j = g.next();
      E !== null && !j.done;
      P++, j = g.next()
    ) {
      E.index > P ? ((T = E), (E = null)) : (T = E.sibling)
      var I = h(p, E, j.value, S)
      if (I === null) {
        E === null && (E = T)
        break
      }
      e && E && I.alternate === null && t(p, E),
        (m = i(I, m, P)),
        R === null ? (k = I) : (R.sibling = I),
        (R = I),
        (E = T)
    }
    if (j.done) return n(p, E), _e && Sr(p, P), k
    if (E === null) {
      for (; !j.done; P++, j = g.next())
        (j = f(p, j.value, S)),
          j !== null &&
            ((m = i(j, m, P)), R === null ? (k = j) : (R.sibling = j), (R = j))
      return _e && Sr(p, P), k
    }
    for (E = r(p, E); !j.done; P++, j = g.next())
      (j = C(E, p, P, j.value, S)),
        j !== null &&
          (e && j.alternate !== null && E.delete(j.key === null ? P : j.key),
          (m = i(j, m, P)),
          R === null ? (k = j) : (R.sibling = j),
          (R = j))
    return (
      e &&
        E.forEach(function (N) {
          return t(p, N)
        }),
      _e && Sr(p, P),
      k
    )
  }
  function w(p, m, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === no &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ts:
          e: {
            for (var k = g.key, R = m; R !== null; ) {
              if (R.key === k) {
                if (((k = g.type), k === no)) {
                  if (R.tag === 7) {
                    n(p, R.sibling),
                      (m = o(R, g.props.children)),
                      (m.return = p),
                      (p = m)
                    break e
                  }
                } else if (
                  R.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === qn &&
                    sh(k) === R.type)
                ) {
                  n(p, R.sibling),
                    (m = o(R, g.props)),
                    (m.ref = ni(p, R, g)),
                    (m.return = p),
                    (p = m)
                  break e
                }
                n(p, R)
                break
              } else t(p, R)
              R = R.sibling
            }
            g.type === no
              ? ((m = jr(g.props.children, p.mode, S, g.key)),
                (m.return = p),
                (p = m))
              : ((S = fl(g.type, g.key, g.props, null, p.mode, S)),
                (S.ref = ni(p, m, g)),
                (S.return = p),
                (p = S))
          }
          return s(p)
        case to:
          e: {
            for (R = g.key; m !== null; ) {
              if (m.key === R)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  n(p, m.sibling),
                    (m = o(m, g.children || [])),
                    (m.return = p),
                    (p = m)
                  break e
                } else {
                  n(p, m)
                  break
                }
              else t(p, m)
              m = m.sibling
            }
            ;(m = Yu(g, p.mode, S)), (m.return = p), (p = m)
          }
          return s(p)
        case qn:
          return (R = g._init), w(p, m, R(g._payload), S)
      }
      if (mi(g)) return v(p, m, g, S)
      if (Yo(g)) return x(p, m, g, S)
      Bs(p, g)
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = o(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = Xu(g, p.mode, S)), (m.return = p), (p = m)),
        s(p))
      : n(p, m)
  }
  return w
}
var ko = Nv(!0),
  Lv = Nv(!1),
  Al = mr(null),
  zl = null,
  co = null,
  of = null
function sf() {
  of = co = zl = null
}
function lf(e) {
  var t = Al.current
  ke(Al), (e._currentValue = t)
}
function Gc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function yo(e, t) {
  ;(zl = e),
    (of = co = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (St = !0), (e.firstContext = null))
}
function Qt(e) {
  var t = e._currentValue
  if (of !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), co === null)) {
      if (zl === null) throw Error(A(308))
      ;(co = e), (zl.dependencies = { lanes: 0, firstContext: e })
    } else co = co.next = e
  return t
}
var kr = null
function af(e) {
  kr === null ? (kr = [e]) : kr.push(e)
}
function Av(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), af(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zn(e, r)
  )
}
function zn(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Qn = !1
function uf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function zv(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function sr(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), ae & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zn(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), af(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zn(e, n)
  )
}
function sl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gd(e, n)
  }
}
function lh(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Fl(e, t, n, r) {
  var o = e.updateQueue
  Qn = !1
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending
  if (l !== null) {
    o.shared.pending = null
    var a = l,
      u = a.next
    ;(a.next = null), s === null ? (i = u) : (s.next = u), (s = a)
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(s = 0), (d = u = a = null), (l = i)
    do {
      var h = l.lane,
        C = l.eventTime
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: C,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            })
        e: {
          var v = e,
            x = l
          switch (((h = t), (C = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(C, f, h)
                break e
              }
              f = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(C, f, h) : v),
                h == null)
              )
                break e
              f = Ne({}, f, h)
              break e
            case 2:
              Qn = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l))
      } else
        (C = {
          eventTime: C,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = C), (a = f)) : (d = d.next = C),
          (s |= h)
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break
        ;(h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null)
      }
    } while (1)
    if (
      (d === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (s |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(Nr |= s), (e.lanes = s), (e.memoizedState = f)
  }
}
function ah(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(A(191, o))
        o.call(r)
      }
    }
}
var hs = {},
  wn = mr(hs),
  Vi = mr(hs),
  Ki = mr(hs)
function Pr(e) {
  if (e === hs) throw Error(A(174))
  return e
}
function cf(e, t) {
  switch ((we(Ki, t), we(Vi, e), we(wn, hs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pc(null, "")
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pc(t, e))
  }
  ke(wn), we(wn, t)
}
function Po() {
  ke(wn), ke(Vi), ke(Ki)
}
function Fv(e) {
  Pr(Ki.current)
  var t = Pr(wn.current),
    n = Pc(t, e.type)
  t !== n && (we(Vi, e), we(wn, n))
}
function df(e) {
  Vi.current === e && (ke(wn), ke(Vi))
}
var Oe = mr(0)
function Bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Hu = []
function ff() {
  for (var e = 0; e < Hu.length; e++) Hu[e]._workInProgressVersionPrimary = null
  Hu.length = 0
}
var ll = Dn.ReactCurrentDispatcher,
  Vu = Dn.ReactCurrentBatchConfig,
  Mr = 0,
  Me = null,
  Qe = null,
  Ze = null,
  Dl = !1,
  Ei = !1,
  Gi = 0,
  Nb = 0
function lt() {
  throw Error(A(321))
}
function pf(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!fn(e[n], t[n])) return !1
  return !0
}
function hf(e, t, n, r, o, i) {
  if (
    ((Mr = i),
    (Me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ll.current = e === null || e.memoizedState === null ? Fb : Bb),
    (e = n(r, o)),
    Ei)
  ) {
    i = 0
    do {
      if (((Ei = !1), (Gi = 0), 25 <= i)) throw Error(A(301))
      ;(i += 1),
        (Ze = Qe = null),
        (t.updateQueue = null),
        (ll.current = Db),
        (e = n(r, o))
    } while (Ei)
  }
  if (
    ((ll.current = Ul),
    (t = Qe !== null && Qe.next !== null),
    (Mr = 0),
    (Ze = Qe = Me = null),
    (Dl = !1),
    t)
  )
    throw Error(A(300))
  return e
}
function mf() {
  var e = Gi !== 0
  return (Gi = 0), e
}
function yn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Ze === null ? (Me.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze
}
function Xt() {
  if (Qe === null) {
    var e = Me.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Qe.next
  var t = Ze === null ? Me.memoizedState : Ze.next
  if (t !== null) (Ze = t), (Qe = e)
  else {
    if (e === null) throw Error(A(310))
    ;(Qe = e),
      (e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null,
      }),
      Ze === null ? (Me.memoizedState = Ze = e) : (Ze = Ze.next = e)
  }
  return Ze
}
function qi(e, t) {
  return typeof t == "function" ? t(e) : t
}
function Ku(e) {
  var t = Xt(),
    n = t.queue
  if (n === null) throw Error(A(311))
  n.lastRenderedReducer = e
  var r = Qe,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var s = o.next
      ;(o.next = i.next), (i.next = s)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var l = (s = null),
      a = null,
      u = i
    do {
      var d = u.lane
      if ((Mr & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Me.lanes |= d),
          (Nr |= d)
      }
      u = u.next
    } while (u !== null && u !== i)
    a === null ? (s = r) : (a.next = l),
      fn(r, t.memoizedState) || (St = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (Me.lanes |= i), (Nr |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Gu(e) {
  var t = Xt(),
    n = t.queue
  if (n === null) throw Error(A(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var s = (o = o.next)
    do (i = e(i, s.action)), (s = s.next)
    while (s !== o)
    fn(i, t.memoizedState) || (St = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function Bv() {}
function Dv(e, t) {
  var n = Me,
    r = Xt(),
    o = t(),
    i = !fn(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (St = !0)),
    (r = r.queue),
    gf(Hv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ze !== null && Ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qi(9, Wv.bind(null, n, r, o, t), void 0, null),
      et === null)
    )
      throw Error(A(349))
    Mr & 30 || Uv(n, t, o)
  }
  return o
}
function Uv(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Wv(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Vv(t) && Kv(e)
}
function Hv(e, t, n) {
  return n(function () {
    Vv(t) && Kv(e)
  })
}
function Vv(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !fn(e, n)
  } catch {
    return !0
  }
}
function Kv(e) {
  var t = zn(e, 1)
  t !== null && cn(t, e, 1, -1)
}
function uh(e) {
  var t = yn()
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zb.bind(null, Me, e)),
    [t.memoizedState, e]
  )
}
function Qi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Gv() {
  return Xt().memoizedState
}
function al(e, t, n, r) {
  var o = yn()
  ;(Me.flags |= e),
    (o.memoizedState = Qi(1 | t, n, void 0, r === void 0 ? null : r))
}
function ya(e, t, n, r) {
  var o = Xt()
  r = r === void 0 ? null : r
  var i = void 0
  if (Qe !== null) {
    var s = Qe.memoizedState
    if (((i = s.destroy), r !== null && pf(r, s.deps))) {
      o.memoizedState = Qi(t, n, i, r)
      return
    }
  }
  ;(Me.flags |= e), (o.memoizedState = Qi(1 | t, n, i, r))
}
function ch(e, t) {
  return al(8390656, 8, e, t)
}
function gf(e, t) {
  return ya(2048, 8, e, t)
}
function qv(e, t) {
  return ya(4, 2, e, t)
}
function Qv(e, t) {
  return ya(4, 4, e, t)
}
function Xv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Yv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ya(4, 4, Xv.bind(null, t, e), n)
  )
}
function vf() {}
function Jv(e, t) {
  var n = Xt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && pf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Zv(e, t) {
  var n = Xt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && pf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function ey(e, t, n) {
  return Mr & 21
    ? (fn(n, t) || ((n = iv()), (Me.lanes |= n), (Nr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (St = !0)), (e.memoizedState = n))
}
function Lb(e, t) {
  var n = ge
  ;(ge = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Vu.transition
  Vu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ge = n), (Vu.transition = r)
  }
}
function ty() {
  return Xt().memoizedState
}
function Ab(e, t, n) {
  var r = ar(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ny(e))
  )
    ry(t, n)
  else if (((n = Av(e, t, n, r)), n !== null)) {
    var o = mt()
    cn(n, e, r, o), oy(n, t, r)
  }
}
function zb(e, t, n) {
  var r = ar(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (ny(e)) ry(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n)
        if (((o.hasEagerState = !0), (o.eagerState = l), fn(l, s))) {
          var a = t.interleaved
          a === null
            ? ((o.next = o), af(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Av(e, t, o, r)),
      n !== null && ((o = mt()), cn(n, e, r, o), oy(n, t, r))
  }
}
function ny(e) {
  var t = e.alternate
  return e === Me || (t !== null && t === Me)
}
function ry(e, t) {
  Ei = Dl = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function oy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gd(e, n)
  }
}
var Ul = {
    readContext: Qt,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  Fb = {
    readContext: Qt,
    useCallback: function (e, t) {
      return (yn().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Qt,
    useEffect: ch,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        al(4194308, 4, Xv.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return al(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return al(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = yn()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = yn()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ab.bind(null, Me, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = yn()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: uh,
    useDebugValue: vf,
    useDeferredValue: function (e) {
      return (yn().memoizedState = e)
    },
    useTransition: function () {
      var e = uh(!1),
        t = e[0]
      return (e = Lb.bind(null, e[1])), (yn().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Me,
        o = yn()
      if (_e) {
        if (n === void 0) throw Error(A(407))
        n = n()
      } else {
        if (((n = t()), et === null)) throw Error(A(349))
        Mr & 30 || Uv(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        ch(Hv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qi(9, Wv.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = yn(),
        t = et.identifierPrefix
      if (_e) {
        var n = In,
          r = jn
        ;(n = (r & ~(1 << (32 - un(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":")
      } else (n = Nb++), (t = ":" + t + "r" + n.toString(32) + ":")
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Bb = {
    readContext: Qt,
    useCallback: Jv,
    useContext: Qt,
    useEffect: gf,
    useImperativeHandle: Yv,
    useInsertionEffect: qv,
    useLayoutEffect: Qv,
    useMemo: Zv,
    useReducer: Ku,
    useRef: Gv,
    useState: function () {
      return Ku(qi)
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = Xt()
      return ey(t, Qe.memoizedState, e)
    },
    useTransition: function () {
      var e = Ku(qi)[0],
        t = Xt().memoizedState
      return [e, t]
    },
    useMutableSource: Bv,
    useSyncExternalStore: Dv,
    useId: ty,
    unstable_isNewReconciler: !1,
  },
  Db = {
    readContext: Qt,
    useCallback: Jv,
    useContext: Qt,
    useEffect: gf,
    useImperativeHandle: Yv,
    useInsertionEffect: qv,
    useLayoutEffect: Qv,
    useMemo: Zv,
    useReducer: Gu,
    useRef: Gv,
    useState: function () {
      return Gu(qi)
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = Xt()
      return Qe === null ? (t.memoizedState = e) : ey(t, Qe.memoizedState, e)
    },
    useTransition: function () {
      var e = Gu(qi)[0],
        t = Xt().memoizedState
      return [e, t]
    },
    useMutableSource: Bv,
    useSyncExternalStore: Dv,
    useId: ty,
    unstable_isNewReconciler: !1,
  }
function on(e, t) {
  if (e && e.defaultProps) {
    ;(t = Ne({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function qc(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var xa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Br(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = mt(),
      o = ar(e),
      i = Mn(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = sr(e, i, o)),
      t !== null && (cn(t, e, o, r), sl(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = mt(),
      o = ar(e),
      i = Mn(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = sr(e, i, o)),
      t !== null && (cn(t, e, o, r), sl(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = mt(),
      r = ar(e),
      o = Mn(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = sr(e, o, r)),
      t !== null && (cn(t, e, r, n), sl(t, e, r))
  },
}
function dh(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Di(n, r) || !Di(o, i)
      : !0
  )
}
function iy(e, t, n) {
  var r = !1,
    o = fr,
    i = t.contextType
  return (
    typeof i == "object" && i !== null
      ? (i = Qt(i))
      : ((o = wt(t) ? Ir : ft.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Eo(e, o) : fr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function fh(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xa.enqueueReplaceState(t, t.state, null)
}
function Qc(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = {}), uf(e)
  var i = t.contextType
  typeof i == "object" && i !== null
    ? (o.context = Qt(i))
    : ((i = wt(t) ? Ir : ft.current), (o.context = Eo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (qc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && xa.enqueueReplaceState(o, o.state, null),
      Fl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function $o(e, t) {
  try {
    var n = "",
      r = t
    do (n += mx(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function qu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Xc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Ub = typeof WeakMap == "function" ? WeakMap : Map
function sy(e, t, n) {
  ;(n = Mn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Hl || ((Hl = !0), (sd = r)), Xc(e, t)
    }),
    n
  )
}
function ly(e, t, n) {
  ;(n = Mn(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == "function") {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Xc(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xc(e, t),
          typeof r != "function" &&
            (lr === null ? (lr = new Set([this])) : lr.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" })
      }),
    n
  )
}
function ph(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Ub()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = nS.bind(null, e, t, n)), t.then(e, e))
}
function hh(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function mh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mn(-1, 1)), (t.tag = 2), sr(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Wb = Dn.ReactCurrentOwner,
  St = !1
function ht(e, t, n, r) {
  t.child = e === null ? Lv(t, null, n, r) : ko(t, e.child, n, r)
}
function gh(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    yo(t, o),
    (r = hf(e, t, n, r, i, o)),
    (n = mf()),
    e !== null && !St
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Fn(e, t, o))
      : (_e && n && tf(t), (t.flags |= 1), ht(e, t, r, o), t.child)
  )
}
function vh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == "function" &&
      !Rf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ay(e, t, i, r, o))
      : ((e = fl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Di), n(s, r) && e.ref === t.ref)
    )
      return Fn(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = ur(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function ay(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Di(i, r) && e.ref === t.ref)
      if (((St = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (St = !0)
      else return (t.lanes = e.lanes), Fn(e, t, o)
  }
  return Yc(e, t, n, r, o)
}
function uy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(po, $t),
        ($t |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(po, $t),
          ($t |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        we(po, $t),
        ($t |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(po, $t),
      ($t |= r)
  return ht(e, t, o, n), t.child
}
function cy(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Yc(e, t, n, r, o) {
  var i = wt(n) ? Ir : ft.current
  return (
    (i = Eo(t, i)),
    yo(t, o),
    (n = hf(e, t, n, r, i, o)),
    (r = mf()),
    e !== null && !St
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Fn(e, t, o))
      : (_e && r && tf(t), (t.flags |= 1), ht(e, t, n, o), t.child)
  )
}
function yh(e, t, n, r, o) {
  if (wt(n)) {
    var i = !0
    Ml(t)
  } else i = !1
  if ((yo(t, o), t.stateNode === null))
    ul(e, t), iy(t, n, r), Qc(t, n, r, o), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps
    s.props = l
    var a = s.context,
      u = n.contextType
    typeof u == "object" && u !== null
      ? (u = Qt(u))
      : ((u = wt(n) ? Ir : ft.current), (u = Eo(t, u)))
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function"
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && fh(t, s, r, u)),
      (Qn = !1)
    var h = t.memoizedState
    ;(s.state = h),
      Fl(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || Ct.current || Qn
        ? (typeof d == "function" && (qc(t, n, d, r), (a = t.memoizedState)),
          (l = Qn || dh(t, n, l, r, h, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(s = t.stateNode),
      zv(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : on(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Qt(a))
        : ((a = wt(n) ? Ir : ft.current), (a = Eo(t, a)))
    var C = n.getDerivedStateFromProps
    ;(d =
      typeof C == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || h !== a) && fh(t, s, r, a)),
      (Qn = !1),
      (h = t.memoizedState),
      (s.state = h),
      Fl(t, r, s, o)
    var v = t.memoizedState
    l !== f || h !== v || Ct.current || Qn
      ? (typeof C == "function" && (qc(t, n, C, r), (v = t.memoizedState)),
        (u = Qn || dh(t, n, u, r, h, v, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Jc(e, t, n, r, i, o)
}
function Jc(e, t, n, r, o, i) {
  cy(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return o && rh(t, n, !1), Fn(e, t, i)
  ;(r = t.stateNode), (Wb.current = t)
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ko(t, e.child, null, i)), (t.child = ko(t, null, l, i)))
      : ht(e, t, l, i),
    (t.memoizedState = r.state),
    o && rh(t, n, !0),
    t.child
  )
}
function dy(e) {
  var t = e.stateNode
  t.pendingContext
    ? nh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nh(e, t.context, !1),
    cf(e, t.containerInfo)
}
function xh(e, t, n, r, o) {
  return Ro(), rf(o), (t.flags |= 256), ht(e, t, n, r), t.child
}
var Zc = { dehydrated: null, treeContext: null, retryLane: 0 }
function ed(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function fy(e, t, n) {
  var r = t.pendingProps,
    o = Oe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(Oe, o & 1),
    e === null)
  )
    return (
      Kc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ca(s, r, 0, null)),
              (e = jr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ed(n)),
              (t.memoizedState = Zc),
              e)
            : yf(t, s))
    )
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Hb(e, t, s, r, l, o, n)
  if (i) {
    ;(i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling)
    var a = { mode: "hidden", children: r.children }
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = ur(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = ur(l, i)) : ((i = jr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ed(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zc),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ur(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function yf(e, t) {
  return (
    (t = Ca({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Ds(e, t, n, r) {
  return (
    r !== null && rf(r),
    ko(t, e.child, null, n),
    (e = yf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Hb(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = qu(Error(A(422)))), Ds(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ca({ mode: "visible", children: r.children }, o, 0, null)),
        (i = jr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ko(t, e.child, null, s),
        (t.child.memoizedState = ed(s)),
        (t.memoizedState = Zc),
        i)
  if (!(t.mode & 1)) return Ds(e, t, s, null)
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (i = Error(A(419))), (r = qu(i, r, void 0)), Ds(e, t, s, r)
  }
  if (((l = (s & e.childLanes) !== 0), St || l)) {
    if (((r = et), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), zn(e, o), cn(r, e, o, -1))
    }
    return Ef(), (r = qu(Error(A(421)))), Ds(e, t, s, r)
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (_t = ir(o.nextSibling)),
      (jt = t),
      (_e = !0),
      (ln = null),
      e !== null &&
        ((Wt[Ht++] = jn),
        (Wt[Ht++] = In),
        (Wt[Ht++] = Or),
        (jn = e.id),
        (In = e.overflow),
        (Or = t)),
      (t = yf(t, r.children)),
      (t.flags |= 4096),
      t)
}
function bh(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Gc(e.return, t, n)
}
function Qu(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function py(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((ht(e, t, r.children, n), (r = Oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bh(e, n, t)
        else if (e.tag === 19) bh(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((we(Oe, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Bl(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Qu(t, !1, o, n, i)
        break
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Bl(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Qu(t, !0, n, null, i)
        break
      case "together":
        Qu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ul(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Fn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Nr |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(A(153))
  if (t.child !== null) {
    for (
      e = t.child, n = ur(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ur(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Vb(e, t, n) {
  switch (t.tag) {
    case 3:
      dy(t), Ro()
      break
    case 5:
      Fv(t)
      break
    case 1:
      wt(t.type) && Ml(t)
      break
    case 4:
      cf(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      we(Al, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Oe, Oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fy(e, t, n)
          : (we(Oe, Oe.current & 1),
            (e = Fn(e, t, n)),
            e !== null ? e.sibling : null)
      we(Oe, Oe.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return py(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(Oe, Oe.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), uy(e, t, n)
  }
  return Fn(e, t, n)
}
var hy, td, my, gy
hy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
td = function () {}
my = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Pr(wn.current)
    var i = null
    switch (n) {
      case "input":
        ;(o = wc(e, o)), (r = wc(e, r)), (i = [])
        break
      case "select":
        ;(o = Ne({}, o, { value: void 0 })),
          (r = Ne({}, r, { value: void 0 })),
          (i = [])
        break
      case "textarea":
        ;(o = kc(e, o)), (r = kc(e, r)), (i = [])
        break
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Il)
    }
    $c(n, r)
    var s
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u]
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""))
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""))
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]))
          } else n || (i || (i = []), i.push(u, n)), (n = a)
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Mi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && Re("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a))
    }
    n && (i = i || []).push("style", n)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
gy = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function ri(e, t) {
  if (!_e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case "collapsed":
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function at(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Kb(e, t, n) {
  var r = t.pendingProps
  switch ((nf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return at(t), null
    case 1:
      return wt(t.type) && Ol(), at(t), null
    case 3:
      return (
        (r = t.stateNode),
        Po(),
        ke(Ct),
        ke(ft),
        ff(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ln !== null && (ud(ln), (ln = null)))),
        td(e, t),
        at(t),
        null
      )
    case 5:
      df(t)
      var o = Pr(Ki.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        my(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166))
          return at(t), null
        }
        if (((e = Pr(wn.current)), Fs(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[Sn] = t), (r[Hi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Re("cancel", r), Re("close", r)
              break
            case "iframe":
            case "object":
            case "embed":
              Re("load", r)
              break
            case "video":
            case "audio":
              for (o = 0; o < vi.length; o++) Re(vi[o], r)
              break
            case "source":
              Re("error", r)
              break
            case "img":
            case "image":
            case "link":
              Re("error", r), Re("load", r)
              break
            case "details":
              Re("toggle", r)
              break
            case "input":
              Tp(r, i), Re("invalid", r)
              break
            case "select":
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                Re("invalid", r)
              break
            case "textarea":
              jp(r, i), Re("invalid", r)
          }
          $c(n, i), (o = null)
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s]
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      zs(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      zs(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Mi.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  Re("scroll", r)
            }
          switch (n) {
            case "input":
              _s(r), _p(r, i, !0)
              break
            case "textarea":
              _s(r), Ip(r)
              break
            case "select":
            case "option":
              break
            default:
              typeof i.onClick == "function" && (r.onclick = Il)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Sn] = t),
            (e[Hi] = r),
            hy(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = Tc(n, r)), n)) {
              case "dialog":
                Re("cancel", e), Re("close", e), (o = r)
                break
              case "iframe":
              case "object":
              case "embed":
                Re("load", e), (o = r)
                break
              case "video":
              case "audio":
                for (o = 0; o < vi.length; o++) Re(vi[o], e)
                o = r
                break
              case "source":
                Re("error", e), (o = r)
                break
              case "img":
              case "image":
              case "link":
                Re("error", e), Re("load", e), (o = r)
                break
              case "details":
                Re("toggle", e), (o = r)
                break
              case "input":
                Tp(e, r), (o = wc(e, r)), Re("invalid", e)
                break
              case "option":
                o = r
                break
              case "select":
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ne({}, r, { value: void 0 })),
                  Re("invalid", e)
                break
              case "textarea":
                jp(e, r), (o = kc(e, r)), Re("invalid", e)
                break
              default:
                o = r
            }
            $c(n, o), (l = o)
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i]
                i === "style"
                  ? Gg(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Vg(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ni(e, a)
                    : typeof a == "number" && Ni(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Mi.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && Re("scroll", e)
                      : a != null && Dd(e, i, a, s))
              }
            switch (n) {
              case "input":
                _s(e), _p(e, r, !1)
                break
              case "textarea":
                _s(e), Ip(e)
                break
              case "option":
                r.value != null && e.setAttribute("value", "" + dr(r.value))
                break
              case "select":
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ho(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ho(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == "function" && (e.onclick = Il)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus
                break e
              case "img":
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return at(t), null
    case 6:
      if (e && t.stateNode != null) gy(e, t, e.memoizedProps, r)
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166))
        if (((n = Pr(Ki.current)), Pr(wn.current), Fs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Sn] = t),
            (i = r.nodeValue !== n) && ((e = jt), e !== null))
          )
            switch (e.tag) {
              case 3:
                zs(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zs(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Sn] = t),
            (t.stateNode = r)
      }
      return at(t), null
    case 13:
      if (
        (ke(Oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (_e && _t !== null && t.mode & 1 && !(t.flags & 128))
          Mv(), Ro(), (t.flags |= 98560), (i = !1)
        else if (((i = Fs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317))
            i[Sn] = t
          } else
            Ro(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          at(t), (i = !1)
        } else ln !== null && (ud(ln), (ln = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Oe.current & 1 ? Xe === 0 && (Xe = 3) : Ef())),
          t.updateQueue !== null && (t.flags |= 4),
          at(t),
          null)
    case 4:
      return (
        Po(), td(e, t), e === null && Ui(t.stateNode.containerInfo), at(t), null
      )
    case 10:
      return lf(t.type._context), at(t), null
    case 17:
      return wt(t.type) && Ol(), at(t), null
    case 19:
      if ((ke(Oe), (i = t.memoizedState), i === null)) return at(t), null
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ri(i, !1)
        else {
          if (Xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ri(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return we(Oe, (Oe.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            De() > To &&
            ((t.flags |= 128), (r = !0), ri(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Bl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ri(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !_e)
            )
              return at(t), null
          } else
            2 * De() - i.renderingStartTime > To &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ri(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = De()),
          (t.sibling = null),
          (n = Oe.current),
          we(Oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (at(t), null)
    case 22:
    case 23:
      return (
        wf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $t & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : at(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(A(156, t.tag))
}
function Gb(e, t) {
  switch ((nf(t), t.tag)) {
    case 1:
      return (
        wt(t.type) && Ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Po(),
        ke(Ct),
        ke(ft),
        ff(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return df(t), null
    case 13:
      if (
        (ke(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340))
        Ro()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ke(Oe), null
    case 4:
      return Po(), null
    case 10:
      return lf(t.type._context), null
    case 22:
    case 23:
      return wf(), null
    case 24:
      return null
    default:
      return null
  }
}
var Us = !1,
  ct = !1,
  qb = typeof WeakSet == "function" ? WeakSet : Set,
  G = null
function fo(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null)
      } catch (r) {
        ze(e, t, r)
      }
    else n.current = null
}
function nd(e, t, n) {
  try {
    n()
  } catch (r) {
    ze(e, t, r)
  }
}
var Sh = !1
function Qb(e, t) {
  if (((Fc = Tl), (e = Sv()), ef(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            f = e,
            h = null
          t: for (;;) {
            for (
              var C;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (C = f.firstChild) !== null;

            )
              (h = f), (f = C)
            for (;;) {
              if (f === e) break t
              if (
                (h === n && ++u === o && (l = s),
                h === i && ++d === r && (a = s),
                (C = f.nextSibling) !== null)
              )
                break
              ;(f = h), (h = f.parentNode)
            }
            f = C
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Bc = { focusedElem: e, selectionRange: n }, Tl = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (G = e)
    else
      for (; G !== null; ) {
        t = G
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    w = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : on(t.type, x),
                      w
                    )
                  p.__reactInternalSnapshotBeforeUpdate = m
                }
                break
              case 3:
                var g = t.stateNode.containerInfo
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(A(163))
            }
        } catch (S) {
          ze(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (G = e)
          break
        }
        G = t.return
      }
  return (v = Sh), (Sh = !1), v
}
function Ri(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && nd(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function ba(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function rd(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == "function" ? t(e) : (t.current = e)
  }
}
function vy(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), vy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Sn], delete t[Hi], delete t[Wc], delete t[jb], delete t[Ib])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function yy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ch(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yy(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function od(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Il))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (od(e, t, n), e = e.sibling; e !== null; ) od(e, t, n), (e = e.sibling)
}
function id(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (id(e, t, n), e = e.sibling; e !== null; ) id(e, t, n), (e = e.sibling)
}
var rt = null,
  sn = !1
function Vn(e, t, n) {
  for (n = n.child; n !== null; ) xy(e, t, n), (n = n.sibling)
}
function xy(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == "function")
    try {
      Cn.onCommitFiberUnmount(fa, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ct || fo(n, t)
    case 6:
      var r = rt,
        o = sn
      ;(rt = null),
        Vn(e, t, n),
        (rt = r),
        (sn = o),
        rt !== null &&
          (sn
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode))
      break
    case 18:
      rt !== null &&
        (sn
          ? ((e = rt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Uu(e.parentNode, n)
              : e.nodeType === 1 && Uu(e, n),
            Fi(e))
          : Uu(rt, n.stateNode))
      break
    case 4:
      ;(r = rt),
        (o = sn),
        (rt = n.stateNode.containerInfo),
        (sn = !0),
        Vn(e, t, n),
        (rt = r),
        (sn = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ct &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            s = i.destroy
          ;(i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && nd(n, t, s),
            (o = o.next)
        } while (o !== r)
      }
      Vn(e, t, n)
      break
    case 1:
      if (
        !ct &&
        (fo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          ze(n, t, l)
        }
      Vn(e, t, n)
      break
    case 21:
      Vn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ct = (r = ct) || n.memoizedState !== null), Vn(e, t, n), (ct = r))
        : Vn(e, t, n)
      break
    default:
      Vn(e, t, n)
  }
}
function wh(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new qb()),
      t.forEach(function (r) {
        var o = oS.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function rn(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          s = t,
          l = s
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(rt = l.stateNode), (sn = !1)
              break e
            case 3:
              ;(rt = l.stateNode.containerInfo), (sn = !0)
              break e
            case 4:
              ;(rt = l.stateNode.containerInfo), (sn = !0)
              break e
          }
          l = l.return
        }
        if (rt === null) throw Error(A(160))
        xy(i, s, o), (rt = null), (sn = !1)
        var a = o.alternate
        a !== null && (a.return = null), (o.return = null)
      } catch (u) {
        ze(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) by(t, e), (t = t.sibling)
}
function by(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rn(t, e), gn(e), r & 4)) {
        try {
          Ri(3, e, e.return), ba(3, e)
        } catch (x) {
          ze(e, e.return, x)
        }
        try {
          Ri(5, e, e.return)
        } catch (x) {
          ze(e, e.return, x)
        }
      }
      break
    case 1:
      rn(t, e), gn(e), r & 512 && n !== null && fo(n, n.return)
      break
    case 5:
      if (
        (rn(t, e),
        gn(e),
        r & 512 && n !== null && fo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Ni(o, "")
        } catch (x) {
          ze(e, e.return, x)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Ug(o, i),
              Tc(l, s)
            var u = Tc(l, i)
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                f = a[s + 1]
              d === "style"
                ? Gg(o, f)
                : d === "dangerouslySetInnerHTML"
                ? Vg(o, f)
                : d === "children"
                ? Ni(o, f)
                : Dd(o, d, f, u)
            }
            switch (l) {
              case "input":
                Ec(o, i)
                break
              case "textarea":
                Wg(o, i)
                break
              case "select":
                var h = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var C = i.value
                C != null
                  ? ho(o, !!i.multiple, C, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ho(o, !!i.multiple, i.defaultValue, !0)
                      : ho(o, !!i.multiple, i.multiple ? [] : "", !1))
            }
            o[Hi] = i
          } catch (x) {
            ze(e, e.return, x)
          }
      }
      break
    case 6:
      if ((rn(t, e), gn(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (x) {
          ze(e, e.return, x)
        }
      }
      break
    case 3:
      if (
        (rn(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fi(t.containerInfo)
        } catch (x) {
          ze(e, e.return, x)
        }
      break
    case 4:
      rn(t, e), gn(e)
      break
    case 13:
      rn(t, e),
        gn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Sf = De())),
        r & 4 && wh(e)
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ct = (u = ct) || d), rn(t, e), (ct = u)) : rn(t, e),
        gn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (G = e, d = e.child; d !== null; ) {
            for (f = G = d; G !== null; ) {
              switch (((h = G), (C = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ri(4, h, h.return)
                  break
                case 1:
                  fo(h, h.return)
                  var v = h.stateNode
                  if (typeof v.componentWillUnmount == "function") {
                    ;(r = h), (n = h.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (x) {
                      ze(r, n, x)
                    }
                  }
                  break
                case 5:
                  fo(h, h.return)
                  break
                case 22:
                  if (h.memoizedState !== null) {
                    Rh(f)
                    continue
                  }
              }
              C !== null ? ((C.return = h), (G = C)) : Rh(f)
            }
            d = d.sibling
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f
              try {
                ;(o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Kg("display", s)))
              } catch (x) {
                ze(e, e.return, x)
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps
              } catch (x) {
                ze(e, e.return, x)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            d === f && (d = null), (f = f.return)
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      rn(t, e), gn(e), r & 4 && wh(e)
      break
    case 21:
      break
    default:
      rn(t, e), gn(e)
  }
}
function gn(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yy(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(A(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Ni(o, ""), (r.flags &= -33))
          var i = Ch(e)
          id(e, i, o)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Ch(e)
          od(e, l, s)
          break
        default:
          throw Error(A(161))
      }
    } catch (a) {
      ze(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Xb(e, t, n) {
  ;(G = e), Sy(e)
}
function Sy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G,
      i = o.child
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Us
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || ct
        l = Us
        var u = ct
        if (((Us = s), (ct = a) && !u))
          for (G = o; G !== null; )
            (s = G),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? kh(o)
                : a !== null
                ? ((a.return = s), (G = a))
                : kh(o)
        for (; i !== null; ) (G = i), Sy(i), (i = i.sibling)
        ;(G = o), (Us = l), (ct = u)
      }
      Eh(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (G = i)) : Eh(e)
  }
}
function Eh(e) {
  for (; G !== null; ) {
    var t = G
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ct || ba(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ct)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : on(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && ah(t, i, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                ah(t, s, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var a = t.memoizedProps
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus()
                    break
                  case "img":
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var d = u.memoizedState
                  if (d !== null) {
                    var f = d.dehydrated
                    f !== null && Fi(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(A(163))
          }
        ct || (t.flags & 512 && rd(t))
      } catch (h) {
        ze(t, t.return, h)
      }
    }
    if (t === e) {
      G = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (G = n)
      break
    }
    G = t.return
  }
}
function Rh(e) {
  for (; G !== null; ) {
    var t = G
    if (t === e) {
      G = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (G = n)
      break
    }
    G = t.return
  }
}
function kh(e) {
  for (; G !== null; ) {
    var t = G
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ba(4, t)
          } catch (a) {
            ze(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == "function") {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              ze(t, o, a)
            }
          }
          var i = t.return
          try {
            rd(t)
          } catch (a) {
            ze(t, i, a)
          }
          break
        case 5:
          var s = t.return
          try {
            rd(t)
          } catch (a) {
            ze(t, s, a)
          }
      }
    } catch (a) {
      ze(t, t.return, a)
    }
    if (t === e) {
      G = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (G = l)
      break
    }
    G = t.return
  }
}
var Yb = Math.ceil,
  Wl = Dn.ReactCurrentDispatcher,
  xf = Dn.ReactCurrentOwner,
  qt = Dn.ReactCurrentBatchConfig,
  ae = 0,
  et = null,
  Ve = null,
  it = 0,
  $t = 0,
  po = mr(0),
  Xe = 0,
  Xi = null,
  Nr = 0,
  Sa = 0,
  bf = 0,
  ki = null,
  bt = null,
  Sf = 0,
  To = 1 / 0,
  $n = null,
  Hl = !1,
  sd = null,
  lr = null,
  Ws = !1,
  Zn = null,
  Vl = 0,
  Pi = 0,
  ld = null,
  cl = -1,
  dl = 0
function mt() {
  return ae & 6 ? De() : cl !== -1 ? cl : (cl = De())
}
function ar(e) {
  return e.mode & 1
    ? ae & 2 && it !== 0
      ? it & -it
      : Mb.transition !== null
      ? (dl === 0 && (dl = iv()), dl)
      : ((e = ge),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fv(e.type))),
        e)
    : 1
}
function cn(e, t, n, r) {
  if (50 < Pi) throw ((Pi = 0), (ld = null), Error(A(185)))
  ds(e, n, r),
    (!(ae & 2) || e !== et) &&
      (e === et && (!(ae & 2) && (Sa |= n), Xe === 4 && Yn(e, it)),
      Et(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((To = De() + 500), va && gr()))
}
function Et(e, t) {
  var n = e.callbackNode
  Mx(e, t)
  var r = $l(e, e === et ? it : 0)
  if (r === 0)
    n !== null && Np(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Np(n), t === 1))
      e.tag === 0 ? Ob(Ph.bind(null, e)) : jv(Ph.bind(null, e)),
        Tb(function () {
          !(ae & 6) && gr()
        }),
        (n = null)
    else {
      switch (sv(r)) {
        case 1:
          n = Kd
          break
        case 4:
          n = rv
          break
        case 16:
          n = Pl
          break
        case 536870912:
          n = ov
          break
        default:
          n = Pl
      }
      n = Ty(n, Cy.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Cy(e, t) {
  if (((cl = -1), (dl = 0), ae & 6)) throw Error(A(327))
  var n = e.callbackNode
  if (xo() && e.callbackNode !== n) return null
  var r = $l(e, e === et ? it : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Kl(e, r)
  else {
    t = r
    var o = ae
    ae |= 2
    var i = Ey()
    ;(et !== e || it !== t) && (($n = null), (To = De() + 500), _r(e, t))
    do
      try {
        eS()
        break
      } catch (l) {
        wy(e, l)
      }
    while (1)
    sf(),
      (Wl.current = i),
      (ae = o),
      Ve !== null ? (t = 0) : ((et = null), (it = 0), (t = Xe))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Mc(e)), o !== 0 && ((r = o), (t = ad(e, o)))), t === 1)
    )
      throw ((n = Xi), _r(e, 0), Yn(e, r), Et(e, De()), n)
    if (t === 6) Yn(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Jb(o) &&
          ((t = Kl(e, r)),
          t === 2 && ((i = Mc(e)), i !== 0 && ((r = i), (t = ad(e, i)))),
          t === 1))
      )
        throw ((n = Xi), _r(e, 0), Yn(e, r), Et(e, De()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345))
        case 2:
          Cr(e, bt, $n)
          break
        case 3:
          if (
            (Yn(e, r), (r & 130023424) === r && ((t = Sf + 500 - De()), 10 < t))
          ) {
            if ($l(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              mt(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Uc(Cr.bind(null, e, bt, $n), t)
            break
          }
          Cr(e, bt, $n)
          break
        case 4:
          if ((Yn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - un(r)
            ;(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i)
          }
          if (
            ((r = o),
            (r = De() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Yb(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Uc(Cr.bind(null, e, bt, $n), r)
            break
          }
          Cr(e, bt, $n)
          break
        case 5:
          Cr(e, bt, $n)
          break
        default:
          throw Error(A(329))
      }
    }
  }
  return Et(e, De()), e.callbackNode === n ? Cy.bind(null, e) : null
}
function ad(e, t) {
  var n = ki
  return (
    e.current.memoizedState.isDehydrated && (_r(e, t).flags |= 256),
    (e = Kl(e, t)),
    e !== 2 && ((t = bt), (bt = n), t !== null && ud(t)),
    e
  )
}
function ud(e) {
  bt === null ? (bt = e) : bt.push.apply(bt, e)
}
function Jb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!fn(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Yn(e, t) {
  for (
    t &= ~bf,
      t &= ~Sa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - un(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Ph(e) {
  if (ae & 6) throw Error(A(327))
  xo()
  var t = $l(e, 0)
  if (!(t & 1)) return Et(e, De()), null
  var n = Kl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Mc(e)
    r !== 0 && ((t = r), (n = ad(e, r)))
  }
  if (n === 1) throw ((n = Xi), _r(e, 0), Yn(e, t), Et(e, De()), n)
  if (n === 6) throw Error(A(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Cr(e, bt, $n),
    Et(e, De()),
    null
  )
}
function Cf(e, t) {
  var n = ae
  ae |= 1
  try {
    return e(t)
  } finally {
    ;(ae = n), ae === 0 && ((To = De() + 500), va && gr())
  }
}
function Lr(e) {
  Zn !== null && Zn.tag === 0 && !(ae & 6) && xo()
  var t = ae
  ae |= 1
  var n = qt.transition,
    r = ge
  try {
    if (((qt.transition = null), (ge = 1), e)) return e()
  } finally {
    ;(ge = r), (qt.transition = n), (ae = t), !(ae & 6) && gr()
  }
}
function wf() {
  ;($t = po.current), ke(po)
}
function _r(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), $b(n)), Ve !== null))
    for (n = Ve.return; n !== null; ) {
      var r = n
      switch ((nf(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Ol()
          break
        case 3:
          Po(), ke(Ct), ke(ft), ff()
          break
        case 5:
          df(r)
          break
        case 4:
          Po()
          break
        case 13:
          ke(Oe)
          break
        case 19:
          ke(Oe)
          break
        case 10:
          lf(r.type._context)
          break
        case 22:
        case 23:
          wf()
      }
      n = n.return
    }
  if (
    ((et = e),
    (Ve = e = ur(e.current, null)),
    (it = $t = t),
    (Xe = 0),
    (Xi = null),
    (bf = Sa = Nr = 0),
    (bt = ki = null),
    kr !== null)
  ) {
    for (t = 0; t < kr.length; t++)
      if (((n = kr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var s = i.next
          ;(i.next = o), (r.next = s)
        }
        n.pending = r
      }
    kr = null
  }
  return e
}
function wy(e, t) {
  do {
    var n = Ve
    try {
      if ((sf(), (ll.current = Ul), Dl)) {
        for (var r = Me.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Dl = !1
      }
      if (
        ((Mr = 0),
        (Ze = Qe = Me = null),
        (Ei = !1),
        (Gi = 0),
        (xf.current = null),
        n === null || n.return === null)
      ) {
        ;(Xe = 1), (Xi = t), (Ve = null)
        break
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t
        if (
          ((t = it),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            f = d.tag
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var C = hh(s)
          if (C !== null) {
            ;(C.flags &= -257),
              mh(C, s, l, i, t),
              C.mode & 1 && ph(i, u, t),
              (t = C),
              (a = u)
            var v = t.updateQueue
            if (v === null) {
              var x = new Set()
              x.add(a), (t.updateQueue = x)
            } else v.add(a)
            break e
          } else {
            if (!(t & 1)) {
              ph(i, u, t), Ef()
              break e
            }
            a = Error(A(426))
          }
        } else if (_e && l.mode & 1) {
          var w = hh(s)
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              mh(w, s, l, i, t),
              rf($o(a, l))
            break e
          }
        }
        ;(i = a = $o(a, l)),
          Xe !== 4 && (Xe = 2),
          ki === null ? (ki = [i]) : ki.push(i),
          (i = s)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var p = sy(i, a, t)
              lh(i, p)
              break e
            case 1:
              l = a
              var m = i.type,
                g = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (lr === null || !lr.has(g))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var S = ly(i, l, t)
                lh(i, S)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      ky(n)
    } catch (k) {
      ;(t = k), Ve === n && n !== null && (Ve = n = n.return)
      continue
    }
    break
  } while (1)
}
function Ey() {
  var e = Wl.current
  return (Wl.current = Ul), e === null ? Ul : e
}
function Ef() {
  ;(Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
    et === null || (!(Nr & 268435455) && !(Sa & 268435455)) || Yn(et, it)
}
function Kl(e, t) {
  var n = ae
  ae |= 2
  var r = Ey()
  ;(et !== e || it !== t) && (($n = null), _r(e, t))
  do
    try {
      Zb()
      break
    } catch (o) {
      wy(e, o)
    }
  while (1)
  if ((sf(), (ae = n), (Wl.current = r), Ve !== null)) throw Error(A(261))
  return (et = null), (it = 0), Xe
}
function Zb() {
  for (; Ve !== null; ) Ry(Ve)
}
function eS() {
  for (; Ve !== null && !Rx(); ) Ry(Ve)
}
function Ry(e) {
  var t = $y(e.alternate, e, $t)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? ky(e) : (Ve = t),
    (xf.current = null)
}
function ky(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gb(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Ve = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Xe = 6), (Ve = null)
        return
      }
    } else if (((n = Kb(n, t, $t)), n !== null)) {
      Ve = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ve = t
      return
    }
    Ve = t = e
  } while (t !== null)
  Xe === 0 && (Xe = 5)
}
function Cr(e, t, n) {
  var r = ge,
    o = qt.transition
  try {
    ;(qt.transition = null), (ge = 1), tS(e, t, n, r)
  } finally {
    ;(qt.transition = o), (ge = r)
  }
  return null
}
function tS(e, t, n, r) {
  do xo()
  while (Zn !== null)
  if (ae & 6) throw Error(A(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (Nx(e, i),
    e === et && ((Ve = et = null), (it = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ws ||
      ((Ws = !0),
      Ty(Pl, function () {
        return xo(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = qt.transition), (qt.transition = null)
    var s = ge
    ge = 1
    var l = ae
    ;(ae |= 4),
      (xf.current = null),
      Qb(e, n),
      by(n, e),
      Sb(Bc),
      (Tl = !!Fc),
      (Bc = Fc = null),
      (e.current = n),
      Xb(n),
      kx(),
      (ae = l),
      (ge = s),
      (qt.transition = i)
  } else e.current = n
  if (
    (Ws && ((Ws = !1), (Zn = e), (Vl = o)),
    (i = e.pendingLanes),
    i === 0 && (lr = null),
    Tx(n.stateNode),
    Et(e, De()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Hl) throw ((Hl = !1), (e = sd), (sd = null), e)
  return (
    Vl & 1 && e.tag !== 0 && xo(),
    (i = e.pendingLanes),
    i & 1 ? (e === ld ? Pi++ : ((Pi = 0), (ld = e))) : (Pi = 0),
    gr(),
    null
  )
}
function xo() {
  if (Zn !== null) {
    var e = sv(Vl),
      t = qt.transition,
      n = ge
    try {
      if (((qt.transition = null), (ge = 16 > e ? 16 : e), Zn === null))
        var r = !1
      else {
        if (((e = Zn), (Zn = null), (Vl = 0), ae & 6)) throw Error(A(331))
        var o = ae
        for (ae |= 4, G = e.current; G !== null; ) {
          var i = G,
            s = i.child
          if (G.flags & 16) {
            var l = i.deletions
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a]
                for (G = u; G !== null; ) {
                  var d = G
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(8, d, i)
                  }
                  var f = d.child
                  if (f !== null) (f.return = d), (G = f)
                  else
                    for (; G !== null; ) {
                      d = G
                      var h = d.sibling,
                        C = d.return
                      if ((vy(d), d === u)) {
                        G = null
                        break
                      }
                      if (h !== null) {
                        ;(h.return = C), (G = h)
                        break
                      }
                      G = C
                    }
                }
              }
              var v = i.alternate
              if (v !== null) {
                var x = v.child
                if (x !== null) {
                  v.child = null
                  do {
                    var w = x.sibling
                    ;(x.sibling = null), (x = w)
                  } while (x !== null)
                }
              }
              G = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (G = s)
          else
            e: for (; G !== null; ) {
              if (((i = G), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ri(9, i, i.return)
                }
              var p = i.sibling
              if (p !== null) {
                ;(p.return = i.return), (G = p)
                break e
              }
              G = i.return
            }
        }
        var m = e.current
        for (G = m; G !== null; ) {
          s = G
          var g = s.child
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (G = g)
          else
            e: for (s = m; G !== null; ) {
              if (((l = G), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ba(9, l)
                  }
                } catch (k) {
                  ze(l, l.return, k)
                }
              if (l === s) {
                G = null
                break e
              }
              var S = l.sibling
              if (S !== null) {
                ;(S.return = l.return), (G = S)
                break e
              }
              G = l.return
            }
        }
        if (
          ((ae = o), gr(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
        )
          try {
            Cn.onPostCommitFiberRoot(fa, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(ge = n), (qt.transition = t)
    }
  }
  return !1
}
function $h(e, t, n) {
  ;(t = $o(n, t)),
    (t = sy(e, t, 1)),
    (e = sr(e, t, 1)),
    (t = mt()),
    e !== null && (ds(e, 1, t), Et(e, t))
}
function ze(e, t, n) {
  if (e.tag === 3) $h(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $h(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (lr === null || !lr.has(r)))
        ) {
          ;(e = $o(n, e)),
            (e = ly(t, e, 1)),
            (t = sr(t, e, 1)),
            (e = mt()),
            t !== null && (ds(t, 1, e), Et(t, e))
          break
        }
      }
      t = t.return
    }
}
function nS(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = mt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (it & n) === n &&
      (Xe === 4 || (Xe === 3 && (it & 130023424) === it && 500 > De() - Sf)
        ? _r(e, 0)
        : (bf |= n)),
    Et(e, t)
}
function Py(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Os), (Os <<= 1), !(Os & 130023424) && (Os = 4194304))
      : (t = 1))
  var n = mt()
  ;(e = zn(e, t)), e !== null && (ds(e, t, n), Et(e, n))
}
function rS(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Py(e, n)
}
function oS(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(A(314))
  }
  r !== null && r.delete(t), Py(e, n)
}
var $y
$y = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ct.current) St = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (St = !1), Vb(e, t, n)
      St = !!(e.flags & 131072)
    }
  else (St = !1), _e && t.flags & 1048576 && Iv(t, Ll, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ul(e, t), (e = t.pendingProps)
      var o = Eo(t, ft.current)
      yo(t, n), (o = hf(null, t, r, e, o, n))
      var i = mf()
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            wt(r) ? ((i = !0), Ml(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            uf(t),
            (o.updater = xa),
            (t.stateNode = o),
            (o._reactInternals = t),
            Qc(t, r, e, n),
            (t = Jc(null, t, r, !0, i, n)))
          : ((t.tag = 0), _e && i && tf(t), ht(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (ul(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = sS(r)),
          (e = on(r, e)),
          o)
        ) {
          case 0:
            t = Yc(null, t, r, e, n)
            break e
          case 1:
            t = yh(null, t, r, e, n)
            break e
          case 11:
            t = gh(null, t, r, e, n)
            break e
          case 14:
            t = vh(null, t, r, on(r.type, e), n)
            break e
        }
        throw Error(A(306, r, ""))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : on(r, o)),
        Yc(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : on(r, o)),
        yh(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((dy(t), e === null)) throw Error(A(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          zv(e, t),
          Fl(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = $o(Error(A(423)), t)), (t = xh(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = $o(Error(A(424)), t)), (t = xh(e, t, r, n, o))
            break e
          } else
            for (
              _t = ir(t.stateNode.containerInfo.firstChild),
                jt = t,
                _e = !0,
                ln = null,
                n = Lv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Ro(), r === o)) {
            t = Fn(e, t, n)
            break e
          }
          ht(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Fv(t),
        e === null && Kc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Dc(r, o) ? (s = null) : i !== null && Dc(r, i) && (t.flags |= 32),
        cy(e, t),
        ht(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && Kc(t), null
    case 13:
      return fy(e, t, n)
    case 4:
      return (
        cf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ko(t, null, r, n)) : ht(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : on(r, o)),
        gh(e, t, r, o, n)
      )
    case 7:
      return ht(e, t, t.pendingProps, n), t.child
    case 8:
      return ht(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ht(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          we(Al, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (fn(i.value, s)) {
            if (i.children === o.children && !Ct.current) {
              t = Fn(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies
              if (l !== null) {
                s = i.child
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ;(a = Mn(-1, n & -n)), (a.tag = 2)
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var d = u.pending
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a)
                      }
                    }
                    ;(i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Gc(i.return, n, t),
                      (l.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(A(341))
                ;(s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Gc(s, n, t),
                  (s = i.sibling)
              } else s = i.child
              if (s !== null) s.return = i
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((i = s.sibling), i !== null)) {
                    ;(i.return = s.return), (s = i)
                    break
                  }
                  s = s.return
                }
              i = s
            }
        ht(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        yo(t, n),
        (o = Qt(o)),
        (r = r(o)),
        (t.flags |= 1),
        ht(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = on(r, t.pendingProps)),
        (o = on(r.type, o)),
        vh(e, t, r, o, n)
      )
    case 15:
      return ay(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : on(r, o)),
        ul(e, t),
        (t.tag = 1),
        wt(r) ? ((e = !0), Ml(t)) : (e = !1),
        yo(t, n),
        iy(t, r, o),
        Qc(t, r, o, n),
        Jc(null, t, r, !0, e, n)
      )
    case 19:
      return py(e, t, n)
    case 22:
      return uy(e, t, n)
  }
  throw Error(A(156, t.tag))
}
function Ty(e, t) {
  return nv(e, t)
}
function iS(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Gt(e, t, n, r) {
  return new iS(e, t, n, r)
}
function Rf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function sS(e) {
  if (typeof e == "function") return Rf(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Wd)) return 11
    if (e === Hd) return 14
  }
  return 2
}
function ur(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function fl(e, t, n, r, o, i) {
  var s = 2
  if (((r = e), typeof e == "function")) Rf(e) && (s = 1)
  else if (typeof e == "string") s = 5
  else
    e: switch (e) {
      case no:
        return jr(n.children, o, i, t)
      case Ud:
        ;(s = 8), (o |= 8)
        break
      case xc:
        return (e = Gt(12, n, t, o | 2)), (e.elementType = xc), (e.lanes = i), e
      case bc:
        return (e = Gt(13, n, t, o)), (e.elementType = bc), (e.lanes = i), e
      case Sc:
        return (e = Gt(19, n, t, o)), (e.elementType = Sc), (e.lanes = i), e
      case Fg:
        return Ca(n, o, i, t)
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ag:
              s = 10
              break e
            case zg:
              s = 9
              break e
            case Wd:
              s = 11
              break e
            case Hd:
              s = 14
              break e
            case qn:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(A(130, e == null ? e : typeof e, ""))
    }
  return (
    (t = Gt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function jr(e, t, n, r) {
  return (e = Gt(7, e, r, t)), (e.lanes = n), e
}
function Ca(e, t, n, r) {
  return (
    (e = Gt(22, e, r, t)),
    (e.elementType = Fg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Xu(e, t, n) {
  return (e = Gt(6, e, null, t)), (e.lanes = n), e
}
function Yu(e, t, n) {
  return (
    (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function lS(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ju(0)),
    (this.expirationTimes = ju(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ju(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function kf(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new lS(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Gt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uf(i),
    e
  )
}
function aS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: to,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function _y(e) {
  if (!e) return fr
  e = e._reactInternals
  e: {
    if (Br(e) !== e || e.tag !== 1) throw Error(A(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (wt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(A(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (wt(n)) return _v(e, n, t)
  }
  return t
}
function jy(e, t, n, r, o, i, s, l, a) {
  return (
    (e = kf(n, r, !0, e, o, i, s, l, a)),
    (e.context = _y(null)),
    (n = e.current),
    (r = mt()),
    (o = ar(n)),
    (i = Mn(r, o)),
    (i.callback = t ?? null),
    sr(n, i, o),
    (e.current.lanes = o),
    ds(e, o, r),
    Et(e, r),
    e
  )
}
function wa(e, t, n, r) {
  var o = t.current,
    i = mt(),
    s = ar(o)
  return (
    (n = _y(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sr(o, t, s)),
    e !== null && (cn(e, o, s, i), sl(e, o, s)),
    s
  )
}
function Gl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Th(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Pf(e, t) {
  Th(e, t), (e = e.alternate) && Th(e, t)
}
function uS() {
  return null
}
var Iy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e)
      }
function $f(e) {
  this._internalRoot = e
}
Ea.prototype.render = $f.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(A(409))
  wa(e, t, null, null)
}
Ea.prototype.unmount = $f.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Lr(function () {
      wa(null, e, null, null)
    }),
      (t[An] = null)
  }
}
function Ea(e) {
  this._internalRoot = e
}
Ea.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uv()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Xn.length && t !== 0 && t < Xn[n].priority; n++);
    Xn.splice(n, 0, e), n === 0 && dv(e)
  }
}
function Tf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ra(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  )
}
function _h() {}
function cS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r
      r = function () {
        var u = Gl(s)
        i.call(u)
      }
    }
    var s = jy(t, r, e, 0, null, !1, !1, "", _h)
    return (
      (e._reactRootContainer = s),
      (e[An] = s.current),
      Ui(e.nodeType === 8 ? e.parentNode : e),
      Lr(),
      s
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == "function") {
    var l = r
    r = function () {
      var u = Gl(a)
      l.call(u)
    }
  }
  var a = kf(e, 0, !1, null, null, !1, !1, "", _h)
  return (
    (e._reactRootContainer = a),
    (e[An] = a.current),
    Ui(e.nodeType === 8 ? e.parentNode : e),
    Lr(function () {
      wa(t, a, n, r)
    }),
    a
  )
}
function ka(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var s = i
    if (typeof o == "function") {
      var l = o
      o = function () {
        var a = Gl(s)
        l.call(a)
      }
    }
    wa(t, s, e, o)
  } else s = cS(n, t, e, o, r)
  return Gl(s)
}
lv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = gi(t.pendingLanes)
        n !== 0 &&
          (Gd(t, n | 1), Et(t, De()), !(ae & 6) && ((To = De() + 500), gr()))
      }
      break
    case 13:
      Lr(function () {
        var r = zn(e, 1)
        if (r !== null) {
          var o = mt()
          cn(r, e, 1, o)
        }
      }),
        Pf(e, 1)
  }
}
qd = function (e) {
  if (e.tag === 13) {
    var t = zn(e, 134217728)
    if (t !== null) {
      var n = mt()
      cn(t, e, 134217728, n)
    }
    Pf(e, 134217728)
  }
}
av = function (e) {
  if (e.tag === 13) {
    var t = ar(e),
      n = zn(e, t)
    if (n !== null) {
      var r = mt()
      cn(n, e, t, r)
    }
    Pf(e, t)
  }
}
uv = function () {
  return ge
}
cv = function (e, t) {
  var n = ge
  try {
    return (ge = e), t()
  } finally {
    ge = n
  }
}
jc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ec(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = ga(r)
            if (!o) throw Error(A(90))
            Dg(r), Ec(r, o)
          }
        }
      }
      break
    case "textarea":
      Wg(e, n)
      break
    case "select":
      ;(t = n.value), t != null && ho(e, !!n.multiple, t, !1)
  }
}
Xg = Cf
Yg = Lr
var dS = { usingClientEntryPoint: !1, Events: [ps, so, ga, qg, Qg, Cf] },
  oi = {
    findFiberByHostInstance: Rr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  fS = {
    bundleType: oi.bundleType,
    version: oi.version,
    rendererPackageName: oi.rendererPackageName,
    rendererConfig: oi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ev(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: oi.findFiberByHostInstance || uS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Hs.isDisabled && Hs.supportsFiber)
    try {
      ;(fa = Hs.inject(fS)), (Cn = Hs)
    } catch {}
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dS
Nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Tf(t)) throw Error(A(200))
  return aS(e, t, null, n)
}
Nt.createRoot = function (e, t) {
  if (!Tf(e)) throw Error(A(299))
  var n = !1,
    r = "",
    o = Iy
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = kf(e, 1, !1, null, null, n, !1, r, o)),
    (e[An] = t.current),
    Ui(e.nodeType === 8 ? e.parentNode : e),
    new $f(t)
  )
}
Nt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)))
  return (e = ev(t)), (e = e === null ? null : e.stateNode), e
}
Nt.flushSync = function (e) {
  return Lr(e)
}
Nt.hydrate = function (e, t, n) {
  if (!Ra(t)) throw Error(A(200))
  return ka(null, e, t, !0, n)
}
Nt.hydrateRoot = function (e, t, n) {
  if (!Tf(e)) throw Error(A(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Iy
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = jy(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[An] = t.current),
    Ui(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Ea(t)
}
Nt.render = function (e, t, n) {
  if (!Ra(t)) throw Error(A(200))
  return ka(null, e, t, !1, n)
}
Nt.unmountComponentAtNode = function (e) {
  if (!Ra(e)) throw Error(A(40))
  return e._reactRootContainer
    ? (Lr(function () {
        ka(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[An] = null)
        })
      }),
      !0)
    : !1
}
Nt.unstable_batchedUpdates = Cf
Nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ra(n)) throw Error(A(200))
  if (e == null || e._reactInternals === void 0) throw Error(A(38))
  return ka(e, t, n, !1, r)
}
Nt.version = "18.3.1-next-f1338f8080-20240426"
function Oy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oy)
    } catch (e) {
      console.error(e)
    }
}
Oy(), (Og.exports = Nt)
var _f = Og.exports
const Vs = Sg(_f)
var jh = _f
;(vc.createRoot = jh.createRoot), (vc.hydrateRoot = jh.hydrateRoot)
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Yi.apply(this, arguments)
  )
}
var er
;(function (e) {
  ;(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE")
})(er || (er = {}))
const Ih = "popstate"
function pS(e) {
  e === void 0 && (e = {})
  function t(o, i) {
    let {
      pathname: s = "/",
      search: l = "",
      hash: a = "",
    } = Dr(o.location.hash.substr(1))
    return (
      !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
      cd(
        "",
        { pathname: s, search: l, hash: a },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    )
  }
  function n(o, i) {
    let s = o.document.querySelector("base"),
      l = ""
    if (s && s.getAttribute("href")) {
      let a = o.location.href,
        u = a.indexOf("#")
      l = u === -1 ? a : a.slice(0, u)
    }
    return l + "#" + (typeof i == "string" ? i : ql(i))
  }
  function r(o, i) {
    jf(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    )
  }
  return mS(t, n, r, e)
}
function Ke(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}
function jf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function hS() {
  return Math.random().toString(36).substr(2, 8)
}
function Oh(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function cd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Yi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dr(t) : t,
      { state: n, key: (t && t.key) || r || hS() }
    )
  )
}
function ql(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  )
}
function Dr(e) {
  let t = {}
  if (e) {
    let n = e.indexOf("#")
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf("?")
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function mS(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = er.Pop,
    a = null,
    u = d()
  u == null && ((u = 0), s.replaceState(Yi({}, s.state, { idx: u }), ""))
  function d() {
    return (s.state || { idx: null }).idx
  }
  function f() {
    l = er.Pop
    let w = d(),
      p = w == null ? null : w - u
    ;(u = w), a && a({ action: l, location: x.location, delta: p })
  }
  function h(w, p) {
    l = er.Push
    let m = cd(x.location, w, p)
    n && n(m, w), (u = d() + 1)
    let g = Oh(m, u),
      S = x.createHref(m)
    try {
      s.pushState(g, "", S)
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k
      o.location.assign(S)
    }
    i && a && a({ action: l, location: x.location, delta: 1 })
  }
  function C(w, p) {
    l = er.Replace
    let m = cd(x.location, w, p)
    n && n(m, w), (u = d())
    let g = Oh(m, u),
      S = x.createHref(m)
    s.replaceState(g, "", S),
      i && a && a({ action: l, location: x.location, delta: 0 })
  }
  function v(w) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof w == "string" ? w : ql(w)
    return (
      (m = m.replace(/ $/, "%20")),
      Ke(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, p)
    )
  }
  let x = {
    get action() {
      return l
    },
    get location() {
      return e(o, s)
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener")
      return (
        o.addEventListener(Ih, f),
        (a = w),
        () => {
          o.removeEventListener(Ih, f), (a = null)
        }
      )
    },
    createHref(w) {
      return t(o, w)
    },
    createURL: v,
    encodeLocation(w) {
      let p = v(w)
      return { pathname: p.pathname, search: p.search, hash: p.hash }
    },
    push: h,
    replace: C,
    go(w) {
      return s.go(w)
    },
  }
  return x
}
var Mh
;(function (e) {
  ;(e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error")
})(Mh || (Mh = {}))
function gS(e, t, n) {
  return n === void 0 && (n = "/"), vS(e, t, n, !1)
}
function vS(e, t, n, r) {
  let o = typeof t == "string" ? Dr(t) : t,
    i = If(o.pathname || "/", n)
  if (i == null) return null
  let s = My(e)
  yS(s)
  let l = null
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = TS(i)
    l = PS(s[a], u, r)
  }
  return l
}
function My(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "")
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    }
    a.relativePath.startsWith("/") &&
      (Ke(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)))
    let u = cr([r, a.relativePath]),
      d = n.concat(a)
    i.children &&
      i.children.length > 0 &&
      (Ke(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      My(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: RS(u, i.index), routesMeta: d })
  }
  return (
    e.forEach((i, s) => {
      var l
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s)
      else for (let a of Ny(i.path)) o(i, s, a)
    }),
    t
  )
}
function Ny(e) {
  let t = e.split("/")
  if (t.length === 0) return []
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "")
  if (r.length === 0) return o ? [i, ""] : [i]
  let s = Ny(r.join("/")),
    l = []
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  )
}
function yS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : kS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  )
}
const xS = /^:[\w-]+$/,
  bS = 3,
  SS = 2,
  CS = 1,
  wS = 10,
  ES = -2,
  Nh = (e) => e === "*"
function RS(e, t) {
  let n = e.split("/"),
    r = n.length
  return (
    n.some(Nh) && (r += ES),
    t && (r += SS),
    n
      .filter((o) => !Nh(o))
      .reduce((o, i) => o + (xS.test(i) ? bS : i === "" ? CS : wS), r)
  )
}
function kS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function PS(e, t, n) {
  n === void 0 && (n = !1)
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = []
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = Lh(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      h = a.route
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Lh(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: cr([i, f.pathname]),
        pathnameBase: OS(cr([i, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (i = cr([i, f.pathnameBase]))
  }
  return s
}
function Lh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = $S(e.path, e.caseSensitive, e.end),
    o = t.match(n)
  if (!o) return null
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1)
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: h, isOptional: C } = d
      if (h === "*") {
        let x = l[f] || ""
        s = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1")
      }
      const v = l[f]
      return (
        C && !v ? (u[h] = void 0) : (u[h] = (v || "").replace(/%2F/g, "/")), u
      )
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  }
}
function $S(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    )
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  )
}
function TS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/")
  } catch (t) {
    return (
      jf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    )
  }
}
function If(e, t) {
  if (t === "/") return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== "/" ? null : e.slice(n) || "/"
}
function _S(e, t) {
  t === void 0 && (t = "/")
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Dr(e) : e
  return {
    pathname: n ? (n.startsWith("/") ? n : jS(n, t)) : t,
    search: MS(r),
    hash: NS(o),
  }
}
function jS(e, t) {
  let n = t.replace(/\/+$/, "").split("/")
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }),
    n.length > 1 ? n.join("/") : "/"
  )
}
function Ju(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function IS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function Ly(e, t) {
  let n = IS(e)
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function Ay(e, t, n, r) {
  r === void 0 && (r = !1)
  let o
  typeof e == "string"
    ? (o = Dr(e))
    : ((o = Yi({}, e)),
      Ke(
        !o.pathname || !o.pathname.includes("?"),
        Ju("?", "pathname", "search", o)
      ),
      Ke(
        !o.pathname || !o.pathname.includes("#"),
        Ju("#", "pathname", "hash", o)
      ),
      Ke(!o.search || !o.search.includes("#"), Ju("#", "search", "hash", o)))
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l
  if (s == null) l = n
  else {
    let f = t.length - 1
    if (!r && s.startsWith("..")) {
      let h = s.split("/")
      for (; h[0] === ".."; ) h.shift(), (f -= 1)
      o.pathname = h.join("/")
    }
    l = f >= 0 ? t[f] : "/"
  }
  let a = _S(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/")
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a
}
const cr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  OS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  MS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  NS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e)
function LS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  )
}
const zy = ["post", "put", "patch", "delete"]
new Set(zy)
const AS = ["get", ...zy]
new Set(AS)
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ji() {
  return (
    (Ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ji.apply(this, arguments)
  )
}
const Of = y.createContext(null),
  zS = y.createContext(null),
  Ur = y.createContext(null),
  Pa = y.createContext(null),
  Wr = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fy = y.createContext(null)
function FS(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  ms() || Ke(!1)
  let { basename: r, navigator: o } = y.useContext(Ur),
    { hash: i, pathname: s, search: l } = Dy(e, { relative: n }),
    a = s
  return (
    r !== "/" && (a = s === "/" ? r : cr([r, s])),
    o.createHref({ pathname: a, search: l, hash: i })
  )
}
function ms() {
  return y.useContext(Pa) != null
}
function gs() {
  return ms() || Ke(!1), y.useContext(Pa).location
}
function By(e) {
  y.useContext(Ur).static || y.useLayoutEffect(e)
}
function BS() {
  let { isDataRoute: e } = y.useContext(Wr)
  return e ? ZS() : DS()
}
function DS() {
  ms() || Ke(!1)
  let e = y.useContext(Of),
    { basename: t, future: n, navigator: r } = y.useContext(Ur),
    { matches: o } = y.useContext(Wr),
    { pathname: i } = gs(),
    s = JSON.stringify(Ly(o, n.v7_relativeSplatPath)),
    l = y.useRef(!1)
  return (
    By(() => {
      l.current = !0
    }),
    y.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return
        if (typeof u == "number") {
          r.go(u)
          return
        }
        let f = Ay(u, JSON.parse(s), i, d.relative === "path")
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : cr([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d)
      },
      [t, r, s, i, e]
    )
  )
}
function Dy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Ur),
    { matches: o } = y.useContext(Wr),
    { pathname: i } = gs(),
    s = JSON.stringify(Ly(o, r.v7_relativeSplatPath))
  return y.useMemo(() => Ay(e, JSON.parse(s), i, n === "path"), [e, s, i, n])
}
function US(e, t) {
  return WS(e, t)
}
function WS(e, t, n, r) {
  ms() || Ke(!1)
  let { navigator: o } = y.useContext(Ur),
    { matches: i } = y.useContext(Wr),
    s = i[i.length - 1],
    l = s ? s.params : {}
  s && s.pathname
  let a = s ? s.pathnameBase : "/"
  s && s.route
  let u = gs(),
    d
  if (t) {
    var f
    let w = typeof t == "string" ? Dr(t) : t
    a === "/" || ((f = w.pathname) != null && f.startsWith(a)) || Ke(!1),
      (d = w)
  } else d = u
  let h = d.pathname || "/",
    C = h
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/")
    C = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/")
  }
  let v = gS(e, { pathname: C }),
    x = qS(
      v &&
        v.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: cr([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : cr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    )
  return t && x
    ? y.createElement(
        Pa.Provider,
        {
          value: {
            location: Ji(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: er.Pop,
          },
        },
        x
      )
    : x
}
function HS() {
  let e = JS(),
    t = LS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    i
  )
}
const VS = y.createElement(HS, null)
class KS extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n)
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          Wr.Provider,
          { value: this.props.routeContext },
          y.createElement(Fy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function GS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(Of)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Wr.Provider, { value: t }, r)
  )
}
function qS(e, t, n, r) {
  var o
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i
    if (!n) return null
    if (n.errors) e = n.matches
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches
    else return null
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors
  if (l != null) {
    let d = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    )
    d >= 0 || Ke(!1), (s = s.slice(0, Math.min(s.length, d + 1)))
  }
  let a = !1,
    u = -1
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let f = s[d]
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: C } = n,
          v =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!C || C[f.route.id] === void 0)
        if (f.route.lazy || v) {
          ;(a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]])
          break
        }
      }
    }
  return s.reduceRight((d, f, h) => {
    let C,
      v = !1,
      x = null,
      w = null
    n &&
      ((C = l && f.route.id ? l[f.route.id] : void 0),
      (x = f.route.errorElement || VS),
      a &&
        (u < 0 && h === 0
          ? (eC("route-fallback", !1), (v = !0), (w = null))
          : u === h &&
            ((v = !0), (w = f.route.hydrateFallbackElement || null))))
    let p = t.concat(s.slice(0, h + 1)),
      m = () => {
        let g
        return (
          C
            ? (g = x)
            : v
            ? (g = w)
            : f.route.Component
            ? (g = y.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = d),
          y.createElement(GS, {
            match: f,
            routeContext: { outlet: d, matches: p, isDataRoute: n != null },
            children: g,
          })
        )
      }
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? y.createElement(KS, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: C,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m()
  }, null)
}
var Uy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    )
  })(Uy || {}),
  Ql = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    )
  })(Ql || {})
function QS(e) {
  let t = y.useContext(Of)
  return t || Ke(!1), t
}
function XS(e) {
  let t = y.useContext(zS)
  return t || Ke(!1), t
}
function YS(e) {
  let t = y.useContext(Wr)
  return t || Ke(!1), t
}
function Wy(e) {
  let t = YS(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || Ke(!1), n.route.id
}
function JS() {
  var e
  let t = y.useContext(Fy),
    n = XS(Ql.UseRouteError),
    r = Wy(Ql.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function ZS() {
  let { router: e } = QS(Uy.UseNavigateStable),
    t = Wy(Ql.UseNavigateStable),
    n = y.useRef(!1)
  return (
    By(() => {
      n.current = !0
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Ji({ fromRouteId: t }, i)))
      },
      [e, t]
    )
  )
}
const Ah = {}
function eC(e, t, n) {
  !t && !Ah[e] && (Ah[e] = !0)
}
function tC(e, t) {
  e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation)
}
function Jr(e) {
  Ke(!1)
}
function nC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = er.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e
  ms() && Ke(!1)
  let a = t.replace(/^\/*/, "/"),
    u = y.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: Ji({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    )
  typeof r == "string" && (r = Dr(r))
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: C = null,
      key: v = "default",
    } = r,
    x = y.useMemo(() => {
      let w = If(d, a)
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: C, key: v },
            navigationType: o,
          }
    }, [a, d, f, h, C, v, o])
  return x == null
    ? null
    : y.createElement(
        Ur.Provider,
        { value: u },
        y.createElement(Pa.Provider, { children: n, value: x })
      )
}
function rC(e) {
  let { children: t, location: n } = e
  return US(dd(t), n)
}
new Promise(() => {})
function dd(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return
      let i = [...t, o]
      if (r.type === y.Fragment) {
        n.push.apply(n, dd(r.props.children, i))
        return
      }
      r.type !== Jr && Ke(!1), !r.props.index || !r.props.children || Ke(!1)
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (s.children = dd(r.props.children, i)), n.push(s)
    }),
    n
  )
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fd() {
  return (
    (fd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    fd.apply(this, arguments)
  )
}
function oC(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    i
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function iC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function sC(e, t) {
  return e.button === 0 && (!t || t === "_self") && !iC(e)
}
const lC = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  aC = "6"
try {
  window.__reactRouterVersion = aC
} catch {}
const uC = "startTransition",
  zh = wl[uC]
function cC(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef()
  i.current == null && (i.current = pS({ window: o, v5Compat: !0 }))
  let s = i.current,
    [l, a] = y.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = y.useCallback(
      (f) => {
        u && zh ? zh(() => a(f)) : a(f)
      },
      [a, u]
    )
  return (
    y.useLayoutEffect(() => s.listen(d), [s, d]),
    y.useEffect(() => tC(r), [r]),
    y.createElement(nC, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  )
}
const dC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fh = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      h = oC(t, lC),
      { basename: C } = y.useContext(Ur),
      v,
      x = !1
    if (typeof u == "string" && fC.test(u) && ((v = u), dC))
      try {
        let g = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          k = If(S.pathname, C)
        S.origin === g.origin && k != null
          ? (u = k + S.search + S.hash)
          : (x = !0)
      } catch {}
    let w = FS(u, { relative: o }),
      p = pC(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: d,
        relative: o,
        viewTransition: f,
      })
    function m(g) {
      r && r(g), g.defaultPrevented || p(g)
    }
    return y.createElement(
      "a",
      fd({}, h, { href: v || w, onClick: x || i ? r : m, ref: n, target: a })
    )
  })
var Bh
;(function (e) {
  ;(e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState")
})(Bh || (Bh = {}))
var Dh
;(function (e) {
  ;(e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration")
})(Dh || (Dh = {}))
function pC(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    a = BS(),
    u = gs(),
    d = Dy(e, { relative: s })
  return y.useCallback(
    (f) => {
      if (sC(f, n)) {
        f.preventDefault()
        let h = r !== void 0 ? r : ql(u) === ql(d)
        a(e, {
          replace: h,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: l,
        })
      }
    },
    [u, a, d, r, o, n, e, i, s, l]
  )
}
function Ar(e) {
  let t = "https://mui.com/production-error/?code=" + e
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n])
  return "Minified MUI error #" + e + "; visit " + t + " for the full message."
}
const hC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ar },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _o = "$$material"
function b() {
  return (
    (b = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    b.apply(null, arguments)
  )
}
function H(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue
      n[r] = e[r]
    }
  return n
}
var mC = !1
function gC(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function vC(e) {
  var t = document.createElement("style")
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  )
}
var yC = (function () {
    function e(n) {
      var r = this
      ;(this._insertTag = function (o) {
        var i
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o)
      }),
        (this.isSpeedy = n.speedy === void 0 ? !mC : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag)
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(vC(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = gC(o)
          try {
            i.insertRule(r, i.cssRules.length)
          } catch {}
        } else o.appendChild(document.createTextNode(r))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r)
        }),
          (this.tags = []),
          (this.ctr = 0)
      }),
      e
    )
  })(),
  ut = "-ms-",
  Xl = "-moz-",
  fe = "-webkit-",
  Hy = "comm",
  Mf = "rule",
  Nf = "decl",
  xC = "@import",
  Vy = "@keyframes",
  bC = "@layer",
  SC = Math.abs,
  $a = String.fromCharCode,
  CC = Object.assign
function wC(e, t) {
  return ot(e, 0) ^ 45
    ? (((((((t << 2) ^ ot(e, 0)) << 2) ^ ot(e, 1)) << 2) ^ ot(e, 2)) << 2) ^
        ot(e, 3)
    : 0
}
function Ky(e) {
  return e.trim()
}
function EC(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function pe(e, t, n) {
  return e.replace(t, n)
}
function pd(e, t) {
  return e.indexOf(t)
}
function ot(e, t) {
  return e.charCodeAt(t) | 0
}
function Zi(e, t, n) {
  return e.slice(t, n)
}
function xn(e) {
  return e.length
}
function Lf(e) {
  return e.length
}
function Ks(e, t) {
  return t.push(e), e
}
function RC(e, t) {
  return e.map(t).join("")
}
var Ta = 1,
  jo = 1,
  Gy = 0,
  Pt = 0,
  He = 0,
  Bo = ""
function _a(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Ta,
    column: jo,
    length: s,
    return: "",
  }
}
function ii(e, t) {
  return CC(_a("", null, null, "", null, null, 0), e, { length: -e.length }, t)
}
function kC() {
  return He
}
function PC() {
  return (
    (He = Pt > 0 ? ot(Bo, --Pt) : 0), jo--, He === 10 && ((jo = 1), Ta--), He
  )
}
function It() {
  return (
    (He = Pt < Gy ? ot(Bo, Pt++) : 0), jo++, He === 10 && ((jo = 1), Ta++), He
  )
}
function En() {
  return ot(Bo, Pt)
}
function pl() {
  return Pt
}
function vs(e, t) {
  return Zi(Bo, e, t)
}
function es(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function qy(e) {
  return (Ta = jo = 1), (Gy = xn((Bo = e))), (Pt = 0), []
}
function Qy(e) {
  return (Bo = ""), e
}
function hl(e) {
  return Ky(vs(Pt - 1, hd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function $C(e) {
  for (; (He = En()) && He < 33; ) It()
  return es(e) > 2 || es(He) > 3 ? "" : " "
}
function TC(e, t) {
  for (
    ;
    --t &&
    It() &&
    !(He < 48 || He > 102 || (He > 57 && He < 65) || (He > 70 && He < 97));

  );
  return vs(e, pl() + (t < 6 && En() == 32 && It() == 32))
}
function hd(e) {
  for (; It(); )
    switch (He) {
      case e:
        return Pt
      case 34:
      case 39:
        e !== 34 && e !== 39 && hd(He)
        break
      case 40:
        e === 41 && hd(e)
        break
      case 92:
        It()
        break
    }
  return Pt
}
function _C(e, t) {
  for (; It() && e + He !== 47 + 10; )
    if (e + He === 42 + 42 && En() === 47) break
  return "/*" + vs(t, Pt - 1) + "*" + $a(e === 47 ? e : It())
}
function jC(e) {
  for (; !es(En()); ) It()
  return vs(e, Pt)
}
function IC(e) {
  return Qy(ml("", null, null, null, [""], (e = qy(e)), 0, [0], e))
}
function ml(e, t, n, r, o, i, s, l, a) {
  for (
    var u = 0,
      d = 0,
      f = s,
      h = 0,
      C = 0,
      v = 0,
      x = 1,
      w = 1,
      p = 1,
      m = 0,
      g = "",
      S = o,
      k = i,
      R = r,
      E = g;
    w;

  )
    switch (((v = m), (m = It()))) {
      case 40:
        if (v != 108 && ot(E, f - 1) == 58) {
          pd((E += pe(hl(m), "&", "&\f")), "&\f") != -1 && (p = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        E += hl(m)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        E += $C(v)
        break
      case 92:
        E += TC(pl() - 1, 7)
        continue
      case 47:
        switch (En()) {
          case 42:
          case 47:
            Ks(OC(_C(It(), pl()), t, n), a)
            break
          default:
            E += "/"
        }
        break
      case 123 * x:
        l[u++] = xn(E) * p
      case 125 * x:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            w = 0
          case 59 + d:
            p == -1 && (E = pe(E, /\f/g, "")),
              C > 0 &&
                xn(E) - f &&
                Ks(
                  C > 32
                    ? Wh(E + ";", r, n, f - 1)
                    : Wh(pe(E, " ", "") + ";", r, n, f - 2),
                  a
                )
            break
          case 59:
            E += ";"
          default:
            if (
              (Ks((R = Uh(E, t, n, u, d, o, l, g, (S = []), (k = []), f)), i),
              m === 123)
            )
              if (d === 0) ml(E, t, R, R, S, i, f, l, k)
              else
                switch (h === 99 && ot(E, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ml(
                      e,
                      R,
                      R,
                      r && Ks(Uh(e, R, R, 0, 0, o, l, g, o, (S = []), f), k),
                      o,
                      k,
                      f,
                      l,
                      r ? S : k
                    )
                    break
                  default:
                    ml(E, R, R, R, [""], k, 0, l, k)
                }
        }
        ;(u = d = C = 0), (x = p = 1), (g = E = ""), (f = s)
        break
      case 58:
        ;(f = 1 + xn(E)), (C = v)
      default:
        if (x < 1) {
          if (m == 123) --x
          else if (m == 125 && x++ == 0 && PC() == 125) continue
        }
        switch (((E += $a(m)), m * x)) {
          case 38:
            p = d > 0 ? 1 : ((E += "\f"), -1)
            break
          case 44:
            ;(l[u++] = (xn(E) - 1) * p), (p = 1)
            break
          case 64:
            En() === 45 && (E += hl(It())),
              (h = En()),
              (d = f = xn((g = E += jC(pl())))),
              m++
            break
          case 45:
            v === 45 && xn(E) == 2 && (x = 0)
        }
    }
  return i
}
function Uh(e, t, n, r, o, i, s, l, a, u, d) {
  for (
    var f = o - 1, h = o === 0 ? i : [""], C = Lf(h), v = 0, x = 0, w = 0;
    v < r;
    ++v
  )
    for (var p = 0, m = Zi(e, f + 1, (f = SC((x = s[v])))), g = e; p < C; ++p)
      (g = Ky(x > 0 ? h[p] + " " + m : pe(m, /&\f/g, h[p]))) && (a[w++] = g)
  return _a(e, t, n, o === 0 ? Mf : l, a, u, d)
}
function OC(e, t, n) {
  return _a(e, t, n, Hy, $a(kC()), Zi(e, 2, -2), 0)
}
function Wh(e, t, n, r) {
  return _a(e, t, n, Nf, Zi(e, 0, r), Zi(e, r + 1, -1), r)
}
function bo(e, t) {
  for (var n = "", r = Lf(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || ""
  return n
}
function MC(e, t, n, r) {
  switch (e.type) {
    case bC:
      if (e.children.length) break
    case xC:
    case Nf:
      return (e.return = e.return || e.value)
    case Hy:
      return ""
    case Vy:
      return (e.return = e.value + "{" + bo(e.children, r) + "}")
    case Mf:
      e.value = e.props.join(",")
  }
  return xn((n = bo(e.children, r))) ? (e.return = e.value + "{" + n + "}") : ""
}
function NC(e) {
  var t = Lf(e)
  return function (n, r, o, i) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || ""
    return s
  }
}
function LC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
function Xy(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var AC = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = En()), o === 38 && i === 12 && (n[r] = 1), !es(i);

    )
      It()
    return vs(t, Pt)
  },
  zC = function (t, n) {
    var r = -1,
      o = 44
    do
      switch (es(o)) {
        case 0:
          o === 38 && En() === 12 && (n[r] = 1), (t[r] += AC(Pt - 1, n, r))
          break
        case 2:
          t[r] += hl(o)
          break
        case 4:
          if (o === 44) {
            ;(t[++r] = En() === 58 ? "&\f" : ""), (n[r] = t[r].length)
            break
          }
        default:
          t[r] += $a(o)
      }
    while ((o = It()))
    return t
  },
  FC = function (t, n) {
    return Qy(zC(qy(t), n))
  },
  Hh = new WeakMap(),
  BC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Hh.get(r)) &&
        !o
      ) {
        Hh.set(t, !0)
        for (
          var i = [], s = FC(n, i), l = r.props, a = 0, u = 0;
          a < s.length;
          a++
        )
          for (var d = 0; d < l.length; d++, u++)
            t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a]
      }
    }
  },
  DC = function (t) {
    if (t.type === "decl") {
      var n = t.value
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""))
    }
  }
function Yy(e, t) {
  switch (wC(e, t)) {
    case 5103:
      return fe + "print-" + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return fe + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return fe + e + Xl + e + ut + e + e
    case 6828:
    case 4268:
      return fe + e + ut + e + e
    case 6165:
      return fe + e + ut + "flex-" + e + e
    case 5187:
      return (
        fe + e + pe(e, /(\w+).+(:[^]+)/, fe + "box-$1$2" + ut + "flex-$1$2") + e
      )
    case 5443:
      return fe + e + ut + "flex-item-" + pe(e, /flex-|-self/, "") + e
    case 4675:
      return (
        fe +
        e +
        ut +
        "flex-line-pack" +
        pe(e, /align-content|flex-|-self/, "") +
        e
      )
    case 5548:
      return fe + e + ut + pe(e, "shrink", "negative") + e
    case 5292:
      return fe + e + ut + pe(e, "basis", "preferred-size") + e
    case 6060:
      return (
        fe +
        "box-" +
        pe(e, "-grow", "") +
        fe +
        e +
        ut +
        pe(e, "grow", "positive") +
        e
      )
    case 4554:
      return fe + pe(e, /([^-])(transform)/g, "$1" + fe + "$2") + e
    case 6187:
      return (
        pe(
          pe(pe(e, /(zoom-|grab)/, fe + "$1"), /(image-set)/, fe + "$1"),
          e,
          ""
        ) + e
      )
    case 5495:
    case 3959:
      return pe(e, /(image-set\([^]*)/, fe + "$1$`$1")
    case 4968:
      return (
        pe(
          pe(e, /(.+:)(flex-)?(.*)/, fe + "box-pack:$3" + ut + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        fe +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pe(e, /(.+)-inline(.+)/, fe + "$1$2") + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xn(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45) break
          case 102:
            return (
              pe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  fe +
                  "$2-$3$1" +
                  Xl +
                  (ot(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            )
          case 115:
            return ~pd(e, "stretch")
              ? Yy(pe(e, "stretch", "fill-available"), t) + e
              : e
        }
      break
    case 4949:
      if (ot(e, t + 1) !== 115) break
    case 6444:
      switch (ot(e, xn(e) - 3 - (~pd(e, "!important") && 10))) {
        case 107:
          return pe(e, ":", ":" + fe) + e
        case 101:
          return (
            pe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                fe +
                (ot(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                fe +
                "$2$3$1" +
                ut +
                "$2box$3"
            ) + e
          )
      }
      break
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return fe + e + ut + pe(e, /[svh]\w+-[tblr]{2}/, "tb") + e
        case 108:
          return fe + e + ut + pe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e
        case 45:
          return fe + e + ut + pe(e, /[svh]\w+-[tblr]{2}/, "lr") + e
      }
      return fe + e + ut + e + e
  }
  return e
}
var UC = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Nf:
          t.return = Yy(t.value, t.length)
          break
        case Vy:
          return bo([ii(t, { value: pe(t.value, "@", "@" + fe) })], o)
        case Mf:
          if (t.length)
            return RC(t.props, function (i) {
              switch (EC(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return bo(
                    [ii(t, { props: [pe(i, /:(read-\w+)/, ":" + Xl + "$1")] })],
                    o
                  )
                case "::placeholder":
                  return bo(
                    [
                      ii(t, {
                        props: [pe(i, /:(plac\w+)/, ":" + fe + "input-$1")],
                      }),
                      ii(t, { props: [pe(i, /:(plac\w+)/, ":" + Xl + "$1")] }),
                      ii(t, { props: [pe(i, /:(plac\w+)/, ut + "input-$1")] }),
                    ],
                    o
                  )
              }
              return ""
            })
      }
  },
  WC = [UC],
  Jy = function (t) {
    var n = t.key
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])")
      Array.prototype.forEach.call(r, function (x) {
        var w = x.getAttribute("data-emotion")
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""))
      })
    }
    var o = t.stylisPlugins || WC,
      i = {},
      s,
      l = []
    ;(s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (x) {
          for (
            var w = x.getAttribute("data-emotion").split(" "), p = 1;
            p < w.length;
            p++
          )
            i[w[p]] = !0
          l.push(x)
        }
      )
    var a,
      u = [BC, DC]
    {
      var d,
        f = [
          MC,
          LC(function (x) {
            d.insert(x)
          }),
        ],
        h = NC(u.concat(o, f)),
        C = function (w) {
          return bo(IC(w), h)
        }
      a = function (w, p, m, g) {
        ;(d = m),
          C(w ? w + "{" + p.styles + "}" : p.styles),
          g && (v.inserted[p.name] = !0)
      }
    }
    var v = {
      key: n,
      sheet: new yC({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    }
    return v.sheet.hydrate(l), v
  },
  Zy = { exports: {} },
  ve = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tt = typeof Symbol == "function" && Symbol.for,
  Af = tt ? Symbol.for("react.element") : 60103,
  zf = tt ? Symbol.for("react.portal") : 60106,
  ja = tt ? Symbol.for("react.fragment") : 60107,
  Ia = tt ? Symbol.for("react.strict_mode") : 60108,
  Oa = tt ? Symbol.for("react.profiler") : 60114,
  Ma = tt ? Symbol.for("react.provider") : 60109,
  Na = tt ? Symbol.for("react.context") : 60110,
  Ff = tt ? Symbol.for("react.async_mode") : 60111,
  La = tt ? Symbol.for("react.concurrent_mode") : 60111,
  Aa = tt ? Symbol.for("react.forward_ref") : 60112,
  za = tt ? Symbol.for("react.suspense") : 60113,
  HC = tt ? Symbol.for("react.suspense_list") : 60120,
  Fa = tt ? Symbol.for("react.memo") : 60115,
  Ba = tt ? Symbol.for("react.lazy") : 60116,
  VC = tt ? Symbol.for("react.block") : 60121,
  KC = tt ? Symbol.for("react.fundamental") : 60117,
  GC = tt ? Symbol.for("react.responder") : 60118,
  qC = tt ? Symbol.for("react.scope") : 60119
function At(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Af:
        switch (((e = e.type), e)) {
          case Ff:
          case La:
          case ja:
          case Oa:
          case Ia:
          case za:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Na:
              case Aa:
              case Ba:
              case Fa:
              case Ma:
                return e
              default:
                return t
            }
        }
      case zf:
        return t
    }
  }
}
function e0(e) {
  return At(e) === La
}
ve.AsyncMode = Ff
ve.ConcurrentMode = La
ve.ContextConsumer = Na
ve.ContextProvider = Ma
ve.Element = Af
ve.ForwardRef = Aa
ve.Fragment = ja
ve.Lazy = Ba
ve.Memo = Fa
ve.Portal = zf
ve.Profiler = Oa
ve.StrictMode = Ia
ve.Suspense = za
ve.isAsyncMode = function (e) {
  return e0(e) || At(e) === Ff
}
ve.isConcurrentMode = e0
ve.isContextConsumer = function (e) {
  return At(e) === Na
}
ve.isContextProvider = function (e) {
  return At(e) === Ma
}
ve.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Af
}
ve.isForwardRef = function (e) {
  return At(e) === Aa
}
ve.isFragment = function (e) {
  return At(e) === ja
}
ve.isLazy = function (e) {
  return At(e) === Ba
}
ve.isMemo = function (e) {
  return At(e) === Fa
}
ve.isPortal = function (e) {
  return At(e) === zf
}
ve.isProfiler = function (e) {
  return At(e) === Oa
}
ve.isStrictMode = function (e) {
  return At(e) === Ia
}
ve.isSuspense = function (e) {
  return At(e) === za
}
ve.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ja ||
    e === La ||
    e === Oa ||
    e === Ia ||
    e === za ||
    e === HC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ba ||
        e.$$typeof === Fa ||
        e.$$typeof === Ma ||
        e.$$typeof === Na ||
        e.$$typeof === Aa ||
        e.$$typeof === KC ||
        e.$$typeof === GC ||
        e.$$typeof === qC ||
        e.$$typeof === VC))
  )
}
ve.typeOf = At
Zy.exports = ve
var QC = Zy.exports,
  t0 = QC,
  XC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  YC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  n0 = {}
n0[t0.ForwardRef] = XC
n0[t0.Memo] = YC
var JC = !0
function r0(e, t, n) {
  var r = ""
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ")
    }),
    r
  )
}
var Bf = function (t, n, r) {
    var o = t.key + "-" + n.name
    ;(r === !1 || JC === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles)
  },
  Df = function (t, n, r) {
    Bf(t, n, r)
    var o = t.key + "-" + n.name
    if (t.inserted[n.name] === void 0) {
      var i = n
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next)
      while (i !== void 0)
    }
  }
function ZC(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var ew = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  tw = !1,
  nw = /[A-Z]|^ms/g,
  rw = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  o0 = function (t) {
    return t.charCodeAt(1) === 45
  },
  Vh = function (t) {
    return t != null && typeof t != "boolean"
  },
  Zu = Xy(function (e) {
    return o0(e) ? e : e.replace(nw, "-$&").toLowerCase()
  }),
  Kh = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(rw, function (r, o, i) {
            return (bn = { name: o, styles: i, next: bn }), o
          })
    }
    return ew[t] !== 1 && !o0(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n
  },
  ow =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform."
function ts(e, t, n) {
  if (n == null) return ""
  var r = n
  if (r.__emotion_styles !== void 0) return r
  switch (typeof n) {
    case "boolean":
      return ""
    case "object": {
      var o = n
      if (o.anim === 1)
        return (bn = { name: o.name, styles: o.styles, next: bn }), o.name
      var i = n
      if (i.styles !== void 0) {
        var s = i.next
        if (s !== void 0)
          for (; s !== void 0; )
            (bn = { name: s.name, styles: s.styles, next: bn }), (s = s.next)
        var l = i.styles + ";"
        return l
      }
      return iw(e, t, n)
    }
    case "function": {
      if (e !== void 0) {
        var a = bn,
          u = n(e)
        return (bn = a), ts(e, t, u)
      }
      break
    }
  }
  var d = n
  if (t == null) return d
  var f = t[d]
  return f !== void 0 ? f : d
}
function iw(e, t, n) {
  var r = ""
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ts(e, t, n[o]) + ";"
  else
    for (var i in n) {
      var s = n[i]
      if (typeof s != "object") {
        var l = s
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : Vh(l) && (r += Zu(i) + ":" + Kh(i, l) + ";")
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && tw) throw new Error(ow)
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var a = 0; a < s.length; a++)
            Vh(s[a]) && (r += Zu(i) + ":" + Kh(i, s[a]) + ";")
        else {
          var u = ts(e, t, s)
          switch (i) {
            case "animation":
            case "animationName": {
              r += Zu(i) + ":" + u + ";"
              break
            }
            default:
              r += i + "{" + u + "}"
          }
        }
      }
    }
  return r
}
var Gh = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bn
function ys(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0]
  var r = !0,
    o = ""
  bn = void 0
  var i = e[0]
  if (i == null || i.raw === void 0) (r = !1), (o += ts(n, t, i))
  else {
    var s = i
    o += s[0]
  }
  for (var l = 1; l < e.length; l++)
    if (((o += ts(n, t, e[l])), r)) {
      var a = i
      o += a[l]
    }
  Gh.lastIndex = 0
  for (var u = "", d; (d = Gh.exec(o)) !== null; ) u += "-" + d[1]
  var f = ZC(o) + u
  return { name: f, styles: o, next: bn }
}
var sw = function (t) {
    return t()
  },
  i0 = wl["useInsertionEffect"] ? wl["useInsertionEffect"] : !1,
  s0 = i0 || sw,
  qh = i0 || y.useLayoutEffect,
  lw = !1,
  l0 = y.createContext(typeof HTMLElement < "u" ? Jy({ key: "css" }) : null),
  aw = l0.Provider,
  Uf = function (t) {
    return y.forwardRef(function (n, r) {
      var o = y.useContext(l0)
      return t(n, o, r)
    })
  },
  Do = y.createContext({}),
  Wf = {}.hasOwnProperty,
  md = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  uw = function (t, n) {
    var r = {}
    for (var o in n) Wf.call(n, o) && (r[o] = n[o])
    return (r[md] = t), r
  },
  cw = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag
    return (
      Bf(n, r, o),
      s0(function () {
        return Df(n, r, o)
      }),
      null
    )
  },
  dw = Uf(function (e, t, n) {
    var r = e.css
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r])
    var o = e[md],
      i = [r],
      s = ""
    typeof e.className == "string"
      ? (s = r0(t.registered, i, e.className))
      : e.className != null && (s = e.className + " ")
    var l = ys(i, void 0, y.useContext(Do))
    s += t.key + "-" + l.name
    var a = {}
    for (var u in e)
      Wf.call(e, u) && u !== "css" && u !== md && !lw && (a[u] = e[u])
    return (
      (a.className = s),
      n && (a.ref = n),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(cw, {
          cache: t,
          serialized: l,
          isStringTag: typeof o == "string",
        }),
        y.createElement(o, a)
      )
    )
  }),
  fw = dw,
  ec = { exports: {} },
  Qh
function a0() {
  return (
    Qh ||
      ((Qh = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r]
                      for (var i in o)
                        ({}).hasOwnProperty.call(o, i) && (n[i] = o[i])
                    }
                    return n
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          )
        }
        ;(e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports)
      })(ec)),
    ec.exports
  )
}
a0()
var Xh = function (t, n) {
  var r = arguments
  if (n == null || !Wf.call(n, "css")) return y.createElement.apply(void 0, r)
  var o = r.length,
    i = new Array(o)
  ;(i[0] = fw), (i[1] = uw(t, n))
  for (var s = 2; s < o; s++) i[s] = r[s]
  return y.createElement.apply(null, i)
}
;(function (e) {
  var t
  t || (t = e.JSX || (e.JSX = {}))
})(Xh || (Xh = {}))
var pw = Uf(function (e, t) {
  var n = e.styles,
    r = ys([n], void 0, y.useContext(Do)),
    o = y.useRef()
  return (
    qh(
      function () {
        var i = t.key + "-global",
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          l = !1,
          a = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]'
          )
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          a !== null &&
            ((l = !0), a.setAttribute("data-emotion", i), s.hydrate([a])),
          (o.current = [s, l]),
          function () {
            s.flush()
          }
        )
      },
      [t]
    ),
    qh(
      function () {
        var i = o.current,
          s = i[0],
          l = i[1]
        if (l) {
          i[1] = !1
          return
        }
        if ((r.next !== void 0 && Df(t, r.next, !0), s.tags.length)) {
          var a = s.tags[s.tags.length - 1].nextElementSibling
          ;(s.before = a), s.flush()
        }
        t.insert("", r, s, !1)
      },
      [t, r.name]
    ),
    null
  )
})
function Da() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return ys(t)
}
function Uo() {
  var e = Da.apply(void 0, arguments),
    t = "animation-" + e.name
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
    },
  }
}
var hw =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  mw = Xy(function (e) {
    return (
      hw.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    )
  }),
  gw = !1,
  vw = mw,
  yw = function (t) {
    return t !== "theme"
  },
  Yh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? vw : yw
  },
  Jh = function (t, n, r) {
    var o
    if (n) {
      var i = n.shouldForwardProp
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s)
            }
          : i
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o
  },
  xw = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag
    return (
      Bf(n, r, o),
      s0(function () {
        return Df(n, r, o)
      }),
      null
    )
  },
  bw = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s
    n !== void 0 && ((i = n.label), (s = n.target))
    var l = Jh(t, n, r),
      a = l || Yh(o),
      u = !a("as")
    return function () {
      var d = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        f.push.apply(f, d)
      else {
        var h = d[0]
        f.push(h[0])
        for (var C = d.length, v = 1; v < C; v++) f.push(d[v], h[v])
      }
      var x = Uf(function (w, p, m) {
        var g = (u && w.as) || o,
          S = "",
          k = [],
          R = w
        if (w.theme == null) {
          R = {}
          for (var E in w) R[E] = w[E]
          R.theme = y.useContext(Do)
        }
        typeof w.className == "string"
          ? (S = r0(p.registered, k, w.className))
          : w.className != null && (S = w.className + " ")
        var P = ys(f.concat(k), p.registered, R)
        ;(S += p.key + "-" + P.name), s !== void 0 && (S += " " + s)
        var T = u && l === void 0 ? Yh(g) : a,
          j = {}
        for (var I in w) (u && I === "as") || (T(I) && (j[I] = w[I]))
        return (
          (j.className = S),
          m && (j.ref = m),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(xw, {
              cache: p,
              serialized: P,
              isStringTag: typeof g == "string",
            }),
            y.createElement(g, j)
          )
        )
      })
      return (
        (x.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (x.defaultProps = t.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = o),
        (x.__emotion_styles = f),
        (x.__emotion_forwardProp = l),
        Object.defineProperty(x, "toString", {
          value: function () {
            return s === void 0 && gw ? "NO_COMPONENT_SELECTOR" : "." + s
          },
        }),
        (x.withComponent = function (w, p) {
          var m = e(w, b({}, n, p, { shouldForwardProp: Jh(x, p, !0) }))
          return m.apply(void 0, f)
        }),
        x
      )
    }
  },
  Sw = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  gd = bw.bind(null)
Sw.forEach(function (e) {
  gd[e] = gd(e)
})
function Cw(e, t) {
  const n = Jy({ key: "css", prepend: e })
  if (t) {
    const r = n.insert
    n.insert = (...o) => (
      o[1].styles.match(/^@layer\s+[^{]*$/) ||
        (o[1].styles = `@layer mui {${o[1].styles}}`),
      r(...o)
    )
  }
  return n
}
const tc = new Map()
function ww(e) {
  const { injectFirst: t, enableCssLayer: n, children: r } = e,
    o = y.useMemo(() => {
      const i = `${t}-${n}`
      if (typeof document == "object" && tc.has(i)) return tc.get(i)
      const s = Cw(t, n)
      return tc.set(i, s), s
    }, [t, n])
  return t || n ? c.jsx(aw, { value: o, children: r }) : r
}
function Ew(e) {
  return e == null || Object.keys(e).length === 0
}
function u0(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(Ew(o) ? n : o) : t
  return c.jsx(pw, { styles: r })
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Hf(e, t) {
  return gd(e, t)
}
const c0 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles))
  },
  Zh = []
function Yl(e) {
  return (Zh[0] = e), ys(Zh)
}
const Rw = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      GlobalStyles: u0,
      StyledEngineProvider: ww,
      ThemeContext: Do,
      css: Da,
      default: Hf,
      internal_processStyles: c0,
      internal_serializeStyles: Yl,
      keyframes: Uo,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
)
function _n(e) {
  if (typeof e != "object" || e === null) return !1
  const t = Object.getPrototypeOf(e)
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
function d0(e) {
  if (y.isValidElement(e) || !_n(e)) return e
  const t = {}
  return (
    Object.keys(e).forEach((n) => {
      t[n] = d0(e[n])
    }),
    t
  )
}
function Ot(e, t, n = { clone: !0 }) {
  const r = n.clone ? b({}, e) : e
  return (
    _n(e) &&
      _n(t) &&
      Object.keys(t).forEach((o) => {
        y.isValidElement(t[o])
          ? (r[o] = t[o])
          : _n(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && _n(e[o])
          ? (r[o] = Ot(e[o], t[o], n))
          : n.clone
          ? (r[o] = _n(t[o]) ? d0(t[o]) : t[o])
          : (r[o] = t[o])
      }),
    r
  )
}
const kw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ot, isPlainObject: _n },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pw = ["values", "unit", "step"],
  $w = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || []
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => b({}, n, { [r.key]: r.val }), {})
    )
  }
function f0(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = H(e, Pw),
    i = $w(t),
    s = Object.keys(i)
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`
  }
  function a(h) {
    return `@media (max-width:${
      (typeof t[h] == "number" ? t[h] : h) - r / 100
    }${n})`
  }
  function u(h, C) {
    const v = s.indexOf(C)
    return `@media (min-width:${
      typeof t[h] == "number" ? t[h] : h
    }${n}) and (max-width:${
      (v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : C) - r / 100
    }${n})`
  }
  function d(h) {
    return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : l(h)
  }
  function f(h) {
    const C = s.indexOf(h)
    return C === 0
      ? l(s[1])
      : C === s.length - 1
      ? a(s[C])
      : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and")
  }
  return b(
    {
      keys: s,
      values: i,
      up: l,
      down: a,
      between: u,
      only: d,
      not: f,
      unit: n,
    },
    o
  )
}
const Tw = { borderRadius: 4 },
  _w = Tw
function $i(e, t) {
  return t ? Ot(e, t, { clone: !1 }) : e
}
const Vf = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  em = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Vf[e]}px)`,
  }
function Yt(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const i = r.breakpoints || em
    return t.reduce((s, l, a) => ((s[i.up(i.keys[a])] = n(t[a])), s), {})
  }
  if (typeof t == "object") {
    const i = r.breakpoints || em
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || Vf).indexOf(l) !== -1) {
        const a = i.up(l)
        s[a] = n(t[l], l)
      } else {
        const a = l
        s[a] = t[a]
      }
      return s
    }, {})
  }
  return n(t)
}
function jw(e = {}) {
  var t
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o)
          return (r[i] = {}), r
        }, {})) || {}
  )
}
function tm(e, t) {
  return e.reduce((n, r) => {
    const o = n[r]
    return (!o || Object.keys(o).length === 0) && delete n[r], n
  }, t)
}
function Iw(e, t) {
  if (typeof e != "object") return {}
  const n = {},
    r = Object.keys(t)
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0)
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0)
        }),
    n
  )
}
function Ua({ values: e, breakpoints: t, base: n }) {
  const r = n || Iw(e, t),
    o = Object.keys(r)
  if (o.length === 0) return e
  let i
  return o.reduce(
    (s, l, a) => (
      Array.isArray(e)
        ? ((s[l] = e[a] != null ? e[a] : e[i]), (i = a))
        : typeof e == "object"
        ? ((s[l] = e[l] != null ? e[l] : e[i]), (i = l))
        : (s[l] = e),
      s
    ),
    {}
  )
}
function F(e) {
  if (typeof e != "string") throw new Error(Ar(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const Ow = Object.freeze(
  Object.defineProperty({ __proto__: null, default: F }, Symbol.toStringTag, {
    value: "Module",
  })
)
function Wa(e, t, n = !0) {
  if (!t || typeof t != "string") return null
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e)
    if (r != null) return r
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e)
}
function Jl(e, t, n, r = n) {
  let o
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Wa(e, n) || r),
    t && (o = t(o, r, e)),
    o
  )
}
function Ue(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null
      const l = s[t],
        a = s.theme,
        u = Wa(a, r) || {}
      return Yt(s, l, (f) => {
        let h = Jl(u, o, f)
        return (
          f === h &&
            typeof f == "string" &&
            (h = Jl(u, o, `${t}${f === "default" ? "" : F(f)}`, f)),
          n === !1 ? h : { [n]: h }
        )
      })
    }
  return (i.propTypes = {}), (i.filterProps = [t]), i
}
function Mw(e) {
  const t = {}
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const Nw = { m: "margin", p: "padding" },
  Lw = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  nm = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Aw = Mw((e) => {
    if (e.length > 2)
      if (nm[e]) e = nm[e]
      else return [e]
    const [t, n] = e.split(""),
      r = Nw[t],
      o = Lw[n] || ""
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o]
  }),
  Kf = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Gf = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ]
;[...Kf, ...Gf]
function xs(e, t, n, r) {
  var o
  const i = (o = Wa(e, t, !1)) != null ? o : n
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {}
}
function p0(e) {
  return xs(e, "spacing", 8)
}
function bs(e, t) {
  if (typeof t == "string" || t == null) return t
  const n = Math.abs(t),
    r = e(n)
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`
}
function zw(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = bs(t, n)), r), {})
}
function Fw(e, t, n, r) {
  if (t.indexOf(n) === -1) return null
  const o = Aw(n),
    i = zw(o, r),
    s = e[n]
  return Yt(e, s, i)
}
function h0(e, t) {
  const n = p0(e.theme)
  return Object.keys(e)
    .map((r) => Fw(e, t, r, n))
    .reduce($i, {})
}
function Le(e) {
  return h0(e, Kf)
}
Le.propTypes = {}
Le.filterProps = Kf
function Ae(e) {
  return h0(e, Gf)
}
Ae.propTypes = {}
Ae.filterProps = Gf
function Bw(e = 8) {
  if (e.mui) return e
  const t = p0({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i)
          return typeof s == "number" ? `${s}px` : s
        })
        .join(" ")
  return (n.mui = !0), n
}
function Ha(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? $i(o, t[i](r)) : o), {})
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  )
}
function Vt(e) {
  return typeof e != "number" ? e : `${e}px solid`
}
function Zt(e, t) {
  return Ue({ prop: e, themeKey: "borders", transform: t })
}
const Dw = Zt("border", Vt),
  Uw = Zt("borderTop", Vt),
  Ww = Zt("borderRight", Vt),
  Hw = Zt("borderBottom", Vt),
  Vw = Zt("borderLeft", Vt),
  Kw = Zt("borderColor"),
  Gw = Zt("borderTopColor"),
  qw = Zt("borderRightColor"),
  Qw = Zt("borderBottomColor"),
  Xw = Zt("borderLeftColor"),
  Yw = Zt("outline", Vt),
  Jw = Zt("outlineColor"),
  Va = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = xs(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: bs(t, r) })
      return Yt(e, e.borderRadius, n)
    }
    return null
  }
Va.propTypes = {}
Va.filterProps = ["borderRadius"]
Ha(Dw, Uw, Ww, Hw, Vw, Kw, Gw, qw, Qw, Xw, Va, Yw, Jw)
const Ka = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = xs(e.theme, "spacing", 8),
      n = (r) => ({ gap: bs(t, r) })
    return Yt(e, e.gap, n)
  }
  return null
}
Ka.propTypes = {}
Ka.filterProps = ["gap"]
const Ga = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = xs(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: bs(t, r) })
    return Yt(e, e.columnGap, n)
  }
  return null
}
Ga.propTypes = {}
Ga.filterProps = ["columnGap"]
const qa = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = xs(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: bs(t, r) })
    return Yt(e, e.rowGap, n)
  }
  return null
}
qa.propTypes = {}
qa.filterProps = ["rowGap"]
const Zw = Ue({ prop: "gridColumn" }),
  e2 = Ue({ prop: "gridRow" }),
  t2 = Ue({ prop: "gridAutoFlow" }),
  n2 = Ue({ prop: "gridAutoColumns" }),
  r2 = Ue({ prop: "gridAutoRows" }),
  o2 = Ue({ prop: "gridTemplateColumns" }),
  i2 = Ue({ prop: "gridTemplateRows" }),
  s2 = Ue({ prop: "gridTemplateAreas" }),
  l2 = Ue({ prop: "gridArea" })
Ha(Ka, Ga, qa, Zw, e2, t2, n2, r2, o2, i2, s2, l2)
function So(e, t) {
  return t === "grey" ? t : e
}
const a2 = Ue({ prop: "color", themeKey: "palette", transform: So }),
  u2 = Ue({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: So,
  }),
  c2 = Ue({ prop: "backgroundColor", themeKey: "palette", transform: So })
Ha(a2, u2, c2)
function Tt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const d2 = Ue({ prop: "width", transform: Tt }),
  qf = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Vf[n]
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Tt(n) }
      }
      return Yt(e, e.maxWidth, t)
    }
    return null
  }
qf.filterProps = ["maxWidth"]
const f2 = Ue({ prop: "minWidth", transform: Tt }),
  p2 = Ue({ prop: "height", transform: Tt }),
  h2 = Ue({ prop: "maxHeight", transform: Tt }),
  m2 = Ue({ prop: "minHeight", transform: Tt })
Ue({ prop: "size", cssProperty: "width", transform: Tt })
Ue({ prop: "size", cssProperty: "height", transform: Tt })
const g2 = Ue({ prop: "boxSizing" })
Ha(d2, qf, f2, p2, h2, m2, g2)
const v2 = {
    border: { themeKey: "borders", transform: Vt },
    borderTop: { themeKey: "borders", transform: Vt },
    borderRight: { themeKey: "borders", transform: Vt },
    borderBottom: { themeKey: "borders", transform: Vt },
    borderLeft: { themeKey: "borders", transform: Vt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: Vt },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Va },
    color: { themeKey: "palette", transform: So },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: So,
    },
    backgroundColor: { themeKey: "palette", transform: So },
    p: { style: Ae },
    pt: { style: Ae },
    pr: { style: Ae },
    pb: { style: Ae },
    pl: { style: Ae },
    px: { style: Ae },
    py: { style: Ae },
    padding: { style: Ae },
    paddingTop: { style: Ae },
    paddingRight: { style: Ae },
    paddingBottom: { style: Ae },
    paddingLeft: { style: Ae },
    paddingX: { style: Ae },
    paddingY: { style: Ae },
    paddingInline: { style: Ae },
    paddingInlineStart: { style: Ae },
    paddingInlineEnd: { style: Ae },
    paddingBlock: { style: Ae },
    paddingBlockStart: { style: Ae },
    paddingBlockEnd: { style: Ae },
    m: { style: Le },
    mt: { style: Le },
    mr: { style: Le },
    mb: { style: Le },
    ml: { style: Le },
    mx: { style: Le },
    my: { style: Le },
    margin: { style: Le },
    marginTop: { style: Le },
    marginRight: { style: Le },
    marginBottom: { style: Le },
    marginLeft: { style: Le },
    marginX: { style: Le },
    marginY: { style: Le },
    marginInline: { style: Le },
    marginInlineStart: { style: Le },
    marginInlineEnd: { style: Le },
    marginBlock: { style: Le },
    marginBlockStart: { style: Le },
    marginBlockEnd: { style: Le },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Ka },
    rowGap: { style: qa },
    columnGap: { style: Ga },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Tt },
    maxWidth: { style: qf },
    minWidth: { transform: Tt },
    height: { transform: Tt },
    maxHeight: { transform: Tt },
    minHeight: { transform: Tt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Ss = v2
function y2(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t)
  return e.every((r) => n.size === Object.keys(r).length)
}
function x2(e, t) {
  return typeof e == "function" ? e(t) : e
}
function m0() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      l = i[n]
    if (!l) return { [n]: r }
    const { cssProperty: a = n, themeKey: u, transform: d, style: f } = l
    if (r == null) return null
    if (u === "typography" && r === "inherit") return { [n]: r }
    const h = Wa(o, u) || {}
    return f
      ? f(s)
      : Yt(s, r, (v) => {
          let x = Jl(h, d, v)
          return (
            v === x &&
              typeof v == "string" &&
              (x = Jl(h, d, `${n}${v === "default" ? "" : F(v)}`, v)),
            a === !1 ? x : { [a]: x }
          )
        })
  }
  function t(n) {
    var r
    const { sx: o, theme: i = {}, nested: s } = n || {}
    if (!o) return null
    const l = (r = i.unstable_sxConfig) != null ? r : Ss
    function a(u) {
      let d = u
      if (typeof u == "function") d = u(i)
      else if (typeof u != "object") return u
      if (!d) return null
      const f = jw(i.breakpoints),
        h = Object.keys(f)
      let C = f
      return (
        Object.keys(d).forEach((v) => {
          const x = x2(d[v], i)
          if (x != null)
            if (typeof x == "object")
              if (l[v]) C = $i(C, e(v, x, i, l))
              else {
                const w = Yt({ theme: i }, x, (p) => ({ [v]: p }))
                y2(w, x)
                  ? (C[v] = t({ sx: x, theme: i, nested: !0 }))
                  : (C = $i(C, w))
              }
            else C = $i(C, e(v, x, i, l))
        }),
        !s && i.modularCssLayers ? { "@layer sx": tm(h, C) } : tm(h, C)
      )
    }
    return Array.isArray(o) ? o.map(a) : a(o)
  }
  return t
}
const g0 = m0()
g0.filterProps = ["sx"]
const Cs = g0
function v0(e, t) {
  const n = this
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {}
}
const b2 = ["breakpoints", "palette", "spacing", "shape"]
function ws(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = H(e, b2),
    l = f0(n),
    a = Bw(o)
  let u = Ot(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: b({ mode: "light" }, r),
      spacing: a,
      shape: b({}, _w, i),
    },
    s
  )
  return (
    (u.applyStyles = v0),
    (u = t.reduce((d, f) => Ot(d, f), u)),
    (u.unstable_sxConfig = b({}, Ss, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Cs({ sx: f, theme: this })
    }),
    u
  )
}
const S2 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: ws,
      private_createBreakpoints: f0,
      unstable_applyStyles: v0,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
)
function C2(e) {
  return Object.keys(e).length === 0
}
function Qf(e = null) {
  const t = y.useContext(Do)
  return !t || C2(t) ? e : t
}
const w2 = ws()
function Qa(e = w2) {
  return Qf(e)
}
function nc(e) {
  const t = Yl(e)
  return e !== t && t.styles
    ? (t.styles.match(/^@layer\s+[^{]*$/) ||
        (t.styles = `@layer global{${t.styles}}`),
      t)
    : e
}
function y0({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Qa(n),
    o = (t && r[t]) || r
  let i = typeof e == "function" ? e(o) : e
  return (
    o.modularCssLayers &&
      (Array.isArray(i)
        ? (i = i.map((s) => nc(typeof s == "function" ? s(o) : s)))
        : (i = nc(i))),
    c.jsx(u0, { styles: i })
  )
}
const E2 = ["sx"],
  R2 = (e) => {
    var t, n
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Ss
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i])
      }),
      r
    )
  }
function Xa(e) {
  const { sx: t } = e,
    n = H(e, E2),
    { systemProps: r, otherProps: o } = R2(n)
  let i
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const l = t(...s)
          return _n(l) ? b({}, r, l) : r
        })
      : (i = b({}, r, t)),
    b({}, o, { sx: i })
  )
}
const k2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Cs,
        extendSxProp: Xa,
        unstable_createStyleFunctionSx: m0,
        unstable_defaultSxConfig: Ss,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rm = (e) => e,
  P2 = () => {
    let e = rm
    return {
      configure(t) {
        e = t
      },
      generate(t) {
        return e(t)
      },
      reset() {
        e = rm
      },
    }
  },
  $2 = P2(),
  Xf = $2
function x0(e) {
  var t,
    n,
    r = ""
  if (typeof e == "string" || typeof e == "number") r += e
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length
      for (t = 0; t < o; t++)
        e[t] && (n = x0(e[t])) && (r && (r += " "), (r += n))
    } else for (n in e) e[n] && (r && (r += " "), (r += n))
  return r
}
function q() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = x0(e)) && (r && (r += " "), (r += t))
  return r
}
const T2 = ["className", "component"]
function _2(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = Hf("div", {
      shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as",
    })(Cs)
  return y.forwardRef(function (a, u) {
    const d = Qa(n),
      f = Xa(a),
      { className: h, component: C = "div" } = f,
      v = H(f, T2)
    return c.jsx(
      i,
      b(
        {
          as: C,
          ref: u,
          className: q(h, o ? o(r) : r),
          theme: (t && d[t]) || d,
        },
        v
      )
    )
  })
}
const j2 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
}
function Z(e, t, n = "Mui") {
  const r = j2[t]
  return r ? `${n}-${r}` : `${Xf.generate(e)}-${t}`
}
function Y(e, t, n = "Mui") {
  const r = {}
  return (
    t.forEach((o) => {
      r[o] = Z(e, o, n)
    }),
    r
  )
}
var b0 = { exports: {} },
  Se = {}
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yf = Symbol.for("react.transitional.element"),
  Jf = Symbol.for("react.portal"),
  Ya = Symbol.for("react.fragment"),
  Ja = Symbol.for("react.strict_mode"),
  Za = Symbol.for("react.profiler"),
  eu = Symbol.for("react.consumer"),
  tu = Symbol.for("react.context"),
  nu = Symbol.for("react.forward_ref"),
  ru = Symbol.for("react.suspense"),
  ou = Symbol.for("react.suspense_list"),
  iu = Symbol.for("react.memo"),
  su = Symbol.for("react.lazy"),
  I2 = Symbol.for("react.view_transition"),
  O2 = Symbol.for("react.client.reference")
function en(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Yf:
        switch (((e = e.type), e)) {
          case Ya:
          case Za:
          case Ja:
          case ru:
          case ou:
          case I2:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case tu:
              case nu:
              case su:
              case iu:
                return e
              case eu:
                return e
              default:
                return t
            }
        }
      case Jf:
        return t
    }
  }
}
Se.ContextConsumer = eu
Se.ContextProvider = tu
Se.Element = Yf
Se.ForwardRef = nu
Se.Fragment = Ya
Se.Lazy = su
Se.Memo = iu
Se.Portal = Jf
Se.Profiler = Za
Se.StrictMode = Ja
Se.Suspense = ru
Se.SuspenseList = ou
Se.isContextConsumer = function (e) {
  return en(e) === eu
}
Se.isContextProvider = function (e) {
  return en(e) === tu
}
Se.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yf
}
Se.isForwardRef = function (e) {
  return en(e) === nu
}
Se.isFragment = function (e) {
  return en(e) === Ya
}
Se.isLazy = function (e) {
  return en(e) === su
}
Se.isMemo = function (e) {
  return en(e) === iu
}
Se.isPortal = function (e) {
  return en(e) === Jf
}
Se.isProfiler = function (e) {
  return en(e) === Za
}
Se.isStrictMode = function (e) {
  return en(e) === Ja
}
Se.isSuspense = function (e) {
  return en(e) === ru
}
Se.isSuspenseList = function (e) {
  return en(e) === ou
}
Se.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ya ||
    e === Za ||
    e === Ja ||
    e === ru ||
    e === ou ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === su ||
        e.$$typeof === iu ||
        e.$$typeof === tu ||
        e.$$typeof === eu ||
        e.$$typeof === nu ||
        e.$$typeof === O2 ||
        e.getModuleId !== void 0))
  )
}
Se.typeOf = en
b0.exports = Se
var om = b0.exports
const M2 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/
function S0(e) {
  const t = `${e}`.match(M2)
  return (t && t[1]) || ""
}
function C0(e, t = "") {
  return e.displayName || e.name || S0(e) || t
}
function im(e, t, n) {
  const r = C0(t)
  return e.displayName || (r !== "" ? `${n}(${r})` : n)
}
function N2(e) {
  if (e != null) {
    if (typeof e == "string") return e
    if (typeof e == "function") return C0(e, "Component")
    if (typeof e == "object")
      switch (e.$$typeof) {
        case om.ForwardRef:
          return im(e, e.render, "ForwardRef")
        case om.Memo:
          return im(e, e.type, "memo")
        default:
          return
      }
  }
}
const L2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: N2, getFunctionName: S0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  A2 = ["ownerState"],
  z2 = ["variants"],
  F2 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]
function B2(e) {
  return Object.keys(e).length === 0
}
function D2(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96
}
function rc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
function sm(e, t) {
  return (
    t &&
      e &&
      typeof e == "object" &&
      e.styles &&
      !e.styles.startsWith("@layer") &&
      (e.styles = `@layer ${t}{${String(e.styles)}}`),
    e
  )
}
const U2 = ws(),
  W2 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1)
function Gs({ defaultTheme: e, theme: t, themeId: n }) {
  return B2(t) ? e : t[n] || t
}
function H2(e) {
  return e ? (t, n) => n[e] : null
}
function gl(e, t, n) {
  let { ownerState: r } = t,
    o = H(t, A2)
  const i = typeof e == "function" ? e(b({ ownerState: r }, o)) : e
  if (Array.isArray(i))
    return i.flatMap((s) => gl(s, b({ ownerState: r }, o), n))
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const { variants: s = [] } = i
    let a = H(i, z2)
    return (
      s.forEach((u) => {
        let d = !0
        if (
          (typeof u.props == "function"
            ? (d = u.props(b({ ownerState: r }, o, r)))
            : Object.keys(u.props).forEach((f) => {
                ;(r == null ? void 0 : r[f]) !== u.props[f] &&
                  o[f] !== u.props[f] &&
                  (d = !1)
              }),
          d)
        ) {
          Array.isArray(a) || (a = [a])
          const f =
            typeof u.style == "function"
              ? u.style(b({ ownerState: r }, o, r))
              : u.style
          a.push(n ? sm(Yl(f), n) : f)
        }
      }),
      a
    )
  }
  return n ? sm(Yl(i), n) : i
}
function V2(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = U2,
      rootShouldForwardProp: r = rc,
      slotShouldForwardProp: o = rc,
    } = e,
    i = (s) =>
      Cs(b({}, s, { theme: Gs(b({}, s, { defaultTheme: n, themeId: t })) }))
  return (
    (i.__mui_systemSx = !0),
    (s, l = {}) => {
      c0(s, (R) => R.filter((E) => !(E != null && E.__mui_systemSx)))
      const {
          name: a,
          slot: u,
          skipVariantsResolver: d,
          skipSx: f,
          overridesResolver: h = H2(W2(u)),
        } = l,
        C = H(l, F2),
        v = (a && a.startsWith("Mui")) || u ? "components" : "custom",
        x = d !== void 0 ? d : (u && u !== "Root" && u !== "root") || !1,
        w = f || !1
      let p,
        m = rc
      u === "Root" || u === "root"
        ? (m = r)
        : u
        ? (m = o)
        : D2(s) && (m = void 0)
      const g = Hf(s, b({ shouldForwardProp: m, label: p }, C)),
        S = (R) =>
          (typeof R == "function" && R.__emotion_real !== R) || _n(R)
            ? (E) => {
                const P = Gs({ theme: E.theme, defaultTheme: n, themeId: t })
                return gl(
                  R,
                  b({}, E, { theme: P }),
                  P.modularCssLayers ? v : void 0
                )
              }
            : R,
        k = (R, ...E) => {
          let P = S(R)
          const T = E ? E.map(S) : []
          a &&
            h &&
            T.push((N) => {
              const O = Gs(b({}, N, { defaultTheme: n, themeId: t }))
              if (
                !O.components ||
                !O.components[a] ||
                !O.components[a].styleOverrides
              )
                return null
              const L = O.components[a].styleOverrides,
                z = {}
              return (
                Object.entries(L).forEach(([B, U]) => {
                  z[B] = gl(
                    U,
                    b({}, N, { theme: O }),
                    O.modularCssLayers ? "theme" : void 0
                  )
                }),
                h(N, z)
              )
            }),
            a &&
              !x &&
              T.push((N) => {
                var O
                const L = Gs(b({}, N, { defaultTheme: n, themeId: t })),
                  z =
                    L == null ||
                    (O = L.components) == null ||
                    (O = O[a]) == null
                      ? void 0
                      : O.variants
                return gl(
                  { variants: z },
                  b({}, N, { theme: L }),
                  L.modularCssLayers ? "theme" : void 0
                )
              }),
            w || T.push(i)
          const j = T.length - E.length
          if (Array.isArray(R) && j > 0) {
            const N = new Array(j).fill("")
            ;(P = [...R, ...N]), (P.raw = [...R.raw, ...N])
          }
          const I = g(P, ...T)
          return s.muiName && (I.muiName = s.muiName), I
        }
      return g.withConfig && (k.withConfig = g.withConfig), k
    }
  )
}
const K2 = V2(),
  G2 = K2
function ns(e, t) {
  const n = b({}, t)
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = b({}, e[r], n[r])
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r]
        ;(n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = b({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = ns(o[s], i[s])
              }))
      } else n[r] === void 0 && (n[r] = e[r])
    }),
    n
  )
}
function q2(e) {
  const { theme: t, name: n, props: r } = e
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : ns(t.components[n].defaultProps, r)
}
function Q2({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Qa(n)
  return r && (o = o[r] || o), q2({ theme: o, name: t, props: e })
}
const X2 = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  pn = X2
function Y2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n))
}
const J2 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Y2 }, Symbol.toStringTag, {
    value: "Module",
  })
)
function vd(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o)
          },
    () => {}
  )
}
function Zf(e, t = 166) {
  let n
  function r(...o) {
    const i = () => {
      e.apply(this, o)
    }
    clearTimeout(n), (n = setTimeout(i, t))
  }
  return (
    (r.clear = () => {
      clearTimeout(n)
    }),
    r
  )
}
function Z2(e, t) {
  return () => null
}
function Ti(e, t) {
  var n, r
  return (
    y.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  )
}
function Rt(e) {
  return (e && e.ownerDocument) || document
}
function pr(e) {
  return Rt(e).defaultView || window
}
function eE(e, t) {
  return () => null
}
function Zl(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t)
}
let lm = 0
function tE(e) {
  const [t, n] = y.useState(e),
    r = e || t
  return (
    y.useEffect(() => {
      t == null && ((lm += 1), n(`mui-${lm}`))
    }, [t]),
    r
  )
}
const am = wl["useId".toString()]
function lu(e) {
  if (am !== void 0) {
    const t = am()
    return e ?? t
  }
  return tE(e)
}
function nE(e, t, n, r, o) {
  return null
}
function yd({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = y.useRef(e !== void 0),
    [i, s] = y.useState(t),
    l = o ? e : i,
    a = y.useCallback((u) => {
      o || s(u)
    }, [])
  return [l, a]
}
function tr(e) {
  const t = y.useRef(e)
  return (
    pn(() => {
      t.current = e
    }),
    y.useRef((...n) => (0, t.current)(...n)).current
  )
}
function Ye(...e) {
  return y.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Zl(n, t)
            })
          },
    e
  )
}
const um = {}
function rE(e, t) {
  const n = y.useRef(um)
  return n.current === um && (n.current = e(t)), n
}
const oE = []
function iE(e) {
  y.useEffect(e, oE)
}
class au {
  constructor() {
    ;(this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null))
      }),
      (this.disposeEffect = () => this.clear)
  }
  static create() {
    return new au()
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        ;(this.currentId = null), n()
      }, t))
  }
}
function w0() {
  const e = rE(au.create).current
  return iE(e.disposeEffect), e
}
let uu = !0,
  xd = !1
const sE = new au(),
  lE = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  }
function aE(e) {
  const { type: t, tagName: n } = e
  return !!(
    (n === "INPUT" && lE[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  )
}
function uE(e) {
  e.metaKey || e.altKey || e.ctrlKey || (uu = !0)
}
function oc() {
  uu = !1
}
function cE() {
  this.visibilityState === "hidden" && xd && (uu = !0)
}
function dE(e) {
  e.addEventListener("keydown", uE, !0),
    e.addEventListener("mousedown", oc, !0),
    e.addEventListener("pointerdown", oc, !0),
    e.addEventListener("touchstart", oc, !0),
    e.addEventListener("visibilitychange", cE, !0)
}
function fE(e) {
  const { target: t } = e
  try {
    return t.matches(":focus-visible")
  } catch {}
  return uu || aE(t)
}
function E0() {
  const e = y.useCallback((o) => {
      o != null && dE(o.ownerDocument)
    }, []),
    t = y.useRef(!1)
  function n() {
    return t.current
      ? ((xd = !0),
        sE.start(100, () => {
          xd = !1
        }),
        (t.current = !1),
        !0)
      : !1
  }
  function r(o) {
    return fE(o) ? ((t.current = !0), !0) : !1
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e }
}
function R0(e) {
  const t = e.documentElement.clientWidth
  return Math.abs(window.innerWidth - t)
}
function ne(e, t, n = void 0) {
  const r = {}
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const l = t(s)
            l !== "" && i.push(l), n && n[s] && i.push(n[s])
          }
          return i
        }, [])
        .join(" ")
    }),
    r
  )
}
function Io(e) {
  return typeof e == "string"
}
function k0(e, t, n) {
  return e === void 0 || Io(e)
    ? t
    : b({}, t, { ownerState: b({}, t.ownerState, n) })
}
function P0(e, t = []) {
  if (e === void 0) return {}
  const n = {}
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r]
      }),
    n
  )
}
function cm(e) {
  if (e === void 0) return {}
  const t = {}
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n]
      }),
    t
  )
}
function $0(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e
  if (!t) {
    const C = q(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      v = b(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      x = b({}, n, o, r)
    return (
      C.length > 0 && (x.className = C),
      Object.keys(v).length > 0 && (x.style = v),
      { props: x, internalRef: void 0 }
    )
  }
  const s = P0(b({}, o, r)),
    l = cm(r),
    a = cm(o),
    u = t(s),
    d = q(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    f = b(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    h = b({}, u, n, a, l)
  return (
    d.length > 0 && (h.className = d),
    Object.keys(f).length > 0 && (h.style = f),
    { props: h, internalRef: u.ref }
  )
}
function T0(e, t, n) {
  return typeof e == "function" ? e(t, n) : e
}
const pE = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
]
function Oo(e) {
  var t
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = H(e, pE),
    l = i ? {} : T0(r, o),
    { props: a, internalRef: u } = $0(b({}, s, { externalSlotProps: l })),
    d = Ye(
      u,
      l == null ? void 0 : l.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    )
  return k0(n, b({}, a, { ref: d }), o)
}
function Es(e) {
  if (parseInt(y.version, 10) >= 19) {
    var t
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null
  }
  return (e == null ? void 0 : e.ref) || null
}
const hE = y.createContext(null),
  _0 = hE
function j0() {
  return y.useContext(_0)
}
const mE = typeof Symbol == "function" && Symbol.for,
  gE = mE ? Symbol.for("mui.nested") : "__THEME_NESTED__"
function vE(e, t) {
  return typeof t == "function" ? t(e) : b({}, e, t)
}
function yE(e) {
  const { children: t, theme: n } = e,
    r = j0(),
    o = y.useMemo(() => {
      const i = r === null ? n : vE(r, n)
      return i != null && (i[gE] = r !== null), i
    }, [n, r])
  return c.jsx(_0.Provider, { value: o, children: t })
}
const xE = ["value"],
  I0 = y.createContext()
function bE(e) {
  let { value: t } = e,
    n = H(e, xE)
  return c.jsx(I0.Provider, b({ value: t ?? !0 }, n))
}
const SE = () => {
    const e = y.useContext(I0)
    return e ?? !1
  },
  O0 = y.createContext(void 0)
function CE({ value: e, children: t }) {
  return c.jsx(O0.Provider, { value: e, children: t })
}
function wE(e) {
  const { theme: t, name: n, props: r } = e
  if (!t || !t.components || !t.components[n]) return r
  const o = t.components[n]
  return o.defaultProps
    ? ns(o.defaultProps, r)
    : !o.styleOverrides && !o.variants
    ? ns(o, r)
    : r
}
function EE({ props: e, name: t }) {
  const n = y.useContext(O0)
  return wE({ props: e, name: t, theme: { components: n } })
}
function RE(e) {
  const t = Qf(),
    n = lu() || "",
    { modularCssLayers: r } = e
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx"
  return (
    !r || t !== null
      ? (o = "")
      : typeof r == "string"
      ? (o = r.replace(/mui(?!\.)/g, o))
      : (o = `@layer ${o};`),
    pn(() => {
      const i = document.querySelector("head")
      if (!i) return
      const s = i.firstChild
      if (o) {
        var l
        if (
          s &&
          (l = s.hasAttribute) != null &&
          l.call(s, "data-mui-layer-order") &&
          s.getAttribute("data-mui-layer-order") === n
        )
          return
        const u = document.createElement("style")
        u.setAttribute("data-mui-layer-order", n),
          (u.textContent = o),
          i.prepend(u)
      } else {
        var a
        ;(a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null ||
          a.remove()
      }
    }, [o, n]),
    o ? c.jsx(y0, { styles: o }) : null
  )
}
const dm = {}
function fm(e, t, n, r = !1) {
  return y.useMemo(() => {
    const o = (e && t[e]) || t
    if (typeof n == "function") {
      const i = n(o),
        s = e ? b({}, t, { [e]: i }) : i
      return r ? () => s : s
    }
    return e ? b({}, t, { [e]: n }) : b({}, t, n)
  }, [e, t, n, r])
}
function kE(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = Qf(dm),
    i = j0() || dm,
    s = fm(r, o, n),
    l = fm(r, i, n, !0),
    a = s.direction === "rtl",
    u = RE(s)
  return c.jsx(yE, {
    theme: l,
    children: c.jsx(Do.Provider, {
      value: s,
      children: c.jsx(bE, {
        value: a,
        children: c.jsxs(CE, {
          value: s == null ? void 0 : s.components,
          children: [u, t],
        }),
      }),
    }),
  })
}
const PE = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  $E = ws(),
  TE = G2("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[`maxWidth${F(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ]
    },
  }),
  _E = (e) => Q2({ props: e, name: "MuiContainer", defaultTheme: $E }),
  jE = (e, t) => {
    const n = (a) => Z(t, a),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      l = {
        root: [
          "root",
          s && `maxWidth${F(String(s))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      }
    return ne(l, n, r)
  }
function IE(e = {}) {
  const {
      createStyledComponent: t = TE,
      useThemeProps: n = _E,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: s, ownerState: l }) =>
        b(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !l.disableGutters && {
            paddingLeft: s.spacing(2),
            paddingRight: s.spacing(2),
            [s.breakpoints.up("sm")]: {
              paddingLeft: s.spacing(3),
              paddingRight: s.spacing(3),
            },
          }
        ),
      ({ theme: s, ownerState: l }) =>
        l.fixed &&
        Object.keys(s.breakpoints.values).reduce((a, u) => {
          const d = u,
            f = s.breakpoints.values[d]
          return (
            f !== 0 &&
              (a[s.breakpoints.up(d)] = {
                maxWidth: `${f}${s.breakpoints.unit}`,
              }),
            a
          )
        }, {}),
      ({ theme: s, ownerState: l }) =>
        b(
          {},
          l.maxWidth === "xs" && {
            [s.breakpoints.up("xs")]: {
              maxWidth: Math.max(s.breakpoints.values.xs, 444),
            },
          },
          l.maxWidth &&
            l.maxWidth !== "xs" && {
              [s.breakpoints.up(l.maxWidth)]: {
                maxWidth: `${s.breakpoints.values[l.maxWidth]}${
                  s.breakpoints.unit
                }`,
              },
            }
        )
    )
  return y.forwardRef(function (l, a) {
    const u = n(l),
      {
        className: d,
        component: f = "div",
        disableGutters: h = !1,
        fixed: C = !1,
        maxWidth: v = "lg",
      } = u,
      x = H(u, PE),
      w = b({}, u, { component: f, disableGutters: h, fixed: C, maxWidth: v }),
      p = jE(w, r)
    return c.jsx(
      o,
      b({ as: f, ownerState: w, className: q(p.root, d), ref: a }, x)
    )
  })
}
function OE(e, t) {
  return b(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  )
}
var We = {},
  M0 = { exports: {} }
;(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n }
  }
  ;(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports)
})(M0)
var Rs = M0.exports
const ME = Bn(hC),
  NE = Bn(J2)
var N0 = Rs
Object.defineProperty(We, "__esModule", { value: !0 })
var he = (We.alpha = F0)
We.blend = KE
We.colorChannel = void 0
var ea = (We.darken = tp)
We.decomposeColor = Jt
We.emphasize = B0
var LE = (We.getContrastRatio = DE)
We.getLuminance = na
We.hexToRgb = L0
We.hslToRgb = z0
var ta = (We.lighten = np)
We.private_safeAlpha = UE
We.private_safeColorChannel = void 0
We.private_safeDarken = WE
We.private_safeEmphasize = VE
We.private_safeLighten = HE
We.recomposeColor = Wo
We.rgbToHex = BE
var pm = N0(ME),
  AE = N0(NE)
function ep(e, t = 0, n = 1) {
  return (0, AE.default)(e, t, n)
}
function L0(e) {
  e = e.slice(1)
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g")
  let n = e.match(t)
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  )
}
function zE(e) {
  const t = e.toString(16)
  return t.length === 1 ? `0${t}` : t
}
function Jt(e) {
  if (e.type) return e
  if (e.charAt(0) === "#") return Jt(L0(e))
  const t = e.indexOf("("),
    n = e.substring(0, t)
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, pm.default)(9, e))
  let r = e.substring(t + 1, e.length - 1),
    o
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, pm.default)(10, o))
  } else r = r.split(",")
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  )
}
const A0 = (e) => {
  const t = Jt(e)
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ")
}
We.colorChannel = A0
const FE = (e, t) => {
  try {
    return A0(e)
  } catch {
    return e
  }
}
We.private_safeColorChannel = FE
function Wo(e) {
  const { type: t, colorSpace: n } = e
  let { values: r } = e
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  )
}
function BE(e) {
  if (e.indexOf("#") === 0) return e
  const { values: t } = Jt(e)
  return `#${t.map((n, r) => zE(r === 3 ? Math.round(255 * n) : n)).join("")}`
}
function z0(e) {
  e = Jt(e)
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1)
  let l = "rgb"
  const a = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ]
  return (
    e.type === "hsla" && ((l += "a"), a.push(t[3])), Wo({ type: l, values: a })
  )
}
function na(e) {
  e = Jt(e)
  let t = e.type === "hsl" || e.type === "hsla" ? Jt(z0(e)).values : e.values
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  )
}
function DE(e, t) {
  const n = na(e),
    r = na(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function F0(e, t) {
  return (
    (e = Jt(e)),
    (t = ep(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Wo(e)
  )
}
function UE(e, t, n) {
  try {
    return F0(e, t)
  } catch {
    return e
  }
}
function tp(e, t) {
  if (((e = Jt(e)), (t = ep(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return Wo(e)
}
function WE(e, t, n) {
  try {
    return tp(e, t)
  } catch {
    return e
  }
}
function np(e, t) {
  if (((e = Jt(e)), (t = ep(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return Wo(e)
}
function HE(e, t, n) {
  try {
    return np(e, t)
  } catch {
    return e
  }
}
function B0(e, t = 0.15) {
  return na(e) > 0.5 ? tp(e, t) : np(e, t)
}
function VE(e, t, n) {
  try {
    return B0(e, t)
  } catch {
    return e
  }
}
function KE(e, t, n, r = 1) {
  const o = (a, u) =>
      Math.round((a ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = Jt(e),
    s = Jt(t),
    l = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2]),
    ]
  return Wo({ type: "rgb", values: l })
}
const GE = { black: "#000", white: "#fff" },
  rs = GE,
  qE = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  QE = qE,
  XE = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Kr = XE,
  YE = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Gr = YE,
  JE = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  si = JE,
  ZE = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  qr = ZE,
  eR = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Qr = eR,
  tR = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Xr = tR,
  nR = ["mode", "contrastThreshold", "tonalOffset"],
  hm = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: rs.white, default: rs.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  ic = {
    text: {
      primary: rs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: rs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  }
function mm(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = ta(e.main, o))
      : t === "dark" && (e.dark = ea(e.main, i)))
}
function rR(e = "light") {
  return e === "dark"
    ? { main: qr[200], light: qr[50], dark: qr[400] }
    : { main: qr[700], light: qr[400], dark: qr[800] }
}
function oR(e = "light") {
  return e === "dark"
    ? { main: Kr[200], light: Kr[50], dark: Kr[400] }
    : { main: Kr[500], light: Kr[300], dark: Kr[700] }
}
function iR(e = "light") {
  return e === "dark"
    ? { main: Gr[500], light: Gr[300], dark: Gr[700] }
    : { main: Gr[700], light: Gr[400], dark: Gr[800] }
}
function sR(e = "light") {
  return e === "dark"
    ? { main: Qr[400], light: Qr[300], dark: Qr[700] }
    : { main: Qr[700], light: Qr[500], dark: Qr[900] }
}
function lR(e = "light") {
  return e === "dark"
    ? { main: Xr[400], light: Xr[300], dark: Xr[700] }
    : { main: Xr[800], light: Xr[500], dark: Xr[900] }
}
function aR(e = "light") {
  return e === "dark"
    ? { main: si[400], light: si[300], dark: si[700] }
    : { main: "#ed6c02", light: si[500], dark: si[900] }
}
function uR(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = H(e, nR),
    i = e.primary || rR(t),
    s = e.secondary || oR(t),
    l = e.error || iR(t),
    a = e.info || sR(t),
    u = e.success || lR(t),
    d = e.warning || aR(t)
  function f(x) {
    return LE(x, ic.text.primary) >= n ? ic.text.primary : hm.text.primary
  }
  const h = ({
      color: x,
      name: w,
      mainShade: p = 500,
      lightShade: m = 300,
      darkShade: g = 700,
    }) => {
      if (
        ((x = b({}, x)),
        !x.main && x[p] && (x.main = x[p]),
        !x.hasOwnProperty("main"))
      )
        throw new Error(Ar(11, w ? ` (${w})` : "", p))
      if (typeof x.main != "string")
        throw new Error(Ar(12, w ? ` (${w})` : "", JSON.stringify(x.main)))
      return (
        mm(x, "light", m, r),
        mm(x, "dark", g, r),
        x.contrastText || (x.contrastText = f(x.main)),
        x
      )
    },
    C = { dark: ic, light: hm }
  return Ot(
    b(
      {
        common: b({}, rs),
        mode: t,
        primary: h({ color: i, name: "primary" }),
        secondary: h({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: h({ color: l, name: "error" }),
        warning: h({ color: d, name: "warning" }),
        info: h({ color: a, name: "info" }),
        success: h({ color: u, name: "success" }),
        grey: QE,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: h,
        tonalOffset: r,
      },
      C[t]
    ),
    o
  )
}
const cR = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
]
function dR(e) {
  return Math.round(e * 1e5) / 1e5
}
const gm = { textTransform: "uppercase" },
  vm = '"Roboto", "Helvetica", "Arial", sans-serif'
function fR(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = vm,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: a = 700,
      htmlFontSize: u = 16,
      allVariants: d,
      pxToRem: f,
    } = n,
    h = H(n, cR),
    C = o / 14,
    v = f || ((p) => `${(p / u) * C}rem`),
    x = (p, m, g, S, k) =>
      b(
        { fontFamily: r, fontWeight: p, fontSize: v(m), lineHeight: g },
        r === vm ? { letterSpacing: `${dR(S / m)}em` } : {},
        k,
        d
      ),
    w = {
      h1: x(i, 96, 1.167, -1.5),
      h2: x(i, 60, 1.2, -0.5),
      h3: x(s, 48, 1.167, 0),
      h4: x(s, 34, 1.235, 0.25),
      h5: x(s, 24, 1.334, 0),
      h6: x(l, 20, 1.6, 0.15),
      subtitle1: x(s, 16, 1.75, 0.15),
      subtitle2: x(l, 14, 1.57, 0.1),
      body1: x(s, 16, 1.5, 0.15),
      body2: x(s, 14, 1.43, 0.15),
      button: x(l, 14, 1.75, 0.4, gm),
      caption: x(s, 12, 1.66, 0.4),
      overline: x(s, 12, 2.66, 1, gm),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    }
  return Ot(
    b(
      {
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: l,
        fontWeightBold: a,
      },
      w
    ),
    h,
    { clone: !1 }
  )
}
const pR = 0.2,
  hR = 0.14,
  mR = 0.12
function Te(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${pR})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hR})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${mR})`,
  ].join(",")
}
const gR = [
    "none",
    Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  vR = gR,
  yR = ["duration", "easing", "delay"],
  xR = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  bR = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  }
function ym(e) {
  return `${Math.round(e)}ms`
}
function SR(e) {
  if (!e) return 0
  const t = e / 36
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10)
}
function CR(e) {
  const t = b({}, xR, e.easing),
    n = b({}, bR, e.duration)
  return b(
    {
      getAutoHeightDuration: SR,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: l = t.easeInOut,
          delay: a = 0,
        } = i
        return (
          H(i, yR),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : ym(s)} ${l} ${
                  typeof a == "string" ? a : ym(a)
                }`
            )
            .join(",")
        )
      },
    },
    e,
    { easing: t, duration: n }
  )
}
const wR = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  ER = wR,
  RR = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ]
function rp(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = H(e, RR)
  if (e.vars && e.generateCssVars === void 0) throw new Error(Ar(18))
  const l = uR(r),
    a = ws(e)
  let u = Ot(a, {
    mixins: OE(a.breakpoints, n),
    palette: l,
    shadows: vR.slice(),
    typography: fR(l, i),
    transitions: CR(o),
    zIndex: b({}, ER),
  })
  return (
    (u = Ot(u, s)),
    (u = t.reduce((d, f) => Ot(d, f), u)),
    (u.unstable_sxConfig = b({}, Ss, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Cs({ sx: f, theme: this })
    }),
    u
  )
}
const kR = rp(),
  op = kR
function ip() {
  const e = Qa(op)
  return e[_o] || e
}
var ks = {},
  sc = { exports: {} },
  xm
function PR() {
  return (
    xm ||
      ((xm = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {}
          var o = {}
          for (var i in n)
            if ({}.hasOwnProperty.call(n, i)) {
              if (r.indexOf(i) !== -1) continue
              o[i] = n[i]
            }
          return o
        }
        ;(e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports)
      })(sc)),
    sc.exports
  )
}
const $R = Bn(Rw),
  TR = Bn(kw),
  _R = Bn(Ow),
  jR = Bn(L2),
  IR = Bn(S2),
  OR = Bn(k2)
var Ho = Rs
Object.defineProperty(ks, "__esModule", { value: !0 })
var MR = (ks.default = GR)
ks.shouldForwardProp = vl
ks.systemDefaultTheme = void 0
var Dt = Ho(a0()),
  bd = Ho(PR()),
  ra = DR($R),
  NR = TR
Ho(_R)
Ho(jR)
var LR = Ho(IR),
  AR = Ho(OR)
const zR = ["ownerState"],
  FR = ["variants"],
  BR = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]
function D0(e) {
  if (typeof WeakMap != "function") return null
  var t = new WeakMap(),
    n = new WeakMap()
  return (D0 = function (r) {
    return r ? n : t
  })(e)
}
function DR(e, t) {
  if (!t && e && e.__esModule) return e
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e }
  var n = D0(t)
  if (n && n.has(e)) return n.get(e)
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i])
    }
  return (r.default = e), n && n.set(e, r), r
}
function UR(e) {
  return Object.keys(e).length === 0
}
function WR(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96
}
function vl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
function bm(e, t) {
  return (
    t &&
      e &&
      typeof e == "object" &&
      e.styles &&
      !e.styles.startsWith("@layer") &&
      (e.styles = `@layer ${t}{${String(e.styles)}}`),
    e
  )
}
const HR = (ks.systemDefaultTheme = (0, LR.default)()),
  VR = (e) => e && e.charAt(0).toLowerCase() + e.slice(1)
function qs({ defaultTheme: e, theme: t, themeId: n }) {
  return UR(t) ? e : t[n] || t
}
function KR(e) {
  return e ? (t, n) => n[e] : null
}
function yl(e, t, n) {
  let { ownerState: r } = t,
    o = (0, bd.default)(t, zR)
  const i =
    typeof e == "function" ? e((0, Dt.default)({ ownerState: r }, o)) : e
  if (Array.isArray(i))
    return i.flatMap((s) => yl(s, (0, Dt.default)({ ownerState: r }, o), n))
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const { variants: s = [] } = i
    let a = (0, bd.default)(i, FR)
    return (
      s.forEach((u) => {
        let d = !0
        if (
          (typeof u.props == "function"
            ? (d = u.props((0, Dt.default)({ ownerState: r }, o, r)))
            : Object.keys(u.props).forEach((f) => {
                ;(r == null ? void 0 : r[f]) !== u.props[f] &&
                  o[f] !== u.props[f] &&
                  (d = !1)
              }),
          d)
        ) {
          Array.isArray(a) || (a = [a])
          const f =
            typeof u.style == "function"
              ? u.style((0, Dt.default)({ ownerState: r }, o, r))
              : u.style
          a.push(n ? bm((0, ra.internal_serializeStyles)(f), n) : f)
        }
      }),
      a
    )
  }
  return n ? bm((0, ra.internal_serializeStyles)(i), n) : i
}
function GR(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = HR,
      rootShouldForwardProp: r = vl,
      slotShouldForwardProp: o = vl,
    } = e,
    i = (s) =>
      (0, AR.default)(
        (0, Dt.default)({}, s, {
          theme: qs((0, Dt.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      )
  return (
    (i.__mui_systemSx = !0),
    (s, l = {}) => {
      ;(0, ra.internal_processStyles)(s, (R) =>
        R.filter((E) => !(E != null && E.__mui_systemSx))
      )
      const {
          name: a,
          slot: u,
          skipVariantsResolver: d,
          skipSx: f,
          overridesResolver: h = KR(VR(u)),
        } = l,
        C = (0, bd.default)(l, BR),
        v = (a && a.startsWith("Mui")) || u ? "components" : "custom",
        x = d !== void 0 ? d : (u && u !== "Root" && u !== "root") || !1,
        w = f || !1
      let p,
        m = vl
      u === "Root" || u === "root"
        ? (m = r)
        : u
        ? (m = o)
        : WR(s) && (m = void 0)
      const g = (0, ra.default)(
          s,
          (0, Dt.default)({ shouldForwardProp: m, label: p }, C)
        ),
        S = (R) =>
          (typeof R == "function" && R.__emotion_real !== R) ||
          (0, NR.isPlainObject)(R)
            ? (E) => {
                const P = qs({ theme: E.theme, defaultTheme: n, themeId: t })
                return yl(
                  R,
                  (0, Dt.default)({}, E, { theme: P }),
                  P.modularCssLayers ? v : void 0
                )
              }
            : R,
        k = (R, ...E) => {
          let P = S(R)
          const T = E ? E.map(S) : []
          a &&
            h &&
            T.push((N) => {
              const O = qs(
                (0, Dt.default)({}, N, { defaultTheme: n, themeId: t })
              )
              if (
                !O.components ||
                !O.components[a] ||
                !O.components[a].styleOverrides
              )
                return null
              const L = O.components[a].styleOverrides,
                z = {}
              return (
                Object.entries(L).forEach(([B, U]) => {
                  z[B] = yl(
                    U,
                    (0, Dt.default)({}, N, { theme: O }),
                    O.modularCssLayers ? "theme" : void 0
                  )
                }),
                h(N, z)
              )
            }),
            a &&
              !x &&
              T.push((N) => {
                var O
                const L = qs(
                    (0, Dt.default)({}, N, { defaultTheme: n, themeId: t })
                  ),
                  z =
                    L == null ||
                    (O = L.components) == null ||
                    (O = O[a]) == null
                      ? void 0
                      : O.variants
                return yl(
                  { variants: z },
                  (0, Dt.default)({}, N, { theme: L }),
                  L.modularCssLayers ? "theme" : void 0
                )
              }),
            w || T.push(i)
          const j = T.length - E.length
          if (Array.isArray(R) && j > 0) {
            const N = new Array(j).fill("")
            ;(P = [...R, ...N]), (P.raw = [...R.raw, ...N])
          }
          const I = g(P, ...T)
          return s.muiName && (I.muiName = s.muiName), I
        }
      return g.withConfig && (k.withConfig = g.withConfig), k
    }
  )
}
function U0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const qR = (e) => U0(e) && e !== "classes",
  tn = qR,
  QR = MR({ themeId: _o, defaultTheme: op, rootShouldForwardProp: tn }),
  K = QR,
  XR = ["theme"]
function YR(e) {
  let { theme: t } = e,
    n = H(e, XR)
  const r = t[_o]
  let o = r || t
  return (
    typeof t != "function" &&
      (r && !r.vars
        ? (o = b({}, r, { vars: null }))
        : t && !t.vars && (o = b({}, t, { vars: null }))),
    c.jsx(kE, b({}, n, { themeId: r ? _o : void 0, theme: o }))
  )
}
const JR = (e) => {
    let t
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    )
  },
  Sm = JR
function ee(e) {
  return EE(e)
}
function W0(e) {
  return c.jsx(y0, b({}, e, { defaultTheme: op, themeId: _o }))
}
const ZR = (e, t) =>
    b(
      {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  ek = (e) =>
    b({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      "@media print": { backgroundColor: (e.vars || e).palette.common.white },
    }),
  tk = (e, t = !1) => {
    var n
    const r = {}
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([s, l]) => {
        var a
        r[e.getColorSchemeSelector(s).replace(/\s*&/, "")] = {
          colorScheme: (a = l.palette) == null ? void 0 : a.mode,
        }
      })
    let o = b(
      {
        html: ZR(e, t),
        "*, *::before, *::after": { boxSizing: "inherit" },
        "strong, b": { fontWeight: e.typography.fontWeightBold },
        body: b({ margin: 0 }, ek(e), {
          "&::backdrop": {
            backgroundColor: (e.vars || e).palette.background.default,
          },
        }),
      },
      r
    )
    const i =
      (n = e.components) == null || (n = n.MuiCssBaseline) == null
        ? void 0
        : n.styleOverrides
    return i && (o = [o, i]), o
  }
function nk(e) {
  const t = ee({ props: e, name: "MuiCssBaseline" }),
    { children: n, enableColorScheme: r = !1 } = t
  return c.jsxs(y.Fragment, {
    children: [c.jsx(W0, { styles: (o) => tk(o, r) }), n],
  })
}
function rk(e) {
  return Z("MuiSvgIcon", e)
}
Y("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
])
const ok = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  ik = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${F(t)}`, `fontSize${F(n)}`],
      }
    return ne(o, rk, r)
  },
  sk = K("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.color !== "inherit" && t[`color${F(n.color)}`],
        t[`fontSize${F(n.fontSize)}`],
      ]
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, l, a, u, d, f, h, C, v
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((l = e.typography) == null || (a = l.pxToRem) == null
            ? void 0
            : a.call(l, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (d = u.pxToRem) == null
            ? void 0
            : d.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (f =
          (h = (e.vars || e).palette) == null || (h = h[t.color]) == null
            ? void 0
            : h.main) != null
          ? f
          : {
              action:
                (C = (e.vars || e).palette) == null || (C = C.action) == null
                  ? void 0
                  : C.active,
              disabled:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.disabled,
              inherit: void 0,
            }[t.color],
    }
  }),
  H0 = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: l = "svg",
        fontSize: a = "medium",
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: f,
        viewBox: h = "0 0 24 24",
      } = r,
      C = H(r, ok),
      v = y.isValidElement(o) && o.type === "svg",
      x = b({}, r, {
        color: s,
        component: l,
        fontSize: a,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: h,
        hasSvgAsChild: v,
      }),
      w = {}
    d || (w.viewBox = h)
    const p = ik(x)
    return c.jsxs(
      sk,
      b(
        {
          as: l,
          className: q(p.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        w,
        C,
        v && o.props,
        {
          ownerState: x,
          children: [
            v ? o.props.children : o,
            f ? c.jsx("title", { children: f }) : null,
          ],
        }
      )
    )
  })
H0.muiName = "SvgIcon"
const Cm = H0
function Je(e, t) {
  function n(r, o) {
    return c.jsx(
      Cm,
      b({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    )
  }
  return (n.muiName = Cm.muiName), y.memo(y.forwardRef(n))
}
const lk = {
    configure: (e) => {
      Xf.configure(e)
    },
  },
  ak = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: F,
        createChainedFunction: vd,
        createSvgIcon: Je,
        debounce: Zf,
        deprecatedPropType: Z2,
        isMuiElement: Ti,
        ownerDocument: Rt,
        ownerWindow: pr,
        requirePropFactory: eE,
        setRef: Zl,
        unstable_ClassNameGenerator: lk,
        unstable_useEnhancedEffect: pn,
        unstable_useId: lu,
        unsupportedProp: nE,
        useControlled: yd,
        useEventCallback: tr,
        useForkRef: Ye,
        useIsFocusVisible: E0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  )
function Sd(e, t) {
  return (
    (Sd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    Sd(e, t)
  )
}
function V0(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Sd(e, t)
}
const wm = { disabled: !1 },
  oa = an.createContext(null)
var uk = function (t) {
    return t.scrollTop
  },
  yi = "unmounted",
  wr = "exited",
  Er = "entering",
  Zr = "entered",
  Cd = "exiting",
  Un = (function (e) {
    V0(t, e)
    function t(r, o) {
      var i
      i = e.call(this, r, o) || this
      var s = o,
        l = s && !s.isMounting ? r.enter : r.appear,
        a
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((a = wr), (i.appearStatus = Er))
            : (a = Zr)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = yi)
          : (a = wr),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      )
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in
      return s && i.status === yi ? { status: wr } : null
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }),
      (n.componentDidUpdate = function (o) {
        var i = null
        if (o !== this.props) {
          var s = this.state.status
          this.props.in
            ? s !== Er && s !== Zr && (i = Er)
            : (s === Er || s === Zr) && (i = Cd)
        }
        this.updateStatus(!1, i)
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback()
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          l
        return (
          (i = s = l = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (l = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: l }
        )
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Er)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Vs.findDOMNode(this)
              s && uk(s)
            }
            this.performEnter(o)
          } else this.performExit()
        else
          this.props.unmountOnExit &&
            this.state.status === wr &&
            this.setState({ status: yi })
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [l] : [Vs.findDOMNode(this), l],
          u = a[0],
          d = a[1],
          f = this.getTimeouts(),
          h = l ? f.appear : f.enter
        if ((!o && !s) || wm.disabled) {
          this.safeSetState({ status: Zr }, function () {
            i.props.onEntered(u)
          })
          return
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: Er }, function () {
            i.props.onEntering(u, d),
              i.onTransitionEnd(h, function () {
                i.safeSetState({ status: Zr }, function () {
                  i.props.onEntered(u, d)
                })
              })
          })
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : Vs.findDOMNode(this)
        if (!i || wm.disabled) {
          this.safeSetState({ status: wr }, function () {
            o.props.onExited(l)
          })
          return
        }
        this.props.onExit(l),
          this.safeSetState({ status: Cd }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: wr }, function () {
                  o.props.onExited(l)
                })
              })
          })
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (n.safeSetState = function (o, i) {
        ;(i = this.setNextCallback(i)), this.setState(o, i)
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0
        return (
          (this.nextCallback = function (l) {
            s && ((s = !1), (i.nextCallback = null), o(l))
          }),
          (this.nextCallback.cancel = function () {
            s = !1
          }),
          this.nextCallback
        )
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i)
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Vs.findDOMNode(this),
          l = o == null && !this.props.addEndListener
        if (!s || l) {
          setTimeout(this.nextCallback, 0)
          return
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = a[0],
            d = a[1]
          this.props.addEndListener(u, d)
        }
        o != null && setTimeout(this.nextCallback, o)
      }),
      (n.render = function () {
        var o = this.state.status
        if (o === yi) return null
        var i = this.props,
          s = i.children
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef
        var l = H(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ])
        return an.createElement(
          oa.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, l)
            : an.cloneElement(an.Children.only(s), l)
        )
      }),
      t
    )
  })(an.Component)
Un.contextType = oa
Un.propTypes = {}
function Yr() {}
Un.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Yr,
  onEntering: Yr,
  onEntered: Yr,
  onExit: Yr,
  onExiting: Yr,
  onExited: Yr,
}
Un.UNMOUNTED = yi
Un.EXITED = wr
Un.ENTERING = Er
Un.ENTERED = Zr
Un.EXITING = Cd
const K0 = Un
function ck(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function sp(e, t) {
  var n = function (i) {
      return t && y.isValidElement(i) ? t(i) : i
    },
    r = Object.create(null)
  return (
    e &&
      y.Children.map(e, function (o) {
        return o
      }).forEach(function (o) {
        r[o.key] = n(o)
      }),
    r
  )
}
function dk(e, t) {
  ;(e = e || {}), (t = t || {})
  function n(d) {
    return d in t ? t[d] : e[d]
  }
  var r = Object.create(null),
    o = []
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i)
  var s,
    l = {}
  for (var a in t) {
    if (r[a])
      for (s = 0; s < r[a].length; s++) {
        var u = r[a][s]
        l[r[a][s]] = n(u)
      }
    l[a] = n(a)
  }
  for (s = 0; s < o.length; s++) l[o[s]] = n(o[s])
  return l
}
function $r(e, t, n) {
  return n[t] != null ? n[t] : e.props[t]
}
function fk(e, t) {
  return sp(e.children, function (n) {
    return y.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: $r(n, "appear", e),
      enter: $r(n, "enter", e),
      exit: $r(n, "exit", e),
    })
  })
}
function pk(e, t, n) {
  var r = sp(e.children),
    o = dk(t, r)
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i]
      if (y.isValidElement(s)) {
        var l = i in t,
          a = i in r,
          u = t[i],
          d = y.isValidElement(u) && !u.props.in
        a && (!l || d)
          ? (o[i] = y.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: $r(s, "exit", e),
              enter: $r(s, "enter", e),
            }))
          : !a && l && !d
          ? (o[i] = y.cloneElement(s, { in: !1 }))
          : a &&
            l &&
            y.isValidElement(u) &&
            (o[i] = y.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: $r(s, "exit", e),
              enter: $r(s, "enter", e),
            }))
      }
    }),
    o
  )
}
var hk =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    },
  mk = {
    component: "div",
    childFactory: function (t) {
      return t
    },
  },
  lp = (function (e) {
    V0(t, e)
    function t(r, o) {
      var i
      i = e.call(this, r, o) || this
      var s = i.handleExited.bind(ck(i))
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      )
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        ;(this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } })
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          l = i.handleExited,
          a = i.firstRender
        return { children: a ? fk(o, l) : pk(o, s, l), firstRender: !1 }
      }),
      (n.handleExited = function (o, i) {
        var s = sp(this.props.children)
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (l) {
              var a = b({}, l.children)
              return delete a[o.key], { children: a }
            }))
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          l = H(o, ["component", "childFactory"]),
          a = this.state.contextValue,
          u = hk(this.state.children).map(s)
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          i === null
            ? an.createElement(oa.Provider, { value: a }, u)
            : an.createElement(
                oa.Provider,
                { value: a },
                an.createElement(i, l, u)
              )
        )
      }),
      t
    )
  })(an.Component)
lp.propTypes = {}
lp.defaultProps = mk
const gk = lp,
  G0 = (e) => e.scrollTop
function ia(e, t) {
  var n, r
  const { timeout: o, easing: i, style: s = {} } = e
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  }
}
function vk(e) {
  return Z("MuiPaper", e)
}
Y("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
])
const yk = ["className", "component", "elevation", "square", "variant"],
  xk = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      }
    return ne(i, vk, o)
  },
  bk = K("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ]
    },
  })(({ theme: e, ownerState: t }) => {
    var n
    return b(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        b(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${he(
                "#fff",
                Sm(t.elevation)
              )}, ${he("#fff", Sm(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    )
  }),
  Sk = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: l = !1,
        variant: a = "elevation",
      } = r,
      u = H(r, yk),
      d = b({}, r, { component: i, elevation: s, square: l, variant: a }),
      f = xk(d)
    return c.jsx(
      bk,
      b({ as: i, ownerState: d, className: q(f.root, o), ref: n }, u)
    )
  }),
  Fe = Sk,
  Ck = [
    "className",
    "elementType",
    "ownerState",
    "externalForwardedProps",
    "getSlotOwnerState",
    "internalForwardedProps",
  ],
  wk = ["component", "slots", "slotProps"],
  Ek = ["component"]
function Em(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: l,
    } = t,
    a = H(t, Ck),
    {
      component: u,
      slots: d = { [e]: void 0 },
      slotProps: f = { [e]: void 0 },
    } = i,
    h = H(i, wk),
    C = d[e] || r,
    v = T0(f[e], o),
    x = $0(
      b({ className: n }, a, {
        externalForwardedProps: e === "root" ? h : void 0,
        externalSlotProps: v,
      })
    ),
    {
      props: { component: w },
      internalRef: p,
    } = x,
    m = H(x.props, Ek),
    g = Ye(p, v == null ? void 0 : v.ref, t.ref),
    S = s ? s(m) : {},
    k = b({}, o, S),
    R = e === "root" ? w || u : w,
    E = k0(
      C,
      b(
        {},
        e === "root" && !u && !d[e] && l,
        e !== "root" && !d[e] && l,
        m,
        R && { as: R },
        { ref: g }
      ),
      k
    )
  return (
    Object.keys(S).forEach((P) => {
      delete E[P]
    }),
    [C, E]
  )
}
function Rk(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: l,
      onExited: a,
      timeout: u,
    } = e,
    [d, f] = y.useState(!1),
    h = q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    C = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    v = q(n.child, d && n.childLeaving, r && n.childPulsate)
  return (
    !l && !d && f(!0),
    y.useEffect(() => {
      if (!l && a != null) {
        const x = setTimeout(a, u)
        return () => {
          clearTimeout(x)
        }
      }
    }, [a, l, u]),
    c.jsx("span", {
      className: h,
      style: C,
      children: c.jsx("span", { className: v }),
    })
  )
}
const kk = Y("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Ut = kk,
  Pk = ["center", "classes", "className"]
let cu = (e) => e,
  Rm,
  km,
  Pm,
  $m
const wd = 550,
  $k = 80,
  Tk = Uo(
    Rm ||
      (Rm = cu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  _k = Uo(
    km ||
      (km = cu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  jk = Uo(
    Pm ||
      (Pm = cu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  Ik = K("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  Ok = K(Rk, { name: "MuiTouchRipple", slot: "Ripple" })(
    $m ||
      ($m = cu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Ut.rippleVisible,
    Tk,
    wd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ut.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Ut.child,
    Ut.childLeaving,
    _k,
    wd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ut.childPulsate,
    jk,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  Mk = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      l = H(r, Pk),
      [a, u] = y.useState([]),
      d = y.useRef(0),
      f = y.useRef(null)
    y.useEffect(() => {
      f.current && (f.current(), (f.current = null))
    }, [a])
    const h = y.useRef(!1),
      C = w0(),
      v = y.useRef(null),
      x = y.useRef(null),
      w = y.useCallback(
        (S) => {
          const { pulsate: k, rippleX: R, rippleY: E, rippleSize: P, cb: T } = S
          u((j) => [
            ...j,
            c.jsx(
              Ok,
              {
                classes: {
                  ripple: q(i.ripple, Ut.ripple),
                  rippleVisible: q(i.rippleVisible, Ut.rippleVisible),
                  ripplePulsate: q(i.ripplePulsate, Ut.ripplePulsate),
                  child: q(i.child, Ut.child),
                  childLeaving: q(i.childLeaving, Ut.childLeaving),
                  childPulsate: q(i.childPulsate, Ut.childPulsate),
                },
                timeout: wd,
                pulsate: k,
                rippleX: R,
                rippleY: E,
                rippleSize: P,
              },
              d.current
            ),
          ]),
            (d.current += 1),
            (f.current = T)
        },
        [i]
      ),
      p = y.useCallback(
        (S = {}, k = {}, R = () => {}) => {
          const {
            pulsate: E = !1,
            center: P = o || k.pulsate,
            fakeElement: T = !1,
          } = k
          if ((S == null ? void 0 : S.type) === "mousedown" && h.current) {
            h.current = !1
            return
          }
          ;(S == null ? void 0 : S.type) === "touchstart" && (h.current = !0)
          const j = T ? null : x.current,
            I = j
              ? j.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 }
          let N, O, L
          if (
            P ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (N = Math.round(I.width / 2)), (O = Math.round(I.height / 2))
          else {
            const { clientX: z, clientY: B } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S
            ;(N = Math.round(z - I.left)), (O = Math.round(B - I.top))
          }
          if (P)
            (L = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              L % 2 === 0 && (L += 1)
          else {
            const z =
                Math.max(Math.abs((j ? j.clientWidth : 0) - N), N) * 2 + 2,
              B = Math.max(Math.abs((j ? j.clientHeight : 0) - O), O) * 2 + 2
            L = Math.sqrt(z ** 2 + B ** 2)
          }
          S != null && S.touches
            ? v.current === null &&
              ((v.current = () => {
                w({ pulsate: E, rippleX: N, rippleY: O, rippleSize: L, cb: R })
              }),
              C.start($k, () => {
                v.current && (v.current(), (v.current = null))
              }))
            : w({ pulsate: E, rippleX: N, rippleY: O, rippleSize: L, cb: R })
        },
        [o, w, C]
      ),
      m = y.useCallback(() => {
        p({}, { pulsate: !0 })
      }, [p]),
      g = y.useCallback(
        (S, k) => {
          if (
            (C.clear(),
            (S == null ? void 0 : S.type) === "touchend" && v.current)
          ) {
            v.current(),
              (v.current = null),
              C.start(0, () => {
                g(S, k)
              })
            return
          }
          ;(v.current = null),
            u((R) => (R.length > 0 ? R.slice(1) : R)),
            (f.current = k)
        },
        [C]
      )
    return (
      y.useImperativeHandle(n, () => ({ pulsate: m, start: p, stop: g }), [
        m,
        p,
        g,
      ]),
      c.jsx(
        Ik,
        b({ className: q(Ut.root, i.root, s), ref: x }, l, {
          children: c.jsx(gk, { component: null, exit: !0, children: a }),
        })
      )
    )
  }),
  Nk = Mk
function Lk(e) {
  return Z("MuiButtonBase", e)
}
const Ak = Y("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  zk = Ak,
  Fk = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  Bk = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = ne({ root: ["root", t && "disabled", n && "focusVisible"] }, Lk, o)
    return n && r && (s.root += ` ${r}`), s
  },
  Dk = K("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${zk.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  Uk = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: l,
        component: a = "button",
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: f = !1,
        focusRipple: h = !1,
        LinkComponent: C = "a",
        onBlur: v,
        onClick: x,
        onContextMenu: w,
        onDragLeave: p,
        onFocus: m,
        onFocusVisible: g,
        onKeyDown: S,
        onKeyUp: k,
        onMouseDown: R,
        onMouseLeave: E,
        onMouseUp: P,
        onTouchEnd: T,
        onTouchMove: j,
        onTouchStart: I,
        tabIndex: N = 0,
        TouchRippleProps: O,
        touchRippleRef: L,
        type: z,
      } = r,
      B = H(r, Fk),
      U = y.useRef(null),
      $ = y.useRef(null),
      M = Ye($, L),
      { isFocusVisibleRef: V, onFocus: J, onBlur: oe, ref: be } = E0(),
      [te, ye] = y.useState(!1)
    u && te && ye(!1),
      y.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ye(!0), U.current.focus()
          },
        }),
        []
      )
    const [ue, qe] = y.useState(!1)
    y.useEffect(() => {
      qe(!0)
    }, [])
    const pt = ue && !d && !u
    y.useEffect(() => {
      te && h && !d && ue && $.current.pulsate()
    }, [d, h, te, ue])
    function Be(X, Pn, Qo = f) {
      return tr(
        (Xo) => (Pn && Pn(Xo), !Qo && $.current && $.current[X](Xo), !0)
      )
    }
    const yt = Be("start", R),
      me = Be("stop", w),
      je = Be("stop", p),
      se = Be("stop", P),
      xe = Be("stop", (X) => {
        te && X.preventDefault(), E && E(X)
      }),
      Pe = Be("start", I),
      Wn = Be("stop", T),
      zt = Be("stop", j),
      Ft = Be(
        "stop",
        (X) => {
          oe(X), V.current === !1 && ye(!1), v && v(X)
        },
        !1
      ),
      nn = tr((X) => {
        U.current || (U.current = X.currentTarget),
          J(X),
          V.current === !0 && (ye(!0), g && g(X)),
          m && m(X)
      }),
      Bt = () => {
        const X = U.current
        return a && a !== "button" && !(X.tagName === "A" && X.href)
      },
      Ie = y.useRef(!1),
      Rn = tr((X) => {
        h &&
          !Ie.current &&
          te &&
          $.current &&
          X.key === " " &&
          ((Ie.current = !0),
          $.current.stop(X, () => {
            $.current.start(X)
          })),
          X.target === X.currentTarget &&
            Bt() &&
            X.key === " " &&
            X.preventDefault(),
          S && S(X),
          X.target === X.currentTarget &&
            Bt() &&
            X.key === "Enter" &&
            !u &&
            (X.preventDefault(), x && x(X))
      }),
      xt = tr((X) => {
        h &&
          X.key === " " &&
          $.current &&
          te &&
          !X.defaultPrevented &&
          ((Ie.current = !1),
          $.current.stop(X, () => {
            $.current.pulsate(X)
          })),
          k && k(X),
          x &&
            X.target === X.currentTarget &&
            Bt() &&
            X.key === " " &&
            !X.defaultPrevented &&
            x(X)
      })
    let $e = a
    $e === "button" && (B.href || B.to) && ($e = C)
    const mn = {}
    $e === "button"
      ? ((mn.type = z === void 0 ? "button" : z), (mn.disabled = u))
      : (!B.href && !B.to && (mn.role = "button"),
        u && (mn["aria-disabled"] = u))
    const Hn = Ye(n, be, U),
      kn = b({}, r, {
        centerRipple: i,
        component: a,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: f,
        focusRipple: h,
        tabIndex: N,
        focusVisible: te,
      }),
      Ce = Bk(kn)
    return c.jsxs(
      Dk,
      b(
        {
          as: $e,
          className: q(Ce.root, l),
          ownerState: kn,
          onBlur: Ft,
          onClick: x,
          onContextMenu: me,
          onFocus: nn,
          onKeyDown: Rn,
          onKeyUp: xt,
          onMouseDown: yt,
          onMouseLeave: xe,
          onMouseUp: se,
          onDragLeave: je,
          onTouchEnd: Wn,
          onTouchMove: zt,
          onTouchStart: Pe,
          ref: Hn,
          tabIndex: u ? -1 : N,
          type: z,
        },
        mn,
        B,
        { children: [s, pt ? c.jsx(Nk, b({ ref: M, center: i }, O)) : null] }
      )
    )
  }),
  Mo = Uk
function Wk(e) {
  return Z("MuiAlert", e)
}
const Hk = Y("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "colorSuccess",
    "colorInfo",
    "colorWarning",
    "colorError",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError",
  ]),
  Tm = Hk
function Vk(e) {
  return Z("MuiIconButton", e)
}
const Kk = Y("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  Gk = Kk,
  qk = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  Qk = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${F(r)}`,
          o && `edge${F(o)}`,
          `size${F(i)}`,
        ],
      }
    return ne(s, Vk, t)
  },
  Xk = K(Mo, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.color !== "default" && t[`color${F(n.color)}`],
        n.edge && t[`edge${F(n.edge)}`],
        t[`size${F(n.size)}`],
      ]
    },
  })(
    ({ theme: e, ownerState: t }) =>
      b(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : he(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color]
      return b(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          b(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": b(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : he(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${Gk.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      )
    }
  ),
  Yk = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: l = "default",
        disabled: a = !1,
        disableFocusRipple: u = !1,
        size: d = "medium",
      } = r,
      f = H(r, qk),
      h = b({}, r, {
        edge: o,
        color: l,
        disabled: a,
        disableFocusRipple: u,
        size: d,
      }),
      C = Qk(h)
    return c.jsx(
      Xk,
      b(
        {
          className: q(C.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: a,
          ref: n,
        },
        f,
        { ownerState: h, children: i }
      )
    )
  }),
  Ed = Yk,
  Jk = Je(
    c.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined"
  ),
  Zk = Je(
    c.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined"
  ),
  eP = Je(
    c.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline"
  ),
  tP = Je(
    c.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined"
  ),
  nP = Je(
    c.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  rP = [
    "action",
    "children",
    "className",
    "closeText",
    "color",
    "components",
    "componentsProps",
    "icon",
    "iconMapping",
    "onClose",
    "role",
    "severity",
    "slotProps",
    "slots",
    "variant",
  ],
  oP = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      i = {
        root: ["root", `color${F(n || r)}`, `${t}${F(n || r)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      }
    return ne(i, Wk, o)
  },
  iP = K(Fe, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${F(n.color || n.severity)}`],
      ]
    },
  })(({ theme: e }) => {
    const t = e.palette.mode === "light" ? ea : ta,
      n = e.palette.mode === "light" ? ta : ea
    return b({}, e.typography.body2, {
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette)
          .filter(([, r]) => r.main && r.light)
          .map(([r]) => ({
            props: { colorSeverity: r, variant: "standard" },
            style: {
              color: e.vars
                ? e.vars.palette.Alert[`${r}Color`]
                : t(e.palette[r].light, 0.6),
              backgroundColor: e.vars
                ? e.vars.palette.Alert[`${r}StandardBg`]
                : n(e.palette[r].light, 0.9),
              [`& .${Tm.icon}`]: e.vars
                ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                : { color: e.palette[r].main },
            },
          })),
        ...Object.entries(e.palette)
          .filter(([, r]) => r.main && r.light)
          .map(([r]) => ({
            props: { colorSeverity: r, variant: "outlined" },
            style: {
              color: e.vars
                ? e.vars.palette.Alert[`${r}Color`]
                : t(e.palette[r].light, 0.6),
              border: `1px solid ${(e.vars || e).palette[r].light}`,
              [`& .${Tm.icon}`]: e.vars
                ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                : { color: e.palette[r].main },
            },
          })),
        ...Object.entries(e.palette)
          .filter(([, r]) => r.main && r.dark)
          .map(([r]) => ({
            props: { colorSeverity: r, variant: "filled" },
            style: b(
              { fontWeight: e.typography.fontWeightMedium },
              e.vars
                ? {
                    color: e.vars.palette.Alert[`${r}FilledColor`],
                    backgroundColor: e.vars.palette.Alert[`${r}FilledBg`],
                  }
                : {
                    backgroundColor:
                      e.palette.mode === "dark"
                        ? e.palette[r].dark
                        : e.palette[r].main,
                    color: e.palette.getContrastText(e.palette[r].main),
                  }
            ),
          })),
      ],
    })
  }),
  sP = K("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  lP = K("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  _m = K("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  jm = {
    success: c.jsx(Jk, { fontSize: "inherit" }),
    warning: c.jsx(Zk, { fontSize: "inherit" }),
    error: c.jsx(eP, { fontSize: "inherit" }),
    info: c.jsx(tP, { fontSize: "inherit" }),
  },
  aP = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiAlert" }),
      {
        action: o,
        children: i,
        className: s,
        closeText: l = "Close",
        color: a,
        components: u = {},
        componentsProps: d = {},
        icon: f,
        iconMapping: h = jm,
        onClose: C,
        role: v = "alert",
        severity: x = "success",
        slotProps: w = {},
        slots: p = {},
        variant: m = "standard",
      } = r,
      g = H(r, rP),
      S = b({}, r, {
        color: a,
        severity: x,
        variant: m,
        colorSeverity: a || x,
      }),
      k = oP(S),
      R = {
        slots: b({ closeButton: u.CloseButton, closeIcon: u.CloseIcon }, p),
        slotProps: b({}, d, w),
      },
      [E, P] = Em("closeButton", {
        elementType: Ed,
        externalForwardedProps: R,
        ownerState: S,
      }),
      [T, j] = Em("closeIcon", {
        elementType: nP,
        externalForwardedProps: R,
        ownerState: S,
      })
    return c.jsxs(
      iP,
      b(
        {
          role: v,
          elevation: 0,
          ownerState: S,
          className: q(k.root, s),
          ref: n,
        },
        g,
        {
          children: [
            f !== !1
              ? c.jsx(sP, {
                  ownerState: S,
                  className: k.icon,
                  children: f || h[x] || jm[x],
                })
              : null,
            c.jsx(lP, { ownerState: S, className: k.message, children: i }),
            o != null
              ? c.jsx(_m, { ownerState: S, className: k.action, children: o })
              : null,
            o == null && C
              ? c.jsx(_m, {
                  ownerState: S,
                  className: k.action,
                  children: c.jsx(
                    E,
                    b(
                      {
                        size: "small",
                        "aria-label": l,
                        title: l,
                        color: "inherit",
                        onClick: C,
                      },
                      P,
                      { children: c.jsx(T, b({ fontSize: "small" }, j)) }
                    )
                  ),
                })
              : null,
          ],
        }
      )
    )
  }),
  No = aP
function uP(e) {
  return Z("MuiTypography", e)
}
Y("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
])
const cP = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  dP = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      l = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${F(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      }
    return ne(l, uP, s)
  },
  fP = K("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${F(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Im = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  pP = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  hP = (e) => pP[e] || e,
  mP = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTypography" }),
      o = hP(r.color),
      i = Xa(b({}, r, { color: o })),
      {
        align: s = "inherit",
        className: l,
        component: a,
        gutterBottom: u = !1,
        noWrap: d = !1,
        paragraph: f = !1,
        variant: h = "body1",
        variantMapping: C = Im,
      } = i,
      v = H(i, cP),
      x = b({}, i, {
        align: s,
        color: o,
        className: l,
        component: a,
        gutterBottom: u,
        noWrap: d,
        paragraph: f,
        variant: h,
        variantMapping: C,
      }),
      w = a || (f ? "p" : C[h] || Im[h]) || "span",
      p = dP(x)
    return c.jsx(
      fP,
      b({ as: w, ref: n, ownerState: x, className: q(p.root, l) }, v)
    )
  }),
  D = mP
function gP(e) {
  return Z("MuiAppBar", e)
}
Y("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
])
const vP = ["className", "color", "enableColorOnDark", "position"],
  yP = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${F(t)}`, `position${F(n)}`] }
    return ne(o, gP, r)
  },
  Qs = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  xP = K(Fe, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, t[`position${F(n.position)}`], t[`color${F(n.color)}`]]
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900]
    return b(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        b(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            b(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        b(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : Qs(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : Qs(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : Qs(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : Qs(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          !["inherit", "transparent"].includes(t.color) && {
            backgroundColor: "var(--AppBar-background)",
          },
          { color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)" },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    )
  }),
  bP = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: l = "fixed",
      } = r,
      a = H(r, vP),
      u = b({}, r, { color: i, position: l, enableColorOnDark: s }),
      d = yP(u)
    return c.jsx(
      xP,
      b(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: q(d.root, o, l === "fixed" && "mui-fixed"),
          ref: n,
        },
        a
      )
    )
  }),
  SP = bP
function CP(e) {
  return typeof e == "function" ? e() : e
}
const wP = y.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, l] = y.useState(null),
      a = Ye(y.isValidElement(r) ? Es(r) : null, n)
    if (
      (pn(() => {
        i || l(CP(o) || document.body)
      }, [o, i]),
      pn(() => {
        if (s && !i)
          return (
            Zl(n, s),
            () => {
              Zl(n, null)
            }
          )
      }, [n, s, i]),
      i)
    ) {
      if (y.isValidElement(r)) {
        const u = { ref: a }
        return y.cloneElement(r, u)
      }
      return c.jsx(y.Fragment, { children: r })
    }
    return c.jsx(y.Fragment, { children: s && _f.createPortal(r, s) })
  }),
  EP = wP,
  RP = Je(
    c.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
    "Cancel"
  )
function kP(e) {
  return Z("MuiChip", e)
}
const PP = Y("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  ce = PP,
  $P = [
    "avatar",
    "className",
    "clickable",
    "color",
    "component",
    "deleteIcon",
    "disabled",
    "icon",
    "label",
    "onClick",
    "onDelete",
    "onKeyDown",
    "onKeyUp",
    "size",
    "variant",
    "tabIndex",
    "skipFocusWhenDisabled",
  ],
  TP = (e) => {
    const {
        classes: t,
        disabled: n,
        size: r,
        color: o,
        iconColor: i,
        onDelete: s,
        clickable: l,
        variant: a,
      } = e,
      u = {
        root: [
          "root",
          a,
          n && "disabled",
          `size${F(r)}`,
          `color${F(o)}`,
          l && "clickable",
          l && `clickableColor${F(o)}`,
          s && "deletable",
          s && `deletableColor${F(o)}`,
          `${a}${F(o)}`,
        ],
        label: ["label", `label${F(r)}`],
        avatar: ["avatar", `avatar${F(r)}`, `avatarColor${F(o)}`],
        icon: ["icon", `icon${F(r)}`, `iconColor${F(i)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${F(r)}`,
          `deleteIconColor${F(o)}`,
          `deleteIcon${F(a)}Color${F(o)}`,
        ],
      }
    return ne(u, kP, t)
  },
  _P = K("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        {
          color: r,
          iconColor: o,
          clickable: i,
          onDelete: s,
          size: l,
          variant: a,
        } = n
      return [
        { [`& .${ce.avatar}`]: t.avatar },
        { [`& .${ce.avatar}`]: t[`avatar${F(l)}`] },
        { [`& .${ce.avatar}`]: t[`avatarColor${F(r)}`] },
        { [`& .${ce.icon}`]: t.icon },
        { [`& .${ce.icon}`]: t[`icon${F(l)}`] },
        { [`& .${ce.icon}`]: t[`iconColor${F(o)}`] },
        { [`& .${ce.deleteIcon}`]: t.deleteIcon },
        { [`& .${ce.deleteIcon}`]: t[`deleteIcon${F(l)}`] },
        { [`& .${ce.deleteIcon}`]: t[`deleteIconColor${F(r)}`] },
        { [`& .${ce.deleteIcon}`]: t[`deleteIcon${F(a)}Color${F(r)}`] },
        t.root,
        t[`size${F(l)}`],
        t[`color${F(r)}`],
        i && t.clickable,
        i && r !== "default" && t[`clickableColor${F(r)})`],
        s && t.deletable,
        s && r !== "default" && t[`deletableColor${F(r)}`],
        t[a],
        t[`${a}${F(r)}`],
      ]
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300]
      return b(
        {
          maxWidth: "100%",
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: "nowrap",
          transition: e.transitions.create(["background-color", "box-shadow"]),
          cursor: "unset",
          outline: 0,
          textDecoration: "none",
          border: 0,
          padding: 0,
          verticalAlign: "middle",
          boxSizing: "border-box",
          [`&.${ce.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: "none",
          },
          [`& .${ce.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
            fontSize: e.typography.pxToRem(12),
          },
          [`& .${ce.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
          [`& .${ce.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark,
          },
          [`& .${ce.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10),
          },
          [`& .${ce.icon}`]: b(
            { marginLeft: 5, marginRight: -6 },
            t.size === "small" && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            t.iconColor === t.color &&
              b(
                { color: e.vars ? e.vars.palette.Chip.defaultIconColor : n },
                t.color !== "default" && { color: "inherit" }
              )
          ),
          [`& .${ce.deleteIcon}`]: b(
            {
              WebkitTapHighlightColor: "transparent",
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : he(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: "pointer",
              margin: "0 5px 0 -6px",
              "&:hover": {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : he(e.palette.text.primary, 0.4),
              },
            },
            t.size === "small" && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
            t.color !== "default" && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : he(e.palette[t.color].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].contrastText,
              },
            }
          ),
        },
        t.size === "small" && { height: 24 },
        t.color !== "default" && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText,
        },
        t.onDelete && {
          [`&.${ce.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : he(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        t.onDelete &&
          t.color !== "default" && {
            [`&.${ce.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      )
    },
    ({ theme: e, ownerState: t }) =>
      b(
        {},
        t.clickable && {
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : he(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
          },
          [`&.${ce.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : he(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
          "&:active": { boxShadow: (e.vars || e).shadows[1] },
        },
        t.clickable &&
          t.color !== "default" && {
            [`&:hover, &.${ce.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      b(
        {},
        t.variant === "outlined" && {
          backgroundColor: "transparent",
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${
                e.palette.mode === "light"
                  ? e.palette.grey[400]
                  : e.palette.grey[700]
              }`,
          [`&.${ce.clickable}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover,
          },
          [`&.${ce.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`& .${ce.avatar}`]: { marginLeft: 4 },
          [`& .${ce.avatarSmall}`]: { marginLeft: 2 },
          [`& .${ce.icon}`]: { marginLeft: 4 },
          [`& .${ce.iconSmall}`]: { marginLeft: 2 },
          [`& .${ce.deleteIcon}`]: { marginRight: 5 },
          [`& .${ce.deleteIconSmall}`]: { marginRight: 3 },
        },
        t.variant === "outlined" &&
          t.color !== "default" && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${
              e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : he(e.palette[t.color].main, 0.7)
            }`,
            [`&.${ce.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : he(e.palette[t.color].main, e.palette.action.hoverOpacity),
            },
            [`&.${ce.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.focusOpacity
                  })`
                : he(e.palette[t.color].main, e.palette.action.focusOpacity),
            },
            [`& .${ce.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : he(e.palette[t.color].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].main,
              },
            },
          }
      )
  ),
  jP = K("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { size: r } = n
      return [t.label, t[`label${F(r)}`]]
    },
  })(({ ownerState: e }) =>
    b(
      {
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: "nowrap",
      },
      e.variant === "outlined" && { paddingLeft: 11, paddingRight: 11 },
      e.size === "small" && { paddingLeft: 8, paddingRight: 8 },
      e.size === "small" &&
        e.variant === "outlined" && { paddingLeft: 7, paddingRight: 7 }
    )
  )
function Om(e) {
  return e.key === "Backspace" || e.key === "Delete"
}
const IP = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiChip" }),
      {
        avatar: o,
        className: i,
        clickable: s,
        color: l = "default",
        component: a,
        deleteIcon: u,
        disabled: d = !1,
        icon: f,
        label: h,
        onClick: C,
        onDelete: v,
        onKeyDown: x,
        onKeyUp: w,
        size: p = "medium",
        variant: m = "filled",
        tabIndex: g,
        skipFocusWhenDisabled: S = !1,
      } = r,
      k = H(r, $P),
      R = y.useRef(null),
      E = Ye(R, n),
      P = (M) => {
        M.stopPropagation(), v && v(M)
      },
      T = (M) => {
        M.currentTarget === M.target && Om(M) && M.preventDefault(), x && x(M)
      },
      j = (M) => {
        M.currentTarget === M.target &&
          (v && Om(M)
            ? v(M)
            : M.key === "Escape" && R.current && R.current.blur()),
          w && w(M)
      },
      I = s !== !1 && C ? !0 : s,
      N = I || v ? Mo : a || "div",
      O = b({}, r, {
        component: N,
        disabled: d,
        size: p,
        color: l,
        iconColor: (y.isValidElement(f) && f.props.color) || l,
        onDelete: !!v,
        clickable: I,
        variant: m,
      }),
      L = TP(O),
      z =
        N === Mo
          ? b(
              { component: a || "div", focusVisibleClassName: L.focusVisible },
              v && { disableRipple: !0 }
            )
          : {}
    let B = null
    v &&
      (B =
        u && y.isValidElement(u)
          ? y.cloneElement(u, {
              className: q(u.props.className, L.deleteIcon),
              onClick: P,
            })
          : c.jsx(RP, { className: q(L.deleteIcon), onClick: P }))
    let U = null
    o &&
      y.isValidElement(o) &&
      (U = y.cloneElement(o, { className: q(L.avatar, o.props.className) }))
    let $ = null
    return (
      f &&
        y.isValidElement(f) &&
        ($ = y.cloneElement(f, { className: q(L.icon, f.props.className) })),
      c.jsxs(
        _P,
        b(
          {
            as: N,
            className: q(L.root, i),
            disabled: I && d ? !0 : void 0,
            onClick: C,
            onKeyDown: T,
            onKeyUp: j,
            ref: E,
            tabIndex: S && d ? -1 : g,
            ownerState: O,
          },
          z,
          k,
          {
            children: [
              U || $,
              c.jsx(jP, { className: q(L.label), ownerState: O, children: h }),
              B,
            ],
          }
        )
      )
    )
  }),
  _i = IP,
  OP = ["onChange", "maxRows", "minRows", "style", "value"]
function Xs(e) {
  return parseInt(e, 10) || 0
}
const MP = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
}
function NP(e) {
  for (const t in e) return !1
  return !0
}
function Mm(e) {
  return NP(e) || (e.outerHeightStyle === 0 && !e.overflowing)
}
const LP = y.forwardRef(function (t, n) {
    const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: l } = t,
      a = H(t, OP),
      { current: u } = y.useRef(l != null),
      d = y.useRef(null),
      f = Ye(n, d),
      h = y.useRef(null),
      C = y.useRef(null),
      v = y.useCallback(() => {
        const g = d.current,
          S = C.current
        if (!g || !S) return
        const R = pr(g).getComputedStyle(g)
        if (R.width === "0px") return { outerHeightStyle: 0, overflowing: !1 }
        ;(S.style.width = R.width),
          (S.value = g.value || t.placeholder || "x"),
          S.value.slice(-1) ===
            `
` && (S.value += " ")
        const E = R.boxSizing,
          P = Xs(R.paddingBottom) + Xs(R.paddingTop),
          T = Xs(R.borderBottomWidth) + Xs(R.borderTopWidth),
          j = S.scrollHeight
        S.value = "x"
        const I = S.scrollHeight
        let N = j
        i && (N = Math.max(Number(i) * I, N)),
          o && (N = Math.min(Number(o) * I, N)),
          (N = Math.max(N, I))
        const O = N + (E === "border-box" ? P + T : 0),
          L = Math.abs(N - j) <= 1
        return { outerHeightStyle: O, overflowing: L }
      }, [o, i, t.placeholder]),
      x = tr(() => {
        const g = d.current,
          S = v()
        if (!g || !S || Mm(S)) return !1
        const k = S.outerHeightStyle
        return h.current != null && h.current !== k
      }),
      w = y.useCallback(() => {
        const g = d.current,
          S = v()
        if (!g || !S || Mm(S)) return
        const k = S.outerHeightStyle
        h.current !== k && ((h.current = k), (g.style.height = `${k}px`)),
          (g.style.overflow = S.overflowing ? "hidden" : "")
      }, [v]),
      p = y.useRef(-1)
    pn(() => {
      const g = Zf(w),
        S = d == null ? void 0 : d.current
      if (!S) return
      const k = pr(S)
      k.addEventListener("resize", g)
      let R
      return (
        typeof ResizeObserver < "u" &&
          ((R = new ResizeObserver(() => {
            x() &&
              (R.unobserve(S),
              cancelAnimationFrame(p.current),
              w(),
              (p.current = requestAnimationFrame(() => {
                R.observe(S)
              })))
          })),
          R.observe(S)),
        () => {
          g.clear(),
            cancelAnimationFrame(p.current),
            k.removeEventListener("resize", g),
            R && R.disconnect()
        }
      )
    }, [v, w, x]),
      pn(() => {
        w()
      })
    const m = (g) => {
      u || w(), r && r(g)
    }
    return c.jsxs(y.Fragment, {
      children: [
        c.jsx(
          "textarea",
          b({ value: l, onChange: m, ref: f, rows: i, style: s }, a)
        ),
        c.jsx("textarea", {
          "aria-hidden": !0,
          className: t.className,
          readOnly: !0,
          ref: C,
          tabIndex: -1,
          style: b({}, MP.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
        }),
      ],
    })
  }),
  AP = LP
function Vo({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  )
}
const zP = y.createContext(void 0),
  ap = zP
function Ko() {
  return y.useContext(ap)
}
function Nm(e) {
  return e != null && !(Array.isArray(e) && e.length === 0)
}
function sa(e, t = !1) {
  return (
    e &&
    ((Nm(e.value) && e.value !== "") ||
      (t && Nm(e.defaultValue) && e.defaultValue !== ""))
  )
}
function FP(e) {
  return e.startAdornment
}
function BP(e) {
  return Z("MuiInputBase", e)
}
const DP = Y("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  Lo = DP,
  UP = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  du = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${F(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ]
  },
  fu = (e, t) => {
    const { ownerState: n } = e
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ]
  },
  WP = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: l,
        fullWidth: a,
        hiddenLabel: u,
        multiline: d,
        readOnly: f,
        size: h,
        startAdornment: C,
        type: v,
      } = e,
      x = {
        root: [
          "root",
          `color${F(n)}`,
          r && "disabled",
          o && "error",
          a && "fullWidth",
          s && "focused",
          l && "formControl",
          h && h !== "medium" && `size${F(h)}`,
          d && "multiline",
          C && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          f && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          v === "search" && "inputTypeSearch",
          d && "inputMultiline",
          h === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          C && "inputAdornedStart",
          i && "inputAdornedEnd",
          f && "readOnly",
        ],
      }
    return ne(x, BP, t)
  },
  pu = K("div", { name: "MuiInputBase", slot: "Root", overridesResolver: du })(
    ({ theme: e, ownerState: t }) =>
      b(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${Lo.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          b({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  hu = K("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: fu,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = b(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 }
    return b(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Lo.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${Lo.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    )
  }),
  HP = c.jsx(W0, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  VP = y.forwardRef(function (t, n) {
    var r
    const o = ee({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: l,
        className: a,
        components: u = {},
        componentsProps: d = {},
        defaultValue: f,
        disabled: h,
        disableInjectingGlobalStyles: C,
        endAdornment: v,
        fullWidth: x = !1,
        id: w,
        inputComponent: p = "input",
        inputProps: m = {},
        inputRef: g,
        maxRows: S,
        minRows: k,
        multiline: R = !1,
        name: E,
        onBlur: P,
        onChange: T,
        onClick: j,
        onFocus: I,
        onKeyDown: N,
        onKeyUp: O,
        placeholder: L,
        readOnly: z,
        renderSuffix: B,
        rows: U,
        slotProps: $ = {},
        slots: M = {},
        startAdornment: V,
        type: J = "text",
        value: oe,
      } = o,
      be = H(o, UP),
      te = m.value != null ? m.value : oe,
      { current: ye } = y.useRef(te != null),
      ue = y.useRef(),
      qe = y.useCallback((Ce) => {}, []),
      pt = Ye(ue, g, m.ref, qe),
      [Be, yt] = y.useState(!1),
      me = Ko(),
      je = Vo({
        props: o,
        muiFormControl: me,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      })
    ;(je.focused = me ? me.focused : Be),
      y.useEffect(() => {
        !me && h && Be && (yt(!1), P && P())
      }, [me, h, Be, P])
    const se = me && me.onFilled,
      xe = me && me.onEmpty,
      Pe = y.useCallback(
        (Ce) => {
          sa(Ce) ? se && se() : xe && xe()
        },
        [se, xe]
      )
    pn(() => {
      ye && Pe({ value: te })
    }, [te, Pe, ye])
    const Wn = (Ce) => {
        if (je.disabled) {
          Ce.stopPropagation()
          return
        }
        I && I(Ce),
          m.onFocus && m.onFocus(Ce),
          me && me.onFocus ? me.onFocus(Ce) : yt(!0)
      },
      zt = (Ce) => {
        P && P(Ce),
          m.onBlur && m.onBlur(Ce),
          me && me.onBlur ? me.onBlur(Ce) : yt(!1)
      },
      Ft = (Ce, ...X) => {
        if (!ye) {
          const Pn = Ce.target || ue.current
          if (Pn == null) throw new Error(Ar(1))
          Pe({ value: Pn.value })
        }
        m.onChange && m.onChange(Ce, ...X), T && T(Ce, ...X)
      }
    y.useEffect(() => {
      Pe(ue.current)
    }, [])
    const nn = (Ce) => {
      ue.current && Ce.currentTarget === Ce.target && ue.current.focus(),
        j && j(Ce)
    }
    let Bt = p,
      Ie = m
    R &&
      Bt === "input" &&
      (U
        ? (Ie = b({ type: void 0, minRows: U, maxRows: U }, Ie))
        : (Ie = b({ type: void 0, maxRows: S, minRows: k }, Ie)),
      (Bt = AP))
    const Rn = (Ce) => {
      Pe(
        Ce.animationName === "mui-auto-fill-cancel"
          ? ue.current
          : { value: "x" }
      )
    }
    y.useEffect(() => {
      me && me.setAdornedStart(!!V)
    }, [me, V])
    const xt = b({}, o, {
        color: je.color || "primary",
        disabled: je.disabled,
        endAdornment: v,
        error: je.error,
        focused: je.focused,
        formControl: me,
        fullWidth: x,
        hiddenLabel: je.hiddenLabel,
        multiline: R,
        size: je.size,
        startAdornment: V,
        type: J,
      }),
      $e = WP(xt),
      mn = M.root || u.Root || pu,
      Hn = $.root || d.root || {},
      kn = M.input || u.Input || hu
    return (
      (Ie = b({}, Ie, (r = $.input) != null ? r : d.input)),
      c.jsxs(y.Fragment, {
        children: [
          !C && HP,
          c.jsxs(
            mn,
            b(
              {},
              Hn,
              !Io(mn) && { ownerState: b({}, xt, Hn.ownerState) },
              { ref: n, onClick: nn },
              be,
              {
                className: q(
                  $e.root,
                  Hn.className,
                  a,
                  z && "MuiInputBase-readOnly"
                ),
                children: [
                  V,
                  c.jsx(ap.Provider, {
                    value: null,
                    children: c.jsx(
                      kn,
                      b(
                        {
                          ownerState: xt,
                          "aria-invalid": je.error,
                          "aria-describedby": i,
                          autoComplete: s,
                          autoFocus: l,
                          defaultValue: f,
                          disabled: je.disabled,
                          id: w,
                          onAnimationStart: Rn,
                          name: E,
                          placeholder: L,
                          readOnly: z,
                          required: je.required,
                          rows: U,
                          value: te,
                          onKeyDown: N,
                          onKeyUp: O,
                          type: J,
                        },
                        Ie,
                        !Io(kn) && {
                          as: Bt,
                          ownerState: b({}, xt, Ie.ownerState),
                        },
                        {
                          ref: pt,
                          className: q(
                            $e.input,
                            Ie.className,
                            z && "MuiInputBase-readOnly"
                          ),
                          onBlur: zt,
                          onChange: Ft,
                          onFocus: Wn,
                        }
                      )
                    ),
                  }),
                  v,
                  B ? B(b({}, je, { startAdornment: V })) : null,
                ],
              }
            )
          ),
        ],
      })
    )
  }),
  up = VP
function KP(e) {
  return Z("MuiInput", e)
}
const GP = b({}, Lo, Y("MuiInput", ["root", "underline", "input"])),
  li = GP
function qP(e) {
  return Z("MuiOutlinedInput", e)
}
const QP = b(
    {},
    Lo,
    Y("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  Kn = QP
function XP(e) {
  return Z("MuiFilledInput", e)
}
const YP = b({}, Lo, Y("MuiFilledInput", ["root", "underline", "input"])),
  vr = YP,
  JP = Je(c.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  ZP = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  e$ = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  t$ = y.forwardRef(function (t, n) {
    const r = ip(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: l,
        easing: a,
        in: u,
        onEnter: d,
        onEntered: f,
        onEntering: h,
        onExit: C,
        onExited: v,
        onExiting: x,
        style: w,
        timeout: p = o,
        TransitionComponent: m = K0,
      } = t,
      g = H(t, ZP),
      S = y.useRef(null),
      k = Ye(S, Es(l), n),
      R = (L) => (z) => {
        if (L) {
          const B = S.current
          z === void 0 ? L(B) : L(B, z)
        }
      },
      E = R(h),
      P = R((L, z) => {
        G0(L)
        const B = ia({ style: w, timeout: p, easing: a }, { mode: "enter" })
        ;(L.style.webkitTransition = r.transitions.create("opacity", B)),
          (L.style.transition = r.transitions.create("opacity", B)),
          d && d(L, z)
      }),
      T = R(f),
      j = R(x),
      I = R((L) => {
        const z = ia({ style: w, timeout: p, easing: a }, { mode: "exit" })
        ;(L.style.webkitTransition = r.transitions.create("opacity", z)),
          (L.style.transition = r.transitions.create("opacity", z)),
          C && C(L)
      }),
      N = R(v),
      O = (L) => {
        i && i(S.current, L)
      }
    return c.jsx(
      m,
      b(
        {
          appear: s,
          in: u,
          nodeRef: S,
          onEnter: P,
          onEntered: T,
          onEntering: E,
          onExit: I,
          onExited: N,
          onExiting: j,
          addEndListener: O,
          timeout: p,
        },
        g,
        {
          children: (L, z) =>
            y.cloneElement(
              l,
              b(
                {
                  style: b(
                    {
                      opacity: 0,
                      visibility: L === "exited" && !u ? "hidden" : void 0,
                    },
                    e$[L],
                    w,
                    l.props.style
                  ),
                  ref: k,
                },
                z
              )
            ),
        }
      )
    )
  }),
  n$ = t$
function r$(e) {
  return Z("MuiBackdrop", e)
}
Y("MuiBackdrop", ["root", "invisible"])
const o$ = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  i$ = (e) => {
    const { classes: t, invisible: n } = e
    return ne({ root: ["root", n && "invisible"] }, r$, t)
  },
  s$ = K("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.invisible && t.invisible]
    },
  })(({ ownerState: e }) =>
    b(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  l$ = y.forwardRef(function (t, n) {
    var r, o, i
    const s = ee({ props: t, name: "MuiBackdrop" }),
      {
        children: l,
        className: a,
        component: u = "div",
        components: d = {},
        componentsProps: f = {},
        invisible: h = !1,
        open: C,
        slotProps: v = {},
        slots: x = {},
        TransitionComponent: w = n$,
        transitionDuration: p,
      } = s,
      m = H(s, o$),
      g = b({}, s, { component: u, invisible: h }),
      S = i$(g),
      k = (r = v.root) != null ? r : f.root
    return c.jsx(
      w,
      b({ in: C, timeout: p }, m, {
        children: c.jsx(
          s$,
          b({ "aria-hidden": !0 }, k, {
            as: (o = (i = x.root) != null ? i : d.Root) != null ? o : u,
            className: q(S.root, a, k == null ? void 0 : k.className),
            ownerState: b({}, g, k == null ? void 0 : k.ownerState),
            classes: S,
            ref: n,
            children: l,
          })
        ),
      })
    )
  }),
  a$ = l$,
  u$ = Y("MuiBox", ["root"]),
  c$ = u$,
  d$ = rp(),
  f$ = _2({
    themeId: _o,
    defaultTheme: d$,
    defaultClassName: c$.root,
    generateClassName: Xf.generate,
  }),
  le = f$
function p$(e) {
  return Z("MuiButton", e)
}
const h$ = Y("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Ys = h$,
  m$ = y.createContext({}),
  g$ = m$,
  v$ = y.createContext(void 0),
  y$ = v$,
  x$ = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  b$ = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      l = {
        root: [
          "root",
          i,
          `${i}${F(t)}`,
          `size${F(o)}`,
          `${i}Size${F(o)}`,
          `color${F(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${F(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${F(o)}`],
      },
      a = ne(l, p$, s)
    return b({}, s, a)
  },
  q0 = (e) =>
    b(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  S$ = K(Mo, {
    shouldForwardProp: (e) => tn(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${F(n.color)}`],
        t[`size${F(n.size)}`],
        t[`${n.variant}Size${F(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ]
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700]
      return b(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": b(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : he(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : he(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : he(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": b(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Ys.focusVisible}`]: b(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Ys.disabled}`]: b(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${he(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      )
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Ys.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Ys.disabled}`]: { boxShadow: "none" },
      }
  ),
  C$ = K("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.startIcon, t[`iconSize${F(n.size)}`]]
    },
  })(({ ownerState: e }) =>
    b(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      q0(e)
    )
  ),
  w$ = K("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.endIcon, t[`iconSize${F(n.size)}`]]
    },
  })(({ ownerState: e }) =>
    b(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      q0(e)
    )
  ),
  E$ = y.forwardRef(function (t, n) {
    const r = y.useContext(g$),
      o = y.useContext(y$),
      i = ns(r, t),
      s = ee({ props: i, name: "MuiButton" }),
      {
        children: l,
        color: a = "primary",
        component: u = "button",
        className: d,
        disabled: f = !1,
        disableElevation: h = !1,
        disableFocusRipple: C = !1,
        endIcon: v,
        focusVisibleClassName: x,
        fullWidth: w = !1,
        size: p = "medium",
        startIcon: m,
        type: g,
        variant: S = "text",
      } = s,
      k = H(s, x$),
      R = b({}, s, {
        color: a,
        component: u,
        disabled: f,
        disableElevation: h,
        disableFocusRipple: C,
        fullWidth: w,
        size: p,
        type: g,
        variant: S,
      }),
      E = b$(R),
      P =
        m && c.jsx(C$, { className: E.startIcon, ownerState: R, children: m }),
      T = v && c.jsx(w$, { className: E.endIcon, ownerState: R, children: v }),
      j = o || ""
    return c.jsxs(
      S$,
      b(
        {
          ownerState: R,
          className: q(r.className, E.root, d, j),
          component: u,
          disabled: f,
          focusRipple: !C,
          focusVisibleClassName: q(E.focusVisible, x),
          ref: n,
          type: g,
        },
        k,
        { classes: E, children: [P, l, T] }
      )
    )
  }),
  R$ = E$
function k$(e) {
  return Z("MuiCard", e)
}
Y("MuiCard", ["root"])
const P$ = ["className", "raised"],
  $$ = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"] }, k$, t)
  },
  T$ = K(Fe, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  _$ = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      s = H(r, P$),
      l = b({}, r, { raised: i }),
      a = $$(l)
    return c.jsx(
      T$,
      b(
        {
          className: q(a.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: l,
        },
        s
      )
    )
  }),
  Js = _$
function j$(e) {
  return Z("MuiCardContent", e)
}
Y("MuiCardContent", ["root"])
const I$ = ["className", "component"],
  O$ = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"] }, j$, t)
  },
  M$ = K("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  N$ = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      s = H(r, I$),
      l = b({}, r, { component: i }),
      a = O$(l)
    return c.jsx(
      M$,
      b({ as: i, className: q(a.root, o), ownerState: l, ref: n }, s)
    )
  }),
  Zs = N$
function L$(e) {
  return Z("MuiCircularProgress", e)
}
Y("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
])
const A$ = [
  "className",
  "color",
  "disableShrink",
  "size",
  "style",
  "thickness",
  "value",
  "variant",
]
let mu = (e) => e,
  Lm,
  Am,
  zm,
  Fm
const Gn = 44,
  z$ = Uo(
    Lm ||
      (Lm = mu`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  F$ = Uo(
    Am ||
      (Am = mu`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  B$ = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${F(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${F(n)}`, o && "circleDisableShrink"],
      }
    return ne(i, L$, t)
  },
  D$ = K("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, t[n.variant], t[`color${F(n.color)}`]]
    },
  })(
    ({ ownerState: e, theme: t }) =>
      b(
        { display: "inline-block" },
        e.variant === "determinate" && {
          transition: t.transitions.create("transform"),
        },
        e.color !== "inherit" && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      Da(
        zm ||
          (zm = mu`
      animation: ${0} 1.4s linear infinite;
    `),
        z$
      )
  ),
  U$ = K("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  W$ = K("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.circle,
        t[`circle${F(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ]
    },
  })(
    ({ ownerState: e, theme: t }) =>
      b(
        { stroke: "currentColor" },
        e.variant === "determinate" && {
          transition: t.transitions.create("stroke-dashoffset"),
        },
        e.variant === "indeterminate" && {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      !e.disableShrink &&
      Da(
        Fm ||
          (Fm = mu`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        F$
      )
  ),
  H$ = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: s = !1,
        size: l = 40,
        style: a,
        thickness: u = 3.6,
        value: d = 0,
        variant: f = "indeterminate",
      } = r,
      h = H(r, A$),
      C = b({}, r, {
        color: i,
        disableShrink: s,
        size: l,
        thickness: u,
        value: d,
        variant: f,
      }),
      v = B$(C),
      x = {},
      w = {},
      p = {}
    if (f === "determinate") {
      const m = 2 * Math.PI * ((Gn - u) / 2)
      ;(x.strokeDasharray = m.toFixed(3)),
        (p["aria-valuenow"] = Math.round(d)),
        (x.strokeDashoffset = `${(((100 - d) / 100) * m).toFixed(3)}px`),
        (w.transform = "rotate(-90deg)")
    }
    return c.jsx(
      D$,
      b(
        {
          className: q(v.root, o),
          style: b({ width: l, height: l }, w, a),
          ownerState: C,
          ref: n,
          role: "progressbar",
        },
        p,
        h,
        {
          children: c.jsx(U$, {
            className: v.svg,
            ownerState: C,
            viewBox: `${Gn / 2} ${Gn / 2} ${Gn} ${Gn}`,
            children: c.jsx(W$, {
              className: v.circle,
              style: x,
              ownerState: C,
              cx: Gn,
              cy: Gn,
              r: (Gn - u) / 2,
              fill: "none",
              strokeWidth: u,
            }),
          }),
        }
      )
    )
  }),
  gu = H$,
  V$ = IE({
    createStyledComponent: K("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e
        return [
          t.root,
          t[`maxWidth${F(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ]
      },
    }),
    useThemeProps: (e) => ee({ props: e, name: "MuiContainer" }),
  }),
  K$ = V$
function G$(e) {
  const t = Rt(e)
  return t.body === e
    ? pr(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight
}
function ji(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}
function Bm(e) {
  return parseInt(pr(e).getComputedStyle(e).paddingRight, 10) || 0
}
function q$(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden"
  return n || r
}
function Dm(e, t, n, r, o) {
  const i = [t, n, ...r]
  ;[].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1,
      a = !q$(s)
    l && a && ji(s, o)
  })
}
function lc(e, t) {
  let n = -1
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n
}
function Q$(e, t) {
  const n = [],
    r = e.container
  if (!t.disableScrollLock) {
    if (G$(r)) {
      const s = R0(Rt(r))
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Bm(r) + s}px`)
      const l = Rt(r).querySelectorAll(".mui-fixed")
      ;[].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a,
        }),
          (a.style.paddingRight = `${Bm(a) + s}px`)
      })
    }
    let i
    if (r.parentNode instanceof DocumentFragment) i = Rt(r).body
    else {
      const s = r.parentElement,
        l = pr(r)
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        l.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden")
  }
  return () => {
    n.forEach(({ value: i, el: s, property: l }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l)
    })
  }
}
function X$(e) {
  const t = []
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n)
    }),
    t
  )
}
class Y$ {
  constructor() {
    ;(this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = [])
  }
  add(t, n) {
    let r = this.modals.indexOf(t)
    if (r !== -1) return r
    ;(r = this.modals.length),
      this.modals.push(t),
      t.modalRef && ji(t.modalRef, !1)
    const o = X$(n)
    Dm(n, t.mount, t.modalRef, o, !0)
    const i = lc(this.containers, (s) => s.container === n)
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r)
  }
  mount(t, n) {
    const r = lc(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r]
    o.restore || (o.restore = Q$(o, n))
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t)
    if (r === -1) return r
    const o = lc(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o]
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && ji(t.modalRef, n),
        Dm(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1)
    else {
      const s = i.modals[i.modals.length - 1]
      s.modalRef && ji(s.modalRef, !1)
    }
    return r
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
  }
}
const J$ = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",")
function Z$(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10)
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t
}
function eT(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`)
  let n = t(`[name="${e.name}"]:checked`)
  return n || (n = t(`[name="${e.name}"]`)), n !== e
}
function tT(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    eT(e)
  )
}
function nT(e) {
  const t = [],
    n = []
  return (
    Array.from(e.querySelectorAll(J$)).forEach((r, o) => {
      const i = Z$(r)
      i === -1 ||
        !tT(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }))
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  )
}
function rT() {
  return !0
}
function oT(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = nT,
      isEnabled: s = rT,
      open: l,
    } = e,
    a = y.useRef(!1),
    u = y.useRef(null),
    d = y.useRef(null),
    f = y.useRef(null),
    h = y.useRef(null),
    C = y.useRef(!1),
    v = y.useRef(null),
    x = Ye(Es(t), v),
    w = y.useRef(null)
  y.useEffect(() => {
    !l || !v.current || (C.current = !n)
  }, [n, l]),
    y.useEffect(() => {
      if (!l || !v.current) return
      const g = Rt(v.current)
      return (
        v.current.contains(g.activeElement) ||
          (v.current.hasAttribute("tabIndex") ||
            v.current.setAttribute("tabIndex", "-1"),
          C.current && v.current.focus()),
        () => {
          o ||
            (f.current &&
              f.current.focus &&
              ((a.current = !0), f.current.focus()),
            (f.current = null))
        }
      )
    }, [l]),
    y.useEffect(() => {
      if (!l || !v.current) return
      const g = Rt(v.current),
        S = (E) => {
          ;(w.current = E),
            !(r || !s() || E.key !== "Tab") &&
              g.activeElement === v.current &&
              E.shiftKey &&
              ((a.current = !0), d.current && d.current.focus())
        },
        k = () => {
          const E = v.current
          if (E === null) return
          if (!g.hasFocus() || !s() || a.current) {
            a.current = !1
            return
          }
          if (
            E.contains(g.activeElement) ||
            (r &&
              g.activeElement !== u.current &&
              g.activeElement !== d.current)
          )
            return
          if (g.activeElement !== h.current) h.current = null
          else if (h.current !== null) return
          if (!C.current) return
          let P = []
          if (
            ((g.activeElement === u.current || g.activeElement === d.current) &&
              (P = i(v.current)),
            P.length > 0)
          ) {
            var T, j
            const I = !!(
                (T = w.current) != null &&
                T.shiftKey &&
                ((j = w.current) == null ? void 0 : j.key) === "Tab"
              ),
              N = P[0],
              O = P[P.length - 1]
            typeof N != "string" &&
              typeof O != "string" &&
              (I ? O.focus() : N.focus())
          } else E.focus()
        }
      g.addEventListener("focusin", k), g.addEventListener("keydown", S, !0)
      const R = setInterval(() => {
        g.activeElement && g.activeElement.tagName === "BODY" && k()
      }, 50)
      return () => {
        clearInterval(R),
          g.removeEventListener("focusin", k),
          g.removeEventListener("keydown", S, !0)
      }
    }, [n, r, o, s, l, i])
  const p = (g) => {
      f.current === null && (f.current = g.relatedTarget),
        (C.current = !0),
        (h.current = g.target)
      const S = t.props.onFocus
      S && S(g)
    },
    m = (g) => {
      f.current === null && (f.current = g.relatedTarget), (C.current = !0)
    }
  return c.jsxs(y.Fragment, {
    children: [
      c.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: m,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      y.cloneElement(t, { ref: x, onFocus: p }),
      c.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: m,
        ref: d,
        "data-testid": "sentinelEnd",
      }),
    ],
  })
}
function iT(e) {
  return typeof e == "function" ? e() : e
}
function sT(e) {
  return e ? e.props.hasOwnProperty("in") : !1
}
const lT = new Y$()
function aT(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = lT,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: l,
      children: a,
      onClose: u,
      open: d,
      rootRef: f,
    } = e,
    h = y.useRef({}),
    C = y.useRef(null),
    v = y.useRef(null),
    x = Ye(v, f),
    [w, p] = y.useState(!d),
    m = sT(a)
  let g = !0
  ;(e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1)
  const S = () => Rt(C.current),
    k = () => (
      (h.current.modalRef = v.current), (h.current.mount = C.current), h.current
    ),
    R = () => {
      o.mount(k(), { disableScrollLock: r }),
        v.current && (v.current.scrollTop = 0)
    },
    E = tr(() => {
      const B = iT(t) || S().body
      o.add(k(), B), v.current && R()
    }),
    P = y.useCallback(() => o.isTopModal(k()), [o]),
    T = tr((B) => {
      ;(C.current = B), B && (d && P() ? R() : v.current && ji(v.current, g))
    }),
    j = y.useCallback(() => {
      o.remove(k(), g)
    }, [g, o])
  y.useEffect(
    () => () => {
      j()
    },
    [j]
  ),
    y.useEffect(() => {
      d ? E() : (!m || !i) && j()
    }, [d, j, m, i, E])
  const I = (B) => (U) => {
      var $
      ;($ = B.onKeyDown) == null || $.call(B, U),
        !(U.key !== "Escape" || U.which === 229 || !P()) &&
          (n || (U.stopPropagation(), u && u(U, "escapeKeyDown")))
    },
    N = (B) => (U) => {
      var $
      ;($ = B.onClick) == null || $.call(B, U),
        U.target === U.currentTarget && u && u(U, "backdropClick")
    }
  return {
    getRootProps: (B = {}) => {
      const U = P0(e)
      delete U.onTransitionEnter, delete U.onTransitionExited
      const $ = b({}, U, B)
      return b({ role: "presentation" }, $, { onKeyDown: I($), ref: x })
    },
    getBackdropProps: (B = {}) => {
      const U = B
      return b({ "aria-hidden": !0 }, U, { onClick: N(U), open: d })
    },
    getTransitionProps: () => {
      const B = () => {
          p(!1), s && s()
        },
        U = () => {
          p(!0), l && l(), i && j()
        }
      return {
        onEnter: vd(B, a == null ? void 0 : a.props.onEnter),
        onExited: vd(U, a == null ? void 0 : a.props.onExited),
      }
    },
    rootRef: x,
    portalRef: T,
    isTopModal: P,
    exited: w,
    hasTransition: m,
  }
}
function uT(e) {
  return Z("MuiModal", e)
}
Y("MuiModal", ["root", "hidden", "backdrop"])
const cT = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  dT = (e) => {
    const { open: t, exited: n, classes: r } = e
    return ne(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      uT,
      r
    )
  },
  fT = K("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, !n.open && n.exited && t.hidden]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  pT = K(a$, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  hT = y.forwardRef(function (t, n) {
    var r, o, i, s, l, a
    const u = ee({ name: "MuiModal", props: t }),
      {
        BackdropComponent: d = pT,
        BackdropProps: f,
        className: h,
        closeAfterTransition: C = !1,
        children: v,
        container: x,
        component: w,
        components: p = {},
        componentsProps: m = {},
        disableAutoFocus: g = !1,
        disableEnforceFocus: S = !1,
        disableEscapeKeyDown: k = !1,
        disablePortal: R = !1,
        disableRestoreFocus: E = !1,
        disableScrollLock: P = !1,
        hideBackdrop: T = !1,
        keepMounted: j = !1,
        onBackdropClick: I,
        open: N,
        slotProps: O,
        slots: L,
      } = u,
      z = H(u, cT),
      B = b({}, u, {
        closeAfterTransition: C,
        disableAutoFocus: g,
        disableEnforceFocus: S,
        disableEscapeKeyDown: k,
        disablePortal: R,
        disableRestoreFocus: E,
        disableScrollLock: P,
        hideBackdrop: T,
        keepMounted: j,
      }),
      {
        getRootProps: U,
        getBackdropProps: $,
        getTransitionProps: M,
        portalRef: V,
        isTopModal: J,
        exited: oe,
        hasTransition: be,
      } = aT(b({}, B, { rootRef: n })),
      te = b({}, B, { exited: oe }),
      ye = dT(te),
      ue = {}
    if ((v.props.tabIndex === void 0 && (ue.tabIndex = "-1"), be)) {
      const { onEnter: se, onExited: xe } = M()
      ;(ue.onEnter = se), (ue.onExited = xe)
    }
    const qe =
        (r = (o = L == null ? void 0 : L.root) != null ? o : p.Root) != null
          ? r
          : fT,
      pt =
        (i = (s = L == null ? void 0 : L.backdrop) != null ? s : p.Backdrop) !=
        null
          ? i
          : d,
      Be = (l = O == null ? void 0 : O.root) != null ? l : m.root,
      yt = (a = O == null ? void 0 : O.backdrop) != null ? a : m.backdrop,
      me = Oo({
        elementType: qe,
        externalSlotProps: Be,
        externalForwardedProps: z,
        getSlotProps: U,
        additionalProps: { ref: n, as: w },
        ownerState: te,
        className: q(
          h,
          Be == null ? void 0 : Be.className,
          ye == null ? void 0 : ye.root,
          !te.open && te.exited && (ye == null ? void 0 : ye.hidden)
        ),
      }),
      je = Oo({
        elementType: pt,
        externalSlotProps: yt,
        additionalProps: f,
        getSlotProps: (se) =>
          $(
            b({}, se, {
              onClick: (xe) => {
                I && I(xe), se != null && se.onClick && se.onClick(xe)
              },
            })
          ),
        className: q(
          yt == null ? void 0 : yt.className,
          f == null ? void 0 : f.className,
          ye == null ? void 0 : ye.backdrop
        ),
        ownerState: te,
      })
    return !j && !N && (!be || oe)
      ? null
      : c.jsx(EP, {
          ref: V,
          container: x,
          disablePortal: R,
          children: c.jsxs(
            qe,
            b({}, me, {
              children: [
                !T && d ? c.jsx(pt, b({}, je)) : null,
                c.jsx(oT, {
                  disableEnforceFocus: S,
                  disableAutoFocus: g,
                  disableRestoreFocus: E,
                  isEnabled: J,
                  open: N,
                  children: y.cloneElement(v, ue),
                }),
              ],
            })
          ),
        })
  }),
  mT = hT
function gT(e) {
  return Z("MuiDivider", e)
}
const vT = Y("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  Um = vT,
  yT = [
    "absolute",
    "children",
    "className",
    "component",
    "flexItem",
    "light",
    "orientation",
    "role",
    "textAlign",
    "variant",
  ],
  xT = (e) => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: l,
      variant: a,
    } = e
    return ne(
      {
        root: [
          "root",
          t && "absolute",
          a,
          i && "light",
          s === "vertical" && "vertical",
          o && "flexItem",
          n && "withChildren",
          n && s === "vertical" && "withChildrenVertical",
          l === "right" && s !== "vertical" && "textAlignRight",
          l === "left" && s !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
      },
      gT,
      r
    )
  },
  bT = K("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === "vertical" && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === "vertical" && t.withChildrenVertical,
        n.textAlign === "right" &&
          n.orientation !== "vertical" &&
          t.textAlignRight,
        n.textAlign === "left" &&
          n.orientation !== "vertical" &&
          t.textAlignLeft,
      ]
    },
  })(
    ({ theme: e, ownerState: t }) =>
      b(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: "thin",
        },
        t.absolute && {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : he(e.palette.divider, 0.08),
        },
        t.variant === "inset" && { marginLeft: 72 },
        t.variant === "middle" &&
          t.orientation === "horizontal" && {
            marginLeft: e.spacing(2),
            marginRight: e.spacing(2),
          },
        t.variant === "middle" &&
          t.orientation === "vertical" && {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
        t.orientation === "vertical" && {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin",
        },
        t.flexItem && { alignSelf: "stretch", height: "auto" }
      ),
    ({ ownerState: e }) =>
      b(
        {},
        e.children && {
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          border: 0,
          borderTopStyle: "solid",
          borderLeftStyle: "solid",
          "&::before, &::after": { content: '""', alignSelf: "center" },
        }
      ),
    ({ theme: e, ownerState: t }) =>
      b(
        {},
        t.children &&
          t.orientation !== "vertical" && {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: "inherit",
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      b(
        {},
        t.children &&
          t.orientation === "vertical" && {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: "inherit",
            },
          }
      ),
    ({ ownerState: e }) =>
      b(
        {},
        e.textAlign === "right" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        e.textAlign === "left" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          }
      )
  ),
  ST = K("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        display: "inline-block",
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      },
      t.orientation === "vertical" && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
      }
    )
  ),
  Q0 = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiDivider" }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: l = i ? "div" : "hr",
        flexItem: a = !1,
        light: u = !1,
        orientation: d = "horizontal",
        role: f = l !== "hr" ? "separator" : void 0,
        textAlign: h = "center",
        variant: C = "fullWidth",
      } = r,
      v = H(r, yT),
      x = b({}, r, {
        absolute: o,
        component: l,
        flexItem: a,
        light: u,
        orientation: d,
        role: f,
        textAlign: h,
        variant: C,
      }),
      w = xT(x)
    return c.jsx(
      bT,
      b({ as: l, className: q(w.root, s), role: f, ref: n, ownerState: x }, v, {
        children: i
          ? c.jsx(ST, { className: w.wrapper, ownerState: x, children: i })
          : null,
      })
    )
  })
Q0.muiSkipListHighlight = !0
const ai = Q0,
  CT = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  wT = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ne({ root: ["root", !n && "underline"], input: ["input"] }, XP, t)
    return b({}, t, o)
  },
  ET = K(pu, {
    shouldForwardProp: (e) => tn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [...du(e, t), !n.disableUnderline && t.underline]
    },
  })(({ theme: e, ownerState: t }) => {
    var n
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"
    return b(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${vr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${vr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${vr.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${vr.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${vr.disabled}, .${vr.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${vr.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        b(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    )
  }),
  RT = K(hu, { name: "MuiFilledInput", slot: "Input", overridesResolver: fu })(
    ({ theme: e, ownerState: t }) =>
      b(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  X0 = y.forwardRef(function (t, n) {
    var r, o, i, s
    const l = ee({ props: t, name: "MuiFilledInput" }),
      {
        components: a = {},
        componentsProps: u,
        fullWidth: d = !1,
        inputComponent: f = "input",
        multiline: h = !1,
        slotProps: C,
        slots: v = {},
        type: x = "text",
      } = l,
      w = H(l, CT),
      p = b({}, l, { fullWidth: d, inputComponent: f, multiline: h, type: x }),
      m = wT(l),
      g = { root: { ownerState: p }, input: { ownerState: p } },
      S = C ?? u ? Ot(g, C ?? u) : g,
      k = (r = (o = v.root) != null ? o : a.Root) != null ? r : ET,
      R = (i = (s = v.input) != null ? s : a.Input) != null ? i : RT
    return c.jsx(
      up,
      b(
        {
          slots: { root: k, input: R },
          componentsProps: S,
          fullWidth: d,
          inputComponent: f,
          multiline: h,
          ref: n,
          type: x,
        },
        w,
        { classes: m }
      )
    )
  })
X0.muiName = "Input"
const Y0 = X0
function kT(e) {
  return Z("MuiFormControl", e)
}
Y("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
])
const PT = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  $T = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${F(n)}`, r && "fullWidth"] }
    return ne(o, kT, t)
  },
  TT = K("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      b({}, t.root, t[`margin${F(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    b(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  _T = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: l = "div",
        disabled: a = !1,
        error: u = !1,
        focused: d,
        fullWidth: f = !1,
        hiddenLabel: h = !1,
        margin: C = "none",
        required: v = !1,
        size: x = "medium",
        variant: w = "outlined",
      } = r,
      p = H(r, PT),
      m = b({}, r, {
        color: s,
        component: l,
        disabled: a,
        error: u,
        fullWidth: f,
        hiddenLabel: h,
        margin: C,
        required: v,
        size: x,
        variant: w,
      }),
      g = $T(m),
      [S, k] = y.useState(() => {
        let O = !1
        return (
          o &&
            y.Children.forEach(o, (L) => {
              if (!Ti(L, ["Input", "Select"])) return
              const z = Ti(L, ["Select"]) ? L.props.input : L
              z && FP(z.props) && (O = !0)
            }),
          O
        )
      }),
      [R, E] = y.useState(() => {
        let O = !1
        return (
          o &&
            y.Children.forEach(o, (L) => {
              Ti(L, ["Input", "Select"]) &&
                (sa(L.props, !0) || sa(L.props.inputProps, !0)) &&
                (O = !0)
            }),
          O
        )
      }),
      [P, T] = y.useState(!1)
    a && P && T(!1)
    const j = d !== void 0 && !a ? d : P
    let I
    const N = y.useMemo(
      () => ({
        adornedStart: S,
        setAdornedStart: k,
        color: s,
        disabled: a,
        error: u,
        filled: R,
        focused: j,
        fullWidth: f,
        hiddenLabel: h,
        size: x,
        onBlur: () => {
          T(!1)
        },
        onEmpty: () => {
          E(!1)
        },
        onFilled: () => {
          E(!0)
        },
        onFocus: () => {
          T(!0)
        },
        registerEffect: I,
        required: v,
        variant: w,
      }),
      [S, s, a, u, R, j, f, h, I, v, x, w]
    )
    return c.jsx(ap.Provider, {
      value: N,
      children: c.jsx(
        TT,
        b({ as: l, ownerState: m, className: q(g.root, i), ref: n }, p, {
          children: o,
        })
      ),
    })
  }),
  jT = _T
function IT(e) {
  return Z("MuiFormHelperText", e)
}
const OT = Y("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Wm = OT
var Hm
const MT = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  NT = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: l,
        required: a,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${F(r)}`,
          n && "contained",
          l && "focused",
          s && "filled",
          a && "required",
        ],
      }
    return ne(u, IT, t)
  },
  LT = K("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.size && t[`size${F(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Wm.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Wm.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  AT = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: s = "p" } = r,
      l = H(r, MT),
      a = Ko(),
      u = Vo({
        props: r,
        muiFormControl: a,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      d = b({}, r, {
        component: s,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      f = NT(d)
    return c.jsx(
      LT,
      b({ as: s, ownerState: d, className: q(f.root, i), ref: n }, l, {
        children:
          o === " "
            ? Hm ||
              (Hm = c.jsx("span", { className: "notranslate", children: "​" }))
            : o,
      })
    )
  }),
  zT = AT
function FT(e) {
  return Z("MuiFormLabel", e)
}
const BT = Y("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Ii = BT,
  DT = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  UT = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: l,
      } = e,
      a = {
        root: [
          "root",
          `color${F(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          l && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      }
    return ne(a, FT, t)
  },
  WT = K("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      b(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    b({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${Ii.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${Ii.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Ii.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  HT = K("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ii.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  VT = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      l = H(r, DT),
      a = Ko(),
      u = Vo({
        props: r,
        muiFormControl: a,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      d = b({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      f = UT(d)
    return c.jsxs(
      WT,
      b({ as: s, ownerState: d, className: q(f.root, i), ref: n }, l, {
        children: [
          o,
          u.required &&
            c.jsxs(HT, {
              ownerState: d,
              "aria-hidden": !0,
              className: f.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    )
  }),
  KT = VT,
  GT = y.createContext(),
  Vm = GT
function qT(e) {
  return Z("MuiGrid", e)
}
const QT = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  XT = ["column-reverse", "column", "row-reverse", "row"],
  YT = ["nowrap", "wrap-reverse", "wrap"],
  ui = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  JT = Y("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...QT.map((e) => `spacing-xs-${e}`),
    ...XT.map((e) => `direction-xs-${e}`),
    ...YT.map((e) => `wrap-xs-${e}`),
    ...ui.map((e) => `grid-xs-${e}`),
    ...ui.map((e) => `grid-sm-${e}`),
    ...ui.map((e) => `grid-md-${e}`),
    ...ui.map((e) => `grid-lg-${e}`),
    ...ui.map((e) => `grid-xl-${e}`),
  ]),
  os = JT,
  ZT = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ]
function Co(e) {
  const t = parseFloat(e)
  return `${t}${String(e).replace(String(t), "") || "px"}`
}
function e_({ theme: e, ownerState: t }) {
  let n
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {}
    if ((t[o] && (n = t[o]), !n)) return r
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      }
    else {
      const s = Ua({ values: t.columns, breakpoints: e.breakpoints.values }),
        l = typeof s == "object" ? s[o] : s
      if (l == null) return r
      const a = `${Math.round((n / l) * 1e8) / 1e6}%`
      let u = {}
      if (t.container && t.item && t.columnSpacing !== 0) {
        const d = e.spacing(t.columnSpacing)
        if (d !== "0px") {
          const f = `calc(${a} + ${Co(d)})`
          u = { flexBasis: f, maxWidth: f }
        }
      }
      i = b({ flexBasis: a, flexGrow: 0, maxWidth: a }, u)
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    )
  }, {})
}
function t_({ theme: e, ownerState: t }) {
  const n = Ua({ values: t.direction, breakpoints: e.breakpoints.values })
  return Yt({ theme: e }, n, (r) => {
    const o = { flexDirection: r }
    return (
      r.indexOf("column") === 0 &&
        (o[`& > .${os.item}`] = { maxWidth: "none" }),
      o
    )
  })
}
function J0({ breakpoints: e, values: t }) {
  let n = ""
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o)
  })
  const r = Object.keys(e).sort((o, i) => e[o] - e[i])
  return r.slice(0, r.indexOf(n))
}
function n_({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t
  let o = {}
  if (n && r !== 0) {
    const i = Ua({ values: r, breakpoints: e.breakpoints.values })
    let s
    typeof i == "object" &&
      (s = J0({ breakpoints: e.breakpoints.values, values: i })),
      (o = Yt({ theme: e }, i, (l, a) => {
        var u
        const d = e.spacing(l)
        return d !== "0px"
          ? {
              marginTop: `-${Co(d)}`,
              [`& > .${os.item}`]: { paddingTop: Co(d) },
            }
          : (u = s) != null && u.includes(a)
          ? {}
          : { marginTop: 0, [`& > .${os.item}`]: { paddingTop: 0 } }
      }))
  }
  return o
}
function r_({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t
  let o = {}
  if (n && r !== 0) {
    const i = Ua({ values: r, breakpoints: e.breakpoints.values })
    let s
    typeof i == "object" &&
      (s = J0({ breakpoints: e.breakpoints.values, values: i })),
      (o = Yt({ theme: e }, i, (l, a) => {
        var u
        const d = e.spacing(l)
        return d !== "0px"
          ? {
              width: `calc(100% + ${Co(d)})`,
              marginLeft: `-${Co(d)}`,
              [`& > .${os.item}`]: { paddingLeft: Co(d) },
            }
          : (u = s) != null && u.includes(a)
          ? {}
          : {
              width: "100%",
              marginLeft: 0,
              [`& > .${os.item}`]: { paddingLeft: 0 },
            }
      }))
  }
  return o
}
function o_(e, t, n = {}) {
  if (!e || e <= 0) return []
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [n[`spacing-xs-${String(e)}`]]
  const r = []
  return (
    t.forEach((o) => {
      const i = e[o]
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`])
    }),
    r
  )
}
const i_ = K("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: s,
        wrap: l,
        zeroMinWidth: a,
        breakpoints: u,
      } = n
    let d = []
    r && (d = o_(s, u, t))
    const f = []
    return (
      u.forEach((h) => {
        const C = n[h]
        C && f.push(t[`grid-${h}-${String(C)}`])
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        a && t.zeroMinWidth,
        ...d,
        o !== "row" && t[`direction-xs-${String(o)}`],
        l !== "wrap" && t[`wrap-xs-${String(l)}`],
        ...f,
      ]
    )
  },
})(
  ({ ownerState: e }) =>
    b(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap }
    ),
  t_,
  n_,
  r_,
  e_
)
function s_(e, t) {
  if (!e || e <= 0) return []
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`]
  const n = []
  return (
    t.forEach((r) => {
      const o = e[r]
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`
        n.push(i)
      }
    }),
    n
  )
}
const l_ = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: l,
      breakpoints: a,
    } = e
    let u = []
    n && (u = s_(i, a))
    const d = []
    a.forEach((h) => {
      const C = e[h]
      C && d.push(`grid-${h}-${String(C)}`)
    })
    const f = {
      root: [
        "root",
        n && "container",
        o && "item",
        l && "zeroMinWidth",
        ...u,
        r !== "row" && `direction-xs-${String(r)}`,
        s !== "wrap" && `wrap-xs-${String(s)}`,
        ...d,
      ],
    }
    return ne(f, qT, t)
  },
  a_ = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiGrid" }),
      { breakpoints: o } = ip(),
      i = Xa(r),
      {
        className: s,
        columns: l,
        columnSpacing: a,
        component: u = "div",
        container: d = !1,
        direction: f = "row",
        item: h = !1,
        rowSpacing: C,
        spacing: v = 0,
        wrap: x = "wrap",
        zeroMinWidth: w = !1,
      } = i,
      p = H(i, ZT),
      m = C || v,
      g = a || v,
      S = y.useContext(Vm),
      k = d ? l || 12 : S,
      R = {},
      E = b({}, p)
    o.keys.forEach((j) => {
      p[j] != null && ((R[j] = p[j]), delete E[j])
    })
    const P = b(
        {},
        i,
        {
          columns: k,
          container: d,
          direction: f,
          item: h,
          rowSpacing: m,
          columnSpacing: g,
          wrap: x,
          zeroMinWidth: w,
          spacing: v,
        },
        R,
        { breakpoints: o.keys }
      ),
      T = l_(P)
    return c.jsx(Vm.Provider, {
      value: k,
      children: c.jsx(
        i_,
        b({ ownerState: P, className: q(T.root, s), as: u, ref: n }, E)
      ),
    })
  }),
  de = a_,
  u_ = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ]
function Rd(e) {
  return `scale(${e}, ${e ** 2})`
}
const c_ = {
    entering: { opacity: 1, transform: Rd(1) },
    entered: { opacity: 1, transform: "none" },
  },
  ac =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Z0 = y.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: l,
        onEnter: a,
        onEntered: u,
        onEntering: d,
        onExit: f,
        onExited: h,
        onExiting: C,
        style: v,
        timeout: x = "auto",
        TransitionComponent: w = K0,
      } = t,
      p = H(t, u_),
      m = w0(),
      g = y.useRef(),
      S = ip(),
      k = y.useRef(null),
      R = Ye(k, Es(i), n),
      E = (z) => (B) => {
        if (z) {
          const U = k.current
          B === void 0 ? z(U) : z(U, B)
        }
      },
      P = E(d),
      T = E((z, B) => {
        G0(z)
        const {
          duration: U,
          delay: $,
          easing: M,
        } = ia({ style: v, timeout: x, easing: s }, { mode: "enter" })
        let V
        x === "auto"
          ? ((V = S.transitions.getAutoHeightDuration(z.clientHeight)),
            (g.current = V))
          : (V = U),
          (z.style.transition = [
            S.transitions.create("opacity", { duration: V, delay: $ }),
            S.transitions.create("transform", {
              duration: ac ? V : V * 0.666,
              delay: $,
              easing: M,
            }),
          ].join(",")),
          a && a(z, B)
      }),
      j = E(u),
      I = E(C),
      N = E((z) => {
        const {
          duration: B,
          delay: U,
          easing: $,
        } = ia({ style: v, timeout: x, easing: s }, { mode: "exit" })
        let M
        x === "auto"
          ? ((M = S.transitions.getAutoHeightDuration(z.clientHeight)),
            (g.current = M))
          : (M = B),
          (z.style.transition = [
            S.transitions.create("opacity", { duration: M, delay: U }),
            S.transitions.create("transform", {
              duration: ac ? M : M * 0.666,
              delay: ac ? U : U || M * 0.333,
              easing: $,
            }),
          ].join(",")),
          (z.style.opacity = 0),
          (z.style.transform = Rd(0.75)),
          f && f(z)
      }),
      O = E(h),
      L = (z) => {
        x === "auto" && m.start(g.current || 0, z), r && r(k.current, z)
      }
    return c.jsx(
      w,
      b(
        {
          appear: o,
          in: l,
          nodeRef: k,
          onEnter: T,
          onEntered: j,
          onEntering: P,
          onExit: N,
          onExited: O,
          onExiting: I,
          addEndListener: L,
          timeout: x === "auto" ? null : x,
        },
        p,
        {
          children: (z, B) =>
            y.cloneElement(
              i,
              b(
                {
                  style: b(
                    {
                      opacity: 0,
                      transform: Rd(0.75),
                      visibility: z === "exited" && !l ? "hidden" : void 0,
                    },
                    c_[z],
                    v,
                    i.props.style
                  ),
                  ref: R,
                },
                B
              )
            ),
        }
      )
    )
  })
Z0.muiSupportAuto = !0
const d_ = Z0,
  f_ = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  p_ = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ne({ root: ["root", !n && "underline"], input: ["input"] }, KP, t)
    return b({}, t, o)
  },
  h_ = K(pu, {
    shouldForwardProp: (e) => tn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [...du(e, t), !n.disableUnderline && t.underline]
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)"
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      b(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${li.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${li.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${li.disabled}, .${li.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${li.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    )
  }),
  m_ = K(hu, { name: "MuiInput", slot: "Input", overridesResolver: fu })({}),
  e1 = y.forwardRef(function (t, n) {
    var r, o, i, s
    const l = ee({ props: t, name: "MuiInput" }),
      {
        disableUnderline: a,
        components: u = {},
        componentsProps: d,
        fullWidth: f = !1,
        inputComponent: h = "input",
        multiline: C = !1,
        slotProps: v,
        slots: x = {},
        type: w = "text",
      } = l,
      p = H(l, f_),
      m = p_(l),
      S = { root: { ownerState: { disableUnderline: a } } },
      k = v ?? d ? Ot(v ?? d, S) : S,
      R = (r = (o = x.root) != null ? o : u.Root) != null ? r : h_,
      E = (i = (s = x.input) != null ? s : u.Input) != null ? i : m_
    return c.jsx(
      up,
      b(
        {
          slots: { root: R, input: E },
          slotProps: k,
          fullWidth: f,
          inputComponent: h,
          multiline: C,
          ref: n,
          type: w,
        },
        p,
        { classes: m }
      )
    )
  })
e1.muiName = "Input"
const t1 = e1
function g_(e) {
  return Z("MuiInputLabel", e)
}
Y("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
])
const v_ = ["disableAnimation", "margin", "shrink", "variant", "className"],
  y_ = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: l,
      } = e,
      a = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${F(r)}`,
          s,
        ],
        asterisk: [l && "asterisk"],
      },
      u = ne(a, g_, t)
    return b({}, t, u)
  },
  x_ = K(KT, {
    shouldForwardProp: (e) => tn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`& .${Ii.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        b(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            b(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        b(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  b_ = y.forwardRef(function (t, n) {
    const r = ee({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      l = H(r, v_),
      a = Ko()
    let u = i
    typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart)
    const d = Vo({
        props: r,
        muiFormControl: a,
        states: ["size", "variant", "required", "focused"],
      }),
      f = b({}, r, {
        disableAnimation: o,
        formControl: a,
        shrink: u,
        size: d.size,
        variant: d.variant,
        required: d.required,
        focused: d.focused,
      }),
      h = y_(f)
    return c.jsx(
      x_,
      b(
        { "data-shrink": u, ownerState: f, ref: n, className: q(h.root, s) },
        l,
        { classes: h }
      )
    )
  }),
  S_ = b_,
  C_ = y.createContext({}),
  Nn = C_
function w_(e) {
  return Z("MuiList", e)
}
Y("MuiList", ["root", "padding", "dense", "subheader"])
const E_ = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  R_ = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e
    return ne(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      w_,
      t
    )
  },
  k_ = K("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ]
    },
  })(({ ownerState: e }) =>
    b(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  P_ = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: l = !1,
        disablePadding: a = !1,
        subheader: u,
      } = r,
      d = H(r, E_),
      f = y.useMemo(() => ({ dense: l }), [l]),
      h = b({}, r, { component: s, dense: l, disablePadding: a }),
      C = R_(h)
    return c.jsx(Nn.Provider, {
      value: f,
      children: c.jsxs(
        k_,
        b({ as: s, className: q(C.root, i), ref: n, ownerState: h }, d, {
          children: [u, o],
        })
      ),
    })
  }),
  kd = P_
function $_(e) {
  return Z("MuiListItem", e)
}
const T_ = Y("MuiListItem", [
    "root",
    "container",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "padding",
    "button",
    "secondaryAction",
    "selected",
  ]),
  eo = T_,
  __ = Y("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  j_ = __
function I_(e) {
  return Z("MuiListItemSecondaryAction", e)
}
Y("MuiListItemSecondaryAction", ["root", "disableGutters"])
const O_ = ["className"],
  M_ = (e) => {
    const { disableGutters: t, classes: n } = e
    return ne({ root: ["root", t && "disableGutters"] }, I_, n)
  },
  N_ = K("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.disableGutters && t.disableGutters]
    },
  })(({ ownerState: e }) =>
    b(
      {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.disableGutters && { right: 0 }
    )
  ),
  n1 = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o } = r,
      i = H(r, O_),
      s = y.useContext(Nn),
      l = b({}, r, { disableGutters: s.disableGutters }),
      a = M_(l)
    return c.jsx(N_, b({ className: q(a.root, o), ownerState: l, ref: n }, i))
  })
n1.muiName = "ListItemSecondaryAction"
const L_ = n1,
  A_ = ["className"],
  z_ = [
    "alignItems",
    "autoFocus",
    "button",
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "ContainerComponent",
    "ContainerProps",
    "dense",
    "disabled",
    "disableGutters",
    "disablePadding",
    "divider",
    "focusVisibleClassName",
    "secondaryAction",
    "selected",
    "slotProps",
    "slots",
  ],
  F_ = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.button && t.button,
      n.hasSecondaryAction && t.secondaryAction,
    ]
  },
  B_ = (e) => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: s,
      disablePadding: l,
      divider: a,
      hasSecondaryAction: u,
      selected: d,
    } = e
    return ne(
      {
        root: [
          "root",
          o && "dense",
          !s && "gutters",
          !l && "padding",
          a && "divider",
          i && "disabled",
          n && "button",
          t === "flex-start" && "alignItemsFlexStart",
          u && "secondaryAction",
          d && "selected",
        ],
        container: ["container"],
      },
      $_,
      r
    )
  },
  D_ = K("div", { name: "MuiListItem", slot: "Root", overridesResolver: F_ })(
    ({ theme: e, ownerState: t }) =>
      b(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !t.disablePadding &&
          b(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 }
          ),
        !!t.secondaryAction && { [`& > .${j_.root}`]: { paddingRight: 48 } },
        {
          [`&.${eo.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${eo.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : he(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${eo.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : he(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${eo.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === "flex-start" && { alignItems: "flex-start" },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        t.button && {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${eo.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : he(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : he(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  U_ = K("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  W_ = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        button: s = !1,
        children: l,
        className: a,
        component: u,
        components: d = {},
        componentsProps: f = {},
        ContainerComponent: h = "li",
        ContainerProps: { className: C } = {},
        dense: v = !1,
        disabled: x = !1,
        disableGutters: w = !1,
        disablePadding: p = !1,
        divider: m = !1,
        focusVisibleClassName: g,
        secondaryAction: S,
        selected: k = !1,
        slotProps: R = {},
        slots: E = {},
      } = r,
      P = H(r.ContainerProps, A_),
      T = H(r, z_),
      j = y.useContext(Nn),
      I = y.useMemo(
        () => ({ dense: v || j.dense || !1, alignItems: o, disableGutters: w }),
        [o, j.dense, v, w]
      ),
      N = y.useRef(null)
    pn(() => {
      i && N.current && N.current.focus()
    }, [i])
    const O = y.Children.toArray(l),
      L = O.length && Ti(O[O.length - 1], ["ListItemSecondaryAction"]),
      z = b({}, r, {
        alignItems: o,
        autoFocus: i,
        button: s,
        dense: I.dense,
        disabled: x,
        disableGutters: w,
        disablePadding: p,
        divider: m,
        hasSecondaryAction: L,
        selected: k,
      }),
      B = B_(z),
      U = Ye(N, n),
      $ = E.root || d.Root || D_,
      M = R.root || f.root || {},
      V = b({ className: q(B.root, M.className, a), disabled: x }, T)
    let J = u || "li"
    return (
      s &&
        ((V.component = u || "div"),
        (V.focusVisibleClassName = q(eo.focusVisible, g)),
        (J = Mo)),
      L
        ? ((J = !V.component && !u ? "div" : J),
          h === "li" &&
            (J === "li"
              ? (J = "div")
              : V.component === "li" && (V.component = "div")),
          c.jsx(Nn.Provider, {
            value: I,
            children: c.jsxs(
              U_,
              b(
                { as: h, className: q(B.container, C), ref: U, ownerState: z },
                P,
                {
                  children: [
                    c.jsx(
                      $,
                      b(
                        {},
                        M,
                        !Io($) && { as: J, ownerState: b({}, z, M.ownerState) },
                        V,
                        { children: O }
                      )
                    ),
                    O.pop(),
                  ],
                }
              )
            ),
          }))
        : c.jsx(Nn.Provider, {
            value: I,
            children: c.jsxs(
              $,
              b(
                {},
                M,
                { as: J, ref: U },
                !Io($) && { ownerState: b({}, z, M.ownerState) },
                V,
                { children: [O, S && c.jsx(L_, { children: S })] }
              )
            ),
          })
    )
  }),
  yr = W_
function H_(e) {
  return Z("MuiListItemIcon", e)
}
const V_ = Y("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  Km = V_,
  K_ = ["className"],
  G_ = (e) => {
    const { alignItems: t, classes: n } = e
    return ne(
      { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
      H_,
      n
    )
  },
  q_ = K("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        minWidth: 56,
        color: (e.vars || e).palette.action.active,
        flexShrink: 0,
        display: "inline-flex",
      },
      t.alignItems === "flex-start" && { marginTop: 8 }
    )
  ),
  Q_ = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiListItemIcon" }),
      { className: o } = r,
      i = H(r, K_),
      s = y.useContext(Nn),
      l = b({}, r, { alignItems: s.alignItems }),
      a = G_(l)
    return c.jsx(q_, b({ className: q(a.root, o), ownerState: l, ref: n }, i))
  }),
  xr = Q_
function X_(e) {
  return Z("MuiListItemText", e)
}
const Y_ = Y("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  la = Y_,
  J_ = [
    "children",
    "className",
    "disableTypography",
    "inset",
    "primary",
    "primaryTypographyProps",
    "secondary",
    "secondaryTypographyProps",
  ],
  Z_ = (e) => {
    const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e
    return ne(
      {
        root: ["root", n && "inset", i && "dense", r && o && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      X_,
      t
    )
  },
  e4 = K("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`& .${la.primary}`]: t.primary },
        { [`& .${la.secondary}`]: t.secondary },
        t.root,
        n.inset && t.inset,
        n.primary && n.secondary && t.multiline,
        n.dense && t.dense,
      ]
    },
  })(({ ownerState: e }) =>
    b(
      { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
      e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
      e.inset && { paddingLeft: 56 }
    )
  ),
  t4 = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiListItemText" }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: l = !1,
        primary: a,
        primaryTypographyProps: u,
        secondary: d,
        secondaryTypographyProps: f,
      } = r,
      h = H(r, J_),
      { dense: C } = y.useContext(Nn)
    let v = a ?? o,
      x = d
    const w = b({}, r, {
        disableTypography: s,
        inset: l,
        primary: !!v,
        secondary: !!x,
        dense: C,
      }),
      p = Z_(w)
    return (
      v != null &&
        v.type !== D &&
        !s &&
        (v = c.jsx(
          D,
          b(
            {
              variant: C ? "body2" : "body1",
              className: p.primary,
              component: u != null && u.variant ? void 0 : "span",
              display: "block",
            },
            u,
            { children: v }
          )
        )),
      x != null &&
        x.type !== D &&
        !s &&
        (x = c.jsx(
          D,
          b(
            {
              variant: "body2",
              className: p.secondary,
              color: "text.secondary",
              display: "block",
            },
            f,
            { children: x }
          )
        )),
      c.jsxs(
        e4,
        b({ className: q(p.root, i), ownerState: w, ref: n }, h, {
          children: [v, x],
        })
      )
    )
  }),
  br = t4,
  n4 = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ]
function uc(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild
}
function Gm(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild
}
function r1(e, t) {
  if (t === void 0) return !0
  let n = e.innerText
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  )
}
function ci(e, t, n, r, o, i) {
  let s = !1,
    l = o(e, t, t ? n : !1)
  for (; l; ) {
    if (l === e.firstChild) {
      if (s) return !1
      s = !0
    }
    const a = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true"
    if (!l.hasAttribute("tabindex") || !r1(l, i) || a) l = o(e, l, n)
    else return l.focus(), !0
  }
  return !1
}
const r4 = y.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: l,
        disabledItemsFocusable: a = !1,
        disableListWrap: u = !1,
        onKeyDown: d,
        variant: f = "selectedMenu",
      } = t,
      h = H(t, n4),
      C = y.useRef(null),
      v = y.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      })
    pn(() => {
      o && C.current.focus()
    }, [o]),
      y.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (g, { direction: S }) => {
            const k = !C.current.style.width
            if (g.clientHeight < C.current.clientHeight && k) {
              const R = `${R0(Rt(g))}px`
              ;(C.current.style[S === "rtl" ? "paddingLeft" : "paddingRight"] =
                R),
                (C.current.style.width = `calc(100% + ${R})`)
            }
            return C.current
          },
        }),
        []
      )
    const x = (g) => {
        const S = C.current,
          k = g.key,
          R = Rt(S).activeElement
        if (k === "ArrowDown") g.preventDefault(), ci(S, R, u, a, uc)
        else if (k === "ArrowUp") g.preventDefault(), ci(S, R, u, a, Gm)
        else if (k === "Home") g.preventDefault(), ci(S, null, u, a, uc)
        else if (k === "End") g.preventDefault(), ci(S, null, u, a, Gm)
        else if (k.length === 1) {
          const E = v.current,
            P = k.toLowerCase(),
            T = performance.now()
          E.keys.length > 0 &&
            (T - E.lastTime > 500
              ? ((E.keys = []), (E.repeating = !0), (E.previousKeyMatched = !0))
              : E.repeating && P !== E.keys[0] && (E.repeating = !1)),
            (E.lastTime = T),
            E.keys.push(P)
          const j = R && !E.repeating && r1(R, E)
          E.previousKeyMatched && (j || ci(S, R, !1, a, uc, E))
            ? g.preventDefault()
            : (E.previousKeyMatched = !1)
        }
        d && d(g)
      },
      w = Ye(C, n)
    let p = -1
    y.Children.forEach(s, (g, S) => {
      if (!y.isValidElement(g)) {
        p === S && ((p += 1), p >= s.length && (p = -1))
        return
      }
      g.props.disabled ||
        (((f === "selectedMenu" && g.props.selected) || p === -1) && (p = S)),
        p === S &&
          (g.props.disabled ||
            g.props.muiSkipListHighlight ||
            g.type.muiSkipListHighlight) &&
          ((p += 1), p >= s.length && (p = -1))
    })
    const m = y.Children.map(s, (g, S) => {
      if (S === p) {
        const k = {}
        return (
          i && (k.autoFocus = !0),
          g.props.tabIndex === void 0 &&
            f === "selectedMenu" &&
            (k.tabIndex = 0),
          y.cloneElement(g, k)
        )
      }
      return g
    })
    return c.jsx(
      kd,
      b(
        {
          role: "menu",
          ref: w,
          className: l,
          onKeyDown: x,
          tabIndex: o ? 0 : -1,
        },
        h,
        { children: m }
      )
    )
  }),
  o4 = r4
function i4(e) {
  return Z("MuiPopover", e)
}
Y("MuiPopover", ["root", "paper"])
const s4 = ["onEntering"],
  l4 = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  a4 = ["slotProps"]
function qm(e, t) {
  let n = 0
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  )
}
function Qm(e, t) {
  let n = 0
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  )
}
function Xm(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ")
}
function cc(e) {
  return typeof e == "function" ? e() : e
}
const u4 = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"], paper: ["paper"] }, i4, t)
  },
  c4 = K(mT, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  o1 = K(Fe, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  d4 = y.forwardRef(function (t, n) {
    var r, o, i
    const s = ee({ props: t, name: "MuiPopover" }),
      {
        action: l,
        anchorEl: a,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: d,
        anchorReference: f = "anchorEl",
        children: h,
        className: C,
        container: v,
        elevation: x = 8,
        marginThreshold: w = 16,
        open: p,
        PaperProps: m = {},
        slots: g,
        slotProps: S,
        transformOrigin: k = { vertical: "top", horizontal: "left" },
        TransitionComponent: R = d_,
        transitionDuration: E = "auto",
        TransitionProps: { onEntering: P } = {},
        disableScrollLock: T = !1,
      } = s,
      j = H(s.TransitionProps, s4),
      I = H(s, l4),
      N = (r = S == null ? void 0 : S.paper) != null ? r : m,
      O = y.useRef(),
      L = Ye(O, N.ref),
      z = b({}, s, {
        anchorOrigin: u,
        anchorReference: f,
        elevation: x,
        marginThreshold: w,
        externalPaperSlotProps: N,
        transformOrigin: k,
        TransitionComponent: R,
        transitionDuration: E,
        TransitionProps: j,
      }),
      B = u4(z),
      U = y.useCallback(() => {
        if (f === "anchorPosition") return d
        const se = cc(a),
          Pe = (
            se && se.nodeType === 1 ? se : Rt(O.current).body
          ).getBoundingClientRect()
        return {
          top: Pe.top + qm(Pe, u.vertical),
          left: Pe.left + Qm(Pe, u.horizontal),
        }
      }, [a, u.horizontal, u.vertical, d, f]),
      $ = y.useCallback(
        (se) => ({
          vertical: qm(se, k.vertical),
          horizontal: Qm(se, k.horizontal),
        }),
        [k.horizontal, k.vertical]
      ),
      M = y.useCallback(
        (se) => {
          const xe = { width: se.offsetWidth, height: se.offsetHeight },
            Pe = $(xe)
          if (f === "none")
            return { top: null, left: null, transformOrigin: Xm(Pe) }
          const Wn = U()
          let zt = Wn.top - Pe.vertical,
            Ft = Wn.left - Pe.horizontal
          const nn = zt + xe.height,
            Bt = Ft + xe.width,
            Ie = pr(cc(a)),
            Rn = Ie.innerHeight - w,
            xt = Ie.innerWidth - w
          if (w !== null && zt < w) {
            const $e = zt - w
            ;(zt -= $e), (Pe.vertical += $e)
          } else if (w !== null && nn > Rn) {
            const $e = nn - Rn
            ;(zt -= $e), (Pe.vertical += $e)
          }
          if (w !== null && Ft < w) {
            const $e = Ft - w
            ;(Ft -= $e), (Pe.horizontal += $e)
          } else if (Bt > xt) {
            const $e = Bt - xt
            ;(Ft -= $e), (Pe.horizontal += $e)
          }
          return {
            top: `${Math.round(zt)}px`,
            left: `${Math.round(Ft)}px`,
            transformOrigin: Xm(Pe),
          }
        },
        [a, f, U, $, w]
      ),
      [V, J] = y.useState(p),
      oe = y.useCallback(() => {
        const se = O.current
        if (!se) return
        const xe = M(se)
        xe.top !== null && (se.style.top = xe.top),
          xe.left !== null && (se.style.left = xe.left),
          (se.style.transformOrigin = xe.transformOrigin),
          J(!0)
      }, [M])
    y.useEffect(
      () => (
        T && window.addEventListener("scroll", oe),
        () => window.removeEventListener("scroll", oe)
      ),
      [a, T, oe]
    )
    const be = (se, xe) => {
        P && P(se, xe), oe()
      },
      te = () => {
        J(!1)
      }
    y.useEffect(() => {
      p && oe()
    }),
      y.useImperativeHandle(
        l,
        () =>
          p
            ? {
                updatePosition: () => {
                  oe()
                },
              }
            : null,
        [p, oe]
      ),
      y.useEffect(() => {
        if (!p) return
        const se = Zf(() => {
            oe()
          }),
          xe = pr(a)
        return (
          xe.addEventListener("resize", se),
          () => {
            se.clear(), xe.removeEventListener("resize", se)
          }
        )
      }, [a, p, oe])
    let ye = E
    E === "auto" && !R.muiSupportAuto && (ye = void 0)
    const ue = v || (a ? Rt(cc(a)).body : void 0),
      qe = (o = g == null ? void 0 : g.root) != null ? o : c4,
      pt = (i = g == null ? void 0 : g.paper) != null ? i : o1,
      Be = Oo({
        elementType: pt,
        externalSlotProps: b({}, N, {
          style: V ? N.style : b({}, N.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: x, ref: L },
        ownerState: z,
        className: q(B.paper, N == null ? void 0 : N.className),
      }),
      yt = Oo({
        elementType: qe,
        externalSlotProps: (S == null ? void 0 : S.root) || {},
        externalForwardedProps: I,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: ue,
          open: p,
        },
        ownerState: z,
        className: q(B.root, C),
      }),
      { slotProps: me } = yt,
      je = H(yt, a4)
    return c.jsx(
      qe,
      b({}, je, !Io(qe) && { slotProps: me, disableScrollLock: T }, {
        children: c.jsx(
          R,
          b(
            { appear: !0, in: p, onEntering: be, onExited: te, timeout: ye },
            j,
            { children: c.jsx(pt, b({}, Be, { children: h })) }
          )
        ),
      })
    )
  }),
  f4 = d4
function p4(e) {
  return Z("MuiMenu", e)
}
Y("MuiMenu", ["root", "paper", "list"])
const h4 = ["onEntering"],
  m4 = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  g4 = { vertical: "top", horizontal: "right" },
  v4 = { vertical: "top", horizontal: "left" },
  y4 = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"], paper: ["paper"], list: ["list"] }, p4, t)
  },
  x4 = K(f4, {
    shouldForwardProp: (e) => tn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  b4 = K(o1, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  S4 = K(o4, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  C4 = y.forwardRef(function (t, n) {
    var r, o
    const i = ee({ props: t, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: l,
        className: a,
        disableAutoFocusItem: u = !1,
        MenuListProps: d = {},
        onClose: f,
        open: h,
        PaperProps: C = {},
        PopoverClasses: v,
        transitionDuration: x = "auto",
        TransitionProps: { onEntering: w } = {},
        variant: p = "selectedMenu",
        slots: m = {},
        slotProps: g = {},
      } = i,
      S = H(i.TransitionProps, h4),
      k = H(i, m4),
      R = SE(),
      E = b({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: d,
        onEntering: w,
        PaperProps: C,
        transitionDuration: x,
        TransitionProps: S,
        variant: p,
      }),
      P = y4(E),
      T = s && !u && h,
      j = y.useRef(null),
      I = ($, M) => {
        j.current &&
          j.current.adjustStyleForScrollbar($, {
            direction: R ? "rtl" : "ltr",
          }),
          w && w($, M)
      },
      N = ($) => {
        $.key === "Tab" && ($.preventDefault(), f && f($, "tabKeyDown"))
      }
    let O = -1
    y.Children.map(l, ($, M) => {
      y.isValidElement($) &&
        ($.props.disabled ||
          (((p === "selectedMenu" && $.props.selected) || O === -1) && (O = M)))
    })
    const L = (r = m.paper) != null ? r : b4,
      z = (o = g.paper) != null ? o : C,
      B = Oo({
        elementType: m.root,
        externalSlotProps: g.root,
        ownerState: E,
        className: [P.root, a],
      }),
      U = Oo({
        elementType: L,
        externalSlotProps: z,
        ownerState: E,
        className: P.paper,
      })
    return c.jsx(
      x4,
      b(
        {
          onClose: f,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: R ? "right" : "left",
          },
          transformOrigin: R ? g4 : v4,
          slots: { paper: L, root: m.root },
          slotProps: { root: B, paper: U },
          open: h,
          ref: n,
          transitionDuration: x,
          TransitionProps: b({ onEntering: I }, S),
          ownerState: E,
        },
        k,
        {
          classes: v,
          children: c.jsx(
            S4,
            b(
              {
                onKeyDown: N,
                actions: j,
                autoFocus: s && (O === -1 || u),
                autoFocusItem: T,
                variant: p,
              },
              d,
              { className: q(P.list, d.className), children: l }
            )
          ),
        }
      )
    )
  }),
  w4 = C4
function E4(e) {
  return Z("MuiMenuItem", e)
}
const R4 = Y("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  di = R4,
  k4 = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  P4 = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ]
  },
  $4 = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      a = ne(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        E4,
        s
      )
    return b({}, s, a)
  },
  T4 = K(Mo, {
    shouldForwardProp: (e) => tn(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: P4,
  })(({ theme: e, ownerState: t }) =>
    b(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${di.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : he(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${di.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : he(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${di.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : he(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : he(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${di.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${di.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${Um.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${Um.inset}`]: { marginLeft: 52 },
        [`& .${la.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${la.inset}`]: { paddingLeft: 36 },
        [`& .${Km.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        b(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${Km.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  _4 = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: s = !1,
        divider: l = !1,
        disableGutters: a = !1,
        focusVisibleClassName: u,
        role: d = "menuitem",
        tabIndex: f,
        className: h,
      } = r,
      C = H(r, k4),
      v = y.useContext(Nn),
      x = y.useMemo(
        () => ({ dense: s || v.dense || !1, disableGutters: a }),
        [v.dense, s, a]
      ),
      w = y.useRef(null)
    pn(() => {
      o && w.current && w.current.focus()
    }, [o])
    const p = b({}, r, { dense: x.dense, divider: l, disableGutters: a }),
      m = $4(r),
      g = Ye(w, n)
    let S
    return (
      r.disabled || (S = f !== void 0 ? f : -1),
      c.jsx(Nn.Provider, {
        value: x,
        children: c.jsx(
          T4,
          b(
            {
              ref: g,
              role: d,
              tabIndex: S,
              component: i,
              focusVisibleClassName: q(m.focusVisible, u),
              className: q(m.root, h),
            },
            C,
            { ownerState: p, classes: m }
          )
        ),
      })
    )
  }),
  el = _4
function j4(e) {
  return Z("MuiNativeSelect", e)
}
const I4 = Y("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  cp = I4,
  O4 = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  M4 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      l = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${F(n)}`, i && "iconOpen", r && "disabled"],
      }
    return ne(l, j4, t)
  },
  i1 = ({ ownerState: e, theme: t }) =>
    b(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": b(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${cp.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  N4 = K("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: tn,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${cp.multiple}`]: t.multiple },
      ]
    },
  })(i1),
  s1 = ({ ownerState: e, theme: t }) =>
    b(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${cp.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  L4 = K("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.icon,
        n.variant && t[`icon${F(n.variant)}`],
        n.open && t.iconOpen,
      ]
    },
  })(s1),
  A4 = y.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: l,
        variant: a = "standard",
      } = t,
      u = H(t, O4),
      d = b({}, t, { disabled: o, variant: a, error: i }),
      f = M4(d)
    return c.jsxs(y.Fragment, {
      children: [
        c.jsx(
          N4,
          b(
            {
              ownerState: d,
              className: q(f.select, r),
              disabled: o,
              ref: l || n,
            },
            u
          )
        ),
        t.multiple
          ? null
          : c.jsx(L4, { as: s, ownerState: d, className: f.icon }),
      ],
    })
  }),
  z4 = A4
var Ym
const F4 = ["children", "classes", "className", "label", "notched"],
  B4 = K("fieldset", { name: "MuiNotchedOutlined", shouldForwardProp: tn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  D4 = K("legend", { name: "MuiNotchedOutlined", shouldForwardProp: tn })(
    ({ ownerState: e, theme: t }) =>
      b(
        { float: "unset", width: "auto", overflow: "hidden" },
        !e.withLabel && {
          padding: 0,
          lineHeight: "11px",
          transition: t.transitions.create("width", {
            duration: 150,
            easing: t.transitions.easing.easeOut,
          }),
        },
        e.withLabel &&
          b(
            {
              display: "block",
              padding: 0,
              height: 11,
              fontSize: "0.75em",
              visibility: "hidden",
              maxWidth: 0.01,
              transition: t.transitions.create("max-width", {
                duration: 50,
                easing: t.transitions.easing.easeOut,
              }),
              whiteSpace: "nowrap",
              "& > span": {
                paddingLeft: 5,
                paddingRight: 5,
                display: "inline-block",
                opacity: 0,
                visibility: "visible",
              },
            },
            e.notched && {
              maxWidth: "100%",
              transition: t.transitions.create("max-width", {
                duration: 100,
                easing: t.transitions.easing.easeOut,
                delay: 50,
              }),
            }
          )
      )
  )
function U4(e) {
  const { className: t, label: n, notched: r } = e,
    o = H(e, F4),
    i = n != null && n !== "",
    s = b({}, e, { notched: r, withLabel: i })
  return c.jsx(
    B4,
    b({ "aria-hidden": !0, className: t, ownerState: s }, o, {
      children: c.jsx(D4, {
        ownerState: s,
        children: i
          ? c.jsx("span", { children: n })
          : Ym ||
            (Ym = c.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  )
}
const W4 = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  H4 = (e) => {
    const { classes: t } = e,
      r = ne(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        qP,
        t
      )
    return b({}, t, r)
  },
  V4 = K(pu, {
    shouldForwardProp: (e) => tn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: du,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)"
    return b(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Kn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Kn.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${Kn.focused} .${Kn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${Kn.error} .${Kn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${Kn.disabled} .${Kn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        b(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    )
  }),
  K4 = K(U4, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)"
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    }
  }),
  G4 = K(hu, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: fu,
  })(({ theme: e, ownerState: t }) =>
    b(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  l1 = y.forwardRef(function (t, n) {
    var r, o, i, s, l
    const a = ee({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: d = !1,
        inputComponent: f = "input",
        label: h,
        multiline: C = !1,
        notched: v,
        slots: x = {},
        type: w = "text",
      } = a,
      p = H(a, W4),
      m = H4(a),
      g = Ko(),
      S = Vo({
        props: a,
        muiFormControl: g,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      k = b({}, a, {
        color: S.color || "primary",
        disabled: S.disabled,
        error: S.error,
        focused: S.focused,
        formControl: g,
        fullWidth: d,
        hiddenLabel: S.hiddenLabel,
        multiline: C,
        size: S.size,
        type: w,
      }),
      R = (r = (o = x.root) != null ? o : u.Root) != null ? r : V4,
      E = (i = (s = x.input) != null ? s : u.Input) != null ? i : G4
    return c.jsx(
      up,
      b(
        {
          slots: { root: R, input: E },
          renderSuffix: (P) =>
            c.jsx(K4, {
              ownerState: k,
              className: m.notchedOutline,
              label:
                h != null && h !== "" && S.required
                  ? l || (l = c.jsxs(y.Fragment, { children: [h, " ", "*"] }))
                  : h,
              notched:
                typeof v < "u"
                  ? v
                  : !!(P.startAdornment || P.filled || P.focused),
            }),
          fullWidth: d,
          inputComponent: f,
          multiline: C,
          ref: n,
          type: w,
        },
        p,
        { classes: b({}, m, { notchedOutline: null }) }
      )
    )
  })
l1.muiName = "Input"
const a1 = l1
function q4(e) {
  return Z("MuiSelect", e)
}
const Q4 = Y("MuiSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  fi = Q4
var Jm
const X4 = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  Y4 = K("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`&.${fi.select}`]: t.select },
        { [`&.${fi.select}`]: t[n.variant] },
        { [`&.${fi.error}`]: t.error },
        { [`&.${fi.multiple}`]: t.multiple },
      ]
    },
  })(i1, {
    [`&.${fi.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  J4 = K("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.icon,
        n.variant && t[`icon${F(n.variant)}`],
        n.open && t.iconOpen,
      ]
    },
  })(s1),
  Z4 = K("input", {
    shouldForwardProp: (e) => U0(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  })
function Zm(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t)
}
function ej(e) {
  return e == null || (typeof e == "string" && !e.trim())
}
const tj = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      l = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${F(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      }
    return ne(l, q4, t)
  },
  nj = y.forwardRef(function (t, n) {
    var r
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: s,
        autoWidth: l,
        children: a,
        className: u,
        defaultOpen: d,
        defaultValue: f,
        disabled: h,
        displayEmpty: C,
        error: v = !1,
        IconComponent: x,
        inputRef: w,
        labelId: p,
        MenuProps: m = {},
        multiple: g,
        name: S,
        onBlur: k,
        onChange: R,
        onClose: E,
        onFocus: P,
        onOpen: T,
        open: j,
        readOnly: I,
        renderValue: N,
        SelectDisplayProps: O = {},
        tabIndex: L,
        value: z,
        variant: B = "standard",
      } = t,
      U = H(t, X4),
      [$, M] = yd({ controlled: z, default: f, name: "Select" }),
      [V, J] = yd({ controlled: j, default: d, name: "Select" }),
      oe = y.useRef(null),
      be = y.useRef(null),
      [te, ye] = y.useState(null),
      { current: ue } = y.useRef(j != null),
      [qe, pt] = y.useState(),
      Be = Ye(n, w),
      yt = y.useCallback((Q) => {
        ;(be.current = Q), Q && ye(Q)
      }, []),
      me = te == null ? void 0 : te.parentNode
    y.useImperativeHandle(
      Be,
      () => ({
        focus: () => {
          be.current.focus()
        },
        node: oe.current,
        value: $,
      }),
      [$]
    ),
      y.useEffect(() => {
        d &&
          V &&
          te &&
          !ue &&
          (pt(l ? null : me.clientWidth), be.current.focus())
      }, [te, l]),
      y.useEffect(() => {
        s && be.current.focus()
      }, [s]),
      y.useEffect(() => {
        if (!p) return
        const Q = Rt(be.current).getElementById(p)
        if (Q) {
          const Ee = () => {
            getSelection().isCollapsed && be.current.focus()
          }
          return (
            Q.addEventListener("click", Ee),
            () => {
              Q.removeEventListener("click", Ee)
            }
          )
        }
      }, [p])
    const je = (Q, Ee) => {
        Q ? T && T(Ee) : E && E(Ee), ue || (pt(l ? null : me.clientWidth), J(Q))
      },
      se = (Q) => {
        Q.button === 0 && (Q.preventDefault(), be.current.focus(), je(!0, Q))
      },
      xe = (Q) => {
        je(!1, Q)
      },
      Pe = y.Children.toArray(a),
      Wn = (Q) => {
        const Ee = Pe.find((nt) => nt.props.value === Q.target.value)
        Ee !== void 0 && (M(Ee.props.value), R && R(Q, Ee))
      },
      zt = (Q) => (Ee) => {
        let nt
        if (Ee.currentTarget.hasAttribute("tabindex")) {
          if (g) {
            nt = Array.isArray($) ? $.slice() : []
            const Hr = $.indexOf(Q.props.value)
            Hr === -1 ? nt.push(Q.props.value) : nt.splice(Hr, 1)
          } else nt = Q.props.value
          if (
            (Q.props.onClick && Q.props.onClick(Ee), $ !== nt && (M(nt), R))
          ) {
            const Hr = Ee.nativeEvent || Ee,
              Cp = new Hr.constructor(Hr.type, Hr)
            Object.defineProperty(Cp, "target", {
              writable: !0,
              value: { value: nt, name: S },
            }),
              R(Cp, Q)
          }
          g || je(!1, Ee)
        }
      },
      Ft = (Q) => {
        I ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(Q.key) !== -1 &&
            (Q.preventDefault(), je(!0, Q)))
      },
      nn = te !== null && V,
      Bt = (Q) => {
        !nn &&
          k &&
          (Object.defineProperty(Q, "target", {
            writable: !0,
            value: { value: $, name: S },
          }),
          k(Q))
      }
    delete U["aria-invalid"]
    let Ie, Rn
    const xt = []
    let $e = !1
    ;(sa({ value: $ }) || C) && (N ? (Ie = N($)) : ($e = !0))
    const mn = Pe.map((Q) => {
      if (!y.isValidElement(Q)) return null
      let Ee
      if (g) {
        if (!Array.isArray($)) throw new Error(Ar(2))
        ;(Ee = $.some((nt) => Zm(nt, Q.props.value))),
          Ee && $e && xt.push(Q.props.children)
      } else (Ee = Zm($, Q.props.value)), Ee && $e && (Rn = Q.props.children)
      return y.cloneElement(Q, {
        "aria-selected": Ee ? "true" : "false",
        onClick: zt(Q),
        onKeyUp: (nt) => {
          nt.key === " " && nt.preventDefault(),
            Q.props.onKeyUp && Q.props.onKeyUp(nt)
        },
        role: "option",
        selected: Ee,
        value: void 0,
        "data-value": Q.props.value,
      })
    })
    $e &&
      (g
        ? xt.length === 0
          ? (Ie = null)
          : (Ie = xt.reduce(
              (Q, Ee, nt) => (
                Q.push(Ee), nt < xt.length - 1 && Q.push(", "), Q
              ),
              []
            ))
        : (Ie = Rn))
    let Hn = qe
    !l && ue && te && (Hn = me.clientWidth)
    let kn
    typeof L < "u" ? (kn = L) : (kn = h ? null : 0)
    const Ce = O.id || (S ? `mui-component-select-${S}` : void 0),
      X = b({}, t, { variant: B, value: $, open: nn, error: v }),
      Pn = tj(X),
      Qo = b({}, m.PaperProps, (r = m.slotProps) == null ? void 0 : r.paper),
      Xo = lu()
    return c.jsxs(y.Fragment, {
      children: [
        c.jsx(
          Y4,
          b(
            {
              ref: yt,
              tabIndex: kn,
              role: "combobox",
              "aria-controls": Xo,
              "aria-disabled": h ? "true" : void 0,
              "aria-expanded": nn ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [p, Ce].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: Ft,
              onMouseDown: h || I ? null : se,
              onBlur: Bt,
              onFocus: P,
            },
            O,
            {
              ownerState: X,
              className: q(O.className, Pn.select, u),
              id: Ce,
              children: ej(Ie)
                ? Jm ||
                  (Jm = c.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : Ie,
            }
          )
        ),
        c.jsx(
          Z4,
          b(
            {
              "aria-invalid": v,
              value: Array.isArray($) ? $.join(",") : $,
              name: S,
              ref: oe,
              "aria-hidden": !0,
              onChange: Wn,
              tabIndex: -1,
              disabled: h,
              className: Pn.nativeInput,
              autoFocus: s,
              ownerState: X,
            },
            U
          )
        ),
        c.jsx(J4, { as: x, className: Pn.icon, ownerState: X }),
        c.jsx(
          w4,
          b(
            {
              id: `menu-${S || ""}`,
              anchorEl: me,
              open: nn,
              onClose: xe,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            m,
            {
              MenuListProps: b(
                {
                  "aria-labelledby": p,
                  role: "listbox",
                  "aria-multiselectable": g ? "true" : void 0,
                  disableListWrap: !0,
                  id: Xo,
                },
                m.MenuListProps
              ),
              slotProps: b({}, m.slotProps, {
                paper: b({}, Qo, {
                  style: b({ minWidth: Hn }, Qo != null ? Qo.style : null),
                }),
              }),
              children: mn,
            }
          )
        ),
      ],
    })
  }),
  rj = nj,
  oj = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  ij = ["root"],
  sj = (e) => {
    const { classes: t } = e
    return t
  },
  dp = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => tn(e) && e !== "variant",
    slot: "Root",
  },
  lj = K(t1, dp)(""),
  aj = K(a1, dp)(""),
  uj = K(Y0, dp)(""),
  u1 = y.forwardRef(function (t, n) {
    const r = ee({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: l,
        defaultOpen: a = !1,
        displayEmpty: u = !1,
        IconComponent: d = JP,
        id: f,
        input: h,
        inputProps: C,
        label: v,
        labelId: x,
        MenuProps: w,
        multiple: p = !1,
        native: m = !1,
        onClose: g,
        onOpen: S,
        open: k,
        renderValue: R,
        SelectDisplayProps: E,
        variant: P = "outlined",
      } = r,
      T = H(r, oj),
      j = m ? z4 : rj,
      I = Ko(),
      N = Vo({ props: r, muiFormControl: I, states: ["variant", "error"] }),
      O = N.variant || P,
      L = b({}, r, { variant: O, classes: s }),
      z = sj(L),
      B = H(z, ij),
      U =
        h ||
        {
          standard: c.jsx(lj, { ownerState: L }),
          outlined: c.jsx(aj, { label: v, ownerState: L }),
          filled: c.jsx(uj, { ownerState: L }),
        }[O],
      $ = Ye(n, Es(U))
    return c.jsx(y.Fragment, {
      children: y.cloneElement(
        U,
        b(
          {
            inputComponent: j,
            inputProps: b(
              {
                children: i,
                error: N.error,
                IconComponent: d,
                variant: O,
                type: void 0,
                multiple: p,
              },
              m
                ? { id: f }
                : {
                    autoWidth: o,
                    defaultOpen: a,
                    displayEmpty: u,
                    labelId: x,
                    MenuProps: w,
                    onClose: g,
                    onOpen: S,
                    open: k,
                    renderValue: R,
                    SelectDisplayProps: b({ id: f }, E),
                  },
              C,
              { classes: C ? Ot(B, C.classes) : B },
              h ? h.props.inputProps : {}
            ),
          },
          ((p && m) || u) && O === "outlined" ? { notched: !0 } : {},
          { ref: $, className: q(U.props.className, l, z.root) },
          !h && { variant: O },
          T
        )
      ),
    })
  })
u1.muiName = "Select"
const cj = u1,
  dj = y.createContext(),
  c1 = dj
function fj(e) {
  return Z("MuiTable", e)
}
Y("MuiTable", ["root", "stickyHeader"])
const pj = ["className", "component", "padding", "size", "stickyHeader"],
  hj = (e) => {
    const { classes: t, stickyHeader: n } = e
    return ne({ root: ["root", n && "stickyHeader"] }, fj, t)
  },
  mj = K("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.stickyHeader && t.stickyHeader]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        display: "table",
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: 0,
        "& caption": b({}, e.typography.body2, {
          padding: e.spacing(2),
          color: (e.vars || e).palette.text.secondary,
          textAlign: "left",
          captionSide: "bottom",
        }),
      },
      t.stickyHeader && { borderCollapse: "separate" }
    )
  ),
  eg = "table",
  gj = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTable" }),
      {
        className: o,
        component: i = eg,
        padding: s = "normal",
        size: l = "medium",
        stickyHeader: a = !1,
      } = r,
      u = H(r, pj),
      d = b({}, r, { component: i, padding: s, size: l, stickyHeader: a }),
      f = hj(d),
      h = y.useMemo(() => ({ padding: s, size: l, stickyHeader: a }), [s, l, a])
    return c.jsx(c1.Provider, {
      value: h,
      children: c.jsx(
        mj,
        b(
          {
            as: i,
            role: i === eg ? null : "table",
            ref: n,
            className: q(f.root, o),
            ownerState: d,
          },
          u
        )
      ),
    })
  }),
  is = gj,
  vj = y.createContext(),
  vu = vj
function yj(e) {
  return Z("MuiTableBody", e)
}
Y("MuiTableBody", ["root"])
const xj = ["className", "component"],
  bj = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"] }, yj, t)
  },
  Sj = K("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-row-group" }),
  Cj = { variant: "body" },
  tg = "tbody",
  wj = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTableBody" }),
      { className: o, component: i = tg } = r,
      s = H(r, xj),
      l = b({}, r, { component: i }),
      a = bj(l)
    return c.jsx(vu.Provider, {
      value: Cj,
      children: c.jsx(
        Sj,
        b(
          {
            className: q(a.root, o),
            as: i,
            ref: n,
            role: i === tg ? null : "rowgroup",
            ownerState: l,
          },
          s
        )
      ),
    })
  }),
  ss = wj
function Ej(e) {
  return Z("MuiTableCell", e)
}
const Rj = Y("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader",
  ]),
  kj = Rj,
  Pj = [
    "align",
    "className",
    "component",
    "padding",
    "scope",
    "size",
    "sortDirection",
    "variant",
  ],
  $j = (e) => {
    const {
        classes: t,
        variant: n,
        align: r,
        padding: o,
        size: i,
        stickyHeader: s,
      } = e,
      l = {
        root: [
          "root",
          n,
          s && "stickyHeader",
          r !== "inherit" && `align${F(r)}`,
          o !== "normal" && `padding${F(o)}`,
          `size${F(i)}`,
        ],
      }
    return ne(l, Ej, t)
  },
  Tj = K("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        t[`size${F(n.size)}`],
        n.padding !== "normal" && t[`padding${F(n.padding)}`],
        n.align !== "inherit" && t[`align${F(n.align)}`],
        n.stickyHeader && t.stickyHeader,
      ]
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {},
      e.typography.body2,
      {
        display: "table-cell",
        verticalAlign: "inherit",
        borderBottom: e.vars
          ? `1px solid ${e.vars.palette.TableCell.border}`
          : `1px solid
    ${
      e.palette.mode === "light"
        ? ta(he(e.palette.divider, 1), 0.88)
        : ea(he(e.palette.divider, 1), 0.68)
    }`,
        textAlign: "left",
        padding: 16,
      },
      t.variant === "head" && {
        color: (e.vars || e).palette.text.primary,
        lineHeight: e.typography.pxToRem(24),
        fontWeight: e.typography.fontWeightMedium,
      },
      t.variant === "body" && { color: (e.vars || e).palette.text.primary },
      t.variant === "footer" && {
        color: (e.vars || e).palette.text.secondary,
        lineHeight: e.typography.pxToRem(21),
        fontSize: e.typography.pxToRem(12),
      },
      t.size === "small" && {
        padding: "6px 16px",
        [`&.${kj.paddingCheckbox}`]: {
          width: 24,
          padding: "0 12px 0 16px",
          "& > *": { padding: 0 },
        },
      },
      t.padding === "checkbox" && { width: 48, padding: "0 0 0 4px" },
      t.padding === "none" && { padding: 0 },
      t.align === "left" && { textAlign: "left" },
      t.align === "center" && { textAlign: "center" },
      t.align === "right" && {
        textAlign: "right",
        flexDirection: "row-reverse",
      },
      t.align === "justify" && { textAlign: "justify" },
      t.stickyHeader && {
        position: "sticky",
        top: 0,
        zIndex: 2,
        backgroundColor: (e.vars || e).palette.background.default,
      }
    )
  ),
  _j = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTableCell" }),
      {
        align: o = "inherit",
        className: i,
        component: s,
        padding: l,
        scope: a,
        size: u,
        sortDirection: d,
        variant: f,
      } = r,
      h = H(r, Pj),
      C = y.useContext(c1),
      v = y.useContext(vu),
      x = v && v.variant === "head"
    let w
    s ? (w = s) : (w = x ? "th" : "td")
    let p = a
    w === "td" ? (p = void 0) : !p && x && (p = "col")
    const m = f || (v && v.variant),
      g = b({}, r, {
        align: o,
        component: w,
        padding: l || (C && C.padding ? C.padding : "normal"),
        size: u || (C && C.size ? C.size : "medium"),
        sortDirection: d,
        stickyHeader: m === "head" && C && C.stickyHeader,
        variant: m,
      }),
      S = $j(g)
    let k = null
    return (
      d && (k = d === "asc" ? "ascending" : "descending"),
      c.jsx(
        Tj,
        b(
          {
            as: w,
            ref: n,
            className: q(S.root, i),
            "aria-sort": k,
            scope: p,
            ownerState: g,
          },
          h
        )
      )
    )
  }),
  W = _j
function jj(e) {
  return Z("MuiTableContainer", e)
}
Y("MuiTableContainer", ["root"])
const Ij = ["className", "component"],
  Oj = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"] }, jj, t)
  },
  Mj = K("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ width: "100%", overflowX: "auto" }),
  Nj = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTableContainer" }),
      { className: o, component: i = "div" } = r,
      s = H(r, Ij),
      l = b({}, r, { component: i }),
      a = Oj(l)
    return c.jsx(
      Mj,
      b({ ref: n, as: i, className: q(a.root, o), ownerState: l }, s)
    )
  }),
  ls = Nj
function Lj(e) {
  return Z("MuiTableHead", e)
}
Y("MuiTableHead", ["root"])
const Aj = ["className", "component"],
  zj = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"] }, Lj, t)
  },
  Fj = K("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-header-group" }),
  Bj = { variant: "head" },
  ng = "thead",
  Dj = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTableHead" }),
      { className: o, component: i = ng } = r,
      s = H(r, Aj),
      l = b({}, r, { component: i }),
      a = zj(l)
    return c.jsx(vu.Provider, {
      value: Bj,
      children: c.jsx(
        Fj,
        b(
          {
            as: i,
            className: q(a.root, o),
            ref: n,
            role: i === ng ? null : "rowgroup",
            ownerState: l,
          },
          s
        )
      ),
    })
  }),
  as = Dj
function Uj(e) {
  return Z("MuiToolbar", e)
}
Y("MuiToolbar", ["root", "gutters", "regular", "dense"])
const Wj = ["className", "component", "disableGutters", "variant"],
  Hj = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e
    return ne({ root: ["root", !n && "gutters", r] }, Uj, t)
  },
  Vj = K("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]]
    },
  })(
    ({ theme: e, ownerState: t }) =>
      b(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  Kj = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: l = "regular",
      } = r,
      a = H(r, Wj),
      u = b({}, r, { component: i, disableGutters: s, variant: l }),
      d = Hj(u)
    return c.jsx(
      Vj,
      b({ as: i, className: q(d.root, o), ref: n, ownerState: u }, a)
    )
  }),
  Gj = Kj
function qj(e) {
  return Z("MuiTableRow", e)
}
const Qj = Y("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
  rg = Qj,
  Xj = ["className", "component", "hover", "selected"],
  Yj = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: i } = e
    return ne(
      {
        root: [
          "root",
          n && "selected",
          r && "hover",
          o && "head",
          i && "footer",
        ],
      },
      qj,
      t
    )
  },
  Jj = K("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.head && t.head, n.footer && t.footer]
    },
  })(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${rg.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
    },
    [`&.${rg.selected}`]: {
      backgroundColor: e.vars
        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
        : he(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : he(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
      },
    },
  })),
  og = "tr",
  Zj = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTableRow" }),
      { className: o, component: i = og, hover: s = !1, selected: l = !1 } = r,
      a = H(r, Xj),
      u = y.useContext(vu),
      d = b({}, r, {
        component: i,
        hover: s,
        selected: l,
        head: u && u.variant === "head",
        footer: u && u.variant === "footer",
      }),
      f = Yj(d)
    return c.jsx(
      Jj,
      b(
        {
          as: i,
          ref: n,
          className: q(f.root, o),
          role: i === og ? null : "row",
          ownerState: d,
        },
        a
      )
    )
  }),
  Kt = Zj
function eI(e) {
  return Z("MuiTextField", e)
}
Y("MuiTextField", ["root"])
const tI = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  nI = { standard: t1, filled: Y0, outlined: a1 },
  rI = (e) => {
    const { classes: t } = e
    return ne({ root: ["root"] }, eI, t)
  },
  oI = K(jT, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  iI = y.forwardRef(function (t, n) {
    const r = ee({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: l,
        color: a = "primary",
        defaultValue: u,
        disabled: d = !1,
        error: f = !1,
        FormHelperTextProps: h,
        fullWidth: C = !1,
        helperText: v,
        id: x,
        InputLabelProps: w,
        inputProps: p,
        InputProps: m,
        inputRef: g,
        label: S,
        maxRows: k,
        minRows: R,
        multiline: E = !1,
        name: P,
        onBlur: T,
        onChange: j,
        onFocus: I,
        placeholder: N,
        required: O = !1,
        rows: L,
        select: z = !1,
        SelectProps: B,
        type: U,
        value: $,
        variant: M = "outlined",
      } = r,
      V = H(r, tI),
      J = b({}, r, {
        autoFocus: i,
        color: a,
        disabled: d,
        error: f,
        fullWidth: C,
        multiline: E,
        required: O,
        select: z,
        variant: M,
      }),
      oe = rI(J),
      be = {}
    M === "outlined" &&
      (w && typeof w.shrink < "u" && (be.notched = w.shrink), (be.label = S)),
      z &&
        ((!B || !B.native) && (be.id = void 0),
        (be["aria-describedby"] = void 0))
    const te = lu(x),
      ye = v && te ? `${te}-helper-text` : void 0,
      ue = S && te ? `${te}-label` : void 0,
      qe = nI[M],
      pt = c.jsx(
        qe,
        b(
          {
            "aria-describedby": ye,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: C,
            multiline: E,
            name: P,
            rows: L,
            maxRows: k,
            minRows: R,
            type: U,
            value: $,
            id: te,
            inputRef: g,
            onBlur: T,
            onChange: j,
            onFocus: I,
            placeholder: N,
            inputProps: p,
          },
          be,
          m
        )
      )
    return c.jsxs(
      oI,
      b(
        {
          className: q(oe.root, l),
          disabled: d,
          error: f,
          fullWidth: C,
          ref: n,
          required: O,
          color: a,
          variant: M,
          ownerState: J,
        },
        V,
        {
          children: [
            S != null &&
              S !== "" &&
              c.jsx(S_, b({ htmlFor: te, id: ue }, w, { children: S })),
            z
              ? c.jsx(
                  cj,
                  b(
                    {
                      "aria-describedby": ye,
                      id: te,
                      labelId: ue,
                      value: $,
                      input: pt,
                    },
                    B,
                    { children: s }
                  )
                )
              : pt,
            v && c.jsx(zT, b({ id: ye }, h, { children: v })),
          ],
        }
      )
    )
  }),
  dc = iI,
  sI = Je(
    c.jsx("path", {
      d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4",
    }),
    "AttachMoney"
  ),
  lI = Je(
    c.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z",
    }),
    "CheckCircle"
  ),
  aI = Je(
    c.jsx("path", {
      d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96",
    }),
    "Cloud"
  ),
  uI = Je(
    c.jsx("path", { d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z" }),
    "Dashboard"
  ),
  cI = Je(
    c.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z",
    }),
    "Error"
  ),
  ig = Je(
    c.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z",
    }),
    "Info"
  ),
  d1 = Je(
    c.jsx("path", {
      d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6",
    }),
    "Settings"
  ),
  sg = Je(
    c.jsx("path", {
      d: "M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z",
    }),
    "Storage"
  ),
  dI = Je(
    c.jsx("path", {
      d: "M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z",
    }),
    "Store"
  ),
  Pd = Je(
    c.jsx("path", {
      d: "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
    }),
    "TrendingUp"
  ),
  fI = Je(
    c.jsx("path", { d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" }),
    "Warning"
  ),
  pI = () => {
    const e = gs(),
      t = [
        { path: "/", label: "Dashboard", icon: c.jsx(uI, {}) },
        { path: "/arbitrage", label: "Arbitragem", icon: c.jsx(Pd, {}) },
        {
          path: "/manual-arbitrage",
          label: "Arbitrage Manual",
          icon: c.jsx(Pd, {}),
        },
        { path: "/market", label: "Mercado", icon: c.jsx(dI, {}) },
        { path: "/settings", label: "Configurações", icon: c.jsx(d1, {}) },
      ]
    return c.jsx(SP, {
      position: "static",
      elevation: 0,
      children: c.jsxs(Gj, {
        children: [
          c.jsx(D, {
            variant: "h6",
            component: Fh,
            to: "/",
            sx: {
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            },
            children: "Albion Arbitrage",
          }),
          c.jsx(le, {
            sx: { display: "flex", gap: 1 },
            children: t.map((n) =>
              c.jsx(
                R$,
                {
                  component: Fh,
                  to: n.path,
                  startIcon: n.icon,
                  sx: {
                    color: "inherit",
                    textTransform: "none",
                    backgroundColor:
                      e.pathname === n.path
                        ? "rgba(255, 255, 255, 0.1)"
                        : "transparent",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  },
                  children: n.label,
                },
                n.path
              )
            ),
          }),
        ],
      }),
    })
  }
function f1(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: hI } = Object.prototype,
  { getPrototypeOf: fp } = Object,
  { iterator: yu, toStringTag: p1 } = Symbol,
  xu = ((e) => (t) => {
    const n = hI.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  hn = (e) => ((e = e.toLowerCase()), (t) => xu(t) === e),
  bu = (e) => (t) => typeof t === e,
  { isArray: Go } = Array,
  us = bu("undefined")
function mI(e) {
  return (
    e !== null &&
    !us(e) &&
    e.constructor !== null &&
    !us(e.constructor) &&
    kt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const h1 = hn("ArrayBuffer")
function gI(e) {
  let t
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && h1(e.buffer)),
    t
  )
}
const vI = bu("string"),
  kt = bu("function"),
  m1 = bu("number"),
  Su = (e) => e !== null && typeof e == "object",
  yI = (e) => e === !0 || e === !1,
  xl = (e) => {
    if (xu(e) !== "object") return !1
    const t = fp(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(p1 in e) &&
      !(yu in e)
    )
  },
  xI = hn("Date"),
  bI = hn("File"),
  SI = hn("Blob"),
  CI = hn("FileList"),
  wI = (e) => Su(e) && kt(e.pipe),
  EI = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (kt(e.append) &&
          ((t = xu(e)) === "formdata" ||
            (t === "object" &&
              kt(e.toString) &&
              e.toString() === "[object FormData]"))))
    )
  },
  RI = hn("URLSearchParams"),
  [kI, PI, $I, TI] = ["ReadableStream", "Request", "Response", "Headers"].map(
    hn
  ),
  _I = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
function Ps(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return
  let r, o
  if ((typeof e != "object" && (e = [e]), Go(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length
    let l
    for (r = 0; r < s; r++) (l = i[r]), t.call(null, e[l], l, e)
  }
}
function g1(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const Tr = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  v1 = (e) => !us(e) && e !== Tr
function $d() {
  const { caseless: e } = (v1(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && g1(t, o)) || o
      xl(t[i]) && xl(r)
        ? (t[i] = $d(t[i], r))
        : xl(r)
        ? (t[i] = $d({}, r))
        : Go(r)
        ? (t[i] = r.slice())
        : (t[i] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ps(arguments[r], n)
  return t
}
const jI = (e, t, n, { allOwnKeys: r } = {}) => (
    Ps(
      t,
      (o, i) => {
        n && kt(o) ? (e[i] = f1(o, n)) : (e[i] = o)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  II = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  OI = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  MI = (e, t, n, r) => {
    let o, i, s
    const l = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0))
      e = n !== !1 && fp(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  NI = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  LI = (e) => {
    if (!e) return null
    if (Go(e)) return e
    let t = e.length
    if (!m1(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  AI = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && fp(Uint8Array)),
  zI = (e, t) => {
    const r = (e && e[yu]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  FI = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  BI = hn("HTMLFormElement"),
  DI = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  lg = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  UI = hn("RegExp"),
  y1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    Ps(n, (o, i) => {
      let s
      ;(s = t(o, i, e)) !== !1 && (r[i] = s || o)
    }),
      Object.defineProperties(e, r)
  },
  WI = (e) => {
    y1(e, (t, n) => {
      if (kt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (kt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  HI = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0
        })
      }
    return Go(e) ? r(e) : r(String(e).split(t)), n
  },
  VI = () => {},
  KI = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t)
function GI(e) {
  return !!(e && kt(e.append) && e[p1] === "FormData" && e[yu])
}
const qI = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Su(r)) {
          if (t.indexOf(r) >= 0) return
          if (!("toJSON" in r)) {
            t[o] = r
            const i = Go(r) ? [] : {}
            return (
              Ps(r, (s, l) => {
                const a = n(s, o + 1)
                !us(a) && (i[l] = a)
              }),
              (t[o] = void 0),
              i
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  QI = hn("AsyncFunction"),
  XI = (e) => e && (Su(e) || kt(e)) && kt(e.then) && kt(e.catch),
  x1 = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Tr.addEventListener(
            "message",
            ({ source: o, data: i }) => {
              o === Tr && i === n && r.length && r.shift()()
            },
            !1
          ),
          (o) => {
            r.push(o), Tr.postMessage(n, "*")
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    kt(Tr.postMessage)
  ),
  YI =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Tr)
      : (typeof process < "u" && process.nextTick) || x1,
  JI = (e) => e != null && kt(e[yu]),
  _ = {
    isArray: Go,
    isArrayBuffer: h1,
    isBuffer: mI,
    isFormData: EI,
    isArrayBufferView: gI,
    isString: vI,
    isNumber: m1,
    isBoolean: yI,
    isObject: Su,
    isPlainObject: xl,
    isReadableStream: kI,
    isRequest: PI,
    isResponse: $I,
    isHeaders: TI,
    isUndefined: us,
    isDate: xI,
    isFile: bI,
    isBlob: SI,
    isRegExp: UI,
    isFunction: kt,
    isStream: wI,
    isURLSearchParams: RI,
    isTypedArray: AI,
    isFileList: CI,
    forEach: Ps,
    merge: $d,
    extend: jI,
    trim: _I,
    stripBOM: II,
    inherits: OI,
    toFlatObject: MI,
    kindOf: xu,
    kindOfTest: hn,
    endsWith: NI,
    toArray: LI,
    forEachEntry: zI,
    matchAll: FI,
    isHTMLForm: BI,
    hasOwnProperty: lg,
    hasOwnProp: lg,
    reduceDescriptors: y1,
    freezeMethods: WI,
    toObjectSet: HI,
    toCamelCase: DI,
    noop: VI,
    toFiniteNumber: KI,
    findKey: g1,
    global: Tr,
    isContextDefined: v1,
    isSpecCompliantForm: GI,
    toJSONObject: qI,
    isAsyncFn: QI,
    isThenable: XI,
    setImmediate: x1,
    asap: YI,
    isIterable: JI,
  }
function re(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null))
}
_.inherits(re, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    }
  },
})
const b1 = re.prototype,
  S1 = {}
;[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  S1[e] = { value: e }
})
Object.defineProperties(re, S1)
Object.defineProperty(b1, "isAxiosError", { value: !0 })
re.from = (e, t, n, r, o, i) => {
  const s = Object.create(b1)
  return (
    _.toFlatObject(
      e,
      s,
      function (a) {
        return a !== Error.prototype
      },
      (l) => l !== "isAxiosError"
    ),
    re.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  )
}
const ZI = null
function Td(e) {
  return _.isPlainObject(e) || _.isArray(e)
}
function C1(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function ag(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = C1(o)), !n && i ? "[" + o + "]" : o
        })
        .join(n ? "." : "")
    : t
}
function eO(e) {
  return _.isArray(e) && !e.some(Td)
}
const tO = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function Cu(e, t, n) {
  if (!_.isObject(e)) throw new TypeError("target must be an object")
  ;(t = t || new FormData()),
    (n = _.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, w) {
        return !_.isUndefined(w[x])
      }
    ))
  const r = n.metaTokens,
    o = n.visitor || d,
    i = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(t)
  if (!_.isFunction(o)) throw new TypeError("visitor must be a function")
  function u(v) {
    if (v === null) return ""
    if (_.isDate(v)) return v.toISOString()
    if (_.isBoolean(v)) return v.toString()
    if (!a && _.isBlob(v))
      throw new re("Blob is not supported. Use a Buffer instead.")
    return _.isArrayBuffer(v) || _.isTypedArray(v)
      ? a && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v
  }
  function d(v, x, w) {
    let p = v
    if (v && !w && typeof v == "object") {
      if (_.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (v = JSON.stringify(v))
      else if (
        (_.isArray(v) && eO(v)) ||
        ((_.isFileList(v) || _.endsWith(x, "[]")) && (p = _.toArray(v)))
      )
        return (
          (x = C1(x)),
          p.forEach(function (g, S) {
            !(_.isUndefined(g) || g === null) &&
              t.append(
                s === !0 ? ag([x], S, i) : s === null ? x : x + "[]",
                u(g)
              )
          }),
          !1
        )
    }
    return Td(v) ? !0 : (t.append(ag(w, x, i), u(v)), !1)
  }
  const f = [],
    h = Object.assign(tO, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Td,
    })
  function C(v, x) {
    if (!_.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + x.join("."))
      f.push(v),
        _.forEach(v, function (p, m) {
          ;(!(_.isUndefined(p) || p === null) &&
            o.call(t, p, _.isString(m) ? m.trim() : m, x, h)) === !0 &&
            C(p, x ? x.concat(m) : [m])
        }),
        f.pop()
    }
  }
  if (!_.isObject(e)) throw new TypeError("data must be an object")
  return C(e), t
}
function ug(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function pp(e, t) {
  ;(this._pairs = []), e && Cu(e, this, t)
}
const w1 = pp.prototype
w1.append = function (t, n) {
  this._pairs.push([t, n])
}
w1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ug)
      }
    : ug
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1])
    }, "")
    .join("&")
}
function nO(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]")
}
function E1(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || nO
  _.isFunction(n) && (n = { serialize: n })
  const o = n && n.serialize
  let i
  if (
    (o
      ? (i = o(t, n))
      : (i = _.isURLSearchParams(t) ? t.toString() : new pp(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#")
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i)
  }
  return e
}
class rO {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    _.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const cg = rO,
  R1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  oO = typeof URLSearchParams < "u" ? URLSearchParams : pp,
  iO = typeof FormData < "u" ? FormData : null,
  sO = typeof Blob < "u" ? Blob : null,
  lO = {
    isBrowser: !0,
    classes: { URLSearchParams: oO, FormData: iO, Blob: sO },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  hp = typeof window < "u" && typeof document < "u",
  _d = (typeof navigator == "object" && navigator) || void 0,
  aO =
    hp &&
    (!_d || ["ReactNative", "NativeScript", "NS"].indexOf(_d.product) < 0),
  uO = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  cO = (hp && window.location.href) || "http://localhost",
  dO = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: hp,
        hasStandardBrowserEnv: aO,
        hasStandardBrowserWebWorkerEnv: uO,
        navigator: _d,
        origin: cO,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dt = { ...dO, ...lO }
function fO(e, t) {
  return Cu(
    e,
    new dt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return dt.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function pO(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  )
}
function hO(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let i
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
  return t
}
function k1(e) {
  function t(n, r, o, i) {
    let s = n[i++]
    if (s === "__proto__") return !0
    const l = Number.isFinite(+s),
      a = i >= n.length
    return (
      (s = !s && _.isArray(o) ? o.length : s),
      a
        ? (_.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !_.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && _.isArray(o[s]) && (o[s] = hO(o[s])),
          !l)
    )
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {}
    return (
      _.forEachEntry(e, (r, o) => {
        t(pO(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
function mO(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e)
    } catch (r) {
      if (r.name !== "SyntaxError") throw r
    }
  return (n || JSON.stringify)(e)
}
const mp = {
  transitional: R1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = _.isObject(t)
      if ((i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)))
        return o ? JSON.stringify(k1(t)) : t
      if (
        _.isArrayBuffer(t) ||
        _.isBuffer(t) ||
        _.isStream(t) ||
        _.isFile(t) ||
        _.isBlob(t) ||
        _.isReadableStream(t)
      )
        return t
      if (_.isArrayBufferView(t)) return t.buffer
      if (_.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        )
      let l
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return fO(t, this.formSerializer).toString()
        if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData
          return Cu(l ? { "files[]": t } : t, a && new a(), this.formSerializer)
        }
      }
      return i || o ? (n.setContentType("application/json", !1), mO(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || mp.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json"
      if (_.isResponse(t) || _.isReadableStream(t)) return t
      if (t && _.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? re.from(l, re.ERR_BAD_RESPONSE, this, null, this.response)
              : l
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: dt.classes.FormData, Blob: dt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
}
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  mp.headers[e] = {}
})
const gp = mp,
  gO = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  vO = (e) => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            ;(o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && gO[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r))
          }),
      t
    )
  },
  dg = Symbol("internals")
function pi(e) {
  return e && String(e).trim().toLowerCase()
}
function bl(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(bl) : String(e)
}
function yO(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const xO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function fc(e, t, n, r, o) {
  if (_.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1
    if (_.isRegExp(r)) return r.test(t)
  }
}
function bO(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function SO(e, t) {
  const n = _.toCamelCase(" " + t)
  ;["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s)
      },
      configurable: !0,
    })
  })
}
class wu {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function i(l, a, u) {
      const d = pi(a)
      if (!d) throw new Error("header name must be a non-empty string")
      const f = _.findKey(o, d)
      ;(!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || a] = bl(l))
    }
    const s = (l, a) => _.forEach(l, (u, d) => i(u, d, a))
    if (_.isPlainObject(t) || t instanceof this.constructor) s(t, n)
    else if (_.isString(t) && (t = t.trim()) && !xO(t)) s(vO(t), n)
    else if (_.isObject(t) && _.isIterable(t)) {
      let l = {},
        a,
        u
      for (const d of t) {
        if (!_.isArray(d))
          throw TypeError("Object iterator must return a key-value pair")
        l[(u = d[0])] = (a = l[u])
          ? _.isArray(a)
            ? [...a, d[1]]
            : [a, d[1]]
          : d[1]
      }
      s(l, n)
    } else t != null && i(n, t, r)
    return this
  }
  get(t, n) {
    if (((t = pi(t)), t)) {
      const r = _.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return yO(o)
        if (_.isFunction(n)) return n.call(this, o, r)
        if (_.isRegExp(n)) return n.exec(o)
        throw new TypeError("parser must be boolean|regexp|function")
      }
    }
  }
  has(t, n) {
    if (((t = pi(t)), t)) {
      const r = _.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || fc(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function i(s) {
      if (((s = pi(s)), s)) {
        const l = _.findKey(r, s)
        l && (!n || fc(r, r[l], l, n)) && (delete r[l], (o = !0))
      }
    }
    return _.isArray(t) ? t.forEach(i) : i(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    for (; r--; ) {
      const i = n[r]
      ;(!t || fc(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
    }
    return o
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      _.forEach(this, (o, i) => {
        const s = _.findKey(r, i)
        if (s) {
          ;(n[s] = bl(o)), delete n[i]
          return
        }
        const l = t ? bO(i) : String(i).trim()
        l !== i && delete n[i], (n[l] = bl(o)), (r[l] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      _.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(", ") : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
  }
  getSetCookie() {
    return this.get("set-cookie") || []
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders"
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((o) => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[dg] = this[dg] = { accessors: {} }).accessors,
      o = this.prototype
    function i(s) {
      const l = pi(s)
      r[l] || (SO(o, s), (r[l] = !0))
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this
  }
}
wu.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
])
_.reduceDescriptors(wu.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    },
  }
})
_.freezeMethods(wu)
const dn = wu
function pc(e, t) {
  const n = this || gp,
    r = t || n,
    o = dn.from(r.headers)
  let i = r.data
  return (
    _.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function P1(e) {
  return !!(e && e.__CANCEL__)
}
function qo(e, t, n) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, n),
    (this.name = "CanceledError")
}
_.inherits(qo, re, { __CANCEL__: !0 })
function $1(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new re(
          "Request failed with status code " + n.status,
          [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
function CO(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ""
}
function wO(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    i = 0,
    s
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        d = r[i]
      s || (s = u), (n[o] = a), (r[o] = u)
      let f = i,
        h = 0
      for (; f !== o; ) (h += n[f++]), (f = f % e)
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return
      const C = d && u - d
      return C ? Math.round((h * 1e3) / C) : void 0
    }
  )
}
function EO(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i
  const s = (u, d = Date.now()) => {
    ;(n = d), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, u)
  }
  return [
    (...u) => {
      const d = Date.now(),
        f = d - n
      f >= r
        ? s(u, d)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              ;(i = null), s(o)
            }, r - f)))
    },
    () => o && s(o),
  ]
}
const aa = (e, t, n = 3) => {
    let r = 0
    const o = wO(50, 250)
    return EO((i) => {
      const s = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        a = s - r,
        u = o(a),
        d = s <= l
      r = s
      const f = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && l && d ? (l - s) / u : void 0,
        event: i,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      }
      e(f)
    }, n)
  },
  fg = (e, t) => {
    const n = e != null
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]]
  },
  pg =
    (e) =>
    (...t) =>
      _.asap(() => e(...t)),
  RO = dt.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, dt.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(dt.origin),
        dt.navigator && /(msie|trident)/i.test(dt.navigator.userAgent)
      )
    : () => !0,
  kO = dt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + "=" + encodeURIComponent(t)]
          _.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            _.isString(r) && s.push("path=" + r),
            _.isString(o) && s.push("domain=" + o),
            i === !0 && s.push("secure"),
            (document.cookie = s.join("; "))
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          )
          return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5)
        },
      }
    : {
        write() {},
        read() {
          return null
        },
        remove() {},
      }
function PO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function $O(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function T1(e, t, n) {
  let r = !PO(t)
  return e && (r || n == !1) ? $O(e, t) : t
}
const hg = (e) => (e instanceof dn ? { ...e } : e)
function zr(e, t) {
  t = t || {}
  const n = {}
  function r(u, d, f, h) {
    return _.isPlainObject(u) && _.isPlainObject(d)
      ? _.merge.call({ caseless: h }, u, d)
      : _.isPlainObject(d)
      ? _.merge({}, d)
      : _.isArray(d)
      ? d.slice()
      : d
  }
  function o(u, d, f, h) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(u)) return r(void 0, u, f, h)
    } else return r(u, d, f, h)
  }
  function i(u, d) {
    if (!_.isUndefined(d)) return r(void 0, d)
  }
  function s(u, d) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(u)) return r(void 0, u)
    } else return r(void 0, d)
  }
  function l(u, d, f) {
    if (f in t) return r(u, d)
    if (f in e) return r(void 0, u)
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, d, f) => o(hg(u), hg(d), f, !0),
  }
  return (
    _.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = a[d] || o,
        h = f(e[d], t[d], d)
      ;(_.isUndefined(h) && f !== l) || (n[d] = h)
    }),
    n
  )
}
const _1 = (e) => {
    const t = zr({}, e)
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: l,
    } = t
    ;(t.headers = s = dn.from(s)),
      (t.url = E1(
        T1(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      l &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        )
    let a
    if (_.isFormData(n)) {
      if (dt.hasStandardBrowserEnv || dt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0)
      else if ((a = s.getContentType()) !== !1) {
        const [u, ...d] = a
          ? a
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : []
        s.setContentType([u || "multipart/form-data", ...d].join("; "))
      }
    }
    if (
      dt.hasStandardBrowserEnv &&
      (r && _.isFunction(r) && (r = r(t)), r || (r !== !1 && RO(t.url)))
    ) {
      const u = o && i && kO.read(i)
      u && s.set(o, u)
    }
    return t
  },
  TO = typeof XMLHttpRequest < "u",
  _O =
    TO &&
    function (e) {
      return new Promise(function (n, r) {
        const o = _1(e)
        let i = o.data
        const s = dn.from(o.headers).normalize()
        let { responseType: l, onUploadProgress: a, onDownloadProgress: u } = o,
          d,
          f,
          h,
          C,
          v
        function x() {
          C && C(),
            v && v(),
            o.cancelToken && o.cancelToken.unsubscribe(d),
            o.signal && o.signal.removeEventListener("abort", d)
        }
        let w = new XMLHttpRequest()
        w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout)
        function p() {
          if (!w) return
          const g = dn.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            k = {
              data:
                !l || l === "text" || l === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: g,
              config: e,
              request: w,
            }
          $1(
            function (E) {
              n(E), x()
            },
            function (E) {
              r(E), x()
            },
            k
          ),
            (w = null)
        }
        "onloadend" in w
          ? (w.onloadend = p)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p)
            }),
          (w.onabort = function () {
            w &&
              (r(new re("Request aborted", re.ECONNABORTED, e, w)), (w = null))
          }),
          (w.onerror = function () {
            r(new re("Network Error", re.ERR_NETWORK, e, w)), (w = null)
          }),
          (w.ontimeout = function () {
            let S = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded"
            const k = o.transitional || R1
            o.timeoutErrorMessage && (S = o.timeoutErrorMessage),
              r(
                new re(
                  S,
                  k.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null)
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in w &&
            _.forEach(s.toJSON(), function (S, k) {
              w.setRequestHeader(k, S)
            }),
          _.isUndefined(o.withCredentials) ||
            (w.withCredentials = !!o.withCredentials),
          l && l !== "json" && (w.responseType = o.responseType),
          u && (([h, v] = aa(u, !0)), w.addEventListener("progress", h)),
          a &&
            w.upload &&
            (([f, C] = aa(a)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", C)),
          (o.cancelToken || o.signal) &&
            ((d = (g) => {
              w &&
                (r(!g || g.type ? new qo(null, e, w) : g),
                w.abort(),
                (w = null))
            }),
            o.cancelToken && o.cancelToken.subscribe(d),
            o.signal &&
              (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)))
        const m = CO(o.url)
        if (m && dt.protocols.indexOf(m) === -1) {
          r(new re("Unsupported protocol " + m + ":", re.ERR_BAD_REQUEST, e))
          return
        }
        w.send(i || null)
      })
    },
  jO = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : [])
    if (t || n) {
      let r = new AbortController(),
        o
      const i = function (u) {
        if (!o) {
          ;(o = !0), l()
          const d = u instanceof Error ? u : this.reason
          r.abort(
            d instanceof re ? d : new qo(d instanceof Error ? d.message : d)
          )
        }
      }
      let s =
        t &&
        setTimeout(() => {
          ;(s = null), i(new re(`timeout ${t} of ms exceeded`, re.ETIMEDOUT))
        }, t)
      const l = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i)
          }),
          (e = null))
      }
      e.forEach((u) => u.addEventListener("abort", i))
      const { signal: a } = r
      return (a.unsubscribe = () => _.asap(l)), a
    }
  },
  IO = jO,
  OO = function* (e, t) {
    let n = e.byteLength
    if (!t || n < t) {
      yield e
      return
    }
    let r = 0,
      o
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o)
  },
  MO = async function* (e, t) {
    for await (const n of NO(e)) yield* OO(n, t)
  },
  NO = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e
      return
    }
    const t = e.getReader()
    try {
      for (;;) {
        const { done: n, value: r } = await t.read()
        if (n) break
        yield r
      }
    } finally {
      await t.cancel()
    }
  },
  mg = (e, t, n, r) => {
    const o = MO(e, t)
    let i = 0,
      s,
      l = (a) => {
        s || ((s = !0), r && r(a))
      }
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: d } = await o.next()
            if (u) {
              l(), a.close()
              return
            }
            let f = d.byteLength
            if (n) {
              let h = (i += f)
              n(h)
            }
            a.enqueue(new Uint8Array(d))
          } catch (u) {
            throw (l(u), u)
          }
        },
        cancel(a) {
          return l(a), o.return()
        },
      },
      { highWaterMark: 2 }
    )
  },
  Eu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  j1 = Eu && typeof ReadableStream == "function",
  LO =
    Eu &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  I1 = (e, ...t) => {
    try {
      return !!e(...t)
    } catch {
      return !1
    }
  },
  AO =
    j1 &&
    I1(() => {
      let e = !1
      const t = new Request(dt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half"
        },
      }).headers.has("Content-Type")
      return e && !t
    }),
  gg = 64 * 1024,
  jd = j1 && I1(() => _.isReadableStream(new Response("").body)),
  ua = { stream: jd && ((e) => e.body) }
Eu &&
  ((e) => {
    ;["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !ua[t] &&
        (ua[t] = _.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new re(
                `Response type '${t}' is not supported`,
                re.ERR_NOT_SUPPORT,
                r
              )
            })
    })
  })(new Response())
const zO = async (e) => {
    if (e == null) return 0
    if (_.isBlob(e)) return e.size
    if (_.isSpecCompliantForm(e))
      return (
        await new Request(dt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength
    if (_.isArrayBufferView(e) || _.isArrayBuffer(e)) return e.byteLength
    if ((_.isURLSearchParams(e) && (e = e + ""), _.isString(e)))
      return (await LO(e)).byteLength
  },
  FO = async (e, t) => {
    const n = _.toFiniteNumber(e.getContentLength())
    return n ?? zO(t)
  },
  BO =
    Eu &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: u,
        headers: d,
        withCredentials: f = "same-origin",
        fetchOptions: h,
      } = _1(e)
      u = u ? (u + "").toLowerCase() : "text"
      let C = IO([o, i && i.toAbortSignal()], s),
        v
      const x =
        C &&
        C.unsubscribe &&
        (() => {
          C.unsubscribe()
        })
      let w
      try {
        if (
          a &&
          AO &&
          n !== "get" &&
          n !== "head" &&
          (w = await FO(d, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R
          if (
            (_.isFormData(r) &&
              (R = k.headers.get("content-type")) &&
              d.setContentType(R),
            k.body)
          ) {
            const [E, P] = fg(w, aa(pg(a)))
            r = mg(k.body, gg, E, P)
          }
        }
        _.isString(f) || (f = f ? "include" : "omit")
        const p = "credentials" in Request.prototype
        v = new Request(t, {
          ...h,
          signal: C,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? f : void 0,
        })
        let m = await fetch(v, h)
        const g = jd && (u === "stream" || u === "response")
        if (jd && (l || (g && x))) {
          const k = {}
          ;["status", "statusText", "headers"].forEach((T) => {
            k[T] = m[T]
          })
          const R = _.toFiniteNumber(m.headers.get("content-length")),
            [E, P] = (l && fg(R, aa(pg(l), !0))) || []
          m = new Response(
            mg(m.body, gg, E, () => {
              P && P(), x && x()
            }),
            k
          )
        }
        u = u || "text"
        let S = await ua[_.findKey(ua, u) || "text"](m, e)
        return (
          !g && x && x(),
          await new Promise((k, R) => {
            $1(k, R, {
              data: S,
              headers: dn.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: v,
            })
          })
        )
      } catch (p) {
        throw (
          (x && x(),
          p && p.name === "TypeError" && /Load failed|fetch/i.test(p.message)
            ? Object.assign(new re("Network Error", re.ERR_NETWORK, e, v), {
                cause: p.cause || p,
              })
            : re.from(p, p && p.code, e, v))
        )
      }
    }),
  Id = { http: ZI, xhr: _O, fetch: BO }
_.forEach(Id, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t })
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t })
  }
})
const vg = (e) => `- ${e}`,
  DO = (e) => _.isFunction(e) || e === null || e === !1,
  O1 = {
    getAdapter: (e) => {
      e = _.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const o = {}
      for (let i = 0; i < t; i++) {
        n = e[i]
        let s
        if (
          ((r = n),
          !DO(n) && ((r = Id[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new re(`Unknown adapter '${s}'`)
        if (r) break
        o[s || "#" + i] = r
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        )
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(vg).join(`
`)
            : " " + vg(i[0])
          : "as no adapter specified"
        throw new re(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        )
      }
      return r
    },
    adapters: Id,
  }
function hc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new qo(null, e)
}
function yg(e) {
  return (
    hc(e),
    (e.headers = dn.from(e.headers)),
    (e.data = pc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    O1.getAdapter(e.adapter || gp.adapter)(e).then(
      function (r) {
        return (
          hc(e),
          (r.data = pc.call(e, e.transformResponse, r)),
          (r.headers = dn.from(r.headers)),
          r
        )
      },
      function (r) {
        return (
          P1(r) ||
            (hc(e),
            r &&
              r.response &&
              ((r.response.data = pc.call(e, e.transformResponse, r.response)),
              (r.response.headers = dn.from(r.response.headers)))),
          Promise.reject(r)
        )
      }
    )
  )
}
const M1 = "1.10.0",
  Ru = {}
;["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ru[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
  }
)
const xg = {}
Ru.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      M1 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    )
  }
  return (i, s, l) => {
    if (t === !1)
      throw new re(
        o(s, " has been removed" + (n ? " in " + n : "")),
        re.ERR_DEPRECATED
      )
    return (
      n &&
        !xg[s] &&
        ((xg[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, l) : !0
    )
  }
}
Ru.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0)
}
function UO(e, t, n) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i]
    if (s) {
      const l = e[i],
        a = l === void 0 || s(l, i, e)
      if (a !== !0)
        throw new re("option " + i + " must be " + a, re.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new re("Unknown option " + i, re.ERR_BAD_OPTION)
  }
}
const Sl = { assertOptions: UO, validators: Ru },
  vn = Sl.validators
class ca {
  constructor(t) {
    ;(this.defaults = t || {}),
      (this.interceptors = { request: new cg(), response: new cg() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (r) {
      if (r instanceof Error) {
        let o = {}
        Error.captureStackTrace ? Error.captureStackTrace(o) : (o = new Error())
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : ""
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i)
        } catch {}
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = zr(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: i } = n
    r !== void 0 &&
      Sl.assertOptions(
        r,
        {
          silentJSONParsing: vn.transitional(vn.boolean),
          forcedJSONParsing: vn.transitional(vn.boolean),
          clarifyTimeoutError: vn.transitional(vn.boolean),
        },
        !1
      ),
      o != null &&
        (_.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Sl.assertOptions(
              o,
              { encode: vn.function, serialize: vn.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Sl.assertOptions(
        n,
        {
          baseUrl: vn.spelling("baseURL"),
          withXsrfToken: vn.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase())
    let s = i && _.merge(i.common, i[n.method])
    i &&
      _.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete i[v]
        }
      ),
      (n.headers = dn.concat(s, i))
    const l = []
    let a = !0
    this.interceptors.request.forEach(function (x) {
      ;(typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((a = a && x.synchronous), l.unshift(x.fulfilled, x.rejected))
    })
    const u = []
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected)
    })
    let d,
      f = 0,
      h
    if (!a) {
      const v = [yg.bind(this), void 0]
      for (
        v.unshift.apply(v, l),
          v.push.apply(v, u),
          h = v.length,
          d = Promise.resolve(n);
        f < h;

      )
        d = d.then(v[f++], v[f++])
      return d
    }
    h = l.length
    let C = n
    for (f = 0; f < h; ) {
      const v = l[f++],
        x = l[f++]
      try {
        C = v(C)
      } catch (w) {
        x.call(this, w)
        break
      }
    }
    try {
      d = yg.call(this, C)
    } catch (v) {
      return Promise.reject(v)
    }
    for (f = 0, h = u.length; f < h; ) d = d.then(u[f++], u[f++])
    return d
  }
  getUri(t) {
    t = zr(this.defaults, t)
    const n = T1(t.baseURL, t.url, t.allowAbsoluteUrls)
    return E1(n, t.params, t.paramsSerializer)
  }
}
_.forEach(["delete", "get", "head", "options"], function (t) {
  ca.prototype[t] = function (n, r) {
    return this.request(
      zr(r || {}, { method: t, url: n, data: (r || {}).data })
    )
  }
})
_.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        zr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      )
    }
  }
  ;(ca.prototype[t] = n()), (ca.prototype[t + "Form"] = n(!0))
})
const Cl = ca
class vp {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.")
    let n
    this.promise = new Promise(function (i) {
      n = i
    })
    const r = this
    this.promise.then((o) => {
      if (!r._listeners) return
      let i = r._listeners.length
      for (; i-- > 0; ) r._listeners[i](o)
      r._listeners = null
    }),
      (this.promise.then = (o) => {
        let i
        const s = new Promise((l) => {
          r.subscribe(l), (i = l)
        }).then(o)
        return (
          (s.cancel = function () {
            r.unsubscribe(i)
          }),
          s
        )
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new qo(i, s, l)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r)
      }
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    )
  }
  static source() {
    let t
    return {
      token: new vp(function (o) {
        t = o
      }),
      cancel: t,
    }
  }
}
const WO = vp
function HO(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function VO(e) {
  return _.isObject(e) && e.isAxiosError === !0
}
const Od = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(Od).forEach(([e, t]) => {
  Od[t] = e
})
const KO = Od
function N1(e) {
  const t = new Cl(e),
    n = f1(Cl.prototype.request, t)
  return (
    _.extend(n, Cl.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return N1(zr(e, o))
    }),
    n
  )
}
const Ge = N1(gp)
Ge.Axios = Cl
Ge.CanceledError = qo
Ge.CancelToken = WO
Ge.isCancel = P1
Ge.VERSION = M1
Ge.toFormData = Cu
Ge.AxiosError = re
Ge.Cancel = Ge.CanceledError
Ge.all = function (t) {
  return Promise.all(t)
}
Ge.spread = HO
Ge.isAxiosError = VO
Ge.mergeConfig = zr
Ge.AxiosHeaders = dn
Ge.formToJSON = (e) => k1(_.isHTMLForm(e) ? new FormData(e) : e)
Ge.getAdapter = O1.getAdapter
Ge.HttpStatusCode = KO
Ge.default = Ge
const L1 = Ge,
  GO = "http://127.0.0.1:5000/api",
  On = L1.create({
    baseURL: GO,
    timeout: 1e4,
    headers: { "Content-Type": "application/json" },
  })
On.interceptors.request.use(
  (e) => {
    var t
    return (
      console.log(
        `API Request: ${(t = e.method) == null ? void 0 : t.toUpperCase()} ${
          e.url
        }`
      ),
      e
    )
  },
  (e) => (console.error("API Request Error:", e), Promise.reject(e))
)
On.interceptors.response.use(
  (e) => (console.log(`API Response: ${e.status} ${e.config.url}`), e),
  (e) => {
    var t
    return (
      console.error(
        "API Response Error:",
        ((t = e.response) == null ? void 0 : t.data) || e.message
      ),
      Promise.reject(e)
    )
  }
)
const Oi = {
    getIngredients: () => On.get("/market/ingredients"),
    getCities: () => On.get("/market/cities"),
    getMarketPrices: (e) => On.get("/market/prices", { params: e }),
    getPriceHistory: (e) => On.get("/market/price-history", { params: e }),
  },
  A1 = {
    getTopOpportunities: (e) =>
      On.get("/arbitrage/top", { params: { limit: e } }),
    getFilteredOpportunities: (e) =>
      On.get("/arbitrage/filtered", { params: e }),
    getFiltersInfo: () => On.get("/arbitrage/filters-info"),
  },
  qO = () => {
    const [e, t] = y.useState(null),
      [n, r] = y.useState(!0),
      [o, i] = y.useState(null)
    return (
      y.useEffect(() => {
        ;(async () => {
          try {
            r(!0), i(null)
            const a = (await A1.getTopOpportunities(100)).data.opportunities,
              u = a.reduce((f, h) => f + h.profit, 0),
              d =
                a.length > 0
                  ? a.reduce((f, h) => f + h.profit_percentage, 0) / a.length
                  : 0
            t({
              totalOpportunities: a.length,
              totalProfit: u,
              avgProfitPercentage: d,
              lastUpdate: new Date().toLocaleString("pt-BR"),
            })
          } catch (l) {
            i("Erro ao carregar dados do dashboard"),
              console.error("Dashboard error:", l)
          } finally {
            r(!1)
          }
        })()
      }, []),
      n
        ? c.jsx(le, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            children: c.jsx(gu, {}),
          })
        : o
        ? c.jsx(No, { severity: "error", sx: { mb: 2 }, children: o })
        : c.jsxs(le, {
            children: [
              c.jsx(D, {
                variant: "h4",
                gutterBottom: !0,
                children: "Dashboard",
              }),
              c.jsx(D, {
                variant: "body1",
                color: "text.secondary",
                sx: { mb: 3 },
                children:
                  "Visão geral das oportunidades de arbitragem e dados de mercado",
              }),
              c.jsxs(de, {
                container: !0,
                spacing: 3,
                children: [
                  c.jsx(de, {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    md: 3,
                    children: c.jsx(Js, {
                      children: c.jsxs(Zs, {
                        children: [
                          c.jsxs(le, {
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                            children: [
                              c.jsx(Pd, { color: "primary", sx: { mr: 1 } }),
                              c.jsx(D, {
                                variant: "h6",
                                children: "Oportunidades",
                              }),
                            ],
                          }),
                          c.jsx(D, {
                            variant: "h4",
                            color: "primary",
                            children:
                              (e == null ? void 0 : e.totalOpportunities) || 0,
                          }),
                          c.jsx(D, {
                            variant: "body2",
                            color: "text.secondary",
                            children: "Oportunidades ativas",
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsx(de, {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    md: 3,
                    children: c.jsx(Js, {
                      children: c.jsxs(Zs, {
                        children: [
                          c.jsxs(le, {
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                            children: [
                              c.jsx(sI, { color: "success", sx: { mr: 1 } }),
                              c.jsx(D, {
                                variant: "h6",
                                children: "Lucro Total",
                              }),
                            ],
                          }),
                          c.jsx(D, {
                            variant: "h4",
                            color: "success.main",
                            children:
                              e != null && e.totalProfit
                                ? `${e.totalProfit.toLocaleString(
                                    "pt-BR"
                                  )} prata`
                                : "0 prata",
                          }),
                          c.jsx(D, {
                            variant: "body2",
                            color: "text.secondary",
                            children: "Soma de todos os lucros",
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsx(de, {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    md: 3,
                    children: c.jsx(Js, {
                      children: c.jsxs(Zs, {
                        children: [
                          c.jsx(le, {
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                            children: c.jsx(D, {
                              variant: "h6",
                              children: "Lucro Médio",
                            }),
                          }),
                          c.jsx(D, {
                            variant: "h4",
                            color: "info.main",
                            children:
                              e != null && e.avgProfitPercentage
                                ? `${e.avgProfitPercentage.toFixed(1)}%`
                                : "0%",
                          }),
                          c.jsx(D, {
                            variant: "body2",
                            color: "text.secondary",
                            children: "Percentual médio de lucro",
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsx(de, {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    md: 3,
                    children: c.jsx(Js, {
                      children: c.jsxs(Zs, {
                        children: [
                          c.jsx(le, {
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                            children: c.jsx(D, {
                              variant: "h6",
                              children: "Atualização",
                            }),
                          }),
                          c.jsx(D, {
                            variant: "h6",
                            color: "warning.main",
                            children:
                              e != null && e.lastUpdate
                                ? new Date(e.lastUpdate).toLocaleTimeString(
                                    "pt-BR"
                                  )
                                : "N/A",
                          }),
                          c.jsx(D, {
                            variant: "body2",
                            color: "text.secondary",
                            children: "Última atualização",
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsx(de, {
                    item: !0,
                    xs: 12,
                    children: c.jsxs(Fe, {
                      sx: { p: 3 },
                      children: [
                        c.jsx(D, {
                          variant: "h6",
                          gutterBottom: !0,
                          children: "Status do Sistema",
                        }),
                        c.jsxs(de, {
                          container: !0,
                          spacing: 2,
                          children: [
                            c.jsx(de, {
                              item: !0,
                              xs: 12,
                              md: 4,
                              children: c.jsxs(le, {
                                display: "flex",
                                alignItems: "center",
                                children: [
                                  c.jsx(le, {
                                    sx: {
                                      width: 12,
                                      height: 12,
                                      borderRadius: "50%",
                                      bgcolor: "success.main",
                                      mr: 1,
                                    },
                                  }),
                                  c.jsx(D, {
                                    variant: "body2",
                                    children: "Backend Conectado",
                                  }),
                                ],
                              }),
                            }),
                            c.jsx(de, {
                              item: !0,
                              xs: 12,
                              md: 4,
                              children: c.jsxs(le, {
                                display: "flex",
                                alignItems: "center",
                                children: [
                                  c.jsx(le, {
                                    sx: {
                                      width: 12,
                                      height: 12,
                                      borderRadius: "50%",
                                      bgcolor: "success.main",
                                      mr: 1,
                                    },
                                  }),
                                  c.jsx(D, {
                                    variant: "body2",
                                    children: "PostgreSQL Ativo",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
    )
  },
  z1 = "/assets/coin-1becafff.png",
  QO = () => {
    const [e, t] = y.useState([]),
      [n, r] = y.useState(!0),
      [o, i] = y.useState(null)
    y.useEffect(() => {
      s()
      const p = setInterval(s, 6e4)
      return () => clearInterval(p)
    }, [])
    const s = async () => {
        try {
          r(!0), i(null)
          const p = await A1.getTopOpportunities(50),
            m = p.data.opportunities || p.data || []
          t(m)
        } catch (p) {
          i("Erro ao carregar oportunidades de arbitragem"),
            console.error("Arbitrage error:", p)
        } finally {
          r(!1)
        }
      },
      l = (p) => {
        if (p == null) return "N/A"
        const m = typeof p == "string" ? parseFloat(p) : p
        return isNaN(m) ? "N/A" : m.toLocaleString("pt-BR")
      },
      a = (p) => {
        if (p == null) return "N/A"
        const m = typeof p == "string" ? parseFloat(p) : p
        return isNaN(m) ? "N/A" : `${m.toFixed(2)}%`
      },
      u = e.filter((p) => {
        const m = p.quantity_multiplier || 1,
          g = 0.04,
          S = p.buy_price
        return p.sell_price * m * (1 - g) - S > 0
      }),
      d = u.reduce((p, m) => {
        const g = m.quantity_multiplier || 1,
          S = 0.04,
          k = m.buy_price,
          P = m.sell_price * g * (1 - S) - k
        return p + (P > 0 ? P : 0)
      }, 0),
      f = {
        PANTHER: "Shadow Claws",
        ENT: "Sylvian Root",
        DIREBEAR: "Spirit Paws",
        WEREWOLF: "Werewolf Fangs",
        IMP: "Imp's Horn",
        ELEMENTAL: "Runestone Tooth",
        EAGLE: "Dawnfeather",
      }
    function h(p) {
      return p.split("_")[3] || p
    }
    function C(p) {
      const m = h(p)
      return f[m] || p
    }
    function v(p) {
      return `https://render.albiononline.com/v1/item/${p}.png`
    }
    const x = c.jsx("img", {
        src: z1,
        alt: "prata",
        width: 18,
        height: 18,
        style: { verticalAlign: "middle", marginLeft: 4 },
      }),
      w = {
        Caerleon: "#e74c3c",
        Thetford: "#8e44ad",
        "Fort Sterling": "#ecf0f1",
        Lymhurst: "#f1c40f",
        Bridgewatch: "#f39c12",
        Martlock: "#3498db",
      }
    return n
      ? c.jsx(le, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          children: c.jsx(gu, {}),
        })
      : c.jsxs(le, {
          children: [
            c.jsx(D, {
              variant: "h4",
              gutterBottom: !0,
              children: "Oportunidades de Arbitragem",
            }),
            c.jsx(D, {
              variant: "body1",
              color: "text.secondary",
              sx: { mb: 3 },
              children:
                "Encontre as melhores oportunidades de compra e venda entre cidades",
            }),
            o && c.jsx(No, { severity: "error", sx: { mb: 2 }, children: o }),
            c.jsxs(de, {
              container: !0,
              spacing: 2,
              sx: { mb: 3 },
              children: [
                c.jsx(de, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: c.jsx(Fe, {
                    children: c.jsxs(le, {
                      p: 2,
                      children: [
                        c.jsx(D, {
                          variant: "h5",
                          color: "primary",
                          fontWeight: "bold",
                          children: u.length,
                        }),
                        c.jsx(D, {
                          variant: "body2",
                          color: "text.secondary",
                          children: "Oportunidades Encontradas",
                        }),
                      ],
                    }),
                  }),
                }),
                c.jsx(de, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: c.jsx(Fe, {
                    children: c.jsxs(le, {
                      p: 2,
                      children: [
                        c.jsxs(D, {
                          variant: "h5",
                          color: "success.main",
                          fontWeight: "bold",
                          children: [l(Math.round(d)), " ", x],
                        }),
                        c.jsx(D, {
                          variant: "body2",
                          color: "text.secondary",
                          children: "Lucro Total",
                        }),
                      ],
                    }),
                  }),
                }),
                c.jsx(de, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: c.jsx(Fe, {
                    children: c.jsxs(le, {
                      p: 2,
                      children: [
                        c.jsx(D, {
                          variant: "h6",
                          color: "info.main",
                          children:
                            e.length > 0
                              ? a(
                                  e.reduce(
                                    (p, m) => p + m.profit_percentage,
                                    0
                                  ) / e.length
                                )
                              : "0%",
                        }),
                        c.jsx(D, {
                          variant: "body2",
                          color: "text.secondary",
                          children: "Lucro Médio",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            c.jsx(Fe, {
              children: c.jsx(ls, {
                children: c.jsxs(is, {
                  children: [
                    c.jsx(as, {
                      children: c.jsxs(Kt, {
                        children: [
                          c.jsx(W, { children: "Item" }),
                          c.jsx(W, { children: "Comprar em" }),
                          c.jsx(W, { children: "Vender em" }),
                          c.jsx(W, {
                            align: "right",
                            children: "Preço Compra",
                          }),
                          c.jsx(W, { align: "right", children: "Preço Venda" }),
                          c.jsx(W, { align: "right", children: "Quantidade" }),
                          c.jsx(W, { align: "right", children: "Lucro" }),
                          c.jsx(W, { align: "right", children: "% Lucro" }),
                          c.jsx(W, { children: "Atualizado" }),
                        ],
                      }),
                    }),
                    c.jsx(ss, {
                      children:
                        u.length === 0
                          ? c.jsx(Kt, {
                              children: c.jsx(W, {
                                colSpan: 9,
                                align: "center",
                                children: c.jsx(D, {
                                  variant: "body2",
                                  color: "text.secondary",
                                  children: "Nenhuma oportunidade encontrada",
                                }),
                              }),
                            })
                          : u.map((p) => {
                              const m = p.quantity_multiplier || 1,
                                g = 0.04,
                                S = p.buy_price,
                                E = p.sell_price * m * (1 - g) - S,
                                P = S > 0 ? (E / S) * 100 : 0,
                                T = p.item_name
                              let j = T
                              if (m === 2) {
                                const I = T.split("_")[0],
                                  N = h(T)
                                I === "T5"
                                  ? (j = `T3_ALCHEMY_RARE_${N}`)
                                  : I === "T7" && (j = `T5_ALCHEMY_RARE_${N}`)
                              } else m === 4 && (j = `T3_ALCHEMY_RARE_${h(T)}`)
                              return c.jsxs(
                                Kt,
                                {
                                  hover: !0,
                                  children: [
                                    c.jsx(W, {
                                      children: c.jsxs(le, {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 1,
                                        children: [
                                          c.jsx(D, {
                                            variant: "body2",
                                            fontWeight: "bold",
                                            align: "center",
                                            children: C(T),
                                          }),
                                          c.jsxs(le, {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            children: [
                                              c.jsx("img", {
                                                src: v(T),
                                                alt: T,
                                                width: 48,
                                                height: 48,
                                                style: {
                                                  borderRadius: 8,
                                                  border: "2px solid #888",
                                                },
                                              }),
                                              c.jsx("span", {
                                                style: {
                                                  color: "#888",
                                                  fontWeight: 700,
                                                  fontSize: 24,
                                                },
                                                children: "→",
                                              }),
                                              c.jsx("img", {
                                                src: v(j),
                                                alt: j,
                                                width: 48,
                                                height: 48,
                                                style: {
                                                  borderRadius: 8,
                                                  border: "2px solid #888",
                                                },
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    c.jsx(W, {
                                      children: c.jsx(_i, {
                                        label: p.buy_city,
                                        size: "small",
                                        variant: "outlined",
                                        sx: {
                                          color: w[p.buy_city] || "inherit",
                                          borderColor:
                                            w[p.buy_city] || "inherit",
                                          fontWeight: "bold",
                                          background: "transparent",
                                        },
                                      }),
                                    }),
                                    c.jsx(W, {
                                      children: c.jsx(_i, {
                                        label: p.sell_city,
                                        size: "small",
                                        variant: "outlined",
                                        sx: {
                                          color: w[p.sell_city] || "inherit",
                                          borderColor:
                                            w[p.sell_city] || "inherit",
                                          fontWeight: "bold",
                                          background: "transparent",
                                        },
                                      }),
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      children: c.jsxs(D, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [l(p.buy_price), " ", x],
                                      }),
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      children: c.jsxs(D, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [l(p.sell_price), " ", x],
                                      }),
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      children: c.jsxs(D, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [m, "x"],
                                      }),
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      children: c.jsxs(D, {
                                        variant: "body2",
                                        color:
                                          E >= 0
                                            ? "success.main"
                                            : "error.main",
                                        fontWeight: "medium",
                                        children: [l(Math.round(E)), " ", x],
                                      }),
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      children: c.jsxs(D, {
                                        variant: "body2",
                                        color:
                                          E >= 0
                                            ? "success.main"
                                            : "error.main",
                                        fontWeight: "medium",
                                        children: [P.toFixed(2), "%"],
                                      }),
                                    }),
                                    c.jsx(W, {
                                      children: c.jsx(D, {
                                        variant: "caption",
                                        color: "text.secondary",
                                        children: new Date(
                                          p.updated_at
                                        ).toLocaleString("pt-BR"),
                                      }),
                                    }),
                                  ],
                                },
                                p.id
                              )
                            }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        })
  },
  XO = () => {
    const [e, t] = y.useState([]),
      [n, r] = y.useState([]),
      [o, i] = y.useState([]),
      [s, l] = y.useState(!0),
      [a, u] = y.useState(null)
    y.useEffect(() => {
      d()
    }, [])
    const d = async () => {
        try {
          l(!0), u(null)
          const [h, C, v] = await Promise.all([
            Oi.getIngredients(),
            Oi.getCities(),
            Oi.getMarketPrices(),
          ])
          t(h.data), r(C.data), i(v.data)
        } catch (h) {
          u("Erro ao carregar dados de mercado"),
            console.error("Market error:", h)
        } finally {
          l(!1)
        }
      },
      f = (h) => h.toLocaleString("pt-BR")
    return s
      ? c.jsx(le, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          children: c.jsx(gu, {}),
        })
      : c.jsxs(le, {
          children: [
            c.jsx(D, {
              variant: "h4",
              gutterBottom: !0,
              children: "Dados de Mercado",
            }),
            c.jsx(D, {
              variant: "body1",
              color: "text.secondary",
              sx: { mb: 3 },
              children:
                "Informações sobre ingredientes, cidades e preços de mercado",
            }),
            a && c.jsx(No, { severity: "error", sx: { mb: 2 }, children: a }),
            c.jsxs(de, {
              container: !0,
              spacing: 3,
              sx: { mb: 3 },
              children: [
                c.jsx(de, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: c.jsxs(Fe, {
                    children: [
                      c.jsx(le, {
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        children: c.jsx(D, {
                          variant: "h6",
                          children: "Ingredientes",
                        }),
                      }),
                      c.jsx(D, {
                        variant: "h4",
                        color: "primary",
                        children: e.length,
                      }),
                      c.jsx(D, {
                        variant: "body2",
                        color: "text.secondary",
                        children: "Total de ingredientes",
                      }),
                    ],
                  }),
                }),
                c.jsx(de, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: c.jsxs(Fe, {
                    children: [
                      c.jsx(le, {
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        children: c.jsx(D, {
                          variant: "h6",
                          children: "Cidades",
                        }),
                      }),
                      c.jsx(D, {
                        variant: "h4",
                        color: "secondary",
                        children: n.length,
                      }),
                      c.jsx(D, {
                        variant: "body2",
                        color: "text.secondary",
                        children: "Cidades disponíveis",
                      }),
                    ],
                  }),
                }),
                c.jsx(de, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: c.jsxs(Fe, {
                    children: [
                      c.jsx(le, {
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        children: c.jsx(D, {
                          variant: "h6",
                          children: "Preços",
                        }),
                      }),
                      c.jsx(D, {
                        variant: "h4",
                        color: "info.main",
                        children: o.length,
                      }),
                      c.jsx(D, {
                        variant: "body2",
                        color: "text.secondary",
                        children: "Preços registrados",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsxs(Fe, {
              sx: { p: 3, mb: 3 },
              children: [
                c.jsx(D, {
                  variant: "h6",
                  gutterBottom: !0,
                  children: "Ingredientes de Alquimia",
                }),
                c.jsx(ls, {
                  children: c.jsxs(is, {
                    children: [
                      c.jsx(as, {
                        children: c.jsxs(Kt, {
                          children: [
                            c.jsx(W, { children: "Nome" }),
                            c.jsx(W, { children: "Item Type ID" }),
                            c.jsx(W, { children: "Tier" }),
                            c.jsx(W, { children: "Enchantment" }),
                          ],
                        }),
                      }),
                      c.jsx(ss, {
                        children: e.map((h) =>
                          c.jsxs(
                            Kt,
                            {
                              hover: !0,
                              children: [
                                c.jsx(W, {
                                  children: c.jsx(D, {
                                    variant: "body2",
                                    fontWeight: "medium",
                                    children: h.name,
                                  }),
                                }),
                                c.jsx(W, {
                                  children: c.jsx(D, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: h.item_type_id,
                                  }),
                                }),
                                c.jsx(W, {
                                  children: c.jsx(D, {
                                    variant: "body2",
                                    children: `T${h.tier}`,
                                  }),
                                }),
                                c.jsx(W, {
                                  children: c.jsx(D, {
                                    variant: "body2",
                                    children: `+${h.enchantment}`,
                                  }),
                                }),
                              ],
                            },
                            h.id
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsxs(Fe, {
              sx: { p: 3, mb: 3 },
              children: [
                c.jsx(D, {
                  variant: "h6",
                  gutterBottom: !0,
                  children: "Cidades Disponíveis",
                }),
                c.jsx(de, {
                  container: !0,
                  spacing: 2,
                  children: n.map((h) =>
                    c.jsx(
                      de,
                      {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        md: 4,
                        children: c.jsxs(Fe, {
                          variant: "outlined",
                          children: [
                            c.jsx(le, {
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                              children: c.jsx(D, {
                                variant: "h6",
                                gutterBottom: !0,
                                children: h.name,
                              }),
                            }),
                            c.jsxs(D, {
                              variant: "body2",
                              color: "text.secondary",
                              children: ["Código: ", h.code],
                            }),
                          ],
                        }),
                      },
                      h.id
                    )
                  ),
                }),
              ],
            }),
            c.jsxs(Fe, {
              sx: { p: 3 },
              children: [
                c.jsx(D, {
                  variant: "h6",
                  gutterBottom: !0,
                  children: "Preços de Mercado",
                }),
                c.jsx(ls, {
                  children: c.jsxs(is, {
                    children: [
                      c.jsx(as, {
                        children: c.jsxs(Kt, {
                          children: [
                            c.jsx(W, { children: "Item Type ID" }),
                            c.jsx(W, { children: "Cidade" }),
                            c.jsx(W, { children: "Qualidade" }),
                            c.jsx(W, {
                              align: "right",
                              children: "Preço Mínimo Venda",
                            }),
                            c.jsx(W, {
                              align: "right",
                              children: "Preço Máximo Venda",
                            }),
                            c.jsx(W, {
                              align: "right",
                              children: "Preço Máximo Compra",
                            }),
                            c.jsx(W, { children: "Atualizado" }),
                          ],
                        }),
                      }),
                      c.jsx(ss, {
                        children:
                          o.length === 0
                            ? c.jsx(Kt, {
                                children: c.jsx(W, {
                                  colSpan: 7,
                                  align: "center",
                                  children: c.jsx(D, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children:
                                      "Nenhum preço de mercado disponível",
                                  }),
                                }),
                              })
                            : o.map((h) => {
                                var C
                                return c.jsxs(
                                  Kt,
                                  {
                                    hover: !0,
                                    children: [
                                      c.jsx(W, {
                                        children: c.jsx(D, {
                                          variant: "body2",
                                          fontWeight: "medium",
                                          children: h.item_type_id,
                                        }),
                                      }),
                                      c.jsx(W, {
                                        children: c.jsx(D, {
                                          variant: "body2",
                                          children:
                                            ((C = n.find(
                                              (v) => v.id === h.city_id
                                            )) == null
                                              ? void 0
                                              : C.name) || "N/A",
                                        }),
                                      }),
                                      c.jsx(W, {
                                        children: c.jsx(D, {
                                          variant: "body2",
                                          children: `Q${h.quality}`,
                                        }),
                                      }),
                                      c.jsx(W, {
                                        align: "right",
                                        children: c.jsxs(D, {
                                          variant: "body2",
                                          color: "text.secondary",
                                          children: [
                                            f(h.sell_price_min),
                                            " prata",
                                          ],
                                        }),
                                      }),
                                      c.jsx(W, {
                                        align: "right",
                                        children: c.jsxs(D, {
                                          variant: "body2",
                                          color: "text.secondary",
                                          children: [
                                            f(h.sell_price_max),
                                            " prata",
                                          ],
                                        }),
                                      }),
                                      c.jsx(W, {
                                        align: "right",
                                        children: c.jsxs(D, {
                                          variant: "body2",
                                          color: "text.secondary",
                                          children: [
                                            f(h.buy_price_max),
                                            " prata",
                                          ],
                                        }),
                                      }),
                                      c.jsx(W, {
                                        children: c.jsx(D, {
                                          variant: "caption",
                                          color: "text.secondary",
                                          children: new Date(
                                            h.updated_at
                                          ).toLocaleString("pt-BR"),
                                        }),
                                      }),
                                    ],
                                  },
                                  h.id
                                )
                              }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
  },
  YO = () => {
    const [e] = y.useState({
        backend: "connected",
        database: "connected",
        nats: "disconnected",
      }),
      t = (r) => {
        switch (r) {
          case "connected":
            return c.jsx(lI, { color: "success" })
          case "disconnected":
            return c.jsx(fI, { color: "warning" })
          case "error":
            return c.jsx(cI, { color: "error" })
          default:
            return c.jsx(ig, { color: "info" })
        }
      },
      n = (r) => {
        switch (r) {
          case "connected":
            return "success"
          case "disconnected":
            return "warning"
          case "error":
            return "error"
          default:
            return "info"
        }
      }
    return c.jsxs(le, {
      children: [
        c.jsx(D, {
          variant: "h4",
          gutterBottom: !0,
          children: "Configurações",
        }),
        c.jsx(D, {
          variant: "body1",
          color: "text.secondary",
          sx: { mb: 3 },
          children: "Status do sistema e configurações da aplicação",
        }),
        c.jsxs(de, {
          container: !0,
          spacing: 3,
          children: [
            c.jsx(de, {
              item: !0,
              xs: 12,
              md: 6,
              children: c.jsxs(Fe, {
                sx: { p: 3 },
                children: [
                  c.jsxs(le, {
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    children: [
                      c.jsx(d1, { sx: { mr: 1 } }),
                      c.jsx(D, {
                        variant: "h6",
                        children: "Status do Sistema",
                      }),
                    ],
                  }),
                  c.jsxs(kd, {
                    children: [
                      c.jsxs(yr, {
                        children: [
                          c.jsx(xr, { children: t(e.backend) }),
                          c.jsx(br, {
                            primary: "Backend API",
                            secondary: "Servidor Node.js + Express",
                          }),
                          c.jsx(_i, {
                            label: e.backend,
                            color: n(e.backend),
                            size: "small",
                          }),
                        ],
                      }),
                      c.jsx(ai, {}),
                      c.jsxs(yr, {
                        children: [
                          c.jsx(xr, { children: t(e.database) }),
                          c.jsx(br, {
                            primary: "PostgreSQL",
                            secondary: "Banco de dados principal",
                          }),
                          c.jsx(_i, {
                            label: e.database,
                            color: n(e.database),
                            size: "small",
                          }),
                        ],
                      }),
                      c.jsx(ai, {}),
                      c.jsxs(yr, {
                        children: [
                          c.jsx(xr, { children: t(e.nats) }),
                          c.jsx(br, {
                            primary: "NATS Messaging",
                            secondary: "Dados em tempo real do Albion",
                          }),
                          c.jsx(_i, {
                            label: e.nats,
                            color: n(e.nats),
                            size: "small",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(de, {
              item: !0,
              xs: 12,
              md: 6,
              children: c.jsxs(Fe, {
                sx: { p: 3 },
                children: [
                  c.jsx(D, {
                    variant: "h6",
                    gutterBottom: !0,
                    children: "Informações da Aplicação",
                  }),
                  c.jsxs(kd, {
                    children: [
                      c.jsxs(yr, {
                        children: [
                          c.jsx(xr, { children: c.jsx(ig, { color: "info" }) }),
                          c.jsx(br, { primary: "Versão", secondary: "1.0.0" }),
                        ],
                      }),
                      c.jsx(ai, {}),
                      c.jsxs(yr, {
                        children: [
                          c.jsx(xr, { children: c.jsx(aI, { color: "info" }) }),
                          c.jsx(br, {
                            primary: "Ambiente",
                            secondary: "Desenvolvimento",
                          }),
                        ],
                      }),
                      c.jsx(ai, {}),
                      c.jsxs(yr, {
                        children: [
                          c.jsx(xr, { children: c.jsx(sg, { color: "info" }) }),
                          c.jsx(br, {
                            primary: "Backend URL",
                            secondary: "http://localhost:5000",
                          }),
                        ],
                      }),
                      c.jsx(ai, {}),
                      c.jsxs(yr, {
                        children: [
                          c.jsx(xr, { children: c.jsx(sg, { color: "info" }) }),
                          c.jsx(br, {
                            primary: "Frontend URL",
                            secondary: "http://localhost:3000",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(de, {
              item: !0,
              xs: 12,
              children: c.jsxs(Fe, {
                sx: { p: 3 },
                children: [
                  c.jsx(D, {
                    variant: "h6",
                    gutterBottom: !0,
                    children: "Configurações de Desenvolvimento",
                  }),
                  c.jsx(No, {
                    severity: "info",
                    sx: { mb: 2 },
                    children: c.jsxs(D, {
                      variant: "body2",
                      children: [
                        c.jsx("strong", { children: "Backend:" }),
                        " Node.js + TypeScript + Express",
                        c.jsx("br", {}),
                        c.jsx("strong", { children: "Frontend:" }),
                        " React + TypeScript + Vite + Material-UI",
                        c.jsx("br", {}),
                        c.jsx("strong", { children: "Database:" }),
                        " PostgreSQL + Redis",
                        c.jsx("br", {}),
                        c.jsx("strong", { children: "Real-time:" }),
                        " Socket.io + NATS",
                      ],
                    }),
                  }),
                  c.jsxs(de, {
                    container: !0,
                    spacing: 2,
                    children: [
                      c.jsxs(de, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: [
                          c.jsx(D, {
                            variant: "subtitle2",
                            gutterBottom: !0,
                            children: "Variáveis de Ambiente (.env)",
                          }),
                          c.jsx(le, {
                            component: "pre",
                            sx: {
                              bgcolor: "grey.900",
                              p: 2,
                              borderRadius: 1,
                              fontSize: "0.875rem",
                              overflow: "auto",
                            },
                            children: `# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=albion_arbitrage
DB_USER=postgres
DB_PASSWORD=sua_senha

# NATS
NATS_SERVERS=nats://localhost:4222

# Server
PORT=5000
FRONTEND_URL=http://localhost:3000`,
                          }),
                        ],
                      }),
                      c.jsxs(de, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: [
                          c.jsx(D, {
                            variant: "subtitle2",
                            gutterBottom: !0,
                            children: "Scripts Disponíveis",
                          }),
                          c.jsx(le, {
                            component: "pre",
                            sx: {
                              bgcolor: "grey.900",
                              p: 2,
                              borderRadius: 1,
                              fontSize: "0.875rem",
                              overflow: "auto",
                            },
                            children: `# Backend
npm run dev          # Desenvolvimento
npm run build        # Build
npm run start        # Produção

# Frontend
npm run frontend:dev    # Desenvolvimento
npm run frontend:build  # Build

# Full Stack
npm run dev:full        # Backend + Frontend`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  }
var yp = {},
  mc = {}
const JO = Bn(ak)
var bg
function xp() {
  return (
    bg ||
      ((bg = 1),
      (function (e) {
        "use client"
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon
            },
          })
        var t = JO
      })(mc)),
    mc
  )
}
var ZO = Rs
Object.defineProperty(yp, "__esModule", { value: !0 })
var Md = (yp.default = void 0),
  eM = ZO(xp()),
  tM = c
Md = yp.default = (0, eM.default)(
  (0, tM.jsx)("path", {
    d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  }),
  "ArrowForward"
)
var bp = {},
  nM = Rs
Object.defineProperty(bp, "__esModule", { value: !0 })
var F1 = (bp.default = void 0),
  rM = nM(xp()),
  oM = c
F1 = bp.default = (0, rM.default)(
  (0, oM.jsx)("path", {
    d: "M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z",
  }),
  "SwapHoriz"
)
var Sp = {},
  iM = Rs
Object.defineProperty(Sp, "__esModule", { value: !0 })
var B1 = (Sp.default = void 0),
  sM = iM(xp()),
  lM = c
B1 = Sp.default = (0, sM.default)(
  (0, lM.jsx)("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  }),
  "Clear"
)
const gc = {
    PANTHER: "Shadow Claws",
    ENT: "Sylvian Root",
    DIREBEAR: "Spirit Paws",
    WEREWOLF: "Werewolf Fangs",
    IMP: "Imp's Horn",
    ELEMENTAL: "Runestone Tooth",
    EAGLE: "Dawnfeather",
  },
  aM = () => {
    const [e, t] = y.useState([]),
      [n, r] = y.useState([]),
      [o, i] = y.useState(""),
      [s, l] = y.useState(""),
      [a, u] = y.useState(""),
      [d, f] = y.useState([]),
      [h, C] = y.useState(!1),
      [v, x] = y.useState(""),
      [w, p] = y.useState({}),
      [m, g] = y.useState([])
    y.useEffect(() => {
      ;(async () => {
        try {
          const [P, T] = await Promise.all([
            Oi.getCities(),
            Oi.getIngredients(),
          ])
          t(
            P.data
              .map((I) => I.name)
              .filter((I) => I.toLowerCase() !== "caerleon")
          )
          const j = Array.from(
            new Set(T.data.map((I) => I.name.split("_")[3]))
          ).filter((I) => I.length > 0 && gc[I])
          r(j)
        } catch {
          x("Erro ao carregar cidades ou itens base")
        }
      })()
    }, [])
    const S = async () => {
      var E, P
      C(!0), x(""), f([]), g([])
      try {
        const T = await L1.get("/api/arbitrage/manual-simulate", {
          params: { buy_city: o, sell_city: s, item_base: a },
        })
        T.data.grouped
          ? (g(T.data.grouped), f([]))
          : (f(T.data.scenarios || []), g([]))
      } catch (T) {
        x(
          ((P = (E = T.response) == null ? void 0 : E.data) == null
            ? void 0
            : P.error) || "Erro ao simular arbitragem manual"
        )
      } finally {
        C(!1)
      }
    }
    y.useEffect(() => {
      o && s && S()
    }, [o, s, a])
    const k = (E, P) => {
        const T = w[P] ?? E.buy_qty,
          j = E.sell_qty / E.buy_qty,
          I = (E.buy_price ?? 0) * T,
          z = (E.sell_price ?? 0) * T * j * (1 - 0.04) - I,
          B = I > 0 ? (z / I) * 100 : 0
        return {
          ...E,
          buy_qty: T,
          total_buy: I,
          total_sell_price: (E.sell_price ?? 0) * T * j,
          sell_qty: T * j,
          net_profit: z,
          profit_margin: B,
        }
      },
      R = c.jsx("img", {
        src: z1,
        alt: "prata",
        width: 18,
        height: 18,
        style: { verticalAlign: "middle", marginLeft: 4 },
      })
    return c.jsxs(le, {
      children: [
        c.jsx(D, {
          variant: "h4",
          gutterBottom: !0,
          children: "Arbitrage Manual",
        }),
        c.jsx(D, {
          variant: "body1",
          color: "text.secondary",
          sx: { mb: 3 },
          children:
            "Simule manualmente conversões de tiers entre cidades e veja todos os cenários possíveis, inclusive negativos.",
        }),
        c.jsx(Fe, {
          sx: { p: 3, mb: 3 },
          children: c.jsxs(de, {
            container: !0,
            spacing: 2,
            alignItems: "center",
            children: [
              c.jsx(de, {
                item: !0,
                xs: 12,
                sm: 4,
                md: 3,
                children: c.jsx(dc, {
                  select: !0,
                  label: "Cidade de Compra",
                  value: o,
                  onChange: (E) => i(E.target.value),
                  fullWidth: !0,
                  size: "small",
                  children: e.map((E) =>
                    c.jsx(el, { value: E, children: E }, E)
                  ),
                }),
              }),
              c.jsx(de, {
                item: !0,
                xs: 12,
                sm: 1,
                md: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                children: c.jsx(Ed, {
                  "aria-label": "Inverter cidades",
                  onClick: () => {
                    const E = o
                    i(s), l(E), setTimeout(() => S(), 0)
                  },
                  sx: { mt: { xs: 2, sm: 0 } },
                  children: c.jsx(F1, { fontSize: "large" }),
                }),
              }),
              c.jsx(de, {
                item: !0,
                xs: 12,
                sm: 4,
                md: 3,
                children: c.jsx(dc, {
                  select: !0,
                  label: "Cidade de Venda",
                  value: s,
                  onChange: (E) => l(E.target.value),
                  fullWidth: !0,
                  size: "small",
                  children: e.map((E) =>
                    c.jsx(el, { value: E, children: E }, E)
                  ),
                }),
              }),
              c.jsxs(de, {
                item: !0,
                xs: 12,
                sm: 4,
                md: 3,
                display: "flex",
                alignItems: "center",
                children: [
                  c.jsxs(dc, {
                    select: !0,
                    label: "Item Base",
                    value: a,
                    onChange: (E) => u(E.target.value),
                    fullWidth: !0,
                    size: "small",
                    children: [
                      c.jsx(el, { value: "", children: "Todos os itens" }),
                      n.map((E) =>
                        c.jsx(el, { value: E, children: gc[E] || E }, E)
                      ),
                    ],
                  }),
                  c.jsx(Ed, {
                    "aria-label": "Resetar filtros",
                    onClick: () => {
                      i(""), l(""), u(""), g([]), f([]), x(""), p({})
                    },
                    sx: { ml: 1 },
                    children: c.jsx(B1, {}),
                  }),
                ],
              }),
              c.jsx(de, { item: !0, xs: 12, sm: 12, md: 3 }),
            ],
          }),
        }),
        h &&
          c.jsx(le, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            children: c.jsx(gu, {}),
          }),
        v && c.jsx(No, { severity: "error", sx: { mb: 2 }, children: v }),
        m.length > 0 &&
          c.jsx(le, {
            display: "flex",
            flexDirection: "column",
            gap: 4,
            children: m.map((E, P) =>
              c.jsxs(
                Fe,
                {
                  sx: {
                    p: 3,
                    mb: 2,
                    background: "#232323",
                    border: "2px solid #444",
                  },
                  children: [
                    c.jsxs(le, {
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                      children: [
                        c.jsx("img", {
                          src: `https://render.albiononline.com/v1/item/T5_ALCHEMY_RARE_${E.base}.png`,
                          alt: E.base,
                          width: 48,
                          height: 48,
                          style: { borderRadius: 8, border: "2px solid #888" },
                        }),
                        c.jsx(D, {
                          variant: "h6",
                          fontWeight: "bold",
                          children: gc[E.base] || E.base,
                        }),
                      ],
                    }),
                    c.jsx(ls, {
                      children: c.jsxs(is, {
                        children: [
                          c.jsx(as, {
                            children: c.jsxs(Kt, {
                              children: [
                                c.jsx(W, {
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "Conversão",
                                }),
                                c.jsx(W, {
                                  align: "right",
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "Preço Compra",
                                }),
                                c.jsx(W, {
                                  align: "right",
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "Qtd Compra",
                                }),
                                c.jsx(W, {
                                  align: "right",
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "Preço Venda x1",
                                }),
                                c.jsx(W, {
                                  align: "right",
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "Preço Venda x2/x4",
                                }),
                                c.jsx(W, {
                                  align: "right",
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "Qtd Venda",
                                }),
                                c.jsx(W, {
                                  align: "right",
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "Lucro Líquido",
                                }),
                                c.jsx(W, {
                                  align: "right",
                                  sx: {
                                    whiteSpace: "nowrap",
                                    fontWeight: "bold",
                                  },
                                  children: "% Lucro",
                                }),
                              ],
                            }),
                          }),
                          c.jsx(ss, {
                            children: E.scenarios.map((T, j) => {
                              var U
                              const I = k(T, j + P * 10),
                                [N, O] = T.conversion
                                  .split("→")
                                  .map(($) => $.trim()),
                                L = `https://render.albiononline.com/v1/item/${N}.png`,
                                z = O.split(" ")[O.split(" ").length - 1],
                                B = `https://render.albiononline.com/v1/item/${z}.png`
                              return c.jsxs(
                                Kt,
                                {
                                  children: [
                                    c.jsx(W, {
                                      align: "center",
                                      children: c.jsxs(le, {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 2,
                                        children: [
                                          c.jsx("img", {
                                            src: L,
                                            alt: N,
                                            width: 80,
                                            height: 80,
                                            style: {
                                              borderRadius: 10,
                                              border: "2px solid #444",
                                            },
                                          }),
                                          c.jsx(Md, {
                                            sx: { color: "#888", fontSize: 40 },
                                          }),
                                          c.jsx("img", {
                                            src: B,
                                            alt: z,
                                            width: 80,
                                            height: 80,
                                            style: {
                                              borderRadius: 10,
                                              border: "2px solid #444",
                                            },
                                          }),
                                        ],
                                      }),
                                    }),
                                    c.jsxs(W, {
                                      align: "right",
                                      children: [
                                        I.buy_price !== void 0
                                          ? Math.round(
                                              I.buy_price
                                            ).toLocaleString("pt-BR")
                                          : 0,
                                        " ",
                                        R,
                                      ],
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      children: c.jsx("input", {
                                        type: "number",
                                        min: 1,
                                        value: I.buy_qty,
                                        style: {
                                          width: 60,
                                          textAlign: "right",
                                          background: "transparent",
                                          color: "inherit",
                                          border: "1px solid #444",
                                          borderRadius: 4,
                                          padding: 2,
                                        },
                                        onChange: ($) => {
                                          const M = Math.max(
                                            1,
                                            parseInt($.target.value) || 1
                                          )
                                          p((V) => ({ ...V, [j + P * 10]: M }))
                                        },
                                      }),
                                    }),
                                    c.jsxs(W, {
                                      align: "right",
                                      children: [
                                        I.sell_price !== void 0
                                          ? Math.round(
                                              I.sell_price
                                            ).toLocaleString("pt-BR")
                                          : 0,
                                        " ",
                                        R,
                                      ],
                                    }),
                                    c.jsxs(W, {
                                      align: "right",
                                      children: [
                                        I.total_sell_price !== void 0
                                          ? Math.round(
                                              I.total_sell_price
                                            ).toLocaleString("pt-BR")
                                          : 0,
                                        " ",
                                        R,
                                      ],
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      children: I.sell_qty,
                                    }),
                                    c.jsxs(W, {
                                      align: "right",
                                      style: {
                                        color:
                                          I.buy_price === 0 ||
                                          I.sell_price === 0
                                            ? "#aaa"
                                            : I.net_profit >= 0
                                            ? "#4caf50"
                                            : "#f44336",
                                      },
                                      children: [
                                        I.buy_price === 0 || I.sell_price === 0
                                          ? "N/D"
                                          : Math.round(
                                              I.net_profit
                                            ).toLocaleString("pt-BR") + " ",
                                        I.buy_price === 0 || I.sell_price === 0
                                          ? null
                                          : R,
                                      ],
                                    }),
                                    c.jsx(W, {
                                      align: "right",
                                      style: {
                                        color:
                                          I.buy_price === 0 ||
                                          I.sell_price === 0
                                            ? "#aaa"
                                            : I.profit_margin >= 0
                                            ? "#4caf50"
                                            : "#f44336",
                                      },
                                      children:
                                        I.buy_price === 0 || I.sell_price === 0
                                          ? "N/D"
                                          : ((U = I.profit_margin) == null
                                              ? void 0
                                              : U.toFixed(2)) + "%",
                                    }),
                                  ],
                                },
                                j
                              )
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                E.base
              )
            ),
          }),
        d.length > 0 &&
          c.jsx(Fe, {
            children: c.jsx(ls, {
              children: c.jsxs(is, {
                children: [
                  c.jsx(as, {
                    children: c.jsxs(Kt, {
                      children: [
                        c.jsx(W, {
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "Conversão",
                        }),
                        c.jsx(W, {
                          align: "right",
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "Preço Compra",
                        }),
                        c.jsx(W, {
                          align: "right",
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "Qtd Compra",
                        }),
                        c.jsx(W, {
                          align: "right",
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "Preço Venda x1",
                        }),
                        c.jsx(W, {
                          align: "right",
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "Preço Venda x2/x4",
                        }),
                        c.jsx(W, {
                          align: "right",
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "Qtd Venda",
                        }),
                        c.jsx(W, {
                          align: "right",
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "Lucro Líquido",
                        }),
                        c.jsx(W, {
                          align: "right",
                          sx: { whiteSpace: "nowrap", fontWeight: "bold" },
                          children: "% Lucro",
                        }),
                      ],
                    }),
                  }),
                  c.jsx(ss, {
                    children: d.map((E, P) => {
                      var z
                      const T = k(E, P),
                        [j, I] = E.conversion.split("→").map((B) => B.trim()),
                        N = `https://render.albiononline.com/v1/item/${j}.png`,
                        O = I.split(" ")[I.split(" ").length - 1],
                        L = `https://render.albiononline.com/v1/item/${O}.png`
                      return c.jsxs(
                        Kt,
                        {
                          children: [
                            c.jsx(W, {
                              align: "center",
                              children: c.jsxs(le, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                children: [
                                  c.jsx("img", {
                                    src: N,
                                    alt: j,
                                    width: 80,
                                    height: 80,
                                    style: {
                                      borderRadius: 10,
                                      border: "2px solid #444",
                                    },
                                  }),
                                  c.jsx(Md, {
                                    sx: { color: "#888", fontSize: 40 },
                                  }),
                                  c.jsx("img", {
                                    src: L,
                                    alt: O,
                                    width: 80,
                                    height: 80,
                                    style: {
                                      borderRadius: 10,
                                      border: "2px solid #444",
                                    },
                                  }),
                                ],
                              }),
                            }),
                            c.jsxs(W, {
                              align: "right",
                              children: [
                                T.buy_price !== void 0
                                  ? Math.round(T.buy_price).toLocaleString(
                                      "pt-BR"
                                    )
                                  : 0,
                                " ",
                                R,
                              ],
                            }),
                            c.jsx(W, {
                              align: "right",
                              children: c.jsx("input", {
                                type: "number",
                                min: 1,
                                value: T.buy_qty,
                                style: {
                                  width: 60,
                                  textAlign: "right",
                                  background: "transparent",
                                  color: "inherit",
                                  border: "1px solid #444",
                                  borderRadius: 4,
                                  padding: 2,
                                },
                                onChange: (B) => {
                                  const U = Math.max(
                                    1,
                                    parseInt(B.target.value) || 1
                                  )
                                  p(($) => ({ ...$, [P]: U }))
                                },
                              }),
                            }),
                            c.jsxs(W, {
                              align: "right",
                              children: [
                                T.sell_price !== void 0
                                  ? Math.round(T.sell_price).toLocaleString(
                                      "pt-BR"
                                    )
                                  : 0,
                                " ",
                                R,
                              ],
                            }),
                            c.jsxs(W, {
                              align: "right",
                              children: [
                                T.total_sell_price !== void 0
                                  ? Math.round(
                                      T.total_sell_price
                                    ).toLocaleString("pt-BR")
                                  : 0,
                                " ",
                                R,
                              ],
                            }),
                            c.jsx(W, { align: "right", children: T.sell_qty }),
                            c.jsxs(W, {
                              align: "right",
                              style: {
                                color:
                                  T.buy_price === 0 || T.sell_price === 0
                                    ? "#aaa"
                                    : T.net_profit >= 0
                                    ? "#4caf50"
                                    : "#f44336",
                              },
                              children: [
                                T.buy_price === 0 || T.sell_price === 0
                                  ? "N/D"
                                  : Math.round(T.net_profit).toLocaleString(
                                      "pt-BR"
                                    ) + " ",
                                T.buy_price === 0 || T.sell_price === 0
                                  ? null
                                  : R,
                              ],
                            }),
                            c.jsx(W, {
                              align: "right",
                              style: {
                                color:
                                  T.buy_price === 0 || T.sell_price === 0
                                    ? "#aaa"
                                    : T.profit_margin >= 0
                                    ? "#4caf50"
                                    : "#f44336",
                              },
                              children:
                                T.buy_price === 0 || T.sell_price === 0
                                  ? "N/D"
                                  : ((z = T.profit_margin) == null
                                      ? void 0
                                      : z.toFixed(2)) + "%",
                            }),
                          ],
                        },
                        P
                      )
                    }),
                  }),
                ],
              }),
            }),
          }),
        d.length === 0 &&
          !h &&
          !v &&
          c.jsx(No, {
            severity: "info",
            sx: { mt: 2 },
            children: "Nenhum cenário encontrado para os filtros selecionados.",
          }),
      ],
    })
  }
function uM() {
  return c.jsxs(le, {
    sx: { display: "flex", flexDirection: "column", minHeight: "100vh" },
    children: [
      c.jsx(pI, {}),
      c.jsx(K$, {
        component: "main",
        sx: { flexGrow: 1, py: 3, maxWidth: "1400px !important" },
        children: c.jsxs(rC, {
          children: [
            c.jsx(Jr, { path: "/", element: c.jsx(qO, {}) }),
            c.jsx(Jr, { path: "/arbitrage", element: c.jsx(QO, {}) }),
            c.jsx(Jr, { path: "/manual-arbitrage", element: c.jsx(aM, {}) }),
            c.jsx(Jr, { path: "/market", element: c.jsx(XO, {}) }),
            c.jsx(Jr, { path: "/settings", element: c.jsx(YO, {}) }),
          ],
        }),
      }),
    ],
  })
}
const cM = rp({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
})
vc.createRoot(document.getElementById("root")).render(
  c.jsx(an.StrictMode, {
    children: c.jsxs(YR, {
      theme: cM,
      children: [c.jsx(nk, {}), c.jsx(cC, { children: c.jsx(uM, {}) })],
    }),
  })
)
