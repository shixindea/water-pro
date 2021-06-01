<template>
  <a-select
    mode="multiple"
    label-in-value
    v-model:value="value"
    placeholder="Select users"
    style="width: 100%"
    :filter-option="false"
    :not-found-content="fetching ? undefined : null"
    @search="fetchUser"
  >
    <template v-if="fetching" #notFoundContent>
      <a-spin size="small" />
    </template>
    <a-select-option v-for="d in data" :key="d.value">
      {{ d.text }}
    </a-select-option>
  </a-select>
</template>
<script>
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { debounce } from 'lodash-es';

export default defineComponent({
  setup() {
    let lastFetchId = 0;

    const state = reactive({
      data: [],
      value: [],
      fetching: false,
    });

    const fetchUser = debounce(value => {
      console.log('fetching user', value);
      lastFetchId += 1;
      const fetchId = lastFetchId;
      state.data = [];
      state.fetching = true;
      fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(body => {
          if (fetchId !== lastFetchId) {
            // for fetch callback order
            return;
          }
          const data = body.results.map(user => ({
            text: `${user.name.first} ${user.name.last}`,
            value: user.login.username,
          }));
          state.data = data;
          state.fetching = false;
        });
    }, 800);

    watch(state.value, () => {
      state.data = [];
      state.fetching = false;
    });

    return {
      ...toRefs(state),
      fetchUser,
    };
  },
});
</script>
