import * as React from 'react'
import { Hello } from '../hello'
import { createRoot } from 'react-dom/client'

describe('CounterButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Hello />)
    root.unmount()
  })
})
