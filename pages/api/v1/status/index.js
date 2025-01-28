function status(request, response) {
  response.status(200).json("api funcionando normalmente. É com assento.");
}

export default status;
