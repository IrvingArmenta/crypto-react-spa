/**
 * Retrieves the current environment based on the `NODE_ENV` variable.
 *
 * @returns {object} An object containing:
 *   - isProduction: boolean indicating whether the environment is production.
 *   - isDevelopment: boolean indicating whether the environment is development.
 *   - isTest: boolean indicating whether the environment is test.
 */
export function getEnv() {
  const production = process.env.NODE_ENV === 'production';
  const development = process.env.NODE_ENV === 'development';
  const test = process.env.NODE_ENV === 'test';

  return {
    isProduction: production,
    isDevelopment: development,
    isTest: test
  };
}
