<template>
  <div>
    <Navbar/>
    <div id="main">
    <div class="columns" id="containerGroup">
      <div class="column">
        <h5 class="notification is-danger">Created</h5>
        <div class="container" v-dragula="containerOne" drake="first-bag" id="Created">
          <div v-for="bug in createdBugs" :key="bug.description">
            {{ bug.description }}
          </div>
        </div>
        <button class="buttton is-primary">+ Add Another Card</button>
      </div>

      <div class="column">
        <h5 class="notification is-warning">In-Progress</h5>
        <div class="container" v-dragula="contianerTwo" drake="first-bag" id="In-Progress">
          <div v-for="bug in inProgressBugs" :key="bug.description">
            {{ bug.description }}
          </div>
        </div>
        <button class="buttton is-primary">+ Add Another Card</button>
      </div>

      <div class="column">
        <h5 class="notification is-success">Fixed</h5>
        <div class="container" v-dragula="containerThree" drake="first-bag" id="Fixed">
          <div v-for="bug in fixedBugs" :key="bug.description">
            {{ bug.description }}
          </div>
        </div>
        <button class="buttton is-primary">+ Add Another Card</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
// import BugCard from './components/BugCard.vue';

export default {
  components: {
    Navbar,
    // BugCard
  },
  data() {
    return {
      initialBugs: [
        {
          name: 'Broken link',
          author: 'Brock',
          status: 'Created',
          description: 'There was a a typo in the URL?',
          tags: [
            { name: 'URL', colour: 'secondary' },
            { name: 'Link', colour: 'info' }
          ],
          date: '06/01/2020',
          // comments: comments.initialComments,
        },
        {
          name: 'Home page button',
          author: 'Misty',
          status: 'Fixed',
          description: "The Button doesn't work on the home page :(",
          tags: [
            { name: 'UI', colour: 'warning' },
            { name: 'Button', colour: 'info' },
            { name: 'Bootstrap', colour: 'success' }
          ],
          date: '01/03/2020'
        },
        {
          name: 'Database Connection Broken',
          author: 'Proffesor Oak',
          status: 'In-Progress',
          description: 'The Database connection is giving an error on startup',
          tags: [
            { name: 'Mongo', colour: 'success' },
            { name: 'Database', colour: 'warning' },
            { name: 'Mongoose', colour: 'danger' }
          ],
          date: '03/07/2020'
        },
        {
          name: 'Date Bug',
          author: 'Ash Ketchum',
          status: 'In-Progress',
          description: 'When a date is added to a bug entry it is being saved wrong,'
          + 'sometimes a day gets added, sometimes a month, we are thinking that is has'
          + ' something to do with the mongo-db instance or the docker image/container',
          tags: [
            { name: 'Mongo', colour: 'success' },
            { name: 'Database', colour: 'warning' },
            { name: 'Mongoose', colour: 'danger' },
            { name: 'Container', colour: 'info' }
          ],
          date: '03/07/2020',
          archived: true
        }
      ],
      bugs: [],
      createdBugs: [],
      inProgressBugs: [],
      fixedBugs: []
    };
  },
  created() {
    this.bugs = this.initialBugs;
    this.createdBugs = this.bugs.filter((bug) => {
      return bug.status === 'Created';
    });
    this.inProgressBugs = this.bugs.filter((bug) => {
      return bug.status === 'In-Progress';
    });
    this.fixedBugs = this.bugs.filter((bug) => {
      return bug.status === 'Fixed';
    });
  },
  methods: {
    getBugs() {
      fetch('http://localhost:3002/bugs/getAll')
        .then((res) => {
          res.json().then((bugs) => {
            this.bugs = bugs;
          });
        })
        .catch((err) => {
          console.log(`${err}We allowed To see this error`);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-style: solid;
  border-width: 2px;
  border-color: aqua;
}

.gu-mirror {
  max-height: 1px;
  max-width: 1px;
}

.notification {
  padding: 10px;
}

.container {
  border: solid;
  border-color: #383838;
  background-color: #383838;
  border-radius: 1%;
  height: max-content;
  min-height: 2rem;
}
</style>
