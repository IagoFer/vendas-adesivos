{
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "plugins": ["react"],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["warn", { "varsIgnorePattern": "^React$" }]
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
  