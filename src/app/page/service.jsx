import { Link } from "react-router-dom";
import useRevealOnScroll from "../../hooks/use-reveal";

export default function Service() {
  const ref = useRevealOnScroll();

  return (
    <section className="wrapper" id="services">
      <div ref={ref} className="reveal services">
    
        <div className="section-header">
          <h2>Mes Services</h2>
          <p>
            Je conçois des solutions numériques modernes, sécurisées
            et performantes, adaptées aux besoins réels des entreprises
            et des particuliers.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="list">
          <div className="child item">
            <i className="bi bi-window-desktop"></i>
            <h2>Web Development</h2>
            <p>
              Développement d'applications et sites web modernes,
              rapides et évolutifs avec des technologies fiables
              et une architecture propre.
            </p>
          </div>

          <div className="child item">
            <i className="bi bi-phone"></i>
            <h2>Mobile Development</h2>
            <p>
              Création d'applications mobiles performantes pour Android
              et multiplateformes, centrées sur l'expérience utilisateur.
            </p>
          </div>

          <div className="child item">
            <i className="bi bi-pc-display"></i>
            <h2>Desktop Development</h2>
            <p>
              Applications desktop robustes et légères pour automatiser
              les tâches et améliorer la productivité.
            </p>
          </div>

          <div className="child item">
            <i className="bi bi-shield-lock-fill"></i>
            <h2>Cybersecurity</h2>
            <p>
              Sécurisation des applications, analyse des vulnérabilités
              et mise en place de bonnes pratiques pour protéger les données.
            </p>
          </div>

          <div className="child item">
            <i className="bi bi-cpu-fill"></i>
            <h2>Artificial Intelligence</h2>
            <p>
              Intégration de solutions basées sur l'IA pour automatiser,
              analyser et améliorer les performances des systèmes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
