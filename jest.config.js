module.exports = {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "collectCoverage": true,
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  "collectCoverageFrom": [
    "src/*.{ts,tsx}"
  ]

}
