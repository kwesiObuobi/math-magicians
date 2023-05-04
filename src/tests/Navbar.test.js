import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders the Navbar component', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByRole('span')).toBeNull();
  });

  it('should correctly render the Navbar component', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
