/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/pages/management/list/index.tsx
 */

import React, { useEffect, useRef } from 'react'
import {} from '@ant-design/icons'
import styles from './index.module.scss'
import { PageSize } from 'constants/index'
import LabelStudio from 'label-studio'

const List = () => {
	const labelInstance = useRef<any>(null)
	console.log('-----PageSize-----', PageSize)
	const initLabel = () => {
		labelInstance.current = new LabelStudio('label-studio', {
			config: `
			  <View>
				<Image name="img" value="$image"></Image>
				<RectangleLabels name="tag" toName="img">
				  <Label value="Hello"></Label>
				  <Label value="World"></Label>
				</RectangleLabels>
			  </View>
			`,

			interfaces: [
				'panel',
				'update',
				'submit',
				'controls',
				'side-column',
				'annotations:menu',
				'annotations:add-new',
				'annotations:delete',
				'predictions:menu'
			],

			user: {
				pk: 1,
				firstName: 'James',
				lastName: 'Dean'
			},

			task: {
				annotations: [],
				predictions: [],
				id: 1,
				data: {
					image:
						'https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg'
				}
			},

			onLabelStudioLoad: (LS: any) => {
				const c = LS.annotationStore.addAnnotation({
					userGenerate: true
				})
				LS.annotationStore.selectAnnotation(c.id)
			}
		})
	}
	useEffect(() => {
		console.log(222)
		initLabel()
	}, [])
	return (
		<div className={styles.list_main}>
			{console.log('----render-------', 222)}
			<div>测试测试</div>
			<div id="label-studio"></div>
		</div>
	)
}
export default List
