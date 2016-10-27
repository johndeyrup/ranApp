import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http) {
    this.someVariable = 1 + 1;
    this.functionResult = this.functionTest();
  }

  functionTest() { 
    return "hi";
  }
}

export default angular.module('ranAppApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
