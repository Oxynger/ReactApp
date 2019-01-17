/*eslint-disable*/

export const ping = store => next => action => {
  console.log(
    `Action type: ${action.type}, Addition event data: ${action.payload}`
  )
  return next(action)
}

/*eslint-enable*/
