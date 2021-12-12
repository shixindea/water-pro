# custom date library

Starting from the V4 version, the momentjs library is replaced by dayjs by default. If you need to use the momentjs or date-fns date library, you can replace it as follows:

### 替换 DatePicker

```js
// moment or date-fns
import DatePicker from '@fe6/water-pro/es/date-picker/moment';
import TimePicker from '@fe6/water-pro/es/time-picker/moment';
import Calendar from '@fe6/water-pro/es/calendar/moment';
// import DatePicker from '@fe6/water-pro/es/date-picker/date-fns';
// import TimePicker from '@fe6/water-pro/es/time-picker/date-fns';
// import Calendar from '@fe6/water-pro/es/calendar/date-fns';
import { createApp } from 'vue';
import App from './App.vue';
import antd from '@fe6/water-pro';
const app = createApp(App);
app.use(DatePicker).use(TimePicker).use(Calendar).use(antd).mount('#app');
```

> Note: If you need to register the ant-design-vue component library globally, then `use(DatePicker)` `use(TimePicker)` `use(Calendar)` must be executed before `use(antd)`, otherwise the default cannot be overridden dayjs version.
