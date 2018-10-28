import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Navigation from './Navigation';

const stories = storiesOf('Navigation', module);

stories.add(
  'Basic Navigation',

  withInfo('')(() => (
    <div className="navigation--container">
      <Navigation />
    </div>  
  ))
);