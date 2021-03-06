import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('profiles');
  this.route('posts');
  this.route('post', { path: '/posts/:post_id' });
});

export default Router;
