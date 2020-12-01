import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom'


import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
) 

const AddExpensePage = () => (
  <div>
    This is from my add expense component.
  </div>
)

const EditExpensePage = () => (
  <div>
    EditExpensePage
  </div>
)

const HelpPage = () => (
  <div>
    Help page
  </div>
)

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Home</Link>
    <Link to="/create">Create Expense</Link>
    <Link to="/edit">Edit Expense</Link>
    <Link to="/help">Help</Link>

  </header>
)

const routes = (
  <Router>
    <div>
    <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={ AddExpensePage }/>
      <Route path="/edit" component={ EditExpensePage }/>
      <Route path="/help" component={ HelpPage }/>
      <Route component={NotFoundPage} />
    </Switch>

    </div>
  </Router>
)
ReactDOM.render(routes, document.getElementById("app"));