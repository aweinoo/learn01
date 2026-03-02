import { useEffect, useState } from "react";
import {getUsers} from '../repositories/user.repository';
import { User } from "../models/user.model";

export const useUserViewModel = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const loadUsers = async () => {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
        setLoading(false);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return {users, loading};

}
