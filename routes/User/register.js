const util = require('../../utils/util')
const userModel = require('../../models/user')
const md5 = require('md5')

module.exports = async (req, res) => {
    const data = req.body.user
    try {
        let result = await userModel.create({
            username: data.username,
            password: md5(data.password),
            name: data.name,
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