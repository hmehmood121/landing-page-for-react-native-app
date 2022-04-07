import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";


const App = () => {
  return (
    <>
    
      <SectionWrapper 
      title = "Your NFT store"
      description= "Join us to create endless NFT's that change the world"
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"

      />
      <SectionWrapper 
      title = "Best Marketplace in the world"
      description= "Esperience the best with us to see a beautiful world"
      mockupImg={assets.homeCards}
      reverse

      />
      <Features />
      <SectionWrapper 
      title = "Deployment"
      description= "Build using expo which runs on all IOS and Android Systems"
      mockupImg={assets.feature}
      reverse

      />
      <SectionWrapper 
      title = "Build this for my Portfolio"
      description= "I develop this app and this beautiful looking landing page to show my skills so I can become a strong candidate"
      mockupImg={assets.mockup}
      banner="banner02"

      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with Love {" "}
        </p>
        <span className="bold">Hasan Mehmood</span>
      </div>
    </>
  );
}

export default App;
