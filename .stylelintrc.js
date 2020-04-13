module.exports = {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-sass-guidelines',
    ],
    plugins: [
        'stylelint-order',
    ],
    rules: {
        // Disables indentation rule. This rule is handled by Prettier.
        indentation: null,

        'order/properties-order': null,

        // Disables enforcement of alphabetically ordered property
        // declarations. This rule is handled by
        // `stylelint-config-rational-order/plugin`.
        'order/properties-alphabetical-order': null,

        // Limits the number of ID selectors in a selector.
        // @see https://stylelint.io/user-guide/rules/selector-max-id
        'selector-max-id': 1,
    },
}
