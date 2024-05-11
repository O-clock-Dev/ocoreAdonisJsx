import router from '@adonisjs/core/services/router'
const MainController = () => import('#blog/controllers/main_controller')
const DashboardController = () => import('#dashboard/controllers/main_controller')
const ResultsController = () => import('#dashboard/controllers/results_controller')
const AdminCoursesListController = () => import('#admin/courses/controllers/list_controller')
const AdminCohortsListController = () => import('#admin/cohorts/controllers/list_controller')
const AdminStudentsListController = () => import('#admin/students/controllers/list_controller')

router.get('/', [MainController, 'index']).as('home')
router.get('/post/ajout', [MainController, 'about']).as('about')
router.post('/post/ajout', [MainController, 'aboutPost']).as('about-post')

router.get('/dashboard', [DashboardController, 'index']).as('dashboard')
router.post('/dashboard', [DashboardController, 'post']).as('dashboard.post')
router
  .get('/dashboard/results/:cohortId/:startDate/:endDate/:currentDate/:studentId', [
    ResultsController,
    'index',
  ])
  .as('dashboard.results')

router.get('/admin/courses', [AdminCoursesListController, 'list']).as('admin.courses')
router.get('/admin/cohorts', [AdminCohortsListController, 'list']).as('admin.cohorts')
router.get('/admin/students', [AdminStudentsListController, 'list']).as('admin.students')
