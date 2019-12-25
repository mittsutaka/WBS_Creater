import React, { ReactChildren } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { IRegisterState, IRegisterProps } from "../models/register";

const ListView = (props: IRegisterProps) => {
  let ini: IRegisterState = { id: 3, name: "test" };
  let wbsList: IRegisterState[] = [{ id: 3, name: "登録" }];
  wbsList.push(ini);
  //props.wbsLists.push(ini);
  console.log(props.wbsLists);

  return (
    <div className="list">
      {wbsList.map(wbs => {
        return (
          <Card className="list__card">
            <CardContent>
              <Typography>{wbs.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ListView;
