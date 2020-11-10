npm install express-session

app.use(session({
secret: 'keyboard cat',
resave: false,
saveUninitialized: true,
cookie: { secure: true }
}))

10:29 - store
npm i connect-mongodb-session

session.destroy
