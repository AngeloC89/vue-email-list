const { createApp } = Vue;



//option object.
createApp({
  data() { //metodo data()
    return {
      mailList: null,
      apiLink: 'https://flynn.boolean.careers/exercises/api/random/mail',


    }
  },
  methods: {
    getRandomNumber() {
      const mails = []
      for (let i = 0; i < 10; i++) {

        axios.get(this.apiLink).then((res) => {
          console.log(res.data);
          let mail = res.data.response;
        
       

        })
       


      }
     
      

    }

  },
  mounted() {
    this.getRandomNumber()

  },

}).mount('#app')