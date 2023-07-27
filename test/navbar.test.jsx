import * as React from 'react'
import { render, screen, fireEvent, mount } from '@testing-library/react';
import NavBar from '../src/components/Navbar/NavBar';
import { beforeEach, describe, expect, test } from 'vitest';
// Tests that the component renders without errors

describe('Navbar test', () => {
	it('Navbar: render Component', () => {
		const wrapper = render(<NavBar />);
		expect(wrapper).toBeTruthy();
	})

	it('test_display_title', () => {
		render(<NavBar />);
		
		// expect(wrapper).toBeTruthy();
	})

	it('test_toggle_menu', () => {

	})	

	it('test_toggle_cart', () => {

	})	
	it('test_handle_empty_cart', () => {

	})	
	it('test_handle_cart_with_many_items', () => {

	})	
	// beforeEach(() => {
	// 	render(<Accordion title='Testing'><h4>Content</h4></Accordion>);
	// });

	test("should show title all the time", () => {

		// expect(screen.getByText(/Testing/i)).toBeDefined()
	})

	test("should not show the content at the start", () => {

		// expect(screen.getByText(/Content/i)).toBeUndefined()

	})
})