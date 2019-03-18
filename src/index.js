const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled');
//     } else {
//         next();
//     }
//     console.log(req.method, req.path);
//     next();
// });

// app.use((req, res, next) => {
//     res.status(503).send('Site under maintenance try back soon');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
});

const pet = {
    name: 'Louie'
}

pet.toJSON = function () {
    console.log(this);
    return  this;
}

console.log(JSON.stringify(pet));