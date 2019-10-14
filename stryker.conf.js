module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress', 'dashboard'],
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: ['src/**/*.ts'],
    htmlReporter: {
      baseDir: 'tmp/reports/mutation/html'
    },
    thresholds: { high: 80, low: 60, break: 80 },
  });
};
