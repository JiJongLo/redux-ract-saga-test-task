import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UsersList from '../components/UsersList';
import UserForm from '../components/UserForm';
import { requestUserAdding, getUsers } from '../actions/requestActions';

const style = {
    backgroundColor: 'white',
    marginTop: '50px',
    padding: '10px'
};
class FormContainer extends Component {
    componentDidMount(){
        this.props.getUsers();
    }
    render() {
        return (
            <div className="container" style={style}>
                <UserForm onAddUser={this.props.addUser}/>
                <UsersList users={this.props.listUsers}/>
            </div>
        )
    };
};

function mapStateToProps(state) {
    return {
        listUsers: state.user.listUsers
    }
}

function mapDispatchToProps(dispatch) {
    return({
        addUser: (user) => dispatch(requestUserAdding(user)),
        getUsers: () => dispatch(getUsers())
    })
};

FormContainer.propTypes = {
    getUsers : PropTypes.func.isRequired,
    addUser : PropTypes.func.isRequired,
    listUsers: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (FormContainer);
