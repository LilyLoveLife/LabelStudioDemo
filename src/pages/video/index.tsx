/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2021-09-12 21:34:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-12 23:37:38
 */
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
			  <Header value="选择区域:"></Header>
			  <AudioPlus name="audio" value="$url"></AudioPlus>
			  <Header>音频中使用了多少种乐器?</Header>
			 
				<Labels name="label" toName="audio" choice="multiple">
				  <Label value="Beat" background="yellow"></Label>
				  <Label value="Voice" background="red"></Label>
				  <Label value="Guitar" background="blue"></Label>
				  <Label value="Other"></Label>
				</Labels>
				<TextArea name="ta" toName="audio" />
				<Choices name="ch" toName="audio">
					<Choice value="Positive" />
					<Choice value="Negative" />
				</Choices>
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
				'annotations:delete'
				// 'predictions:menu',
				// 'predictions:add-new',
				// 'predictions:delete'
			],

			user: {
				pk: 1,
				firstName: 'James',
				lastName: 'Dean'
			},

			task: {
				// predictions: [
				// 	{
				// 		model_version: 'model 1',
				// 		created_ago: '4 hours',
				// 		result: [
				// 			{
				// 				from_name: 'choice',
				// 				id: 'hIj6zg57SY',
				// 				to_name: 'audio',
				// 				type: 'choices',
				// 				value: {
				// 					choices: ['Lo-Fi']
				// 				}
				// 			}
				// 		]
				// 	}
				// ],
				// annotations: [
				// 	{
				// 		id: '1001',
				// 		result: [
				// 			{
				// 				from_name: 'choice',
				// 				id: 'hIj6zg57SY',
				// 				to_name: 'audio',
				// 				type: 'choices',
				// 				value: {
				// 					choices: ['Lo-Fi']
				// 				}
				// 			},
				// 			{
				// 				from_name: 'label',
				// 				id: 'SsGrpVgy_C',
				// 				source: '$url',
				// 				to_name: 'audio',
				// 				type: 'labels',
				// 				value: {
				// 					end: 28.50568583621215,
				// 					labels: ['Beat'],
				// 					start: 12.778410892095105
				// 				}
				// 			},
				// 			{
				// 				from_name: 'label',
				// 				id: 'JhxupEJWlW',
				// 				source: '$url',
				// 				to_name: 'audio',
				// 				type: 'labels',
				// 				value: {
				// 					end: 59.39854733358493,
				// 					labels: ['Other'],
				// 					start: 55.747572792986325
				// 				}
				// 			}
				// 		]
				// 	}
				// ],
				data: {
					name1: '测试111',
					name2: '测试222',
					audio: 'https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/audio/barradeen-emotional.mp3',
					url: 'https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/audio/barradeen-emotional.mp3'
				}
				// predictions: [
				// 	{
				// 		model_version: 'model 1',
				// 		created_ago: '2 weeks, 6 days',
				// 		result: [
				// 			{
				// 				from_name: 'label',
				// 				id: 'wvDEy63Wgs',
				// 				to_name: 'audio',
				// 				type: 'choices',
				// 				value: {
				// 					choices: ['Business']
				// 				}
				// 			}
				// 		]
				// 	}
				// ]
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
