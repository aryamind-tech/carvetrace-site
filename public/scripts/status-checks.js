// Lightweight client-side liveness pings for /status.
//
// Operates only on cards that declare a same-origin path via data-ping ;
// cross-origin endpoints (verify.carvetrace.com, github.com) are not pinged
// because the marketing-site CSP restricts connect-src to 'self' on purpose
// — the same property the verifier ships with. The operator-curated state
// in the page source carries the authoritative answer ; this script just
// enhances the same-origin cards with a real latency number measured in the
// visitor's own browser.
(function () {
  const cards = document.querySelectorAll('.status-card[data-ping]');
  if (cards.length === 0) return;

  async function ping(card) {
    const path = card.dataset.ping;
    if (!path) return;
    const t0 = performance.now();
    try {
      await fetch(path, {
        method: 'HEAD',
        cache: 'no-cache',
        signal: AbortSignal.timeout(8000),
      });
      const dt = performance.now() - t0;
      const v = card.querySelector('.status-card__latency-value');
      if (v) v.textContent = Math.round(dt) + ' ms';
    } catch (err) {
      const v = card.querySelector('.status-card__latency-value');
      if (v) v.textContent = 'unreachable';
    }
  }

  function runAll() {
    cards.forEach(p => { if (p.dataset.ping) ping(p); });
  }
  runAll();
  setInterval(runAll, 60_000);
})();
