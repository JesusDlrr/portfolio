import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { PageDescription } from './components/page_description/PageDescription';
import { ProjectCard } from './components/project_card/ProjectCard';
import projects from './projects.json';
import {Route, Routes} from 'react-router-dom';

const Home = () =>{
  return(
    <>
      <h2>Jesús de la Rosa</h2>
      {/* <p>Software engineer, photographer and maker of things. Based in London, England. <a href="/about">More about me</a>.</p> */}

      <h2>Latest projects</h2>
    </>
  );
}

const Software = () =>{
  let sorted_projects = projects.sort((a, b)=>{
    let a_date = new Date(a.date.year, a.date.month-1, a.date.day);
    let b_date = new Date(b.date.year, b.date.month-1, b.date.day);
    return a_date < b_date;
  });

  return(
    sorted_projects.map((e) => {
      return(<ProjectCard title={e.title} description={e.description} date={e.date} link={e.link} language={e.language}/>);
    })
  );
}

const Music = () =>{
  return(<></>);
}

function App() {
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.header_marquee}>
        </div>
        <Header/>
        <PageDescription/>
        <div className={styles.content_wrapper}>
          <aside>
            <Navbar/>
          </aside>
          <main>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/projects/software' element={<Software/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
