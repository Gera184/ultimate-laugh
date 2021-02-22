import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./components/pages/main/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoveAndSex } from "./components/pages/categories/love-and-sex/LoveAndSex";
import { NaughtyJokes } from "./components/pages/categories/naughty-jokes/NaughtyJokes";
import { LongJokes } from "./components/pages/categories/long-jokes/LongJokes";
import { DifferentJokes } from "./components/pages/categories/different-jokes/DifferentJokes";
import { Animals } from "./components/pages/categories/animals/Animals";
import { Religion } from "./components/pages/categories/religion/Religion";
import { Nations } from "./components/pages/categories/nations/Nations";
import Politics from "./components/pages/categories/politics/Politics.js";

export default () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Main} />
          <Route path="/love-and-sex" component={LoveAndSex} />
          <Route path="/naughty-jokes" component={NaughtyJokes} />
          <Route path="/long-jokes" component={LongJokes} />
          <Route path="/different-jokes" component={DifferentJokes} />
          <Route path="/animals-jokes" component={Animals} />
          <Route path="/religion-jokes" component={Religion} />
          <Route path="/nations-jokes" component={Nations} />
          <Route path="/politics-jokes" component={Politics} />
        </Switch>
      </Router>
    </div>
  );
};
