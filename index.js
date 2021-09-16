var myName = {
  template: '<p>私の名前はBobです！</p>'
};

var myButton = {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">{{ count }}</button>'
};

var app = new Vue({
  el: '#app',
  components: {
    'my-name' : myName,
    'my-button' : myButton,
  }
})
