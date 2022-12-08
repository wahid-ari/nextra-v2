export default function handler(req, res) {
  if (req.query.message !== "") {
    res.status(200).send(JSON.stringify(
      {
        status: 200,
        message: req.query.message,
        subscribe: true,
        update: false,
        balance: null
      }, null, 2));
  }
  res.status(200).send(JSON.stringify(
    {
      status: 200,
      message: "No message provided",
      subscribe: true,
      update: false,
      balance: null
    }, null, 2));
}