import React, { createContext, useState } from 'react';

export const APIKeyContext = createContext();

export const APIKeyProvider = (props) => {
  const [iexSandboxKey] = useState('Tpk_9f992899606244d096283bcf0205cb06');
  const [iexCloudKey] = useState('pk_7f2c17a5840745979d6358d1ddf3cf75');
  const [newsapiKey] = useState('c313a00cf6ba4c9d8cfa93b59840f525');
  const [fcsKey] = useState('tLRr0sFzLdlV7ETdz33crBypvFm5wLGyNjUHnOgNOqUQc');

  return (
    <APIKeyContext.Provider
      value={{ iexSandboxKey, iexCloudKey, newsapiKey, fcsKey }}
    >
      {props.children}
    </APIKeyContext.Provider>
  );
};
