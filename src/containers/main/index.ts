import { connect } from "react-redux";

import Hello from "../../components/main";
import { addCount } from "../../redux/todo/actions";
import { IStoreState } from "../../redux/storeType";

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
)(Hello);
