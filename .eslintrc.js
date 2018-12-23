module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
      "browser" : true
    },
    "rules": {
      "no-underscore-dangle" : [
        "error",
        { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
      ]
    }
};
