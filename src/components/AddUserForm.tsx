import {FC, FormEvent, useState} from 'react';
import {User} from "@/utils/types";

interface AddUserFormProps {
    onAddUser: (user: User) => void;
}

const AddUserForm: FC<AddUserFormProps> = ({onAddUser}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name && email) {
            onAddUser({name, email});
            setName('');
            setEmail('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUserForm;