import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { LocateIcon } from 'lucide-react';
import { useRef, useState } from 'react';

const containerStyle = {
  height: '400px'
};

const locais = {
 'João Pessoa': { lat: -23.55052, lng: -46.633308 }
};

export default function Mapa() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
  });

  const [local, setLocal] = useState(locais['João Pessoa']);
  const mapRef = useRef<google.maps.Map | null>(null);

  if (!isLoaded) return <div>Carregando mapa...</div>;

  type Cidade = keyof typeof locais;

  const handleLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const options = {
    disableDefaultUI: true, 
    zoomControl: true,
    styles: [ 
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cidade = e.target.value as Cidade;
    const novoLocal = locais[cidade];
    setLocal(novoLocal);

    if (mapRef.current) {
      mapRef.current.panTo(novoLocal); 
    }
  };
  return (
    
    <div className=' bg-white max-w-[1200px] mx-auto px-4 mb-6'>
        <div className='flex flex-col md:flex-row'>
        <div className='mb-6 md:mb-0 w-full md:w-[50%] p-3'>
             <div className='flex flex-col'>
                <label className='mb-2 text-xl'>
                  Selecione um estado
                </label>
                <select onChange={handleChange}
                className='w-full h-[45px] bg-white border border-[#DCDCDC] rounded-md mb-2 p-2.5 text-[14px] tracking-[0]'
                >
                    {Object.keys(locais).map((cidade) => (
                    <option key={cidade} value={cidade}>{cidade}</option>
                    ))}
                </select>
             </div>
             <div>
             <div
                className="flex items-center gap-4 p-1 border border-gray-200 rounded-lg shadow-sm bg-white mb-2"
              >
                <img
                  src="https://preview.redd.it/l0ergarfzst61.png?width=320&crop=smart&auto=webp&s=cb9284e08e27c866410605d040de030546478ab9"
                  alt=''
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Maurício Sant'anna</p>
                  <p className="text-sm text-gray-500">+55 (83) 98711-6222</p>
                </div>
              </div>

             </div>
             <br/>
              <hr/>
            <div>
              <span className='text-xs p-1'>
                A Infinity Solar conta com representantes em diversas regiões do Brasil.
                Selecione um estado acima para visualizar nossas unidades e encontrar o representante mais próximo de você.
              </span>
            </div>
        </div>
          <div className='w-full md:w-1/2'>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.29347657792!2d-34.8815975!3d-7.14660885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1745512167380!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </div>
    </div>
    
  );
}
