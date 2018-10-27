import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Header from './Header';

const stories = storiesOf('Header', module);

stories.add(
  'Basic header',

  withInfo('')(() => (
    <Header />
  ))
);