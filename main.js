(() => {
  'use strict';

  /**
   * GA4 / dataLayer へのイベント送信。
   * gtag が定義されていればそれを、無ければ dataLayer への push を試み、
   * どちらも無い場合は何もしない（未計測環境でもエラーにしない）。
   */
  function trackEvent(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: eventName }, params));
    }
  }

  // ---------- 不安の代弁タブ (Problem) ----------
  function initWorryTabs() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;

        tabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        panels.forEach((p) => p.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');

        trackEvent('worry_tab_click', { tab_id: targetId, tab_label: tab.textContent.trim() });
      });
    });
  }

  // ---------- FAQ アコーディオン ----------
  function initAccordion() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach((item) => {
      const trigger = item.querySelector('.accordion-trigger');
      const panel = item.querySelector('.accordion-panel');
      if (!trigger || !panel) return;

      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : '0px';

      trigger.addEventListener('click', () => {
        const nowOpen = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!nowOpen));
        panel.style.maxHeight = !nowOpen ? panel.scrollHeight + 'px' : '0px';
      });
    });

    // フォントの遅延読み込みで高さが変わった場合に開いているパネルを追従させる
    window.addEventListener('load', () => {
      document.querySelectorAll('.accordion-trigger[aria-expanded="true"]').forEach((trigger) => {
        const panel = trigger.parentElement.querySelector('.accordion-panel');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    });
  }

  // ---------- スクロール追従 CTA（モバイル） ----------
  function initFloatingCta() {
    const floating = document.getElementById('floating-cta');
    if (!floating) return;

    const toggle = () => {
      if (window.scrollY > 600) {
        floating.classList.add('is-visible');
      } else {
        floating.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  }

  // ---------- CTA クリック計測 ----------
  function initCtaTracking() {
    document.querySelectorAll('[data-cta]').forEach((el) => {
      el.addEventListener('click', () => {
        const location = el.dataset.cta;
        const eventName = location === 'floating' ? 'cta_floating_click' : 'cta_section_click';
        trackEvent(eventName, { cta_location: location });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initWorryTabs();
    initAccordion();
    initFloatingCta();
    initCtaTracking();
  });
})();
