<template>
  <section class="py-[50px] flex flex-col items-center justify-center px-4">
    <div class="flex flex-row items-center justify-center space-x-3">
      <img src="/assets/images/logo.png" alt="" width="35" />
      <p class="text-[20px] font-bold text-sky-900">HuManage</p>
    </div>
    <div class="text-[32px] font-semibold text-dark mt-[70px]">Login</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Manage your employees to achieve <br />
      a bigger goals for your company
    </p>
    <form class="w-full card" @submit.prevent="userLogin">
      <div class="form-group">
        <label for="" class="text-grey">Email Address</label>
        <input
          type="email"
          class="input-field"
          v-model="login.email"
          placeholder="Your email address.."
        />
      </div>
      <div class="form-group">
        <label for="" class="text-grey">Password</label>
        <input
          type="password"
          class="input-field"
          v-model="login.password"
          placeholder="Your password.."
        />
      </div>
      <button type="submit" class="w-full btn btn-primary mt-[14px]">
        Login
      </button>
      <div class="flex flex-row justify-center space-x-1">
        <p>Don't Have Account?</p>
        <NuxtLink
          :to="{ name: 'register' }"
          class="font-medium no-underline text-primary hover:underline"
          >Please Register</NuxtLink
        >
      </div>
    </form>
  </section>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
