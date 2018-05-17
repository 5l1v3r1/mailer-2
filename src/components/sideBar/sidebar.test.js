import React from 'react';
import renderer from 'react-test-renderer';

import SideBar from './sidebar';



test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});


test('Check the sidebar componenet', () => {
    const component = renderer.create(
        <SideBar />
    );
    expect(component.toJSON().type).toEqual('aside');

});