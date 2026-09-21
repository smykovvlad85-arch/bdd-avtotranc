'use strict';
const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
const phoneNumber = '+79205185656';
copyButton.addEventListener('click', async () => {
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(phoneNumber);
      copied = true;
    }
  } catch { /* Continue to the selection-based fallback. */ }
  if (!copied) {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('contact-number'));
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      try { copied = document.execCommand('copy'); } catch { copied = false; }
      if (copied) selection.removeAllRanges();
    }
  }
  if (copied && typeof ym === 'function') {
  ym(112868762, 'reachGoal', 'copy_phone');
}
  copyStatus.textContent = copied
    ? 'Номер скопирован: +7 920 518-56-56'
    : 'Номер: +7 920 518-56-56. Выделите и скопируйте его через меню устройства или сочетанием Ctrl+C.';
});
