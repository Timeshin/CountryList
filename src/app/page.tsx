import CountryList from '@/components/CountryList/CountryList';

const Home = async () => {
  const countries = await fetch('https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json', {
    cache: 'force-cache'
  })
  .then((result) => result.json())
  .catch((error) => console.error(error));

  return (
    <div>
      <CountryList initialCountries={countries} />
    </div>
  );
}

export default Home