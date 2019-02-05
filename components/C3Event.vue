<template>
  <div
    class="event"
    itemscope
    itemtype="http://schema.org/Event"
    itemprop="startDate"
    :content="event.attributes.event_date"
  >
    <h2
      class="event__title"
      itemprop="name"
      v-html="event.attributes.title"
    />
    <div
      itemprop="location"
      itemscope
      itemtype="http://schema.org/Place"
      aria-hidden="true"
      class="event__location"
    >
      <c3-address />
    </div>
    <div v-html="event.html" />
  </div>
</template>

<script>
import C3Address from '@/components/C3Address.vue'

export default {
  components: {
    C3Address
  },
  props: {
    event: {
      type: Object,
      default: function() {}
    }
  },
  computed: {
    eventAddress() {
      return this.event.location
        ? this.event.location
        : this.$store.state.c3vAddress
    }
  }
}
</script>

<style lang="scss">
.event {
  .event__location {
    @extend %visually-hidden;
  }
}
</style>
