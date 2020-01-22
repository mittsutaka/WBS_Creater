import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useSelector } from "react-redux";
import { IAppState } from "../models/State";
import { useDispatch } from "react-redux";
import { FecthList } from "../apis/firestore";

const List = () => {
  let list = useSelector((state: IAppState) => state.List.projects);
  const dispatch = useDispatch();
  useEffect(() => FecthList(dispatch), [dispatch]);

  return (
    <div className="list">
      {list.map((project, index) => {
        return (
          <Card key={`project-${index}`} className="list__card">
            <CardContent>
              <Typography>{project.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
