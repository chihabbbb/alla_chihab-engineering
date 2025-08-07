import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/useTheme";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Activities from "@/pages/Activities";
import Projects from "@/pages/Projects";
import News from "@/pages/News";
import Jobs from "@/pages/Jobs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// About sub-pages
import Histoire from "@/pages/about/Histoire";
import Equipe from "@/pages/about/Equipe";
import BureauxAbout from "@/pages/about/Bureaux";
import Outils from "@/pages/about/Outils";
import Plateforme from "@/pages/about/Plateforme";

// Activities sub-pages
import EquipementTechnique from "@/pages/activities/EquipementTechnique";
import OptimisationEnergetique from "@/pages/activities/OptimisationEnergetique";
import EnergieDurable from "@/pages/activities/EnergieDurable";
import PilotageProjets from "@/pages/activities/PilotageProjets";
import ActivitesComplementaires from "@/pages/activities/ActivitesComplementaires";

// Projects sub-pages
import Alimentaire from "@/pages/projects/Alimentaire";
import CentralesEnergie from "@/pages/projects/CentralesEnergie";
import Commerce from "@/pages/projects/Commerce";
import Datacenter from "@/pages/projects/Datacenter";
import Education from "@/pages/projects/Education";
import Administration from "@/pages/projects/Administration";
import Industrie from "@/pages/projects/Industrie";
import Logement from "@/pages/projects/Logement";
import MaisonSoins from "@/pages/projects/MaisonSoins";

// Jobs sub-pages
import PostesOuverts from "@/pages/jobs/PostesOuverts";
import CandidaturesSpontanees from "@/pages/jobs/CandidaturesSpontanees";
import Stages from "@/pages/jobs/Stages";

// Contact sub-pages
import BureauxContact from "@/pages/contact/Bureaux";
import Transport from "@/pages/contact/Transport";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* About routes */}
        <Route path="/apropos/histoire" component={Histoire} />
        <Route path="/apropos/equipe" component={Equipe} />
        <Route path="/apropos/bureaux" component={BureauxAbout} />
        <Route path="/apropos/outils" component={Outils} />
        <Route path="/apropos/plateforme" component={Plateforme} />
        <Route path="/apropos" component={About} />
        
        {/* Activities routes */}
        <Route path="/activites/equipement-technique" component={EquipementTechnique} />
        <Route path="/activites/optimisation-energetique" component={OptimisationEnergetique} />
        <Route path="/activites/energie-durable" component={EnergieDurable} />
        <Route path="/activites/pilotage-projets" component={PilotageProjets} />
        <Route path="/activites/complementaires" component={ActivitesComplementaires} />
        <Route path="/activites" component={Activities} />
        
        {/* Projects routes */}
        <Route path="/projets/alimentaire" component={Alimentaire} />
        <Route path="/projets/centrales-energie" component={CentralesEnergie} />
        <Route path="/projets/commerce" component={Commerce} />
        <Route path="/projets/datacenter" component={Datacenter} />
        <Route path="/projets/education" component={Education} />
        <Route path="/projets/administration" component={Administration} />
        <Route path="/projets/industrie" component={Industrie} />
        <Route path="/projets/logement" component={Logement} />
        <Route path="/projets/soins" component={MaisonSoins} />
        <Route path="/projets" component={Projects} />
        
        {/* Jobs routes */}
        <Route path="/jobs/postes-ouverts" component={PostesOuverts} />
        <Route path="/jobs/candidatures" component={CandidaturesSpontanees} />
        <Route path="/jobs/stages" component={Stages} />
        <Route path="/jobs" component={Jobs} />
        
        {/* Contact routes */}
        <Route path="/contact/bureaux" component={BureauxContact} />
        <Route path="/contact/transport" component={Transport} />
        <Route path="/contact" component={Contact} />
        
        <Route path="/actualites" component={News} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
