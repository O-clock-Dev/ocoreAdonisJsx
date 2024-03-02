/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import router from '@adonisjs/core/services/router'
const MainController = () => import('#controllers/main_controller')

router.get('/', [MainController, 'index'])
router.get('/add-post', [MainController, 'addPost'])
