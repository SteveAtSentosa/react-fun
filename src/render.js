import { createElement } from 'react'
import { applyPropSpec } from './propSpec'

export const funComponent = (component, propSpec) => {
  const toRender = propSpec ? applyPropSpec(component, propSpec) : component
  return (...args) => createElement(toRender, ...args)
}

export const Div = (...args) => createElement('div', ...args)
export const Span = (...args) => createElement('span', ...args)
export const P = (...args) => createElement('p', ...args)
export const Strong = (...args) => createElement('strong', ...args)
