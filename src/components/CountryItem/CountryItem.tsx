import { Country } from '@/types/common.types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, memo } from 'react';

interface CountryItemProps {
  country: Country
  handleRemove: (code: string) => void
}

const CountryItem: FC<CountryItemProps> = ({ country: { iso_code2, name_ru }, handleRemove }) => (
  <motion.li
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.5 }}
    layout
    style={{
      display: 'flex',
      color: 'black',
      alignItems: 'center',
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px'
    }}
  >
    <Image
      src={`https://flagcdn.com/w40/${iso_code2.toLowerCase()}.png`}
      width={35}
      height={25}
      quality={100}
      alt={name_ru}
      style={{ marginRight: '10px' }}
    />
    <span style={{ flexGrow: 1 }}>{name_ru}</span>
    <button type='button' style={{ color: 'black', cursor: 'pointer' }} onClick={() => handleRemove(iso_code2)}>Delete</button>
  </motion.li>
)

export default memo(CountryItem)
