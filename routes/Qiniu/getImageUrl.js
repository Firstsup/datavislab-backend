const util = require('../../utils/util')
const qiniu = require("qiniu");
const accessKey = 'vn1xl6NavdXX6J1cG5MaeayKmyAl2hEDmY3-3luB'
const secretKey = 'Lovc5vbYybR0YsXD7M_Hvrmn4TdNOVpKF1hNqSpS'

module.exports = (req, res) => {
    const data = req.query
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const config = new qiniu.conf.Config();
    const bucketManager = new qiniu.rs.BucketManager(mac, config);
    const privateBucketDomain = 'http://r600gofad.hn-bkt.clouddn.com';
    const deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
    const privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, data.image, deadline);
    util.responseClient(res, 200, 0, '成功', {privateDownloadUrl: privateDownloadUrl})
}
