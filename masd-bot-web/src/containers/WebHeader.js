import { connect } from 'react-redux'
import { selectModel } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    models: state.models,
    selectedModel: state.selectedModel,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModelClicked: (model) => {
      dispatch(selectModel(model))
    }
  }
}

const WebHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default WebHeader;
