<template>
  <div v-if="jwt != undefined">
    <Navbar :username = jwtData.username />
    <div id="main">
    <div class="columns" id="containerGroup">
      <div class="column">
        <h5 class="notification is-danger">Created</h5>
        <div class="container" v-dragula="colOne" service="itemsService" drake="items">
          <div v-for="bug in createdBugs" :key="bug._id">
            <BugCard :bug="bug"/>
          </div>
        </div>
        <button class="buttton is-primary">+ Add Another Card</button>
      </div>

      <div class="column">
        <h5 class="notification is-warning">In-Progress</h5>
        <div class="container" v-dragula="colTwo" service="itemsService" drake="items">
          <div v-for="bug in inProgressBugs" :key="bug._id">
            <BugCard :bug="bug"/>
          </div>
        </div>
        <button class="buttton is-primary">+ Add Another Card</button>
      </div>

      <div class="column">
        <h5 class="notification is-success">Fixed</h5>
        <div class="container" v-dragula="colThree" service="itemsService" drake="items">
          <div v-for="bug in fixedBugs" :key="bug._id">
            <BugCard :bug="bug"/>
          </div>
        </div>
        <button class="buttton is-primary">+ Add Another Card</button>
      </div>
    </div>

  </div>
  <p>JWT: {{jwt}}</p>
    <p>User ID: {{jwtData.id}}</p>
    <p>Issuer: {{jwtData.username}}</p>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import jwtmixin from './mixins/jwt-handler-mixin';
import BugCard from './components/BugCard.vue';

export default {
  components: {
    Navbar,
    BugCard
  },
  mixins: [jwtmixin],
  data() {
    return {
      bugs: [],
      createdBugs: [],
      inProgressBugs: [],
      fixedBugs: [],
      colOne: [],
      colTwo: [],
      colThree: []
    };
  },
  methods: {
    async getBugs() {
      fetch('http://localhost:3002/bugs/getAll', {
        headers: new Headers({
          Authorization: `Bearer: ${await this.getJwt()}`
        })
      })
        .then((res) => {
          res.json().then((bugs) => {
            this.bugs = bugs;
            this.sortBugs();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sortBugs() {
      this.createdBugs = this.bugs.filter((bug) => {
        return bug.status === 'Created';
      });
      this.inProgressBugs = this.bugs.filter((bug) => {
        return bug.status === 'In-Progress';
      });
      this.fixedBugs = this.bugs.filter((bug) => {
        return bug.status === 'Fixed';
      });
    }
  },
  created() {
    this.getBugs();
    this.$dragula.createService({
      name: 'itemsService',
      drakes: {
        items: {
          moves: (el, source, handle, sibling) => {
            console.log(`${el} ${JSON.stringify(source)} ${JSON.stringify(handle)} ${JSON.stringify(sibling)}`);
            return true;
          },
          dropModel: (name, el, source, target) => {
            console.log(`Source ${source} Target: ${target}`);
          }
        }
      },
      options: {}
    });

    const { $service } = this.$dragula;
    $service.eventBus.$on('dropModel', (args) => {
      console.log(args);
    });
  },
};
</script>

<style lang="scss" scoped>
.gu-mirror {
  max-height: 1px;
  max-width: 1px;
}

.notification {
  padding: 10px;
}

.container {
  border: solid;
  border-width: 2px;
  border-color: #303030;
  background-color: #303030;
  border-radius: 1%;
  height: max-content;
  min-height: 2rem;
  padding: 10px;
}

</style>
