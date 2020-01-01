import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useSelector } from "react-redux";
import { IListState } from "../models/List";

const List = () => {
  let list = useSelector((state: IListState) => state.Wbs.wbsList);

  return <div className="list">
    {
      list.map(wbs => {
        return (
          <Card key={wbs.id} className="list__card">
            <CardContent>
              <Typography>{wbs.name}</Typography>
            </CardContent>
          </Card>
        );
      })
    }
  </div>
};

export default List;
