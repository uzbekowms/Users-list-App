import {User} from "@/utils/types";
import {FC} from "react";

interface UserListProps {
    users: User[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <ul>
            {users.map((user: User) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    );
}


export default UserList;