import { getRenderer } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/melvinlota/Documents/Code/Git/dev-wiki/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'ii8k5mgCp3SVikTRdLQNcQ==': ToCPrevNext,
  'Cg7BlB2R4paDgA8q+H9fFw==': GithubSearch,
  'hjN6w/z4t76w+Oyp6clTxQ==': ToCToggle,
  'EQWp6wDvkvwgCgwHRDvL0w==': DarkModeSwitch,
  'kOlgcxQHS7WjMj5/lv4l2g==': ConfigTransport,
  'qlyurzhdGL6BXiY8yRI0Ig==': TabSelector,
  'GCzJKrCAgX4KN/4+xlx7Cg==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
