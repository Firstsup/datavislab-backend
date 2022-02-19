const util = require('../../utils/util')
const teacherModel = require('../../models/teacher')

module.exports = async (req, res) => {
    const newName = req.body.newName
    const oldName = req.body.oldName
    try {
        const result = await teacherModel.find({name: newName})
        if (result[0] && result[0].name !== oldName) {
            util.responseClient(res, 200, 1, '名称已存在', {})
            console.log('e:', '名称已存在')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}