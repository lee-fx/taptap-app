const BASE_URL = 'http://192.168.10.31:8000'
export const myRequest = (options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (res.statusCode !== 200) {
					console.log(res.statusCode)
					return uni.showToast({
						image: '../../static/image/common/error.png',
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					image: '../../static/image/common/error.png',
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}
