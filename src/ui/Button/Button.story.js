import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

const stories = storiesOf('Footer', module);

storiesOf('Button', module)
  .add('Button', () => (
    <Button />
  ));
