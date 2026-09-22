'use strict';

const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
const contactNumber = document.getElementById('contact-number');
const phoneNumber = '+79205185656';

if (copyButton && copyStatus && contactNumber) {
  copyButton.addEventListener('click', async () => {
    let copied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(phoneNumber);
        copied = true;
      }
    } catch {}

    if (!copied) {
      const range = document.createRange();
      range.selectNodeContents(contactNumber);
      const selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);

        try {
          copied = document.execCommand('copy');
        } catch {
          copied = false;
        }

        if (copied) selection.removeAllRanges();
      }
    }

    if (copied && typeof window.ym === 'function') {
      window.ym(112868762, 'reachGoal', 'copy_phone');
    }

    copyStatus.textContent = copied
      ? 'Номер скопирован: +7 920 518-56-56'
      : 'Номер: +7 920 518-56-56';
  });
}

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (typeof window.ym === 'function') {
      window.ym(112868762, 'reachGoal', 'phone_click');
    }
  });
});
