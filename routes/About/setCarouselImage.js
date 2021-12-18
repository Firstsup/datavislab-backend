const util = require('../../utils/util')
const aboutModel = require('../../models/about')

module.exports = async (req, res) => {
    const data = req.query
    try {
        const result = await aboutModel.updateOne({
            item: `carouselImage${data.id}`
        }, {
            content: data.url
        })
        console.log(result)
        if (result.matchedCount !== 0) {
            util.responseClient(res, 200, 0, '成功', {})
        } else {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        }
    } catch (e) {
        console.log('e:', e)
    }
}