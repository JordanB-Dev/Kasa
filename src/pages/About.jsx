import Banner from '../components/Banner'
import DropDown from '../components/Dropdown'

const About = () => {
  return (
    <div className="container">
      <Banner />
      <div className="about">
        <DropDown
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
          conformes aux logements, et toutes les informations sont régulièrement vérifiéespar nos équipes."
        />
        <DropDown
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportementdiscriminatoire ou de perturbation du voisinage entraînera une exclusion de
          notre plateforme."
        />
        <DropDown
          title="Service"
          description="NNos équipes se tiennent à votre disposition pour vous fournir une expérienceparfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <DropDown
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
          voyageurs, chaque logement correspond aux critères de sécurité établis par nosservices. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à
          nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  )
}

export default About
