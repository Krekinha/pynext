
async function getData() {
  const api = "http://127.0.0.1:3000/api-py/flask";

  const res = await fetch(api, {method:'GET', cache: "no-store"})
  const data = await res.json();
  return data;
}

export default async function Home() {
  const dataPy = await getData();
  const dataNext = await fetch("http://127.0.0.1:3000/api").then((res) => res.json());
  console.log(dataPy);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-slate-900 text-slate-500">
      <div>{dataPy.message}</div>
      <div>--------------</div>
      <div>{dataNext}</div>
    </div>
  );
}
