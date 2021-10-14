require('./genMetadata').watchPosts();

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'StateML',
  description: 'A language for authoring state machines.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
    ],
    [
      'link',
      {
        rel: 'preload',
        as: 'font',
        href: '/fira-code-variable.ttf',
        crossorigin: 'anonymous',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'SML, StateML, State Machine Language, state machines, finite state machines, FSM, statecharts',
      },
    ],
  ],
  markdown: {
    config(md) {
      md.use(require('markdown-it-attrs'));
    },
  },
};
