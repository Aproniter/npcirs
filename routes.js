import pgPromise from 'pg-promise';
import "dotenv/config";

const url_db = (
    'postgres://' + process.env.POSTGRES_USER + 
    ':' + process.env.POSTGRES_PASSWORD + 
    '@' +  process.env.DB_HOST +
    ':' + process.env.DB_PORT +
    '/' + process.env.DB_NAME);
const pgp = pgPromise({});
const db = pgp(url_db);

const router = app => {
    app.get('/', (request, response) => {
        console.log(url_db)
        console.log(`URL: ${request.url}`);
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    app.get('/test', (request, response) => {
        db.one("SELECT * FROM pg_extension", [true])
            .then(data => {
                console.log("DATA:", data);
                response.send({
                    message: data
                });
            })
            .catch(error => {
                console.log("ERROR:", error);
            });
        console.log(`URL: ${request.url}`);
        
    });
}

export default router;