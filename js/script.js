const { createApp } = Vue;



//option object.
createApp({
  data() { //metodo data()
    return {
      mailList: [],
      apiLink: 'https://flynn.boolean.careers/exercises/api/random/mail',


    }
  },
  methods: {
    getRandomMails() {
      const mails = [];
      for (let i = 0; i < 10; i++) {

        axios.get(this.apiLink).then((res) => {
          
          let mail = res.data.response;
          mails.push(mail)
          console.log(mail);
          if (i === 9) {
            this.mailList = [...mails]
          }
        });
      }
      console.log(this.mailList);
    }
  },
 created() {
    this.getRandomMails()
    

  },

}).mount('#app')