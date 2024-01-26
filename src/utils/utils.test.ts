import { currencyFormat } from './currencyFormat';
import { getEnv } from './getEnv';

describe('Utils', () => {
  describe('currencyFormat.ts', () => {
    it('should return number as a string with dollar sign attached to it', () => {
      const money = currencyFormat(100);
      expect(money).toBe('$100.00');
    });
  });

  describe('getEnv.ts', () => {
    it('should return the current expected node environment', () => {
      const isTest = getEnv().isTest;
      expect(isTest).toBe(true);
    });
  });
});
