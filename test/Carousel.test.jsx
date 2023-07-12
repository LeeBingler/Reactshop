import * as React from 'react';
import { render, screen, fireEvent, mount} from '@testing-library/react';

import Carousel from '../src/components/Home/Carousel';

describe('Carousel test', () => {
    it('Carousel: render Component', () => {
        const wrapper = render(<Carousel />);
        expect(wrapper).toBeTruthy();
    })

    it('Carousel: img banner number check', () => {
        render(<Carousel />);
        for (let i = 1; i < 4; i++) {
            expect(screen.getByAltText(`shopping banner ${i}`)).toBeInTheDocument();
        }
    })

    it('Carousel: btn number check', () => {
        render(<Carousel />);

        expect(screen.getAllByRole('button').length).toBe(2);
    })

    it('Carousel: btn next press 4 times', async () => {
        render(<Carousel />);
        for (let i = 0; i < 4; i++)
            fireEvent.click(document.getElementById('nextBtn'));
    })

    it('Carousel: btn prev press 4 times', async () => {
        render(<Carousel />);
        for (let i = 0; i < 4; i++)
            fireEvent.click(document.getElementById('prevBtn'));
    })
});