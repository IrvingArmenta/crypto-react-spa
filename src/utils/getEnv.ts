export function getEnv() {
  const production = process.env.NODE_ENV === 'production';
  const development = process.env.NODE_ENV === 'development';

  return { isProduction: production, isDevelopment: development };
}
