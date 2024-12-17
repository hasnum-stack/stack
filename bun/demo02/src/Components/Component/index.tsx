export function Component(props: {message: string}) {
  return <p>{props.message}</p>
}

const a = ()=>{
  return Promise.resolve(1)
}
const main  = async ()=>{
  const res = await a()
  console.log(res)
}
console.log(main())
