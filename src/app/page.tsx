import GenerateLogs from "@/component/GenerateLogs";
import Log from "@/component/Logs";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <p className="text-center text-4xl font-bold tracking-wider py-5">
          Log&apos;s Watcher
        </p>
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <div className="sm:m-5 m-0 sm:w-1/4 border border-white sm:py-8 p-2">
            <GenerateLogs />
          </div>
          <div className="flex-1 m-5 rounded-md">
            <Log />
          </div>
        </div>
      </div>
    </>
  );
}
