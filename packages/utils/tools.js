// 获取用户地址
function getUserLocation(callback) {
	wx.getSetting({
		success: (res) => {
			if (res.authSetting['scope.userLocation'] == undefined) {
				// 未授权过
				wx.authorize({
					scope: 'scope.userLocation',
					success() {
						// 用户同意开启授权
						// 进行地理位置授权完成后的逻辑操作
						wx.getLocation({
							type: 'wgs84',
							success: (res) => {
								console.log('获取到定位', res)
								callback(res)
							},
							fail: (err) => {
								console.log('授权定位失败', err)
								if (err.errCode == 2) {
									wx.showToast({
										title: '请打开手机位置信息后重试',
										icon: 'none',
										duration: 2500,
									})
								}
								callback(false)
							},
						})
					},
					fail(res) {
						console.log('用户拒绝开启授权', res)
						//用户拒绝开启授权
						wx.showModal({
							title: '您未开启地理位置授权',
							content: '是否前往授权？',
							success: (res) => {
								if (res.confirm) {
									wx.openSetting()
								}
							},
						})
						callback(false)
					},
				})
			} else if (res.authSetting['scope.userLocation'] == false) {
				console.log('拒绝授权')
				wx.showModal({
					title: '您未开启地理位置授权',
					content: '是否前往授权？',
					success: (res) => {
						if (res.confirm) {
							wx.openSetting()
						}
					},
				})
				callback(false)
			} else {
				wx.getLocation({
					type: 'wgs84',
					success: (res) => {
						console.log('获取到地址', res)
						callback(res)
					},
					fail: (err) => {
						console.log('授权定位失败', err)
						if (err.errCode == 2) {
							wx.showToast({
								title: '请打开手机位置信息后重试',
								icon: 'none',
								duration: 2500,
							})
						}
						callback(false)
					},
				})
			}
		},
	})
}
export { getUserLocation }
