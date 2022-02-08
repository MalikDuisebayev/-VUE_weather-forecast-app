<template>
  <div class="notes">
    <form @submit.prevent>
      <input type="text" placeholder="Заголовок" v-model.trim="title" />
      <input type="text" placeholder="Описание" v-model.trim="body" />
      <my-button @click="createNote">Сохранить</my-button>
    </form>
    <div class="notes__list">
      <div class="notes__item" v-for="note in notes" :key="note.id">
        <p><strong>Заголовок:</strong> {{ note.title }}</p>
        <p><strong>Описание:</strong> {{ note.body }}</p>
        <my-button class="notes__btn" @click="deleteNote(note)"
          >Удалить</my-button
        >
      </div>
      <div class="notes__length">
        <p v-if="notes.length">
          <strong>Количество заметок:</strong> {{ notes.length }}
        </p>
        <p v-else><strong>Добавьте свою первую заметку</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "./UI/myButton.vue";
export default {
  components: { myButton },
  data() {
    return {
      notes: [],
      title: "",
      body: "",
    };
  },
  methods: {
    createNote() {
      if (!this.title || !this.body) {
        return;
      }
      if(!this.notes.length){
        this.saveNote()
      }
      this.notes.push({
        title: this.title,
        body: this.body,
        id: Date.now(),
      });
      this.saveNote();
      this.title = "";
      this.body = "";
    },
    deleteNote(note) {
      this.notes = this.notes.filter((i) => i.id !== note.id);

      this.saveNote();
    },
    saveNote() {
      const data = JSON.stringify(this.notes);
      localStorage.setItem("note", data);
    },
  },
  mounted() {
    if (localStorage.getItem("note")) {
      try {
        this.notes = JSON.parse(localStorage.getItem("note"));
      } catch (e) {
        localStorage.removeItem("note");
      }
    }
  },
};
</script>

<style scoped>
.my{
  background: black;
  color: white;
  padding: 18px 15px;
}
.my input{
  margin-right: 50px;
}
.my input[type='checkbox']{
  border-radius: 50%;
}

.af{
  text-decoration: line-through;
  
}
.ad{
  pointer-events: none;
}
.notes {
  max-width: 100%;
}
.notes form {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
.notes form input {
  padding: 15px 18px;
  margin-bottom: 20px;
  width: 100%;
}
button {
  align-self: flex-end;
  background: rgb(26, 26, 114);
}
.notes__list {
  width: 100%;
}
.notes__item {
  width: 100%;
  padding: 15px 18px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
}
.notes__item p {
  max-width: 100%;
}
.notes__item p:first-child {
  margin-bottom: 15px;
}
.notes__btn {
  position: absolute;
  background-color: darkred;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
}
/* .notes__radio{
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
} */
.notes__length {
  padding: 15px 18px;
  text-align: right;
}
</style>