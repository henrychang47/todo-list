import './style.css';

import sideBar from './modules/sideBar';
import data from './modules/data';

window.onload = function () {
  data.getFromLocal();
  sideBar.displayList(data.projectList);
}