export default {
  '*.{js,jsx,ts,tsx,mjs,cjs,json,md,html,css,scss,yml,yaml}': (files) => {
    return `pnpm exec nx format:write --files="${files.join(',')}"`;
  },
  '*.{js,jsx,ts,tsx,mjs,cjs,json,md,yml,yaml}': (files) => {
    const quotedFiles = files.map((file) => `"${file}"`).join(' ');
    return `pnpm exec cspell lint --no-must-find-files ${quotedFiles}`;
  },
};
