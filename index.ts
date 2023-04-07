import express from 'express'
const app = express()
const port = process.env.PORT || 3000
import db from './models'
import {users} from './seeders/users'

const createUsers = () => {
    users.map(user => {
        db.User.create(user).then((result: any) => {
            console.log(result);
          })
          .catch((error: any) => {
            console.error(error);
          });
    })
}
createUsers()

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
