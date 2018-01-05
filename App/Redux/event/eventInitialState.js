'use strict'

import Immutable from 'immutable'

let InitialState = Immutable.Record({
  eventsMap: Immutable.Map(),
  isFetching: false,
  error: null,
})

export default InitialState
