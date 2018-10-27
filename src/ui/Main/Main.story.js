import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Data from '../Data/Data';

import Main from './Main';

const stories = storiesOf('Main', module);

stories.add(
  'Main content',

  withInfo('')(() => (
    <Main data={Data}/>
  ))
);