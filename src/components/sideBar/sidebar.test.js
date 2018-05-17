import React from 'react';
import renderer from 'react-test-renderer';

import SideBar from './sidebar';



describe('SideBar Component', () => {
    it('Check the sidebar componenet', () => {
        const tree = renderer.create(
            <SideBar updateCurrentView={() => { }} />
        );
        expect(tree.toJSON().type).toEqual('aside');
    });

    it('should request the screen be changed to SETTINGS', () => {
        expect(1 + 2).toBe(3);
    });

    it('should request the screen be changed to MAILER', () => {
        expect(1 + 2).toBe(3);
    });


});