import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/components/Header';

describe('Header', () => {
    beforeEach(() => {
        render(<Header />);
    });

    it('correctly renders the title', () => {
        const title = screen.getByText('Poster Generator');
        expect(title).toBeInTheDocument();
    });

    it('correctly renders the download button', () => {
        const downloadButton = screen.getByText('Download');
        expect(downloadButton).toBeInTheDocument();
    })
});
