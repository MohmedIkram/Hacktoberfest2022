<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }">
          <a @click.prevent="register = false">Login</a>
        </li>
        <li :class="{ 'is-active': register }">
          <a @click.prevent="register = true">Register</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>
        <form @submit.prevent="onSubmit">
          <div class="field" v-auto-animate>
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="email"
                placeholder="e.g. cyilmaz089@gmail.com"
                autocomplete="email"
                @blur="v$.email.$touch"
              />
            </div>
            <div
              class="input-errors has-text-danger p-2"
              v-for="error of v$.email.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">*{{ error.$message }}</div>
            </div>
          </div>
          <div class="field" v-auto-animate>
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                type="password"
                placeholder="Please enter a password..."
                :autocomplete="register ? 'new-password' : 'current-password'"
                @blur="v$.password.$touch"
              />
            </div>
            <div
              class="input-errors has-text-danger p-2"
              v-for="error of v$.password.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">*{{ error.$message }}</div>
            </div>
          </div>

          <div v-if="storeAuth.error" class="input-errors has-text-danger p-2">
            <div class="error-msg" v-auto-animate>*Check your credentials</div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button :disabled="disabled" class="button is-primary is-rounded">
                {{ formTitle }}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, reactive, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import { useStoreAuth } from "@/stores/storeAuth";
import { required, email, minLength } from "@vuelidate/validators";
// import { capitalize } from "@/utils/capitalize";

//store

const storeAuth = useStoreAuth();

//register / login

const register = ref(null);

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});

// credentials

const credentials = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email }, // Matches state.firstName
  password: { required, minLength: minLength(6) }, // Matches state.lastName
};

const v$ = useVuelidate(rules, credentials);

watch(storeAuth, (newValue) => {
  // show errors

  if (newValue.error && storeAuth.error) {
    setTimeout(() => {
      storeAuth.error = null;
    }, 5000);
  }
});

watch(register, () => {
  //reset errors when switching between login and register
  v$.value.$reset();
});

//disabled state

const disabled = computed(() => {
  return (
    !credentials.email ||
    !credentials.password ||
    v$.value.password.$invalid ||
    v$.value.email.$invalid
  );
});

//submit

const onSubmit = async () => {
  await v$.value.$validate().then((valid) => {
    if (valid) {
      if (register.value) {
        storeAuth.registerUser(credentials);
      } else {
        storeAuth.loginUser(credentials);
      }
    }
  });
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin-inline: auto;
}
</style>
