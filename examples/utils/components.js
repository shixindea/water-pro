import '@@style';
import water from '@@';
import Md from '../components/md.vue';
import Api from '../components/api.vue';
import demoBox from '../components/demoBox.vue';
import demoContainer from '../components/demoContainer.vue';
import demoSort from '../components/demoSort';


// import AContainerScroll from '../../components/container-scroll';
// import AContainerCollapse from '../../components/container-collapse';
// import ABasicArrow from '../../components/basic-arrow';
// import ABasicHelp from '../../components/basic-help/src/basic-help';
// import ABasicTitle from '../../components/basic-title/basic-title';
// import AScrollbar from '../../components/scrollbar/src/scroll/Scroll.vue';
// import AColorPicker from '../../components/color-picker';
// import AModalPro from '../../components/modal-pro/src/ModalPro.vue';
// import AFormPro from '../../components/form-pro/src/FormProaa.vue';
import ASelectApi from '../../components/select-api';
import ATagGroup from '../../components/tag-group';
import ATagModalList from '../../components/tag-modal-list';
import AUploadName from '../../components/upload-name';
import AUploadImage from '../../components/upload-image';
import ATablePro from '../../components/table-pro';


const basic = (_, { slots }) => {
  return slots && slots.default && slots.default();
};

export const setupComponents = (app) => {
  app.use(water);

  // app.component(AContainerScroll.name, AContainerScroll);
  // app.component(AContainerCollapse.name, AContainerCollapse);
  // app.component(ABasicArrow.name, ABasicArrow);
  // app.component(ABasicHelp.name, ABasicHelp);
  // app.component(ABasicTitle.name, ABasicTitle);
  // app.component(AScrollbar.name, AScrollbar);
  // app.component(AColorPicker.name, AColorPicker);
  // app.component(AModalPro.name, AModalPro);
  // app.component(AFormPro.name, AFormPro);
  app.component(ASelectApi.name, ASelectApi);
  app.component(ATagGroup.name, ATagGroup);
  app.component(ATagModalList.name, ATagModalList);
  app.component(AUploadName.name, AUploadName);
  app.component(AUploadImage.name, AUploadImage);
  app.component(ATablePro.name, ATablePro);

  app.component(Md.name, Md);
  app.component(Api.name, Api);
  app.component('demo-box', demoBox);
  app.component('demo-container', demoContainer);
  app.component('demo-sort', demoSort);
  app.component('demo', basic)
}
