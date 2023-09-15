import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { PageDescription } from './components/page_description/PageDescription';
import { ProjectCard } from './components/project_card/ProjectCard';
import { Tool } from './components/tool/Tool';
import projects from './projects.json';
import tools from './tools.json';
import {Route, Routes} from 'react-router-dom';

const Home = () =>{
  let sorted_projects = projects.sort((a, b)=>{
    let a_date = new Date(a.date.year, a.date.month-1, a.date.day);
    let b_date = new Date(b.date.year, b.date.month-1, b.date.day);
    return a_date < b_date;
  });

  return(
    <>
      <div className={styles.person}>
        <img src="./images/me.png" alt="" srcset="" />
        <span>
          <h2>Hi! I'm Jesús</h2>
          <p><i>A  programmer who loves old stuff & creating new things.</i></p>
          {/* <p><a href="/about">More about me</a></p> */}
        </span>
      </div>
      <h2 className={styles.section_header}>Technologies and Tools</h2>
      <article>
        <span className={styles.tools_container}>
          {
            tools.map((tool)=>{
              return(<Tool name={tool.name} logo={tool.logo}/>);
            })
          }
        </span>
      </article>
      <h2 className={styles.section_header}>Latest projects</h2>
      {    
        sorted_projects.map((e, i) => {
          if(i < 3)
          {
            return(<ProjectCard title={e.title} description={e.description} date={e.date} image={e.image} link={e.link} language={e.language}/>);
          }else{
            return;
          }
        })
      }
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
      return(<ProjectCard title={e.title} description={e.description} date={e.date} image={e.image} link={e.link} language={e.language}/>);
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
        <Routes>
          <Route path='/home' element={<PageDescription description={"Welcome to my portfolio!"}/>}/>
          <Route path='/projects/software' element={<PageDescription description={"Projects made with various technologies."}/>}/>
          <Route path='/about' element={<PageDescription description={"More about me"}/>}/>
        </Routes>
        
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
