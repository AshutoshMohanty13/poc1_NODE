const express = require('express');
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use("/", (req, res) => {
    res.send("node API Works");
});

//launch server on port 9000
const server = app.listen(9000, () =>{
    console.log("listening on port %s-", server.address().port);
})
