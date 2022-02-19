const util = require('../../utils/util')
const userModel = require('../../models/user')

module.exports = async (req, res) => {
    const data = req.body
    try {
        const result = await userModel.find(data)
        if (result[0]) {
            util.responseClient(res, 200, 0, '成功', {})
        } else {
            util.responseClient(res, 500, 2, '邮箱不存在', {})
            console.log('e:','邮箱不存在')
        }
    } catch (e) {
        console.log('e:', e)
    }
}