// 生成6位数的验证码
module.exports = function randomCode() {
	var code = "";
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	for(var i = 0; i < 6; i++) {
		code += arr[parseInt(Math.random() * 10)];
	}
	return code;
}