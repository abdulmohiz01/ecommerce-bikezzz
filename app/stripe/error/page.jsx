import Link from "next/link"

const ErrorPage = () => {
  return (
    <div>
      <section className="py-72">
        <div className="container mx-auto">
          <h3 className="text-center mb-4">Something went wrong!</h3>
          <Link href="/">
            <button className="btn btn-accent mx-auto">Back to the Homepage</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage