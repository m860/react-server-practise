import React from 'react'
import BasePage from './BasePage'
import LayoutWithNavigator from '../public/LayoutWithNavigator'
import SoftKeyboard from '../public/SoftKeyboard'

export default class TestSoftKeyboard extends BasePage {

	render() {
		return (
			<LayoutWithNavigator>
				<SoftKeyboard>
					<input type="text"/>
				</SoftKeyboard>
			</LayoutWithNavigator>
		);
	}
}