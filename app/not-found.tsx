import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        Return to Home
      </Link>
    </div>
  );
}