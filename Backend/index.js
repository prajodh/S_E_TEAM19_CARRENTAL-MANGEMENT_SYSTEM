const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Ensure Axios is required if not already

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "f351384a-cb05-4341-a841-58859475a29e" } } // Replace with your actual private key
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Check if the error has a response object with a status
    if (e.response && e.response.status && e.response.data) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Log the error for debugging purposes
      console.error('Error does not have a response or status/data is not available:', e);
      // If the error object does not have a response, or status/data is undefined, send a generic error response
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
});

app.listen(3001, () => console.log(`Server running on port 3001`));
