(function showNewsletterSuccessFromQuery() {
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get('subscribed') === '1') {
      var success = document.getElementById('newsletter-success');
      if (success) {
        success.style.display = 'block';
        var section = document.getElementById('newsletter');
        if (section && section.scrollIntoView) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
      params.delete('subscribed');
      var newUrl = window.location.pathname + (params.toString() ? ('?' + params.toString()) : '') + window.location.hash;
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', newUrl);
      }
    }
  } catch (e) {
    // no-op
  }
})();

(function wireNewsletterAjaxSubmit() {
  var form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var emailInput = form.querySelector('input[name="email"]');
    var success = document.getElementById('newsletter-success');
    var submitBtn = form.querySelector('button[type="submit"]');
    if (!emailInput || !emailInput.value) return;

    var data = new FormData();
    data.append('email', emailInput.value);

    if (submitBtn) submitBtn.disabled = true;
    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then(function () {
        if (success) success.style.display = 'block';
        form.reset();
      })
      .catch(function () {
        if (success) {
          success.style.display = 'block';
          success.textContent = 'Subscription failed. Please try again later.';
          success.style.color = '#ffb3b3';
        }
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();


