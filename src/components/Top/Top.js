import Header from "../Header/index.vue"
import Footer from "../Footer/index.vue"
import eventBus from '../../helper/eventBus'

export default {
    name: 'top',
    components: { Header, Footer },
    mounted: function () {
      eventBus.$on('changeContent', this.changeContent);
    },
    methods: {
      changeContent: function (requreContet) {
        console.log(requreContet)
      }
    }

}
