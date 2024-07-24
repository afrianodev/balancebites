import balanceBitesImg from '../assets/balancebites.svg'

export default function Header() {
   
    return (
      <header>
        <img src={balanceBitesImg} width={400} />
        <p>
        Your Daily Dose of Balanced Nutrition.
        </p>
      </header>
    );
  }