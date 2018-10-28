import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from './Box';

const stories = storiesOf('Box', module);

stories.add(
  'Basic Content',

  withInfo('')((item) => (
    <Box item={item} />
  ))
);