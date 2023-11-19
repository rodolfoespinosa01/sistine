require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5500'
}))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const storeItemsArray = JSON.parse(fs.readFileSync('./store_items.json', 'utf8'));
const storeItems = new Map(storeItemsArray.map(item => [item.id, item]));


// const storeItems = new Map([
//     [1, {
//         priceInCents: 10000,
//         name: 'Ultraviolete Sunset Painting'
//     }],
//     [2, {
//         priceInCents: 20000,
//         name: 'Blue Mountains Painting'
//     }]
// ])

app.route('/create-checkout-session')
    // .get((req, res) => {
    //     // Handle get request
    // })
    .post(async (req, res) => {
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: req.body.items.map(item => {
                    const storeItem = storeItems.get(item.id)
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: storeItem.name
                            },
                            unit_amount: storeItem.priceInCents
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${process.env.CLIENT_URL}/success.html`,
                cancel_url: `${process.env.CLIENT_URL}/cancel.html`
            })
            res.json({ url: session.url })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    })


app.listen(3000)