import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Aside from './Aside';

const stories = storiesOf('Aside', module);

storiesOf('Aside', module)
  .add('Basic Aside Mobile', (item, index) => (
    <div className="menu--open">
      <Aside />
    </div>
  ))
