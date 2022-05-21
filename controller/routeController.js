const studentInfo = require('../models/studentInfo');

async function getAll(req, res) {
    try {
        const allRec = await studentInfo.find({});
        res.send(allRec);
    }
    catch (err) {
        showError(err)
    }

}

async function postNew(req, res) {
    try {
        const { name, course, year } = req.body;
        const addInfo = new studentInfo({
            name,
            course,
            year
        })
        const info = await addInfo.save()
        res.json(info)
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { getAll, postNew };