const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST endpoint for form
app.post('/api/send', async (req, res) => {
  const { name, email, address, service, message } = req.body;

  // Configure your email transport (use your real credentials)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_GMAIL@gmail.com',
      pass: 'YOUR_APP_PASSWORD' // Use an App Password if 2FA is enabled
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'mahwendatinashe@gmail.com',
      subject: `New Booking from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Address: ${address}
        Service: ${service}
        Message: ${message}
      `
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)); 