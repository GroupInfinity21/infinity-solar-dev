import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { LocateIcon } from 'lucide-react';
import { useRef, useState } from 'react';

const containerStyle = {
  height: '400px'
};

const locais = {
  'São Paulo': { lat: -23.55052, lng: -46.633308 },
  'Rio de Janeiro': { lat: -22.906847, lng: -43.172897 },
  'Brasília': { lat: -15.793889, lng: -47.882778 }
};

export default function Mapa() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
  });

  const [local, setLocal] = useState(locais['São Paulo']);
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
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                  alt=''
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Matheus Duarte</p>
                  <p className="text-sm text-gray-500">+5583987340857</p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-1 border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                  alt=''
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Matheus Duarte</p>
                  <p className="text-sm text-gray-500">+5583987340857</p>
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
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
    </div>
    
  );
}
