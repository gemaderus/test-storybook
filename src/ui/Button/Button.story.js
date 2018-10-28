import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

const stories = storiesOf('Button', module);

stories.add(
  'Button Hamburger',

  withInfo('')(() => (
    <div className="button--container">
      <Button />
    </div>
  ))
).add(
  'Button Hamburger opened',

  withInfo('')(() => (
    <div className="button--container menu--open">
      <Button />
    </div>
  ))
);