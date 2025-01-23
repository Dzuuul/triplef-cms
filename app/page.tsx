import { redirect } from "next/navigation";
import Image from "next/image";

// Simulated authentication check function
// In a real app, replace this with actual authentication logic
function isAuthenticated() {
  // TODO: Implement actual authentication check
  return false;
}

export const metadata = {
  title: "TripleF CMS",
  description: "Content Management System",
};

export default function Home() {
  // Redirect to login or register if not authenticated
  if (!isAuthenticated()) {
    redirect("/account");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
          <Image
            className="dark:invert w-40 md:w-60 h-auto"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <ol className="list-inside list-decimal text-sm text-center md:text-left space-y-2">
            <li className="text-gray-700 dark:text-gray-300">
              Welcome to the authenticated area!
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              Explore your dashboard and manage content
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            className="
              w-full sm:w-auto 
              rounded-full 
              border border-transparent 
              transition-colors 
              flex items-center justify-center 
              bg-gray-900 text-white 
              dark:bg-white dark:text-black 
              hover:bg-gray-700 
              dark:hover:bg-gray-200 
              text-sm sm:text-base 
              h-10 sm:h-12 
              px-4 sm:px-6 
              space-x-2
            "
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert w-5 h-5"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            <span>Deploy now</span>
          </a>

          <button
            className="
              w-full sm:w-auto 
              rounded-full 
              border border-gray-300 
              dark:border-gray-700 
              transition-colors 
              flex items-center justify-center 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-white 
              hover:bg-gray-100 
              dark:hover:bg-gray-700 
              text-sm sm:text-base 
              h-10 sm:h-12 
              px-4 sm:px-6
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
