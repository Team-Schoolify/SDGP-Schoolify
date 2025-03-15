// module.exports = {
//     testEnvironment: "jsdom",
//     transform: {
//         "^.+\\.(js|jsx)$": "babel-jest"
//     },
//     moduleNameMapper: {
//         "^@/(.*)$": "<rootDir>/src/$1"
//     }
// };
//
// module.exports = {
//     testEnvironment: "jsdom",
//     transform: {},
//     extensionsToTreatAsEsm: [".jsx"],
//     globals: {
//         "ts-jest": {
//             useESM: true,
//         },
//     }
// };

//
// module.exports = {
//     testEnvironment: "jsdom",
//     transform: {
//         "^.+\\.(js|jsx)$": "babel-jest" // ✅ Ensure Babel processes JSX
//     },
//     moduleNameMapper: {
//         "^@/(.*)$": "<rootDir>/src/$1"  // ✅ Fix alias resolution
//     },
//     extensionsToTreatAsEsm: [".jsx"], // Keep only .jsx here
//     globals: {
//         "ts-jest": {
//             useESM: true
//         }
//     }
// };

// export default {
//     testEnvironment: "jsdom",
//     transform: {
//         "^.+\\.(js|jsx)$": "babel-jest"
//     },
//     moduleNameMapper: {
//         "^@/(.*)$": "<rootDir>/src/$1"
//     },
//     maxWorkers: 1,
// };

// export default {
//     testEnvironment: 'jsdom',
//     moduleNameMapper: {
//         '^@/(.*)$': '<rootDir>/$1',
//         // or if you specifically want `@/app/...` -> `<rootDir>/app/...`:
//         '^@/app/(.*)$': '<rootDir>/app/$1',
//     },
//     setupFilesAfterEnv: ['@testing-library/jest-dom'],
// };


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
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    // Optionally, if needed, tell Jest to treat these files as ESM
    extensionsToTreatAsEsm: [ '.jsx', '.ts', '.tsx'],
};

export default createJestConfig(customJestConfig);