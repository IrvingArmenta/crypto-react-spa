import { getEnv } from './getEnv';

type TestPropsType = {
  testid: string;
};

/**
 * Adds a `data-testid` attribute to an empty object conditionally based on the environment.
 *
 * @param testProps An object of type `TestPropsType` containing a required `testid` property.
 * This property specifies the value for the `data-testid` attribute.
 *
 * @remarks
 * This function helps attach test-specific attributes to elements in a controlled manner.
 * The `data-testid` attribute is commonly used by testing frameworks to identify and interact
 * with specific UI elements during testing. By conditionally adding the attribute only in test
 * environments, you ensure that production code remains clean and free of testing-related markup.
 */
export function setTestProps(testProps: TestPropsType): Record<string, string> {
  return !getEnv().isProduction ? { 'data-testid': testProps.testid } : {};
}
