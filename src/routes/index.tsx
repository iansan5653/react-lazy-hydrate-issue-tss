import Fallback from "@/components/Fallback";
import {createFileRoute} from "@tanstack/react-router";
import {lazy, Suspense} from "react";

export const Route = createFileRoute("/")({component: App});

const LazyHelloWorld = lazy(async () => {
  console.log("Start lazy import");

  const module = await import("../components/HelloWorld");
  // Artificially delay the import to make the fallback more obvious
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("Finish lazy import");
  return module;
});

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHelloWorld />
    </Suspense>
  );
}
