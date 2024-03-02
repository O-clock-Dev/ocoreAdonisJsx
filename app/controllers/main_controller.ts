// import type { HttpContext } from '@adonisjs/core/http'

import Post from "#models/post";
import { HttpContext } from "@adonisjs/core/http";

export default class MainController {

    public async addPost() {
        const post = new Post()
        post.title = 'My first post'
        post.content = 'This is the content of my first post'
        post.author = 'virk'
        post.status = 'published'
        await post.save()
        
        return 'Add Post'
    }

    public async index({ view }: HttpContext) {
        return view.render('pages/home', {
            title: 'Welcome to AdonisJS!',
        })
    }
}