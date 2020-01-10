import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { FecthList } from "../actions/List";
import { IAppState } from "../models/State";

const List = () => {
  let list = useSelector((state: IAppState) => state.List.projects);
  const dispatch = useDispatch();
  const fecth = () => dispatch(FecthList());
  fecth();
  return (
    <div className="list">
      {list.map(wbs => {
        return (
          <Card key={wbs.id} className="list__card">
            <CardContent>
              <Typography>{wbs.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
