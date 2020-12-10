import authReducer from '../../reducers/auth'

test('should setup login correctly', () => {
  const action = {
    type: 'LOG_IN',
    uid: '123'
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid)
})

test('should setup logout correctly', () => {
  const action = {
    type: 'LOG_OUT'
  }
  const state = authReducer({uid: 'anything'}, action);
  expect(state).toEqual({})
})
