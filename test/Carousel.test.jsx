import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Carousel from '../src/components/Home/Carousel';

describe('Carousel', () => {
    it('Carousel render Component', () => {
        render(<Carousel />);
        screen.debug();
    })

    it('Carousel img banner number check', () => {
        render(<Carousel />);
        for (let i = 1; i < 4; i++) {
            expect(screen.getByAltText(`shopping banner ${i}`)).toBeInTheDocument();
        }
    })

    it('Carousel btn number check', () => {
        render(<Carousel />);

        expect(screen.getAllByRole('button').length).toBe(2);
    })
});