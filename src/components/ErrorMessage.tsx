import { LuCircleAlert } from "react-icons/lu";

type ErorMessageProps={
    onRetry:()=>void
}
function ErrorMessage({onRetry}:ErorMessageProps) {
  return (
    <div className="min-h-[300px] flex items-center justify-center px-4">
      <div className="text-center">
        <LuCircleAlert
          className="mx-auto text-red-700"
          size={48}
        />

        <p className="text-xl font-semibold text-red-700">
          Something went wrong
        </p>

        <p className="mt-2 text-sm text-gray-500">
          We couldn't fetch GitHub users. Please check your connection and try again.
        </p>

        <button onClick={onRetry} className="mt-4 border border-red-700 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;