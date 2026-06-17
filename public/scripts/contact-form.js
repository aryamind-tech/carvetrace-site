// JS-builds-mailto pattern for /contact.
// - No backend, no third party, no tracking.
// - Pre-fills subject + body from the form fields.
// - Falls back gracefully if JS is off (the "Or just email us directly"
//   button uses a plain mailto: with no body).
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const get = (k) => (data.get(k) || '').toString().trim();
    const name = get('name');
    const orgName = get('org');
    const country = get('country');
    const email = get('email');
    const role = get('role');
    const intent = get('intent');
    const message = get('message');

    const subjectBits = ['CarveTrace —'];
    if (orgName) subjectBits.push(orgName);
    if (role) subjectBits.push('(' + role + ')');
    const subject = subjectBits.join(' ').replace(/  +/g, ' ').trim();

    const lines = [];
    if (name)    lines.push('Name        : ' + name);
    if (email)   lines.push('Email       : ' + email);
    if (orgName) lines.push('Organization: ' + orgName);
    if (country) lines.push('Country     : ' + country);
    if (role)    lines.push('Role        : ' + role);
    if (intent)  lines.push('Why now     : ' + intent);
    if (message) {
      lines.push('');
      lines.push('Use case :');
      lines.push(message);
    }
    if (lines.length === 0) {
      lines.push('(blank — say hello in your reply !)');
    }
    const body = lines.join('\r\n');

    const target = 'mailto:contact@carvetrace.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    window.location.href = target;
  });
})();
