<template>
  <div>
      <add-category/>
      <add-menu/>
      <add-user/>
      <log-in/>
  </div>
</template>

<script>
import LogIn from '../components/LogIn.vue'
import AddCategory from '../pages/admin/AddCategory.vue'
import AddMenu from '../pages/admin/AddMenu.vue'
import AddUser from '../pages/admin/AddUser.vue'
export default {
  components: { AddCategory, AddMenu, AddUser ,LogIn },

}
</script>

<style>

</style>