

function Footer() {
  return (
    <div className=" bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 text-white py-10 sm:py-6 md:py-10">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} GitHub Finder. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer