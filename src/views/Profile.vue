<template>
    <div>
        <Navbar />
        <h2>Profile</h2>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Profile',
  components: {
    Navbar
  }
}
</script>