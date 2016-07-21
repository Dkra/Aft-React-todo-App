import { CHANGE_VISIBILITY_FITLER } from '../actions/'

export default function (state = 'All', action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_VISIBILITY_FITLER:
      console.log('---------');
      console.log(action.filter);
      console.log('---------');
      return action.filter
  }

  return state
}
