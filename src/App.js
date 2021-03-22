import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";

import Layout from "./components/Layout/Layout";
import Spinner from "./components/ui/Spinner/Spinner";

const Home = React.lazy(() => import("./pages/Home/Home"));
const OurStory = React.lazy(() => import("./pages/OurStory/OurStory"));
const Venue = React.lazy(() => import("./pages/Venue/Venue"));
const Travel = React.lazy(() => import("./pages/Travel/Travel"));
const ThingsToDo = React.lazy(() => import("./pages/ThingsToDo/ThingsToDo"));
const FAQ = React.lazy(() => import("./pages/FAQ/FAQ"));
const RSVP = React.lazy(() => import("./pages/RSVP/RSVP"));
const Error404 = React.lazy(() => import("./pages/Error404/Error404"));

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Layout className="app">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/my-wedding-website" component={Home} />
            <Route path="/my-wedding-website/our-story" component={OurStory} />
            <Route exact path="/my-wedding-website/venue" component={Venue} />
            <Route path="/my-wedding-website/travel" component={Travel} />
            <Route exact path="/my-wedding-website/things-to-do" component={ThingsToDo} />
            <Route path="/my-wedding-website/FAQ" component={FAQ} />
            <Route path="/my-wedding-website/RSVP" component={RSVP} />
            <Route render={() => <Error404 />} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  </BrowserRouter>
);

export default App;
