require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

app.use(express.json());

// Serve app production bundle
app.use(express.static('dist/app'));

app.use(
    cors({
        origin: process.env.CLIENT_URL
}));

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.
        create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.map( item => {


                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.title
                        },
                        unit_amount: item.price * 100
                    },
                    quantity: item.number
                }
            }),
            success_url: `${process.env.CLIENT_URL}/home`,
            cancel_url: `${process.env.CLIENT_URL}/home/cart`
        });
        res.json({ url: session.url });
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});

let port = 3001;
app.listen( port, function() {
    console.log( 'Express server listening at http://localhost:%d in %s mode', port, app.settings.env );
});