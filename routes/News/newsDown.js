const util = require('../../utils/util')
const newsModel = require('../../models/news')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const result1 = await newsModel.updateOne({
            id: Number(data.id) - 1
        }, {
            id: data.id
        })
        const result2 = await newsModel.updateOne({
            id: data.id
        }, {
            id: Number(data.id) - 1
        })
        if (result1.matchedCount === 0 || result2.matchedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}