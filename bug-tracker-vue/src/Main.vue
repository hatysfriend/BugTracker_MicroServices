<template>
  <div>
    <Navbar v-bind="username"/>
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
  <p>JWT: {{jwt}}</p>
    <p>User ID: {{jwtData.id}}</p>
    <p>Issuer: {{jwtData.username}}</p>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import jwtserializer from './scripts/jwt-serializer';
// import BugCard from './components/BugCard.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      jwt: undefined,
      bugs: [],
      createdBugs: [],
      inProgressBugs: [],
      fixedBugs: []
    };
  },
  methods: {
    getBugs() {
      fetch('http://localhost:3002/bugs/getAll', {
        headers: new Headers({
          Authorization: `Bearer: ${this.jwt}`
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
    fetchJWT() {
      this.jwt = jwtserializer.getJwt();
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
  computed: {
    jwtData() {
      if (this.jwt) {
        const data = JSON.parse(atob(this.jwt.split('.')[1]));
        console.log(data);
        return data;
      }
      return {};
    }
  },
  created() {
    this.fetchJWT();
    this.getBugs();
  },
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
