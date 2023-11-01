import invertColor from '../src/utils/invert-color';
import invert from '../src/index';

describe('invertColor', () => {
  test('invert hex', () => {
    expect(invertColor('#000')).toBe('#ffffff');
  });

  test('invert hex (short)', () => {
    expect(invertColor('#FAC')).toBe('#005533');
  });

  test('invert rgb', () => {
    expect(invertColor('rgb(255, 255, 255)')).toBe('rgb(0,0,0)');
    expect(invertColor('rgb(255,170,204)')).toBe('rgb(0,85,51)');
    expect(invertColor('rgb(0,0,0)')).toBe('rgb(255,255,255)');
  });

  test('invert rgba', () => {
    expect(invertColor('rgba(255, 255, 255, 0.5)')).toBe('rgba(0,0,0,0.5)');
    expect(invertColor('rgba(255,170,204,0.5)')).toBe('rgba(0,85,51,0.5)');
  });

  test('invert hsl', () => {
    expect(invertColor('hsl(340,100%,88%)')).toBe('hsl(160,100%,88%)');
  });

  test('invert hsla', () => {
    expect(invertColor('hsla(340,100%,88%,0.5)')).toBe('hsla(160,100%,88%,0.5)');
  });
});

describe('invertColorsInRoot', () => {

  it('should invert hex colors correctly', () => {
    const input = `
  --color-1: #111;
  --color-2: #FFFFFF;
    `;
    const expected = `
  --color-1: #eeeeee;
  --color-2: #000000;`;
    expect(invert(input)).toEqual(expected);
  });

  it('should handle short and long hex format', () => {
    const input = `
  --color-1: #123;
  --color-2: #102030;
    `;
    const expected = `
  --color-1: #eeddcc;
  --color-2: #efdfcf;`;
    expect(invert(input)).toEqual(expected);
  });

  it('should handle rgb format', () => {
    const input = `
  --color-1: rgb(10,20,30);
  --color-2: rgb(255,255,255);
    `;
    const expected = `
  --color-1: rgb(245,235,225);
  --color-2: rgb(0,0,0);`;
    expect(invert(input)).toEqual(expected);
  });

  it('should handle rgba format', () => {
    const input = `
  --color-1: rgba(10,20,30,0.5);
  --color-2: rgba(255,255,255,0.5);
    `;
    const expected = `
  --color-1: rgba(245,235,225,0.5);
  --color-2: rgba(0,0,0,0.5);`;
    expect(invert(input)).toEqual(expected);
  });

  it('should return the same string if no color is found', () => {
    const input = `
      --variable-1: 10px;
      --variable-2: bold;
    `;
    expect(invert(input)).toEqual(input);
  });

  it('should handle invalid color formats gracefully', () => {
    const input = `
      --color-1: #xyz;
      --color-2: rgb(256,256,256);
      --color-3: hsl(390,101%,101%);
    `;
    expect(invert(input)).toEqual(input);  // The colors should remain unchanged
  });
});