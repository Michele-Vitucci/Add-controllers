const { planets } = require("../db");

let planetData = planets;

const getAll = (req, res) => {
  res.json(planetData);
};

const getOneById = (req, res) => {
  const id = parseInt(req.params.id);
  const planet = planetData.find(p => p.id === id);
  if (!planet) return res.status(404).json({ message: "Pianeta non trovato" });
  res.json(planet);
};

const create = (req, res) => {
  const newPlanet = {
    id: planetData.length + 1,
    name: req.body.name
  };
  planetData = [...planetData, newPlanet];
  res.status(201).json(newPlanet);
};

const updateById = (req, res) => {
  const id = parseInt(req.params.id);
  let found = false;
  planetData = planetData.map(p => {
    if (p.id === id) {
      found = true;
      return { ...p, name: req.body.name };
    }
    return p;
  });
  if (!found) return res.status(404).json({ message: "Pianeta non trovato" });
  res.json({ message: "Pianeta aggiornato" });
};

const deleteById = (req, res) => {
  const id = parseInt(req.params.id);
  const before = planetData.length;
  planetData = planetData.filter(p => p.id !== id);
  if (planetData.length === before) return res.status(404).json({ message: "Pianeta non trovato" });
  res.json({ message: "Pianeta eliminato" });
};

module.exports = {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById
};