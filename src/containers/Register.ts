import { connect } from "react-redux";
import Register from "../components/register";
import { IRegisterState } from "../models/Register";
import { Dispatch } from "react";
import { RegisterActions } from "../actions/Register";

const mapStateToProps = (state: IRegisterState) => ({
  id: state.id,
  name: state.name
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  registerWbs: () => dispatch(RegisterActions.registerWbs)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
