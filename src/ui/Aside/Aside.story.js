import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Aside from './Aside';

const stories = storiesOf('Aside', module);

stories.add(
  'Basic Aside Mobile',

  withInfo('')((item, index) => (
    <div className="menu--open aside--container">
      <Aside item={item} index={index} />
    </div>
  ))
);
