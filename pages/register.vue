<!-- <template>
  <section class="py-[50px] flex flex-col items-center justify-center px-4">
    <div class="flex flex-row items-center justify-center space-x-3">
      <img src="/assets/images/logo.png" alt="" width="35" />
      <p class="text-[20px] font-bold text-sky-900">HuManage</p>
    </div>

    <div class="text-[32px] font-semibold text-dark mt-[70px]">Register</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Manage your employees to achieve <br />
      a bigger goals for your company
    </p>
    <form class="w-full card" @submit.prevent="userRegister">
      <div class="form-group">
        <label for="" class="text-dark">Name</label>
        <input
          type="text"
          class="input-field"
          v-model="register.name"
          placeholder="Your name.."
          required
        />
      </div>
      <div class="form-group">
        <label for="" class="text-dark">Email Address</label>
        <input
          type="email"
          class="input-field"
          v-model="register.email"
          placeholder="Your email address.."
          required
        />
      </div>
      <div class="form-group">
        <label for="" class="text-dark">Password</label>
        <input
          type="password"
          class="input-field"
          v-model="register.password"
          placeholder="Your password.."
          required
        />
      </div>
      <button type="submit" class="w-full btn btn-primary mt-[14px]">
        Register
      </button>
      <div class="flex flex-row justify-center space-x-1">
        <p>Already Have Account?</p>
        <NuxtLink
          :to="{ name: 'login' }"
          class="font-medium no-underline text-primary hover:underline"
          >Please Login</NuxtLink
        >
      </div>
    </form>
  </section>
</template> -->

<template>
  <section class="py-[50px] flex flex-col items-center justify-center px-4">
    <div class="flex flex-row items-center justify-center space-x-3">
      <img src="/assets/images/logo.png" alt="" width="35" />
      <p class="text-[20px] font-bold text-sky-900">HuManage</p>
    </div>

    <div class="text-[32px] font-semibold text-dark mt-[70px]">Register</div>
    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
      Manage your employees to achieve <br />
      a bigger goals for your company
    </p>
    <ValidationObserver v-slot="{ invalid }" ref="form">
      <form class="w-full card" @submit.prevent="userRegister">
        <div class="form-group">
          <label for="" class="text-dark">Name</label>
          <ValidationProvider
            class="form-group w-[28rem]"
            name="Name"
            rules="required|min:8|max:30"
            v-slot="{ errors }"
          >
            <input
              type="text"
              class="input-field"
              v-model="register.name"
              placeholder="Your name.."
              required
            />
            <span class="text-rose-600">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="" class="text-dark">Email Address</label>
          <ValidationProvider
            class="form-group w-[28rem]"
            name="Email Address"
            rules="required|email"
            v-slot="{ errors }"
          >
            <input
              type="email"
              class="input-field"
              v-model="register.email"
              placeholder="Your email address.."
              required
            />
            <span class="text-rose-600">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="" class="text-dark">Password</label>
          <ValidationProvider
            class="form-group w-[28rem]"
            name="Password"
            rules="required|min:8"
            v-slot="{ errors }"
          >
            <input
              type="password"
              class="input-field"
              v-model="register.password"
              placeholder="Your password.."
              required
            />
            <span class="text-rose-600">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <button
          type="submit"
          class="w-full btn btn-primary mt-[14px] disabled:btn-outline-primary"
          :disabled="invalid"
        >
          Register
        </button>
        <div class="flex flex-row justify-center space-x-1">
          <p>Already Have Account?</p>
          <NuxtLink
            :to="{ name: 'login' }"
            class="font-medium no-underline text-primary hover:underline"
            >Please Login</NuxtLink
          >
        </div>
      </form>
    </ValidationObserver>
  </section>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      register: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userRegister() {
      try {
        // Send Registration Data to Server
        let response = await this.$axios.post('/register', this.register)

        // Redirect to Login Page
        this.$router.push({ name: 'login' })

        // If Successful, Login User
        // try {
        //   let login = await this.$auth.loginWith('local', {
        //     data: {
        //       email: this.register.email,
        //       password: this.register.password,
        //     },
        //   })
        //   console.log(login)
        // } catch (error) {
        //   console.log(error)
        // }

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
