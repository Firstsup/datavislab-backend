const util = require('../../utils/util')
const newsModel = require('../../models/news')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const maxid = await newsModel.find({}).sort({'id': -1}).limit(1)
        const result = await newsModel.create({
            id: maxid[0].id + 1,
            title: data.title,
            date: data.date,
            content: data.content,
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