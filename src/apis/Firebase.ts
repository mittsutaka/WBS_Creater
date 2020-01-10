import { firebaseDb } from "../firebase";

export const FetchDatabase = () => {
  return new Promise((resolve, reject) => {
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
    resolve(dblist);
  });
};
