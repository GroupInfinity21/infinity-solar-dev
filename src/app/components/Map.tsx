import { useState } from 'react';

const locais = {
  'João Pessoa': {
    coords: { lat: -7.119495, lng: -34.845012 },
    iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.29347657792!2d-34.8815975!3d-7.14660885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1745512167380!5m2!1spt-BR!2sbr'
  },
  'São Paulo': {
    coords: { lat: -23.55052, lng: -46.633308 },
    iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.843262857482!2d-46.65657178451512!3d-23.555771467932353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c89e67be2f%3A0x5943b16f7e762d69!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1683811957280!5m2!1spt-BR!2sbr'
  },
  'Rio de Janeiro': {
    coords: { lat: -22.906847, lng: -43.172896 },
    iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9929871742364!2d-43.207500385036304!3d-22.903539685010757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd59814c73b%3A0xc01c1d7d7d37a649!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1683812043152!5m2!1spt-BR!2sbr'
  },
  'Fortaleza': {
   coords: { lat: -3.71722, lng: -38.5433 },
   iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.41990535183!2d-38.54802345!3d-3.71722025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74857c5ad5f8d%3A0x82c13b6e8cf343b2!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1683823452311!5m2!1spt-BR!2sbr'
}
};

const contatosPorCidade = {
  'João Pessoa': [
    { nome: 'Graziely Araujo', telefone: '+55 (83) 99189-5006' },
    { nome: 'José Guilherme', telefone: '+55 (83) 99418-8585' },
  ],
  'São Paulo': [
    { nome: 'Camila Santos', telefone: '+55 (11) 91234-5678' },
    { nome: 'Renato Lima', telefone: '+55 (11) 98765-4321' },
  ],
  'Rio de Janeiro': [
    { nome: 'Larissa Souza', telefone: '+55 (21) 99876-5432' },
    { nome: 'Carlos Henrique', telefone: '+55 (21) 98712-3344' },
  ],
  'Fortaleza':[
    { nome: 'Carlos Alberto', telefone: '+55 (85) 98863-4070'}
  ]
};

export default function Mapa() {
  const [cidadeAtual, setCidadeAtual] = useState<keyof typeof locais>('João Pessoa');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCidadeAtual(e.target.value as keyof typeof locais);
  };

  return (
    <div className='bg-white max-w-[1200px] mx-auto px-4 mb-6'>
      <div className='flex flex-col md:flex-row'>
        <div className='mb-6 md:mb-0 w-full md:w-[50%] p-3'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xl'>Selecione um estado</label>
            <select
              onChange={handleChange}
              className='w-full h-[45px] bg-white border border-[#DCDCDC] rounded-md mb-2 p-2.5 text-[14px]'
            >
              {Object.keys(locais).map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>

          <div>
            {contatosPorCidade[cidadeAtual].map((contato, index) => (
              <div
                key={index}
                className='flex items-center gap-4 p-1 border border-gray-200 rounded-lg shadow-sm bg-white mb-2'
              >
                <img
                  src='https://preview.redd.it/l0ergarfzst61.png?width=320&crop=smart&auto=webp&s=cb9284e08e27c866410605d040de030546478ab9'
                  alt=''
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div>
                  <p className='text-sm font-semibold'>{contato.nome}</p>
                  <p className='text-sm text-gray-500'>{contato.telefone}</p>
                </div>
              </div>
            ))}
          </div>

          <br />
          <hr />
          <div>
            <span className='text-xs p-1'>
              A Infinity Solar conta com representantes em diversas regiões do Brasil. Selecione um estado acima para visualizar nossas unidades e encontrar o representante mais próximo de você.
            </span>
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <iframe
            src={locais[cidadeAtual].iframe}
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </div>
  );
}
