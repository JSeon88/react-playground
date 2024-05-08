import App from '../src/App';
import { render, screen } from '@testing-library/react';

test('페이지가 제대로 뜨나요?', async () => {
  render(<App />);
  const button = await screen.findByRole('button');
  expect(button.innerHTML).toBe('sunny');
});
