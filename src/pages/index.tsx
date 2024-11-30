import {FC, useState} from 'react';
import UserList from '@/components/UserList';
import AddUserForm from '@/components/AddUserForm';
import {User} from "@/utils/types";
import axiosInstance from "@/utils/axiosInstance";

interface HomeProps {
    initialUsers: User[]
}

export async function getServerSideProps() {
    const res = await axiosInstance.get('/users');
    const initialUsers = res.data;
    return {props: {initialUsers}};
}


const Home: FC<HomeProps> = ({initialUsers}) => {
    const [users, setUsers] = useState(initialUsers);

    const addUser = async (user: User) => {
        const response = await axiosInstance.post('/users', user);
        if (response.status === 201) {
            const newUser = await response.data;
            setUsers((prev) => [...prev, newUser]);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <AddUserForm onAddUser={addUser}/>
            <UserList users={users}/>
        </div>
    );
}


export default Home;