const util = require('../../utils/util')
const teacherModel = require('../../models/teacher')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const result = await teacherModel.updateOne({
            id: data.id
        },{
            name: data.name,
            cover: data.cover,
            research: data.research,
            email: data.email,
            introduction: data.introduction,
            honor: data.honor
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