const connection = require("../mysql")

exports.getMatch = (req, res) => {
    const maRequete = "SELECT * FROM planning;";
    connection.query(maRequete, (err, rows, fields) => {
        if (err) {
          console.error("Erreur lors de la récupération des messages :", err);
          res.status(500).json({ error: "Erreur lors de la récupération des messages" });
        }
          res.status(200).json(rows);
    });
};

