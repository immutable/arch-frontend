export const openInNewTab = (url: any) => {
	(window as any).open(url, "_blank")!.focus();
};

export const getUrlParameter = (name: any) => {
	const results = new RegExp(`[?&]${name}=([^&#]*)`).exec(
		(window as any).location.href
	);
	if (results === null) {
		return null;
	}
	return decodeURI(results[1]) || 0;
};

export const isChrome = () => {
	if (typeof navigator !== "undefined")
		return /(?=.*(chrome)).*/i.test(navigator.userAgent);
};
