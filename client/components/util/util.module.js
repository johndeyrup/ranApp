'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('ranAppApp.util', [])
  .factory('Util', UtilService)
  .name;
