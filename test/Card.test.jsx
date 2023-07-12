import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Carousel from '../src/components/Home/Carousel';

describe('Carousel', () => {
    it('Render Carousel Component', () => {
        render(<Carousel />);

        screen.debug();
    })
})