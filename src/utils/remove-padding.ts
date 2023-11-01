export default function removePadding(input: string): string {
  return input.split('\n').map((line) => line.trimStart()).join('\n').trim();
}
