<template>
	<view class="about">
		<view class="box">
			<image class="logoImg" src="@/static/personal/touxiang.png"></image>
			<text class="tip appName">{{about.appName}}</text>
			<text class="tip">Version {{version}}</text>
			<view class="qrcode">
				<uqrcode :size="100" canvas-id="qrcode" value="https://doc.uqrcode.cn"></uqrcode>
			</view>
			<!-- <view class="qrcode">
				<uqrcode :size="100" canvas-id="qrcode" :value="about.download"></uqrcode>
			</view> -->
			<text class="tip">扫描二维码，您的朋友也可以下载 {{about.appName}} 客户端</text>
		</view>
		<view class="copyright">
			<view class="agreement-box" v-for="(agreement,index) in agreements" :key="index">
				<text class="agreement" @click="navigateTo(agreement)">《{{agreement.title}}》</text>
				<text class="hint" v-if="agreements.length-1>index">和</text>
			</view>
			<text class="hint">Copyright © {{year}}</text>
			<text class="hint">{{about.company}}</text>
		</view>
	</view>
</template>

<script>
	import uniIdPagesConfig from '@/uni_modules/uni-id-pages/config.js';
	import uqrcode from "@/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode"
	export default {
		components: {
			uqrcode
		},
		computed: {
			uniStarterConfig() {
				console.log("getApp()",getApp());
				return getApp().globalData.config
			},
			agreements() {
				if(!uniIdPagesConfig.agreements) {
					return []
				}
				let {serviceUrl,privacyUrl} = uniIdPagesConfig.agreements
				return [
					{
						url: serviceUrl,
						title: '用户服务协议'
					},{
						url: privacyUrl,
						title: '隐私政策条款'
					}
				]
			}
		},
		created() {
			console.log("配置信息",this.uniStarterConfig);
		},
		data() {
			return {
				version: "V1.0.0",
				year: "2022",
				about: {
					appName: 'hello-uni',
					company: '阿里终端训练营16组'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		background-color: #f8f8f8;
	}
	/* #ifndef APP-NVUE */
	view{
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}
	/* #endif */
	.about {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.box {
		margin-top: 60px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.logoImg {
		margin-bottom: 10rpx;
		width: 160rpx;
		height: 160rpx;
		border-radius: 15px;
	}
	
	.tip {
		text-align: center;
		font-size: 24rpx;
		margin-top: 10px;
		padding: 10rpx;
	}
	
	.appName {
		margin-top: 20px;
		font-size: 42rpx;
		font-weight: 500;
	}
	
	.qrcode ,.qrcode .uqrcode{
		margin: 10px 0;
		width: 100px;
		height: 100px;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
	
	.copyright {
		font-size: 32rpx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		bottom: 20px;
		// left: 0;
		position: fixed;
	}
	
	.agreement-box {
		justify-content: center;
	}
	
	.agreement {
		color: #2285ff;
		font-size: 26rpx;
	}
	
	.hint {
		text-align: center;
		color: #999999;
		font-size: 26rpx;
	}
</style>
