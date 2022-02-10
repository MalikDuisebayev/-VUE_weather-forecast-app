<template>
  <div class="setting">
    <div class="container">
      <div class="setting__inner">
        <h1>Setting app</h1>
        <form @submit.prevent>
          <div class="setting__top">
            <label for="firstname">
              First name:
              <input
                class="setting__top-input"
                type="text"
                id="firstname"
                v-model="newSetting.firstName"
              />
            </label>
          </div>
          <div class="setting__top">
            <label for="lastname">
              Last name:
              <input
                class="setting__top-input"
                type="text"
                id="lastname"
                v-model="newSetting.lastName"
              />
            </label>
          </div>
          <div class="setting__top">
            <label for="profession">
              Profession:
              <input
                class="setting__top-input"
                type="text"
                id="profession"
                v-model="newSetting.profession"
              />
            </label>
          </div>

          <div class="setting__middle-input">
            <select v-model="newSetting.background">
              <option disabled value="">Выберите тему</option>
              <option v-for="(color,idx) in colors" :key="idx" :value="color.color"> {{color.name}} </option>  
            </select>
          </div>
          <my-button class="btn">Save</my-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "./UI/myButton.vue";
export default {
  components: { myButton },
  
      props:{
          newSetting:{
              type: Object,
              required: true
          }
      }
  ,
  data() {
    return {
      colors: [
        { name: "Teal", color: "teal" },
        { name: "Darkred", color: "darkred" },
        { name: "Orange", color: "orange" },
        { name: "Black", color: "black" },
      ],
      colort: ''
    };
  },
  methods: {
    changeColor(color) {},
  },
};
</script>

<style scoped>
.setting {
  width: 100%;
}
.setting__inner {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  min-height: 100vh;
  width: 100%;
  padding: 15px 18px;
  display: flex;
  flex-direction: column;
}
.setting__inner h1 {
  margin-bottom: 50px;
}
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 22px;
  width: 100%;
}
.setting__top-input {
  width: 100%;
  padding: 15px 18px;
  font-size: 19px;
  margin-bottom: 20px;
}
.setting__middle-input {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;
}
.setting__middle-input label {
  margin-left: 20px;
  width: 100%;
}
.btn {
  padding: 15px 50px;
  background: rgb(26, 26, 114);
  align-self: flex-end;
}
</style>