const { createApp } = Vue;



//option object.
createApp({
  data() { //metodo data()
    return {
      apiLink: 'https://flynn.boolean.careers/exercises/api/random/mail',


    }
  },
  methods: {
    getRandomNumber() {
      axios.get(this.apiLink).then((res) => {
        console.log(res.data);

      })

    }

  },
  mounted() {
    this.getRandomNumber()

  },

}).mount('#app')