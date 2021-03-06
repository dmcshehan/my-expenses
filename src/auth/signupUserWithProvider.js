import firebase, { db } from "./firebase";
import googleProvider from "./providers/google";

//import { addDailyExpensesList } from "../store/actionCreators/expenseList";

export default function signUpUser(type) {
  let provider = null;
  switch (type) {
    case "google":
      provider = googleProvider;
      break;
    default:
      break;
  }

  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { additionalUserInfo, user } = result;
        const { isNewUser } = additionalUserInfo;
        const { uid } = user;

        console.log(user);

        if (isNewUser) {
          // Add a new document in collection "cities"
          db.collection("users")
            .doc(uid)
            .set({
              uid,
            })
            .then(function () {
              console.log("Document successfully written!");
              //dispatch(addDailyExpensesList(uid));
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            });
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error.code, error.message);
      });
  };
}
