/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{svg,yml,yaml}': 'prettier -w --no-error-on-unmatched-pattern',
  '*.{css,html,js,json,ts,vue}': [
    'eslint --fix --cache --no-error-on-unmatched-pattern',
    'oxlint --fix --no-error-on-unmatched-pattern',
    'prettier -w --no-error-on-unmatched-pattern',
  ],
}
