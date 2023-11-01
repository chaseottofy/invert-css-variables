const cliMessages = {
  includedRoot: `      
  only pass the variables to this function, not the entire :root block.
  Example:
  invertColorsInRoot(\`
    --accent-1: #111;
    --accent-2: rgb(255,170,204);
    --accent-3: #333;
    --accent-4: #444;
    --accent-5: #555;
    --accent-6: #888;
    --accent-7: #eaeaea;
    --accent-8: #fafafa;\`)`,
  invalidColor: 'Invalid color value. Must be a valid hex, rgb, rgba, hsl, or hsla value. Casing does not matter, nor does whitespace outside of the value.',
  noColor: 'No color value found.',
};

export default cliMessages;
