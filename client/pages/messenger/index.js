import Link from 'next/link'

export default function FirstPost () {
  return <h1 className="title">
    <Link href="/">
      <a>На главную!</a>
    </Link>
  </h1>
}
