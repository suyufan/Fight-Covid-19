import uniStarterConfig from '@/hello-uni.config.js';
//应用初始化页
// #ifdef APP-PLUS
import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update';
import callCheckVersion from '@/uni_modules/uni-upgrade-center-app/utils/call-check-version';

// // 实现，路由拦截。当应用无访问摄像头/相册权限，引导跳到设置界面 https://ext.dcloud.net.cn/plugin?id=5095
// import interceptorChooseImage from '@/uni_modules/json-interceptor-chooseImage/js_sdk/main.js';
// interceptorChooseImage()

// #endif
const db = uniCloud.database()
export default async function() {
	const debug = uniStarterConfig.debug;

	// uniStarterConfig挂载到getApp().globalData.config
	setTimeout(() => {
		getApp({
			allowDefault: true
		}).globalData.config = uniStarterConfig;
	}, 1)


	// 初始化appVersion（仅app生效）
	initAppVersion();

	//clientDB的错误提示
	function onDBError({
		code, // 错误码详见https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue
		message
	}) {
		console.log('onDBError', {
			code,
			message
		});
		// 处理错误
		console.error(code, message);
	}
	// 绑定clientDB错误事件
	db.on('error', onDBError)


	// #ifdef APP-PLUS
	// 监听并提示设备网络状态变化
	uni.onNetworkStatusChange(res => {
		console.log(res.isConnected);
		console.log(res.networkType);
		if (res.networkType != 'none') {
			uni.showToast({
				title: '当前网络类型：' + res.networkType,
				icon: 'none',
				duration: 3000
			})
		} else {
			uni.showToast({
				title: '网络类型：' + res.networkType,
				icon: 'none',
				duration: 3000
			})
		}
	});
	// #endif

}