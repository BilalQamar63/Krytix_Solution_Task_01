const express = require("express");
// const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const Note = require("./models/note");

dotenv.config(); 
connectDB();     

const app = express();
const PORT = 3000;

// app.use(cors());
app.use(express.json());


/* ---------- POST new note ---------- */
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and Description required" });
  }

  const newNote = new Note({ title, description });
  await newNote.save();
  res.status(201).json(newNote);
});

/* ---------- GET all notes ---------- */
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

/* ---------- GET note by ID ---------- */
app.get("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch {
    res.status(400).json({ message: "Invalid note ID" });
  }
});



/* ---------- PUT update note ---------- */
app.put("/notes/:id", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and Description required" });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updatedNote);
  } catch {
    res.status(400).json({ message: "Invalid note ID" });
  }
});

/* ---------- DELETE note ---------- */
app.delete("/notes/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json({ message: "Note deleted", note: deletedNote });
  } catch {
    res.status(400).json({ message: "Invalid note ID" });
  }
});

/* ---------- Start Server ---------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
