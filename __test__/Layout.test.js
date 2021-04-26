import React from 'react'
import { render } from '@testing-library/react'
import ShallowRenderer from 'react-test-renderer/shallow';

import Layout from '../components/Layout'

describe("Layout function", () => {
    
    test('renders Header', () => {
        const { getByText } = render(<Layout />)
        const header = getByText('Welcome to Data Visualisation')
        expect(header).toBeInTheDocument()
    });

    test('renders Footer', () => {
        const { getByText } = render(<Layout />)
        const footer = getByText('This is intellisense.io')
        expect(footer).toBeInTheDocument()
    });
    it('renders Layout unchanged', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Layout />);
        const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot()
    })

  });
