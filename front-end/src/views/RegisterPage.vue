<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="register-form">
      <div class="logo-wrapper">
        <img class="logo" src="/static/images/logo.png">
        <div class="tagline">Open source task management tool</div>
      </div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" v-model="form.username">
        </div>
        <div class="form-group">
          <label for="emailAddress">Email address</label>
          <input type="email" class="form-control" id="emailAddress" v-model="form.emailAddress">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="form.password">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Create account</button>
        <p class="accept-terms text-muted">By clicking “Create account”, you agree to our <a href="#">terms of service</a> and <a href="#">privacy policy</a>.</p>
        <p class="text-center text-muted">Already have an account? <a href="/login">Sign in</a></p>
      </form>
    </div>
  </div>
  <footer class="footer">
    <span class="copyright">&copy; 2020 kokono.co.kr</span>
    <ul class="footer-links list-inline float-right">
      <li class="list-inline-item"><a href="#">About</a></li>
      <li class="list-inline-item"><a href="#">Terms of Service</a></li>
      <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
      <li class="list-inline-item"><a href="https://github.com/soongu" target="_blank">GitHub</a></li>
    </ul>
  </footer>
</div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data: function () {
    return {
      form: {
        username: '',
        emailAddress: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
}

.logo-wrapper {
  text-align: center;
  margin-bottom: 40px;
  .logo {
    max-width: 150px;
    margin: 0 auto;
  }
  .tagline {
    line-height: 1.8;
    color: #666;
  }
}

.register-form {
  margin-top: 50px;
  max-width: 320px;
  .form-group label {
    font-weight: bold;
    color: #555;
  }
  .accept-terms {
    margin: 20px 0 40px 0;
  }
}
.footer {
  width: 100%;
  font-size: 13px;
  color: #666;
  line-height: 40px;
  border-top: 1px solid #ddd;
  margin-top: 50px;

  .list-inline-item {
    margin-right: 10px;
  }

  a {
    color: #666;
  }
}
</style>
