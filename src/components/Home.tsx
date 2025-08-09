import React, { useEffect, useState } from 'react';
import type { User } from '../models/User';
import UsersService from '../services/UsersService';

const userId = 1

const Home: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UsersService.getById(userId)
            .then(data => {
                setUser(data);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;

    return <h1>Welcome to the Home Page</h1>;
};

export default Home;