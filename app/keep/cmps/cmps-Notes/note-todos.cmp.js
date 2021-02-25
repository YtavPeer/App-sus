

export default {
   name: 'note-todos-cmp',
   props: ['dynamicNote'],
   template: `
              <section class="note-todos">
                 <h2>{{dynamicNote.info.title}}</h2>
                 <ul>
                    <li class="todo-toggle" v-for="(todo, idx) in dynamicNote.info.todos" :key=idx>
                       <span @click="toggleTodo(idx)">{{todo.txt}}</span>
                    </li>
                 </ul>   
              </section>
              `,
   methods: {
      toggleTodo(idx){
         //need to implement toggle todo
         console.log(idx);
      }
   },
   computed: {

   }

}