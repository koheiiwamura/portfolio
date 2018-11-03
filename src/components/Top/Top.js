import Header from "../Header/index.vue"
import Footer from "../Footer/index.vue"
import eventBus from '../../helper/eventBus'



export default {
    name: 'top',
    components: { Header, Footer },
    mounted: function () {
      eventBus.$on('changeContent', this.changeContent);
    },
    data: function () {
      return {
      }
    },
    methods: {
      changeContent: function (requreContent) {

      var pageNum = 1
      var pageNumDict = {
        'profile': 0,
        'work': 1,
        'contact': 2
      }

      var slideCurrent = 0;
      var slideWidth = $('.slide').outerWidth();
      var slideNum = $('.slide').length;
      var slideSetWidth = slideWidth * slideNum;

      $('.slide-set').css('width', slideSetWidth);

      var sliding = function(){
        $('.slide-set').animate({
          left: slideCurrent * -slideWidth
        });
      }

      slideCurrent = pageNumDict[requreContent]
      sliding()



      }
    }

}
