const util = require('../../utils/util')
const newsModel = require('../../models/news')

module.exports = async (req, res) => {
    try {
        const result = await newsModel.find({}).count()
        util.responseClient(res, 200, 0, '成功', {count: result})
    } catch (e) {
        console.log('e:', e)
    }
}