import Header from "../Header/index.vue"
import Footer from "../Footer/index.vue"
import eventBus from '../../helper/eventBus'


const slideSetWidth = window.innerWidth * 3
const slideWidth = window.innerWidth
const slideNum = 3
const pageNumDict = {
        'profile': 0,
        'work': 1,
        'contact': 2
      }

export default {
    name: 'top',
    components: { Header, Footer },
    mounted: function () {
      eventBus.$on('changeContent', this.changeContent);
    },
    data: function () {
      return {
        scrollWidth: slideSetWidth,
        image_src: require("../../assets/images/sample.jpeg")
      }
    },
    methods: {
      changeContent: function (requreContent) {
      var slideCurrent = pageNumDict[requreContent];
      $(this.$refs.slideSet).animate({
        left: slideCurrent * -slideWidth
      });
      }
    }

}
