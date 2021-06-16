/** @format */

import { ref } from 'vue';

export default (defaultValue?: boolean | string | number) => {
  const loading = ref(defaultValue);
  const setLoading = (value = !loading.value) => {
    loading.value = value;
  };

  return { loading, setLoading };
};
