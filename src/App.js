import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import { deepOrange500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class App extends React.Component {
    render() {
        const { children } = this.props;
        return (
            < MuiThemeProvider
        muiTheme = { muiTheme } >
            < div
        className = "app" >
            < Header / >
            { children }
            < / div >
            < / MuiThemeProvider >
    )
        ;
    }
}

export default App;
