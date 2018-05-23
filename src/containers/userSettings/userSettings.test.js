import React from 'react';
import renderer from 'react-test-renderer';

import UserSettings from './userSettings';



describe('UserSetting Component', () => {


    it('should display the current userSettings', () => {
        // Test data
        const testUserSettings = { 'test': 'settings' };

        // Create Component
        const testRenderer = renderer.create(<UserSettings userSettings={testUserSettings} updateUserSettings={() => { }} />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType('textarea').props.value).toBe(JSON.stringify(testUserSettings));
    });

    it('should update the userSettings', () => {
        // Mock func
        const mockCallback = jest.fn();

        // Create Component
        const testRenderer = renderer.create(<UserSettings userSettings={{}} updateUserSettings={mockCallback} />);
        const testInstance = testRenderer.root;

        // Click the button
        testInstance.findByType('button').props.onClick();

        expect(mockCallback.mock.calls.length).toBe(1);
    });




});