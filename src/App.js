import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getNotes } from './actions/notes.actions';
import {connect} from 'react-redux';
import './App.scss';
import Container from './components/container/Container';
import Login from './components/login/Login';
import NotesPage from './components/notes-page/NotesPage';

const App = ({getNotes, notes}) => {
    const fetchData = async() => {
        getNotes();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Router>
            <Container>
                <header>
                    <div className="logo">
                        <Link to="/"><b>Logo</b></Link>
                    </div>
                    <ul className="navigation">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/notes">Notes</Link>
                        </li>
                    </ul>
                </header>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <div>This is register page</div>
                    </Route>
                    <Route path="/notes">
                        <NotesPage notes={notes}/>
                    </Route>
                    <Route path="/">
                        <div>Home page will be here soon</div>
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};

const mapDispatchToProps = {
    getNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(App);