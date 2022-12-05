<template>
  <div class="thanks">
    <div class="thanksinner">
      <h1>
        Thank you for your order!
      </h1>
      <p>
        Shipping should take about 1-2 weeks if in Canada, and 2-3 weeks if you
        are in the US.<br />
        If you haven't received your order by then, please
        <a href="mailto:rebjanec@gmail.com">email me.</a>
      </p>
      <p>
        <a href="/"> Go back to home page</a> <br />
        <a href="http://www.instagram.com/designbyrebj"> Instagram</a> <br />
        <a href="http://www.rebj.ca"> Main Website</a> <br />
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Email from "./smtp.js";
export default {
  props: {

  },
  name: "App",
  components: {},
  mounted() {
    
    if (this.address.address.length > 0 &&
        this.address.postalCode.length > 0 &&
        this.address.province.length > 0 &&
        this.address.country.length > 0) {
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "rebjanec@gmail.com",
            Password : process.env.VUE_APP_smtppass,
            To : 'rebjanec@gmail.com',
            From : "rebjanec@gmail.com",
            Subject : "Shipping address from collective.rebj.ca",
            Body : `
              ${this.address.address}, 
              ${this.address.postalCode},
              ${this.address.province},
              ${this.address.country}
            `
        });
        
        this.$store.commit("updateAddress", {
          address:"",
          postalCode:"",
          province: "Ontario",
          country:"Canada"
        });

      }
  },
  computed: {
    ...mapState(["address"]),
  },
  methods: {},
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
@import "./main.scss";
.thanksinner {
  width: 50%;
  transform: translateY(-50%);
  margin: 50vh auto 0;
}
p {
  padding-top: 20px;
  margin: auto;
  line-height: 1.5;
}
@media screen and (max-width: 800px) {
  .thanksinner {
    width: 100%;
  }
}
</style>
