import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import User from '../components/UserProfile';
export default () => {
    return (
        <div>
           <UserHeader/>
           <User/>
        </div>
    )
}

