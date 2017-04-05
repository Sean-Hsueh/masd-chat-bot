import { combineReducers } from 'redux'

const selectedModel = (state = 0, action) => {
  switch(action.type){
    case 'SELECT_MODEL':
    return action.idx;
    default:
      return state;
  }
}

const models = (state = ["M8", "M9"], action) => {
  switch(action.type){
    case 'RECEIVE_MODELS':
      return action.models;
    default:
      return state;
  }
}

const issues = (state = "", action) => {
  switch (action.type){
    case 'TEXT_FIELD_ISSUE_CHANGED':
      console.log('issue: ', state, action.value)
      return action.value;
    default:
      return state;
  }
};

const solutions = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_SOLUTIONS':
      console.log('solutions: ', solutions);
      return action.solutions;
    default:
      return state;
  }
};

const chatBotApp = combineReducers({
  selectedModel,
  models,
  issues,
  solutions
})

export default chatBotApp