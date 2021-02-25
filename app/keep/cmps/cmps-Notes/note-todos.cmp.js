

export default {
   name: 'note-todos-cmp',
   props: ['dynamicNote'],
   template: `
              <section class="note-todos">
                 <h2 class="note-title">{{dynamicNote.info.title}}</h2>
                 <ul>
                    <li class="todo-toggle" v-for="(todo, idx) in dynamicNote.info.todos" :class="{'todo-done': todo.isDone}" :key=idx>
                       <span @click="toggleTodo(idx)">{{todo.txt}}</span>
                    </li>
                 </ul>   
              </section>
              `,
   methods: {
      toggleTodo(idx) {
         this.$emit('toggleTodo', this.dynamicNote, idx)
      }
   },
   computed: {

   }

}