var app = new Vue({
  el: '#app',
  data: {
    egg_status: '半熟',
    message : '....',
  },
  computed: {
    checkEgg: function () {
      if (this.egg_status == '完熟') {
        return 'やけたよ！'
      } else {
        return 'まだまだ'
      }
    }
  },
  watch : {
    egg_status: function () {
      var vm = this;
      setTimeout(function () {
        console.log(this);
        console.log(vm);
        vm.message = 'かわったよ！'
      }, 3000);
    }
  }
})
