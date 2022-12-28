<template>
  <form action="" method="" class="form-login">
    <h2>Login</h2>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        name="name"
        placeholder="Username"
        id="name"
        v-model="name"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
        id="password"
        v-model="password"
      />
    </div>
    <div class="form-group">
      <input type="submit" class="form-control" name="login" value="Login" />
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.form-login {
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 24px;
  position: absolute;
  width: 382px;
  height: 476px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.form-login > h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;
  line-height: 39px;
  /* identical to box height */

  color: #333333;
}
.form-group {
  width: 317px;
  height: 40px;
}
.form-group > input[type="text"],
.form-group > input[type="password"] {
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: center;
  outline: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.form-group > input[type="text"]::placeholder,
.form-group > input[type="password"]::placeholder {
  font-family: "Inter";
  font-style: normal;
  text-indent: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  color: rgba(153, 153, 153, 0.28);
}
.form-group > input[type="text"]:focus,
.form-group > input[type="password"]:focus {
    text-indent: 10px;
}
.form-group > input[type="submit"] {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  outline: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 143% */
  justify-content: center;
  background: #627D98;
  border-radius: 4px;
  color: #ffffff;
}
</style>
