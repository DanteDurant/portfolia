export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","coolvetica-rg.woff2","favicon.png"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.507ea914.js","app":"_app/immutable/entry/app.ff6683cc.js","imports":["_app/immutable/entry/start.507ea914.js","_app/immutable/chunks/index.a0bf89ce.js","_app/immutable/chunks/singletons.9ebe2bad.js","_app/immutable/chunks/index.04818fb6.js","_app/immutable/entry/app.ff6683cc.js","_app/immutable/chunks/index.a0bf89ce.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/intro",
				pattern: /^\/intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
