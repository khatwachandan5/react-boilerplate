import App from '../../client/app'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('div').text()).toBe('Welcome to React Node Boilerplate App')
        expect(wrapper).toMatchSnapshot()  
    })
})
