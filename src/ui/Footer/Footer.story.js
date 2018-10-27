import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Footer from './Footer';

const stories = storiesOf('Footer', module);

stories.add(
  'Basic footer',
  
  withInfo('')(() => (
    <Footer/> 
  ))
);
