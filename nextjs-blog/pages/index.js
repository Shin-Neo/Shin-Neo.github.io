import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <h2>Welcome to My Blog</h2>

      <h3>Blog Posts</h3>

      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            {' - '}
            <Date dateString={date} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}