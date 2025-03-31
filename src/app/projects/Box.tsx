export function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[95%] mx-auto p-2 text-center bg-white border border-dashed border-[3px] border-gray-300 rounded-lg shadow-sm sm:p-4 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}
