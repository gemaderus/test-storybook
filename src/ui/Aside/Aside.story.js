import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Aside from './Aside';

const stories = storiesOf('Aside', module);

stories.add(
  'Basic Content',

  withInfo('')((item) => (
    <div className="menu--open aside--container">
      <Aside item={item} />
    </div>
  ))
);
