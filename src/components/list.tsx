import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { IListState } from "../models/List";
import { firebaseDb } from "../firebase";
import { FecthList } from "../actions/List";

const List = () => {
  let list = useSelector((state: IListState) => state.Register.wbsList);
  let projectRef = firebaseDb.collection("Projects");
  let dblist = projectRef
    .where("creator", "==", "mitsutaka")
    .get()
    .then(snapshot => {
      snapshot.forEach(function(doc) {
        console.log(doc);
        console.log(doc.data());
      });
    });
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
