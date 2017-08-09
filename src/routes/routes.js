import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import FormContainer from '../containers/FormContainer';

export default (
< Route
path = "/"
component = { App } >
    < IndexRoute
component = { FormContainer } / >
    < / Route >
)
