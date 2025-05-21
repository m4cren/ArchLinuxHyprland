

const BlogForm = () => {
  return (
    <form action="">
        <h1>Create Blog</h1>
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" className="border-1 rounded-lg border-white/30 px-2 " name="title" id="title"/>
        </div>
        <div>
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" rows={8} className="border-1 rounded-lg border-white/30 px-2 resize-none"></textarea>
        </div>
        <button>Submit</button>
    </form>
  )
}

export default BlogForm