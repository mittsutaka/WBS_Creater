import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { IAppState } from "../models/State";
import { useDispatch } from "react-redux";
import { FecthList } from "../apis/firestore";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { RegisterProject } from "../actions/List";
import { IProject } from "../models/Db";

const List = () => {
  let list = useSelector((state: IAppState) => state.List.projects);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  let newProject: IProject = {
    id: 0,
    name,
    creator: "mitsutaka",
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now())
  };
  const register = () => {
    dispatch(RegisterProject(newProject));
    setName("");
  };


  useEffect(() => FecthList(dispatch), [dispatch]);

  return (
    <div>
      <div className="register-head">
        <TextField value={name} variant="outlined" label="プロジェクト名" className="w-50p" onChange={e => setName(e.target.value)} />
        <div className="ml-20">
          <Button variant="contained" size="medium" color="primary" onClick={register}>
            <Icon className="mr-5">add</Icon>
            新規登録
          </Button>
        </div>
      </div>
      <div className="list">
        <Route>
          {list.map((project, index) => {
            return (
              <Link key={`project-${index}`} to={`/Edit/${project.id}`}>
                <Card className="list__card">
                  <CardActionArea
                    className="list__card-action-area"
                  >
                    <CardContent>
                      <Typography>{project.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
        </Route>
      </div>
    </div>
  );
};

export default List;
