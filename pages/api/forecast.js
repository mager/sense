const handler = async (req, res) => {
  const url = `http://localhost:8080/forecast?lat=${req.query.lat}&lng=${req.query.lng}`;
  try {
    const response = await fetch(url);
    const resp = await response.json();
    res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
