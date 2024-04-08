const { createApp } = Vue;



//option object.
createApp({
  data() { //metodo data()
    return {
      mailList: [],
      apiLink: 'https://flynn.boolean.careers/exercises/api/random/mail',
      listLength: 10,



    }
  },
  methods: {
    getRandomMails() {
      const mails = [];
      for (let i = 0; i < this.listLength; i++) {

        axios.get(this.apiLink).then((res) => {

          let mail = res.data.response;
          mails.push(mail)
          console.log(mail);
          if (mails.length === this.listLength) {
            this.mailList = [...mails];
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