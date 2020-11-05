import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Indexmain from './components/indexmain';
import Login from './components/login';
import Signup from './components/signup';
import Otp from './components/otp';
import Hooks from './components/hooks';
import Home from './components/home';
import Home1 from './components/home1';
import Ticketpage from './components/ticketpage';
import Home11 from './components/home1';
import Tournamentdetails from './components/tournamentdetails';
import Scratchcard from './components/scratchcard';
import Shoppage from './components/shoppage';
import Mywallet from './components/mywallet';
import Account from './components/account';
import Login1 from './components/logincheck';
import DailyDraw from './components/dailydraws';
import WeeklyDraw from './components/weeklydraw';
import MonthlyDraw from './components/monthlydraw';
import Scratchpageone from './components/scratchcardpage1';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={"/"} component={Indexmain} />
          <Route exact path={"/login"} component={Login1} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/otp"} component={Otp} />
          <Route exact path={"/home"} component={Home1} />
          <Route exact path={"/ticketpage"} component={Ticketpage}/>
          <Route exact path={"/scratchcardpage"} component={Scratchcard}/>
          <Route exact path={"/shop"} component={Shoppage}/>
          <Route exact path={"/wallet"} component={Mywallet}/>
          <Route exact path={"/account"} component={Account}/>
          <Route exact path={"/tournamentdetails"} component={Tournamentdetails}/>
          <Route exact path={"/dailydraw"} component={DailyDraw}/>
          <Route exact path={"/weeklydraw"} component={WeeklyDraw}/>
          <Route exact path={"/monthlydraw"} component={MonthlyDraw}/>
          <Route exact path={"/scratch"} component={Scratchpageone}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
