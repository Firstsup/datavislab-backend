const util = require('../../utils/util')
const userModel = require('../../models/user')
const md5 = require('md5')

module.exports = async (req, res) => {
    const data = req.query
    try {
        let result = await userModel.find({
            username: data.username
        })
        if (result[0]) {
            util.responseClient(res, 500, 2, '用户名已存在', {})
            console.log('e:', '用户名已存在')
            return
        }
        result = await userModel.find({
            email: data.email
        })
        if (result[0]) {
            util.responseClient(res, 500, 3, '邮箱已被使用', {})
            console.log('e:', '邮箱已被使用')
            return
        }
        result = await userModel.create({
            username: data.username,
            password: md5(data.password),
            email: data.email
        })
        if (result) {
            util.responseClient(res, 200, 0, '成功', data)
        } else {
            util.responseClient(res, 500, 1, '数据库存储失败', {})
            console.log('e:', '数据存储失败')
        }
    } catch (e) {
        console.log('e:', e)
    }
}