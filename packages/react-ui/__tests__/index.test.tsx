import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello } from '../hello'

describe('CounterButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Hello />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
