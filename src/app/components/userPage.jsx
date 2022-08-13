import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });

    const history = useHistory();
    const handleReturnAllUsers = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <h3>
                    {" "}
                    Качества:
                    {user.qualities.map((item) => (
                        <span
                            className={"badge m-1 bg-" + item.color}
                            key={item._id}
                        >
                            {item.name}
                        </span>
                    ))}
                </h3>
                <h3>Количество встреч: {user.completedMeetings}</h3>
                <h2>Рейтинг: {user.rate}</h2>
                <button
                    onClick={() => {
                        handleReturnAllUsers();
                    }}
                >
                    Все пользователи
                </button>
            </>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
