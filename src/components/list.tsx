import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const ListView: React.FC = () => {
  const NUM: number = 10;
  let i: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <div className="list">
      {i.map(index => {
        return (
          <Card key={index + NUM} className="list__card">
            <CardContent>
              <Typography>test</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ListView;
