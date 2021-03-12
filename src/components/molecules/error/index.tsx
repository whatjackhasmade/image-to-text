import React from 'react';
import { isAnObject } from 'to-text';

import StyledError from './error.styles';

type DisplayErrorProps = {
  /**
   * The primary content of the Error component, replaces 'error' prop if found
   */
  children?: React.ReactNode;
  /**
   * Additional classNames to apply utility and helper classes
   */
  className?: string;
  /**
   * Alternative method of setting error value for component.
   * Error describes the application error to the user
   */
  error?: any;
  id?: string;
  log?: boolean;
  /**
   * Title gives a short one liner description of the error
   */
  title?: string;
};

export const DisplayError: React.SFC<DisplayErrorProps> = (props: DisplayErrorProps) => {
  const { children, className, error, id, log = false, title } = props;

  let classList = `error`;
  if (className) classList += ` ${className}`;

  const errorIsObject = error && isAnObject(error);
  const errorIsText = error && !errorIsObject;

  let message;

  if (errorIsText) message = error;
  if (errorIsObject) message = error.message;
  if (children) message = children;

  if (!message) return null;
  if (log && errorIsText) console.error(error);
  if (log && errorIsObject) console.error(error.message);

  // Check if network errors has a length greater than 0
  const networkErrors = error?.networkError?.result?.errors;
  const hasNetworkErrors: boolean = networkErrors?.length > 0;

  // If no error or array of errors is found, don't render component
  if (!error?.message && !hasNetworkErrors) return null;

  // Error log results to browser
  if (!error.message) console.error(error);
  if (error.message) console.error(error.message);

  const stringError = (error: Error | string): string => {
    const isErrorObject = error instanceof Error;

    if (isErrorObject) {
      // Convert error object to string
      let message = error.toString();
      message = message.replace(`GraphQL error: `, ``);
      message = message.split(`GraphQL`)[0];
      message = message.replace(`Error: Error:`, `Error:`);
      return message;
    }

    // @ts-ignore
    const hasMessage = error?.message;
    // @ts-ignore
    if (hasMessage) return String(error.message);

    // The error needs to be a string
    return String(JSON.stringify(error));
  };

  if (hasNetworkErrors) {
    return networkErrors.map((error, i) => (
      <StyledError className={classList} key={`${stringError(error)}-${i}`}>
        {title && <strong className="error__title">{title}</strong>}
        <p id={id} data-error-type="graphql-error">
          {stringError(error)}
        </p>
      </StyledError>
    ));
  }

  return (
    <StyledError className={classList}>
      {title && <strong className="error__title">{title}</strong>}
      <p id={id} data-error-type="graphql-error">
        {stringError(error)}
      </p>
    </StyledError>
  );
};

export default DisplayError;
