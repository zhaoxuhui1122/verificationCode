cconst Alidayu = require('../config/alidayu');
const randomCode = require("./config/randomCode");
const config = {
	app_key: 'your app key', //自己申请的appkey
	secret: 'your secret' //对应的appsecret
};
const alidayu = new Alidayu(config);
module.exports = function(req, res) {
	var code = randomCode(); //生成验证码
	var phone = req.body.phone; //获取的手机号
	var options = {
		sms_free_sign_name: 'your SmsFreeSignName', //SmsFreeSignName
		sms_param: { //所要传回的信息配置在这里
			code: code,
			text: '短信验证测试', //可换为前台发送过来的数据，详情参见下方短信模板
		},
		rec_num: phone, //接收短信的号码
		sms_template_code: 'your sms template code', //你申请的短信模板
	};
	//发送短信
	alidayu.sms(options, function(err, result) {
		if(err) {
			res.json("error");
		} else {
			res.json("success");
		}

	});
}