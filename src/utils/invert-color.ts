const invertRgb = (val: string) => {
  const num = Number.parseInt(val, 10);
  if (Number.isNaN(num) || num < 0 || num > 255) return null;
  return 255 - num;
};

// flip HSL
const flipHue = (val: string) => {
  const num = Number.parseInt(val, 10);
  if (Number.isNaN(num) || num < 0 || num >= 360) return null;
  return (num + 180) % 360;
};

export default function invertColor(color: string): string | null {
  const trimColor = color.trim();

  // Invert Hex
  if (/^#([\dA-Fa-f]{3}){1,2}$/.test(trimColor)) {
    const isShort = trimColor.length === 4;
    const isLower = trimColor.toLowerCase() === trimColor;

    const hex = isShort
      ? trimColor.slice(1).split('').map((c) => c + c).join('')
      : trimColor.slice(1);
    if (hex.length !== 6) return null;

    let inverted = '';
    for (let i = 0; i < hex.length; i += 2) {
      // const val = Number.parseInt(hex.substr(i, 2), 16);
      const val = Number.parseInt(hex.slice(i, i + 2), 16);
      if (Number.isNaN(val)) return null;
      inverted += (255 - val).toString(16).padStart(2, '0');
    }

    return `#${isLower ? inverted.toLowerCase() : inverted.toUpperCase()}`;
  }

  // Invert RGB and RGBA
  const rgbMatch = trimColor.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/);
  if (rgbMatch) {
    const r = invertRgb(rgbMatch[1]);
    const g = invertRgb(rgbMatch[2]);
    const b = invertRgb(rgbMatch[3]);
    const a = rgbMatch[5] ? Number.parseFloat(rgbMatch[5]) : null;
    if (
      r === null
      || g === null
      || b === null
      || (a !== null && (Number.isNaN(a) || a < 0 || a > 1))) return null;

    return a === null ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
  }

  // Invert HSL and HSLA
  const hslMatch = trimColor.match(/^hsla?\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(,\s*([\d.]+))?\)$/);
  if (hslMatch) {
    const h = flipHue(hslMatch[1]);
    const s = Number.parseInt(hslMatch[2], 10);
    const l = Number.parseInt(hslMatch[3], 10);
    const a = hslMatch[5] ? Number.parseFloat(hslMatch[5]) : null;
    if (
      h === null
      || Number.isNaN(s)
      || s < 0
      || s > 100
      || Number.isNaN(l)
      || l < 0
      || l > 100
      || (a !== null && (Number.isNaN(a) || a < 0 || a > 1))) return null;

    return a === null ? `hsl(${h},${s}%,${l}%)` : `hsla(${h},${s}%,${l}%,${a})`;
  }

  return null;
}
