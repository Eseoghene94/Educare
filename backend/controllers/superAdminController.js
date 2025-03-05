let superAdmins = []; // Temporary in-memory storage

// Get all Super Admins
export const getSuperAdmins = (req, res) => {
  res.json(superAdmins);
};

// Create a new Super Admin
export const createSuperAdmin = (req, res) => {
  const { name, email, password } = req.body;

  // Check if email already exists
  if (superAdmins.find(admin => admin.email === email)) {
    return res.status(400).json({ message: "Admin with this email already exists" });
  }

  const newAdmin = { id: Date.now(), name, email, password };
  superAdmins.push(newAdmin);

  res.status(201).json({ message: "SuperAdmin created successfully", admin: newAdmin });
};

// Delete a Super Admin
export const deleteSuperAdmin = (req, res) => {
  const { id } = req.params;
  superAdmins = superAdmins.filter(admin => admin.id !== parseInt(id));
  res.json({ message: "SuperAdmin deleted successfully" });
};
