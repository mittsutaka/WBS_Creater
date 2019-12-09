import React, { ReactChildren } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { IRegisterState } from "../models/register";

const ListView = (props:IRegisterState[]) => {
  const wbsList = props;
  return (
    <div className="list">
      {wbsList.map(wbs => {
        return (
          <Card className="list__card">
            <CardContent>
              <Typography>{wbs}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ListView;
