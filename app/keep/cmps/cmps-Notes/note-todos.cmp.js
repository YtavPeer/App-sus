

export default {
   name: 'note-todos-cmp',
   props: ['dynamicNote'],
   template: `
              <section class="note-todos">
              <img   src="./img/list.png" alt="" width=25>
              <hr class="article-icon" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />
            
                 <h2 class="note-title">{{dynamicNote.info.title}}</h2>
                 <ul>
                    <li class="todo-toggle" v-for="(todo, idx) in dynamicNote.info.todos" :class="{'todo-done': todo.isDone}" :key=idx>
                       <span @click="toggleTodo(idx)">{{todo.txt}}</span>
                    </li>
                 </ul>  
                 <hr class="hr-article" style="height:1px;border:none;color:#ccc;background-color:#ccc;" />
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