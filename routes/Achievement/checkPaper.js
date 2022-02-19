const util = require('../../utils/util')
const paperModel = require('../../models/paper')

module.exports = async (req, res) => {
    const newTitle = req.body.newTitle
    const oldTitle = req.body.oldTitle
    try {
        const result = await paperModel.find({title: newTitle})
        if (result[0] && result[0].title !== oldTitle) {
            util.responseClient(res, 200, 1, '名称已存在', {})
            console.log('e:', '名称已存在')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}