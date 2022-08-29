// For the purposes of correctly mocking the window object in Jest,
// this is a safe way of returning it for tests to work as expected.
export default function getWindow(): typeof window {
  if (typeof window !== 'object') {
    throw new Error('window not available');
  }

  return window;
}
