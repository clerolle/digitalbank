import AddUsers from '@/components/addusers/AddUsers';
import ResponsiveAppBar from '@/components/appbar/AppBar';
import React from 'react';

const User = () => {
    return (
        <div>
            <ResponsiveAppBar/>
            <AddUsers/>
        </div>
    );
};

export default User;