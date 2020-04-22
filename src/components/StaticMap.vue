<template>
    <img :src="imgSrc" :alt="getAlt">
</template>

<script>
/**
 * Documentation Help
 * @url https://vue-styleguidist.github.io/docs/Documenting.html#code-comments
 */
import querystring from 'querystring';

	export default {
    name: "StaticMap",
		data() {
			return {
        base: 'https://maps.googleapis.com/maps/api/staticmap?'
			}
    },
    props: {
      /**
       * Name of the environment variable that contains your API Key
       */
      env_var: {
        type: String,
        default: 'VUE_APP_GOOGLE_MAPS_API_KEY'
      },
      zoom: {
        type: Number,
        default: 12
      },
      size: {
        type: String,
        default: "600x300",
        validator: function(val){
          return val; // @todo need regex here
        }
      },
      type: {
        type: String,
        default: 'roadmap',
        validator: function(value){
          return [ 'roadmap', 'satellite', 'hybrid', 'terrain'].indexOf(value) !== -1;
        }
      },
      pitch: {
        type: Number,
        default: 0
      },
      format: {
        type: String,
        default: 'png',
        validator: function(value){
          return [ 'png', 'png8', 'gif', 'jpg', 'jpg-baseline'].indexOf(value) !== -1;
        }
      },
      alt: {
        type: String,
        default: "The University of Connecticut"
      },
      address: {
        type: String,
        default: "University of Connecticut, Storrs Mansfield, CT"
      }
    },
    computed: {

      /** 
       * Builds the image URL
       * @url https://developers.google.com/maps/documentation/maps-static/dev-guide
       */
      imgSrc: function(){
          let params = {
            key: process.env[this.env_var],
            zoom: this.zoom,
            size: this.size,
            type: this.type,
            pitch: this.pitch,
            format: this.format,
            center: this.address
          }
          return this.base + querystring.stringify(params);
      },
      getAlt: function(){
        if(!Object.prototype.hasOwnProperty.call(process.env, this.env_var)){
          return 'You must specify an API key in your ENV file.'
        }else{
          return this.alt
        }
      }
    }
	}
</script>

<style scoped>
img {
    /* width: 100%;
    max-width: 100%; */
}
</style>
