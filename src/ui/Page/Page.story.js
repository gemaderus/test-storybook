import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import App from '../../App';

const stories = storiesOf('Page', module);

stories.add(
  'Page',

  withInfo('')(() => (
    <App />
  ))
);
