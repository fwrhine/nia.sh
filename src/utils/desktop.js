export const desktop = {
  width: 1400,
  height: 900,
  mobileBreakpoint: 1024,
};

export function centerX(width) {
  return (desktop.width - width) / 2;
}

export function centerY(height) {
  return (desktop.height - height) / 2;
}