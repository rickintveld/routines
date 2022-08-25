module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/Infrastructure/ServiceProviders/**/*',
        '!src/Infrastructure/Constant/**/*',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['json-summary', 'html'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/tests/**/*.test.(ts)'],
    testEnvironment: 'node',
};
