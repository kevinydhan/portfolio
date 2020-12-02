module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-sass-guidelines',
    'stylelint-config-rational-order',
    'stylelint-prettier',
  ],
  ignoreFiles: ['src/theme/fonts'],
  rules: {
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Muli'],
      },
    ],

    // Disables indentation rule. This rule is handled by Prettier.
    indentation: null,

    // Need to find out how to ignore pseudo-elements.
    'max-nesting-depth': 2,

    'order/order': [
      {
        type: 'at-rule',
        name: 'include',
        parameter: 'icon',
        hasBlock: true,
      },
    ],

    // This rule is disabled in favor of rational-order.
    'order/properties-alphabetical-order': null,

    'selector-class-pattern': null,

    // Limits the number of ID selectors in a selector.
    // @see https://stylelint.io/user-guide/rules/selector-max-id
    'selector-max-id': 1,
  },
}
