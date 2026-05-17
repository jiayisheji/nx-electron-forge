export default {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      ['ipc', 'forge', 'core', 'deps', 'release', 'docs', 'examples', 'scripts', 'tools'],
    ],
    'scope-case': [2, 'always', 'kebab-case'],
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'never', ['sentence-case', 'start-case']],
    'body-max-line-length': [1, 'always', 120],
    'footer-max-line-length': [1, 'always', 120],
  },
};
