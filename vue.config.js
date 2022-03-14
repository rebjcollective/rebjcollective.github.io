module.exports = {
  // options...
  devServer: {
    proxy: "http://localhost:8080/",
  },
  publicPath: process.env.NODE_ENV === "production" ? "DIR" : "/",
  outputDir: "DIR",
};
