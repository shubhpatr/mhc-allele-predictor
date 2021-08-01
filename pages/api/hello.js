// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(req.body);
  let data = await fetch('http://localhost:8000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),}
  );
  const json = await data.json();
  res.json(json);

}
