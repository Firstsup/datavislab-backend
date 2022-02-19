const util = require('../../utils/util')
const prizeModel = require('../../models/prize')

module.exports = async (req, res) => {
    const data = req.body.prize
    try {
        const result = await prizeModel.updateOne({
            id: data.id
        }, {
            title: data.title,
            date: data.date,
            cover: data.cover
        })
        if (result.matchedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}