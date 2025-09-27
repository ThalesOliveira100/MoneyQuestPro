import axios from 'axios';
import { User } from '@/types'

const API_URL = 'http://localhost:3000/v1';

export const fetchUsers = async (): Promise<User[]> => {
    const res = await axios.get<User[]>(`${API_URL}/users`);
    return res.data;
};

export const fetchUserById = async (id: string): Promise<User> => {
    const res = await axios.get<User>(`${API_URL}/users/${id}`);
    return res.data;
};

export const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
    const res = await axios.put<User>(`${API_URL}/users/${id}`, userData);
    return res.data;
}