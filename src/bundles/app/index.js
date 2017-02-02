import React from 'react';

import boot from 'boot';

import Root from './Root';

boot(<Root />);

if (IS_DEV) {
  module.hot.accept('./Root', () => {
    boot(<Root />);
  });
}
