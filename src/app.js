import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sequelize from './database.js';

const app = express();

// JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

// Use the views router
app.use('/', viewsRouter);

const PORT = process.env.PORT || 8080;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
  });
});
