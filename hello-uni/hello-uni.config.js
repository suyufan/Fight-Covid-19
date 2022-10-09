//这是应用的配置页面，App.vue挂载到getApp().globalData.config
export default {
	//是否打开调试模式
	"debug":false,
	"h5": {
		"url": "https://static-4b228ae3-c6c2-40b9-8f0d-16932f9bc3ab.bspapp.com/h5/", //	前端网页托管的域名	
		 // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改	
	},
	"mp": {
		"weixin": {
			//微信小程序原始id，微信小程序分享时
			"id": ""
		}
	},
	//关于应用
	"about": {
		//应用名称
		"appName": "hello-uni",
		//应用logo
		"logo": "/static/logo.png",
		//公司名称
		"company": "阿里终端训练营16组",
		//应用的链接，用于分享到第三方平台和生成关于我们页的二维码
		"download": "https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8",
		//version
		"version":"1.0.0" //用于非app端显示，app端自动获取
	},
	"download":{ //用于生成二合一下载页面
		"ios":"https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8",
		"android":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-97fca9f2-41f6-449f-a35e-3f135d4c3875/6d754387-a6c3-48ed-8ad2-e8f39b40fc01.apk"
	},
	//用于打开应用市场评分界面
	"marketId":{
		"ios":"",
		"android":""
	}
}