import React from 'react';
import { useTranslation } from '@/app/i18n/client';

const SelfDescription = ({lng}) => {
  const { t } = useTranslation(lng, 'common');

  return (
    <div className='p-4 space-y-4'>
      <div className='font-fraunces font-black text-purple text-3xl'>{t('greeting')}</div>
      <div>{t('abt2')}</div>
    </div>
  );
};

export default SelfDescription;