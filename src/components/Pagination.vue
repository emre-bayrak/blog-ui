<template>
  <div class="container">
    <nav>
      <ul class="pagination justify-content-end">
        <li class="page-item" v-bind:class="{ disabled: prevPageToken === undefined }">
          <a @click="prevPage" class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item" v-bind:class="{ disabled: nextPageToken === undefined || videosLength < maxResults  }">
          <a @click="nextPage" class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['prevPageToken', 'nextPageToken', 'videosLength', 'maxResults', ],
  methods: {
    prevPage() {
      this.$emit('prev-page');
    },
    nextPage() {
      this.$emit('next-page');
    }
  }
};
</script>

<style>
.page-link {
  box-shadow: none !important;
}
</style>