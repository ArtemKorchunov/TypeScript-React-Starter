import * as React from "react";
import { connect } from "react-redux";

import { Login as Component } from "../../components";
import { IStoreState } from "../../redux/storeType";

//Actions
import { signUpRequest } from "../../redux/user/actions";

export interface Props {
  signUpRequest?: (arg: number) => void;
}

class Container extends React.Component<Props, object> {
  state= {}
  componentDidMount() {
    this.setState({})
  }
  render(): JSX.Element {
    return <Component {...this.props} />;
  }
}

//Another way to dispatch
// export const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators(
//     {
//       addIncrement: actions.addCount
//     },
//     dispatch
//   );

export default connect(
  null,
  { signUpRequest }
)(Container);
