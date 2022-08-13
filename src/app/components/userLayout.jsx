import React from "react";
import UserPage from "./userPage";
import UserList from "./userList";
import { useParams } from "react-router-dom";

const UserLayout = () => {
    const params = useParams();
    const { userId } = params;

    return <>{userId ? <UserPage userId={userId} /> : <UserList />}</>;
};

export default UserLayout;
