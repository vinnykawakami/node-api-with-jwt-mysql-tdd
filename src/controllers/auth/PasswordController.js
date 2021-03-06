require('dotenv').config();
const dbClient = require('../../config/dbMySQL');
const utils = require('../../helpers/utils');;
const { ErrorHandler } = require('../../helpers/customErrors');
const privateKey = process.env.JWT_SECRET;

class PasswordController {
    showLinkRequestForm(req, res, next) {
        res.status(200).json({ message: 'show link request form' });
    }
    sendResetLinkEmail(req, res, next) {
        res.status(200).json({ message: 'send reset link email' });
    }
    showResetForm(req, res, next) {
        res.status(200).json({ message: 'show reset form: '+req.params.token });
    }
    update(req, res, next) {
        res.status(200).json({ message: 'update' });
    }
}

module.exports = new PasswordController();

// router.get('/', (req, res, next) => {
//     dbConn.getConnection((err, conn) => {
//         if (err) {
//             throw new ErrorHandler(
//                 500,
//                 'An error occurred during your database connection',
//                 { err }
//             );
//         }

//         console.log('connected as id ' + conn.threadId);

//         conn.query('select * from users where id = ?', [req.body.id], (err, rows, fields) => {
//             if (!err) {
//                 res.status(200).json({
//                     users: rows
//                 });
//             } else {
//                 throw new ErrorHandler(
//                     500,
//                     'There was an error with your database query',
//                     { err }
//                 );
//             }
//         });
//     });
// });