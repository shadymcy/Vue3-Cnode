<template>
  <Header title='Cnode' color="#bfa"></Header>
  <Search></Search>
  <Panel></Panel>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import Panel from '@/components/Panel.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Search,
    Panel,
}
}
</script>
