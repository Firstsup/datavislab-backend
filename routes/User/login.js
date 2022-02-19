const util = require('../../utils/util')
const userModel = require('../../models/user')
const md5 = require('md5')

module.exports = async (req, res) => {
    const data = req.body.user
    try {
        const result = await userModel.find({
            username: data.username
        })
        if (!result[0]) {
            util.responseClient(res, 200, 2, '用户名不存在', {})
            console.log('e:', '用户名不存在')
        } else {
            if (result[0].password === md5(data.password)) {
                util.responseClient(res, 200, 0, '成功', {})
            } else {
                util.responseClient(res, 200, 3, '密码错误', {})
                console.log('e:', '密码错误')
            }
        }
    } catch (e) {
        console.log('e:', e)
    }
}