// Allows simplified defiintion of expected react proprties, along
// with the expected property type and default

// makePropSpec
//   make react property specification
//   propsSpec = [
//     [ prop1Name, prop1ReactType, prop1Default  ],
//     [ prop2Name, prop2ReactType, prop2Default  ]
//   ]
export const makePropsSpec = propsSpec => propsSpec.reduce(
  (acc, propSpecEntry) => addPropSpecEntry(acc, ...propSpecEntry), {})

const addPropSpecEntry = (toThisSpec, propName, propType, propDefault) => ({
  propTypes: {
    ...(toThisSpec.propTypes || {}),
    [propName]: propType
  },
  defaultProps: {
    ...(toThisSpec.defaultProps || {}),
    [propName]: propDefault },
})

export const applyPropsSpec = (component, propsSpec) => {
  component.propTypes = propsSpec.propTypes
  component.defaultProps = propsSpec.defaultProps
  return component
}
