import { AlertTriangle, RefreshCcw } from "lucide-react";

type ErrorStateProps = {
  onRetry: () => void;
  message?: string;
};

export const ErrorState = ({
  onRetry,
  message = "Something went wrong while loading Pokémon",
}: ErrorStateProps) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="glass mx-auto w-full max-w-md rounded-2xl p-8 text-center">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
          <AlertTriangle className="h-6 w-6 text-red-500" />
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold">Oops!</h2>

        {/* Message */}
        <p className="mt-2 text-sm text-muted-foreground">{message}</p>

        {/* Retry button */}
        <button
          onClick={onRetry}
          className="
            mt-6 inline-flex items-center gap-2
            rounded-xl px-4 py-2 text-sm font-semibold
            bg-red-500 text-white
            hover:bg-red-600 active:scale-95
            transition-all duration-200
            shadow-md shadow-red-500/30
          "
        >
          <RefreshCcw size={14} />
          Retry
        </button>
      </div>
    </div>
  );
};
