import React from 'react'

const AdminRoute = () => {
    const { state } = useContext(Store);
    const { userInfo } = state;
    return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}

export default AdminRoute