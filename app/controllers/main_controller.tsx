// import type { HttpContext } from '@adonisjs/core/http'

import Post from '#models/post'
import { HttpContext } from '@adonisjs/core/http'
import { Home } from '../../resources/views/pages/home.tsx'
import { About } from '../../resources/views/pages/about.js'
import { createPostValidator } from '#validators/post'

export default class MainController {
  async index({}: HttpContext) {
    const posts = await Post.query()
      .where('status', 'published')
      .orderBy('created_at', 'desc')
      .limit(5)
    return <Home posts={posts} />
  }

  async about({}: HttpContext) {
    return <About />
  }

  async aboutPost({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)
    const post = new Post()
    post.title = payload.title
    post.content = payload.content
    post.author = payload.author
    post.status = payload.status
    await post.save()
    session.flash('notification', {
      type: 'success',
      message: 'Votre post a bien été ajouté à la base de données !',
    })
    response.redirect().toRoute('home')
  }
}
