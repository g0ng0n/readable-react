import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'Authorization': 'foobar'}
});

export function fetchCategories () {
    return instance.get('/categories');
}