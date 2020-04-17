module.exports = {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-sass-guidelines',
        'stylelint-config-rational-order'
    ],
    plugins: [
        'stylelint-order',
    ],
    ignoreFiles: [
        'src/images',
        'src/theme/fonts'
    ],
    rules: {
        // Disables indentation rule. This rule is handled by Prettier.
        indentation: null,

        // This rule is handled by Prettier.
        'no-missing-end-of-source-newline': null,

        'order/properties-alphabetical-order': null,

        // Limits the number of ID selectors in a selector.
        // @see https://stylelint.io/user-guide/rules/selector-max-id
        'selector-max-id': 1,
    },
}
