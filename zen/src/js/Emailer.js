function sendMail() {
    const title = document.querySelector('#title').value.trim(); 
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!title || !name || !email) {
        alert("All fields are required!");
        return;
    }

    let emailSubject = '';
    let emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    let emailBody1 = ``;
    let recipientEmail = 'capt.paul07@gmail.com'; // Variable for recipient email

    // Determine subject, body, and recipient based on title
    switch (title) {
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

    emailjs.send(serviceId, templateId, params1)
        .then(() => {
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            alert("Failed to send email. Please try again.");
        });

    emailjs.send(serviceId, templateId, params2)
        .then(() => {
            alert(`Email for "${title}" has been sent to ${email} successfully!`);
            window.location.href = "index.html";
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            alert("Failed to send email. Please try again.");
        });
}
