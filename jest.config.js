module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
}
