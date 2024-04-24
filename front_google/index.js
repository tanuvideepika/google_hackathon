import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://0.0.0.0:8000/api/recommend-doc";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to render the main page
app.get("/", async (req, res) => {
  res.render("index.ejs");
});



// app.get("/edit/:id", async (req, res) => {
//   try {
//     const response = await axios.get(`${API_URL}/posts/${req.params.id}`);
//     //console.log(response.data);
//     res.render("modify.ejs", {
//       heading: "Edit Post",
//       submit: "Update Post",
//       post: response.data,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching post" });
//   }
// });

// Create a new post
app.post("/submit", async (req, res) => {
  try {
    console.log(req.body);
    const response = await axios.post(`${API_URL}`, req.body);
    console.log(response.data);
    res.render("diagnosis.ejs",{data: response.data.data});
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
});



app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
