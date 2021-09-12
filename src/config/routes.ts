/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/config/routes.ts
 */

import React from 'react'
// import Index from 'pages/index'

const loginRoutes: IRoute[] = [
	{
		exact: true,
		path: '/login',
		component: () => import('pages/user/login')
	},
	{
		component: () => import('pages/index')
	}
]

const routes: IRoute[] = [
	{
		exact: true,
		path: '/',
		title: '首页',
		component: () => import('pages/index')
	},
	{
		exact: true,
		path: '/video',
		title: '视频',
		component: () => import('pages/video')
	},
	{
		exact: true,
		path: '/management',
		title: '管理',
		children: [
			{
				path: '/management/list',
				title: '列表',
				component: () => import('pages/management/list'),
				exact: true
			},
			{
				path: '/management/detail',
				title: '详情',
				component: () => import('pages/management/detail'),
				hideInMenu: true,
				exact: true
			}
		]
	}
]

function addLazyComponent(routes: IRoute[]) {
	routes.forEach(route => {
		// if (route.component && !route.not-Lazy) {
		// console.log('------addLazyComponent-----')
		if (route.component) {
			// console.log('-----addLazyComponent component-----', route.component)
			route.component = React.lazy(route.component)
		}
		if (route.children) {
			// console.log('----------addLazyComponent children----------', route.children)
			addLazyComponent(route.children)
		}
	})
}
addLazyComponent(loginRoutes)
addLazyComponent(routes)

const allRoutes = {
	loginRoutes: loginRoutes,
	routes: routes
}
export default allRoutes
