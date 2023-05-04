import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
  it('renders the calculator component', () => {
    render(<Calculator />);
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeNull();
  });

  it('renders the calculator component correctly', () => {
    render(<Calculator />);
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeNull();
  });

  it('should display 2 numbers to be added', () => {
    render(<Calculator />);
    const button1 = screen.getByText('9');
    const plusBtn = screen.getByText('+');
    const button2 = screen.getByText('9');

    fireEvent.click(button1);
    fireEvent.click(plusBtn);
    fireEvent.click(button2);

    const result = screen.getByText('9 + 9');

    expect(result).toBeInTheDocument();
  });

  it('should show the result of two added numbers', () => {
    render(<Calculator />);
    const button1 = screen.getByText('9');
    const plusBtn = screen.getByText('+');
    const button2 = screen.getByText('9');
    const equalsBtn = screen.getByText('=');

    fireEvent.click(button1);
    fireEvent.click(plusBtn);
    fireEvent.click(button2);
    fireEvent.click(equalsBtn);

    const result = screen.getByText('18');

    expect(result).toBeInTheDocument();
  });

  it('should correctly render the Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
