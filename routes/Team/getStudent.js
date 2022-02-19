const util = require('../../utils/util')
const studentModel = require('../../models/student')

module.exports = async (req, res) => {
    try {
        const result = await studentModel.find({}).sort({'id': -1})
        if (!result[0]) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {
                students: result
            })
        }
    } catch (e) {
        console.log('e:', e)
    }
}