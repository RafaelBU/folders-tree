import useCounterFiles from "../../hooks/useCounterFiles";

export default function Home() {
  const { data, isLoading } = useCounterFiles();
  console.log({ data, isLoading });
  return <div>Hello world</div>;
}
