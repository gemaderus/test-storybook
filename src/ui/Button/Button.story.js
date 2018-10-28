import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

const stories = storiesOf('Button', module);

stories.add(
  'Basic Content',

  withInfo('')(() => (
    <div className="button--container">
      <Button />
    </div>
  ))
);