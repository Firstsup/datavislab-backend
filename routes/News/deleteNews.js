const util = require('../../utils/util')
const newsModel = require('../../models/news')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const result = await newsModel.deleteOne({
            id: data.id
        })
        if (result.deletedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}