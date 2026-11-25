// Conventional Commits, as every RunEazy repository: any scope, bodies and footers of any line
// length. (Other repositories take this from @runeazy/devkit-commitlint; this one installs nothing.)
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always'],
    'footer-max-line-length': [0, 'always'],
    'scope-enum': [0],
  },
}
