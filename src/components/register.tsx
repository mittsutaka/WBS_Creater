import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

interface Props {}

interface State {}

let tableHeadCells: string[] = ["大項目", "小項目", "内容", "工数", "進捗"];

const InputBox: React.FC = () => {
  const cls = classes();
  return <TextField className={cls.inputBox} variant="outlined"></TextField>;
};

const classes = makeStyles((theme: Theme) =>
  createStyles({
    trash: {
      marginLeft: 10
    },
    iconsCell: {
      width: 100
    },
    inputBox: {
      height: 50
    }
  })
);

const Register: React.FC = () => {
  const cls = classes();
  return (
    <Paper>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeadCells.map(cell => {
                return <TableCell>{cell}</TableCell>;
              })}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <InputBox />
              </TableCell>
              <TableCell>
                <InputBox />
              </TableCell>
              <TableCell>
                <InputBox />
              </TableCell>
              <TableCell>
                <InputBox />
              </TableCell>
              <TableCell>
                <InputBox />
              </TableCell>
              <TableCell className={cls.iconsCell}>
                <Icon>edit</Icon>
                <Icon className={cls.trash}>restore_from_trash</Icon>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default Register;