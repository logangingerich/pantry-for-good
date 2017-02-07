import angular from 'angular';

export default angular.module('users')
  .component('resetPasswordSuccess', {
    template: `
      <section class="row text-center">
        <h3 class="col-md-12">Password successfully reset</h3>
        <a href="/#!/" class="col-md-12">Continue to home page</a>
      </section>
    `
  })
  .name;
