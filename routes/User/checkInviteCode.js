const util = require('../../utils/util')
const aboutModel = require('../../models/about')

module.exports = async (req, res) => {
    const inviteCode = req.body.inviteCode
    try {
        const result = await aboutModel.find({
            item: 'inviteCode'
        })
        if (!result[0]) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else if (inviteCode === result[0].content) {
            util.responseClient(res, 200, 0, '成功', {})
        } else {
            util.responseClient(res, 200, 2, '邀请码不正确', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}
