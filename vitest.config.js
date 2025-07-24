import presets from 'ts-jest/presets/index.js'; // استيراد CommonJS بالطريقة الصح

/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    ...presets.defaultsESM.transform, 
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};

export default config;
