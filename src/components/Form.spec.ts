import { it } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import Form from './Form.vue';
import vant from "vant"

it('should fail if submit the form', async () => {
  const { getByPlaceholderText, getByTestId, getByText, debug } = render(Form, {
    global: {
      plugins: [vant]
    }
  });
  getByText('false');// this will pass

  await fireEvent.update(getByPlaceholderText('username'), 'user');
  await fireEvent.update(getByPlaceholderText('password'), 'psw');
  await fireEvent.submit(getByTestId('form'));
  
  getByText('true')// this will fail. But if replace waitFor() with flushPromises() in fireEvent(), the test will pass.
});