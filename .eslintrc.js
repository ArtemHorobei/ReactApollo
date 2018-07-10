module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-quotes": "off",
        "quotes": "off",
        "arrow-body-style": "off",
        "react/jsx-tag-spacing": "off",
        "spaced-comment":"off",
        "import/first": "off",
        "no-underscore-dangle": "off",
        "react/no-did-mount-set-state": "off",
        "react/no-did-update-set-state": "off",
        "react/no-find-dom-node": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies":"off",
        "max-len": "off",
        "function-paren-newline":"off",
        "import/no-dynamic-require": "off",
        "consistent-return":"off",
        "react/forbid-prop-types": "off",
        "no-use-before-define": ["error", {"variables": false, "functions": false, "classes": false}],
        "no-mixed-operators": "off",
        "no-param-reassign":"off",
        "jsx-a11y/alt-text": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/prefer-default-export": "off",
        "import/no-mutable-exports": "off",
        "no-nested-ternary": "off",
        "prefer-destructuring": "off",
        "no-prototype-builtins": "off",
        "no-shadow": "off",
        "class-methods-use-this": "off",
        "dot-notation": "off",
        "react/require-default-props": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "react/jsx-no-bind": "off",
        "sort-imports": "off",
        "react/jsx-one-expression-per-line": "off"
    },
    "globals": {
        "window": true,
        "document": true,
        "location": true,
        "URLSearchParams": true,
        "WebSocket": true,
        "Boolean": true,
        "ReactDOM": true,
        "window.localStorage": true,
        "FileReader": true,
        "CustomEvent": true,
        "safari": true
    }
};