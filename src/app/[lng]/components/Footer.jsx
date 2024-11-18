"use client"
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n/client.js'

export default function Footer({ lng }) {
  const { t } =  useTranslation(lng, 'common');
  console.log("Rendering Footer:", lng);
  return (
    <footer style={{ marginBottom: 50 }}>
      {/* <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            {/* change to be whatever path user is currently on *}
            <Link href={`/${l}`}>
              {l}
            </Link>
          </span>
        )
      })} */}
    </footer>
  )
}