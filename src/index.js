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

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('5c906071a3023d2e60a79a7c');
    // await task.populate('owner').execPopulate();
    // console.log(task);

    const user = await User.findById('5c906f670fa2cf46c4f5cfed');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}

main();