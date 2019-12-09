import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {IRegisterProps} from "../models/register";

interface Props {}

interface State {}

const tableHeadCells: string[] = ["大項目", "小項目", "内容", "工数", "進捗"];

const InputBox: React.FC = () => {
  return <TextField className="h-50" variant="outlined"></TextField>;
};

const InputRow: React.FC = () => {
  return (
    <TableRow>
      <TableCell className="min-w-100">
        <InputBox />
      </TableCell>
      <TableCell className="min-w-100">
        <InputBox />
      </TableCell>
      <TableCell className="min-w-100">
        <InputBox />
      </TableCell>
      <TableCell className="min-w-100">
        <InputBox />
      </TableCell>
      <TableCell className="min-w-100">
        <InputBox />
      </TableCell>
      <TableCell className="w-100">
        <Icon>edit</Icon>
        <Icon className="ml-10">restore_from_trash</Icon>
      </TableCell>
    </TableRow>
  );
};

const Register = (props:IRegisterProps) => {
  
  const onClickButton = props.onClickButton;
  
  return (
    <div>
      <div className="register-head">
        <TextField variant="outlined" label="WBS名称" className="w-50p" />
        <div className="ml-20">
          <Button variant="contained" size="medium" color="primary" onClick={onClickButton}>
            <Icon className="mr-5">add</Icon>
            登録
          </Button>
        </div>
      </div>
      <Paper>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeadCells.map((cell, index) => {
                  return <TableCell key={index}>{cell}</TableCell>;
                })}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <InputRow />
              <InputRow />
              <InputRow />
            </TableBody>
          </Table>
        </div>
      </Paper>
    </div>
  );
};

export default Register;
