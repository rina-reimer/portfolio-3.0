import React from 'react';
import { useTranslation } from '@/app/i18n/client.js';

const BasicInfo = ({lng}) => {
  const { t } = useTranslation(lng, 'common');
  
  return (
    <div className='flex flex-col h-full p-4 space-y-3.5'>
      {/* school */}
      <div>
        {t('school')}
        <div className='border-2 border-navy bg-yellow p-2'>
          {t('curr-school')}
        </div>
      </div>
      {/* school */}
      <div>
        {t('grad-year')}
        <div className='border-2 border-navy bg-yellow p-2'>
          {t('grad-date')}
        </div>
      </div>

      {/* school */}
      <div>
        {t('major')}
        <div className='border-2 border-navy bg-yellow p-2'>
          {t('curr-major')}
        </div>
      </div>

      {/* school */}
      <div>
        {t('loc')}
        <div className='border-2 border-navy bg-yellow p-2'>
          {t('curr-loc')}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;