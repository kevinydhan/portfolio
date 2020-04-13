module.exports = {
    extends: [
        'stylelint-config-recommended',
        // 'stylelint-config-rational-order',
        'stylelint-config-sass-guidelines',
        'stylelint-config-styled-components',
    ],
    plugins: [
        'stylelint-order',
        // 'stylelint-config-rational-order/plugin'
    ],
    rules: {
        // Disables indentation rule. This rule is handled by Prettier.
        indentation: null,

        'order/properties-order': null,

        // Disables enforcement of alphabetically ordered property
        // declarations. This rule is handled by
        // `stylelint-config-rational-order/plugin`.
        'order/properties-alphabetical-order': null,

        // Enforces rational order for property declarations.
        // @see https://github.com/constverum/stylelint-config-rational-order
        // 'plugin/rational-order': [
        //     true,
        //     {
        //         // @see https://github.com/constverum/stylelint-config-rational-order#border-in-box-model
        //         'border-in-box-model': false,

        //         // @see https://github.com/constverum/stylelint-config-rational-order#empty-line-between-groups
        //         'empty-line-between-groups': true,

        //         // Resolves VSCode error stating that stylelint
        //         // @see https://github.com/constverum/stylelint-config-rational-order/issues/13#issuecomment-522421878
        //         severity: 'warning',
        //     },
        // ],

        // Limits the number of ID selectors in a selector.
        // @see https://stylelint.io/user-guide/rules/selector-max-id
        'selector-max-id': 1,
    },
}
