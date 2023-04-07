import { v4 as uuidv4} from 'uuid'

export const users = [
    {
        id: uuidv4(),
        name: 'frank',
        email: 'frank@gmail.com',
        password: '123'
    },
    {
        id: uuidv4(),
        name: 'tim',
        email: 'tim@gmail.com',
        password: '123'
    }
]