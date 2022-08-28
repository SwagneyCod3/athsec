import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
    
      <title>{title}</title>
      <link rel="shortcut icon" href="/Icons/índice.jpg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    
    </Head>
    
    <Head>
    
      <meta name="title" content="ATHSec">
      <meta name="description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada">

      <meta property="og:type" content="website">
      <meta property="og:url" content="https://athsec.org/">
      <meta property="og:title" content="ATHSec">
      <meta property="og:description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada">
      <meta property="og:image" content="/Icons/ATHSec-HomePageMeta.jpg">

      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="https://athsec.org/">
      <meta property="twitter:title" content="ATHSec">
      <meta property="twitter:description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada">
      <meta property="twitter:image" content="/Icons/ATHSec-HomePageMeta.jpg">
         
    </Head>
  );
}

export default Header
