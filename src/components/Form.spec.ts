import { test, vi } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/vue';
import Form from './Form.vue';

test('it would fail', async () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(Form);
  getByText('false');

  await fireEvent.update(getByPlaceholderText('username'), 'jeanmay');
  await fireEvent.update(getByPlaceholderText('password'), 'password123456');
  await fireEvent.submit(getByTestId('form'));

  getByText('true');
});
