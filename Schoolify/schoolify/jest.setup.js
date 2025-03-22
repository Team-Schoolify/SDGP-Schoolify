// jest.setup.js

// Optionally increase the default timeout if your tests require more time.
// jest.setTimeout(30000);

// If you're using timers in your tests, you might configure fake timers here.
// jest.useFakeTimers();

// Add any global mocks or setup configuration needed for your tests.

// jest.setup.js
process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'dummy-key';

if (typeof window !== 'undefined') {
    window.scrollTo = () => {};
}