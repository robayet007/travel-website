import Umrah from "../models/umrah.js";

// get all Umrah packages
const getUmrah = async (req, res) => {
  const packages = await Umrah.find();
  res.json(packages);
};

// add new Umrah package
const addUmrah = async (req, res) => {
  try {
    const newPackage = new Umrah({
      title: req.body.title,
      price: req.body.price,
      discountPrice: req.body.discountPrice,
      image: req.body.image || "", // optional
    });
    const saved = await newPackage.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update Umrah package
const updateUmrah = async (req, res) => {
  const updatedPackage = await Umrah.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(updatedPackage);
};

// delete Umrah package
const deleteUmrah = async (req, res) => {
  await Umrah.findByIdAndDelete(req.params.id);
  res.json({ message: "Umrah package deleted" });
};

export { getUmrah, addUmrah, updateUmrah, deleteUmrah };
