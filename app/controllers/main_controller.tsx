// import type { HttpContext } from '@adonisjs/core/http'

import Post from '#models/post'
import { HttpContext } from '@adonisjs/core/http'
import { Home } from '../../resources/views/pages/home.tsx'

export default class MainController {

    async addPost() {
        const post = new Post()
        post.title = 'My first post'
        post.content = 'This is the content of my first post'
        post.author = 'virk'
        post.status = 'published'
        await post.save()
        return 'Add Post'
    }

    async index({ }: HttpContext) {
      return <Home />
    }
}
