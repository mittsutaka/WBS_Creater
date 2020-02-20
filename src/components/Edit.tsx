import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/Register.scss";
import { FecthProject } from "../apis/firestore";
import { IProject } from "../models/Db";

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

const Edit = (props: any) => {
  let id = props.match.params.id;
  const [name, setName] = useState<string>("プロジェクト名");
  FecthProject(id).then((project: IProject) => {
    //projectをstoreに保存する処理を書く
    setName(project.name);
  });
  return (
    <div>
      <div className="register-head">
        <TextField value={name} variant="outlined" label="プロジェクト名" className="w-50p" />
        <div className="save-btn">
          <Button variant="contained" size="medium" color="primary">
            保存
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

export default Edit;
