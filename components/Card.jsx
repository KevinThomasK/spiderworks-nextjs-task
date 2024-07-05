import Link from "next/link";

const Card = ({ title, image, date, readTime, description, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover-grow fade-in">
      <Link href={`/blogs/${slug}`}>
        <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">
            {date} - {readTime} Read
          </p>
          <p className="mt-2 text-gray-800">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
