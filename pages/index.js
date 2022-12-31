import Layout from './Components/Layout/Layout'
import HomePage from './Components/HomePage/HomePage';
import HomeArticles from './Components/HomeArticles/HomeArticles';

export default function Home({articles}) {
  return (
    <div>
      <Layout>
        <HomePage/>
        <HomeArticles articles={articles}/>
      </Layout>
    </div> 
  )
}

export async function getServerSideProps() {
  const resData = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YMwGtcuTdYGINAxVqRw5puQauT6dAhD3')
  const data = await resData.json();
  const filtered = data.results.filter(article => article.title)

    return {
      props: {
        articles: filtered
    }
  } 
}
