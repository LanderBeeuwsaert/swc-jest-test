/* eslint-disable */

/* @hack for some annoying reason, this file doesn't seem to be compiled
 * using our tsconfigs, so it is not aware of the tsconfig.base.json paths. */
import swcAngularPreset from '@jscutlery/swc-angular-preset';

export default {
  displayName: 'demo',
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '/coverage/tests/demo',
  transform: {
    '^.+\\.(ts|mjs|js)$': [
      '@swc/jest',
      swcAngularPreset
    ],
    '^.+\\.(html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
