import React from 'react';

export default function UsersList(props) {
    return (
        <div className="container" style={{marginTop: '20px'}}>
            <ul className="collection">
                {props.users.map((user, index)=> {
                    return (<li className="collection-item" key={user.name+index}>{user.name} colors : {user.colors.join(', ')}</li>)
                } )}
            </ul>
        </div>
    );
}
