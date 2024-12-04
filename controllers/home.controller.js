const getHomePage = async (request, response, next) => {
  try {
    response.status(200).send(`<h1>Welcome to the NASA API Proxy!</h1>
      <p>This app provides meteor data from the NASA API. Go to <a href="/meteors">/meteors</a> for more details.</p>`);
  } catch (error) {
    next(error);
  }
};

module.exports = { getHomePage };
