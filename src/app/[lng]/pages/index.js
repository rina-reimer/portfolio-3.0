import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'about',
        'work'
      ], null, ['en', 'de'])),
      // Will be passed to the page component as props
    },
  }
}