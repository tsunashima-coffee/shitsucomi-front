<template>
  <div class="hello">
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.body }}</li>
    </ul>
  </div>
</template>

<script>
import Api from '../../apis/api.js';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      todos: null,
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos () {
      Api.getTodos()
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => {
          console.error(error);
        })
    }
  }
}
</script>
