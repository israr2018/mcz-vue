<template>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand">Malakand Car Zone</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav pl-4">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <router-link to="/post-car-ad" class="nav-link">Post Car Ad</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/upload-csv" class="nav-link">Upload CSV</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/steps" class="nav-link">Steps Demo</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
          <!--   <a class="nav-link" router> Login</a> -->
        </li>
        <li class="dropdown">
          <a class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  methods:{
    logout(){
        this.$router.push('/home')
    }
     
  }
}

</script>  
