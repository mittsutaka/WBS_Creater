import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export default function ListView() {
  let num:number =10;
  let i = Array<number>(num).fill(1);

  return (
    <div className="list">
      {i.map((index) => {
        return (
          <Card key={index+10} className="list__card">
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
