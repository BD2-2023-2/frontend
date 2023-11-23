async function getData() {
  try {
    const res = await fetch('https://localhost:3333/api/produtos', {
    headers: {
      contentType: 'application/json',
      user: 'joao_amaral',
      password: 'JoaoAmaral123@4'
    }
  })
  const body = await res.json()

  return body.data
  } catch (err) {
    console.log(err)
  }
}

export default async function Page() {
  const produtos = await getData()

  return <div>{produtos}</div>
}