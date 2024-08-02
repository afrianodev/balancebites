import balanceBitesImg from '../assets/balancebites.svg'

export default function Header() {
   
    return (
      <header className='text-center mt-6 mb-8'>
        <img src={balanceBitesImg} width={400} />
        <p>
        Your Daily Dose of Balanced Nutrition.
        </p>
      </header>
    );
  }