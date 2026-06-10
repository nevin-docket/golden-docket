(function () {
  function clearAndReload() {
    try {
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(';').forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, '')
          .replace(/=.*/, '=;expires=' + new Date(0).toUTCString() + ';path=/');
      });
    } catch (e) {}
    location.reload();
  }

  function mount() {
    if (document.getElementById('gd-reset-session-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'gd-reset-session-btn';
    btn.type = 'button';
    btn.textContent = 'Reset session';
    btn.title =
      'Clears localStorage, sessionStorage, and cookies on this domain, then reloads — gives you a fresh anonymous visitor (use for clean greeting tests).';
    btn.style.cssText = [
      'position:fixed',
      'bottom:24px',
      'left:24px',
      'z-index:2147483647',
      'padding:8px 14px',
      'font-family:ui-monospace,SFMono-Regular,Menlo,monospace',
      'font-size:11px',
      'font-weight:600',
      'letter-spacing:0.04em',
      'text-transform:uppercase',
      'color:#E8B838',
      'background:rgba(26,20,38,0.85)',
      'border:1px solid rgba(232,184,56,0.55)',
      'border-radius:8px',
      'cursor:pointer',
      'backdrop-filter:blur(6px)',
      '-webkit-backdrop-filter:blur(6px)',
      'box-shadow:0 4px 16px rgba(0,0,0,0.35)',
      'transition:transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease'
    ].join(';');
    btn.addEventListener('mouseenter', function () {
      btn.style.transform = 'translateY(-1px)';
      btn.style.background = 'rgba(40,30,70,0.92)';
      btn.style.boxShadow = '0 0 0 1px rgba(232,184,56,0.85), 0 6px 20px rgba(0,0,0,0.4)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = '';
      btn.style.background = 'rgba(26,20,38,0.85)';
      btn.style.boxShadow = '0 4px 16px rgba(0,0,0,0.35)';
    });
    btn.addEventListener('click', clearAndReload);
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
