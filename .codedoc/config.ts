
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/dev-wiki-sandbox',                // --> your github pages namespace. remove if you are using a custom domain.
    html: 'dist',
    assets: 'dist'
  },
  page: {
    title: {
      base: 'Dev Wiki'                    // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'mlota',                      // --> your github username (where your repo is hosted)
      repo: 'dev-wiki-sandbox',                   // --> your github repo name
    }
  },
});
