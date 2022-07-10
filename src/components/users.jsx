import React, { useState } from "react";
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== userId));
    };
    const handlePhrase = (number) => {
        let wordHuman;
        if (number > 4) {
            wordHuman = " человек тусанут с тобой сегодня";
        } else if (number <= 4 && number > 1) {
            wordHuman = " человека тусанут с тобой сегодня";
        } else {
            wordHuman = " человек тусанет с тобой сегодня";
        }
        return wordHuman;
        
    };
    const classOfPhrase = (number) => {
        let typeOfColor;
        if (number > 0) {
            typeOfColor = "primary";
        } else  {
            typeOfColor = "danger";
        };
        return typeOfColor;  
    };   

    return (
    <>
    <h1><span className={`badge m-2 bg-${classOfPhrase(users.length)}`}>{users.length + `${handlePhrase(users.length)}`}</span></h1>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
                {users.map((user)=> (
                    <tr key={user._id}>
                    <>
                    <td>{user.name}</td>  
                    <td>
                            {user.qualities.map((quality)=>{return <span className={`badge m-2 + bg-${quality.color}`}> 
                                {quality.name}
                                </span>
                            })}
                    </td> 
                    <td>{user.profession.name}</td>  
                    <td>{user.completedMeetings}</td> 
                    <td>{user.rate}</td>
                    <td>
                    <button  type="button" className="btn btn-danger" 
                    onClick={()=>handleDelete(user._id)}>
                        Удалить
                    </button> 
                    </td>
            </>
            </tr>
            ))}
        </tbody>
    </table>
    </>
        );
};

export default Users;