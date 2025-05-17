'use client';
import SearchForm from '@/components/SearchForm';
import { getData } from '@/lib/api';
import Image from 'next/image';

import { useEffect } from 'react';


export default function Home() {
  return (
    <div>
      <SearchForm></SearchForm>
    </div>
  );
}
