
//POST(/): send a new message
//POST(/:id): Send a reply, register what it directly replies to *and* the conversation origin point

//GET(/inbox): view inbox
//GET(/sent): view sent messages
//GET(/:id): get message, previous message, and any direct replies

//DELETE(/): clears user's inbox (does not remove anything from database)
//DELETE(/:id): removes a particular message from inbox, but doesn't delete it from the database entirely so that it doesn't break on the other side
//DELETE(/:admin-code/:id) removes entire conversation from database, with admin authentification