import Hello from "../../components/Hello";
import * as actions from "../../redux/actions";
import { IStoreState } from "../../types";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

export function mapStateToProps({ todo: { count } }: IStoreState) {
  return {
    count
  };
}

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addIncrement: actions.addCount
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
