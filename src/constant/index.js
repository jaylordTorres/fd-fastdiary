export const url = {
  picsum: 'https://picsum.photos/',
  quotesondesign: 'http://quotesondesign.com/',
}

export const ACCESS_CODE = {
	'xYz1234': { name: 'trail user', code: 'xYz1234' },
	'Rmi7x2E': { name: 'user 2', code: 'Rmi7x2E' },
	'x': { name: 'user 3', code: 'x' },
	get first () {
		return this.xYz1234
	}
}

export const RequestConfig = {
	MAX_IMAGE_COUNT: 500
}

export const PicConfig = {
	PER_PAGE_COUNT: 10, // for not lagging
}