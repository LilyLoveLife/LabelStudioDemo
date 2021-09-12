/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/pages/index/index.tsx
 */

import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import LabelStudio from 'label-studio'
import 'label-studio/build/static/css/main.css'

const Index: React.FC<any> = () => {
	const labelInstance = useRef<any>(null)
	useEffect(() => {
		console.log('index')
	}, [])
	const initLabel = () => {
		labelInstance.current = new LabelStudio('label-studio', {
			config: `
			  <View>
				<Image name="img" value="$image"></Image>
				<RectangleLabels name="tag" toName="img">
				  <Label value="Hello">$name1</Label>
				  <Label value="World">$name2</Label>
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
				'predictions:menu',
				'predictions:add-new',
				'predictions:delete'
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
					name1: '测试111',
					name2: '测试222',
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
		<div className={styles.main}>
			Hello Word ！<div id="label-studio"></div>
		</div>
	)
}
export default Index
