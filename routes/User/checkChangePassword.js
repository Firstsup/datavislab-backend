const util = require('../../utils/util')
const userModel = require('../../models/user')

module.exports = async (req, res) => {
    const data = req.body.user
    try {
        let result = await userModel.find({
            username: data.username
        })
        if (!result[0]) {
            util.responseClient(res, 200, 2, '用户不存在', {})
            console.log('e:', '用户不存在')
        } else {
            if (result[0].email !== data.email) {
                util.responseClient(res, 200, 3, '用户名与邮箱不匹配', {})
            } else {
                util.responseClient(res, 200, 0, '成功', {})
            }
        }
    } catch (e) {
        console.log('e:', e)
    }
}
