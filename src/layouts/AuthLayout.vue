<template>
    <div class="main-content-wrap sidenav-open d-flex flex-column">
        <div class="main-content">
            <div class="row mb-4">
                <h2>Login</h2>
                <div class="col-md-12 mb-4">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout',
}
</script>

<style scoped>
.main-content-wrap {
    background:none;
}
</style>