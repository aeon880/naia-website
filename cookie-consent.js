(function () {
  'use strict';

  var STORAGE_KEY = 'cookieConsent';
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;

  var alreadyAccepted = false;
  try {
    alreadyAccepted = localStorage.getItem(STORAGE_KEY) === 'accepted';
  } catch (e) {
    /* localStorage unavailable — fall through and show banner */
  }

  if (alreadyAccepted) return;

  setTimeout(function () {
    banner.classList.add('visible');
  }, 50);

  var acceptBtn = document.getElementById('cookie-accept');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      banner.classList.remove('visible');
      try { localStorage.setItem(STORAGE_KEY, 'accepted'); } catch (e) {}
    });
  }

})();
