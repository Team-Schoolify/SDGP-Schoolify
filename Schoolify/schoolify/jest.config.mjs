import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    // Path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
    experimentalVmModules: true,
});

const customJestConfig = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^@/app/(.*)$': '<rootDir>/app/$1',
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    // Optionally, if needed, tell Jest to treat these files as ESM
    extensionsToTreatAsEsm: [ '.jsx', '.ts', '.tsx'],
};

export default createJestConfig(customJestConfig);