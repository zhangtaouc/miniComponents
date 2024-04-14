function httpGet(url) {
	console.warn('请求url', url)
	return new Promise((resolve, reject) => {
		wx.request({
			url,
			method: 'GET',
			success: (result) => {
				if (result?.data?.retCode === '00000') {
					console.warn('httpGet请求成功', result)
					resolve(result.data.retData)
				} else {
					console.error('httpGet请求有误', result)
					reject(false)
				}
			},
			fail: (err) => {
				console.error('httpGet请求错误', err)
				reject(err)
			},
		})
	})
}

function httpPost(url, data) {
	console.warn('请求信息', url, data)
	return new Promise((resolve, reject) => {
		wx.request({
			url,
			data,
			method: 'POST',
			success: (result) => {
				console.warn('httpPost请求成功', result)
				if (result?.data?.retCode === '00000') {
					resolve(result.data.retData)
				} else {
					reject(false)
				}
			},
			fail: (err) => {
				console.error('httpPost请求错误', err)
				reject(err)
			},
		})
	})
}

function httpDelete(url) {
	console.warn('请求url', url)
	return new Promise((resolve, reject) => {
		wx.request({
			url,
			method: 'DELETE',
			success: (result) => {
				if (result?.data?.retCode === '00000') {
					console.warn('httpDelete请求成功', result)
					resolve(result.data.retData)
				} else {
					console.error('httpDelete请求有误', result)
					reject(false)
				}
			},
			fail: (err) => {
				console.error('httpDelete请求错误', err)
				reject(err)
			},
		})
	})
}

export { httpGet, httpPost, httpDelete }
