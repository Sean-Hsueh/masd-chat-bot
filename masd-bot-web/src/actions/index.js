import fetch from 'isomorphic-fetch'

export const selectModel = (idx) => {
  return {
    type: 'SELECT_MODEL',
    idx
  }
}

export const receiveModels = (models) => {
  return {
    type: 'RECEIVE_MODELS',
    models
  }
}

export function fetchModels() {
  return dispatch => {
    return fetch(`https://qjzixxsok8.execute-api.ap-northeast-1.amazonaws.com/dev/models`)
      .then(response => response.json())
      .then(body => dispatch(receiveModels(body.models)))
  }
}

export const textFieldIssueChanged = (value) => {
  console.log('action textFieldIssueChanged got value: ', value)
  return {
    type: 'TEXT_FIELD_ISSUE_CHANGED',
    value
  }
};

export function sendResponses(responses) {
  return dispatch => {
    return fetch(`https://qjzixxsok8.execute-api.ap-northeast-1.amazonaws.com/dev/querydb`,
      {'method': 'POST'}
    )
      .then(response => response.json())
      .then(body => dispatch(receiveSolutions(body.response)))
  }
}

export const receiveSolutions = (solutions) => {
  console.log('action receiveSolutions got solutions: ', solutions)
  return {
    type: 'RECEIVE_SOLUTIONS',
    solutions
  }
}
