export default function Loading() {
  return (
    <div className="bg-slate-900 dark:bg-dark-background min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    </div>
  );
}
