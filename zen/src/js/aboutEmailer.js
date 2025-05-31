function sendMailAbout() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const contact = document.querySelector('#contact').value.trim();

    if (!name || !email || !contact) {
        alert("All fields are required!");
        return;
    }

    let emailSubject = 'Notification for Potential Customer';
    
    const params = {
        subject: emailSubject,
        name,
        email,
        contact
    };


    const serviceId = "service_9fa89zk";
    const templateId = "template_h2p5z8f";

    emailjs.send(serviceId, templateId, params)
        .then(() => {
             alert(`Request has been sent to successfully!`);
            window.location.href = "index.html";
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            alert("Failed to send email. Please try again.");
        });
}

        function autoCapitalize() {
            // Select the input field
            const input = document.getElementById("name");
            
            // Capitalize every word
            input.value = input.value.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        }
