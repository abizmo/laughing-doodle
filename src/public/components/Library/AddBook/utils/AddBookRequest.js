const AddBookRequest = (title) => {
  const data = { title };
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return request;
}

module.exports = AddBookRequest;