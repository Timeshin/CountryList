'use client';

import { FC, useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Country } from '@/types/common.types';
import CountryItem from '../CountryItem/CountryItem';

interface CountryListProps {
  initialCountries: Country[]
}

const CountryList: FC<CountryListProps> = ({ initialCountries }) => {
  const [countries, setCountries] = useState(initialCountries);

  const handleRemove = useCallback((code: string) => {
    setCountries((prevCountries) => prevCountries.filter((prevCountry) => prevCountry.iso_code2 !== code));
  }, []);

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <AnimatePresence>
        {countries.map((country) => <CountryItem key={country.iso_code2} handleRemove={handleRemove} country={country} />)}
      </AnimatePresence>
    </ul>
  );
}

export default CountryList
