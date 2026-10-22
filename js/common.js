/* ===== Alabaster Dawn Guide - Common JS ===== */
/* Dark mode / Language / Global Search / Burger / Back-to-top */
(function () {
  "use strict";

  /* ---------- SVG icons ---------- */
  var ICON_SEARCH = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  var ICON_SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var ICON_MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  /* ---------- i18n dictionary (UI framework) ---------- */
  var I18N = {
    "nav.getting-started": { zh: "新手入门", en: "Beginner" },
    "nav.combat": { zh: "战斗系统", en: "Combat" },
    "nav.world": { zh: "世界探索", en: "World" },
    "nav.settlements": { zh: "重建定居点", en: "Settlements" },
    "nav.progression": { zh: "成长系统", en: "Progression" },
    "nav.bosses": { zh: "Boss攻略", en: "Bosses" },
    "nav.items": { zh: "物品图鉴", en: "Items" },
    "nav.cta.start": { zh: "开始攻略", en: "Start Guide" },
    "nav.cta.home": { zh: "返回首页", en: "Home" },
    "brand": { zh: "Alabaster Dawn 攻略站", en: "Alabaster Dawn Guide" },
    "search.placeholder": { zh: "搜索攻略、武器、Boss…", en: "Search guides, weapons, bosses…" },
    "search.empty": { zh: "没有找到相关内容", en: "No results found" },
    "search.hint": { zh: "输入关键词搜索全站攻略", en: "Type to search the whole site" },
    "foot.nav": { zh: "攻略导航", en: "Guides" },
    "foot.systems": { zh: "系统与图鉴", en: "Systems & Codex" },
    "foot.about": { zh: "关于", en: "About" },
    "foot.aboutus": { zh: "关于本站", en: "About" },
    "foot.feedback": { zh: "投稿反馈", en: "Feedback" },
    "foot.changelog": { zh: "更新日志", en: "Changelog" },
    "foot.branddesc": { zh: "《Alabaster Dawn》中文玩家攻略站，原创整理，持续更新。", en: "A player-made Alabaster Dawn guide site, original content, updated regularly." },
    "foot.copy": { zh: "© 2026 Alabaster Dawn 攻略站 · 中文攻略 · 仅供学习交流", en: "© 2026 Alabaster Dawn Guide · Fan-made · For learning only" },
    "totype.all": { zh: "全部", en: "All" }
  };

  /* ---------- Search index ---------- */
  var SEARCH_INDEX = [
    { page: "首页", pageEn: "Home", url: "index.html",
      title: "Alabaster Dawn 攻略站", titleEn: "Alabaster Dawn Guide",
      tags: "Alabaster Dawn 攻略 首页 Juno Nyx Tiran Sol", tagsEn: "Alabaster Dawn guide home Juno Nyx Tiran Sol" },
    { page: "新手入门", pageEn: "Beginner", url: "getting-started.html",
      title: "从苏醒到启程的新手指南", titleEn: "From Awakening to Adventure Beginner Guide",
      tags: "新手 入门 苏醒 战斗基础 谜题 定居点 烹饪 第一步", tagsEn: "beginner guide awakening combat-basics puzzle settlement cooking first-steps" },
    { page: "战斗系统", pageEn: "Combat", url: "combat.html",
      title: "4元素8武器战斗系统详解", titleEn: "4 Elements 8 Weapons Combat System",
      tags: "战斗 元素 火水风土 武器 战斗技 神技 连招 切换", tagsEn: "combat element fire water wind earth weapon combat-arts divine-arts combo switch" },
    { page: "世界探索", pageEn: "World", url: "world.html",
      title: "提兰索七大区域探索指南", titleEn: "Tiran Sol 7 Areas Exploration Guide",
      tags: "世界 探索 区域 提兰索 谜题 宝箱 跑酷 地图 快速旅行", tagsEn: "world explore area Tiran-Sol puzzle treasure parkour map fast-travel" },
    { page: "重建定居点", pageEn: "Settlements", url: "settlements.html",
      title: "定居点重建与贸易路线指南", titleEn: "Settlement Rebuilding & Trade Routes",
      tags: "定居点 重建 贸易路线 科学 科技 建筑 NPC 任务", tagsEn: "settlement rebuild trade-route science technology building NPC quest" },
    { page: "成长系统", pageEn: "Progression", url: "progression.html",
      title: "宝石技能树与烹饪系统", titleEn: "Gems, Skilltree & Cooking System",
      tags: "成长 宝石 技能树 烹饪 味觉等级 附魔 升级 精炼师", tagsEn: "progression gem skilltree cooking palate-level enchant upgrade artificer" },
    { page: "Boss攻略", pageEn: "Bosses", url: "bosses.html",
      title: "Boss战攻略与机制详解", titleEn: "Boss Fight Strategies & Mechanics",
      tags: "Boss Custo Turri Magnus Grandis Molis 攻略 机制 弱点", tagsEn: "boss Custo-Turri-Magnus Grandis-Molis guide mechanics weakness" },
    { page: "物品图鉴", pageEn: "Items", url: "items.html",
      title: "全物品图鉴", titleEn: "Item Codex",
      tags: "物品 图鉴 材料 食材 宝石 武器 配方 食物", tagsEn: "item codex material ingredient gem weapon recipe food" },
    /* extra searchable anchors */
    { page: "战斗系统", pageEn: "Combat", url: "combat.html",
      title: "火元素（Fire）", titleEn: "Fire Element",
      tags: "火元素 燃烧 持续伤害 远程 爆发", tagsEn: "fire element burn dot ranged burst" },
    { page: "战斗系统", pageEn: "Combat", url: "combat.html",
      title: "水元素（Water）", titleEn: "Water Element",
      tags: "水元素 冰冻 减速 控制 范围", tagsEn: "water element freeze slow control aoe" },
    { page: "战斗系统", pageEn: "Combat", url: "combat.html",
      title: "土元素（Earth）", titleEn: "Earth Element",
      tags: "土元素 防御 格挡 重击 护盾", tagsEn: "earth element defense guard heavy-shield" },
    { page: "战斗系统", pageEn: "Combat", url: "combat.html",
      title: "风元素（Wind）", titleEn: "Wind Element",
      tags: "风元素 位移 速度 连击 灵活", tagsEn: "wind element mobility speed combo agile" },
    { page: "Boss攻略", pageEn: "Bosses", url: "bosses.html",
      title: "Custo Turri Magnus", titleEn: "Custo Turri Magnus",
      tags: "Boss1 Custo Turri Magnus 巨塔 试炼厅", tagsEn: "boss1 Custo-Turri-Magnus tower trial-hall" },
    { page: "Boss攻略", pageEn: "Bosses", url: "bosses.html",
      title: "Grandis Molis", titleEn: "Grandis Molis",
      tags: "Boss2 Grandis Molis 巨石 北行", tagsEn: "boss2 Grandis-Molis boulder north-journey" }
  ];

  var lang = localStorage.getItem("ad-lang") || "zh";
  var dark = localStorage.getItem("ad-dark") === "1";

  /* ---------- Apply language ---------- */
  function applyLang(l) {
    lang = l;
    localStorage.setItem("ad-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";

    /* 1) UI framework elements via data-i18n dictionary */
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (I18N[key] && I18N[key][l]) {
        if (el.hasAttribute("data-i18n-ph")) el.setAttribute("placeholder", I18N[key][l]);
        else el.textContent = I18N[key][l];
      }
    });

    /* 2) Page content elements via data-en attribute */
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (l === "en") {
        if (!el.hasAttribute("data-zh")) el.setAttribute("data-zh", el.innerHTML);
        el.innerHTML = el.getAttribute("data-en");
      } else {
        if (el.hasAttribute("data-zh")) el.innerHTML = el.getAttribute("data-zh");
      }
    });

    var langBtn = document.querySelector(".lang-btn");
    if (langBtn) langBtn.textContent = l === "zh" ? "English" : "中文";

    /* 3) Update aria-labels for accessibility */
    var ariaMap = {
      ".search-btn": { zh: "搜索", en: "Search" },
      ".dark-btn": { zh: "暗色模式", en: "Toggle dark mode" },
      ".lang-btn": { zh: "语言", en: "Switch language" },
      "#burger": { zh: "菜单", en: "Menu" },
      "#toTop": { zh: "返回顶部", en: "Back to top" },
      ".search-close": { zh: "关闭", en: "Close" }
    };
    Object.keys(ariaMap).forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) el.setAttribute("aria-label", ariaMap[sel][l]);
    });

    /* 4) Re-render search results if overlay is open */
    var ov = document.getElementById("searchOverlay");
    if (ov && ov.classList.contains("show")) {
      var inp = ov.querySelector("input");
      renderSearch(inp ? inp.value : "");
    }
  }

  /* ---------- Apply dark ---------- */
  function applyDark(d) {
    dark = d;
    localStorage.setItem("ad-dark", d ? "1" : "0");
    document.body.classList.toggle("dark", d);
    var db = document.querySelector(".dark-btn");
    if (db) db.innerHTML = d ? ICON_SUN : ICON_MOON;
  }

  /* ---------- Search ---------- */
  function openSearch() {
    var ov = document.getElementById("searchOverlay");
    if (!ov) return;
    ov.classList.add("show");
    var inp = ov.querySelector("input");
    if (inp) { inp.value = ""; inp.focus(); renderSearch(""); }
  }
  function closeSearch() {
    var ov = document.getElementById("searchOverlay");
    if (ov) ov.classList.remove("show");
  }
  function renderSearch(q) {
    var box = document.querySelector("#searchOverlay .search-results");
    if (!box) return;
    q = (q || "").trim().toLowerCase();
    if (!q) {
      box.innerHTML = '<div class="sr-empty" data-i18n="search.hint">' + t("search.hint") + "</div>";
      return;
    }
    var hits = [];
    SEARCH_INDEX.forEach(function (e) {
      var hay = (e.page + " " + e.title + " " + e.tags + " " +
                 (e.pageEn || "") + " " + (e.titleEn || "") + " " + (e.tagsEn || "")
      ).toLowerCase();
      if (hay.indexOf(q) !== -1) hits.push(e);
    });
    if (!hits.length) {
      box.innerHTML = '<div class="sr-empty">' + t("search.empty") + "</div>";
      return;
    }
    var isEn = lang === "en";
    box.innerHTML = hits.map(function (e) {
      var pg = isEn ? (e.pageEn || e.page) : e.page;
      var ti = isEn ? (e.titleEn || e.title) : e.title;
      var tg = isEn ? (e.tagsEn || e.tags) : e.tags;
      var snip = tg.split(" ").slice(0, 6).join(" · ");
      return '<a class="sr-item" href="' + e.url + '">' +
        '<div class="sr-page">' + pg + "</div>" +
        '<div class="sr-title">' + ti + "</div>" +
        '<div class="sr-snippet">' + snip + "</div></a>";
    }).join("");
  }
  function t(key) { return I18N[key] ? (I18N[key][lang] || I18N[key].zh) : key; }

  /* ---------- Init ---------- */
  function init() {
    applyDark(dark);
    applyLang(lang);

    /* set search button icon */
    var sb = document.querySelector(".search-btn");
    if (sb) sb.innerHTML = ICON_SEARCH;

    /* set search overlay icon */
    var sico = document.querySelector(".s-ico");
    if (sico) sico.innerHTML = ICON_SEARCH;

    /* burger */
    var burger = document.getElementById("burger");
    var navLinks = document.getElementById("navLinks");
    if (burger && navLinks) {
      burger.addEventListener("click", function () { navLinks.classList.toggle("open"); });
    }

    /* dark toggle */
    var db = document.querySelector(".dark-btn");
    if (db) db.addEventListener("click", function () { applyDark(!dark); });

    /* lang toggle */
    var lb = document.querySelector(".lang-btn");
    if (lb) lb.addEventListener("click", function () { applyLang(lang === "zh" ? "en" : "zh"); });

    /* back to top */
    var toTop = document.getElementById("toTop");
    if (toTop) {
      window.addEventListener("scroll", function () { toTop.classList.toggle("show", window.scrollY > 400); });
      toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    }

    /* search */
    var ov = document.getElementById("searchOverlay");
    if (sb) sb.addEventListener("click", openSearch);
    if (ov) {
      var close = ov.querySelector(".search-close");
      if (close) close.addEventListener("click", closeSearch);
      ov.addEventListener("click", function (e) { if (e.target === ov) closeSearch(); });
      var inp = ov.querySelector("input");
      if (inp) {
        inp.setAttribute("data-i18n", "search.placeholder");
        inp.setAttribute("data-i18n-ph", "1");
        inp.addEventListener("input", function () { renderSearch(inp.value); });
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeSearch();
        if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); openSearch(); }
      });
    }
    applyLang(lang);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
