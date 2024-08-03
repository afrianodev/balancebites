import balanceBitesImg from '../assets/balancebites.svg'

export default function Header() {
   
    return (
      <header className='text-center mt-4 mb-4 sm:mt-6 sm:mb-8'>
        <img src={balanceBitesImg} className='w-[270px] sm:w-[400px]'/>
        <p className='text-xs sm:text-base'>
        Your Daily Dose of Balanced Nutrition.
        </p>
      </header>
    );
  }