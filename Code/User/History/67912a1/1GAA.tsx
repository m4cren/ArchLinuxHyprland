

const BlogForm = () => {
  return (
    <form action="" className="flex items-center flex-col gap-2 w-[40vw] mx-auto rounded-2xl bg-[#2c2c2c] p-6">
        <h1 className="text-[#f5f5f5] text-[2rem] font-bold">Create Blog</h1>
        <div className="flex flex-col w-full">
            <label htmlFor="title" className="text-[#f5f5f560] text-[0.8rem]">Title</label>
            <input type="text" className="border-1  text-[#f5f5f5] rounded-lg border-white/30 px-2 " name="title" id="title"/>
        </div>
        <div className="flex flex-col w-full" >
            <label htmlFor="content" className="text-[#f5f5f560] text-[0.8rem]">Content</label>
            <textarea name="content" id="content" rows={8} className="border-1 text-[#f5f5f5]  rounded-lg border-white/30 px-2 resize-none"></textarea>
        </div>
        <button className="bg-[#f5f5f5] text-[1rem] rounded-lg px-8 py-2 mt-4">Submit</button>
    </form>
  )
}

export default BlogForm