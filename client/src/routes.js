import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './component/App';
import Compare from './component/Compare';
import Schedule from './component/Schedule';
import TeamView from './component/TeamView';
import PlayerView from './component/PlayerView';
import LeagueOverview from './component/LeagueOverview';
import YahooProfileImage from './containers/YahooProfileImage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PlayerView} />
    <Route path="compare" component={Compare} />
    <Route path="schedule" component={Schedule} />
    <Route path="player" component={PlayerView} />
    <Route path="YahooProfile" component={YahooProfileImage}>
      <Route path="LeagueOverview" component={LeagueOverview} />
      <Route path="TeamView" component={TeamView} />
    </Route>
	</Route>
);
