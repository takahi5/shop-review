import React, { ReactNode, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import firebase from "./firebase";
/* contexts */
import { UserContext } from "./contexts/userContext";
/* constants */
import { paths } from "./constants/paths";
/* components */
/* pages */
import { SignIn } from "./components/pages/SignIn";
import { ShopList } from "./components/pages/ShopList";
import { ReviewList } from "./components/pages/ReviewList";
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
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const doc = await firebase
          .firestore()
          .collection("users")
          .doc(authUser?.uid)
          .get();
        setUser({ id: doc.id, ...doc.data() } as User);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <PrivateRoute path={paths.reviews}>
            <ReviewList />
          </PrivateRoute>
          <PrivateRoute path={paths.shops}>
            <ShopList />
          </PrivateRoute>
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
    </UserContext.Provider>
  );
};

export default App;
