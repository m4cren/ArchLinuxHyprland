

const BlogForm = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-[40vw] mx-auto rounded-2xl bg-[#2c2c2c] p-6">
        <h1 className="text-[#f5f5f5] text-[2rem] font-bold">Create Blog</h1>
        <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input type="text" className="border-1 rounded-lg border-white/30 px-2 " name="title" id="title"/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" rows={8} className="border-1 rounded-lg border-white/30 px-2 resize-none"></textarea>
        </div>
        <button>Submit</button>
    </form>
  )
}

export default BlogForm