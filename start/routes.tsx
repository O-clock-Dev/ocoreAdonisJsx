/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MainController = () => import('#blog/controllers/main_controller')
const DashboardController = () => import('#dashboard/controllers/main_controller')
const AdminCourseController = () => import('#admin/courses/controllers/main_controller')

router.get('/', [MainController, 'index']).as('home')
router.get('/post/ajout', [MainController, 'about']).as('about')
router.post('/post/ajout', [MainController, 'aboutPost']).as('about-post')

router.get('/dashboard', [DashboardController, 'index']).as('dashboard')
router.get('/admin/courses', [AdminCourseController, 'index']).as('admin.courses')
