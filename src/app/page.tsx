import GenerateLogs from "@/component/GenerateLogs";
import Log from "@/component/Logs";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <p className="text-center text-4xl font-bold tracking-wider pt-5">
          Log&apos;s Watcher
        </p>
        <div className="flex justify-center items-center">
          <div className="m-5 w-1/4 border border-white py-8">
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
