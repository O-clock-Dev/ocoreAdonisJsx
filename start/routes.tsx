import router from '@adonisjs/core/services/router'
const DashboardController = () => import('#dashboard/controllers/main_controller')
const ResultsController = () => import('#dashboard/controllers/results_controller')
const AdminCoursesListController = () => import('#admin/courses/controllers/list_controller')
const AdminCohortsListController = () => import('#admin/cohorts/controllers/list_controller')
const AdminStudentsListController = () => import('#admin/students/controllers/list_controller')

router.get('/', [DashboardController, 'index']).as('dashboard')
router.post('/', [DashboardController, 'post']).as('dashboard.post')
router
  .get('/results/:cohortId/:startDate/:endDate/:currentDate/:studentId', [
    ResultsController,
    'index',
  ])
  .as('dashboard.results')

router.get('/admin/courses', [AdminCoursesListController, 'list']).as('admin.courses')
router.get('/admin/cohorts', [AdminCohortsListController, 'list']).as('admin.cohorts')
router.get('/admin/students', [AdminStudentsListController, 'list']).as('admin.students')
