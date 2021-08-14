<template>
  <div class="body">
    
    <div class="b_image"></div>
    <form class="container-fluid" @submit.prevent="onSubmit" method="POST" action="/">
      <div class="col-lg-10 offset-md-1" style="height:auto;">
        <h4>Ministry of Health</h4>
        <h1>COVID 19(CORONA VIRUS)</h1>
        <h4>Virus-Test Registration Form</h4>
        <div class="row">
          <div class="col">
            <div class="form-field">
              <label>Surname <span class="required">*</span></label>
              <input name="surname" id="surname" v-model.trim="test.surname" />
              <small
                class="error"
                v-for="(error, index) of v$.test.surname.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
            </div>
          </div>
          <div class="col">
            <div class="form-field">
              <label>Given Name <span class="required">*</span></label>
              <input
                name="givenName"
                id="givenName"
                v-model.trim="test.givenName"
              />
              <small
                class="error"
                v-for="(error, index) of v$.test.givenName.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-field">
              <label>Date of Birth <span class="required">*</span></label>
              <input name="dob" id="dob" type="date" v-model.trim="test.dob" />
              <small
                class="error"
                v-for="(error, index) of v$.test.dob.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
            </div>
          </div>
          <div class="col">
            <label>Place of Residence <span class="required">*</span></label>
            <div class="form-field">
              <input
                name="residence"
                id="residence"
                v-model.trim="test.residence"
              />
              <small
                class="error"
                v-for="(error, index) of v$.test.residence.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>Occupation <span class="required">*</span></label>
            <div class="form-field">
              <input
                name="occupation"
                id="occupation"
                v-model.trim="test.occupation"
              />
              <small
                class="error"
                v-for="(error, index) of v$.test.occupation.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
            </div>
          </div>
          <div class="col">
            <div class="form-field">
              <label>Nationality <span class="required">*</span></label>
              <input
                name="nationality"
                id="nationality"
                v-model.trim="test.nationality"
              />
              <small
                class="error"
                v-for="(error, index) of v$.test.nationality.$errors"
                :key="index"
              >
                {{ error.$property }} {{ error.$message }}
              </small>
            </div>
          </div>
        </div>

        <h6
          style="margin:20px 0 -10px 0; text-align:left;  font-weight: bolder;"
        >
          Gender
        </h6>

        <hr />
        <div style="margin-top:-10px;">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="Male"
              checked
              v-model.trim="test.gender"
            />
            <h6 class="form-check-label">Male</h6>
          </div>
          <div class="form-check" style="margin-left: 70px;">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="Female"
              v-model.trim="test.gender"
            />
            <h6 class="form-check-label">Female</h6>
          </div>
        </div>
        <div class="form-row" style="margin-top:50px;">
          <div class="col form-group">
            <label>Category</label>
            <select name="select" id="select" v-model.trim="test.select">
              <option value="" selected disabled hidden
                >--Select Category--</option
              >
              <option>Returnee</option>
              <option>Alert</option>
              <option>Volunteer</option>
              <option>Contact</option>
            </select>
            <small
              class="error"
              v-for="(error, index) of v$.test.select.$errors"
              :key="index"
            >
              {{ error.$property }} {{ error.$message }}
            </small>
          </div>
        </div>
      </div>
      <div class="form-row" style="margin:20px 0px 10px 350px;">
        <div class="col form-group">
          <button class="btn btn-danger btn-lg" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import API from "../api";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
// const alpha = helpers.regex("alpha", /^[a-zA-Z]+$/);
export default {
  name: "Home",
  props: {
    msg: String,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      test: {
        surname: "",
        givenName: "",
        dob: "",
        residence: "",
        occupation: "",
        nationality: "",
        select: "",
        gender: "",
      },
    };
  },
  validations() {
    return {
      test: {
        surname: { required, minLength: minLength(4) },
        givenName: { required, minLength: minLength(4) },
        residence: { required },
        occupation: { required },
        dob: { required },
        nationality: { required },
        select: { required },
      },
    };
  },
  methods: {
    onSubmit: function() {
      this.v$.$touch();
      if (this.v$.$error) return;
      const response = API.addTest(this.test);
      this.$router.push({
        name: "Home",
        params: { message: response.message },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  border: 1px solid;
  margin: 30px 340px;
  height: auto;
}

.b_image {
  width: 100%;
  height: 80px;
  background-image: url("../assets/form-header-image.png");
  background-size: cover;
}

.col input,
select {
  padding: 5px 12px 10px 12px;
  /* border: 1px solid rgb(71, 71, 71); */
  border-radius: 2px;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 10%);
  background-color: #fafbfc;
  font-size: 14px;
  letter-spacing: 1px;
  /* border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px; */
}

input:focus,
select:focus {
  /* -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important; */
  /* box-shadow: inset rgb(158, 158, 158) !important; */
  border: 1px solid #304ffe;
  outline-width: 0;
}
select {
  text-align-last: center;
  /* webkit*/
}
option {
  text-align: center;
}

h4 {
  font-size: 14px;
  text-align: center;
}

h1 {
  font-size: 21px;
  text-align: center;
  font-weight: bolder;
}

.form-check {
  float: left;
}
label {
  font-weight: bolder;
  text-align: left !important;
  float: left;
}
small {
  color: red;
  float: left;
}
button {
  width: 200px;
}
</style>
