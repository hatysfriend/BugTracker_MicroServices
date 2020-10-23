<template>
  <div>
    <div v-if="jwtData.username">
      <Navbar :username="jwtData.username" />
      <div id="main">
        <div class="columns" id="containerGroup">
          <div class="column">
            <h5 class="notification is-danger">Created</h5>
            <div
              class="container"
              v-dragula="colOne"
              service="itemsService"
              drake="items"
            >
              <div v-if="loading">
                <Loading />
              </div>
              <div v-for="bug in createdBugs" :key="bug._id">
                <BugCard :bug="bug" />
              </div>
            </div>
            <button class="buttton is-primary">+ Add Another Card</button>
          </div>

          <div class="column">
            <h5 class="notification is-warning">In-Progress</h5>
            <div
              class="container"
              v-dragula="colTwo"
              service="itemsService"
              drake="items"
            >
              <div v-if="loading">
                <Loading />
              </div>
              <div v-for="bug in inProgressBugs" :key="bug._id">
                <BugCard :bug="bug" />
              </div>
            </div>
            <button class="buttton is-primary">+ Add Another Card</button>
          </div>

          <div class="column">
            <h5 class="notification is-success">Fixed</h5>
            <div
              class="container"
              v-dragula="colThree"
              service="itemsService"
              drake="items"
            >
              <div v-if="loading">
                  <Loading />
              </div>
              <div v-for="bug in fixedBugs" :key="bug._id">
                <BugCard :bug="bug" />
              </div>
            </div>
            <button class="buttton is-primary">+ Add Another Card</button>
          </div>
        </div>
      </div>
      <p>JWT: {{ jwtData }}</p>
      <p>User ID: {{ jwtData.id }}</p>
      <p>Issuer: {{ jwtData.username }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BugCard from './components/BugCard.vue';
import Loading from './components/LoadingIndicator.vue';

import jwtmixin from './mixins/jwt-handler-mixin';
import bugDataService from './services/bug-data.service';

export default {
  components: {
    Loading,
    Navbar,
    BugCard,
  },
  mixins: [jwtmixin],
  data() {
    return {
      loading: true,
      bugs: [],
      createdBugs: [],
      inProgressBugs: [],
      fixedBugs: [],
      colOne: [],
      colTwo: [],
      colThree: [],
    };
  },
  methods: {
    async getBugs() {
      bugDataService.getAll()
        .then((res) => {
          res.json().then((data) => {
            console.log(JSON.stringify(data));
            this.bugs = data;
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
      this.loading = false;
    },
  },
  created() {
    this.getBugs();
    this.$dragula.createService({
      name: 'itemsService',
      drakes: {
        items: {
          moves: (el, source, handle, sibling) => {
            console.log(
              `${el} ${JSON.stringify(source)} ${JSON.stringify(
                handle
              )} ${JSON.stringify(sibling)}`
            );
            return true;
          },
          dropModel: (name, el, source, target) => {
            console.log(`Source ${source} Target: ${target}`);
          },
        },
      },
      options: {},
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
