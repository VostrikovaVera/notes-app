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
                    <ul>
                        <li>
                            <Link to="/">Notes</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </header>

                <Switch>
                    <Route path="/">
                        <NotesPage notes={notes}/>
                    </Route>
                    <Route path="/login">
                        <Login />
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