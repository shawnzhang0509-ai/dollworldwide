export function isSmsCapableDevice() {
  if (typeof navigator === 'undefined') return false;

  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
