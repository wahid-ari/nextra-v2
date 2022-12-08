export default function handler(req, res) {
  res.status(200).send(JSON.stringify(
    {
      status: 200,
      message: "Hello",
      subscribe: true,
      update: false,
      balance: null
    }, null, 2));
}