import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
// Import Your component
import HeroContent from '@/components/HeroContent.vue';

const CustomElement = wrap(Vue, HeroContent);
// Define tag
window.customElements.define('hero-content', CustomElement);

//node_modules/.bin/vue-cli-service build --target wc --name hero-content ./src/HeroContentGen.js