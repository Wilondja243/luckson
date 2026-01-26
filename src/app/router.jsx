import About from './page/about';
import Experience from './page/experience';
import Service from './page/service';
import Contact from './page/contact';
import Project from './page/project';
// import Feature from './page/feature-project';

import Hero from '../lib/header/hero';
import NavBar from '../lib/header/nav-bar';
import Footer from '../lib/header/footer';

export default function Router() {
    return (
        <>
            <div className="container">
                <header>
                    <NavBar />
                    <div>
                        <Hero />
                    </div>
                </header>
            </div>
            <main>
                <About />
                <Experience />
                {/* <Feature /> */}
                <Service />
                <Project />
                <Contact />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
