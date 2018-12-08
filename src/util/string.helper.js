export const cleanHtml = (text) => {
  return text.replace(/<[^>]*>?/g, '')
}

export const decodeHtml = (text) => {
	return text.replace(/&#(\d+);/g, function(match, dec) {
		return String.fromCharCode(dec);
	});
}