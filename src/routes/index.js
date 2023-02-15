const { Router } = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User information</h1>
        <ul>        
            <li>Username: ${name}</li>
            <li>Useremail: ${email}</li>
            <li>Userphone: ${phone}</li>
        </ul>
        <p>${message}</p>
        `;
        console.log(contentHTML)

    res.send('received');
})




module.exports = router;