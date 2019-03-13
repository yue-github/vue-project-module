module.exports={
	baseUrl:"/",
	outputDir:"dist2",
	assetsDir:"assets",
	lintOnSave:false,
	devServer:{
		open:true,
		host:"localhost",
		port:"8080",
		https:false,
		hotOnly:false,
		proxy:{
			// 配置跨域
			"/apis":{
				target:"http://123.206.202.40:82",
				ws:true,
				changeOrigin:true,
				pathRewrite:{
					"^/apis":""
				}
			}
		}
	}
}