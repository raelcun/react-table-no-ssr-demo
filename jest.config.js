module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    modulePaths: ['<rootDir>/src'],
    testEnvironment: 'node',
    testRegex: '\\.(test|integration)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['./src/jestSetup.ts'],
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
};
