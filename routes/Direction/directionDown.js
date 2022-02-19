const util = require('../../utils/util')
const directionModel = require('../../models/direction')

module.exports = async (req, res) => {
    const data = req.body
    try {
        const exchange = await directionModel.find({
            id: {$lt: data.id}
        }).sort({'id': -1}).limit(1)
        const result1 = await directionModel.updateOne({
            id: data.id
        }, {
            id: exchange[0].id
        })
        const result2 = await directionModel.updateOne({
            name: exchange[0].name
        }, {
            id: data.id
        })
        if (!exchange[0] || result1.matchedCount === 0 || result2.matchedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}