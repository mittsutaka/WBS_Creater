import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";


const LoginView = () => {
  return (
    <div className="login">
      <h1>ログインページ</h1>
      <TextField id="standard-basic" label="E-mail"/>
      <TextField id="standard-basic" label="Password"/>
      <div>
        <Button>ログイン</Button>
      </div>
    </div>
  );
};

export default LoginView;
