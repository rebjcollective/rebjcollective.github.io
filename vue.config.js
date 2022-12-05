process.env.VUE_APP_smtppass = '7E60DCF9A8D88591F309CA809A98E82864D9';
module.exports = {
  // options...
  devServer: {
    proxy: "http://localhost:8080/",
  },
  publicPath: process.env.NODE_ENV === "production" ? "DIR" : "/",
  outputDir: "DIR",
};
