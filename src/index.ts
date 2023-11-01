import cliMessages from './utils/cli-messages';
import invertColor from './utils/invert-color';
import removePadding from './utils/remove-padding';

export default function invert(root: string): string {
  const trimmedRoot = removePadding(root);

  if (trimmedRoot.slice(0, 4) === 'root') {
    console.log(cliMessages.includedRoot);
    return root;
  }

  const invertedLines = [];

  const lines = trimmedRoot.trim().split('\n');
  for (const line of lines) {
    const [varName, colorVal] = line.split(':').map((s) => s.trim());
    if (!varName || !colorVal) {
      console.log(`Invalid CSS variable declaration: ${line}`);
      return root;
    }

    const invertedColor = invertColor(colorVal.replace(/;$/, ''));
    if (!invertedColor) {
      console.log(`Invalid color value: ${colorVal}`);
      return root;
    }

    invertedLines.push(`  ${varName}: ${invertedColor};`);
  }

  return `\n${invertedLines.join('\n').trimEnd()}`;
}
