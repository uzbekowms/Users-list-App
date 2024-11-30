import type {NextApiRequest, NextApiResponse} from "next";
import {User} from "@/utils/types";
import {randomUUID} from "node:crypto";

const users: User[] = [
    {id: randomUUID(), name: "John Doe", email: "john@example.com"},
    {id: randomUUID(), name: "Jane Smith", email: "jane@example.com"},
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(users);
    } else if (req.method === 'POST') {
        const {name, email} = req.body;
        if (!name || !email) {
            return res.status(400).json({error: "Name and email are required"});
        }
        const newUser = {id: randomUUID(), name, email};
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(405).json({error: "Method not allowed"});
    }
}
