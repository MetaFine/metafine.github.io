var DOCUMENTATION_OPTIONS = {
    URL_ROOT: document.getElementById("documentation_options").getAttribute('data-url_root'),
    VERSION: '3.0.0b22',
    LANGUAGE: 'en',
    COLLAPSE_INDEX: false,
    BUILDER: 'html',
    FILE_SUFFIX: '.html',
    LINK_SUFFIX: '.html',
    HAS_SOURCE: true,
    SOURCELINK_SUFFIX: '.txt',
    NAVIGATION_WITH_KEYS: false,
    SHOW_SEARCH_SUMMARY: true,
    ENABLE_SEARCH_SHORTCUTS: true,
};

(function unifyTabBranding() {
    var root = DOCUMENTATION_OPTIONS.URL_ROOT || "../";
    var logoHref = root + "_images/logo.png";
    var oldBrandRegex = /FGManip|Meta-Fine|meta-fine/g;
    var newBrand = "MetaFine";

    function replaceBrandText(value) {
        if (typeof value !== "string") return value;
        return value.replace(oldBrandRegex, newBrand);
    }

    function applyBranding() {
        document.title = replaceBrandText(document.title || "MetaFine User Guide");

        var icon = document.querySelector("link[rel='icon']");
        if (!icon) {
            icon = document.createElement("link");
            icon.setAttribute("rel", "icon");
            document.head.appendChild(icon);
        }
        icon.setAttribute("href", logoHref);

        if (!document.body) return;

        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        var current = walker.nextNode();
        while (current) {
            var before = current.nodeValue;
            var after = replaceBrandText(before);
            if (after !== before) current.nodeValue = after;
            current = walker.nextNode();
        }

        document.querySelectorAll("[alt],[title],[aria-label]").forEach(function (el) {
            ["alt", "title", "aria-label"].forEach(function (attr) {
                if (!el.hasAttribute(attr)) return;
                var before = el.getAttribute(attr);
                var after = replaceBrandText(before);
                if (after !== before) el.setAttribute(attr, after);
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyBranding);
    } else {
        applyBranding();
    }
})();