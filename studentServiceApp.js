const express = require('express');
let app = express();
const _PORT = 8000;

let students = [{
    name: "Achinta",
    id: 101,
    age: 31,
    subjects: ["Science", "Maths", "English"]
}];

app.use(express.json());

const validateStudent = (req, res, next) => {
    const studentbody = req.body;
    if (studentbody.hasOwnProperty('name') && studentbody.hasOwnProperty('id') && studentbody.hasOwnProperty('age') && studentbody.hasOwnProperty('subjects')) {
        next();
    } else {
        res.status(400).send('Bad Request');
    }
}


app.get('/ssa/v1/students', (req, res) => {
    res.status(200).json(students);
})

app.use('/ssa/v1/students', validateStudent);
app.post('/ssa/v1/students', (req, res) => {
    students.push(req.body)
    res.status(200).json(students);
})

app.listen(_PORT, () => {
    console.log("Server started at port: ", _PORT);
})