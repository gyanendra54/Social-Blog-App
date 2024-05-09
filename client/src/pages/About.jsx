export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Gyanendra's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to Gyanendra's Blog! Here, we're passionate about sharing knowledge and insights on a wide range of topics, from web development and software engineering to programming languages and beyond.
            </p>

            <p>
            Whether you're a seasoned developer looking to expand your skills or a newcomer eager to learn, you'll find something valuable here. Our articles and tutorials are crafted to be informative, engaging, and easy to understand, catering to readers of all levels of expertise.
            </p>

            <p>
            Explore our diverse collection of posts, curated to provide you with the latest trends, tips, and best practices in the ever-evolving world of technology. Whether you're interested in mastering a new programming language, delving into the intricacies of web design, or exploring emerging technologies, you're in the right place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}