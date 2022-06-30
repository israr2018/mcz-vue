<template>
    <div>
        <Toolbar>
            <template #start>
                <Button label="New" icon="pi pi-plus" class="mr-2" />
                <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
                <i class="pi pi-bars p-toolbar-separator mr-2" />
                <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-calendar" class="p-button-success mr-2" />
                <Button icon="pi pi-times" class="p-button-danger" />
            </template>
        </Toolbar>
    </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    title: String,
  },
  data() {
    return {
      items: [
        {
          label: "Manage Bookings",
          command: () => {
            this.$router.push("/bookings");
          },
        },
        {
          label: "Manage Vacation Packages",
          command: () => {
            this.$router.push("/catalog");
          },
        },
        {
          label: "Log Out",
          command: () => {
            this.logOut();
          },
        },
      ],
    };
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
  beforeMount() {
    document.title = this.title;
  },
};
</script>