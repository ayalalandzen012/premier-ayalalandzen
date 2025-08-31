function sendMail() {

    const title = document.querySelector('#title').value.trim(); 
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!title || !name || !email) {
        alert("All fields are required!");
        return;
    }

    let emailSubject1 = '';
    let emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    let emailBody1 = ``;
    let emailDetails = ``;
    let recipientEmail = 'capt.paul07@gmail.com'; // Variable for recipient email

    // Determine subject, body, and recipient based on title
    switch (title) {
        case "Miravera":
            emailSubject = "Inquiry About Miravera";
            // emailBody1 += `\nProperty: ${title}`;
            emailBody1 += `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Miravera by Ayala Land Premier</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
      color: #333;
    }
    .email-container {
      background-color: #fff;
      padding: 30px;
      border-radius: 8px;
      max-width: 700px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    h1, h2 {
      color: #2c3e50;
    }
    ul {
      padding-left: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    th, td {
      padding: 8px 12px;
      border-bottom: 1px solid #ddd;
      text-align: left;
    }
    .section {
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h1>Miravera</h1>
    <h2>A Life Shaped by the Land</h2>
    <p>Miravera is Ayala Land Premier’s first residential development in San Jose del Monte, Bulacan, offering expansive lot-only properties in a master-planned, low-density community. With its proximity to Metro Manila, natural contours, and generous open spaces, Miravera offers a serene suburban escape — ideal for families looking to build homes that reflect timeless values in a rapidly emerging growth corridor.</p>

    <div class="section">
      <h2>📍 Location</h2>
      <ul>
        <li>Brgy. Minuyan Proper, San Jose del Monte, Bulacan</li>
        <li>15 minutes from Quirino Highway</li>
        <li>30 minutes from NLEX Balagtas Exit via NLEX and Tungkong Mangga Road</li>
        <li>Near future MRT-7 terminus and SkyTrain connections</li>
        <li>Upcoming access via North-South Commuter Railway</li>
      </ul>
    </div>

    <div class="section">
      <h2>📊 Project Overview</h2>
      <table>
        <tr><th>Feature</th><th>Details</th></tr>
        <tr><td>Development Type</td><td>Residential Lot-Only</td></tr>
        <tr><td>Total Land Area</td><td>~49 hectares</td></tr>
        <tr><td>No. of Lots</td><td>~419 residential lots</td></tr>
        <tr><td>Lot Sizes</td><td>~500 to 1,200+ sqm</td></tr>
        <tr><td>Density</td><td>~8 lots per hectare</td></tr>
        <tr><td>Open Space</td><td>Over 50% of the community</td></tr>
        <tr><td>Target Turnover</td><td>2027 onwards</td></tr>
      </table>
    </div>

    <div class="section">
      <h2>🌳 Nature + Neighborhood</h2>
      <ul>
        <li>Gently sloping terrain designed for natural drainage and views</li>
        <li>Parks and pocket gardens within walking distance</li>
        <li>30-meter green corridor through the village’s heart</li>
        <li>Wide roadways: 14–20 meters</li>
        <li>Emphasis on walkability and natural ventilation</li>
      </ul>
    </div>

    <div class="section">
      <h2>🏡 Amenities & Features</h2>
      <ul>
        <li><strong>Main Village Clubhouse:</strong> Social Hall, Viewing Decks, Lounge Areas</li>
        <li><strong>Outdoor Amenities:</strong> Swimming Pool, Children’s Play Area, Garden Courtyards, Jogging Trails, Green Loops</li>
        <li><strong>Estate Features:</strong> Gated Entrance with 24/7 Security, Underground Utilities, Managed by APMC</li>
      </ul>
    </div>

    <div class="section">
      <h2>🏫 Nearby Establishments</h2>
      <ul>
        <li><strong>Schools:</strong> La Consolacion College SJDM, Bulacan State University, Our Lady of Fatima University, Ateneo & UP Diliman</li>
        <li><strong>Hospitals:</strong> QualiMed SJDM, Grace General Hospital, North Caloocan Medical Center</li>
        <li><strong>Retail & Leisure:</strong> SM City SJDM, Starmall SJDM, Future Ayala Malls, MRT-7 access to Quezon City</li>
      </ul>
    </div>

    <div class="section">
      <h2>💼 Investment Snapshot</h2>
      <strong>Ideal For:</strong>
      <ul>
        <li>End-users seeking large lots near Metro Manila</li>
        <li>Families relocating from QC, Caloocan, or Bulacan</li>
        <li>Investors targeting Northern Mega Manila</li>
      </ul>
      <strong>Value Drivers:</strong>
      <ul>
        <li>First ALP community in Bulacan</li>
        <li>Proximity to MRT-7 and key infrastructure</li>
        <li>Large suburban-format lots with long-term appreciation</li>
      </ul>
    </div>

    <div class="section">
      <h2>🌅 A Fresh Horizon North of the Metro</h2>
      <p>Miravera welcomes families into a life of clarity, comfort, and openness. Rooted in nature and guided by Ayala Land Premier’s commitment to excellence, it is a community that grows in beauty, value, and purpose over time.</p>
    </div>
  </div>
</body>
</html>
`;
            break;
        case "Arbor Lanes Arca":
            emailSubject = "Inquiry About Arbor Lanes Arca";
            emailBody1 += `\nSelected Property: ${title}`;
            break;
        case "East Gallery Place":
            emailSubject = "Inquiry About East Gallery Place";
            emailBody1 += `\nSelected Property: ${title}`;
            break;
        case "Garden Towers":
            emailSubject = "Inquiry About Garden Towers";
            emailBody1 += `\nSelected Property: ${title}`;
            break;
        default:
            emailSubject = "General Inquiry";
            emailBody1 += `\nSelected Property: None`;
            break;
    }

    const params1 = {
        subject: emailSubject,
        title,
        name,
        email,
        message: emailBody1,
    };

     const params2 = {
        subject: emailSubject,
        title,
        name,
        email:recipientEmail,
        message: emailBody,
    };

    const serviceId = "service_9fa89zk";
    const templateId = "template_dvd0ci3";

    emailjs.send(serviceId, templateId, params2)
        .then(() => {
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            alert("Failed to send email. Please try again.");
        });

    emailjs.send(serviceId, templateId, params1)
        .then(() => {
            alert(`Email for "${title}" has been sent to ${email} successfully!`);
            window.location.href = "../index.html";
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            alert("Failed to send email. Please try again.");
        });
}

