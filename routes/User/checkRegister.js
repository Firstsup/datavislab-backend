const util = require('../../utils/util')
const userModel = require('../../models/user')

module.exports = async (req, res) => {
    const data = req.body.user
    try {
        let result = await userModel.find({
            username: data.username
        })
        if (result[0]) {
            util.responseClient(res, 200, 2, '用户名已存在', {})
            console.log('e:', '用户名已存在')
            return
        }
        result = await userModel.find({
            name: data.name
        })
        if (result[0]) {
            util.responseClient(res, 200, 3, '姓名已存在', {})
            console.log('e:', '姓名已存在')
            return
        }
        result = await userModel.find({
            email: data.email
        })
        if (result[0]) {
            util.responseClient(res, 200, 4, '邮箱已被使用', {})
            console.log('e:', '邮箱已被使用')
            return
        }
        util.responseClient(res, 200, 0, '成功', {})
    } catch (e) {
        console.log('e:', e)
    }
}
