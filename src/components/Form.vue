<script setup lang="ts">
import { ref, reactive } from 'vue';

const login = async () => {
  return Promise.resolve();
};

const loginForm = reactive({
  username: '',
  password: '',
});

const isSubmitButtonDisabled = ref(false);

const submitLogin = async () => {
  isSubmitButtonDisabled.value = true;
  try {
    const { token } = await login(loginForm);
  } catch {
    isSubmitButtonDisabled.value = false;
  }
};
</script>

<template>
  <div>
    <van-form data-testid="form" @submit="submitLogin">
      <van-cell-group inset>
        <van-field
          v-model="loginForm.username"
          label="username"
          placeholder="username"
          :rules="[{ required: true, message: 'please input username' }]"
        />
        <van-field
          v-model="loginForm.password"
          type="password"
          label="password"
          placeholder="password"
          :rules="[{ required: true, message: 'please input password' }]"
        />
      </van-cell-group>
      <div class="login-form__body__submit-button">
        <van-button
          native-type="submit"
          type="primary"
          :disabled="isSubmitButtonDisabled"
        >
          login
        </van-button>
      </div>
    </van-form>
  </div>
  <span>{{ isSubmitButtonDisabled ? 'true' : 'false' }}</span>
</template>
