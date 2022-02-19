const util = require('../../utils/util')
const paperModel = require('../../models/paper')

module.exports = async (req, res) => {
    const data = req.body.item
    try {
        const maxid = await paperModel.find({}).sort({'id': -1}).limit(1)
        const result = await paperModel.create({
            id: maxid[0].id + 1,
            title: data.title,
            venue: data.venue,
            file: data.file,
            fileOriName: data.fileOriName
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