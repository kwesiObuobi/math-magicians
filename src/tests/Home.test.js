import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home Component', () => {
  it('renders the Home component', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
    expect(screen.getByText(/The introduction/)).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeNull();
  });

  it('should correctly render the Home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
