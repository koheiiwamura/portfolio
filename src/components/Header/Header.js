import eventBus from '../../helper/eventBus'

export default {
    name: 'Header',
    data: function(){
      return {
        selectedMenu: "profile",
        menus: ["profile", "work", "contact"]
      }
    },
    methods: {
      triggerChangeContent: function(menu) {
        event.preventDefault();
        this.selectedMenu = menu
        eventBus.$emit('changeContent', menu);
      }
    }
}
