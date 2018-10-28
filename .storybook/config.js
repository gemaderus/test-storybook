import { configure, addDecorator, setAddon } from '@storybook/react'
import React from 'react'
import styles from '../src/styles/styles.css'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo, setDefaults } from '@storybook/addon-info';

import './storybook.css';

const req = require.context('../src', true, /\.story.js$/)
addDecorator(withKnobs)

setDefaults ({
  inline: true,
})

// App-wide div decorator
// Every story will be wrapped inside
addDecorator(story => <div id="app">{story()}</div>)

function loadStories() {
  const files = req.keys()
  files.sort().forEach(filename => req(filename))
}

configure(loadStories, module)
