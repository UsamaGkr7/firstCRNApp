export async function GET(request: Request) {
  return await Response.json({ data: "Hello World" });
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ yousent: data });
}

export async function queryParam(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  return Response.json({ query });
}
