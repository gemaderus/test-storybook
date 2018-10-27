import { configure, addDecorator, setAddon } from '@storybook/react'
import React from 'react'
import styles from '../src/styles/styles.css'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo, setDefaults } from '@storybook/addon-info';

import './storybook.css';

const req = require.context('./stories', true, /\.js$/)
addDecorator(withKnobs)

setDefaults ({
  inline: true,
})

// App-wide div decorator
// Every story will be wrapped inside
addDecorator(story => <div id="app">{story()}</div>)

function loadStories() {
  // const files = req.keys()
  // files.sort().forEach(filename => req(filename))
  require('../src/ui/Button/Button.story.js');
  require('../src/ui/Footer/Footer.story.js');
  require('../src/ui/Header/Header.story.js');
  require('../src/ui/Main/Main.story.js');
  require('../src/ui/Navigation/Navigation.story.js');
  require('../src/ui/Box/Box.story.js');
  require('../src/ui/Aside/Aside.story.js');
  require('../src/ui/Main/Main.story.js');
  require('../src/ui/Page/Page.story.js');

}

configure(loadStories, module)
