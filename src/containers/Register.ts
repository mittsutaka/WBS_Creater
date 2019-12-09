import { connect } from "react-redux";
import Register from "../components/register";
import login from "../components/setting";
import { IRegisterState } from "../models/register";
import { Dispatch } from "react";
import { registerWbs } from "../actions/Register";

const mapStateToProps = (state: IRegisterState) => ({
  id: state.id,
  name: state.name
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return dispatch(registerWbs);
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
