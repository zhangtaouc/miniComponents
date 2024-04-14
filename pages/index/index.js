import { getUserLocation } from '../../packages/utils/tools'

// index.js
Page({
	onLoad() {
		getUserLocation((data) => {
			console.log('张涛', data)
		})
	},
})
