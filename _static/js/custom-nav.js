/**
 * Dynamically inject the "Asset Audit" nav link into every page's top navbar.
 * Runs after DOMContentLoaded so all nav elements are available.
 */
(function () {
  function getAuditHref() {
    var path = window.location.pathname;
    // If already on the audit page, link to self
    if (path.indexOf("/audit/") !== -1) return "index.html";
    // Compute relative path from current page to user_guide/audit/index.html
    var depth = path.replace(/\/[^/]*$/, "").split("/user_guide/")[1];
    if (typeof depth === "undefined") return "audit/index.html";
    var levels = depth ? depth.split("/").length : 0;
    var prefix = "";
    for (var i = 0; i < levels; i++) prefix += "../";
    return prefix + "audit/index.html";
  }

  function isOnAuditPage() {
    return window.location.pathname.indexOf("/audit/") !== -1;
  }

  function injectNavItem() {
    var navLists = document.querySelectorAll("ul.bd-navbar-elements.navbar-nav");
    if (!navLists.length) return;
    var href = getAuditHref();
    var onAudit = isOnAuditPage();

    for (var i = 0; i < navLists.length; i++) {
      var ul = navLists[i];
      // Skip if already present (hardcoded or previously injected)
      if (ul.querySelector('[data-audit-nav]')) continue;
      var existing = ul.querySelectorAll("a.nav-link");
      var alreadyHas = false;
      for (var k = 0; k < existing.length; k++) {
        if (existing[k].textContent.trim() === "Asset Audit") { alreadyHas = true; break; }
      }
      if (alreadyHas) continue;

      var li = document.createElement("li");
      li.className = "nav-item" + (onAudit ? " current active" : "");
      li.setAttribute("data-audit-nav", "true");

      var a = document.createElement("a");
      a.className = "nav-link nav-internal";
      a.href = href;
      a.textContent = "Asset Audit";

      li.appendChild(a);

      // Insert before the "More" dropdown if it exists
      var moreBtn = ul.querySelector("li.nav-item.dropdown");
      if (moreBtn) {
        ul.insertBefore(li, moreBtn);
      } else {
        ul.appendChild(li);
      }

      // If on audit page, remove "current active" from other nav items
      if (onAudit) {
        var items = ul.querySelectorAll("li.nav-item");
        for (var j = 0; j < items.length; j++) {
          if (items[j] !== li) {
            items[j].classList.remove("current", "active");
          }
        }
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectNavItem);
  } else {
    injectNavItem();
  }
})();
