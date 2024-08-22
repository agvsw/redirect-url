import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


// Initialize the Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome');
});


const generateHtmlContent = (title, heading) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f8ff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                text-align: center;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #28a745;
                margin-bottom: 10px;
            }
            p {
                color: #555555;
            }
            a {
                text-decoration: none;
                color: #ffffff;
                background-color: #28a745;
                padding: 10px 20px;
                border-radius: 4px;
                display: inline-block;
                margin-top: 20px;
            }
            a:hover {
                background-color: #218838;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${heading}</h1>
            <p>Your operation was completed successfully.</p>
        </div>
    </body>
    </html>
`;

app.get('/finish-payment', (req, res) => {
    res.send(generateHtmlContent('Finish Payment', 'Finish Payment!'));
});

app.get('/finish-payment-refund', (req, res) => {
    res.send(generateHtmlContent('Finish Payment Refund', 'Finish Refund!'));
});

app.get('/finish-payment-code', (req, res) => {
    res.send(generateHtmlContent('Finish Payment Code', 'Finish Payment Code!'));
});

app.get('/finish-redirect', (req, res) => {
    res.send(generateHtmlContent('Finish Redirect', 'Finish Redirect!'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});