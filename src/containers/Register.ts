import {connect} from "react-redux";
import Register from "../components/register";
import login from "../components/setting";
import {IRegisterState} from "../models/register";
import { Dispatch } from "react";
import {RegisterActions} from "../actions/Register";

const mapStateToProps = (state:IRegisterState)=>({
    id:state.id,
    name:state.name
});

const mapDispatchToProps = (dispatch:Dispatch<any>)=>({
    dispatch(RegisterActions);
})





