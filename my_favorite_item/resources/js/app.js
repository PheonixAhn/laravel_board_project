// common
import HeaderComponent from "./components/HeaderComponent";
import RecommendCardsComponent from "./components/RecommendCardsComponent";
import CardsComponent from "./components/CardsComponent";

// detail
import TitleBarComponent from "./components/detail/TitleBarComponent";
import ContentsComponent from "./components/detail/ContentsComponent";
import CommentsComponent from "./components/detail/CommentsComponent";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('header_component', HeaderComponent);
Vue.component('recommend_cards_component', RecommendCardsComponent);
Vue.component('cards_component', CardsComponent);

Vue.component('title_bar_component', TitleBarComponent);
Vue.component('contents_component', ContentsComponent);
Vue.component('comments_component', CommentsComponent);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
