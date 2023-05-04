import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../components/quote';

describe('Navbar Component', () => {
  it('renders the Navbar component', async () => {
    render(<Quote />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeNull();
  });

  it('should correctly render the Navbar component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
