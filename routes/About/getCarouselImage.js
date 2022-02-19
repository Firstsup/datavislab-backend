const util = require('../../utils/util')
const aboutModel = require('../../models/about')

module.exports = async (req, res) => {
    try {
        const result = await aboutModel.find({
            item: {$regex: /^carouselImage/}
        })
        result.sort()
        if (result[0]) {
            util.responseClient(res, 200, 0, '成功', {
                name: [result[0].content, result[1].content, result[2].content]
            })
        } else {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        }
    } catch (e) {
        console.log('e:', e)
    }
}
