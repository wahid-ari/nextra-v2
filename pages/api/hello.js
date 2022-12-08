export default function handler(req, res) {
  const { message } = req.query
  if (message !== "") {
    res.status(200).send(JSON.stringify(
      {
        status: 200,
        message: message,
        subscribe: true,
        update: false,
        balance: null
      }, null, 2));
  } else {
    res.status(200).send(JSON.stringify(
      {
        status: 200,
        message: "No message provided",
        subscribe: true,
        update: false,
        balance: null
      }, null, 2));
  }
}