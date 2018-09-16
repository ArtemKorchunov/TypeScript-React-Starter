import * as React from "react";
import { connect } from "react-redux";

import { Main as Component } from "../../components";
import { IStoreState } from "../../redux/storeType";

//Actions
import { addCount } from "../../redux/todo/actions";

export interface Props {
  count: number;
  addCount: (arg: number) => void;
}

class Container extends React.PureComponent<Props, object> {
  render(): JSX.Element {
    return <Component {...this.props} />;
  }
}

export function mapStateToProps({ todo: { count } }: IStoreState) {
  return {
    count
  };
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
  mapStateToProps,
  { addCount }
)(Container);
