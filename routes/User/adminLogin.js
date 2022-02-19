const util = require('../../utils/util')
const aboutModel = require('../../models/about')
const md5 = require('md5')

module.exports = async (req, res) => {
    const data = req.body.user
    try {
        const username = await aboutModel.find({
            item: 'adminUsername'
        })
        const password = await aboutModel.find({
            item: 'adminPassword'
        })
        console.log(username[0].content)
        if (data.username === username[0].content && md5(data.password) === password[0].content) {
            util.responseClient(res, 200, 0, '成功', {})
        } else {
            util.responseClient(res, 200, 2, '用户名或密码错误', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}
