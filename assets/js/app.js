/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function (t, e) { "use strict"; function r(r, a, i, u, l) { function f() { L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () { s(!0) }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) { "resize" === t.type && (w = B = -1), s(t.all) }), u.a = function (t) { t = c(t), i.push.apply(i, t) }, u.g = function () { return i = n(i).filter(function () { return !n(this).data(a.loadedName) }) }, u.f = function (t) { for (var e = 0; e < t.length; e++) { var r = i.filter(function () { return this === t[e] }); r.length && s(!1, r) } }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e)) } function c(t) { var i = a.defaultImage, o = a.placeholder, u = a.imageBase, l = a.srcsetAttribute, f = a.loaderAttribute, c = a._f || {}; t = n(t).filter(function () { var t = n(this), r = m(this); return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e) }).data("plugin_" + a.name, r); for (var s = 0, d = t.length; s < d; s++) { var A = n(t[s]), g = m(t[s]), h = A.attr(a.imageBaseAttribute) || u; g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')") } return t } function s(t, e) { if (!i.length) return void (a.autoDestroy && r.destroy()); for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)if (t || e || A(o[s])) { var g = n(o[s]), h = m(o[s]), b = g.attr(a.attribute), v = g.attr(a.imageBaseAttribute) || l, p = g.attr(a.loaderAttribute); g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p)) } u && (i = n(i).filter(function () { return !n(this).data(c) })) } function d(t, e, r, i) { ++z; var o = function () { y("onError", t), p(), o = n.noop }; y("beforeLoad", t); var u = a.attribute, l = a.srcsetAttribute, f = a.sizesAttribute, c = a.retinaAttribute, s = a.removeAttribute, d = a.loadedName, A = t.attr(c); if (i) { var g = function () { s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop }; t.off(I).one(I, o).one(D, g), y(i, t, function (e) { e ? (t.off(D), g()) : (t.off(I), o()) }) || t.trigger(I) } else { var h = n(new Image); h.one(I, o).one(D, function () { t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p() }); var m = (L && A ? A : t.attr(u)) || ""; h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D) } } function A(t) { var e = t.getBoundingClientRect(), r = a.scrollDirection, n = a.threshold, i = h() + n > e.top && -n < e.bottom, o = g() + n > e.left && -n < e.right; return "vertical" === r ? i : "horizontal" === r ? o : i && o } function g() { return w >= 0 ? w : w = n(t).width() } function h() { return B >= 0 ? B : B = n(t).height() } function m(t) { return t.tagName.toLowerCase() } function b(t, e) { if (e) { var r = t.split(","); t = ""; for (var a = 0, n = r.length; a < n; a++)t += e + r[a].trim() + (a !== n - 1 ? "," : "") } return t } function v(t, e) { var n, i = 0; return function (o, u) { function l() { i = +new Date, e.call(r, o) } var f = +new Date - i; n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f) } } function p() { --z, i.length || z || y("onFinishedAll") } function y(t, e, n) { return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0) } var z = 0, w = -1, B = -1, L = !1, T = "afterLoad", D = "load", I = "error", N = "img", E = "src", F = "srcset", C = "sizes", O = "background-image"; "event" === a.bind || o ? f() : n(t).on(D + "." + l, f) } function a(a, o) { var u = this, l = n.extend({}, u.config, o), f = {}, c = l.name + "-" + ++i; return u.config = function (t, r) { return r === e ? l[t] : (l[t] = r, u) }, u.addItems = function (t) { return f.a && f.a("string" === n.type(t) ? n(t) : t), u }, u.getItems = function () { return f.g ? f.g() : {} }, u.update = function (t) { return f.e && f.e({}, !t), u }, u.force = function (t) { return f.f && f.f("string" === n.type(t) ? n(t) : t), u }, u.loadAll = function () { return f.e && f.e({ all: !0 }, !0), u }, u.destroy = function () { return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e }, r(u, l, a, f, c), l.chainable ? a : u } var n = t.jQuery || t.Zepto, i = 0, o = !1; n.fn.Lazy = n.fn.lazy = function (t) { return new a(this, t) }, n.Lazy = n.lazy = function (t, r, i) { if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) { t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r]; for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i); for (var c = 0, s = r.length; c < s; c++)u[r[c]] = t[0] } }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function () { o = !0 }) }(window);
/**
*  Ajax Autocomplete for jQuery, version 1.4.11
*  (c) 2017 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/
!function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "function" == typeof require ? t(require("jquery")) : t(jQuery) }(function (t) { "use strict"; var e = { escapeRegExChars: function (t) { return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&") }, createNode: function (t) { var e = document.createElement("div"); return e.className = t, e.style.position = "absolute", e.style.display = "none", e } }, s = 27, i = 9, n = 13, o = 38, a = 39, u = 40, l = t.noop; function r(e, s) { this.element = e, this.el = t(e), this.suggestions = [], this.badQueries = [], this.selectedIndex = -1, this.currentValue = this.element.value, this.timeoutId = null, this.cachedResponse = {}, this.onChangeTimeout = null, this.onChange = null, this.isLocal = !1, this.suggestionsContainer = null, this.noSuggestionsContainer = null, this.options = t.extend(!0, {}, r.defaults, s), this.classes = { selected: "autocomplete-selected", suggestion: "autocomplete-suggestion" }, this.hint = null, this.hintValue = "", this.selection = null, this.initialize(), this.setOptions(s) } r.utils = e, t.Autocomplete = r, r.defaults = { ajaxSettings: {}, autoSelectFirst: !1, appendTo: "body", serviceUrl: null, lookup: null, onSelect: null, onHint: null, width: "auto", minChars: 1, maxHeight: 300, deferRequestBy: 0, params: {}, formatResult: function (t, s) { if (!s) return t.value; var i = "(" + e.escapeRegExChars(s) + ")"; return t.value.replace(new RegExp(i, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>") }, formatGroup: function (t, e) { return '<div class="autocomplete-group">' + e + "</div>" }, delimiter: null, zIndex: 9999, type: "GET", noCache: !1, onSearchStart: l, onSearchComplete: l, onSearchError: l, preserveInput: !1, containerClass: "autocomplete-suggestions", tabDisabled: !1, dataType: "text", currentRequest: null, triggerSelectOnValidInput: !0, preventBadQueries: !0, lookupFilter: function (t, e, s) { return -1 !== t.value.toLowerCase().indexOf(s) }, paramName: "query", transformResult: function (e) { return "string" == typeof e ? t.parseJSON(e) : e }, showNoSuggestionNotice: !1, noSuggestionNotice: "No results", orientation: "bottom", forceFixPosition: !1 }, r.prototype = { initialize: function () { var e, s = this, i = "." + s.classes.suggestion, n = s.classes.selected, o = s.options; s.element.setAttribute("autocomplete", "off"), s.noSuggestionsContainer = t('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), s.suggestionsContainer = r.utils.createNode(o.containerClass), (e = t(s.suggestionsContainer)).appendTo(o.appendTo || "body"), "auto" !== o.width && e.css("width", o.width), e.on("mouseover.autocomplete", i, function () { s.activate(t(this).data("index")) }), e.on("mouseout.autocomplete", function () { s.selectedIndex = -1, e.children("." + n).removeClass(n) }), e.on("click.autocomplete", i, function () { s.select(t(this).data("index")) }), e.on("click.autocomplete", function () { clearTimeout(s.blurTimeoutId) }), s.fixPositionCapture = function () { s.visible && s.fixPosition() }, t(window).on("resize.autocomplete", s.fixPositionCapture), s.el.on("keydown.autocomplete", function (t) { s.onKeyPress(t) }), s.el.on("keyup.autocomplete", function (t) { s.onKeyUp(t) }), s.el.on("blur.autocomplete", function () { s.onBlur() }), s.el.on("focus.autocomplete", function () { s.onFocus() }), s.el.on("change.autocomplete", function (t) { s.onKeyUp(t) }), s.el.on("input.autocomplete", function (t) { s.onKeyUp(t) }) }, onFocus: function () { this.disabled || (this.fixPosition(), this.el.val().length >= this.options.minChars && this.onValueChange()) }, onBlur: function () { var e = this, s = e.options, i = e.el.val(), n = e.getQuery(i); e.blurTimeoutId = setTimeout(function () { e.hide(), e.selection && e.currentValue !== n && (s.onInvalidateSelection || t.noop).call(e.element) }, 200) }, abortAjax: function () { this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null) }, setOptions: function (e) { var s = t.extend({}, this.options, e); this.isLocal = Array.isArray(s.lookup), this.isLocal && (s.lookup = this.verifySuggestionsFormat(s.lookup)), s.orientation = this.validateOrientation(s.orientation, "bottom"), t(this.suggestionsContainer).css({ "max-height": s.maxHeight + "px", width: s.width + "px", "z-index": s.zIndex }), this.options = s }, clearCache: function () { this.cachedResponse = {}, this.badQueries = [] }, clear: function () { this.clearCache(), this.currentValue = "", this.suggestions = [] }, disable: function () { this.disabled = !0, clearTimeout(this.onChangeTimeout), this.abortAjax() }, enable: function () { this.disabled = !1 }, fixPosition: function () { var e = t(this.suggestionsContainer), s = e.parent().get(0); if (s === document.body || this.options.forceFixPosition) { var i = this.options.orientation, n = e.outerHeight(), o = this.el.outerHeight(), a = this.el.offset(), u = { top: a.top, left: a.left }; if ("auto" === i) { var l = t(window).height(), r = t(window).scrollTop(), h = -r + a.top - n, c = r + l - (a.top + o + n); i = Math.max(h, c) === h ? "top" : "bottom" } if (u.top += "top" === i ? -n : o, s !== document.body) { var g, d = e.css("opacity"); this.visible || e.css("opacity", 0).show(), g = e.offsetParent().offset(), u.top -= g.top, u.top += s.scrollTop, u.left -= g.left, this.visible || e.css("opacity", d).hide() } "auto" === this.options.width && (u.width = this.el.outerWidth() + "px"), e.css(u) } }, isCursorAtEnd: function () { var t, e = this.el.val().length, s = this.element.selectionStart; return "number" == typeof s ? s === e : !document.selection || ((t = document.selection.createRange()).moveStart("character", -e), e === t.text.length) }, onKeyPress: function (t) { if (this.disabled || this.visible || t.which !== u || !this.currentValue) { if (!this.disabled && this.visible) { switch (t.which) { case s: this.el.val(this.currentValue), this.hide(); break; case a: if (this.hint && this.options.onHint && this.isCursorAtEnd()) { this.selectHint(); break } return; case i: if (this.hint && this.options.onHint) return void this.selectHint(); if (-1 === this.selectedIndex) return void this.hide(); if (this.select(this.selectedIndex), !1 === this.options.tabDisabled) return; break; case n: if (-1 === this.selectedIndex) return void this.hide(); this.select(this.selectedIndex); break; case o: this.moveUp(); break; case u: this.moveDown(); break; default: return }t.stopImmediatePropagation(), t.preventDefault() } } else this.suggest() }, onKeyUp: function (t) { var e = this; if (!e.disabled) { switch (t.which) { case o: case u: return }clearTimeout(e.onChangeTimeout), e.currentValue !== e.el.val() && (e.findBestHint(), e.options.deferRequestBy > 0 ? e.onChangeTimeout = setTimeout(function () { e.onValueChange() }, e.options.deferRequestBy) : e.onValueChange()) } }, onValueChange: function () { if (this.ignoreValueChange) this.ignoreValueChange = !1; else { var e = this.options, s = this.el.val(), i = this.getQuery(s); this.selection && this.currentValue !== i && (this.selection = null, (e.onInvalidateSelection || t.noop).call(this.element)), clearTimeout(this.onChangeTimeout), this.currentValue = s, this.selectedIndex = -1, e.triggerSelectOnValidInput && this.isExactMatch(i) ? this.select(0) : i.length < e.minChars ? this.hide() : this.getSuggestions(i) } }, isExactMatch: function (t) { var e = this.suggestions; return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase() }, getQuery: function (e) { var s, i = this.options.delimiter; return i ? (s = e.split(i), t.trim(s[s.length - 1])) : e }, getSuggestionsLocal: function (e) { var s, i = this.options, n = e.toLowerCase(), o = i.lookupFilter, a = parseInt(i.lookupLimit, 10); return s = { suggestions: t.grep(i.lookup, function (t) { return o(t, e, n) }) }, a && s.suggestions.length > a && (s.suggestions = s.suggestions.slice(0, a)), s }, getSuggestions: function (e) { var s, i, n, o, a = this, u = a.options, l = u.serviceUrl; u.params[u.paramName] = e, !1 !== u.onSearchStart.call(a.element, u.params) && (i = u.ignoreParams ? null : u.params, t.isFunction(u.lookup) ? u.lookup(e, function (t) { a.suggestions = t.suggestions, a.suggest(), u.onSearchComplete.call(a.element, e, t.suggestions) }) : (a.isLocal ? s = a.getSuggestionsLocal(e) : (t.isFunction(l) && (l = l.call(a.element, e)), n = l + "?" + t.param(i || {}), s = a.cachedResponse[n]), s && Array.isArray(s.suggestions) ? (a.suggestions = s.suggestions, a.suggest(), u.onSearchComplete.call(a.element, e, s.suggestions)) : a.isBadQuery(e) ? u.onSearchComplete.call(a.element, e, []) : (a.abortAjax(), o = { url: l, data: i, type: u.type, dataType: u.dataType }, t.extend(o, u.ajaxSettings), a.currentRequest = t.ajax(o).done(function (t) { var s; a.currentRequest = null, s = u.transformResult(t, e), a.processResponse(s, e, n), u.onSearchComplete.call(a.element, e, s.suggestions) }).fail(function (t, s, i) { u.onSearchError.call(a.element, e, t, s, i) })))) }, isBadQuery: function (t) { if (!this.options.preventBadQueries) return !1; for (var e = this.badQueries, s = e.length; s--;)if (0 === t.indexOf(e[s])) return !0; return !1 }, hide: function () { var e = t(this.suggestionsContainer); t.isFunction(this.options.onHide) && this.visible && this.options.onHide.call(this.element, e), this.visible = !1, this.selectedIndex = -1, clearTimeout(this.onChangeTimeout), t(this.suggestionsContainer).hide(), this.onHint(null) }, suggest: function () { if (this.suggestions.length) { var e, s = this.options, i = s.groupBy, n = s.formatResult, o = this.getQuery(this.currentValue), a = this.classes.suggestion, u = this.classes.selected, l = t(this.suggestionsContainer), r = t(this.noSuggestionsContainer), h = s.beforeRender, c = ""; s.triggerSelectOnValidInput && this.isExactMatch(o) ? this.select(0) : (t.each(this.suggestions, function (t, u) { i && (c += function (t, n) { var o = t.data[i]; return e === o ? "" : (e = o, s.formatGroup(t, e)) }(u, 0)), c += '<div class="' + a + '" data-index="' + t + '">' + n(u, o, t) + "</div>" }), this.adjustContainerWidth(), r.detach(), l.html(c), t.isFunction(h) && h.call(this.element, l, this.suggestions), this.fixPosition(), l.show(), s.autoSelectFirst && (this.selectedIndex = 0, l.scrollTop(0), l.children("." + a).first().addClass(u)), this.visible = !0, this.findBestHint()) } else this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide() }, noSuggestions: function () { var e = this.options.beforeRender, s = t(this.suggestionsContainer), i = t(this.noSuggestionsContainer); this.adjustContainerWidth(), i.detach(), s.empty(), s.append(i), t.isFunction(e) && e.call(this.element, s, this.suggestions), this.fixPosition(), s.show(), this.visible = !0 }, adjustContainerWidth: function () { var e, s = this.options, i = t(this.suggestionsContainer); "auto" === s.width ? (e = this.el.outerWidth(), i.css("width", e > 0 ? e : 300)) : "flex" === s.width && i.css("width", "") }, findBestHint: function () { var e = this.el.val().toLowerCase(), s = null; e && (t.each(this.suggestions, function (t, i) { var n = 0 === i.value.toLowerCase().indexOf(e); return n && (s = i), !n }), this.onHint(s)) }, onHint: function (e) { var s = this.options.onHint, i = ""; e && (i = this.currentValue + e.value.substr(this.currentValue.length)), this.hintValue !== i && (this.hintValue = i, this.hint = e, t.isFunction(s) && s.call(this.element, i)) }, verifySuggestionsFormat: function (e) { return e.length && "string" == typeof e[0] ? t.map(e, function (t) { return { value: t, data: null } }) : e }, validateOrientation: function (e, s) { return e = t.trim(e || "").toLowerCase(), -1 === t.inArray(e, ["auto", "bottom", "top"]) && (e = s), e }, processResponse: function (t, e, s) { var i = this.options; t.suggestions = this.verifySuggestionsFormat(t.suggestions), i.noCache || (this.cachedResponse[s] = t, i.preventBadQueries && !t.suggestions.length && this.badQueries.push(e)), e === this.getQuery(this.currentValue) && (this.suggestions = t.suggestions, this.suggest()) }, activate: function (e) { var s, i = this.classes.selected, n = t(this.suggestionsContainer), o = n.find("." + this.classes.suggestion); return n.find("." + i).removeClass(i), this.selectedIndex = e, -1 !== this.selectedIndex && o.length > this.selectedIndex ? (s = o.get(this.selectedIndex), t(s).addClass(i), s) : null }, selectHint: function () { var e = t.inArray(this.hint, this.suggestions); this.select(e) }, select: function (t) { this.hide(), this.onSelect(t) }, moveUp: function () { if (-1 !== this.selectedIndex) return 0 === this.selectedIndex ? (t(this.suggestionsContainer).children("." + this.classes.suggestion).first().removeClass(this.classes.selected), this.selectedIndex = -1, this.ignoreValueChange = !1, this.el.val(this.currentValue), void this.findBestHint()) : void this.adjustScroll(this.selectedIndex - 1) }, moveDown: function () { this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1) }, adjustScroll: function (e) { var s = this.activate(e); if (s) { var i, n, o, a = t(s).outerHeight(); i = s.offsetTop, o = (n = t(this.suggestionsContainer).scrollTop()) + this.options.maxHeight - a, i < n ? t(this.suggestionsContainer).scrollTop(i) : i > o && t(this.suggestionsContainer).scrollTop(i - this.options.maxHeight + a), this.options.preserveInput || (this.ignoreValueChange = !0, this.el.val(this.getValue(this.suggestions[e].value))), this.onHint(null) } }, onSelect: function (e) { var s = this.options.onSelect, i = this.suggestions[e]; this.currentValue = this.getValue(i.value), this.currentValue === this.el.val() || this.options.preserveInput || this.el.val(this.currentValue), this.onHint(null), this.suggestions = [], this.selection = i, t.isFunction(s) && s.call(this.element, i) }, getValue: function (t) { var e, s, i = this.options.delimiter; return i ? 1 === (s = (e = this.currentValue).split(i)).length ? t : e.substr(0, e.length - s[s.length - 1].length) + t : t }, dispose: function () { this.el.off(".autocomplete").removeData("autocomplete"), t(window).off("resize.autocomplete", this.fixPositionCapture), t(this.suggestionsContainer).remove() } }, t.fn.devbridgeAutocomplete = function (e, s) { return arguments.length ? this.each(function () { var i = t(this), n = i.data("autocomplete"); "string" == typeof e ? n && "function" == typeof n[e] && n[e](s) : (n && n.dispose && n.dispose(), n = new r(this, e), i.data("autocomplete", n)) }) : this.first().data("autocomplete") }, t.fn.autocomplete || (t.fn.autocomplete = t.fn.devbridgeAutocomplete) });

var App = function () {

    // Transitions
    // -------------------------

    var _initTabSlickFix = function () {
        $('a[data-bs-toggle="tab"]').on('show.bs.tab', function (e) {
            var slider = $(e.target.hash).find('.slick-slider');
            if (slider.length && slider.find('.slick-track').width() == 0) {
                slider.removeClass('.slick-initialized');
            }
        });
        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            var slider = $(e.target.hash).find('.slick-slider');
            if (slider.length && slider.find('.slick-track').width() == 0) {
                slider.slick("refresh");
            }
        });
    };

    var _initSticky = function () {
        stickybits('.use-sticky');
        stickybits('.use-sticky-bottom', { useStickyClasses: true, verticalPosition: 'bottom' });
        stickybits('.use-sticky-top', { useStickyClasses: true, stickyBitStickyOffset: $('header').outerHeight() });
        $('.hc-sticky').hcSticky();
        $('.hc-sticky-top').hcSticky({
            top: $('header').outerHeight(),
            innerTop: $(this).data('top'),
        });
        stickybits('.use-sticky-inner', { useStickyClasses: true, stickyBitStickyOffset: $('header').outerHeight() });
    };

    var _initSlider = function () {
        $('.product-previews.slider').each(function ($index) {
            $(this).addClass('product-container').removeClass('slider');
            $clone = $(this).clone();
            $clone.addClass('slider-nav-for');
            $clone.find('.img-fluid.video-thumbnail').remove();
            $clone.insertBefore($(this));
            $(this).addClass('slider-nav');
            $(this).find('.video-player').remove();
            $(this).find('img').unwrap('a');
            $clone.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.product-previews.slider-nav'
            });
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                asNavFor: '.product-previews.slider-nav-for',
                dots: true,
                centerMode: false,
                focusOnSelect: true
            });
            Plyr.setup('.slider-nav-for .video-player', {
                loadSprite: true,
            });
        });
    };

    var _componentSweetAlert = function () {
        if (typeof swal == 'undefined') {
            console.warn('Warning - sweet_alert.min.js is not loaded.');
            return;
        }

        window.swalert = swal.mixin({
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-light'
        });
    };

    var _initLazy = function () {
        $('.lazy').lazy();
    };

    var _initSiteSearch = function () {
        var _windowWidth = 0;
        $('header .nav-search').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            _windowWidth = window.innerWidth;
            if (window.innerWidth >= 768) {
                $('header .navbar-nav').addClass('d-none');
                $("header .nav-search-form").detach().appendTo('header .navbar-other');
            } else {
                $('header nav.navbar').addClass('d-none');
                $("header .nav-search-form").detach().appendTo('header .nav-search-mobile');
                $("header .nav-search-mobile").removeClass('d-none');
            }
            $("header .nav-search-form").removeClass('d-none');
            //$("header input[name=q]").val('').focus();
        });
        var _navsearchClose = function () {
            $('header nav.navbar').removeClass('d-none');
            $('header .navbar-nav').removeClass('d-none');
            $("header .nav-search-form").addClass('d-none');
            $('header .nav-search-mobile').addClass('d-none');
        }
        $('header .nav-search-close').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            _navsearchClose();
        });
        $('header .filter-link').click(function (e) {
            e.preventDefault();
            $('header .filter-bar-form').toggleClass('d-none');
        });
        $(window).resize(function () {
            if (_windowWidth > 0 && _windowWidth != window.innerWidth) {
                _navsearchClose();
                $('header .filter-bar-form').toggleClass('d-none');
            }
        });
        $('header input[name=q]').autocomplete({
            serviceUrl: '/dataservice/search',
            type: 'POST', paramName: 'q', dataType: 'json',
            deferRequestBy: 100,
            transformResult: function (response) {
                return {
                    suggestions: $.map(response, function (dataItem) {
                        return { value: dataItem.title, data: dataItem };
                    })
                };
            },
            groupBy: 'type',
            onSelect: function (suggestion) {
                $.ajax({
                    url: '/dataservice/product_url',
                    type: "POST", dataType: 'json',
                    data: { id: suggestion.data.id, type: suggestion.data.type },
                    success: function (response) {
                        if (response && response.redirect_url.length) window.location.href = response.redirect_url;
                    }
                });
                //console.log('You selected: ' + suggestion.value + ', ' + suggestion.data);
            },
        });
    };

    var _initLightbox = function () {
        GLightbox({
            selector: '*[data-glightbox]',
            touchNavigation: true,
            loop: false,
            zoomable: false,
            autoplayVideos: true,
            moreLength: 0,
            slideExtraAttributes: {
                poster: ''
            },
            plyr: {
                css: '',
                js: '',
                config: {
                    ratio: '16:9',
                    fullscreen: {
                        enabled: false,
                        iosNative: false
                    },
                    youtube: {
                        noCookie: true,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: false,
                        portrait: false,
                        title: false,
                        transparent: false
                    }
                }
            },
        });
    };

    // Form Validator
    var _componentFormValidate = function () {
        if (!$().validate) {
            console.warn('Warning - validate.min.js is not loaded.');
            return;
        }
        $("select").on("select2:close", function (e) {
            $(this).valid();
        });
        // Input Mask
        if ($.isFunction($.fn.inputmask)) {
            bindInputMask();
        }
        // Form Validation
        if ($.isFunction($.fn.validate)) {
            $("form.validate").each(function (i, el) {
                bindValidator(el);
            });
        }
        // Multi-select
        if ($.isFunction($.fn.multiSelect)) {
            $(".multi-select").multiSelect();
        }
    };

    //
    // Return objects assigned to module
    //

    return {

        // Initialize all components
        initComponents: function () {
            _initLazy();
            _initSticky();
            _initSlider();
            _initLightbox();
            _initTabSlickFix();
            _initSiteSearch();
            _componentSweetAlert();
            _componentFormValidate();
        },
    }
}();


// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener('DOMContentLoaded', function () {
    App.initComponents();
});

// Element Attribute Helper
function attrDefault($el, data_var, default_val) {
    if (typeof $el.data(data_var) != 'undefined') {
        return $el.data(data_var);
    }

    return default_val;
}

function bindValidator(el) {
    var $this = $(el),
        opts = {
            rules: {},
            messages: {},
            ignore: 'input[type=hidden], .select2-search__field, :hidden', // ignore hidden fields
            errorClass: 'validation-invalid-label',
            successClass: '',
            validClass: '',
            highlight: function (element, errorClass) {
                $(element).removeClass(errorClass);
            },
            unhighlight: function (element, errorClass) {
                $(element).removeClass(errorClass);
            },
            errorPlacement: function (error, element) {
                // Unstyled checkboxes, radios
                if (element.parents().hasClass('form-check')) {
                    error.appendTo(element.parents('.form-check').parent());
                }

                if (element.parents().hasClass('form-floating')) {
                    error.appendTo(element.parents('.form-floating').parent());
                }

                // Input with icons and Select2
                else if (element.parents().hasClass('form-group-feedback') || element.hasClass('select2-hidden-accessible')) {
                    error.appendTo(element.parent());
                }

                // Input group, styled file input
                else if (element.parent().is('.uniform-uploader, .uniform-select') || element.parents().hasClass('input-group')) {
                    error.appendTo(element.parent().parent());
                }

                // Other elements
                else {
                    error.insertAfter(element);
                }
            }
        },
        $fields = $this.find('[data-validate]');

    $fields.each(function (j, el2) {
        var $field = $(el2),
            name = $field.attr('name'),
            validate = attrDefault($field, 'validate', '').toString(),
            _validate = validate.split(';');

        for (var k in _validate) {
            var rule = _validate[k],
                params,
                message;

            if (typeof opts['rules'][name] == 'undefined') {
                opts['rules'][name] = {};
                opts['messages'][name] = {};
            }

            if ($.inArray(rule, ['required', 'url', 'email', 'number', 'date', 'creditcard']) != -1) {
                opts['rules'][name][rule] = true;

                message = $field.data('message-' + rule);

                if (message) {
                    opts['messages'][name][rule] = message;
                }
            }
            // Parameter Value (#1 parameter)
            else if (params = rule.match(/(\w+)\[(.*?)\]/i)) {
                if ($.inArray(params[1], ['min', 'max', 'minlength', 'maxlength', 'equalTo', 'range']) != -1) {
                    if (params[1] == 'range') {
                        _range = params[2].split(',');
                        opts['rules'][name][params[1]] = [parseInt(_range[0]), parseInt(_range[1])];
                    } else {
                        opts['rules'][name][params[1]] = parseInt(params[2]);
                    }
                    message = $field.data('message-' + params[1]);

                    if (message) {
                        opts['messages'][name][params[1]] = message;
                    }
                }
            }
        }
    });
    $this.data('validator', null);
    $this.validate(opts);
    return $this;
}

function bindInputMask() {
    $("[data-mask]").each(function (i, el) {
        var $this = $(el),
            mask = $this.data('mask').toString(),
            opts = {
                numericInput: attrDefault($this, 'numeric', false),
                radixPoint: attrDefault($this, 'radixPoint', ''),
                rightAlignNumerics: attrDefault($this, 'numericAlign', 'left') == 'right'
            },
            placeholder = attrDefault($this, 'placeholder', ''),
            is_regex = attrDefault($this, 'isRegex', '');


        if (placeholder.length) {
            opts[placeholder] = placeholder;
        }

        switch (mask.toLowerCase()) {
            case "phone":
                mask = "(999) 999-9999";
                break;

            case "currency":
            case "rcurrency":

                var sign = attrDefault($this, 'sign', '$');;

                mask = "999,999,999.99";

                if ($this.data('mask').toLowerCase() == 'rcurrency') {
                    mask += ' ' + sign;
                }
                else {
                    mask = sign + ' ' + mask;
                }

                opts.numericInput = true;
                opts.rightAlignNumerics = false;
                opts.radixPoint = '.';
                break;

            case "email":
                mask = 'Regex';
                opts.regex = "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-\.]+\\.[a-zA-Z]{2,4}";
                break;

            case "fdecimal":
                mask = 'decimal';
                $.extend(opts, {
                    autoGroup: true,
                    groupSize: 3,
                    radixPoint: attrDefault($this, 'rad', '.'),
                    groupSeparator: attrDefault($this, 'dec', ',')
                });
        }

        if (is_regex) {
            opts.regex = mask;
            mask = 'Regex';
        }

        $this.inputmask(mask, opts);
    });
}

var modalInitHandler = function (e) {
    e.preventDefault();
    if ($(this).closest('.dropdown.show').length == 0) e.stopPropagation();
    var $this = $(this);
    var $url = $this.data('remote') || $this.attr('href');
    ajaxModal($url);
}

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function ajaxModal($url) {
    $('#ajaxModal').remove();
    $modal = $('<div class="modal" id="ajaxModal" data-bs-backdrop="static" data-bs-keyboard="false" data-backdrop="static"></div>');
    $('body').append($modal);
    $.ajax({
        url: $url,
        type: 'GET',
        success: function (data) {
            $modal.append(data);
            $modal.modal('show');
        }
    });
}

function ajax_get($url) {
    
    $.ajax({
        url: $url,
        type: 'GET',
        success: function (data) {
            
        }
    });
}
function initModal(sel) {
    $(sel).once('click', modalInitHandler);
};
$(document).on('click', '[data-toggle="ajaxModal"]', modalInitHandler);
$(document).on('click', 'a [data-toggle="more"]', function (e) {
    e.preventDefault();
    var dots = $(this).closest("dots");
    var moreText = $(this).closest("more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
});

function closeModal() {
    $('#ajaxModal').modal('hide');
}
$(document).on('click', '.get-price-link', function (e) {
    e.preventDefault();
    ajaxModal('/dataservice/getprice/' + $(this).data('product') + '/' + $(this).data('id'));
});
$(document).on('click', '.get-useditem-link', function (e) {
    e.preventDefault();
    ajaxModal('/dataservice/useditemenquiry');
});
$(document).ready(function () {
    $('.nav-link').click(modalInitHandler);
});
