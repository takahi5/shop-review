import React, { ReactNode, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import firebase from "./firebase";
/* constants */
import { paths } from "./constants/paths";
/* components */
/* pages */
import { SignIn } from "./components/pages/SignIn";
import { MyPage } from "./components/pages/MyPage";
/* types */
import { User } from "./types/user";

const PrivateRoute = ({
  children,
  path,
  ...rest
}: {
  children: ReactNode;
  path: string;
}) => {
  const history = useHistory();
  firebase.auth().onAuthStateChanged((user) => {
    if (!user && path !== paths.signin) {
      history.push(paths.signin);
      return;
    }
  });
  return <Route {...rest} render={({ location }) => children} />;
};

const App: React.FC = () => {
  useEffect(() => {
    const unsbscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const doc = await firebase
          .firestore()
          .collection("users")
          .doc(user?.uid)
          .get();
        const userData = { id: doc.id, ...doc.data() } as User;
      }
    });

    return unsbscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute path={paths.mypage}>
          <MyPage />
        </PrivateRoute>
        <Route path={paths.signin}>
          <SignIn />
        </Route>
        <PrivateRoute path={paths.root}>
          <MyPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
