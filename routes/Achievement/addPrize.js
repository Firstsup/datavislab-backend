const util = require('../../utils/util')
const prizeModel = require('../../models/prize')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const maxid = await prizeModel.find({}).sort({'id': -1}).limit(1)
        const result = await prizeModel.create({
            id: maxid[0].id + 1,
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