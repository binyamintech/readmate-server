const  userTestReadingModel  = require('../models/userTrainReading')

async function create(data) {
    console.log("create "+data);
    return await userTestReadingModel.create(data);

}
async function read(filter) {
    return await userTestReadingModel.find(filter);

}
async function update(filter, newData) {
    return await userTestReadingModel.updateOne(filter, newData);
}
async function del(filter) {
    await update(filter, { isActive: flase })
}

module.exports = { create, read, update, del }

