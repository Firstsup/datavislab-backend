const util = require('../../utils/util')
const qiniu = require("qiniu");
const accessKey = 'vn1xl6NavdXX6J1cG5MaeayKmyAl2hEDmY3-3luB'
const secretKey = 'Lovc5vbYybR0YsXD7M_Hvrmn4TdNOVpKF1hNqSpS'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

module.exports = (req, res) => {
    const keyToOverwrite = req.query.name;
    const options = {
        scope: 'datavislab-image' + ':' + keyToOverwrite,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    util.responseClient(res, 200, 0, '成功', {uploadToken: uploadToken})
}