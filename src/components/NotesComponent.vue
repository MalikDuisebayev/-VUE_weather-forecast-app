<template>
  <div class="notes">
      <form @submit.prevent>
        <input type="text" placeholder="Заголовок">
        <input type="text" placeholder="Описание">
        <my-button>Сохранить</my-button>
      </form>
      <div class="post__list">
          <p></p>
          <p></p>
      </div>
  </div>
</template>

<script>
import myButton from './UI/myButton.vue'
export default {
  components: { myButton },
  data() {
    return {
      notes:[
        {
          title: 'Malik',
          body: 'Hello Vue JS'
        }
      ]
    }
  },

}
</script>

<style scoped>
  .notes form{
    display: flex;
    flex-direction: column;
  }
  .notes form input, button{
    padding: 15px 18px;
    margin-bottom: 20px;
  }
  button{
    align-self: flex-end;
  }
</style>